// Screen Reader Support Utility
export class ScreenReaderSupport {
  private static instance: ScreenReaderSupport;
  private liveRegion: HTMLElement | null = null;
  
  static getInstance(): ScreenReaderSupport {
    if (!ScreenReaderSupport.instance) {
      ScreenReaderSupport.instance = new ScreenReaderSupport();
    }
    return ScreenReaderSupport.instance;
  }
  
  createLiveRegion(): HTMLElement {
    if (!this.liveRegion) {
      this.liveRegion = document.createElement('div');
      this.liveRegion.setAttribute('aria-live', 'polite');
      this.liveRegion.setAttribute('aria-atomic', 'true');
      this.liveRegion.className = 'sr-only';
      this.liveRegion.style.cssText = `
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      `;
      document.body.appendChild(this.liveRegion);
    }
    return this.liveRegion;
  }
  
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = this.createLiveRegion();
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.textContent = message;
    
    // Clear the message after a short delay
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
  
  enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const element = input as HTMLElement;
      const label = document.querySelector(`label[for="${element.id}"]`);
      
      if (!label && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);
        }
      }
      
      // Add required indicator
      if (element.hasAttribute('required')) {
        const requiredText = element.getAttribute('aria-label') || element.getAttribute('placeholder') || 'This field';
        element.setAttribute('aria-label', `${requiredText} (required)`);
      }
    });
  }
  
  enhanceImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const element = img as HTMLImageElement;
      
      if (!element.alt && !element.getAttribute('aria-label')) {
        if (element.getAttribute('role') === 'presentation') {
          element.setAttribute('alt', '');
        } else {
          element.setAttribute('alt', 'Image');
        }
      }
    });
  }
  
  initialize(): void {
    this.createLiveRegion();
    this.enhanceFormLabels();
    this.enhanceImages();
    
    // Enhance dynamic content
    const observer = new MutationObserver(() => {
      this.enhanceFormLabels();
      this.enhanceImages();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

export const screenReaderSupport = ScreenReaderSupport.getInstance();
