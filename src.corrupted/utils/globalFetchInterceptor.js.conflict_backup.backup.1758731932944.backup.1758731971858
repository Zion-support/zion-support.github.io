// Global fetch interceptor for handling API requests
<<<<<<< HEAD
=======
const originalFetch = window.fetch;

window.fetch = async function(...args) {
  try {
    const response = await originalFetch.apply(this, args);
    
    // Add any global response handling here
    if (!response.ok) {
      console.warn(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default {};
>>>>>>> cursor/create-and-deploy-new-content-c963
