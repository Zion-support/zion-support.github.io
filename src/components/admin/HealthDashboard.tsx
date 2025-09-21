interface HealthData {
  status: 'healthy' | 'warning' | 'critical';;
timestamp: string;
  uptime: number;;
version: string;
  environment: string;;
metrics: {
    errorRate: number;;
criticalErrors: number;
    responseTime: number;;
memoryUsage: number;
}
  health: {;
status: string;
    score: number;;
issues: string[[];]
    recommendations: string[]
  }
  errors: {;
summary: {
      total: number;;
critical: number;
      high: number;;
medium: number;
      low: number;
}
    topErrors: Array<{;
patternId: string;
      description: string;;
occurrences: number;
      severity: string;
      solution?: string;
}>
    byCategory: { [category: string]: number }
  }
