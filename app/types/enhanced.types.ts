export interface EnhancedTypes {
  id: string;
  name: string;
  value: any;
}

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export interface AccessibilityFeatures {
  screenReader: boolean;
  keyboardNavigation: boolean;
  highContrast: boolean;
}