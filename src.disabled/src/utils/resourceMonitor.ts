interface ResourceError {;
  "url": string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number}
class ResourceMonitor {;
  private "errors": ResourceError[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;
  start() {;
    if(this && this.isMonitoring) return;
    this && this.isMonitoring = true;
    this && this.setupErrorListeners();
    this && this.setupResourceObservers();
    this && this.monitorCriticalResources();
    // console && console.log('🔍 Resource Monitor started')}
  stop() {;
    this && this.isMonitoring = false;
    // console && console.log('🔍 Resource Monitor stopped')}
  private setupErrorListeners() {;
    // Listen for script loading errors;
    window && window.addEventListener(';
      'error',
      event => {;
        if (event && event.target && event && event.target !== window) {;
          if(url) {;
            this && this.handleResourceError();
              url,
              this && this.getResourceType(target),
              event && event.error?.message || 'Unknown error';
            )}
        }
      },
      true;
    );
    // Listen for unhandled promise rejections';
    window && window.addEventListener('unhandledrejection', event => {;
      if();
        event && event.reason &&';
        typeof event && event.reason === 'string' &&';
        event && event.reason.includes('MIME');
      ) {;
        this && this.handleResourceError(';
          'unknown',other',
          `MIME type "error": ${event && event.reason}`;
        )}
    })}
  private setupResourceObservers() {;
    // Monitor DOM changes for new resources;
    if(window && window.MutationObserver) {;
              this && this.monitorElement(element)}
          })})});
      observer && observer.observe(document && document.head, { "childList": true, "subtree": true });
      observer && observer.observe(document && document.body, { "childList": true, "subtree": true })}
  }
  private monitorElement("element": HTMLElement) {;
    // Monitor scripts';
    if(element && element.tagName === 'SCRIPT' && element && element.src) {;
      this && this.monitorScript(element as HTMLScriptElement)}
    // Monitor stylesheets';
    if(element && element.tagName === 'LINK' && element && element.rel === 'stylesheet') {;
      this && this.monitorStylesheet(element as HTMLLinkElement)}
  }
  private monitorScript("script": anyHTMLScriptElement) {;
    script && script.addEventListener('error', () => {;
      this && this.handleResourceError(script && script.src,script',Script loading failed')})}
  private monitorStylesheet("link": anyHTMLLinkElement) {;
    link && link.addEventListener('error', () => {;
      this && this.handleResourceError();
        link && link.href,stylesheet',Stylesheet loading failed';
      )})}
  private monitorCriticalResources() {;
    // Monitor critical CSS and JS files;
    criticalResources && criticalResources.forEach(resource => {;
      this && this.checkResourceHealth(resource)})}
  private async checkResourceHealth("url": string) {;
    try {;
      if(!response && response.ok) {;
        this && this.handleResourceError();
          url,other',";
          "HTTP ${response && response.status}: ${response && response.statusText}";
        );
        return}
      if(!contentType) {;
        this && this.handleResourceError(url,other',No content-type header');
        return}
      // Check for MIME type issues';
      if(url && url.endsWith('.js') && !contentType && contentType.includes('javascript')) {;
        this && this.handleResourceError(url, 'script', "Incorrect MIME "type": ${contentType} (expected javascript)")} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {;
        this && this.handleResourceError(url, 'stylesheet', "Incorrect MIME "type": ${contentType} (expected css)")}
        this && this.handleResourceError();
          url,script',";
          `Incorrect MIME "type": ${contentType} (expected javascript)`;
        )} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {;
        this && this.handleResourceError();
          url,stylesheet',";
          "Incorrect MIME "type": ${contentType} (expected css)";
        )}
    } catch(error) {;
'";
      this && this.handleResourceError(url,other', `Fetch "error": ${error}`)}
  }
  private handleResourceError();
    "url": string,
    "type": ResourceError['type'],
    "error": string;
  ) {;
    const resourceError: ResourceError = {;
      url,
      type,
      error,
      "timestamp": Date && Date.now()};
    this && this.errors.push(resourceError);
    // console && console.error('🚨 Resource "Error": ', resourceError);
    // Attempt to retry loading;
    this && this.attemptRetry(url, type);
    // Report to analytics/monitoring service;
    this && this.reportError(resourceError)}
  private attemptRetry("url": string, "type": ResourceError['type']) {;
    if(attempts >= this && this.maxRetries) {;
";
      // console && console.warn("Max retry attempts reached for ${url}");
      return}
    this && this.retryAttempts.set(url, attempts + 1);
    setTimeout();
      () => {;
        this && this.retryResource(url, type)},
      Math && Math.pow(2, attempts) * 1000;
    ); // Exponential backoff}
  private retryResource("url": string, "type": ResourceError['type']) {;
";
    // console && console.log(`🔄 Retrying resource: ${url} (attempt ${this && this.retryAttempts.get(url)})`);
    if(type === 'script') {;
      this && this.loadScript(url)} else if(type === 'stylesheet') {;
      this && this.loadStylesheet(url)}
  }
  private loadScript("src": string) {;
    script && script.src = src;
    script && script.async = true;
    script && script.onload = () => {;
";
      // console && console.log("✅ Script loaded successfully: ${src}");
      this && this.retryAttempts.delete(src)};
    script && script.onerror = () => {;
";
      // console && console.error(`❌ Script retry "failed": ${src}`)};
    document && document.head.appendChild(script)}
  private loadStylesheet("href": string) {;
    link && link.rel = 'stylesheet';
    link && link.href = href;
    link && link.onload = () => {;
";
      // console && console.log("✅ Stylesheet loaded successfully: ${href}");
      this && this.retryAttempts.delete(href)};
    link && link.onerror = () => {;
";
      // console && console.error(`❌ Stylesheet retry "failed": ${href}`)};
    document && document.head.appendChild(link)}
  private reportError("error": ResourceError) {;
    // In production, send to monitoring service';
    if(process && process.env.NODE_ENV === 'production') {;
      // "Example": Sentry, LogRocket, etc.';
      // console && console.log('📊 Reporting error to monitoring "service": ', error)}
  }
  private getResourceType("element": HTMLElement): ResourceError['type'] {;
    if(element && element.tagName === 'SCRIPT') return 'script';
    if(';
      element && element.tagName === 'LINK' &&';
      (element as HTMLLinkElement).rel === 'stylesheet';
    );
      return 'stylesheet';
    if(element && element.tagName === 'IMG') return 'image';
    if(';
      element && element.tagName === 'LINK' &&';
      (element as HTMLLinkElement).rel === 'preload';
    );
      return 'font';
    return 'other'}
  getErrors(): ResourceError[] {;
    return [...this && this.errors]}
  clearErrors() {;
    this && this.errors = [];
    this && this.retryAttempts.clear()}
  getErrorSummary() {;
    this && this.errors.forEach(error => {;
      summary && summary.byType[error && error.type] = (summary && summary.byType[error && error.type] || 0) + 1});
    return summary}
}
// Create singleton instance;
export default resourceMonitor;
'`;


interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string} timestamp: 'number'} class ResourceMonitor {; private errors: 'ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string',number>(); private maxRetries = 3; start() {; if(this && this.isMonitoring) return; this && this.isMonitoring = true; this && this.setupErrorListeners(); this && this.setupResourceObservers(); this && this.monitorCriticalResources(); stop() {; this && this.isMonitoring = false; private setupErrorListeners() {; window && window.addEventListener('; 'error',; event => {; if (event && event.target && event && event.target !== window) {; if(url) {; this && this.handleResourceError(); url,; this && this.getResourceType(target),; event && event.error?.message || 'Unknown error'; )} } },; true; ); window && window.addEventListener('unhandledrejection',event => {; if(); event && event.reason &&'; typeof event && event.reason === 'string' &&'; event && event.reason.includes('MIME'); ) {; this && this.handleResourceError('; 'unknown',other',; `MIME type error: ${event && event.reason}`; )} })} private setupResourceObservers() {; if(window && window.MutationObserver) {; this && this.monitorElement(element)} })})}); observer && observer.observe(document && document.head,{ childList: 'true',subtree: 'true' }); observer && observer.observe(document && document.body,{ childList: 'true',subtree: 'true' })} } private monitorElement(element: HTMLElement) {; if(element && element.tagName === 'SCRIPT' && element && element.src) {; this && this.monitorScript(element as HTMLScriptElement)} if(element && element.tagName === 'LINK' && element && element.rel === 'stylesheet') {; this && this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script && script.addEventListener('error',() => {; this && this.handleResourceError(script && script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link && link.addEventListener('error',() => {; this && this.handleResourceError(); link && link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources && criticalResources.forEach(resource => {; this && this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response && response.ok) {; this && this.handleResourceError(); url,other',`; `HTTP ${response && response.status}: ${response && response.statusText}`; ); return} if(!contentType) {; this && this.handleResourceError(url,other',No content-type header'); return} if(url && url.endsWith('.js') && !contentType && contentType.includes('javascript')) {; this && this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this && this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this && this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: 'string',; type: ResourceError['type'],; error: string; ) {; const resourceError: ResourceError = {; url,; type,; error,; timestamp: Date && Date.now()}; this && this.errors.push(resourceError); this && this.attemptRetry(url,type); this && this.reportError(resourceError)} private attemptRetry(url: 'string',type: ResourceError['type']) {; if(attempts >= this && this.maxRetries) {; `; return} this && this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this && this.retryResource(url,type)},; Math && Math.pow(2,attempts) * 1000; )} private retryResource(url: 'string',type: ResourceError['type']) {; `; if(type === 'script') {; this && this.loadScript(url)} else if(type === 'stylesheet') {; this && this.loadStylesheet(url)} } private loadScript(src: string) {; script && script.src = src; script && script.async = true; script && script.onload = () => {; `; this && this.retryAttempts.delete(src)}; script && script.onerror = () => {; `; document && document.head.appendChild(script)} private loadStylesheet(href: string) {; link && link.rel = 'stylesheet'; link && link.href = href; link && link.onload = () => {; `; this && this.retryAttempts.delete(href)}; link && link.onerror = () => {; `; document && document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process && process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element && element.tagName === 'SCRIPT') return 'script'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element && element.tagName === 'IMG') return 'image'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this && this.errors]} clearErrors() {; this && this.errors = []; this && this.retryAttempts.clear()} getErrorSummary() {; ; this && this.errors.forEach(error => {; summary && summary.byType[error && error.type] = (summary && summary.byType[error && error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this && this.isMonitoring) return; this && this.isMonitoring = true; this && this.setupErrorListeners(); this && this.setupResourceObservers(); this && this.monitorCriticalResources(); stop() {; this && this.isMonitoring = false; private setupErrorListeners() {; window && window.addEventListener('; 'error',event => {; if (event && event.target && event && event.target !== window) {; if(url) {; this && this.handleResourceError(); url,this && this.getResourceType(target),event && event.error?.message || 'Unknown error'; )} } },true; ); window && window.addEventListener('unhandledrejection',event => {; if(); event && event.reason &&'; typeof event && event.reason === 'string' &&'; event && event.reason.includes('MIME'); ) {; this && this.handleResourceError('; 'unknown',other',`MIME type error: ${event && event.reason}`; )} })} private setupResourceObservers() {; if(window && window.MutationObserver) {; this && this.monitorElement(element)} })})}); observer && observer.observe(document && document.head,{ childList: true,subtree: true }); observer && observer.observe(document && document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element && element.tagName === 'SCRIPT' && element && element.src) {; this && this.monitorScript(element as HTMLScriptElement)} if(element && element.tagName === 'LINK' && element && element.rel === 'stylesheet') {; this && this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script && script.addEventListener('error',() => {; this && this.handleResourceError(script && script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link && link.addEventListener('error',() => {; this && this.handleResourceError(); link && link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources && criticalResources.forEach(resource => {; this && this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response && response.ok) {; this && this.handleResourceError(); url,other',`; `HTTP ${response && response.status}: ${response && response.statusText}`; ); return} if(!contentType) {; this && this.handleResourceError(url,other',No content-type header'); return} if(url && url.endsWith('.js') && !contentType && contentType.includes('javascript')) {; this && this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this && this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this && this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date && Date.now()}; this && this.errors.push(resourceError); this && this.attemptRetry(url,type); this && this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this && this.maxRetries) {; `; return} this && this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this && this.retryResource(url,type)},Math && Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this && this.loadScript(url)} else if(type === 'stylesheet') {; this && this.loadStylesheet(url)} } private loadScript(src: string) {; script && script.src = src; script && script.async = true; script && script.onload = () => {; `; this && this.retryAttempts.delete(src)}; script && script.onerror = () => {; `; document && document.head.appendChild(script)} private loadStylesheet(href: string) {; link && link.rel = 'stylesheet'; link && link.href = href; link && link.onload = () => {; `; this && this.retryAttempts.delete(href)}; link && link.onerror = () => {; `; document && document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process && process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element && element.tagName === 'SCRIPT') return 'script'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element && element.tagName === 'IMG') return 'image'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this && this.errors]} clearErrors() {; this && this.errors = []; this && this.retryAttempts.clear()} getErrorSummary() {; ; this && this.errors.forEach(error => {; summary && summary.byType[error && error.type] = (summary && summary.byType[error && error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;
interface ResourceError {; url: string; type: 'script' | 'stylesheet' | 'image' | 'font' | 'other'; error: string; timestamp: number} class ResourceMonitor {; private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string,number>(); private maxRetries = 3; start() {; if(this && this.isMonitoring) return; this && this.isMonitoring = true; this && this.setupErrorListeners(); this && this.setupResourceObservers(); this && this.monitorCriticalResources(); stop() {; this && this.isMonitoring = false; private setupErrorListeners() {; window && window.addEventListener('; 'error',event => {; if (event && event.target && event && event.target !== window) {; if(url) {; this && this.handleResourceError(); url,this && this.getResourceType(target),event && event.error?.message || 'Unknown error'; )} } },true; ); window && window.addEventListener('unhandledrejection',event => {; if(); event && event.reason &&'; typeof event && event.reason === 'string' &&'; event && event.reason.includes('MIME'); ) {; this && this.handleResourceError('; 'unknown',other',`MIME type error: ${event && event.reason}`; )} })} private setupResourceObservers() {; if(window && window.MutationObserver) {; this && this.monitorElement(element)} })})}); observer && observer.observe(document && document.head,{ childList: true,subtree: true }); observer && observer.observe(document && document.body,{ childList: true,subtree: true })} } private monitorElement(element: HTMLElement) {; if(element && element.tagName === 'SCRIPT' && element && element.src) {; this && this.monitorScript(element as HTMLScriptElement)} if(element && element.tagName === 'LINK' && element && element.rel === 'stylesheet') {; this && this.monitorStylesheet(element as HTMLLinkElement)} } private monitorScript(script: anyHTMLScriptElement) {; script && script.addEventListener('error',() => {; this && this.handleResourceError(script && script.src,script',Script loading failed')})} private monitorStylesheet(link: anyHTMLLinkElement) {; link && link.addEventListener('error',() => {; this && this.handleResourceError(); link && link.href,stylesheet',Stylesheet loading failed'; )})} private monitorCriticalResources() {; ; criticalResources && criticalResources.forEach(resource => {; this && this.checkResourceHealth(resource)})} private async checkResourceHealth(url: string) {; try {; if(!response && response.ok) {; this && this.handleResourceError(); url,other',`; `HTTP ${response && response.status}: ${response && response.statusText}`; ); return} if(!contentType) {; this && this.handleResourceError(url,other',No content-type header'); return} if(url && url.endsWith('.js') && !contentType && contentType.includes('javascript')) {; this && this.handleResourceError(url,'script',`Incorrect MIME type: ${contentType} (expected javascript)`)} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(url,'stylesheet',`Incorrect MIME type: ${contentType} (expected css)`)} this && this.handleResourceError(); url,script',`; `Incorrect MIME type: ${contentType} (expected javascript)`; )} else if(url && url.endsWith('.css') && !contentType && contentType.includes('css')) {; this && this.handleResourceError(); url,stylesheet',`; `Incorrect MIME type: ${contentType} (expected css)`; )} } catch(error) {; '`; this && this.handleResourceError(url,other',`Fetch error: ${error}`)} } private handleResourceError(); url: string,type: ResourceError['type'],error: string; ) {; const resourceError: ResourceError = {; url,type,error,timestamp: Date && Date.now()}; this && this.errors.push(resourceError); this && this.attemptRetry(url,type); this && this.reportError(resourceError)} private attemptRetry(url: string,type: ResourceError['type']) {; if(attempts >= this && this.maxRetries) {; `; return} this && this.retryAttempts.set(url,attempts + 1); setTimeout(); () => {; this && this.retryResource(url,type)},Math && Math.pow(2,attempts) * 1000; )} private retryResource(url: string,type: ResourceError['type']) {; `; if(type === 'script') {; this && this.loadScript(url)} else if(type === 'stylesheet') {; this && this.loadStylesheet(url)} } private loadScript(src: string) {; script && script.src = src; script && script.async = true; script && script.onload = () => {; `; this && this.retryAttempts.delete(src)}; script && script.onerror = () => {; `; document && document.head.appendChild(script)} private loadStylesheet(href: string) {; link && link.rel = 'stylesheet'; link && link.href = href; link && link.onload = () => {; `; this && this.retryAttempts.delete(href)}; link && link.onerror = () => {; `; document && document.head.appendChild(link)} private reportError(error: ResourceError) {; if(process && process.env.NODE_ENV === 'production') {} } private getResourceType(element: HTMLElement): ResourceError['type'] {; if(element && element.tagName === 'SCRIPT') return 'script'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'stylesheet'; ); return 'stylesheet'; if(element && element.tagName === 'IMG') return 'image'; if('; element && element.tagName === 'LINK' &&'; (element as HTMLLinkElement).rel === 'preload'; ); return 'font'; return 'other'} getErrors(): ResourceError[] {; return [...this && this.errors]} clearErrors() {; this && this.errors = []; this && this.retryAttempts.clear()} getErrorSummary() {; ; this && this.errors.forEach(error => {; summary && summary.byType[error && error.type] = (summary && summary.byType[error && error.type] || 0) + 1}); return summary} } export default resourceMonitor; '`;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
