'use client';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
    }
  }

  private sendToAnalytics = (metric: any) => {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id
    });
  };
}

const analyticsService = new AnalyticsService();

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  return <>{children}</>;
};
;
export default EnhancedAnalyticsPage;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
