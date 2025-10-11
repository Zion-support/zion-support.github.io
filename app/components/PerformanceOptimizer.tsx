'use client';
import React, {useEffect, useState, useCallback}from 'react';
import {Settings, Zap, CheckCircle, AlertTriangle}}from 'lucide-react';

interface PerformanceOptimizerProps {
    children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean,
  enableCodeSplitting?: boolean;
  }

      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) 
        // Trigger garbage collection if available;
        if (window.gc) 
          window.gc()
  }
      }
    }
  }, []);

