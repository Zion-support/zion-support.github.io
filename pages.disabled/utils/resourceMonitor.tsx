export default resourceMonitor;

:pages.disabled/utils/resourceMonitor.tsx
<<<<<<< HEAD
interface ResourceError {url: string;
  type:
  'script' |
  'stylesheet' |
  'image' |
  'font' |
  'other';
=======
interface ResourceError {

interface ResourceError {}
  url: string;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
>>>>>>> pr-10728
  error: string;
  timestamp: number}

class ResourceMonitor {}
  private errors: ResourceError[] = [];
  private isMonitoring = false;
  private retryAttempts = new Map < string, number> () ;
  private maxRetries = 3;

:pages.disabled/utils/resourceMonitor.tsx
<<<<<<< HEAD
  start() {if (this.isMonitoring) return;
=======
  start() {
  start () {}
    if (this.isMonitoring) return;
>>>>>>> pr-10728

    this.isMonitoring = true;
    this.setupErrorListeners () ;
    this.setupResourceObservers () ;
<<<<<<< HEAD
    this.monitorCriticalResources () ;,
  console.log ('🔍 Resource Monitor started
  ') }: pages.disabled/utils/resourceMonitor.tsx
=======
    this.monitorCriticalResources () ;
'
    console.log ('🔍 Resource Monitor started') }

:pages.disabled/utils/resourceMonitor.tsx
>>>>>>> pr-10728
  stop() {
    this.isMonitoring = false;'
    console.log (
  '🔍 Resource Monitor stopped) }

  private setupErrorListeners() {
    // Listen for script loading errors,
  window.addEventListener ('error
  ',
      event => {

        if (event.target && event.target !== window) {

<<<<<<< HEAD
          if (url) {this.handleResourceError (url,
=======
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
>>>>>>> pr-10728
              this.getResourceType (target) ,'
              event.error?.message ||
  'Unknown error') }
        }
      },
<<<<<<< HEAD
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
=======
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
>>>>>>> pr-10728
          `MIME type error: ${event.reason}`) }
    }) }

:pages.disabled/utils/resourceMonitor.tsx
  private setupResourceObservers() {
    // Monitor DOM changes for new resources
<<<<<<< HEAD
    if (window.MutationObserver) {this.monitorElement (element) }
=======
    if (window.MutationObserver) {

  private setupResourceObservers () {}
    // Monitor DOM changes for new resources;
    if (window.MutationObserver) {}
              this.monitorElement (element) }
>>>>>>> pr-10728
          }) }) }) ;

      observer.observe (document.head, { childList: true, subtree: true }) ;
      observer.observe (document.body, { childList: true, subtree: true }) }
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
<<<<<<< HEAD
        this.handleResourceError (url,other
  ',``HTTP ${response.status}: ${response.statusText}`) ;
        return}

=======
'
        this.handleResourceError (url,other',`
  private monitorElement (element: HTMLElement) {}
    // Monitor scripts;
    if (element.tagName === 'SCRIPT' && element.src) {}
      this.monitorScript (element as HTMLScriptElement) }

    // Monitor stylesheets;
    if (element.tagName === 'LINK' && element.rel === 'stylesheet') {}
      this.monitorStylesheet (element as HTMLLinkElement) }
  }

  private monitorScript (script: anyHTMLScriptElement) {}
    script.addEventListener ('error', () => {}
      this.handleResourceError (script.src,script',Script loading failed') }) }

  private monitorStylesheet (link: anyHTMLLinkElement) {}
    link.addEventListener ('error', () => {}
      this.handleResourceError (link.href,stylesheet',Stylesheet loading failed') }) }

  private monitorCriticalResources () {}
    // Monitor critical CSS and JS files;
    criticalResources.forEach (resource => {}
      this.checkResourceHealth (resource) }) }

  private async checkResourceHealth (url: string) {}
    try {}
      if (!response.ok) {}
        this.handleResourceError (url,other',
          `HTTP ${response.status}: ${response.statusText}`) ;
        return}

      
>>>>>>> pr-10728
:pages.disabled/utils/resourceMonitor.tsx
      if (!contentType) {
'
        this.handleResourceError (url,other
  ',No content - type header') ;
        return}

      // Check for MIME type issues
  '
      if (url.endsWith ('.js
  ') && !contentType.includes ('javascript
  ') ) {
'
        this.handleResourceError (url,script
  ','`
          `Incorrect MIME type: ${contentType} (expected javascript) `) } else if (url.endsWith (
  '.css') && !contentType.includes (
  'css') ) {
  '
        this.handleResourceError (url,stylesheet',`
          `Incorrect MIME type: ${contentType} (expected css) `) }
    } catch (error) {
<<<<<<< HEAD
  '`this.handleResourceError (url,other', `Fetch error: ${error}`) }
  }

  private handleResourceError (url: string,
,
  type: ResourceError['type],
=======
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
>>>>>>> pr-10728
:pages.disabled/utils/resourceMonitor.tsx
    error: string) {

    const resourceError: ResourceError = {

      url,
      type,
      error,
<<<<<<< HEAD
      timestamp: Date.now () };this.errors.push (resourceError) ;'
    console.error (
  '🚨 Resource Error:,
  , resourceError) ;
=======
      timestamp: Date.now () };
    error: string) {}
    const resourceError: ResourceError = {}
      url,
      type,
      error,
      timestamp: Date.now () 
    };

    this.errors.push (resourceError) ;'
    console.error ('🚨 Resource Error:', resourceError) ;
>>>>>>> pr-10728

    // Attempt to retry loading;
    this.attemptRetry (url, type) ;

    // Report to analytics / monitoring service;
<<<<<<< HEAD
    this.reportError (resourceError) }: pages.disabled/utils/resourceMonitor.tsx
  private attemptRetry (url: string, type: ResourceError[,
  type
  ']) {

    if (attempts >= this.maxRetries) {
`console.warn (`Max retry attempts reached for ${url}`) ;
=======
    this.reportError (resourceError) }
:pages.disabled/utils/resourceMonitor.tsx
'
  private attemptRetry (url: string, type: ResourceError['type']) {

    if (attempts >= this.maxRetries) {
`

  private attemptRetry (url: string, type: ResourceError['type']) {}
    if (attempts >= this.maxRetries) {}
      console.warn (`Max retry attempts reached for ${url}`) ;
>>>>>>> pr-10728
      return}

    this.retryAttempts.set (url, attempts + 1) ;

    setTimeout ( () => {}
        this.retryResource (url, type) },
      Math.pow (2, attempts) * 1000) ; // Exponential backoff;
<<<<<<< HEAD
  }: pages.disabled/utils/resourceMonitor.tsx
  private retryResource (url: string, type: ResourceError[
  'type']) {
=======
  }
:pages.disabled/utils/resourceMonitor.tsx
'
  private retryResource (url: string, type: ResourceError['type']) {
>>>>>>> pr-10728
`
    console.log (`🔄 Retrying resource: ${url} (attempt ${this.retryAttempts.get (url) }) `) ;

  '
    if (type === 'script
  ') {
'
      this.loadScript (url) } else if (type ===
  'stylesheet') {

      this.loadStylesheet (url) }
  }

  private loadScript (src: string) {

    script.src = src;
    script.async = true;
    script.onload = () => {
`
      console.log (`✅ Script loaded successfully: ${src}`) ;
      this.retryAttempts.delete (src) };
    script.onerror = () => {
`
      console.error (`❌ Script retry failed: ${src}`) };
    document.head.appendChild (script) }

  private loadStylesheet (href: string) {
  '
    link.rel = 'stylesheet
  ';
    link.href = href;
    link.onload = () => {
`
      console.log (`✅ Stylesheet loaded successfully: ${href}`) ;
      this.retryAttempts.delete (href) };
    link.onerror = () => {
`
      console.error (`❌ Stylesheet retry failed: ${href}`) };
    document.head.appendChild (link) }

  private reportError (error: ResourceError) {

    // In production, send to monitoring service'
    if (process.env.NODE_ENV ===
  'production') {

      // Example: Sentry, LogRocket, etc.,
  console.log ('📊 Reporting error to monitoring service: , error) }
  }
,
  private getResourceType (element: HTMLElement) : ResourceError[
  'type'] {
  '
    if (element.tagName === 'SCRIPT
  ') return 'script
  ';'
    if (element.tagName ===
  'LINK' && (element as HTMLLinkElement) .rel ===
  'stylesheet') return
  'stylesheet';'
    if (element.tagName ===
  'IMG') return
  'image';'
    if (element.tagName ===
  'LINK' && (element as HTMLLinkElement) .rel ===
  'preload') return
  'font';'
    return
  'other}

  getErrors () : ResourceError[] {

    return [...this.errors]}

  clearErrors() {
    this.errors = [];
    this.retryAttempts.clear () }

  getErrorSummary() {
<<<<<<< HEAD
    this.errors.forEach (error => {summary.byType[error.type] = (summary.byType[error.type] || 0) + 1}) ;
=======
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
>>>>>>> pr-10728

    return summary}
}

:pages.disabled/utils/resourceMonitor.tsx
// Create singleton instance

<<<<<<< HEAD
'`
=======
'`
// Create singleton instance;
>>>>>>> pr-10728
