
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { QrCodeIcon } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = "#", // Replace with actual App Store URL when available
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available
=======
import React from &quot;react&quot;;
import { QrCodeIcon } from &quot;lucide-react&quot;;
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;

export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = &quot;#&quot;; // Replace with actual App Store URL when available
  const googlePlayUrl = &quot;#&quot;; // Replace with actual Google Play URL when available
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <section className=&quot;py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-8&quot;>
            <div className=&quot;flex-1&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>Get The App Today</h2>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
=======
import React from "react";

export const DownloadSection: React.FC = () => {_// These would typically come from environment variables or a config
  const _appStoreUrl = "#"; // Replace with actual App Store window.URL when available
  const _googlePlayUrl = "#"; // Replace with actual Google Play window.URL when available

  return (_<section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The App Today</h2>
              <p className="text-lg text-gray-300 mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.
              </p>
              
              <AppStoreButtons 
                className=&quot;mb-8&quot; 
                appStoreUrl={appStoreUrl}
<<<<<<< HEAD
                googlePlayUrl={googlePlayUrl}
<<<<<<< HEAD
                onAppStoreClick={() => // // // console.log("App Store button clicked")}
                onGooglePlayClick={() => // // // console.log("Google Play button clicked")}
=======
                onAppStoreClick={() => // console.log(&quot;App Store button clicked&quot;)}
                onGooglePlayClick={() => // console.log(&quot;Google Play button clicked&quot;)}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                googlePlayUrl={_googlePlayUrl}
                onAppStoreClick={_() =>}
                onGooglePlayClick={_() =>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
              
              <div className=&quot;text-sm text-gray-400&quot;>
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
            
<<<<<<< HEAD
            <div className=&quot;flex-shrink-0 bg-white p-4 rounded-lg&quot;>
              <div className=&quot;w-36 h-36 flex items-center justify-center bg-white rounded-lg&quot;>
                <QrCodeIcon className=&quot;w-full h-full p-2&quot; />
                {/* This would be replaced with an actual QR code in production */}
=======
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">
                <QrCodeIcon className="w-full h-full p-2" />
                {_/* This would be replaced with an actual QR code in production */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <p className=&quot;text-center text-xs mt-2 text-zion-blue-dark&quot;>Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
