import { Activity, AlertTriangle, BarChart3, CheckCircle, Clock, Common, Cpu, File, HardDrive, Monitor, Monitor interface PerformanceMetric { name: string value: number unit: string trend: 'up' | 'down' | 'stable' status: 'good' | 'warning' | 'critical' icon: React.ComponentType < unknown> interface PerformanceData { timestamp: number metrics: PerformanceMetric[] alerts: string[] recommendations: string[] const PerformanceAnalytics: React.FC = () => { const [performanceData, Network, TrendingDown, TrendingUp, User, Zap, setIsMonitoring] = useState (false)  const [selectedTimeframe, setPerformanceData] = useState < PerformanceData | null> (null)  const [isMonitoring, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'> ('24h') ';
import { CheckCircle } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


