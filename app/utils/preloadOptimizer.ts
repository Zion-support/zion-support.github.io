// Preload Optimizer utility
export interface PreloadOptions {
  priority: 'high' | 'low';
  as: 'script' | 'style' | 'image' | 'font';
  crossorigin?: boolean;
}

export class PreloadOptimizer {
  private static instance: PreloadOptimizer;
  private preloadedResources: Set<string> = new Set();

  static getInstance(): PreloadOptimizer {
    if (!PreloadOptimizer.instance) {
      PreloadOptimizer.instance = new PreloadOptimizer();
    }
    return PreloadOptimizer.instance;
  }

  preloadResource(href: string, options: PreloadOptions): void {
    if (this.preloadedResources.has(href)) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = options.as;
    
    if (options.priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    
    if (options.crossorigin) {
      link.crossOrigin = 'anonymous';
    }

    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  preloadScript(src: string, priority: 'high' | 'low' = 'low'): void {
    this.preloadResource(src, { priority, as: 'script' });
  }

  preloadStyle(href: string, priority: 'high' | 'low' = 'high'): void {
    this.preloadResource(href, { priority, as: 'style' });
  }

  preloadImage(src: string, priority: 'high' | 'low' = 'low'): void {
    this.preloadResource(src, { priority, as: 'image' });
  }

  preloadFont(href: string, priority: 'high' | 'low' = 'high'): void {
    this.preloadResource(href, { priority, as: 'font', crossorigin: true });
  }

  getPreloadedResources(): string[] {
    return Array.from(this.preloadedResources);
  }

  clearPreloadedResources(): void {
    this.preloadedResources.clear();
  }
}

export default PreloadOptimizer;