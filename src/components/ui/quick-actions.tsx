

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logErrorToProduction } from '@/utils/productionLogger'
import {
  Zap
  Download
  Trash2
  RefreshCw
  Settings
  Activity
  Package
  Monitor
} from 'lucide-react'

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
  dangerous?: boolean
export function QuickActions() {

  const { user } = useAuth()
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const isAllowed = process.env.NODE_ENV !== 'production' |isAdmin
  if (!isAllowed) {
    return null
  }

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
    } finally {
      setIsProcessing(null)
    }
  }


=======
import React, { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import { Zap, Download, Trash2, RefreshCw, Settings, Activity, Package, Monitor } from 'lucide-react';
interface QuickAction {;
  id: string,;
  label: string,;
  description: string,;
  icon: React.ReactNode,;
  action: () => void,;
  category: 'performance' | 'development' | 'maintenance',;
  dangerous?: boolean;
}
;
export function QuickActions() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin,;
  if (!isAllowed) {;
    return null;
  }
;
  const [isVisible, setIsVisible] = useState(false),;
  const [isProcessing, setIsProcessing] = useState<string | null>(null),;
  const executeAction = async (actionId: string, action: () => void) => {;
    setIsProcessing(actionId),;
    try {;
      await action();
    } catch (error) {;
      logErrorToProduction(`Failed to execute action ${actionId}:`, { data: error });
    } finally {;
      setIsProcessing(null);
    }
  },



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',
      description: 'Show real-time performance metrics',
      icon: <Activity className="w-4 h-4" />,
      category: 'performance',
      action: () => {


    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className="w-4 h-4" />,
      category: 'performance',
      action: () => {


    {
      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className="w-4 h-4" />,
      category: 'maintenance',
      dangerous: true,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name))
          })
        }

      },
    },
=======
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      }},

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      id: 'preload-critical-resources'
      label: 'Preload Critical Resources'
      description: 'Preload fonts, images, and critical assets'
      icon: <Zap className='w-4 h-4' />
      category: 'performance'
      action: () => {
        // Preload critical fonts
        const criticalFonts = [


    {
      id: 'download-performance-report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className="w-4 h-4" />,
      category: 'development',
      action: () => {
        const metrics = {
          timestamp: new Date().toISOString(),
          performance: window.window.window.performance.getEntriesByType('navigation')[0],
          resources: window.window.window.performance.getEntriesByType('resource').slice(0, 20),
          memory: (performance as any).memory || {},
          userAgent: navigator.userAgent,
          screen: {
            width: screen.width,
            height: screen.height,


    {
      id: 'test-error-boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className="w-4 h-4" />,
      category: 'development',
      dangerous: true,
      action: () => {


    {
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className="w-4 h-4" />,
      category: 'maintenance',
      action: () => {
        window.location.reload()





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ✕
            </Button>
          </div>
        </CardHeader>


=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
