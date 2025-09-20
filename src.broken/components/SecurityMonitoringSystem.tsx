 from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: 'critical' | 'high' | 'medium' | 'low';
  severity: number;
  description: string;
  source: string;
  timestamp: Date;
  status: 'active' | 'resolved' | 'investigating';
  affectedSystems: string[];
  recommendations: string[]}

