import Head from 'next/head' import Link from 'next/link' export default function OfflinePage () {
  const [isOnline, setIsOnline] = useState (false) const [lastUpdate, setLastUpdate] = useState<string> ('') const [retryCount, setRetryCount] = useState (0) useEffect ( () => {
  //Check online status const updateOnlineStatus = () => {
  setIsOnline (navigator.onLine) if (navigator.onLine) {
  setLastUpdate (new Date () .toLocaleTimeString () ) 
}
}//Set initial status updateOnlineStatus () //Listen for online/offline events window.addEventListener ('online', updateOnlineStatus) window.addEventListener ('offline', updateOnlineStatus) return () => {
  window.removeEventListener ('online', updateOnlineStatus) window.removeEventListener ('offline', updateOnlineStatus) 
}
}, []) const handleRetry = () => {
  try {
  setRetryCount (prev => prev + 1) window.location.reload () 
}catch (err) {
  logErrorToProduction ('Failed to reload page', err) 
}
}const quickActions = [ {
  title: 'Browse Cached Equipment', description: 'View recently visited equipment listings', icon: Search, href: '/equipment', available: true 
};
{
  title: 'View Bookmarks', description: 'Access your saved items', icon: Bookmark, href: '/bookmarks', available: true 
};
{
  title: 'Visit Marketplace', description: 'Browse all available services and gear', icon: ShoppingCart, href: '/marketplace', available: true 
};
{
  title: 'Go to Homepage', description: 'Return to the main page', icon: Home, href: '/', available: true 
}] return (<> <Head> <title>You're Offline - Zion Tech Marketplace</title> <meta name="description" content="You're currently offline. Some features may not be available." /> <meta name="robots" content="noindex, nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" > <div className="container mx-auto px-4 py-8" > <motion.div <motion.div animate= {
  isOnline ? {
  scale: [1, 1.1, 1] 
}: {
  rotate: [0, -10, 10, -10, 0] 
}
}transition= {
  {
  duration: isOnline ? 0.6 : 2, repeat: isOnline ? 1 : Infinity 
}
}className= {
  `mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 $ {
  isOnline ? 'bg-green-100 dark:bg-green-900/20': 'bg-orange-100 dark:bg-orange-900/20' 
}` 
}> <WifiOff className= {
  `w-12 h-12 $ {
  isOnline ? 'text-green-600': 'text-orange-600' 
}` 
}/> </motion.div> <Badge > {
  isOnline ? 'Connection Restored': 'Offline Mode' 
}</Badge> </div> ? 'Your internet connection has been restored. You can now access all features.': 'No internet connection detected. Don\'t worry - you can still access cached content and use offline features.' 
}</p> Last updated: {
  lastUpdate 
}</p>) 
}</motion.div> </Button> <Button asChild variant="outline" size="lg" className="flex items-center gap-2" > <Link href="/" > <Home className="w-5 h-5" /> Go to Homepage </Link> </Button> <Button asChild variant="outline" size="lg" className="flex items-center gap-2" > <Link href="/marketplace" > <ShoppingCart className="w-5 h-5" /> Go to Marketplace </Link> </Button> </div> {
  /* Quick Actions */ 
}<motion.div initial= {
  {
  opacity: 0, y: 40 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: 0.3 
}
}> <h2 className="text-2xl font-bold text-center mb-8" >Available Offline Features</h2> <motion.div key= {
  action.title 
}initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.6, delay: 0.4 + index * 0.1 
}
}> <Card className= {
  `h-full transition-all duration-300 hover:shadow-lg $ {
  action.available ? 'hover:scale-105 cursor-pointer' action.available ? 'bg-blue-100 dark:bg-blue-900/20' : 'bg-gray-100 dark:bg-gray-800' 
}` 
}> <action.icon className= {
  `w-6 h-6 $ {
  action.available ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400' 
}` 
}/> </div> <Link href= {
  action.href 
}> Access </Link> </Button>) : (<Button disabled size="sm" className="w-full" > Requires Internet </Button>) 
}</CardContent> </Card> </motion.div>) ) 
}</div> </motion.div> {
  /* Tips Section */ 
}<motion.div > <Card className="max-w-2xl mx-auto" > <CardHeader> <CardTitle className="text-center" >💡 Offline Tips</CardTitle> </CardHeader> <CardContent> <div className="space-y-3 text-sm" > <div className="flex items-start gap-2" > <span className="text-blue-600 font-semibold" >•</span> <span>Recently viewed pages are cached and available offline</span> </div> <div className="flex items-start gap-2" > <span className="text-blue-600 font-semibold" >•</span> <span>Your bookmarks and saved items can be accessed anytime</span> </div> <div className="flex items-start gap-2" > <span className="text-blue-600 font-semibold" >•</span> <span>Form submissions will be synced when you reconnect</span> </div> <div className="flex items-start gap-2" > <span className="text-blue-600 font-semibold" >•</span> <span>Check your internet connection and try refreshing the page</span> </div> </div> </CardContent> </Card> </motion.div> > <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" > <CardContent className="p-4" > <div className="flex items-center gap-3" > <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> <span className="text-sm font-medium text-green-700 dark:text-green-300" > Connection restored </span> <Button > Refresh </Button> </div> </CardContent> </Card> </motion.div>) 
}</div> </div> </>) 
}