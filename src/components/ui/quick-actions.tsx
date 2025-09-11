<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logErrorToProduction } from '@/utils/productionLogger'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  label: string;
  description: string;
  icon: React && React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';


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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
<<<<<<< HEAD
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const executeAction = async (actionId: string, action: () => void) => {
    setIsProcessing(actionId);    try {
      await action()
    } catch (error) {
      logErrorToProduction (`Failed to execute action ${action_id}:`, {
        data: error,
      });
  dangerous?: boolean
export function QuickActions() {

  const { user } = useAuth()
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const isAllowed = process.env.NODE_ENV !== 'production' |isAdmin
  if (!isAllowed) {
    return null
  }
  const [isVisible, setIsVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const executeAction = async (actionId: string, action: () => void) => {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const executeAction = async (actionId: string, action: () => void) => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsProcessing(actionId);    try {
      await action()
    } catch (error) {
      logErrorToProduction(`Failed to execute action ${actionId}:`, {
        data: error
      })
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { logErrorToProduction } from '@/utils / production_logger';
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Zap,
  Download,
  Trash2,
  RefreshCw,
  Settings,
  Activity,
  Package,
  Monitor,
} from 'lucide-react';
interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
  dangerous?: boolean;
export /**
 * QuickActions - Function description
 */
function QuickActions() {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const is_allowed = process.env.NODE_ENV !== 'production' || is_admin;
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  const [is_visible, setIsVisible] = useState (false);
  const [is_processing, setIsProcessing] = useState < string | null>(null);
  const execute_action = async (action_id: string, action: () => void) => {
    setIsProcessing (action_id);    try {
      await action ();
    } catch (error) {
      logErrorToProduction (`Failed to execute action ${action_id}:`, {
        data: error,
      });
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsProcessing(null)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor'
      label: 'Enable Performance Monitor'
      description: 'Show real-time performance metrics'
      icon: <Activity className='w-4 h-4' />
      category: 'performance'
      action: () => {
        localStorage.setItem('performance-monitoring', 'true')
        window.location.reload()
      }
    }
    {
      id: 'enable-bundle-analyzer'
      label: 'Enable Bundle Analyzer'
      description: 'Monitor bundle size and chunks'
      icon: <Package className='w-4 h-4' />
      category: 'performance'
      action: () => {
        localStorage.setItem('bundle-analyzer', 'true')
        window.location.reload()
      }
    }
    {
      id: 'clear-cache'
      label: 'Clear Cache'
      description: 'Clear browser cache and storage'
      icon: <Trash2 className='w-4 h-4' />
      category: 'maintenance'
      dangerous: true
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      id: 'enable - performance - monitor',


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

<<<<<<< HEAD
<<<<<<< HEAD
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

=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',
      description: 'Show real-time performance metrics',
      icon: <Activity className="w-4 h-4" />,
      category: 'performance',
      action: () => {
<<<<<<< HEAD
<<<<<<< HEAD
        localStorage.setItem('performance-monitoringtrue'),
        window.location.reload()
      }},
        localStorage.setItem('performance-monitoringtrue'),
        window.location.reload()
      }},
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className="w-4 h-4" />,
      category: 'performance',
      action: () => {
<<<<<<< HEAD
<<<<<<< HEAD
        localStorage.setItem('bundle-analyzertrue'),
        window.location.reload()
      }},
        localStorage.setItem('bundle-analyzertrue'),
        window.location.reload()
      }},
        localStorage.setItem('bundle-analyzertrue'),
        window.location.reload()
      }},
        localStorage.setItem('bundle-analyzer', 'true')
        window.location.reload()
      },
    },
        localStorage.setItem('bundle-analyzertrue'),
        window.location.reload()
      }},
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className="w-4 h-4" />,
      category: 'maintenance',
      dangerous: true,
      action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name))
          })
        }
<<<<<<< HEAD
      }
    }
ursor/fix-website-loading-errors-and-merge-6662
        localStorage.clear()
        sessionStorage.clear()
        window.location.reload()
      }
    }
      },
    },
      id: 'enable - bundle - analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className='w - 4 h - 4' />,
      category: 'performance',
      action: () => {




    {
      id: 'clear - cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className='w - 4 h - 4' />,
      category: 'maintenance',
      dangerous: true,
      action: () => {
        // Check condition
if ( {) {
  $2
}
          caches.keys ().then (names => {
            names.for_each (name => caches.delete (name));
          });
        }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      },
    },
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      }},


    {
<<<<<<< HEAD
=======
      id: 'preload-critical-resources'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      label: 'Preload Critical Resources'
      description: 'Preload fonts, images, and critical assets'
      icon: <Zap className='w-4 h-4' />
      category: 'performance'
      action: () => {
        // Preload critical fonts
        const criticalFonts = [
<<<<<<< HEAD
<<<<<<< HEAD
          '/fonts/inter-var.woff2'
          '/fonts/cal-sans.woff2'
          '/fonts/inter-var.woff2',
          '/fonts/cal-sans.woff2',
        ]
        criticalFonts.forEach(font => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'font'
          link.type = 'font/woff2'
          link.crossOrigin = 'anonymous'
          link.href = font
          document.head.appendChild(link)
        })
        // Preload critical images
        const criticalImages = ['/logos/zion-logo.png', '/images/hero-bg.webp']
        criticalImages.forEach(img => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = img
          document.head.appendChild(link)
        })
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

          '/fonts/inter-var.woff2'
          '/fonts/cal-sans.woff2'
      }
    }
    {
      id: 'download-performance-report'
      label: 'Download Performance Report'
      description: 'Export current performance metrics'
      icon: <Download className='w-4 h-4' />
      category: 'development'
      action: () => {
        const metrics = {
          timestamp: new Date().toISOString()
          performance: performance.getEntriesByType('navigation')[0]
          resources: performance.getEntriesByType('resource').slice(0, 20)
          memory: (performance as any).memory |{}
          userAgent: navigator.userAgent
          screen: {
            width: screen.width
            height: screen.height
            colorDepth: screen.colorDepth
          }
        }
        const blob = new Blob([JSON.stringify(metrics, null, 2)], {
          type: 'application/json'
        })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `performance-report-${Date.now()}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    }
    {
      id: 'test-error-boundary'
      label: 'Test Error Boundary'
      description: 'Trigger an error to test Sentry integration'
      icon: <Monitor className='w-4 h-4' />
      category: 'development'
      dangerous: true
      action: () => {
        throw new Error(
          'Test error for Sentry integration - this is intentional!'
        )
      }
    }
    {
      id: 'refresh-app'
      label: 'Hard Refresh'
      description: 'Force reload with cache bypass'
      icon: <RefreshCw className='w-4 h-4' />
      category: 'maintenance'
      action: () => {
        window.location.reload()
      }
    }
  ]
  const categorizedActions = {
    performance: actions.filter(a => a.category === 'performance')
    development: actions.filter(a => a.category === 'development')
    maintenance: actions.filter(a => a.category === 'maintenance')
  }
  const categoryColors = {
    performance:
      'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
    development:
      'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
    maintenance:
      'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'
  }
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      }},
    {
      id: 'preload-critical-resources',
      label: 'Preload Critical Resources',
      description: 'Preload fonts, images, and critical assets',
      icon: <Zap className="w-4 h-4" />,
      category: 'performance',
      action: () => {
        // Preload critical fonts
        const criticalFonts = [
      },
    },
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
=======

  dangerous?: boolean;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
            colorDepth: screen.colorDepth,
          },
        }
        const blob = new Blob([JSON.stringify(metrics, null, 2)], {
          type: 'application/json',
        })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `performance-report-${Date.now()}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      },
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            colorDepth: screen.colorDepth
          }
        },
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: 'test-error-boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className="w-4 h-4" />,
      category: 'development',
      dangerous: true,
      action: () => {
        throw new Error('Test error for Sentry integration - this is intentional!')
      }},
<<<<<<< HEAD
        throw new Error(
          'Test error for Sentry integration - this is intentional!'
        )
      },
    },
=======
    {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className="w-4 h-4" />,
      category: 'maintenance',
      action: () => {
        window.location.reload()
<<<<<<< HEAD
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
  if (!isVisible) {
      <div className='fixed bottom-4 left-4 z-50'>;
        <Button
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'test-error-boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className="w-4 h-4" />,
      category: 'development',
      dangerous: true,
      action: () => {
        throw new Error('Test error for Sentry integration - this is intentional!')
      }},
<<<<<<< HEAD
        throw new Error(
          'Test error for Sentry integration - this is intentional!'
        )
      },
    },
        throw new Error('Test error for Sentry integration - this is intentional!')
      }},
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className="w-4 h-4" />,
      category: 'maintenance',
      action: () => {
        window.location.reload()
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }}],

  const categorizedActions = {
    performance: actions.filter(a => a.category === 'performance'),
    development: actions.filter(a => a.category === 'development'),
    maintenance: actions.filter(a => a.category === 'maintenance')},

  const categoryColors = {
    performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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





<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant='outline'
          size='sm'
          onClick={() => setIsVisible(true)}
          className='bg-background/80 backdrop-blur-sm'        >
          <Settings className='w-4 h-4 mr-2' />
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Settings className="w-4 h-4 mr-2" />


          Quick Actions
<<<<<<< HEAD
=======
        </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >


              ✕
            </Button>
          </div>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

              variant='ghost'
              size='sm'
              onClick={() => setIsVisible(false)}
              className='h-6 w-6 p-0'            >
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className='pt-0 space-y-4'>
          {Object.entries(categorizedActions).map(
            ([category, categoryActions]) => (
              <div key={category}>
                <div className='flex items-center gap-2 mb-2'>
                  <Badge
                    className={
                      categoryColors[category as keyof typeof categoryColors]
                    }
                    variant='outline'
                  >
                    {category}
                  </Badge>
                </div>
                <div className='space-y-2'>
                  {categoryActions.map(action => (
                    <div key={action.id} className='space-y-1'>
                      <Button
                        variant={action.dangerous ? 'destructive' : 'outline'}
                        size='sm'
                        onClick={() => executeAction(action.id, action.action)}
                        disabled={isProcessing === action.id}
                        className='w-full justify-start h-auto p-3'
                      >
                        <div className='flex items-start gap-3 w-full'>
                          <div className='mt-0.5'>
                            {isProcessing === action.id ? (
                              <RefreshCw className='w-4 h-4 animate-spin' />
                            ) : (
                              action.icon
                            )}
                          </div>
                          <div className='flex-1 text-left'>
                            <div className='font-medium text-sm'>
                              {action.label}
                            </div>
                            <div className='text-xs opacity-70 mt-1'>
                              {action.description}
                            </div>                          </div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  )
}
}
}

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        local_storage.clear ();
        session_storage.clear ();
        window.location.reload ();
      },
    },
    {
      id: 'preload - critical - resources',
      label: 'Preload Critical Resources',
      description: 'Preload fonts, images, and critical assets',
      icon: <Zap className='w - 4 h - 4' />,
      category: 'performance',
      action: () => {
        // Preload critical fonts;
        const critical_fonts = [;
          '/fonts / inter - var.woff2',
          '/fonts / cal - sans.woff2',
        ];
        critical_fonts.for_each (font => {
          const link = document.create_element ('link');
          link.rel = 'preload';
          link.as = 'font';
          link.type = 'font / woff2';
          link.cross_origin = 'anonymous';
          link.href = font;
          document.head.append_child (link);
        });
        // Preload critical images;
        const critical_images = ['/logos / zion - logo.png', '/images / hero - bg.webp'];
        critical_images.for_each (img => {
          const link = document.create_element ('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = img;
          document.head.append_child (link);
        });
      },
    },
    {
      id: 'download - performance - report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className='w - 4 h - 4' />,
      category: 'development',
      action: () => {
        const metrics = {
          timestamp: new Date ().toISOString (),
          performance: performance.getEntriesByType ('navigation')[0],
          resources: performance.getEntriesByType ('resource').slice (0, 20),
          memory: (performance as any).memory || {},
          user_agent: navigator.user_agent,
          screen: {
            width: screen.width,
            height: screen.height,
            color_depth: screen.color_depth,
          },
        }
        const blob = new Blob ([JSON.stringify (metrics, null, 2)], {
          type: 'application / json',
        });
        const url = URL.createObjectURL (blob);
        const array = document.create_element ('a');
        a.href = url;
        a.download = `performance - report-${Date.now ()}.json`;
        document.body.append_child (a);
        a.click ();
        document.body.remove_child (a);
        URL.revokeObjectURL (url);
      },
    },
    {
      id: 'test - error - boundary',
      label: 'Test Error Boundary',
      description: 'Trigger an error to test Sentry integration',
      icon: <Monitor className='w - 4 h - 4' />,
      category: 'development',
      dangerous: true,
      action: () => {
        throw new Error (
          'Test error for Sentry integration - this is intentional!');
      },
    },
    {
      id: 'refresh - app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className='w - 4 h - 4' />,
      category: 'maintenance',
      action: () => {
        window.location.reload ();
      },
    },
  ];
  const categorized_actions = {
    performance: actions.filter (array => a.category === 'performance'),
    development: actions.filter (array => a.category === 'development'),
    maintenance: actions.filter (array => a.category === 'maintenance'),
  }
  const category_colors = {
    performance:;
      'bg - green - 100 dark:bg - green - 900 / 20 text - green - 800 dark:text - green - 200',
    development:;
      'bg - blue - 100 dark:bg - blue - 900 / 20 text - blue - 800 dark:text - blue - 200',
    maintenance:;
      'bg - orange - 100 dark:bg - orange - 900 / 20 text - orange - 800 dark:text - orange - 200',
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='fixed bottom - 4 left - 4 z - 50'>;
        <Button;
          variant='outline';
          size='sm';
          on_click={() => setIsVisible (true)}
          className='bg - background / 80 backdrop - blur - sm'        >;
          <Settings className='w - 4 h - 4 mr - 2' />;
          Quick Actions;
        </Button>;
      </div>);
  }
  return (
    <div className='fixed bottom - 4 left - 4 z - 50 w - 80'>;
      <Card className='bg - background / 95 backdrop - blur - sm border shadow - lg max - h-96 overflow - y-auto'>;
        <CardHeader className='pb - 2'>;
          <div className='flex items - center justify - between'>;
            <CardTitle className='text - sm flex items - center'>;
              <Settings className='w - 4 h - 4 mr - 2' />;
              Quick Actions;
            </CardTitle>;
            <Button;
              variant='ghost';
              size='sm';
              on_click={() => setIsVisible (false)}
              className='h - 6 w - 6 p - 0'            >;
              ✕;
            </Button>;
          </div>;
        </CardHeader>;
        <CardContent className='pt - 0 space - y-4'>;
          {Object.entries (categorized_actions).map (
            ([category, category_actions]) => (
              <div key={category}>;
                <div className='flex items - center gap - 2 mb - 2'>;
                  <Badge;
                    className={
                      category_colors[category as keyof typeof category_colors];
                    }
                    variant='outline';
                  >;
                    {category}
                  </Badge>;
                </div>;
                <div className='space - y-2'>;
                  {category_actions.map (action => (
                    <div key={action.id} className='space - y-1'>;
                      <Button;
                        variant={action.dangerous ? 'destructive' : 'outline'}
                        size='sm';
                        on_click={() => execute_action (action.id, action.action)}
                        disabled={is_processing === action.id}
                        className='w - full justify - start h - auto p - 3';
                      >;
                        <div className='flex items - start gap - 3 w - full'>;
                          <div className='mt - 0.5'>;
                            {is_processing === action.id ? (
                              <RefreshCw className='w - 4 h - 4 animate - spin' />) : (
                              action.icon)}
                          </div>;
                          <div className='flex - 1 text - left'>;
                            <div className='font - medium text - sm'>;
                              {action.label}
                            </div>;
                            <div className='text - xs opacity - 70 mt - 1'>;
                              {action.description}
                            </div>                          </div>;
                        </div>;
                      </Button>;
                    </div>))}
                </div>;
              </div>))}
        </CardContent>;
      </Card>;
    </div>);
}
}
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
