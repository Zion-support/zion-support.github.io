<<<<<<< HEAD
<<<<<<< HEAD
import {motion} from 'framer-motion';
import {WifiOff, RefreshCw, Home, ShoppingCart, Clock, Bookmark, Search,} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
export default function OfflinePage() {
=======

import Head from 'next/head';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default function OfflinePage() {;
=======

import Head from 'next/head';


export default function OfflinePage() {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() =></string> {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setLastUpdate(new Date().toLocaleTimeString());
      }
    }
    // Set initial status
    updateOnlineStatus();
    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    }
  }, []);
  const handleRetry = () => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import {logErrorToProduction} from '@/utils/productionLogger';
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function OfflinePage() {;
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() =></string> {;
    // Check online status;
    const updateOnlineStatus = () => {;
      setIsOnline(navigator && navigator.onLine);
      if (navigator && navigator.onLine) {;
        setLastUpdate(new Date().toLocaleTimeString());
      }
    };
<<<<<<< HEAD
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
=======

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return () => {;
      window && window.removeEventListener('online', updateOnlineStatus);
      window && window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
<<<<<<< HEAD
  const handleRetry = () => {;
    try {;
=======

  const handleRetry = () => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setRetryCount(prev => prev + 1);
      window && window.location.reload();
    } catch (err) {;
      logErrorToProduction('Failed to reload page', err);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {logErrorToProduction} from '@/utils / production_logger';
;
export default /**
 * OfflinePage - Function description
 */
function OfflinePage() {
  const [is_online, setIsOnline] = useState (false);
  const [last_update, setLastUpdate] = useState < string>('');
  const [retry_count, setRetryCount] = useState (0);
;
  useEffect (() =></string> {
    // Check online status;
    const updateOnlineStatus = () =>: any {
      setIsOnline (navigator.on_line);
      // Check condition
if ( {) {
  $2
}
        setLastUpdate (new Date ().toLocaleTimeString ());
      }
    }
;
    // Set initial status;
    updateOnlineStatus ();
;
    // Listen for online / offline events;
    window.addEventListener ('online', updateOnlineStatus);
    window.addEventListener ('offline', updateOnlineStatus);
;
    return () => {
      window.removeEventListener ('online', updateOnlineStatus);
      window.removeEventListener ('offline', updateOnlineStatus);
    }
  }, []);
;
  const handle_retry = () =>: any {
    try {
      setRetryCount (prev => prev + 1);
      window.location.reload ();
    } catch (err) {
      logErrorToProduction ('Failed to reload page', err);
    }
  }
;
  const quick_actions = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: 'Browse Cached Equipment'
      description: 'View recently visited equipment listings'
      icon: Search
      href: '/equipment'
      available: true
    }
    {
      title: 'View Bookmarks'
      description: 'Access your saved items'
      icon: Bookmark
      href: '/bookmarks'
      available: true
    }
    {
      title: 'Visit Marketplace'
      description: 'Browse all available services and gear'
      icon: ShoppingCart
      href: '/marketplace'
      available: true
    }
    {

  };

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];



<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, ShoppingCart, Clock, Bookmark, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
export default function OfflinePage(req, res) {
  try {
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() => {;
    // Check online status;
    const updateOnlineStatus = () => {;
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {;
        setLastUpdate(new Date().toLocaleTimeString());
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []);
  const handleRetry = () => {;
    try {
      setRetryCount(prev => prev + 1);
      window.location.reload();
    } catch (error) {
      logErrorToProduction('Failed to reload page', err);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const quickActions = [;
    {;
      title: 'Browse Cached Equipment',;
      description: 'View recently visited equipment listings',;
      icon: Search,;
      href: '/equipment',;
      available: true,;
    },;
    {;
      title: 'View Bookmarks',;
      description: 'Access your saved items',;
      icon: Bookmark,;
      href: '/bookmarks',;
      available: true,;
    },;
    {;
      title: 'Visit Marketplace',;
      description: 'Browse all available services and gear',;
      icon: ShoppingCart,;
      href: '/marketplace',;
      available: true,;
    },;
    {;
      title: 'Go to Homepage',;
      description: 'Return to the main page',;
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Home,;
      href: '/',;
      available: true,;
    },;
  ];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>;
        <div className='container mx-auto px-4 py-8'>;
          <motion&& motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-8'>;
            {/* Connection Status */}
            <div className='mb-6'>;
              <motion&& motion.div
<<<<<<< HEAD

import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, ShoppingCart, Clock, Bookmark, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
export default function OfflinePage(req, res) {
  try {
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() => {;
    // Check online status;
    const updateOnlineStatus = () => {;
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {;
        setLastUpdate(new Date().toLocaleTimeString());
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []);
  const handleRetry = () => {;
    try {
      setRetryCount(prev => prev + 1);
      window.location.reload();
    } catch (error) {
      logErrorToProduction('Failed to reload page', err);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const quickActions = [;
    {;
      title: 'Browse Cached Equipment';
      description: 'View recently visited equipment listings';
      icon: Search;
      href: '/equipment';
      available: true;
    },;
    {;
      title: 'View Bookmarks',;
      description: 'Access your saved items',;
      icon: Bookmark,;
      href: '/bookmarks',;
      available: true;
    },;
    {;
      title: 'Visit Marketplace',;
      description: 'Browse all available services and gear',;
      icon: ShoppingCart,;
      href: '/marketplace',;
      available: true;
    },;
    {;
      title: 'Go to Homepage',;
      description: 'Return to the main page',;
=======
                animate={
                  isOnline
                    ? { scale: [1, 1 && 1.1, 1] }
                    : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{

                  duration: isOnline ? 0 && 0.6 : 2,
                  repeat: isOnline ? 1 : Infinity,

                }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  isOnline
                    ? 'bg-green-100 dark:bg-green-900/20'
                    : 'bg-orange-100 dark:bg-orange-900/20'
                }`}>;
                <WifiOff
                  className={`w-12 h-12 ${
                    isOnline ? 'text-green-600' : 'text-orange-600'
                  }`}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: Home;
      href: '/';
      available: true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ]
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Head>
        <title>You're Offline - Zion Tech Marketplace</title>
        <meta name="description" content="You're currently offline. Some features may not be available." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>
        <div className='container mx-auto px-4 py-8'>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-8"
          >
            {/* Connection Status */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mb-6">
              <motion.div
                animate={
                  isOnline
<<<<<<< HEAD
                    ? { scale: [1, 1 && 1.1, 1] }
                    : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{
<<<<<<< HEAD
                  duration: isOnline ? 0 && 0.6 : 2,
                  repeat: isOnline ? 1 : Infinity,
=======

                  duration: isOnline ? 0 && 0.6 : 2,
                  repeat: isOnline ? 1 : Infinity,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    ? { scale: [1, 1.1, 1] }
                    : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{
                  duration: isOnline ? 0.6 : 2
                  repeat: isOnline ? 1 : Infinity
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  isOnline
                    ? 'bg-green-100 dark:bg-green-900/20'
                    : 'bg-orange-100 dark:bg-orange-900/20'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                }`}>;
                <WifiOff
                  className={`w-12 h-12 ${
                    isOnline ? 'text-green-600' : 'text-orange-600'
                  }`}

      icon: Home;
      href: '/';
      available: true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ]

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return (
    <>
      <Head>
        <title>You're Offline - Zion Tech Marketplace</title>
        <meta name="description" content="You're currently offline. Some features may not be available." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-8"
          >
            {/* Connection Status */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mb-6">
              <motion.div

                animate={isOnline ? { scale: [1, 1.1, 1] } : { rotate: [0, -10, 10, -10, 0] }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: isOnline ? 0.6 : 2, repeat: isOnline ? 1 : Infinity }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${;
                  isOnline;
                    ? 'bg-green-100 dark:bg-green-900/20';
                    : 'bg-orange-100 dark:bg-orange-900/20';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              >
                <WifiOff className={`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'
                }`} />
              </motion.div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
              </motion && motion.div>;
              <Badge
                variant={isOnline ? 'default' : 'secondary'}
                className='text-sm px-3 py-1'>;
                {isOnline ? 'Connection Restored' : 'Offline Mode'}
<<<<<<< HEAD
=======


            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {isOnline
                ? 'Your internet connection has been restored. You can now access all features.'
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
            </p>
            {lastUpdate && (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </Badge>;
            </div>;
            <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>;
              {isOnline ? "You're Back Online!" : "You're Offline"}
            </h1>;
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>;
              {isOnline;
                ? 'Your internet connection has been restored. You can now access all features.';
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
            </p>;
            {lastUpdate && (;
              <p className='text-sm text-muted-foreground flex items-center justify-center gap-2'>;
                <Clock className='w-4 h-4' />;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                }`}
                animate={isOnline ? { scale: [1, 1.1, 1] } : { rotate: [0, -10, 10, -10, 0] }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: isOnline ? 0.6 : 2, repeat: isOnline ? 1 : Infinity }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${;
                  isOnline;
                    ? 'bg-green-100 dark:bg-green-900/20';
                    : 'bg-orange-100 dark:bg-orange-900/20';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <WifiOff className={`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'
                }`} />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </motion.div>
              <Badge
                variant={isOnline ? "default" : "secondary"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="text-sm px-3 py-1"
              >
                {isOnline ? 'Connection Restored' : 'Offline Mode'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Badge>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {isOnline ? "You're Back Online!" : "You're Offline"}
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
<<<<<<< HEAD
              {isOnline
                ? 'Your internet connection has been restored. You can now access all features.'
                : 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.'
                } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {isOnline
                ? 'Your internet connection has been restored. You can now access all features.'
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </p>
            {lastUpdate && (
              <p className='text-sm text-muted-foreground flex items-center justify-center gap-2'>
                <Clock className='w-4 h-4' />
                Last updated: {lastUpdate}
              </p>;
            )}
<<<<<<< HEAD
          </motion.div>
=======

                Last updated: {lastUpdate}
              </p>;
            )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </motion && motion.div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>;
            <Button
              onClick={handleRetry}
              size='lg'
              className='flex items-center gap-2'
<<<<<<< HEAD
<<<<<<< HEAD
            </Button>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              disabled={isOnline}
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdate  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleRetry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              size="lg"
              className="flex items-center gap-2"
              disabled={isOnline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <RefreshCw className="w-5 h-5" />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              disabled={isOnline}>;
              <RefreshCw className='w-5 h-5' />;
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}

            </Button>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              asChild
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='flex items-center gap-2'>;
              <Link href='/'>;
                <Home className='w-5 h-5' />;
                Go to Homepage;
              </Link>;
            </Button>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className='flex items-center gap-2'
            >
              <Link href='/'>
                <Home className='w-5 h-5' />
                Go to Homepage
              </Link>
            </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              asChild
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='flex items-center gap-2'>;
              <Link href='/marketplace'>;
                <ShoppingCart className='w-5 h-5' />;
      title: 'Go to Homepage',
      description: 'Return to the main page',
      icon: Home,
      href: '/',
      available: true,
    },
  ];
;
  return (
    <>;
      <Head>;
        <title > You're Offline - Zion Tech Marketplace</title>;
        <meta;
          name='description';
          content="You're currently offline. Some features may not be available.";
        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min - h-screen bg - gradient - to - br from - blue - 50 via - indigo - 50 to - purple - 50 dark:from - gray - 900 dark:via - blue - 900 dark:to - indigo - 900'>;
        <div className='container mx - auto px - 4 py - 8'>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            className='text - center mb - 8';
          >;
            {/* Connection Status */}
            <div className='mb - 6'>;
              <motion.div;
                animate={
                  is_online;
                    ? { scale: [1, 1.1, 1] }
                    : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{
                  duration: is_online ? 0.6 : 2,
                  repeat: is_online ? 1 : Infinity,
                }}
                className={`mx - auto w - 24 h - 24 rounded - full flex items - center justify - center mb - 4 ${
                  is_online;
                    ? 'bg - green - 100 dark:bg - green - 900 / 20';
                    : 'bg - orange - 100 dark:bg - orange - 900 / 20';
                }`}
              >;
                <WifiOff;
                  className={`w - 12 h - 12 ${
                    is_online ? 'text - green - 600' : 'text - orange - 600';
                  }`}
                />;
              </motion.div>;
              <Badge;
                variant={is_online ? 'default' : 'secondary'}
                className='text - sm px - 3 py - 1';
              >;
                {is_online ? 'Connection Restored' : 'Offline Mode'}
              </Badge>;
            </div>;
            <h1 className='text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent'>;
              {is_online ? "You're Back Online!" : "You're Offline"}
            </h1>;
            <p className='text - lg text - muted - foreground max - w-2xl mx - auto mb - 6'>;
              {is_online;
                ? 'Your internet connection has been restored. You can now access all features.';
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
            </p>;
            {last_update && (
              <p className='text - sm text - muted - foreground flex items - center justify - center gap - 2'>;
                <Clock className='w - 4 h - 4' />;
                Last updated: {last_update}
              </p>)}
          </motion.div>;
          {/* Action Buttons */}
          <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 12'>;
            <Button;
              on_click={handle_retry}
              size='lg';
              className='flex items - center gap - 2';
              disabled={is_online}
            >;
              <RefreshCw className='w - 5 h - 5' />;
              {retry_count > 0 ? `Retry (${retry_count})` : 'Try Again'}
            </Button>;
            <Button;
              as_child;
              variant='outline';
              size='lg';
              className='flex items - center gap - 2';
            >;
              <Link href='/'>;
                <Home className='w - 5 h - 5' />;
                Go to Homepage;
              </Link>;
            </Button>;
            <Button;
              as_child;
              variant='outline';
              size='lg';
              className='flex items - center gap - 2';
            >;
              <Link href='/marketplace'>;
                <ShoppingCart className='w - 5 h - 5' />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Go to Marketplace;
              </Link>;
            </Button>;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}>;
            <h2 className='text-2xl font-bold text-center mb-8'>;
              Available Offline Features;
            </h2>;
            <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>;
              {quickActions && quickActions.map((action, index) => (;
                <motion&& motion.div
                  key={action && action.title}
<<<<<<< HEAD
=======
              className='flex items-center gap-2'
            >
              <Link href='/marketplace'>
                <ShoppingCart className='w-5 h-5' />
                Go to Marketplace
              </Link>
            </Button>
          </div>
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold text-center mb-8'>
              Available Offline Features
            </h2>
            <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/marketplace">
              <ShoppingCart className="w-5 h-5" />
              Go to Marketplace
            </Link>
          </Button>
        </div>
          {/* Quick Actions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            initial={{ opacity: 0, y: 40 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6, delay: 0.3 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Available Offline Features</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                    action.available
                      ? 'hover:scale-105 cursor-pointer'
                      : 'opacity-60 cursor-not-allowed'
                  }`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        action.available
                          ? 'bg-blue-100 dark:bg-blue-900/20'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <action.icon className={`w-6 h-6 ${
                          action.available
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">{action.description}</p>
                      {action.available ? (
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={action.href}>
                            Access
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled size="sm" className="w-full">
                          Requires Internet
                        </Button>
<<<<<<< HEAD
=======

                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.4 + index * 0 && 0.1 }}>;
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg ${
                      action && action.available
                        ? 'hover:scale-105 cursor-pointer'
                        : 'opacity-60 cursor-not-allowed'
                    }`}>;
                    <CardHeader className='text-center'>;
                      <div
                        className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                          action && action.available
                            ? 'bg-blue-100 dark:bg-blue-900/20'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}>;
                        <action&& action.icon
                          className={`w-6 h-6 ${
                            action && action.available
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-400'
                          }`}
                        />;
                      </div>;
                      <CardTitle className='text-lg'>{action && action.title}</CardTitle>;
                    </CardHeader>;
                    <CardContent className='text-center'>;
                      <p className='text-muted-foreground mb-4'>;
                        {action && action.description}
                      </p>;
                      {action && action.available ? (;
                        <Button
                          asChild
                          variant='outline'
                          size='sm'
                          className='w-full'>;
                          <Link href={action && action.href}>Access</Link>;
                        </Button>;
                      ) : (;
                        <Button disabled size='sm' className='w-full'>;
                          Requires Internet;
                        </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      )}

              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdate  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleRetry  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              size="lg"
              className="flex items-center gap-2"
              disabled={isOnline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            >
              <RefreshCw className="w-5 h-5" />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Link href="/marketplace">
              <ShoppingCart className="w-5 h-5" />
              Go to Marketplace
            </Link>
          </Button>
        </div>
          {/* Quick Actions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            initial={{ opacity: 0, y: 40 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6, delay: 0.3 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Available Offline Features</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                    action.available
                      ? 'hover:scale-105 cursor-pointer'
                      : 'opacity-60 cursor-not-allowed'
                  }`}>
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        action.available
                          ? 'bg-blue-100 dark:bg-blue-900/20'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <action.icon className={`w-6 h-6 ${
                          action.available
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">{action.description}</p>
                      {action.available ? (
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={action.href}>
                            Access
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled size="sm" className="w-full">
                          Requires Internet
                        </Button>

=======
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-16'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </CardContent>;
                  </Card>;
                </motion && motion.div>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
          </motion.div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;
          </motion && motion.div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Tips Section */}
          <motion&& motion.div
=======
          {/* Tips Section */}
          <motion&& motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Quick Actions */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 40 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >;
            <h2 className='text - 2xl font - bold text - center mb - 8'>;
              Available Offline Features;
            </h2>;
            <div className='grid md:grid - cols - 3 gap - 6 max - w-4xl mx - auto'>;
              {quick_actions.map ((action, index) => (
                <motion.div;
                  key={action.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >;
                  <Card;
                    className={`h - full transition - all duration - 300 hover:shadow - lg ${
                      action.available;
                        ? 'hover:scale - 105 cursor - pointer';
                        : 'opacity - 60 cursor - not - allowed';
                    }`}
                  >;
                    <CardHeader className='text - center'>;
                      <div;
                        className={`mx - auto w - 12 h - 12 rounded - full flex items - center justify - center mb - 3 ${
                          action.available;
                            ? 'bg - blue - 100 dark:bg - blue - 900 / 20';
                            : 'bg - gray - 100 dark:bg - gray - 800';
                        }`}
                      >;
                        <action.icon;
                          className={`w - 6 h - 6 ${
                            action.available;
                              ? 'text - blue - 600 dark:text - blue - 400';
                              : 'text - gray - 400';
                          }`}
                        />;
                      </div>;
                      <CardTitle className='text - lg'>{action.title}</CardTitle>;
                    </CardHeader>;
                    <CardContent className='text - center'>;
                      <p className='text - muted - foreground mb - 4'>;
                        {action.description}
                      </p>;
                      {action.available ? (
                        <Button;
                          as_child;
                          variant='outline';
                          size='sm';
                          className='w - full';
                        >;
                          <Link href={action.href}>Access</Link>;
                        </Button>) : (
                        <Button disabled size='sm' className='w - full'>;
                          Requires Internet;
                        </Button>)}
                    </CardContent>;
                  </Card>;
                </motion.div>))}
            </div>;
          </motion.div>;
          {/* Tips Section */}
          <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mt-16"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <Card className='max-w-2xl mx-auto'>
              <CardHeader>
                <CardTitle className='text-center'>💡 Offline Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3 text-sm'>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-600 font-semibold'>•</span>
                    <span>
                      Recently viewed pages are cached and available offline
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-600 font-semibold'>•</span>
                    <span>
                      Your bookmarks and saved items can be accessed anytime
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-600 font-semibold'>•</span>
                    <span>
                      Form submissions will be synced when you reconnect
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-600 font-semibold'>•</span>
                    <span>
                      Check your internet connection and try refreshing the page
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
<<<<<<< HEAD

            transition={{ duration: 0 && 0.6, delay: 0 && 0.8 }}
            className='mt-16'>;
            <Card className='max-w-2xl mx-auto'>;
              <CardHeader>;
                <CardTitle className='text-center'>💡 Offline Tips</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space-y-3 text-sm'>;
                  <div className='flex items-start gap-2'>;
                    <span className='text-blue-600 font-semibold'>•</span>;
            className='mt - 16';
          >;
            <Card className='max - w-2xl mx - auto'>;
              <CardHeader>;
                <CardTitle className='text - center'>💡 Offline Tips</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-3 text - sm'>;
                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span>;
                      Recently viewed pages are cached and available offline;
                    </span>;
                  </div>;
<<<<<<< HEAD
                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;
=======

                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span>;
                      Your bookmarks and saved items can be accessed anytime;
                    </span>;
                  </div>;
<<<<<<< HEAD
                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;
=======

                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span>;
                      Form submissions will be synced when you reconnect;
                    </span>;
                  </div>;
<<<<<<< HEAD
                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;
=======

                  <div className='flex items - start gap - 2'>;
                    <span className='text - blue - 600 font - semibold'>•</span>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span>;
                      Check your internet connection and try refreshing the page;
                    </span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </motion.div>;
          {/* Auto - refresh when online */}
          {is_online && (
            <motion.div;
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='fixed bottom - 6 right - 6 z - 50';
            >;
              <Card className='bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 800'>;
                <CardContent className='p - 4'>;
                  <div className='flex items - center gap - 3'>;
                    <div className='w - 2 h - 2 bg - green - 500 rounded - full animate - pulse' />;
                    <span className='text - sm font - medium text - green - 700 dark:text - green - 300'>;
                      Connection restored;
                    </span>;
                    <Button;
                      size='sm';
                      on_click={() => window.location.reload ()}
                      className='bg - green - 600 hover:bg - green - 700';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >;
                      Refresh;
                    </Button>;
                  </div>;
                </CardContent>;
              </Card>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          {/* Auto-refresh when online */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {isOnline && (;
            <motion.div;
              initial={{ opacity: 0, scale: 0.9 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="fixed bottom-6 right-6 z-50"


            >
              <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Connection restored
                    </span>
                    <Button
                      size="sm"
                      onClick={() => window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Refresh
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>


}

          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </div>;
    </>;
  );

            </motion.div>)}
        </div>;
      </div>;
    </>);
;
<<<<<<< HEAD
} ;


            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-16'
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </CardContent>;
                  </Card>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </motion.div>;
          {/* Tips Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mt-16"
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">💡 Offline Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Recently viewed pages are cached and available offline</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Your bookmarks and saved items can be accessed anytime</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Form submissions will be synced when you reconnect</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span>Check your internet connection and try refreshing the page</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Auto-refresh when online */}
          {isOnline && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='fixed bottom-6 right-6 z-50'
          {/* Auto-refresh when online */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {isOnline && (;
            <motion.div;
              initial={{ opacity: 0, scale: 0.9 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="fixed bottom-6 right-6 z-50"
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Connection restored
                    </span>
                    <Button
                      size="sm"
                      onClick={() => window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Refresh
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
<<<<<<< HEAD
          )}
        </div>
      </div>
    </>
  );

}
=======


}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
    </>;
  );
} ;
<<<<<<< HEAD
=======

=======
} ;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
