interface MimeTypeMapping {
  [key: string]: string;
}

class MimeTypeFallback {
  private static mimeTypes: MimeTypeMapping = {
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.htm': 'text/html',
    '.xml': 'application/xml',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.bmp': 'image/bmp',
    '.tiff': 'image/tiff',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.tar': 'application/x-tar',
    '.gz': 'application/gzip',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogg': 'video/ogg',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.flac': 'audio/flac'
  };

  private fallbackUrls: Map<string, string> = new Map();
  private cdnFallbacks = [
    'https://cdn.jsdelivr.net',
    'https://unpkg.com',
    'https://cdnjs.cloudflare.com'
  ];

  constructor() {
    this.initializeFallbacks();
  }

  private initializeFallbacks(): void {
    // Initialize fallback URLs for common resources
    this.fallbackUrls.set('react', 'https://unpkg.com/react@18/umd/react.production.min.js');
    this.fallbackUrls.set('react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
    this.fallbackUrls.set('lodash', 'https://unpkg.com/lodash@4.17.21/lodash.min.js');
  }

  getMimeType(filename: string): string {
    const extension = this.getFileExtension(filename);
    return MimeTypeFallback.mimeTypes[extension] || 'application/octet-stream';
  }

  private getFileExtension(filename: string): string {
    const lastDot = filename.lastIndexOf('.');
    return lastDot !== -1 ? filename.substring(lastDot) : '';
  }

  getFallbackUrl(moduleName: string): string | null {
    return this.fallbackUrls.get(moduleName) || null;
  }

  addFallbackUrl(moduleName: string, url: string): void {
    this.fallbackUrls.set(moduleName, url);
  }

  getCdnFallbacks(): string[] {
    return [...this.cdnFallbacks];
  }
}

export default MimeTypeFallback;