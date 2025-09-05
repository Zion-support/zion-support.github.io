
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
import { logInfo } from '@/utils/productionLogger',
export const DownloadSection: React.FC = () => {

  // These would typically come from environment variables or a config
  const appStoreUrl = "#", // Replace with actual App Store URL when available
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available
=======
import React from &quot;react&quot;;
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;
import { logInfo } from '@/utils/productionLogger';

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
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.
              </p>
              
              <AppStoreButtons 
                className=&quot;mb-8&quot; 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => logInfo(&quot;App Store button clicked&quot;)}
                onGooglePlayClick={() => logInfo(&quot;Google Play button clicked&quot;)}
              />
              
              <div className=&quot;text-sm text-gray-400&quot;>
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
            
            <div className=&quot;flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg&quot;>
              <div className=&quot;w-36 h-36 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg&quot;>
                <QrCodeIcon className=&quot;w-full h-full p-2&quot; />
                {/* This would be replaced with an actual QR code in production */}
              </div>
              <p className=&quot;text-center text-xs mt-2 text-zion-blue-dark&quot;>Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
=======
import React from "react",;
import { QrCodeIcon } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;
import { logInfo } from '@/utils/productionLogger',;
export const DownloadSection: React.FC = () => {;
  // These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
  return (;
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="max-w-4xl mx-auto">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">;
            <div className="flex-1">;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The App Today</h2>;
              <p className="text-lg text-gray-300 mb-8">;
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.;
              </p>;
              <AppStoreButtons;
                className="mb-8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => logInfo("App Store button clicked")}
                onGooglePlayClick={() => logInfo("Google Play button clicked")}
              />;
              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;
            <div className="flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">;
                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
