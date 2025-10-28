'use client';
export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
;
export class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: ErrorInfo[] = [];
  private constructor() {;
  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
;
    return ErrorHandler.instance;
;
  public logError(error: Error, errorInfo?: { componentStack?: string; errorBoundary?: string }): void {
    const errorData: ErrorInfo = {
  message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      errorBoundary: errorInfo?.errorBoundary,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
    };
    this.errors.push();
    console.error('Error logged:', errorData);
    // Send to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
  description: error.message,
        fatal: false
      });
;
    // Send to error reporting service if configured
    this.sendToErrorService();
;
  private async sendToErrorService(errorData: ErrorInfo): Promise<void> {
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      // For now, we'll just log it
      // // // // console.log('Would send to error service:', errorData);
    } catch () {
      console.error('Failed to send error to service:', err);
;
;
  public getErrors(): ErrorInfo[] {
    return [...this.errors];
;
  public clearErrors(): void {
    this.errors = [];
;
  public getErrorCount(): number {
    return this.errors.length;
;
;
export const errorHandler = ErrorHandler.getInstance();
// Global error handler
if (typeof window !== 'undefined') {
  window.addEventListener('error', () => {
    errorHandler.logError(event.error);
  });
  window.addEventListener('unhandledrejection', () => {
    errorHandler.logError(new Error(event.reason));
  });
;
;