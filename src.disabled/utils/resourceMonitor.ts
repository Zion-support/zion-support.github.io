
interface ResourceError {
  url: string;
   type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
<<<<<<< HEAD
   erro,
    r: string;
   timestam,
    p: number} class ResourceMonitor { private errors: ResourceError[] = [] private isMonitoring = false private retryAttempts = new Map < string, number> ()  private maxRetries = 3 start () { if (this.isMonitoring) return this.isMonitoring = true this.setupErrorListeners ()  this.setupResourceObservers ()  this.monitorCriticalResources () ';";"
=======
   error: string;
   timestamp: number} class ResourceMonitor { private errors: ResourceError[] = [] private isMonitoring = false private retryAttempts = new Map < string, number> ()  private maxRetries = 3 start () { if (this.isMonitoring) return this.isMonitoring = true this.setupErrorListeners ()  this.setupResourceObservers ()  this.monitorCriticalResources () ;
>>>>>>> main
