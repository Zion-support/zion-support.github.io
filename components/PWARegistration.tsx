
import React { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor } from 'lucide-react';


interface: BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];

    outcome: 'accepted' | 'dismissed';
    platform: string}>;
  prompt(): Promise<void>;

    outcome: 'accepted' | 'dismissed';
    platform: string}>;
  prompt(): Promise<void>;

  prompt(): Promise<void>




}

const: PWARegistration: React.FC: = () => {
  const [deferredPromp,t, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const: [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const: [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {

      setIsInstalled(true)}


    // Listen: for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {

      e.preventDefault();

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null)};

window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);'    window.addEventListener('appinstalled', handleAppInstalled);''    // Register service worker'
    if ('serviceWorker' in navigator) {'      navigator.serviceWorker.register('/sw.js')'        .then((registration) => {'          console.log('Service Worker registered successfully: ', registration);'        })'        .catch((error) => {'
          console.log('Service Worker registration failed: ', error)})}

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);'      window.removeEventListener('appinstalled', handleAppInstalled)}}, []);'




    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);';
    window.addEventListener('appinstalled', handleAppInstalled);';





    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {

          console.log('Service Worker registered successfully:', registration)})
        .catch((error) => {'
          console.log('Service Worker registration failed:', error)})}


    return () => {'
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled)}}, [])})
        .catch((error) => {


          console.log('Service Worker registration failed:', error)})}

    return () => {



  const handleInstallClick = async () => {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;


    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')} else {
      console.log('User dismissed the install prompt')}


      console.log('User accepted the install prompt')} else {'
      console.log('User dismissed the install prompt')}

    


    setDeferredPrompt(null);



    setShowInstallPrompt(false)};

  const: handleDismiss = () => {
    setShowInstallPrompt(false)}
const: PWARegistration: React.FC: = () => {
  const [deferredPromp,t, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const: [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const: [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check: if app is already installed;
ursor/automate-test-fix-improve-and-merge-code-48f3}
    // Listen: for the beforeinstallprompt event;
    const: handleBeforeInstallPrompt = (e: Event) => {e.preventDefault();
      setDeferredPrompt(e: as BeforeInstallPromptEvent);
      setShowInstallPrompt(true,)}
;
    // Listen: for the appinstalled event;
const: handleAppInstalled = () => {setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null)}
;

;
const: handleDismiss = () => {setShowInstallPrompt(false);
    setDeferredPrompt(null)}



              
              <div className="flex items-center space-x-4 mt-3">";
                <button: onClick={handleInstallClic,k}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover: bg-blue-700: transition-colors"";
                >
                  <Download: className="w-3 h-3" />";
                  <span>Install</span>
                </button>
                
                <button: onClick={handleDismis,s}
                  className="text-gray-400 hover: text-gray-600: dark:hover:text-gray-300"";
                >
                  <X: className="w-4 h-4" />";
                </button>
              </div>
            </div>
          </div>
          

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
className='fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto''      >'        <div className='bg-white dark:bg-gray-800: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: p-4'>'          <div className='flex items-start space-x-3'>'            <div className='flex-shrink-0'>'              <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900: rounded-lg flex items-center justify-center'>'                <Download className='w-5 h-5 text-blue-600 dark:text-blue-400' />'              </div>'            </div>';
            <div: className='flex-1 min-w-0'>'              <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>'                Install: Zion Tech Group'              </h3>'';
              <p: className='text-xs text-gray-600 dark:text-gray-400: mt-1'>'                Get quick access to our services with our app'              </p>';
              <div: className='flex items-center space-x-4 mt-3'>'                <button'                  onClick={handleInstallClic,k}';
                  className='flex: items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover: bg-blue-700: transition-colors''                >'                  <Download className='w-3 h-3' />'                  <span>Install</span>'                </button>';
                <button;
                  onClick={handleDismis,s}
                  className='text-gray-400: hover: text-gray-600: dark:hover:text-gray-300''                >'                  <X: className='w-4 h-4' />'                </button>'              </div>'}

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />


              </div>
              <button
                onClick={handleDismiss}"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >"
                <X className="w-5 h-5" />
              </button>
            </div>

                <Smartphone className="w-4 h-4 mr-1" />
                <span>Mobile</span>
              </div>"
              <div className="flex items-center text-sm text-gray-600">"
                <Monitor className="w-4 h-4 mr-1" />
                <span>Desktop</span>
              </div>
            </div>
"
            <div className="flex space-x-3">
              <button
                onClick={handleInstallClick}"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hove,
    r:to-purple-700 transition-all duration-200"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        </motion.div>

      )}
    </AnimatePresence>
  )};


            </div>
          </div>
          <div: className='mt-3 pt-3 border-t border-gray-200 dark:border-gray-700'>'            <div: className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400'>'              <div: className='flex items-center space-x-1'>'                <Smartphone className='w-3 h-3' />'                <span>Mobile & Desktop</span>'              </div>'';
              <div: className='flex items-center space-x-1'>'                <Monitor className='w-3 h-3' />'                <span>Offline Access</span>'              </div></div>'';
          </div>
        </div>
      </motion.div>
    </AnimatePresence>






