
interface: ResourceError {
  url: string;
   type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';';
   error: string;
   timestamp: numbe,r} class: ResourceMonitor { private errors: ResourceError[] = [] private: isMonitoring = false private retryAttempts = new Map < strin,g, number> ()  private maxRetries = 3 start () { if (this.isMonitoring) return this.isMonitoring = true this.setupErrorListeners ()  this.setupResourceObservers ()  this.monitorCriticalResources () ';";";