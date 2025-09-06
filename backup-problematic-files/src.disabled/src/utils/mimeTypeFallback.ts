interface MimeTypeMapping {};
  ["key": string]: string}
class MimeTypeFallback {};
    '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd && vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'};
  private "fallbackUrls": Map<string, string> = new Map();
  private cdnFallbacks = [';
    '"https": //cdn && cdn.jsdelivr.net',"https": //unpkg && unpkg.com',"https": //cdnjs && cdnjs.cloudflare.com',
  ];
  constructor() {;
    this && this.setupFallbackUrls()}
  private setupFallbackUrls() {;
    // Map problematic URLs to CDN fallbacks;
    this && this.fallbackUrls.set(';
      '/js/index-C64WnLOI && C64WnLOI.js',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/index-C64WnLOI && C64WnLOI.js';
    );
    this && this.fallbackUrls.set(';
      '/css/index-RK9lga5l && RK9lga5l.css',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/css/index-RK9lga5l && RK9lga5l.css';
    );
    this && this.fallbackUrls.set(';
      '/js/react-vendor-ClxMxoJB && ClxMxoJB.js',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/react-vendor-ClxMxoJB && ClxMxoJB.js';
    );
    this && this.fallbackUrls.set(';
      '/js/router-vendor-9KcRWrrL && 9KcRWrrL.js',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/router-vendor-9KcRWrrL && 9KcRWrrL.js';
    );
    this && this.fallbackUrls.set(';
      '/js/ui-vendor-B31yGDq-.js',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/ui-vendor-B31yGDq-.js';
    );
    this && this.fallbackUrls.set(';
      '/js/utils-vendor-CrFdsnXa && CrFdsnXa.js',"https": //cdn && cdn.jsdelivr.net/gh/ziontechgroup/zion-website@main/dist/js/utils-vendor-CrFdsnXa && CrFdsnXa.js';
    )}
  getMimeType("filename": string): string {;
    return this && this.mimeTypes[ext] || 'application/octet-stream'}
  private getFileExtension("filename": string): string {;
    if(lastDot === -1) return '';
    return filename && filename.substring(lastDot).toLowerCase()}
  async checkAndFixMimeType("url": string: unknown): Promise<any> {};
        // console && console.warn(`Resource not "found": ${url}`);
        return false}
      if(!contentType) {;
";
        // console && console.warn("No content-type header "for": ${url}");
        return false}
      if();
        contentType.includes(expectedType) ||';
        contentType.includes('application/octet-stream');
      ) {}}
";
      // console && console.warn(`MIME type mismatch for ${url}: expected ${expectedType}, got ${contentType}`);
      // Try to fix with fallback URL;
      return await this && this.tryFallbackUrl(url)} catch(error) {};
      // console && console.error(`Error checking MIME type for ${url}:`, error);
      return await this && this.tryFallbackUrl(url)}
  }
  private async tryFallbackUrl("originalUrl": string: any): Promise<any> {;
    if(fallbackUrl) {;
";
      // console && console.log("Trying fallback URL: ${fallbackUrl}");
      try {;
        if(response && response.ok) {;
          if(contentType && contentType.includes(expectedType)) {;
";
            // console && console.log(`Fallback URL has correct MIME "type": ${fallbackUrl}`);
            this && this.replaceResource(originalUrl, fallbackUrl);
            return true}
        }
      } catch(error) {};
        // console && console.error(`Fallback URL "failed": ${fallbackUrl}`, error)}    }
    return false}
  private replaceResource("originalUrl": string, "fallbackUrl": string) {;
    // Replace script tags";
    scripts && scripts.forEach(script => {;
      (script as HTMLScriptElement).src = fallbackUrl;";
      // console && console.log(`Replaced script source: ${originalUrl} -> ${fallbackUrl}`)});
    // Replace stylesheet links"";
    links && links.forEach(link => {};
      // console && console.log("Replaced stylesheet "href": ${originalUrl} -> ${fallbackUrl}")})}
  async preloadCriticalResources(): Promise<any> {;
    // console && console.log('🔍 Preloading critical resources...');
    for(const resource of criticalResources) {;
      try {;
        if(!isValid) {;
";
          // console && console.warn(`Critical resource has MIME type "issues": ${resource}`)}
      } catch(error) {};
        // console && console.error(`Error preloading "resource": ${resource}`, error)}    }
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
      element && element.onload = () => {;
";
        // console && console.log("✅ Resource loaded "successfully": ${url}");
        resolve()};
      element && element.onerror = () => {;
";
        // console && console.error(`❌ Failed to load "resource": ${url}`);";
        reject(new Error("Failed to load "resource": ${url}"))};
      if(type === 'script') {;
        document && document.head.appendChild(element)} else {;
        document && document.head.appendChild(element)}
    })}}
// Create singleton instance;
export default mimeTypeFallback;
'"`;
interface MimeTypeMapping {}; [key: 'string]: string'} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd && vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: 'Map<string',string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this && this.setupFallbackUrls()} private setupFallbackUrls() {; this && this.fallbackUrls.set('; '/js/index-C64WnLOI && C64WnLOI.js',https: ); this && this.fallbackUrls.set('; '/css/index-RK9lga5l && RK9lga5l.css',https: ); this && this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB && ClxMxoJB.js',https: ); this && this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL && 9KcRWrrL.js',https: ); this && this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this && this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa && CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this && this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename && filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this && this.tryFallbackUrl(url)} catch(error) {}; return await this && this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response && response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this && this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: 'string',fallbackUrl: string) {; ; scripts && scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links && links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: 'string',; type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: 'anystring',type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element && element.onload = () => {; `; resolve()}; element && element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document && document.head.appendChild(element)} else {; document && document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
'"";


=======
interface MimeTypeMapping {}; [key: string]: string} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd && vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: Map<string,string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this && this.setupFallbackUrls()} private setupFallbackUrls() {; this && this.fallbackUrls.set('; '/js/index-C64WnLOI && C64WnLOI.js',https: ); this && this.fallbackUrls.set('; '/css/index-RK9lga5l && RK9lga5l.css',https: ); this && this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB && ClxMxoJB.js',https: ); this && this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL && 9KcRWrrL.js',https: ); this && this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this && this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa && CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this && this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename && filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this && this.tryFallbackUrl(url)} catch(error) {}; return await this && this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response && response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this && this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: string,fallbackUrl: string) {; ; scripts && scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links && links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: string,type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: anystring,type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element && element.onload = () => {; `; resolve()}; element && element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document && document.head.appendChild(element)} else {; document && document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
interface MimeTypeMapping {}; [key: string]: string} class MimeTypeFallback {}; '.js': 'application/javascript',.mjs': 'application/javascript',.css': 'text/css',.html': 'text/html',.htm': 'text/html',.xml': 'application/xml',.json': 'application/json',.svg': 'image/svg+xml',.ico': 'image/x-icon',.png': 'image/png',.jpg': 'image/jpeg',.jpeg': 'image/jpeg',.gif': 'image/gif',.webp': 'image/webp',.bmp': 'image/bmp',.tiff': 'image/tiff',.woff': 'font/woff',.woff2': 'font/woff2',.ttf': 'font/ttf',.otf': 'font/otf',.eot': 'application/vnd && vnd.ms-fontobject',.pdf': 'application/pdf',.zip': 'application/zip',.tar': 'application/x-tar',.gz': 'application/gzip',.mp4': 'video/mp4',.webm': 'video/webm',.ogg': 'video/ogg',.mp3': 'audio/mpeg',.wav': 'audio/wav',.flac': 'audio/flac'}; private fallbackUrls: Map<string,string> = new Map(); private cdnFallbacks = ['; 'https: ]; constructor() {; this && this.setupFallbackUrls()} private setupFallbackUrls() {; this && this.fallbackUrls.set('; '/js/index-C64WnLOI && C64WnLOI.js',https: ); this && this.fallbackUrls.set('; '/css/index-RK9lga5l && RK9lga5l.css',https: ); this && this.fallbackUrls.set('; '/js/react-vendor-ClxMxoJB && ClxMxoJB.js',https: ); this && this.fallbackUrls.set('; '/js/router-vendor-9KcRWrrL && 9KcRWrrL.js',https: ); this && this.fallbackUrls.set('; '/js/ui-vendor-B31yGDq-.js',https: ); this && this.fallbackUrls.set('; '/js/utils-vendor-CrFdsnXa && CrFdsnXa.js',https: )} getMimeType(filename: string): string {; return this && this.mimeTypes[ext] || 'application/octet-stream'} private getFileExtension(filename: string): string {; if(lastDot === -1) return ''; return filename && filename.substring(lastDot).toLowerCase()} async checkAndFixMimeType(url: string: unknown): Promise<any> {}; return false} if(!contentType) {; `; return false} if(); contentType.includes(expectedType) ||'; contentType.includes('application/octet-stream'); ) {}} `; return await this && this.tryFallbackUrl(url)} catch(error) {}; return await this && this.tryFallbackUrl(url)} } private async tryFallbackUrl(originalUrl: string: any): Promise<any> {; if(fallbackUrl) {; `; try {; if(response && response.ok) {; if(contentType && contentType.includes(expectedType)) {; `; this && this.replaceResource(originalUrl,fallbackUrl); return true} } } catch(error) {}; return false} private replaceResource(originalUrl: string,fallbackUrl: string) {; ; scripts && scripts.forEach(script => {; (script as HTMLScriptElement).src = fallbackUrl;`; ; links && links.forEach(link => {}; async preloadCriticalResources(): Promise<any> {; for(const resource of criticalResources) {; try {; ; if(!isValid) {; `} catch(error) {}} createResourceElement(); url: string,type: 'script' | 'stylesheet'; ): HTMLElement {}; return script} else {}; return link} } injectResource(url: anystring,type: 'script' | 'stylesheet': any): Promise<any> {; return new Promise((resolve,reject) => {; element && element.onload = () => {; `; resolve()}; element && element.onerror = () => {; `; reject(new Error(`Failed to load resource: ${url}`))}; if(type === 'script') {; document && document.head.appendChild(element)} else {; document && document.head.appendChild(element)} })}} export default mimeTypeFallback; '"`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/utils/mimeTypeFallback.ts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
