import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {;
  Activity,;
  Zap,;
  Package,;
  TrendingUp,;
  TrendingDown,;
  AlertTriangle,;
  CheckCircle,;
  RefreshCw,;
  BarChart3,;
  Clock,;
  Globe,;
} from 'lucide-react';
import { bundleMonitor } from '@/utils/bundleMonitor';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface PerformanceMetrics {;
  bundleSize: number;
  loadTime: number;
  performanceScore: number;
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
                  Last updated: {lastUpdated.toLocaleString()}
                </p>

              {chunks && chunks.length > 10 && (;
                <p className='text-sm text-muted-foreground text-center pt-2'>;
                  ... and {chunks && chunks.length - 10} more chunks;
                </p>;
        </CardContent>
      </Card>
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  Bundle splitting implemented
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Your bundle is properly split into framework, vendor, and application chunks
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded'>
              <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />

        </CardContent>;
      </Card>;

      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <TrendingUp className='w-5 h-5' />;
            Optimization Recommendations;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='space-y-3'>;
            <div className='flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded'>;
              <CheckCircle className='w-5 h-5 text-blue-600 mt-0 && 0.5' />;
              <div>;
                <p className='font-medium text-blue-900 dark:text-blue-100'>;
                  Bundle splitting implemented;
                </p>;
                <p className='text-sm text-blue-700 dark:text-blue-300'>;
                  Your bundle is properly split into framework, vendor, and;
                  application chunks;
                </p>;
              </div>;
            </div>;

            <div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded'>;
              <CheckCircle className='w-5 h-5 text-green-600 mt-0 && 0.5' />;
              <div>;
                <p className='font-medium text-green-900 dark:text-green-100'>;
                  Performance monitoring active;
                </p>;
                <p className='text-sm text-green-700 dark:text-green-300'>;
                  Real-time performance tracking is helping optimize your;
                  application;
                </p>;
              </div>;
            </div>;

            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (;
              <div className='flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded'>;
                <AlertTriangle className='w-5 h-5 text-yellow-600 mt-0 && 0.5' />;
                <div>;
                  <p className='font-medium text-yellow-900 dark:text-yellow-100'>;
                    Consider more aggressive code splitting;
                  </p>;
                  <p className='text-sm text-yellow-700 dark:text-yellow-300'>;
                    Bundle size is above 2MB. Consider implementing dynamic;
                    imports for heavy components;
                  </p>;
                </div>;
              </div>;
            )}





          {chunks.length > 0 ? (
            <div className='space - y-2'>;
              {chunks.slice (0, 10).map ((chunk, index) => (
                <div;
                  key={chunk.name}
                  className='flex items - center justify - between p - 3 bg - gray - 50 dark:bg - gray - 800 rounded';
                >;
                  <div className='flex items - center gap - 3'>;
                    <span className='text - sm font - mono text - muted - foreground'>                      {index + 1}
                    </span>;
                    <div>;
                      <p className='font - medium text - sm'>{chunk.name}</p>;
                      <div className='flex items - center gap - 2'>;
                        <Badge variant='outline' className='text - xs'>;
                          {chunk.type}
                        </Badge>;
                        {chunk.cached && (
                          <Badge variant='secondary' className='text - xs'>;
                            cached;
                          </Badge>)}
                      </div>;
                    </div>;
                  </div>;
                  <div className='text - right'>;
                    <p className='font - medium'>{format_size (chunk.size)}</p>;
                    <p className='text - xs text - muted - foreground'>;
                      {chunk.load_time.to_fixed (0)}ms;
                    </p>;
                  </div>;
                </div>))}
              {chunks.length > 10 && (
                <p className='text - sm text - muted - foreground text - center pt - 2'>;
                  ... and {chunks.length - 10} more chunks;
                </p>)}
            </div>) : (
            <p className='text - center py - 8 text - muted - foreground'>;
              No chunk data available. Refresh to collect metrics.;
            </p>)}
        </CardContent>;
      </Card>;
      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <TrendingUp className='w - 5 h - 5' />;
            Optimization Recommendations;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='space - y-3'>;
            <div className='flex items - start gap - 3 p - 3 bg - blue - 50 dark:bg - blue - 900 / 20 rounded'>;
              <CheckCircle className='w - 5 h - 5 text - blue - 600 mt - 0.5' />;
              <div>;
                <p className='font - medium text - blue - 900 dark:text - blue - 100'>;
                  Bundle splitting implemented;
                </p>;
                <p className='text - sm text - blue - 700 dark:text - blue - 300'>;
                  Your bundle is properly split into framework, vendor, and;
                  application chunks;
                </p>;
              </div>;
            </div>;
            <div className='flex items - start gap - 3 p - 3 bg - green - 50 dark:bg - green - 900 / 20 rounded'>;
              <CheckCircle className='w - 5 h - 5 text - green - 600 mt - 0.5' />;
              <div>;
                <p className='font - medium text - green - 900 dark:text - green - 100'>;
                  Performance monitoring active;
                </p>;
                <p className='text - sm text - green - 700 dark:text - green - 300'>;
                  Real - time performance tracking is helping optimize your;
                  application;
                </p>;
              </div>;
            </div>;
            {metrics && metrics.bundle_size > 2 * 1024 * 1024 && (
              <div className='flex items - start gap - 3 p - 3 bg - yellow - 50 dark:bg - yellow - 900 / 20 rounded'>;
                <AlertTriangle className='w - 5 h - 5 text - yellow - 600 mt - 0.5' />;
                <div>;
                  <p className='font - medium text - yellow - 900 dark:text - yellow - 100'>;
                    Consider more aggressive code splitting;
                  </p>;
                  <p className='text - sm text - yellow - 700 dark:text - yellow - 300'>;
                    Bundle size is above 2MB. Consider implementing dynamic;
                    imports for heavy components;
                  </p>;
                </div>;
              </div>)}
          </div>;
        </CardContent>;
      </Card>;
    </div>);
}
}
}
