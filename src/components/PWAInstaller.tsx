
interface BeforeInstallPromptEvent extends Event {


}
const PWAInstaller: React.FC = () => {



  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {


    }
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {




    // Listen for the appinstalled event
    const handleAppInstalled = () => {






    return () => {




  const handleInstallClick = async () => {

    try {


      if (outcome === 'accepted') {

      } else {

      }


    } catch (error) {

    }

  if (isInstalled || !showInstallButton) {

  }
  return (
    <div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            📱
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold mb-1">Install App</h3>
          <p className="text-xs text-white/90 mb-3">
            Install Zion Tech Group app for a better experience with offline access and faster loading.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200">
              Install</span>
            <button
              onClick={() => setShowInstallButton(false)}
              className="text-white/70 text-xs px-3 py-1.5 hover:text-white transition-colors duration-200">
              Maybe later</span>
          </div>
        </div>
        <button
          onClick={() => setShowInstallButton(false)}
          className="flex-shrink-0 text-white/70 hover:text-white transition-colors duration-200">
          ×
        </button>
      </div>
    </div>
  )
          </button>
}
          </button>
export default PWAInstaller</button>
  </button>
  </BeforeInstallPromptEvent>
  </void>