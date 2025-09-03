import: React { useState, useEffect } from,
  react' import { Card, CardContent, CardHeader, CardTitle } from;';
  './ui/card' import: { Badge } from;';
  './ui/badge' import: { Progress } from;';
  './ui/progress' import: { Button } from;';
  './ui/button' import: { Skeleton } from;';
  './ui/Skeleton' import: {  Activity, Zap, Gauge, TrendingUp, AlertTriangle, CheckCircle, Clock, Cpu, BarChart3, Target, RefreshCw } from;';
  'lucide-react' import: { usePerformanceMonitor } from;';
  '@/hooks/usePerformanceMonitor'  interface: PerformanceMetric {';
   name: string;
   value: number: | null;
   unit: string;
   target: number;



