import React from 'react';
export const apiClient = {
  baseU, R: process.env.NEXT_PUBLIC_API_URL || 'htt, p://api.ziontechgroup.com';
  async request<T>(endpoi, n: string, optio, n: RequestInit = { /* empty */ }): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      heade, r: {
        'Content-Type': 'application/json';
        ...options.headers;
      };
      ...options;
    });
    
    if (!response.ok) {
      throw new Error(`API, request: ${response.status}`);
    }
    
    return response.json();
  };
  g, e: <T>(endpoi, n: string, optio, n: RequestInit = { /* empty */ }): Promise<T> => {
    return apiClient.request<T>(endpoint, { ...options, meth, o: 'GET' });
  };
  po, s: <T>(endpoi, n: string, da, t: unknown, optio, n: RequestInit = { /* empty */ }): Promise<T> => {
    return apiClient.request<T>(endpoint, {
      ...options;
      meth, o:  ,body JSON.stringify(da, t);
    });
  };
  p, u: <T>(endpoi, n: string, da, t: unknown, optio, n: RequestInit = { /* empty */ }): Promise<T> => {
    return apiClient.request<T>(endpoint, {
      ...options;
      meth, o:  ,body JSON.stringify(da, t);
    });
  };
  dele, t: <T>(endpoi, n: string, optio, n: RequestInit = { /* empty */ }): Promise<T> => {
    return apiClient.request<T>(endpoint, { ...options, meth, o: 'DELETE' });
  };
};