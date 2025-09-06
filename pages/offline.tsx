
import Head from 'next/head';


export default function OfflinePage() {;


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

export default function OfflinePage() {;
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() =></string> {;
    // Check online status;
    const updateOnlineStatus = () => {;
      setIsOnline(navigator && navigator.onLine);
      if (navigator && navigator.onLine) {;
        setLastUpdate(new Date().toLocaleTimeString());
      }
    };
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window && window.removeEventListener('online', updateOnlineStatus);
      window && window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  const handleRetry = () => {;
    try {;
      setRetryCount(prev => prev + 1);
      window && window.location.reload();
    } catch (err) {;
      logErrorToProduction('Failed to reload page', err);
    }

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

  ];



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

        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>;
        <div className='container mx-auto px-4 py-8'>;
          <motion&& motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-8'>;
            {/* Connection Status */}
            <div className='mb-6'>;
              <motion&& motion.div
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
      icon: Home;
      href: '/';
      available: true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ]
  return (
    <>
      <Head>
        <title>You're Offline - Zion Tech Marketplace</title>
        <meta name="description" content="You're currently offline. Some features may not be available." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
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
              <Badge
                variant={isOnline ? 'default' : 'secondary'}
                className='text-sm px-3 py-1'>;
                {isOnline ? 'Connection Restored' : 'Offline Mode'}


            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">


              {isOnline
                ? 'Your internet connection has been restored. You can now access all features.'
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
            </p>
            {lastUpdate && (

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

                Last updated: {lastUpdate}
              </p>;
            )}

          </motion && motion.div>;


          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>;
            <Button
              onClick={handleRetry}
              size='lg'
              className='flex items-center gap-2'