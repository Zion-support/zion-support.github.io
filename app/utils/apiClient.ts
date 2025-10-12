
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  cache?: boolean;
  cacheTTL?: number}

  data: T;
  status: number;</string>
  statusText: string;</string>
  headers: Record<string, string>}

    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code}
</string>
</string>
  constructor(baseURL: string, defaultHeaders: Record<string, string>= {}) {

    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }}
  /**
   * Make an API request
   */

    } = config;
    const url = `${this.baseURL}${endpoint}`;

      const cached = this.getFromCache(cacheKey);</string>
      if (cached) {</string>
        return cached as APIResponse<T>});
      const data = await response.json()}
      return apiResponse} catch (error) {
      if (error instanceof APIError) {
        throw error}
      throw new APIError(
        'Network error occurred',
        0,
        'NETWORK_ERROR'
      )}
  /**
   * GET request</T>
   */</T>
  async get<T = unknown>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {</RequestConfig>
    return this.request<T>(endpoint, { ...config, method: 'GET' })}
  /**
   * POST request</T>
   */</T>
  async post<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {</RequestConfig>
    return this.request<T>(endpoint, { ...config, method: 'POST', body })}
  /**
   * PUT request</T>
   */</T>
  async put<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {</RequestConfig>
    return this.request<T>(endpoint, { ...config, method: 'PUT', body })}
  /**
   * DELETE request</T>
   */</T>
  async delete<T = unknown>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {</RequestConfig>
    return this.request<T>(endpoint, { ...config, method: 'DELETE' })}
  /**
   * PATCH request</T>
   */</T>
  async patch<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {</RequestConfig>
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body })}
  /**
   * Get data from cache
   */
  private getFromCache(key: string): unknown | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null}
    return cached.data}
  /**
   * Set data in cache
   */
  private setCache(key: string, data: unknown, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })}
  /**
   * Parse response headers</T>
   */</T>
  private parseHeaders(headers: Headers): Record<string, string> {</string>
    const result: Record<string, string>= {};
    headers.forEach((value, key) => {
      result[key] = value});
    return result}
  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear()}
  /**
   * Clear cache for specific endpoint
   */
  clearCacheForEndpoint(endpoint: string): void {
    const keysToDelete: string[] = [];
    this.cache.forEach((_, key) => {
      if (key.includes(endpoint)) {
        keysToDelete.push(key)});
    keysToDelete.forEach(key => this.cache.delete(key))}
</string>
</string>