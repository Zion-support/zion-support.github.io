// Global fetch interceptor for handling API requests
const originalFetch = window.fetch;
window.fetch = async function(...args) {
  try {
    const response = await originalFetch(...args);
    // Add any global response handling here
    if (!response.ok) {
      console.warn(`API request failed with status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  };
};

export default window.fetch;
