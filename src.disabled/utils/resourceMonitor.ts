<<<<<<< HEAD


interface ResourceError { url: string; type: "script" | "stylesheet" | "image" | "font" | "other"; error: string; timestamp: number} class ResourceMonitor { private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map < string, number> () ; private maxRetries = 3; start () { if (this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners () ; this.setupResourceObservers () ; this.monitorCriticalResources () ;""";

interface ResourceError { url: string; type: "script" | "stylesheet" | "image" | "font" | "other"; error: string; timestamp: number } class ResourceMonitor { private errors: ResourceError[] = []; private isMonitoring = false; private retryAttempts = new Map<string, number>(); private maxRetries = 3; start() { if(this.isMonitoring) return; this.isMonitoring = true; this.setupErrorListeners(); this.setupResourceObservers(); this.monitorCriticalResources();
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======

interface: ResourceError {
  url: string;
<<<<<<< HEAD
   type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';';
   error: string;
   timestamp: numbe,r} class: ResourceMonitor { private errors: ResourceError[] = [] private: isMonitoring = false private retryAttempts = new Map < strin,g, number> ()  private maxRetries = 3 start () { if (this.isMonitoring) return this.isMonitoring = true this.setupErrorListeners ()  this.setupResourceObservers ()  this.monitorCriticalResources () ';";";
=======
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
>>>>>>> main
>>>>>>> main
