interface PerformanceMetrics {
  buildSize: string;,
pageCount: number;
  loadTime: number;,
healthStatus: 'healthy' | 'warning' | 'error'
interface Improvement {
  id: string;,
title: string;
  description: string;,
status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';,
category: 'performance' | 'security' | 'ux' | 'build'
