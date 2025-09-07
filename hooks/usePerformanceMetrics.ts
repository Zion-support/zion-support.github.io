import { useEffect, useState } from 'react';''
import { PerformanceMetrics } from '../types';'
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
</PerformanceMetrics>'