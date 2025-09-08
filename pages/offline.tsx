import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, Signal } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OfflinePage: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleCheckConnection = () => {
    // Check if we're back online
    if (navigator.onLine) {
      window.location.reload();
    } else {
      // Use a more modern approach instead of alert
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 16px;
        border-radius: 8px;
        z-index: 10000;
        font-family: system-ui, sans-serif;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `;
      notification.textContent = 'You are still offline. Please check your internet connection.';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 5000);
    }
  };

  return (
    <>
      <SEOHead 
        title="Offline - Zion Tech Group"
        description="You are currently offline. Check your internet connection and try again."
        type="website"
      />
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Offline Icon */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gray-800/50 rounded-full flex items-center justify-center border-4 border-gray-700"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <WifiOff className="w-16 h-16 text-gray-400" />
          </motion.div>

          {/* Main Message */}
          <h1 className="text-5xl font-bold text-gray-300 mb-6">
            You're Offline
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            It looks like you've lost your internet connection. Don't worry - some of our content is available offline.
          </p>

          {/* Connection Status */}
          <motion.div
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${navigator.onLine ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-gray-300 font-medium">
                {navigator.onLine ? 'Connection Restored' : 'No Internet Connection'}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">
              {navigator.onLine 
                ? 'Great! You\'re back online. Click retry to reload the page.'
                : 'Please check your internet connection and try again.'
              }
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!navigator.onLine}
            >
              <RefreshCw className="w-5 h-5" />
              Retry Connection
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleCheckConnection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Signal className="w-5 h-5" />
              Check Connection
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              onClick={handleGoHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </div>

          {/* Offline Features */}
          <motion.div
            className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-8'>{/* Connection Status */}
            <div className='mb-6'>
              <motion.div
                animate={
                  isOnline
                    ? { scale: [1, 1.1, 1] }
                    : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{
                  duration: isOnline ? 0.6 : 2
                  repeat: isOnline ? 1 : Infinity
                }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  isOnline
                    ? 'bg-green-100 dark:bg-green-900/20'
                    : 'bg-orange-100 dark:bg-orange-900/20'
                }`}><WifiOff
                  className={`w-12 h-12 ${
                    isOnline ? 'text-green-600' : 'text-orange-600'
                  }`}
                />
              </motion.div>
              <Badge
                variant={isOnline ? 'default' : 'secondary'}
                className='text-sm px-3 py-1'>{isOnline ? 'Connection Restored' : 'Offline Mode'}
              </Badge>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {isOnline ? "You're Back Online!" : "You're Offline"}
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
              {isOnline
                ? 'Your internet connection has been restored. You can now access all features.'
                : "No internet connection detected. Don't worry - you can still access cached content and use offline features."}
            </p>
            {lastUpdate && (
              <p className='text-sm text-muted-foreground flex items-center justify-center gap-2'>
                <Clock className='w-4 h-4' />
                Last updated: {lastUpdate}
              </p>
            )}
          </motion.div>
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Button
              onClick={handleRetry}
              size='lg'
              className='flex items-center gap-2'
              disabled={isOnline}><RefreshCw className='w-5 h-5' />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='flex items-center gap-2'><Link href='/'>
                <Home className='w-5 h-5' />
                Go to Homepage
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='flex items-center gap-2'><Link href='/marketplace'>
                <ShoppingCart className='w-5 h-5' />
                Go to Marketplace
              </Link>
            </Button>
          </div>
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}><h2 className='text-2xl font-bold text-center mb-8'>
              Available Offline Features
            </h2>
            <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}><Card
                    className={`h-full transition-all duration-300 hover:shadow-lg ${
                      action.available
                        ? 'hover:scale-105 cursor-pointer'
                        : 'opacity-60 cursor-not-allowed'
                    }`}><CardHeader className='text-center'>
                      <div
                        className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                          action.available
                            ? 'bg-blue-100 dark:bg-blue-900/20'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}><action.icon
                          className={`w-6 h-6 ${
                            action.available
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-center'>
                      <p className='text-muted-foreground mb-4'>
                        {action.description}
                      </p>
                      {action.available ? (
                        <Button
                          asChild
                          variant='outline'
                          size='sm'
                          className='w-full'><Link href={action.href}>Access</Link>
                        </Button>
                      ) : (
                        <Button disabled size='sm' className='w-full'>
                          Requires Internet
                        </Button>
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
            className='mt-16'><Card className='max-w-2xl mx-auto'>
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
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Cached Content</p>
                  <p className="text-gray-500 text-sm">Previously viewed pages</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Contact Forms</p>
                  <p className="text-gray-500 text-sm">Will sync when online</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300 font-medium">Dynamic Content</p>
                  <p className="text-gray-500 text-sm">Requires internet</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Auto-refresh when online */}
          {isOnline && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='fixed bottom-6 right-6 z-50'><Card className='bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'>
                <CardContent className='p-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium text-green-700 dark:text-green-300'>
                      Connection restored
                    </span>
                    <Button
                      size='sm'
                      onClick={() => window.location.reload()}
                      className='bg-green-600 hover:bg-green-700'
                    >
                      Refresh
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );

export default Offline;