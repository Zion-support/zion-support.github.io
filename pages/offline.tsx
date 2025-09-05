import Head from 'next/head';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, ShoppingCart, Clock, Bookmark, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
export default function OfflinePage() {;
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  useEffect(() => {;
    // Check online status;
    const updateOnlineStatus = () => {;
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {;
        setLastUpdate(new Date().toLocaleTimeString());
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
    }
  }, []);
  const handleRetry = () => {;
    try {;
      setRetryCount(prev => prev + 1);
      window.location.reload();
    } catch (err) {;
      logErrorToProduction('Failed to reload page', err);
    }
  }
;
  const quickActions = [;
    {;
      title: 'Browse Cached Equipment',;
      description: 'View recently visited equipment listings',;
      icon: Search,;
      href: '/equipment',;
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
    }
<<<<<<< HEAD
  ]

  return (
    <>
      <Head>
        <title>You're Offline - Zion Tech Marketplace</title>
        <meta name=&quot;description&quot; content=&quot;You're currently offline. Some features may not be available.&quot; />
        <meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900&quot;>
        <div className=&quot;container mx-auto px-4 py-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;text-center mb-8&quot;
          >
            {/* Connection Status */}
            <div className=&quot;mb-6&quot;>
              <motion.div
=======
  ];
  return (;
    <>;
      <Head>;
        <title>You're Offline - Zion Tech Marketplace</title>;
        <meta name="description" content="You're currently offline. Some features may not be available." />;
        <meta name="robots" content="noindex, nofollow" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">;
        <div className="container mx-auto px-4 py-8">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8";
          >;
            {/* Connection Status */}
            <div className="mb-6">;
              <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                animate={isOnline ? { scale: [1, 1.1, 1] } : { rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: isOnline ? 0.6 : 2, repeat: isOnline ? 1 : Infinity }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${;
                  isOnline;
                    ? 'bg-green-100 dark:bg-green-900/20';
                    : 'bg-orange-100 dark:bg-orange-900/20';
                }`}
<<<<<<< HEAD
              >
                <WifiOff className={`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'
                }`} />
              </motion.div>
              
              <Badge 
                variant={isOnline ? &quot;default&quot; : &quot;secondary&quot;}
                className=&quot;text-sm px-3 py-1&quot;
              >
                {isOnline ? 'Connection Restored' : 'Offline Mode'}
              </Badge>
            </div>

            <h1 className=&quot;text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'}
            </h1>
            
            <p className=&quot;text-lg text-muted-foreground max-w-2xl mx-auto mb-6&quot;>
              {isOnline 
                ? 'Your internet connection has been restored. You can now access all features.'
                : 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.'
              }
            </p>

            {lastUpdate && (
              <p className=&quot;text-sm text-muted-foreground flex items-center justify-center gap-2&quot;>
                <Clock className=&quot;w-4 h-4&quot; />
=======
              >;
                <WifiOff className={`w-12 h-12 ${;
                  isOnline ? 'text-green-600' : 'text-orange-600';
                }`} />;
              </motion.div>;
              <Badge;
                variant={isOnline ? "default" : "secondary"}
                className="text-sm px-3 py-1";
              >;
                {isOnline ? 'Connection Restored' : 'Offline Mode'}
              </Badge>;
            </div>;
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
              {isOnline ? 'You\'re Back Online!' : 'You\'re Offline'}
            </h1>;
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">;
              {isOnline;
                ? 'Your internet connection has been restored. You can now access all features.';
                : 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.';
              }
            </p>;
            {lastUpdate && (;
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">;
                <Clock className="w-4 h-4" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                Last updated: {lastUpdate}
              </p>;
            )}
          </motion.div>;
          {/* Action Buttons */}
<<<<<<< HEAD
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-12&quot;>
            <Button 
              onClick={handleRetry}
              size=&quot;lg&quot;
              className=&quot;flex items-center gap-2&quot;
              disabled={isOnline}
            >
              <RefreshCw className=&quot;w-5 h-5&quot; />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}
            </Button>
            
          <Button
            asChild
            variant=&quot;outline&quot;
            size=&quot;lg&quot;
            className=&quot;flex items-center gap-2&quot;
          >
            <Link href=&quot;/&quot;>
              <Home className=&quot;w-5 h-5&quot; />
              Go to Homepage
            </Link>
          </Button>

          <Button
            asChild
            variant=&quot;outline&quot;
            size=&quot;lg&quot;
            className=&quot;flex items-center gap-2&quot;
          >
            <Link href=&quot;/marketplace&quot;>
              <ShoppingCart className=&quot;w-5 h-5&quot; />
              Go to Marketplace
            </Link>
          </Button>
        </div>

=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;
            <Button;
              onClick={handleRetry}
              size="lg";
              className="flex items-center gap-2";
              disabled={isOnline}
            >;
              <RefreshCw className="w-5 h-5" />;
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}
            </Button>;
          <Button;
            asChild;
            variant="outline";
            size="lg";
            className="flex items-center gap-2";
          >;
            <Link href="/">;
              <Home className="w-5 h-5" />;
              Go to Homepage;
            </Link>;
          </Button>;
          <Button;
            asChild;
            variant="outline";
            size="lg";
            className="flex items-center gap-2";
          >;
            <Link href="/marketplace">;
              <ShoppingCart className="w-5 h-5" />;
              Go to Marketplace;
            </Link>;
          </Button>;
        </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {/* Quick Actions */}
          <motion.div;
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
<<<<<<< HEAD
          >
            <h2 className=&quot;text-2xl font-bold text-center mb-8&quot;>Available Offline Features</h2>
            
            <div className=&quot;grid md:grid-cols-3 gap-6 max-w-4xl mx-auto&quot;>
              {quickActions.map((action, index) => (
                <motion.div
=======
          >;
            <h2 className="text-2xl font-bold text-center mb-8">Available Offline Features</h2>;
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">;
              {quickActions.map((action, index) => (;
                <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
<<<<<<< HEAD
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                    action.available 
                      ? 'hover:scale-105 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed'
                  }`}>
                    <CardHeader className=&quot;text-center&quot;>
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
                      <CardTitle className=&quot;text-lg&quot;>{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className=&quot;text-center&quot;>
                      <p className=&quot;text-muted-foreground mb-4&quot;>{action.description}</p>
                      {action.available ? (
                        <Button asChild variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;w-full&quot;>
                          <Link href={action.href}>
                            Access
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled size=&quot;sm&quot; className=&quot;w-full&quot;>
                          Requires Internet
                        </Button>
=======
                >;
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
                    action.available;
                      ? 'hover:scale-105 cursor-pointer';
                      : 'opacity-60 cursor-not-allowed';
                  }`}>;
                    <CardHeader className="text-center">;
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${;
                        action.available;
                          ? 'bg-blue-100 dark:bg-blue-900/20';
                          : 'bg-gray-100 dark:bg-gray-800';
                      }`}>;
                        <action.icon className={`w-6 h-6 ${;
                          action.available;
                            ? 'text-blue-600 dark:text-blue-400';
                            : 'text-gray-400';
                        }`} />;
                      </div>;
                      <CardTitle className="text-lg">{action.title}</CardTitle>;
                    </CardHeader>;
                    <CardContent className="text-center">;
                      <p className="text-muted-foreground mb-4">{action.description}</p>;
                      {action.available ? (;
                        <Button asChild variant="outline" size="sm" className="w-full">;
                          <Link href={action.href}>;
                            Access;
                          </Link>;
                        </Button>;
                      ) : (;
                        <Button disabled size="sm" className="w-full">;
                          Requires Internet;
                        </Button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      )}
                    </CardContent>;
                  </Card>;
                </motion.div>;
              ))}
            </div>;
          </motion.div>;
          {/* Tips Section */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
<<<<<<< HEAD
            className=&quot;mt-16&quot;
          >
            <Card className=&quot;max-w-2xl mx-auto&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-center&quot;>💡 Offline Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;space-y-3 text-sm&quot;>
                  <div className=&quot;flex items-start gap-2&quot;>
                    <span className=&quot;text-blue-600 font-semibold&quot;>•</span>
                    <span>Recently viewed pages are cached and available offline</span>
                  </div>
                  <div className=&quot;flex items-start gap-2&quot;>
                    <span className=&quot;text-blue-600 font-semibold&quot;>•</span>
                    <span>Your bookmarks and saved items can be accessed anytime</span>
                  </div>
                  <div className=&quot;flex items-start gap-2&quot;>
                    <span className=&quot;text-blue-600 font-semibold&quot;>•</span>
                    <span>Form submissions will be synced when you reconnect</span>
                  </div>
                  <div className=&quot;flex items-start gap-2&quot;>
                    <span className=&quot;text-blue-600 font-semibold&quot;>•</span>
                    <span>Check your internet connection and try refreshing the page</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

=======
            className="mt-16";
          >;
            <Card className="max-w-2xl mx-auto">;
              <CardHeader>;
                <CardTitle className="text-center">💡 Offline Tips</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-3 text-sm">;
                  <div className="flex items-start gap-2">;
                    <span className="text-blue-600 font-semibold">•</span>;
                    <span>Recently viewed pages are cached and available offline</span>;
                  </div>;
                  <div className="flex items-start gap-2">;
                    <span className="text-blue-600 font-semibold">•</span>;
                    <span>Your bookmarks and saved items can be accessed anytime</span>;
                  </div>;
                  <div className="flex items-start gap-2">;
                    <span className="text-blue-600 font-semibold">•</span>;
                    <span>Form submissions will be synced when you reconnect</span>;
                  </div>;
                  <div className="flex items-start gap-2">;
                    <span className="text-blue-600 font-semibold">•</span>;
                    <span>Check your internet connection and try refreshing the page</span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
          </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {/* Auto-refresh when online */}
          {isOnline && (;
            <motion.div;
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
              className=&quot;fixed bottom-6 right-6 z-50&quot;
            >
              <Card className=&quot;bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800&quot;>
                <CardContent className=&quot;p-4&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <div className=&quot;w-2 h-2 bg-green-500 rounded-full animate-pulse&quot; />
                    <span className=&quot;text-sm font-medium text-green-700 dark:text-green-300&quot;>
                      Connection restored
                    </span>
                    <Button
                      size=&quot;sm&quot;
                      onClick={() => window.location.reload()}
                      className=&quot;bg-green-600 hover:bg-green-700&quot;
                    >
                      Refresh
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
=======
              className="fixed bottom-6 right-6 z-50";
            >;
              <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">;
                <CardContent className="p-4">;
                  <div className="flex items-center gap-3">;
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />;
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">;
                      Connection restored;
                    </span>;
                    <Button;
                      size="sm";
                      onClick={() => window.location.reload()}
                      className="bg-green-600 hover:bg-green-700";
                    >;
                      Refresh;
                    </Button>;
                  </div>;
                </CardContent>;
              </Card>;
            </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        </div>;
      </div>;
    </>;
  );
} ;