import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {logErrorToProduction} from '@/utils/productionLogger';
import { Zap, Download, Trash2, RefreshCw, Settings, Activity, Package, Monitor } from 'lucide-react'

interface QuickAction {
  id: string,
  label: string,
  description: string,
  icon: React.ReactNode,
  action: () => void,
  category: 'performance' | 'development' | 'maintenance',
  dangerous?: boolean
}

export function QuickActions() {
  const { user } = useAuth($2);
  const isAdmin = $2;
  const isAllowed = $2;
  if (!isAllowed) {
    return null
  }

  const [isVisible, setIsVisible] = useState($2);
  const [isProcessing, setIsProcessing] = useState<string | null>(null),

  const executeAction = async (actionId: string, action: () => void) => {
    setIsProcessing($2);
    try {
      await action()
    } catch (error) {
      logErrorToProduction(`Failed to execute action ${actionId}:`, { data: error})
    } finally {
      setIsProcessing(null)
    }
  },

  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',
      description: 'Show real-time performance metrics',
      icon: <Activity className = $2;
      category: 'performance',
      action: () => {
        localStorage.setItem($2);
        window.location.reload()
      }},
    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className = $2;
      category: 'performance',
      action: () => {
        localStorage.setItem($2);
        window.location.reload()
      }},
    {
      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className = $2;
      category: 'maintenance',
      dangerous: true,
      action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name))
          })
        }
        localStorage.clear($2);
        sessionStorage.clear($2);
        window.location.reload()
      }},
    {
      id: 'preload-critical-resources',
      label: 'Preload Critical Resources',
      description: 'Preload fonts, images, and critical assets',
      icon: <Zap className = $2;
      category: 'performance',
      action: () => {
        // Preload critical fonts
        const criticalFonts = $2;
        criticalFonts.forEach($2);
          link.rel = $2;
          link.as = $2;
          link.type = $2;
          link.crossOrigin = $2;
          link.href = $2;
          document.head.appendChild(link)
        }),

        // Preload critical images
        const criticalImages = $2;
        criticalImages.forEach($2);
          link.rel = $2;
          link.as = $2;
          link.href = $2;
          document.head.appendChild(link)
        })
      }},
    {
      id: 'download-performance-report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className = $2;
      category: 'development',
      action: () => {
        const metrics = {
          timestamp: new Date().toISOString($2);
          performance: performance.getEntriesByType('navigation')[0],
          resources: performance.getEntriesByType('resource').slice($2);
          memory: (performance as any).memory || {},
          userAgent: navigator.userAgent,
          screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
          }
        },

        const blob = new Blob([JSON.stringify(metrics, null, 2)], {
          type: 'application/json'
        }),
        
        const url = URL.createObjectURL($2);
        const a = document.createElement($2);
        a.href = $2;
        a.download = $2;
        document.body.appendChild($2);
        a.click($2);
        document.body.removeChild($2);
        URL.revokeObjectURL(url)
      }},
    {
      id: 'test-error-boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className = $2;
      category: 'development',
      dangerous: true,
      action: () => {
        throw new Error('Test error for Sentry integration - this is intentional!')
      }},
    {
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className = $2;
      category: 'maintenance',
      action: () => {
        window.location.reload()
      }}],

  const categorizedActions = {
    performance: actions.filter($2);
    development: actions.filter($2);
    maintenance: actions.filter(a = $2;
  const categoryColors = $2;
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button
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
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
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
                          </div>
                        </div>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
} 