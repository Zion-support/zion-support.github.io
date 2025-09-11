<<<<<<< HEAD
<<<<<<< HEAD
}
import React from "react"
import { QrCodeIcon } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import { logInfo } from '@/utils/productionLogger'
import React from "react",
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
import { logInfo } from '@/utils/productionLogger',
xport const DownloadSection: React.FC = () => {
}
import React from "react"
import { QrCodeIcon } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import { logInfo } from '@/utils/productionLogger'

import React from "react",
import { QrCodeIcon } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
import { logInfo } from '@/utils/productionLogger',
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = "#", // Replace with actual App Store URL when available
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The App Today</h2>
              <p className="text-lg text-gray-300 mb-8">
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.
              </p>
              <AppStoreButtons
                className="mb-8"
                appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
                onAppStoreClick = {(,) => logInfo("App Store button clicked"),}
                onGooglePlayClick = {() => logInfo("Google Play button clicked"),}
              />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
                onAppStoreClick = {(,) => logInfo("App Store button clicked"),}
                onGooglePlayClick = {() => logInfo("Google Play button clicked"),}



              
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => logInfo("App Store button clicked")}
                onGooglePlayClick={() => logInfo("Google Play button clicked")}
              />
              
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="text-sm text-gray-400">
              
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-sm text-gray-400">
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex-shrink-0 bg-white dark: bg-zion-blue-dark p-4 rounded-lg">
            <div className="flex-shrink-0 bg-white dark: bg-zion-blue-dark p-4 rounded-lg">
            
            <div className="flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg">
              <div className="w-36 h-36 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                <QrCodeIcon className="w-full h-full p-2" />
                {/* This would be replaced with an actual QR code in production */}
              </div>
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
";
}
"

  );
};
";
  )
}
"

},
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
  return (
    <section className="py - 16 bg - gradient - to - b from - zion - blue to - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-4xl mx - auto">;
          <div className="flex flex - col md:flex - row items - center justify - between gap - 8">;
            <div className="flex - 1">;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Get The App Today</h2>;
              <p className="text - lg text - gray - 300 mb - 8">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.;
              </p>;
              <AppStoreButtons;
                className="mb-8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => logInfo("App Store button clicked")}
                onGooglePlayClick={() => logInfo("Google Play button clicked")}
              />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text - sm text - gray - 400">;
                <p > Compatible with iOS 14+ and Android 8.0+</p>;
                <p > Free download, in - app purchases available</p>;
              </div>;
            </div>;
            <div className="flex - shrink - 0 bg - white dark: bg - zion - blue - dark p - 4 rounded - lg">;
              <div className="w - 36 h - 36 flex items - center justify - center bg - white dark:bg - zion - blue rounded - lg">;
                <QrCodeIcon className="w - full h - full p - 2" />;

                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text - center text - xs mt - 2 text - zion - blue - dark">Scan to download</p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}

              />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            
            <div className="flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

";

            
            <div className="flex-shrink-0 bg-white dark:bg-zion-blue-dark p-4 rounded-lg">

              <div className="w-36 h-36 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                <QrCodeIcon className="w-full h-full p-2" />
                {/* This would be replaced with an actual QR code in production */}
              </div>
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
