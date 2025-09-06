export interface PerformanceMetrics {;
  url:string,;
  timestamp:Date,;
  loadTime:number,;
  firstContentfulPaint:number,;
  largestContentfulPaint:number,;
  cumulativeLayoutShift:number,;
  firstInputDelay:number,;
  timeToInteractive:number,;
  totalBlockingTime:number,;
  speedIndex:number,;
  performanceScore:number,;
  accessibilityScore:number,;
  bestPracticesScore:number,;
  seoScore:number;

export interface PerformanceAlert {;
  id:string,;
  url:string,;
  type: any
  constructor(apiKey:string, baseUrl:string = 'https: any