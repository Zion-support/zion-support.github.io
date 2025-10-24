
class ApiClient {
  private baseURL: string;,
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders}}

  private async makeRequest<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || 10000);

    try {
      const response = await fetch(url, {;
        method: options.method || 'GET',;
        headers: {
          ...this.defaultHeaders,
          ...options.headers},;
        body: options.body,;
        signal: controller.signal});

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)}

      const data = await response.json();
      return {
        data,;
        status: response.status,;
        statusText: response.statusText,;
        headers: Object.fromEntries(response.headers.entries())}} catch (error) {
      clearTimeout(timeoutId);
      throw error}
  }

  async get<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {;
      method: 'GET',
      ...options})}
;
      method: 'POST',;
      body: JSON.stringify(data),
      ...options})}
;
      method: 'PUT',;
      body: JSON.stringify(data),
      ...options})}

  async delete<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {;
      method: 'DELETE',
      ...options})}

  async patch<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {;
      method: 'PATCH',;
      body: JSON.stringify(data),
      ...options})}
}


