import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity } from 'lucide-react'

interface HealthData {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  metrics: {
    errorRate: number;
    criticalErrors: number;
    responseTime: number;
    memoryUsage: number
  }
  health: {
    status: string;
    score: number;
    issues: string[];
    recommendations: string[]
  }
  errors: {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;
      low: number
    }
    topErrors: Array<{
      patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string
    }>
    byCategory: { [category: string]: number }
  }
}

const HealthDashboard: React.FC;
