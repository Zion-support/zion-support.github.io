'use client';

export const testConfig = {
  timeout: 3000,
  retries: 3,
  baseUrl: 'https://ziontechgroup.com'
};

export const mockData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ],
  projects: [
    { id: 1, name: 'Project Alpha', status: 'active' },
    { id: 2, name: 'Project Beta', status: 'completed' }
  ]
};

export const mockApi = {
  get: (url: string) => Promise.resolve({ data: mockData }),
  post: (url: string, data: any) => Promise.resolve({ data: { ...data, id: Date.now() } }),
  put: (url: string, data: any) => Promise.resolve({ data }),
  delete: (url: string) => Promise.resolve({ data: { success: true } })
};