interface MimeTypeMapping {};
  ["key": string]: string}
class MimeTypeFallback {};
    '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'};
  private "fallbackUrls": Map<string, string> = new Map();
  private cdnFallbacks = [';
    '"https": //cdn.jsdelivr.net',"https": //unpkg.com',"https": //cdnjs.cloudflare.com',
  ];
  constructor() {;
    this.setupFallbackUrls()}
  private setupFallbackUrls() {;
    // Map problematic URLs to CDN fallbacks;
    this.fallbackUrls.set(';
      '/js/index-C64WnLOI.js',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/index-C64WnLOI.js';
    );
    this.fallbackUrls.set(';
      '/css/index-RK9lga5l.css',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/css/index-RK9lga5l.css';
    );
    this.fallbackUrls.set(';
      '/js/react-vendor-ClxMxoJB.js',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/react-vendor-ClxMxoJB.js';
    );
    this.fallbackUrls.set(';
      '/js/router-vendor-9KcRWrrL.js',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/router-vendor-9KcRWrrL.js';
    );
    this.fallbackUrls.set(';
      '/js/ui-vendor-B31yGDq-.js',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/ui-vendor-B31yGDq-.js';
    );
    this.fallbackUrls.set(';
      '/js/utils-vendor-CrFdsnXa.js',"https": //cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/utils-vendor-CrFdsnXa.js';
    )}
  getMimeType("filename": string): string {;
    return this.mimeTypes[ext] || 'application/octet-stream'}
  private getFileExtension("filename": string): string {;
    if(lastDot === -1) return '';
    return filename.substring(lastDot).toLowerCase()}
  async checkAndFixMimeType("url": string: unknown): Promise<any> {};
        // console.warn(`Resource not "found": ${url}`);
        return false}
      if(!contentType) {;
";
        // console.warn("No content-type header "for": ${url}");
        return false}
      if();
        contentType.includes(expectedType) ||';
        contentType.includes('application/octet-stream');
      ) {}}
";
      // console.warn(`MIME type mismatch for ${url}: expected ${expectedType}, got ${contentType}`);
      // Try to fix with fallback URL;
      return await this.tryFallbackUrl(url)} catch(error) {};
      // console.error(`Error checking MIME type for ${url}:`, error);
      return await this.tryFallbackUrl(url)}
  }
  private async tryFallbackUrl("originalUrl": string: any): Promise<any> {;
    if(fallbackUrl) {;
";
      // console.log("Trying fallback URL: ${fallbackUrl}");
      try {;
        if(response.ok) {;
          if(contentType && contentType.includes(expectedType)) {;
";
            // console.log(`Fallback URL has correct MIME "type": ${fallbackUrl}`);
            this.replaceResource(originalUrl, fallbackUrl);
            return true}
        }
      } catch(error) {};
        // console.error(`Fallback URL "failed": ${fallbackUrl}`, error)}    }
    return false}
  private replaceResource("originalUrl": string, "fallbackUrl": string) {;
    // Replace script tags";
    scripts.forEach(script => {;
      (script as HTMLScriptElement).src = fallbackUrl;";
      // console.log(`Replaced script source: ${originalUrl} -> ${fallbackUrl}`)});
    // Replace stylesheet links"";
    links.forEach(link => {};
      // console.log("Replaced stylesheet "href": ${originalUrl} -> ${fallbackUrl}")})}
  async preloadCriticalResources(): Promise<any> {;
    // console.log('🔍 Preloading critical resources...');
    for(const resource of criticalResources) {;
      try {;
        if(!isValid) {;
";
          // console.warn(`Critical resource has MIME type "issues": ${resource}`)}
      } catch(error) {};
        // console.error(`Error preloading "resource": ${resource}`, error)}    }
  }
  createResourceElement();
    "url": string,
    "type": 'script' | 'stylesheet';
  ): HTMLElement {};
      return script} else {};
      return link}
  }
  injectResource("url": anystring, "type": 'script' | 'stylesheet': any): Promise<any> {;
    return new Promise((resolve, reject) => {;
      element.onload = () => {;
";
        // console.log("✅ Resource loaded "successfully": ${url}");
        resolve()};
      element.onerror = () => {;
";
        // console.error(`❌ Failed to load "resource": ${url}`);";
        reject(new Error("Failed to load "resource": ${url}"))};
      if(type === 'script') {;
        document.head.appendChild(element)} else {;
        document.head.appendChild(element)}
    })}}
// Create singleton instance;
export default mimeTypeFallback;
interface MimeTypeMapping {}; [key: 'string]: string'} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: 'Map<string',string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this.setupFallbackUrls()} private setupFallbackUrls() {; this.fallbackUrls.set('; '/js/index-C64WnLOI.js',https: ); this.fallbackUrls.set('; '/css/index-RK9lga5l.css',https: ); this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB.js',https: ); this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL.js',https: ); this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this.tryFallbackUrl(url)} catch(error) {}; return await this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: 'string',fallbackUrl: string) {; ; scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: 'string',; type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: 'anystring',type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element.onload = () => {; `; resolve()}; element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document.head.appendChild(element)} else {; document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
'"";
interface MimeTypeMapping {}; [key: string]: string} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: Map<string,string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this.setupFallbackUrls()} private setupFallbackUrls() {; this.fallbackUrls.set('; '/js/index-C64WnLOI.js',https: ); this.fallbackUrls.set('; '/css/index-RK9lga5l.css',https: ); this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB.js',https: ); this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL.js',https: ); this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this.tryFallbackUrl(url)} catch(error) {}; return await this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: string,fallbackUrl: string) {; ; scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: string,type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: anystring,type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element.onload = () => {; `; resolve()}; element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document.head.appendChild(element)} else {; document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
interface MimeTypeMapping {}; [key: string]: string} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: Map<string,string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this.setupFallbackUrls()} private setupFallbackUrls() {; this.fallbackUrls.set('; '/js/index-C64WnLOI.js',https: ); this.fallbackUrls.set('; '/css/index-RK9lga5l.css',https: ); this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB.js',https: ); this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL.js',https: ); this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this.tryFallbackUrl(url)} catch(error) {}; return await this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: string,fallbackUrl: string) {; ; scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: string,type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: anystring,type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element.onload = () => {; `; resolve()}; element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document.head.appendChild(element)} else {; document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
