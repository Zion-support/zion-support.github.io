'use client';

export const testConfig = {
  timeout: 3000,
  retries: 3,
  baseUrl: 'http://localhost:3000',
};

export const waitFor = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const mockFetch = (data: any) => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
};