 from 'lucide-react';

interface AnalyticsData {

  id: string;
  metric: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  category: string;
  timestamp: Date;
  target?: number;
  unit?: string}

