
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { QrCode } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL
=======
import React from &quot;react&quot;;
import { QrCode } from &quot;lucide-react&quot;;
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;

export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = &quot;#&quot;; // Replace with actual App Store URL
  const googlePlayUrl = &quot;#&quot;; // Replace with actual Google Play URL
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";

export const QrCodeDownload: React.FC = () => {_// App store links - these would come from environment variables in production
  const _appStoreUrl = "#"; // Replace with actual App Store window.URL
  const _googlePlayUrl = "#"; // Replace with actual Google Play window.URL
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <section className=&quot;py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-5xl mx-auto&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12&quot;>
            <div className=&quot;flex-1&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                Download <span className=&quot;text-zion-cyan&quot;>Zion</span> to Your Device
              </h2>
<<<<<<< HEAD
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.
=======
              <p className="text-lg text-gray-300 mb-8">
                Scan the QR code with your phone camera to download the app instantly, _or use the buttons below to get it from your app store of choice.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              
              <AppStoreButtons 
                className=&quot;mb-8&quot; 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={_googlePlayUrl}
              />
              
              <div className=&quot;flex gap-2 items-center text-sm text-gray-400&quot;>
                <span className=&quot;block h-1 w-1 rounded-full bg-zion-purple&quot;></span>
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>
            
<<<<<<< HEAD
            <div className=&quot;flex-shrink-0&quot;>
              <div className=&quot;bg-white p-6 rounded-xl shadow-lg&quot;>
                <div className=&quot;w-48 h-48 flex items-center justify-center bg-white rounded-lg&quot;>
                  <QrCode className=&quot;w-full h-full p-4&quot; />
                  {/* This would be replaced with an actual QR code in production */}
=======
            <div className="flex-shrink-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white rounded-lg">
                  <QrCode className="w-full h-full p-4" />
                  {_/* This would be replaced with an actual QR code in production */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <p className=&quot;text-center text-sm mt-2 text-zion-blue-dark font-medium&quot;>
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
