<<<<<<< HEAD
// API client utilities

export function apiClient() {
  return {
    get: async (url: string) => {
      const response = await fetch(url);
      return response.json();
    },
    post: async (url: string, data: any) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };
}
=======
// api Client
export const apiclient = {
  // Utility functions will be implemented here
  init: () => {
    console.log('api Client initialized');
  }
};

export default apiclient;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
