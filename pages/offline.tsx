import Head from 'next/head'
import Link from 'next/link'

export default function OfflinePage() {_const [isOnline, _setIsOnline] = useState(false)
  const [lastUpdate, _setLastUpdate] = useState<string>('')
  const [retryCount, _setRetryCount] = useState(0)

  useEffect__(() => {
    // Check online status
    const _updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
      if (navigator.onLine) {
        setLastUpdate(new Date().toLocaleTimeString())}
    }

    // Set initial status
    updateOnlineStatus()

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    return () => {_window.removeEventListener('online', _updateOnlineStatus)
      window.removeEventListener('offline', _updateOnlineStatus)}
  }, [])

  const _handleRetry = () => {_try {
      setRetryCount(prev => prev + 1)
      window.location.reload()} catch (err) {_logErrorToProduction('Failed to reload page', _err)}
  }

  const _quickActions = [
    {_title: 'Browse Cached Equipment', _description: 'View recently visited equipment listings', _icon: Search, _href: '/equipment', _available: true},
    {_title: 'View Bookmarks', _description: 'Access your saved items', _icon: Bookmark, _href: '/bookmarks', _available: true},
    {_title: 'Visit Marketplace', _description: 'Browse all available services and gear', _icon: ShoppingCart, _href: '/marketplace', _available: true},
    {_title: 'Go to Homepage', _description: 'Return to the main page', _icon: Home, _href: '/', _available: true}
  ]

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
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-8"
          >
            {_/* Connection Status */}
            <div className="mb-6">
              <motion.div
                animate={_isOnline ? { scale: [1, _1.1, _1]} : {_rotate: [0, _-10, _10, _-10, _0]}}
                transition={_{ duration: isOnline ? 0.6 : 2, _repeat: isOnline ? 1 : Infinity}}
                className={_`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  isOnline 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-orange-100 dark:bg-orange-900/20'}`}
              >
                <WifiOff className={_`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'}`} />
              </motion.div>
              
              <Badge 
                variant={_isOnline ? "default" : "secondary"}
                className="text-sm px-3 py-1"
              >
                {_isOnline ? 'Connection Restored' : 'Offline Mode'}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {_isOnline ? 'You\'re Back Online!' : 'You\'re Offline'}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {_isOnline 
                ? 'Your internet connection has been restored. You can now access all features.'
                : 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.'}
            </p>

            {_lastUpdate && (
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdate}
              </p>
            )}
          </motion.div>

          {_/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={_handleRetry}
              size="lg"
              className="flex items-center gap-2"
              disabled={_isOnline}
            >
              <RefreshCw className="w-5 h-5" />
              {_retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'}
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

          {_/* Quick Actions */}
          <motion.div
            initial={_{ opacity: 0, _y: 40}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6, _delay: 0.3}}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Available Offline Features</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {_quickActions.map(_(action, _index) => (
                <motion.div
                  key={action.title}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: 0.4 + index * 0.1}}
                >
                  <Card className={_`h-full transition-all duration-300 hover:shadow-lg ${
                    action.available 
                      ? 'hover:scale-105 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed'}`}>
                    <CardHeader className="text-center">
                      <div className={_`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        action.available 
                          ? 'bg-blue-100 dark:bg-blue-900/20' 
                          : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <action.icon className={_`w-6 h-6 ${
                          action.available 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-400'}`} />
                      </div>
                      <CardTitle className="text-lg">{_action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">{_action.description}</p>
                      {_action.available ? (
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={action.href}>
                            Access
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled size="sm" className="w-full">
                          Requires Internet
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {_/* Tips Section */}
          <motion.div
            initial={_{ opacity: 0}}
            animate={_{ opacity: 1}}
            transition={_{ duration: 0.6, _delay: 0.8}}
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

          {_/* Auto-refresh when online */}
          {_isOnline && (_<motion.div
              initial={{ opacity: 0, _scale: 0.9}}
              animate={_{ opacity: 1, _scale: 1}}
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
                      onClick={_() => window.location.reload()}
                      className="bg-green-600 hover:bg-green-700"
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
  )
} 