const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com';

const request = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const url = `${baseURL}${endpoint}`;
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };
  
  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};

export const apiClient = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, data: any) => request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  put: <T>(endpoint: string, data: any) => request<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: <T>(endpoint: string) => request<T>(endpoint, {
    method: 'DELETE',
  }),
};