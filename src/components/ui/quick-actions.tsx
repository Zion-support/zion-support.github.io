<<<<<<< HEAD
import React, { useState } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import {logErrorToProduction} from '@/utils/productionLogger',
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
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin,

  if (!isAllowed) {
    return null
  }
=======
import React, {_useState} from 'react';

interface QuickAction {_id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
  dangerous?: boolean;}

export function QuickActions() {_const { user} = useAuth();
  const _isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const _isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [isVisible, setIsVisible] = useState(false),
  const [isProcessing, setIsProcessing] = useState<string | null>(null),

<<<<<<< HEAD
  const executeAction = async (actionId: string, action: () => void) => {
    setIsProcessing(actionId),
    try {
      await action()
    } catch (error) {
      logErrorToProduction(`Failed to execute action ${actionId}:`, { data: error })
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
      icon: <Activity className=&quot;w-4 h-4&quot; />,
      category: 'performance',
      action: () => {
        localStorage.setItem('performance-monitoringtrue'),
        window.location.reload()
      }},
    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className=&quot;w-4 h-4&quot; />,
      category: 'performance',
      action: () => {
        localStorage.setItem('bundle-analyzertrue'),
        window.location.reload()
      }},
    {
      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className=&quot;w-4 h-4&quot; />,
      category: 'maintenance',
      dangerous: true,
      action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name))
          })
=======
  const _executeAction = async (_actionId: string, _action: () => void) => {_setIsProcessing(actionId);
    try {
      await action();} catch (error) {_logErrorToProduction(`Failed to execute action ${actionId}:`, {_data: error});
    } finally {_setIsProcessing(null);}
  };

  const actions: QuickAction[] = [
    // Performance Actions
    {_id: 'enable-performance-monitor', _label: 'Enable Performance Monitor', _description: 'Show real-time performance metrics', _icon: <Activity className="w-4 h-4" />, _category: 'performance', _action: () => {
        localStorage.setItem('performance-monitoring', _'true');
        window.location.reload();}},
    {_id: 'enable-bundle-analyzer', _label: 'Enable Bundle Analyzer', _description: 'Monitor bundle size and chunks', _icon: <Package className="w-4 h-4" />, _category: 'performance', _action: () => {
        localStorage.setItem('bundle-analyzer', _'true');
        window.location.reload();}},
    {_id: 'clear-cache', _label: 'Clear Cache', _description: 'Clear browser cache and storage', _icon: <Trash2 className="w-4 h-4" />, _category: 'maintenance', _dangerous: true, _action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name));});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      }},
<<<<<<< HEAD
    {
      id: 'preload-critical-resources',
      label: 'Preload Critical Resources',
      description: 'Preload fonts, images, and critical assets',
      icon: <Zap className=&quot;w-4 h-4&quot; />,
      category: 'performance',
      action: () => {
        // Preload critical fonts
        const criticalFonts = [
          '/fonts/inter-var.woff2/fonts/cal-sans.woff2'
        ],
        
        criticalFonts.forEach(font => {
          const link = document.createElement('link'),
          link.rel = 'preload',
          link.as = 'font',
          link.type = 'font/woff2',
          link.crossOrigin = 'anonymous',
          link.href = font,
          document.head.appendChild(link)
        }),

        // Preload critical images
        const criticalImages = [
          '/logos/zion-logo.png/images/hero-bg.webp'
        ],
        
        criticalImages.forEach(img => {
          const link = document.createElement('link'),
          link.rel = 'preload',
          link.as = 'image',
          link.href = img,
          document.head.appendChild(link)
        })
      }},
    {
      id: 'download-performance-report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className=&quot;w-4 h-4&quot; />,
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
            colorDepth: screen.colorDepth
          }
        },

        const blob = new Blob([JSON.stringify(metrics, null, 2)], {
          type: 'application/json'
        }),
        
        const url = URL.createObjectURL(blob),
        const a = document.createElement('a'),
        a.href = url,
        a.download = `performance-report-${Date.now()}.json`,
        document.body.appendChild(a),
        a.click(),
        document.body.removeChild(a),
        URL.revokeObjectURL(url)
      }},
    {
      id: 'test-error-boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className=&quot;w-4 h-4&quot; />,
      category: 'development',
      dangerous: true,
      action: () => {
        throw new Error('Test error for Sentry integration - this is intentional!')
      }},
    {
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className=&quot;w-4 h-4&quot; />,
      category: 'maintenance',
      action: () => {
        window.location.reload()
      }}],

  const categorizedActions = {
    performance: actions.filter(a => a.category === 'performance'),
    development: actions.filter(a => a.category === 'development'),
    maintenance: actions.filter(a => a.category === 'maintenance')},

  const categoryColors = {
    performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},

  if (!isVisible) {
    return (
      <div className=&quot;fixed bottom-4 left-4 z-50&quot;>
=======
    {_id: 'preload-critical-resources', _label: 'Preload Critical Resources', _description: 'Preload fonts, _images, _and critical assets', _icon: <Zap className="w-4 h-4" />, _category: 'performance', _action: () => {
        // Preload critical fonts
        const _criticalFonts = [
          '/fonts/inter-var.woff2', _'/fonts/cal-sans.woff2'
        ];
        
        criticalFonts.forEach(font => {
          const _link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
          link.href = font;
          document.head.appendChild(link);});

        // Preload critical images
        const _criticalImages = [
          '/logos/zion-logo.png',
          '/images/hero-bg.webp'
        ];
        
        criticalImages.forEach(img => {_const _link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = img;
          document.head.appendChild(link);});
      }},
    {_id: 'download-performance-report', _label: 'Download Performance Report', _description: 'Export current performance metrics', _icon: <Download className="w-4 h-4" />, _category: 'development', _action: () => {
        const _metrics = {
          timestamp: new Date().toISOString(), _performance: performance.getEntriesByType('navigation')[0], _resources: performance.getEntriesByType('resource').slice(0, _20), _memory: (performance as any).memory || {},
          userAgent: navigator.userAgent,
          screen: {_width: screen.width, _height: screen.height, _colorDepth: screen.colorDepth}
        };

        const _blob = new Blob([JSON.stringify(metrics, null, 2)], {_type: 'application/json'});
        
        const _url = window.URL.createObjectURL(blob);
        const _a = document.createElement('a');
        a.href = url;
        a.download = `performance-report-${_Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }},
    {_id: 'test-error-boundary', _label: 'Test Error Boundary', _description: 'Trigger an error to test Sentry integration', _icon: <Monitor className="w-4 h-4" />, _category: 'development', _dangerous: true, _action: () => {
        throw new Error('Test error for Sentry integration - this is intentional!');}},
    {_id: 'refresh-app', _label: 'Hard Refresh', _description: 'Force reload with cache bypass', _icon: <RefreshCw className="w-4 h-4" />, _category: 'maintenance', _action: () => {
        window.location.reload();}}];

  const _categorizedActions = {_performance: actions.filter(a => a.category === 'performance'), _development: actions.filter(a => a.category === 'development'), _maintenance: actions.filter(a => a.category === 'maintenance')};

  const _categoryColors = {_performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200', _development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200', _maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'};

  if (!isVisible) {_return (_<div className="fixed bottom-4 left-4 z-50">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Button
          variant=&quot;outline&quot;
          size=&quot;sm&quot;
          onClick={() => setIsVisible(true)}
          className=&quot;bg-background/80 backdrop-blur-sm&quot;
        >
          <Settings className=&quot;w-4 h-4 mr-2&quot; />
          Quick Actions
        </Button>
      </div>
    )
  }

<<<<<<< HEAD
  return (
    <div className=&quot;fixed bottom-4 left-4 z-50 w-80&quot;>
      <Card className=&quot;bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <CardTitle className=&quot;text-sm flex items-center&quot;>
              <Settings className=&quot;w-4 h-4 mr-2&quot; />
              Quick Actions
            </CardTitle>
            <Button
              variant=&quot;ghost&quot;
              size=&quot;sm&quot;
              onClick={() => setIsVisible(false)}
              className=&quot;h-6 w-6 p-0&quot;
=======
  return (_<div className="fixed bottom-4 left-4 z-50 w-80">
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
              onClick={_() => setIsVisible(false)}
              className="h-6 w-6 p-0"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              ✕
            </Button>
          </div>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className=&quot;pt-0 space-y-4&quot;>
          {Object.entries(categorizedActions).map(([category, categoryActions]) => (
            <div key={category}>
              <div className=&quot;flex items-center gap-2 mb-2&quot;>
                <Badge className={categoryColors[category as keyof typeof categoryColors]} variant=&quot;outline&quot;>
                  {category}
                </Badge>
              </div>
              <div className=&quot;space-y-2&quot;>
                {categoryActions.map((action) => (
                  <div key={action.id} className=&quot;space-y-1&quot;>
                    <Button
                      variant={action.dangerous ? &quot;destructive&quot; : &quot;outline&quot;}
                      size=&quot;sm&quot;
                      onClick={() => executeAction(action.id, action.action)}
                      disabled={isProcessing === action.id}
                      className=&quot;w-full justify-start h-auto p-3&quot;
                    >
                      <div className=&quot;flex items-start gap-3 w-full&quot;>
                        <div className=&quot;mt-0.5&quot;>
                          {isProcessing === action.id ? (
                            <RefreshCw className=&quot;w-4 h-4 animate-spin&quot; />
=======
        <CardContent className="pt-0 space-y-4">
          {_Object.entries(categorizedActions).map(_([category, _categoryActions]) => (_<div key={category}>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={_categoryColors[category as keyof typeof categoryColors]} variant="outline">
                  {_category}
                </Badge>
              </div>
              <div className="space-y-2">
                {_categoryActions.map((action) => (_<div key={action.id} className="space-y-1">
                    <Button
                      variant={_action.dangerous ? "destructive" : "outline"}
                      size="sm"
                      onClick={_() => executeAction(action.id, _action.action)}
                      disabled={_isProcessing === action.id}
                      className="w-full justify-start h-auto p-3"
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="mt-0.5">
                          {_isProcessing === action.id ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          ) : (
                            action.icon
                          )}
                        </div>
<<<<<<< HEAD
                        <div className=&quot;flex-1 text-left&quot;>
                          <div className=&quot;font-medium text-sm&quot;>{action.label}</div>
                          <div className=&quot;text-xs opacity-70 mt-1&quot;>
                            {action.description}
=======
                        <div className="flex-1 text-left">
                          <div className="font-medium text-sm">{_action.label}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {_action.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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