'use client';
/**
 * Request Middleware System
 * Provides middleware for handling requests and responses
 */
export type NextFunction = () => Promise<unknown> | unknown;
export interface MiddlewareContext {
  request: {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: unknown;
  };
  response?: {
    status: number;
    data?: unknown;
    headers?: Record<string, string>;
  metadata: Record<string, unknown>;
}
export type Middleware = (
  context: MiddlewareContext,
  next: NextFunction
) => Promise<unknown> | unknown;
 * Middleware executor
export class MiddlewareExecutor {
  private middlewares: Middleware[] = [];
   * Add middleware to the chain
  use(middleware: Middleware): this {
    this.middlewares.push(middleware);
    return this;
   * Execute middleware chain
  async execute(context: MiddlewareContext): Promise<unknown> {
    let index = 0;
    const next = async () => {
      if (index >= this.middlewares.length) {
        return context.response?.data;
      const middleware = this.middlewares[index++];
      return await middleware(context, next);
    return await next();
 * Logging middleware
export const loggingMiddleware: Middleware = async (context, next) => {
  const startTime = Date.now();
export const _loggingMiddleware: Middleware = async (context, next) => {
  const _startTime = Date.now();
  logger.info('Request started', 'RequestMiddleware', {
    component: 'RequestMiddleware',
    method: context.request.method,
    url: context.request.url
  });
  try {
    const result = await next();
    const duration = Date.now() - startTime;
    logger.info('Request completed', 'RequestMiddleware', {
      url: context.request.url,
      status: context.response?.status,
      duration
    return result;
  } catch (error) {
    logger.error('Request failed', error as Error, 'RequestMiddleware', {
    throw error;
 * Authentication middleware
export const authMiddleware: Middleware = async (context, next) => {
  const token = getAuthToken();
  if (token) {
    context.request.headers['Authorization'] = `Bearer ${token}`;
 * Get authentication token from storage
function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
 * Error handling middleware
export const errorHandlingMiddleware: Middleware = async (context, next) => {
    // Transform error into a standardized format
    const standardError = {
      message: error instanceof Error ? error.message : 'Unknown error',
      status: context.response?.status || 500,
      method: context.request.method
    logger.error('Request error handled', error as Error, 'ErrorHandlingMiddleware', {
      component: 'ErrorHandlingMiddleware',
      ...standardError
    throw standardError;
 * Rate limiting middleware
export const rateLimitMiddleware = (maxRequests: number, windowMs: number): Middleware => {
  const requests = new Map<string, number[]>();
  return async (context, next) => {
    const key = context.request.url;
    const now = Date.now();
    const timestamps = requests.get(key) || [];
    // Remove expired timestamps
    const validTimestamps = timestamps.filter(t => now - t < windowMs);
    if (validTimestamps.length >= maxRequests) {
      throw new Error('Rate limit exceeded');
    validTimestamps.push(now);
    requests.set(key, validTimestamps);
 * Caching middleware
export const cachingMiddleware = (ttl: number): Middleware => {
  const cache = new Map<string, { data: unknown; timestamp: number }>();
    if (context.request.method !== 'GET') {
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < ttl) {
      logger.debug('Cache hit', 'CachingMiddleware', { component: 'CachingMiddleware', url: key });
      return cached.data;
    cache.set(key, {
      data: result,

      timestamp: Date.now()
 * Retry middleware
export const retryMiddleware = (maxRetries: number,

      delay: number): Middleware => {
    let lastErro,

      r: r, retrying (${attempt + 1}/${maxRetries})`,
            'RetryMiddleware',
            {
              component: 'RetryMiddleware',
          );
          await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt)));
    throw lastError;
 * Timeout middleware
export const timeoutMiddleware = (timeoutMs: number): Middleware => {
    return await Promise.race([
      next(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), timeoutMs)),
    ]);
 * Request transformation middleware
export const transformRequestMiddleware = (
  transformer: (context: MiddlewareContext) => MiddlewareContext | Promise<MiddlewareContext>
): Middleware => {
    const transformedContext = await transformer(context);
    Object.assign(context, transformedContext);
 * Response transformation middleware
export const transformResponseMiddleware = (
  transformer: (data: unknown) => unknown | Promise<unknown>
    return await transformer(result);
 * Create default middleware chain
export function createDefaultMiddlewareChain(): MiddlewareExecutor {
  const executor = new MiddlewareExecutor();
  return executor
    .use(loggingMiddleware)
    .use(errorHandlingMiddleware)
    .use(authMiddleware)
    .use(timeoutMiddleware(30000))
    .use(retryMiddleware(2, 1000));
export default {
  MiddlewareExecutor,
  loggingMiddleware,
  authMiddleware,
  errorHandlingMiddleware,
  rateLimitMiddleware,
  cachingMiddleware,
  retryMiddleware,
  timeoutMiddleware,
  transformRequestMiddleware,
  transformResponseMiddleware,
  createDefaultMiddlewareChain
