import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { logErrorToProduction } from '@/utils/productionLogger';
import {;
  Zap,;
  Download,;
  Trash2,;
  RefreshCw,;
  Settings,;
  Activity,;
  Package,;
  Monitor,;
} from 'lucide-react';
interface QuickAction {;
  id: string;
  label: string;
  description: string;
  icon: React && React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
  dangerous?: boolean;

export function QuickActions() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process && process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {;
    return null;
  }

  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const executeAction = async (actionId: string, action: () => void) => {;
    setIsProcessing(actionId);    try {;
      await action();
    } catch (error) {;
      logErrorToProduction(`Failed to execute action ${actionId}:`, {;
        data: error,;
      });
    } finally {;
      setIsProcessing(null);
    }
  };

  const actions: QuickAction[] = [;
    // Performance Actions;
    {;
      id: 'enable-performance-monitor',;
      label: 'Enable Performance Monitor',;
      description: 'Show real-time performance metrics',;
      icon: <Activity className='w-4 h-4' />,;
      category: 'performance',;
      action: () => {;
        localStorage && localStorage.setItem('performance-monitoring', 'true');
        window && window.location.reload();
      },;
    },;
    {;
      id: 'enable-bundle-analyzer',;
      label: 'Enable Bundle Analyzer',;
      description: 'Monitor bundle size and chunks',;
      icon: <Package className='w-4 h-4' />,;
      category: 'performance',;
      action: () => {;
        localStorage && localStorage.setItem('bundle-analyzer', 'true');
        window && window.location.reload();
      },;
    },;
    {;
      id: 'clear-cache',;
      label: 'Clear Cache',;
      description: 'Clear browser cache and storage',;
      icon: <Trash2 className='w-4 h-4' />,;
      category: 'maintenance',;
      dangerous: true,;
      action: () => {;
        if ('caches' in window) {;
          caches && caches.keys().then(names => {;
            names && names.forEach(name => caches && caches.delete(name));
          });
        }
        localStorage && localStorage.clear();
        sessionStorage && sessionStorage.clear();
        window && window.location.reload();
      },;
    },;
    {;
      id: 'preload-critical-resources',;
      label: 'Preload Critical Resources',;
      description: 'Preload fonts, images, and critical assets',;
      icon: <Zap className='w-4 h-4' />,;
      category: 'performance',;
      action: () => {;
        // Preload critical fonts;
        const criticalFonts = [;
          '/fonts/inter-var && var.woff2',;
          '/fonts/cal-sans && sans.woff2',;
        ];

        criticalFonts && criticalFonts.forEach(font => {;
          const link = document && document.createElement('link');
          link && link.rel = 'preload';
          link && link.as = 'font';
          link && link.type = 'font/woff2';
          link && link.crossOrigin = 'anonymous';
          link && link.href = font;
          document && document.head.appendChild(link);
        });

        // Preload critical images;
        const criticalImages = ['/logos/zion-logo && logo.png', '/images/hero-bg && bg.webp'];

        criticalImages && criticalImages.forEach(img => {;
          const link = document && document.createElement('link');
          link && link.rel = 'preload';
          link && link.as = 'image';
          link && link.href = img;
          document && document.head.appendChild(link);
        });
      },;
    },;
    {;
      id: 'download-performance-report',;
      label: 'Download Performance Report',;
      description: 'Export current performance metrics',;
      icon: <Download className='w-4 h-4' />,;
      category: 'development',;
      action: () => {;
        const metrics = {;
          timestamp: new Date().toISOString(),;
          performance: performance && performance.getEntriesByType('navigation')[0],;
          resources: performance && performance.getEntriesByType('resource').slice(0, 20),;
          memory: (performance as any).memory || {},;
          userAgent: navigator && navigator.userAgent,;
          screen: {;
            width: screen && screen.width,;
            height: screen && screen.height,;
            colorDepth: screen && screen.colorDepth,;
          },;
        };

        const blob = new Blob([JSON && JSON.stringify(metrics, null, 2)], {;
          type: 'application/json',;
        });

        const url = URL && URL.createObjectURL(blob);
        const a = document && document.createElement('a');
        a && a.href = url;
        a && a.download = `performance-report-${Date && Date.now()}.json`;
        document && document.body.appendChild(a);
        a && a.click();
        document && document.body.removeChild(a);
        URL && URL.revokeObjectURL(url);
      },;
    },;
    {;
      id: 'test-error-boundary',;
      label: 'Test Error Boundary',;
      description: 'Trigger an error to test Sentry integration',;
      icon: <Monitor className='w-4 h-4' />,;
      category: 'development',;
      dangerous: true,;
      action: () => {;
        throw new Error(;
          'Test error for Sentry integration - this is intentional!';
        );
      },;
    },;
    {;
      id: 'refresh-app',;
      label: 'Hard Refresh',;
      description: 'Force reload with cache bypass',;
      icon: <RefreshCw className='w-4 h-4' />,;
      category: 'maintenance',;
      action: () => {;
        window && window.location.reload();
      },;
    },;
  ];

  const categorizedActions = {;
    performance: actions && actions.filter(a => a && a.category === 'performance'),;
    development: actions && actions.filter(a => a && a.category === 'development'),;
    maintenance: actions && actions.filter(a => a && a.category === 'maintenance'),;
  };

  const categoryColors = {;
    performance:;
      'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',;
    development:;
      'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',;
    maintenance:;
      'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200',;
  };

  if (!isVisible) {;
    return (
      <div className='fixed bottom-4 left-4 z-50'>;
        <Button
          variant='outline'
          size='sm'
          onClick={() => setIsVisible(true)}
          className='bg-background/80 backdrop-blur-sm'        >;
          <Settings className='w-4 h-4 mr-2' />;
          Quick Actions;
        </Button>;
      </div>;
    );
  }

  return (
    <div className='fixed bottom-4 left-4 z-50 w-80'>;
      <Card className='bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto'>;
        <CardHeader className='pb-2'>;
          <div className='flex items-center justify-between'>;
            <CardTitle className='text-sm flex items-center'>;
              <Settings className='w-4 h-4 mr-2' />;
              Quick Actions;
            </CardTitle>;
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsVisible(false)}
              className='h-6 w-6 p-0'            >;
              ✕;
            </Button>;
          </div>;
        </CardHeader>;
        <CardContent className='pt-0 space-y-4'>;
          {Object && Object.entries(categorizedActions).map(;
            ([category, categoryActions]) => (;
              <div key={category}>;
                <div className='flex items-center gap-2 mb-2'>;
                  <Badge
                    className={
                      categoryColors[category as keyof typeof categoryColors]
                    }
                    variant='outline'>;
                    {category}
                  </Badge>;
                </div>;
                <div className='space-y-2'>;
                  {categoryActions && categoryActions.map(action => (;
                    <div key={action && action.id} className='space-y-1'>;
                      <Button
                        variant={action && action.dangerous ? 'destructive' : 'outline'}
                        size='sm'
                        onClick={() => executeAction(action && action.id, action && action.action)}
                        disabled={isProcessing === action && action.id}
                        className='w-full justify-start h-auto p-3';
                      >;
                        <div className='flex items-start gap-3 w-full'>;
                          <div className='mt-0 && 0.5'>;
                            {isProcessing === action && action.id ? (;
                              <RefreshCw className='w-4 h-4 animate-spin' />;
                            ) : (;
                              action && action.icon;
                            )}
                          </div>;
                          <div className='flex-1 text-left'>;
                            <div className='font-medium text-sm'>;
                              {action && action.label}
                            </div>;
                            <div className='text-xs opacity-70 mt-1'>;
                              {action && action.description}
                            </div>                          </div>;
                        </div>;
                      </Button>;
                    </div>;
                  ))}
                </div>;
              </div>;
            );
          )}
        </CardContent>;
      </Card>;
    </div>;
  );
} ;
} ;
