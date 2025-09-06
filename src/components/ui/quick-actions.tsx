
=======

;
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const executeAction = async (actionId: string, action: () => void) => {;


    setIsProcessing(actionId);    try {
      await action()
    } catch (error) {
      logErrorToProduction(`Failed to execute action ${actionId}:`, {
        data: error
      })
import React, { useState } from 'react';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { logErrorToProduction } from '@/utils / production_logger';
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logErrorToProduction } from '@/utils/productionLogger'
    } catch (error) {
      logErrorToProduction (`Failed to execute action ${action_id}:`, {
        data: error,
      });
    } finally {
      setIsProcessing(null)
    }
  }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',
      description: 'Show real-time performance metrics',
      icon: <Activity className="w-4 h-4" />,
      category: 'performance',
      action: () => {
        localStorage.setItem('performance-monitoringtrue'),
        window.location.reload()
      }},
        localStorage.setItem('performance-monitoring', 'true')
        window.location.reload()
      },
    },
        localStorage.setItem('performance-monitoringtrue'),
        window.location.reload()
      }},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    {
    {
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className="w-4 h-4" />,
      category: 'maintenance',
      action: () => {
        window.location.reload()
      },
    },
  ]
  const categorizedActions = {
    performance: actions.filter(a => a.category === 'performance'),
    development: actions.filter(a => a.category === 'development'),
    maintenance: actions.filter(a => a.category === 'maintenance'),
  }
  const categoryColors = {
    performance:
      'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    development:
      'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance:
      'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200',
  }
      }}],


  const categoryColors = {
    performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button

=======
          variant='outline'
          size='sm'
          onClick={() => setIsVisible(true)}
          className='bg-background/80 backdrop-blur-sm'        >
          <Settings className='w-4 h-4 mr-2' />
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Settings className="w-4 h-4 mr-2" />
          Quick Actions
        </Button>
      </div>
    )
          className='bg-background/80 backdrop-blur-sm'        >;
          <Settings className='w-4 h-4 mr-2' />;
          Quick Actions;
        </Button>;
      </div>;
    );
  }
  return (
    <div className="fixed bottom-4 left-4 z-50 w-80">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Quick Actions
            </CardTitle>
            <Button

              ✕
            </Button>
          </div>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD


        <CardContent className="pt-0 space-y-4">
          {Object.entries(categorizedActions).map(([category, categoryActions]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={categoryColors[category as keyof typeof categoryColors]} variant="outline">
                  {category}
                </Badge>
              </div>
              <div className="space-y-2">
                {categoryActions.map((action) => (
                  <div key={action.id} className="space-y-1">
                    <Button
                      variant={action.dangerous ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => executeAction(action.id, action.action)}
                      disabled={isProcessing === action.id}
                      className="w-full justify-start h-auto p-3"
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="mt-0.5">
                          {isProcessing === action.id ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            action.icon
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-sm">{action.label}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {action.description}
                          </div>;
                        </div>;
                      </div>;
                    </Button>;
                  </div>;
                ))}
              </div>;
            </div>;
          ))}
        </CardContent>;
      </Card>;
    </div>;
  );
} ;
<<<<<<< HEAD
