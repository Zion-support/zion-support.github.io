
'use client';
/**
 * Offline Page
 * Displayed when the user is offline and tries to access a page
 */
const OfflinePage: React.FC = () => {
const handleRetry = () => {
    window.location.reload();
   };
  const handleGoHome = () => {
  // TODO: Add content
 }
    window.location.href = '/';
  return (
    
          
          
          
          
          
          
          
          <div></div>Coming Soon</div>
  )
    
          </div></div>
      </div></div>
        </div></div>
          </div>
        </div>
        </div>
// You're Offline
        
          
          
          
          
          
          
          
          
          </h1>
        <p className="text-gray-300 mb-6">
          It looks like you're not connected to the internet. Please check your connection and try again.
        </p>
        <div className="space-y-3"></div>
          </div>
            
          
          
          
          
          
          
          
          
          <RefreshCw className="w-4 h-4" />
// Try Again
          
          
          
          
          
          
          
          
          
          </button>
onClick={handleGoHome;;}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium border border-white/20"
            <Home className="w-4 h-4" />
            Go Home
        <div className="mt-6 text-sm text-gray-400"></div>
          </div>
            <Wifi className="w-4 h-4" />
            Check your internet connection
        <div className="mt-8 p-4 bg-black/20 rounded-lg"></div>
          </div>Available Offline</h3>
          <p className="text-xs text-gray-400">
            Some content may be available offline thanks to our service worker.
            Try refreshing the page once you're back online.
  );
export default OfflinePage;