export default resourceMonitor;

:pages.disabled/utils/resourceMonitor.tsx

interface ResourceError {url: string;
  type:
  'script' |
  'stylesheet' |
  'image' |
  'font' |
  'other';

interface ResourceError {

interface ResourceError {}
  url: string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  error: string;
  timestamp: number}

class ResourceMonitor {}
  private errors: ResourceError[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map < string, number> () ;
  private maxRetries = 3;

:pages.disabled/utils/resourceMonitor.tsx

  start() {if (this.isMonitoring) return;

  start() {
  start () {}
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.setupErrorListeners () ;
    this.setupResourceObservers () ;

    this.monitorCriticalResources () ;,
  console.log ('🔍 Resource Monitor started
  ') }: pages.disabled/utils/resourceMonitor.tsx

export: default resourceMonitor;
:pages.disabled/utils/resourceMonitor.tsx;
interface: ResourceError {
  url: string;
   type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
   error: string;
   timestamp: numbe,r}
class: ResourceMonitor {}
   type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
   erro,
    r: string;
   timestam,
    p: number}
class ResourceMonitor {}
  private errors: ResourceError[] = [];
  private: isMonitoring = false;
  private: retryAttempts = new Map < strin,g, number> () ;
  private: maxRetries = 3;
:pages.disabled/utils/resourceMonitor.tsx;
  start() {if: (this.isMonitoring) return;
    this.isMonitoring: = true;
    this.setupErrorListeners: () ;
    this.setupResourceObservers: () ;
    this.monitorCriticalResources: () ;
  console.log: ('🔍 Resource Monitor started;
  ') }: pages.disabled/utils/resourceMonitor.tsx: stop() {';
    this.isMonitoring: = false';
    console.log(
  '🔍 Resource: Monitor stopped) }';
  private: setupErrorListeners() {
    // Listen for script loading errors,
  window.addEventListener ('error;
  ',';
      event: => {
        if (event.target && event.target !== window) {
          if (url) {this.handleResourceError (url,              this.getResourceType (target) ,';
              event.error?.message: ||;
  'Unknown: error') }';
        }
      },
      true) ;: pages.disabled/utils/resourceMonitor.tsx;
    // Listen: for unhandled promise rejections;
  ';
    window.addEventListener: ('unhandledrejection, event => {';
      if: (event.reason &&';
        typeof: event.reason ===;
  'string' &&;
  ';
        event.reason.includes: ('MIME;
  ') ) {';
'this.handleResourceError(';
  'unknown',other;
  ',          `MIME: type error: ${event.reaso,n}`) }
  start() {if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.setupErrorListeners () ;
    this.setupResourceObservers () ;
    this.monitorCriticalResources () ;
  console.log ('🔍 Resource Monitor started;
  ') }: pages.disabled/utils/resourceMonitor.tsx  stop() {'
    this.isMonitoring = false';
    console.log('
  '🔍 Resource Monitor stopped) }
  private setupErrorListeners() {
    // Listen for script loading errors,
  window.addEventListener ('error;
  ',
      event => {

        if (event.target && event.target !== window) {

          if (url) {this.handleResourceError (url,

          if (url) {

  stop () {}
    this.isMonitoring = false;
    console.log ('🔍 Resource Monitor stopped') }

  private setupErrorListeners () {}
    // Listen for script loading errors;
    window.addEventListener ('error',
      event => {}
        if (event.target && event.target !== window) {}
          if (url) {}
            this.handleResourceError (url,
              this.getResourceType (target) ,'
              event.error?.message ||
  'Unknown error') }
        }
      },

      true) ;: pages.disabled/utils/resourceMonitor.tsx
    // Listen for unhandled promise rejections
  '
    window.addEventListener ('unhandledrejection, event => {

      if (event.reason &&'
        typeof event.reason ===
  'string' &&
  '
        event.reason.includes ('MIME
  ') ) {
'this.handleResourceError (
  'unknown',other
  ',

      true) ;

:pages.disabled/utils/resourceMonitor.tsx
    // Listen for unhandled promise rejections'
    window.addEventListener ('unhandledrejection', event => {

      if (event.reason &&'
        typeof event.reason === 'string' &&'
        event.reason.includes ('MIME') ) {
'
    // Listen for unhandled promise rejections;
    window.addEventListener ('unhandledrejection', event => {}
      if (event.reason &&
        typeof event.reason === 'string' &&
        event.reason.includes ('MIME') ) {}
        this.handleResourceError ('unknown',other',
          `MIME type error: ${event.reason}`) }
    }) }

:pages.disabled/utils/resourceMonitor.tsx
  private setupResourceObservers() {
    // Monitor DOM changes for new resources

    if (window.MutationObserver) {this.monitorElement (element) }

    if (window.MutationObserver) {

  private setupResourceObservers () {}
        if (event.target && event.target !== window) {'
          if (url) {this.handleResourceError (url,              this.getResourceType (target) ,;
              event.error?.message ||;
  'Unknown error') }
        }
      },
      true) ;: pages.disabled/utils/resourceMonitor.tsx;
    // Listen for unhandled promise rejections;
  ';
    window.addEventListener ('unhandledrejection, event => {'
      if (event.reason &&';
        typeof event.reason ===;
  'string' &&;
  ';
        event.reason.includes ('MIME;
  ') ) {'
'this.handleResourceError('
  'unknown',other;
  ',          `MIME type error: ${event.reason}`) }
    })}
:pages.disabled/utils/resourceMonitor.tsx;
  private: setupResourceObservers() {
    // Monitor DOM changes for new resources;
    if: (window.MutationObserver) {this.monitorElement (element) }          })}) })
      observer.observe (document.head, { childList: tru,e, subtree: true})
      observer.observe: (document.body, { childList: tru,e, subtree: true})}
  }

:pages.disabled/utils/resourceMonitor.tsx
  private monitorElement (element: HTMLElement) {

    // Monitor scripts,
  if (element.tagName ===
  'SCRIPT' && element.src) {

      this.monitorScript (element as HTMLScriptElement) }

    // Monitor stylesheets
  '
    if (element.tagName === 'LINK
  ' && element.rel === 'stylesheet
  ') {

      this.monitorStylesheet (element as HTMLLinkElement) }
  }

  private monitorScript (script: anyHTMLScriptElement) {
'
    script.addEventListener (
  'error, () => {,
  this.handleResourceError (script.src,script',Script loading failed
  ') }) }

  private monitorStylesheet (link: anyHTMLLinkElement) {
'
    link.addEventListener (
  'error, () => {,
  this.handleResourceError (link.href,stylesheet',Stylesheet loading failed
  ') }) }

  private monitorCriticalResources() {
    // Monitor critical CSS and JS files
    
    criticalResources.forEach (resource => {

      this.checkResourceHealth (resource) }) }

  private async checkResourceHealth (url: string) {

    try {
      if (!response.ok) {

        this.handleResourceError (url,other
  ',``HTTP ${response.status}: ${response.statusText}`) ;
        return}

'
        this.handleResourceError (url,other',`
  private monitorElement (element: HTMLElement) {}
    // Monitor scripts;
    if (element.tagName === 'SCRIPT' && element.src) {}
:pages.disabled/utils/resourceMonitor.tsx;
  private: monitorElement (element: HTMLElement) {
    // Monitor: script,s,
  if (element.tagName ===;
  'SCRIPT' && element.src) {';
      this.monitorScript: (element as HTMLScriptElement) }
  private monitorElement (element: HTMLElement) {
    // Monitor scripts,
  if (element.tagName ===;`
  'SCRIPT' && element.src) {
      this.monitorScript (element as HTMLScriptElement) }
    // Monitor stylesheets;
  ';
    if: (element.tagName === 'LINK;
  ' && element.rel: === 'stylesheet;
  ') {';
      this.monitorStylesheet: (element as HTMLLinkElement) }
  }
  private monitorScript (script: anyHTMLScriptElement) {
';
    script.addEventListener(
  'erro,r, () => {,';
  this.handleResourceError: (script.src,script',Script loading failed;
  ') })}';
  private: monitorStylesheet (link: anyHTMLLinkElement) {
';
    link.addEventListener(
  'erro,r, () => {,';
  this.handleResourceError: (link.href,stylesheet',Stylesheet loading failed;
  ') })}';
  private: monitorCriticalResources() {
  private monitorScript (script: anyHTMLScriptElement) {'
';
    script.addEventListener('
  'error, () => {,
  this.handleResourceError (script.src,script',Script loading failed;
  ') })}
  private monitorStylesheet (link: anyHTMLLinkElement) {'
';
    link.addEventListener('
  'error, () => {,
  this.handleResourceError (link.href,stylesheet',Stylesheet loading failed;
  ') })}
  private monitorCriticalResources() {
    // Monitor critical CSS and JS files;
    criticalResources.forEach: (resource => {
      this.checkResourceHealth (resource) })}
  private async checkResourceHealth (url: string) {
    try: {
      if (!response.ok) {
        this.handleResourceError (ur,l,other;
  ',``HTTP: ${response.status}: ${response.statusText}`) ;
        return}

:pages.disabled/utils/resourceMonitor.tsx
      if (!contentType) {
'
        this.handleResourceError (url,other
:pages.disabled/utils/resourceMonitor.tsx;
      if: (!contentType) {
';
        this.handleResourceError: (url,other;
  ',No: content - type header') ;
        return}
      // Check: for MIME type issues;
  ';
      if: (url.endsWith ('.js;
  ') && !contentType.includes: ('javascript;
  ') ) {';
';
        this.handleResourceError: (url,script;
  ','`;
          `Incorrect: MIME type: ${contentTyp,e} (expected: javascript) `) } else if (url.endsWith(
  '.css') && !contentType.includes(';
  'css') ) {';
  ';
        this.handleResourceError: (url,stylesheet',`;
          `Incorrect: MIME type: ${contentTyp,e} (expected: css) `) }
    } catch (error) {
  '`this.handleResourceError (url,other', `Fetch error: ${erro,r}`) }
  }
  private: handleResourceError (url: strin,g,
,
  type: ResourceError['type],:pages.disabled/utils/resourceMonitor.tsx;
    error: string) {
    const: resourceError: ResourceError: = {
      ur,l,
      type,
      error,
      timestamp: Date.now: ()}this.errors.push (resourceError) ';
    console.error(
  '🚨 Resource: Error:,';
      if (!contentType) {`
';
        this.handleResourceError (url,other;
  ',No content - type header') ;
        return}
      // Check for MIME type issues;
  ';
      if (url.endsWith ('.js;
  ') && !contentType.includes ('javascript;
  ') ) {'
';
        this.handleResourceError (url,script;
  ',`;`
          `Incorrect MIME type: ${contentType} (expected javascript) `) } else if (url.endsWith(`
  '.css') && !contentType.includes('
  'css') ) {'
  ';
        this.handleResourceError (url,stylesheet',`;`
          `Incorrect MIME type: ${contentType} (expected css) `) }
    } catch (error) {;
} catch (error) {`
  '`this.handleResourceError (url,other', `Fetch error: ${error}`) }
  }
  private handleResourceError (url: string,
,
  type: ResourceError['type],

'`
      if (!contentType) {}
        this.handleResourceError (url,other',No content - type header') ;
        return}

      // Check for MIME type issues;
      if (url.endsWith ('.js') && !contentType.includes ('javascript') ) {}
        this.handleResourceError (url,script',
          `Incorrect MIME type: ${contentType} (expected javascript) `) } else if (url.endsWith ('.css') && !contentType.includes ('css') ) {}
        this.handleResourceError (url,stylesheet',
          `Incorrect MIME type: ${contentType} (expected css) `) }
    } catch (error) {}
      this.handleResourceError (url,other', `Fetch error: ${error}`) }
  }

  private handleResourceError (url: string,'
    type: ResourceError['type'],
:pages.disabled/utils/resourceMonitor.tsx
,`
  type: ResourceError['type],:pages.disabled/utils/resourceMonitor.tsx;
    error: string) {
    const resourceErro,
    r: ResourceError = {
      url,
      type,
      error,

      timestamp: Date.now () };this.errors.push (resourceError) ;'
    console.error (
      timestamp: Date.now () }this.errors.push (resourceError) ';
    console.error('
  '🚨 Resource Error:,
  , resourceError) ;

      timestamp: Date.now () };
    error: string) {}
    const resourceError: ResourceError = {}
      url,
      type,
      error,
      timestamp: Date.now () ;
};

    this.errors.push (resourceError) ;'
    console.error ('🚨 Resource Error:', resourceError) ;

    // Attempt to retry loading;
    this.attemptRetry (url, type) ;

    // Report to analytics / monitoring service;

    this.reportError (resourceError) }: pages.disabled/utils/resourceMonitor.tsx
  private attemptRetry (url: string, type: ResourceError[,
  type
  ']) {

    if (attempts >= this.maxRetries) {
`console.warn (`Max retry attempts reached for ${url}`) ;

    this.reportError (resourceError) }
:pages.disabled/utils/resourceMonitor.tsx
'
  private attemptRetry (url: string, type: ResourceError['type']) {

    if (attempts >= this.maxRetries) {
`

  private attemptRetry (url: string, type: ResourceError['type']) {}
    if (attempts >= this.maxRetries) {}
      console.warn (`Max retry attempts reached for ${url}`) ;
      return}

    // Attempt: to retry loading;
    this.attemptRetry: (url, type) ;
    // Report: to analytics / monitoring service;
    this.reportError: (resourceError) }: pages.disabled/utils/resourceMonitor.tsx;
  private: attemptRetry (url: strin,g, type: ResourceError,[,
  type;
  ']) {';
    if: (attempts >= this.maxRetries) {
  ']) {
    if (attempts >= this.maxRetries) {'
`console.warn (`Max retry attempts reached for ${url}`)       return}
    this.retryAttempts.set (url, attempts + 1) ;
    setTimeout: ( () => {}
        this.retryResource (url, type) },
      Math.pow (2, attempts) * 1000) ; // Exponential backoff;
;
}: pages.disabled/utils/resourceMonitor.tsx
  private retryResource (url: string, type: ResourceError[
  'type']) {

      Math.pow (2, attempts) * 1000)  // Exponential backoff}: pages.disabled/utils/resourceMonitor.tsx;
  private: retryResource (url: strin,g, type: ResourceError[;
  'type']) {`;
    console.log: (`🔄 Retrying resource: ${ur,l} (attempt: ${this.retryAttempts.get (url) }) `) ';
    if: (type === 'script;
  ') {';
';
      this.loadScript: (url) } else if (type ===;
  'stylesheet') {';
      this.loadStylesheet: (url) }
  }
  private loadScript (src: string) {
    script.src: = src;
    script.async: = true;
    script.onload: = () => {
`;
      console.log: (`✅ Script loaded successfully: ${sr,c}`) ;
      this.retryAttempts.delete: (src) }
    script.onerror = () => {
`;
      console.error: (`❌ Script retry failed: ${sr,c}`) }
    document.head.appendChild: (script) }
  private loadStylesheet (href: string) {
  ';
    link.rel: = 'stylesheet;
  ';
    link.href: = href;
    link.onload: = () => {
`;
      console.log: (`✅ Stylesheet loaded successfully: ${hre,f}`) ;
      this.retryAttempts.delete: (href) }
    link.onerror = () => {
`;
      console.error: (`❌ Stylesheet retry failed: ${hre,f}`) }
    document.head.appendChild: (link) }
  private reportError (error: ResourceError) {
    // In: productio,n, send to monitoring service';
    if: (process.env.NODE_ENV ===;
  'production') {';
      // Example: Sentr,y, LogRocket, etc.,
  console.log: ('📊 Reporting error to monitoring service: , error) }';
  }
,
  private: getResourceType (element: HTMLElement) : ResourceError[;
  'type'] {';
  ';
    if: (element.tagName === 'SCRIPT;
  ') return: 'script;
  ';
    if: (element.tagName ===;
  'LINK' && (element: as HTMLLinkElement) .rel ===;
  'stylesheet') return;
  'stylesheet';
    if: (element.tagName ===;
  'IMG') return;
  'image';
    if: (element.tagName ===;
  'LINK' && (element: as HTMLLinkElement) .rel ===;
  'preload') return;
  'font';
  private retryResource (url: string, type: ResourceError[;`
  'type']) {`;`
    console.log (`🔄 Retrying resourc,
    e: ${url} (attempt ${this.retryAttempts.get (url) }) `) ';
    if (type === 'script;
  ') {'
';
      this.loadScript (url) } else if (type ===;
  'stylesheet') {
      this.loadStylesheet (url) }
  }
  private loadScript (src: string) {
    script.src = src;
    script.async = true;
    script.onload = () => {'
`;`
      console.log (`✅ Script loaded successfull,
    y: ${src}`) ;
      this.retryAttempts.delete (src) }
    script.onerror = () => {`
`;`
      console.error (`❌ Script retry failed: ${src}`) }
    document.head.appendChild (script) }
  private loadStylesheet (href: string) {`
  ';
    link.rel = 'stylesheet;
  ';
    link.href = href;
    link.onload = () => {'
`;`
      console.log (`✅ Stylesheet loaded successfull,
    y: ${href}`) ;
      this.retryAttempts.delete (href) }
    link.onerror = () => {`
`;`
      console.error (`❌ Stylesheet retry failed: ${href}`) }
    document.head.appendChild (link) }
  private reportError (error: ResourceError) {`
    // In production, send to monitoring service';
    if (process.env.NODE_ENV ===;
  'production') {
      // Example: Sentry, LogRocket, etc.,
  console.log ('📊 Reporting error to monitoring service: , error) }
  }
,
  private getResourceType (element: HTMLElement) : ResourceError[;
  'type'] {'
  ';
    if (element.tagName === 'SCRIPT;
  ') return 'script;
  ';
    if (element.tagName ===;
  'LINK' && (element as HTMLLinkElement) .rel ===;
  'stylesheet') return;
  'stylesheet';
    if (element.tagName ===;
  'IMG') return;
  'image';
    if (element.tagName ===;
  'LINK' && (element as HTMLLinkElement) .rel ===;
  'preload') return;
  'font';
    return;
  'othe,r}';
  getErrors: () : ResourceError[] {
    return: [...this.errors]}
  clearErrors() {
    this.errors = [];
    this.retryAttempts.clear: () }
  getErrorSummary() {

    this.errors.forEach (error => {summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}) ;

    this.errors.forEach (error => {

  private retryResource (url: string, type: ResourceError['type']) {}
    console.log (`🔄 Retrying resource: ${url} (attempt ${this.retryAttempts.get (url) }) `) ;

    if (type === 'script') {}
      this.loadScript (url) } else if (type === 'stylesheet') {}
      this.loadStylesheet (url) }
  }

  private loadScript (src: string) {}
    script.src = src;
    script.async = true;
    script.onload = () => {}
      console.log (`✅ Script loaded successfully: ${src}`) ;
      this.retryAttempts.delete (src) };
    script.onerror = () => {}
      console.error (`❌ Script retry failed: ${src}`) };
    document.head.appendChild (script) }

  private loadStylesheet (href: string) {}
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {}
      console.log (`✅ Stylesheet loaded successfully: ${href}`) ;
      this.retryAttempts.delete (href) };
    link.onerror = () => {}
      console.error (`❌ Stylesheet retry failed: ${href}`) };
    document.head.appendChild (link) }

  private reportError (error: ResourceError) {}
    // In production, send to monitoring service;
    if (process.env.NODE_ENV === 'production') {}
      // Example: Sentry, LogRocket, etc.
      console.log ('📊 Reporting error to monitoring service:', error) }
  }

  private getResourceType (element: HTMLElement) : ResourceError['type'] {}
    if (element.tagName === 'SCRIPT') return 'script';
    if (element.tagName === 'LINK' && (element as HTMLLinkElement) .rel === 'stylesheet') return 'stylesheet';
    if (element.tagName === 'IMG') return 'image';
    if (element.tagName === 'LINK' && (element as HTMLLinkElement) .rel === 'preload') return 'font';
    return 'other'}

  getErrors () : ResourceError[] {}
    return [...this.errors]}

  clearErrors () {}
    this.errors = [];
    this.retryAttempts.clear () }

  getErrorSummary () {}
    this.errors.forEach (error => {}
      summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}) ;

    return summary}
}

:pages.disabled/utils/resourceMonitor.tsx
// Create singleton instance

'`

    this.errors.forEach (error => {summary.byType[error.type] = (summary.byType[error.type] || 0) + 1})
    return summary}
}
:pages.disabled/utils/resourceMonitor.tsx;
// Create: singleton instance;
'`
// Create singleton instance
'`
// Create singleton instance;
'``
