export interface PerformanceMetrics {
  url: string;
  timestamp: Date;
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  performanceScore: number;
  accessibilityScore: number;

  bestPracticesScore: any
export interface PerformanceAlert {
  id: string;
  url: string;
  type: any
  constructor(apiKey: string, baseUrl: string = 'https: any
  constructor (api_key: string, base_url: string = 'https: any