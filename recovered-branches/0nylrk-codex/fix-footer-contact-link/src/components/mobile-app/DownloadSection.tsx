
import React from &quot;react&quot;;
import { QrCodeIcon } from &quot;lucide-react&quot;;
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;

export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = &quot;#&quot;; // Replace with actual App Store URL when available
  const googlePlayUrl = &quot;#&quot;; // Replace with actual Google Play URL when available

  return (
    <section className=&quot;py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-8&quot;>
            <div className=&quot;flex-1&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>Get The App Today</h2>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.
              </p>
              
              <AppStoreButtons 
                className=&quot;mb-8&quot; 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => // console.log(&quot;App Store button clicked&quot;)}
                onGooglePlayClick={() => // console.log(&quot;Google Play button clicked&quot;)}
              />
              
              <div className=&quot;text-sm text-gray-400&quot;>
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
            
            <div className=&quot;flex-shrink-0 bg-white p-4 rounded-lg&quot;>
              <div className=&quot;w-36 h-36 flex items-center justify-center bg-white rounded-lg&quot;>
                <QrCodeIcon className=&quot;w-full h-full p-2&quot; />
                {/* This would be replaced with an actual QR code in production */}
              </div>
              <p className=&quot;text-center text-xs mt-2 text-zion-blue-dark&quot;>Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
