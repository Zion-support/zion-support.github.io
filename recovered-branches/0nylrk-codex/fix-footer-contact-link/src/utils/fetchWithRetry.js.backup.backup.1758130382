<<<<<<< HEAD
// Fetch with retry utility for robust API calls
// Fetch with retry utility
export const fetchWithRetry = async (url, options = {}, maxRetries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      }
      // If not the last attempt, wait and retry
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay * attempt));
        continue;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      // If this is the last attempt, throw the error
      if (attempt === maxRetries) {
        throw error;
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  };
};

export default fetchWithRetry;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
