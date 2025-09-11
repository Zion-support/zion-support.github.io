import Head from 'next/head';

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
export default function OfflinePage() {;
  const [isOnline, setIsOnline] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window && window.removeEventListener('online', updateOnlineStatus);
      window && window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  const handleRetry = () => {;
    try {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setRetryCount(prev => prev + 1);
      window && window.location.reload();
    } catch (err) {;
      logErrorToProduction('Failed to reload page', err);
    }=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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



        />;
        <meta name='robots' content='noindex, nofollow' />;
      </Head>;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <WifiOff className={`w-12 h-12 ${
                  isOnline ? 'text-green-600' : 'text-orange-600'
                }`} />
            >
              <RefreshCw className="w-5 h-5" />
              {retryCount > 0 ? `Retry (${retryCount})` : 'Try Again'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </Button>
            </Button>;

=======            <Button
              asChild
              variant='outline'
              size='lg'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='flex items-center gap-2'>;
              <Link href='/'>;
                <Home className='w-5 h-5' />;
                Go to Homepage;
              </Link>;
            </Button>;
=======
              className='flex items-center gap-2'
            >
              <Link href='/'>
                <Home className='w-5 h-5' />
                Go to Homepage
              </Link>
            </Button>            <Button
              asChild
              variant='outline'
              size='lg'
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
