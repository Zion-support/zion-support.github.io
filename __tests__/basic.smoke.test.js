<<<<<<< HEAD
describe('Basic Smoke Tests', () => {
  it('should run basic tests', () => {
    expect(1 + 1).toBe(2);
  });

  it('should have access to testing utilities', () => {
    expect(typeof expect).toBe('function');
  });

  it('should be able to test async operations', async () => {
    const result = await Promise.resolve('test');
    expect(result).toBe('test');
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Smoke Tests', () => {
  test('App renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('Application builds successfully', () => {
    expect(true).toBe(true);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  });
});