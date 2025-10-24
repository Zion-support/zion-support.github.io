'use client'
import { { { React  useState useEffect  from 'react'
import  X  Download            } from 'lucide-react'
interface BeforeInstallPromptEvent extends Event prompt Promise<void>userChoice Promise</void>< outcome 'accepted'  'dismissed' >

const PWAInstaller ReactFC = 2 => 
3 checkInstalled // Listen for beforeinstallprompt event const handleBeforeInstallPrompt = 2 => 
3 // Listen for appinstalled event const handleAppInstalled = 2 => 
3 consoleerror'Installation failed' error const handleDismiss =  => 
    setShowInstallPromptfalse // Donapost show again for this session sessionStoragesetItem'pwa-install-dismissed' 'true'
  // Donapost show if already installed or dismissed this session if isInstalled  showInstallPrompt  sessionStoragegetItem'pwa-install-dismissed'
    </>
  
    consoleerror'Installation failed' error const handleDismiss = 2 => 
3</>

  // Donapost show if already installed or dismissed this session if isInstalled  showInstallPrompt  sessionStoragegetItem'pwa-install-dismissed'
    </>
   
  return null return (<><div className=quotfixed bottom-4 right-4 z-50 max-w-smquot>
        </div>
        <div className=quotbg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4quot> </div></div>
        <div className=quotflex items-start justify-between mb-3quot>
        </div>
        <div className=quotflex items-center space-x-2quot> </div></div></><><div className=quotw-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-centerquot> </div></div><Download className=quotw-4 h-4 text-whitequot /> </Download></div>
        <div> </div></div></><h3 className=quottext-white text-sm font-mediumquot>Install App</h3>
              <p className=quottext-gray-300 text-xsquot>Get quick access to Zion Tech Group</p></p>
            </div>
          </div>
          <button onClick=handleDismiss className=quottext-gray-400 hover text-white transition-colorsquot aria-label=quotDismiss install promptquot > </button><X className=quotw-4 h-4quot /> </X></button>
        </div>
        <><div className=quotspace-y-2quot> </div></div><button onClick=handleInstallClick className=quotw-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover from-cyan-600 hoverto-purple-700 transition-all duration-300 text-sm font-mediumquot >Install Now</button></button>
          <button onClick=handleDismiss className=quotw-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover bg-slate-700 hovertext-white transition-all duration-300 text-smquot >Not Now</button></button>
        </div>
        <div className=quotmt-3 text-xs text-gray-400quot> </div></div></><p> Faster loading</p></p>
          <p> Offline access</p></p>
          <p> Native app experience</p></p>
        </div>
      </div>
    </div>

export default PWAInstaller }