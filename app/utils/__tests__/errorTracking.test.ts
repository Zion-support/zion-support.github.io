import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import {
  trackError,
  getErrorStatistics,
  clearErrorHistory,
  addErrorListener,
  removeErrorListener,
  ErrorCategory,
  ErrorSeverity,
} from '../errorTracking';

describe('errorTracking', () => {
  beforeEach(() => {
    clearErrorHistory();
  });

  describe('trackError', () => {
    it('should track errors', () => {
      const error = new Error('Test error');
      trackError(error, {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.Medium,
      });

      const stats = getErrorStatistics();
      expect(stats.total).toBe(1);
      expect(stats.byCategory[ErrorCategory.Runtime]).toBe(1);
      expect(stats.bySeverity[ErrorSeverity.Medium]).toBe(1);
    });

    it('should deduplicate identical errors', () => {
      const error = new Error('Duplicate error');
      
      trackError(error, {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.Low,
      });
      
      trackError(error, {
        category: ErrorCategory.Runtime,
        severity: ErrorSeverity.Low,
      });

      const stats = getErrorStatistics();
      expect(stats.total).toBe(1);
      expect(stats.errors[0].occurrences).toBe(2);
    });

    it('should track different error categories', () => {
      const networkError = new Error('Network error');
      const validationError = new Error('Validation error');
      const authError = new Error('Auth error');

      trackError(networkError, { category: ErrorCategory.Network });
      trackError(validationError, { category: ErrorCategory.Validation });
      trackError(authError, { category: ErrorCategory.Authorization });

      const stats = getErrorStatistics();
      expect(stats.total).toBe(3);
      expect(stats.byCategory[ErrorCategory.Network]).toBe(1);
      expect(stats.byCategory[ErrorCategory.Validation]).toBe(1);
      expect(stats.byCategory[ErrorCategory.Authorization]).toBe(1);
    });

    it('should track different error severities', () => {
      trackError(new Error('Low severity'), { severity: ErrorSeverity.Low });
      trackError(new Error('Medium severity'), { severity: ErrorSeverity.Medium });
      trackError(new Error('High severity'), { severity: ErrorSeverity.High });
      trackError(new Error('Critical severity'), { severity: ErrorSeverity.Critical });

      const stats = getErrorStatistics();
      expect(stats.bySeverity[ErrorSeverity.Low]).toBe(1);
      expect(stats.bySeverity[ErrorSeverity.Medium]).toBe(1);
      expect(stats.bySeverity[ErrorSeverity.High]).toBe(1);
      expect(stats.bySeverity[ErrorSeverity.Critical]).toBe(1);
    });

    it('should include context information', () => {
      const error = new Error('Context test');
      const context = {
        userId: '123',
        action: 'test-action',
        url: '/test-page',
      };

      trackError(error, { context });

      const stats = getErrorStatistics();
      expect(stats.errors[0].context).toEqual(context);
    });
  });

  describe('getErrorStatistics', () => {
    it('should return empty statistics when no errors', () => {
      const stats = getErrorStatistics();
      expect(stats.total).toBe(0);
      expect(stats.errors.length).toBe(0);
    });

    it('should calculate correct statistics', () => {
      trackError(new Error('Error 1'), { category: ErrorCategory.Network });
      trackError(new Error('Error 2'), { category: ErrorCategory.Network });
      trackError(new Error('Error 3'), { category: ErrorCategory.Validation });

      const stats = getErrorStatistics();
      expect(stats.total).toBe(3);
      expect(stats.byCategory[ErrorCategory.Network]).toBe(2);
      expect(stats.byCategory[ErrorCategory.Validation]).toBe(1);
    });
  });

  describe('clearErrorHistory', () => {
    it('should clear all errors', () => {
      trackError(new Error('Error 1'));
      trackError(new Error('Error 2'));
      trackError(new Error('Error 3'));

      expect(getErrorStatistics().total).toBe(3);

      clearErrorHistory();

      const stats = getErrorStatistics();
      expect(stats.total).toBe(0);
      expect(stats.errors.length).toBe(0);
    });
  });

  describe('error listeners', () => {
    it('should notify listeners when errors occur', () => {
      const listener = jest.fn();
      addErrorListener(listener);

      const error = new Error('Test error');
      trackError(error, { category: ErrorCategory.Runtime });

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Test error',
        metadata: expect.objectContaining({
          category: ErrorCategory.Runtime,
        }),
      }));
    });

    it('should remove listeners', () => {
      const listener = jest.fn();
      addErrorListener(listener);

      trackError(new Error('Error 1'));
      expect(listener).toHaveBeenCalledTimes(1);

      removeErrorListener(listener);
      trackError(new Error('Error 2'));
      
      // Should still be 1, not 2
      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('should support multiple listeners', () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();

      addErrorListener(listener1);
      addErrorListener(listener2);

      trackError(new Error('Test error'));

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);
    });
  });

  describe('error categorization', () => {
    it('should categorize network errors', () => {
      const error = new Error('Failed to fetch');
      trackError(error, { category: ErrorCategory.Network });

      const stats = getErrorStatistics();
      expect(stats.byCategory[ErrorCategory.Network]).toBe(1);
    });

    it('should categorize validation errors', () => {
      const error = new Error('Invalid input');
      trackError(error, { category: ErrorCategory.Validation });

      const stats = getErrorStatistics();
      expect(stats.byCategory[ErrorCategory.Validation]).toBe(1);
    });

    it('should categorize authorization errors', () => {
      const error = new Error('Unauthorized');
      trackError(error, { category: ErrorCategory.Authorization });

      const stats = getErrorStatistics();
      expect(stats.byCategory[ErrorCategory.Authorization]).toBe(1);
    });
  });
});
