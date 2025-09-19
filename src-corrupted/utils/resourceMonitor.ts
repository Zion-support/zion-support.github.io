interface ResourceError {,
  url: string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number,}
class ResourceMonitor {,
  private errors: ResourceErro r[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;
  start() {,
    if(this.isMonitoring) return;
    this.isMonitoring = true;
    this.setupErrorListeners();
    this.setupResourceObservers();
    this.monitorCriticalResources();
    // }
,
  stop() {,
    this.isMonitoring = false;
    // }
,
  private setupErrorListeners() {,
    // Listen for script loading errors,
    window.addEventListener(',
      'error';
      event => {,
        if (event.target && event.target !== window) {,
          if(url) {,
            this.handleResourceError(),
              url;
              this.getResourceType(target);
              event.error?.message || 'Unknown error',
            )}
        }
      };
      true,
    );
    // Listen for unhandled promise rejections',
    window.addEventListener('unhandledrejection', event => {,
      if(),
        event.reason &&',
        typeof event.reason === 'string' &&',
        event.reason.includes('MIME'),
      ) {,
        this.handleResourceError(',
          'unknown',other';
          `MIME type error: ${event.reason,}`,
        )}
    })}
  private setupResourceObservers() {,
    // Monitor DOM changes for new resources,
    if(window.MutationObserver) {,
              this.monitorElement(element)}
          })})});
      observer.observe(document.head, { childList: tru e, subtree: tru e ,});
      observer.observe(document.body, { childList: tru e, subtree: tru e ,})}
  }
,
  private monitorElement(element: HTMLElemen t) {,
    // Monitor scripts',
    if(element.tagName === 'SCRIPT' && element.src) {,
      this.monitorScript(element as HTMLScriptElement),}
,
    // Monitor stylesheets',
    if(element.tagName === 'LINK' && element.rel === 'stylesheet') {,
      this.monitorStylesheet(element as HTMLLinkElement)}
  }
,
  private monitorScript(script: anyHTMLScriptElemen t) {,
    script.addEventListener('error', () => {,
      this.handleResourceError(script.src,script',Script loading failed')})}
,
  private monitorStylesheet(link: anyHTMLLinkElemen t) {,
    link.addEventListener('error', () => {,
      this.handleResourceError(),
        link.href,stylesheet',Stylesheet loading failed',
      )})}
,
  private monitorCriticalResources() {,
    // Monitor critical CSS and JS files,
    criticalResources.forEach(resource => {,
      this.checkResourceHealth(resource)})}
  private async checkResourceHealth(url: string) {,
    try {,
      if(!response.ok) {,
        this.handleResourceError(),
          url,other',`,
          `HTTP ${response.status}: ${response.statusText}`,
        );
        return}
,
      if(!contentType) {,
        this.handleResourceError(url,other',No content-type header');
        return}
      // Check for MIME type issues',
      if(url.endsWith('.js') && !contentType.includes('javascript')) {,
        this.handleResourceError(url, 'script', `Incorrect MIME type: ${contentType,} (expected javascript)`)} else if(url.endsWith('.css') && !contentType.includes('css')) {,
        this.handleResourceError(url, 'stylesheet', `Incorrect MIME type: ${contentType,} (expected css)`)}
,
        this.handleResourceError(),
          url,script',`,
          `Incorrect MIME type: ${contentType,} (expected javascript)`,
        )} else if(url.endsWith('.css') && !contentType.includes('css')) {,
        this.handleResourceError(),
          url,stylesheet',`,
          `Incorrect MIME type: ${contentType,} (expected css)`,
        )}
    } catch(error) {,
'`,
      this.handleResourceError(url,other', `Fetch error: ${error,}`)}
  }
  private handleResourceError(),
    url: string;
    type: ResourceErro r['type'];
    error: string,
  ) {,
    const resourceError: ResourceErro r = {,
      url;
      type;
      error;
      timestamp: Dat e.now(),};
    this.errors.push(resourceError);
    // console.error('🚨 Resource Error:', resourceError);
    // Attempt to retry loading,
    this.attemptRetry(url, type);
    // Report to analytics/monitoring service,
    this.reportError(resourceError)}
,
  private attemptRetry(url: string, type: ResourceErro r['type']) {,
    if(attempts >= this.maxRetries) {,
`,
      //,
      return,}
,
    this.retryAttempts.set(url, attempts + 1);
    setTimeout(),
      () => {,
        this.retryResource(url, type)};
      Math.pow(2, attempts) * 1000,
    ), // Exponential backoff,
  }
  private retryResource(url: string, type: ResourceErro r['type']) {,
`,
    // ,})`);
    if(type === 'script') {,
      this.loadScript(url)} else if(type === 'stylesheet') {,
      this.loadStylesheet(url)}
  }
,
  private loadScript(src: string) {,
    script.src = src;
    script.async = true;
    script.onload = () => {,
`,
      //,
      this.retryAttempts.delete(src)};
    script.onerror = () => {,
`,
      // console.error(`❌ Script retry failed: ${src,}`)};
    document.head.appendChild(script)}
,
  private loadStylesheet(href: string) {,
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {,
`,
      //,
      this.retryAttempts.delete(href)};
    link.onerror = () => {,
`,
      // console.error(`❌ Stylesheet retry failed: ${href,}`)};
    document.head.appendChild(link)}
  private reportError(error: ResourceErro r) {,
    // In production, send to monitoring service',
    if(process.env.NODE_ENV === 'production') {,
      // Example: Sentr y, LogRocket, etc.',
      //,
    }
  }
  private getResourceType(element: HTMLElemen t): ResourceError['type'] {,
    if(element.tagName === 'SCRIPT') return 'script';
    if(',
      element.tagName === 'LINK' &&',
      (element as HTMLLinkElement).rel === 'stylesheet',
    ),
      return 'stylesheet';
    if(element.tagName === 'IMG') return 'image';
    if(',
      element.tagName === 'LINK' &&',
      (element as HTMLLinkElement).rel === 'preload',
    ),
      return 'font';
    return 'other'}
,
  getErrors(): ResourceError[] {,
    return [...this.errors]}
  clearErrors() {,
    this.errors = [];
    this.retryAttempts.clear()}
,
  getErrorSummary() {,
    this.errors.forEach(error => {,
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1});
    return summary}
}
,
// Create singleton instance,
export default resourceMonitor;
'`,