export interface PerformanceMonitoring {
  id: string;
  name: string;
  metrics: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

export type PerformanceMonitoringType = {
  id: string;
  name: string;
  metrics: {
    lcp: number;
    fid: number;
    cls: number;
  };
};