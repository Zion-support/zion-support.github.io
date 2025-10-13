// Global error handler for resource loading failures;
export class ResourceErrorHandler {
  private static instance: ResourceErrorHandler;
  private failedResources: Set<string> = new Set();
  static getInstance(): ResourceErrorHandler {
    if (!ResourceErrorHandler.instance) {
      ResourceErrorHandler.instance = new ResourceErrorHandler();
    }
    return ResourceErrorHandler.instance;
  }
  constructor() {
    this.setupGlobalErrorHandlers();
  }
  private setupGlobalErrorHandlers(): void {
    // Handle image loading errors;
    window.addEventListener('error', (event) => {
      if (event.target instanceof HTMLImageElement) {
        this.handleImageError(event.target);
      }
    }, true);
    // Handle fetch errors;
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      try {
        const response = await originalFetch(input, init);
        if (!response.ok && response.status === 401) {
          this.handleFetchError(input.toString(), response.status);
        }
        return response;
      } catch (error) {
        this.handleFetchError(input.toString(), 0);
        throw error;
      }
    };
  }
  private handleImageError(img: HTMLImageElement): void {
    const src = img['src'];
    // Check if it's a Cloudinary 401 error;
    if (src.includes('res.cloudinary.com') && src.includes('dpfhynunl')) {
      console.warn(`Cloudinary image failed to load: ${src}`);
      this.failedResources.add(src);
      // Replace with a fallback image or placeholder;
      img['src'] = '/images/placeholder.jpg';
      img.alt = 'Image not available';
      img.classList.add('error-placeholder');
    }
  }
  private handleFetchError(url: string, status: number): void {
    if (url.includes('res.cloudinary.com') && url.includes('dpfhynunl')) {
      console.warn(`Cloudinary fetch failed (${status}): ${url}`);
      this.failedResources.add(url);
    }
  }
  public getFailedResources(): string[] {
    return Array.from(this.failedResources);
  }
  public clearFailedResources(): void {
    this.failedResources.clear();
  }
}
// Initialize the error handler;
export const resourceErrorHandler = ResourceErrorHandler.getInstance();
// Export for use in components;
export default resourceErrorHandler;