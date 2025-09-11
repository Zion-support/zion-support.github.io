export const QrCodeDownload: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
}
import React from "react"
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
xport const QrCodeDownload: React.FC = () => {
}
import React from "react"
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",

import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download <span className="text-zion-cyan">Zion</span> to Your Device
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.
              </p>
              

              <AppStoreButtons 
              <AppStoreButtons
                className="mb-8"
                appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
              />
              
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
              
              

=======



              

              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />

              

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="flex gap-2 items-center text-sm text-gray-400">
=======



              
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
              

              <div className="flex gap-2 items-center text-sm text-gray-400">
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            


            <div className="flex-shrink-0">
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                  <QrCode className="w-full h-full p-4" />
<<<<<<< HEAD
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
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

},
import React from "react",;
import { QrCode } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;
ursor/fix-website-loading-errors-and-merge-6662
            
            


            <div className="flex-shrink-0">
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                  <QrCode className="w-full h-full p-4" />
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (
    <section className="py - 16 bg - gradient - to - b from - zion - blue to - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-5xl mx - auto">;
          <div className="flex flex - col md:flex - row items - center justify - between gap - 8 md:gap - 12">;
            <div className="flex - 1">;
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">;
                Download <span className="text - zion - cyan">Zion</span> to Your Device;
              </h2>;
              <p className="text - lg text - gray - 300 mb - 8">;
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.;
              </p>;
              <AppStoreButtons;
                className="mb - 8";
                appStoreUrl = {appStoreUrl, }
                googlePlayUrl = {googlePlayUrl, }
              />;
              <div className="flex gap - 2 items - center text - sm text - gray - 400">;
                <span className="block h - 1 w - 1 rounded - full bg - zion - purple"></span>;
                <span > Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;
            <div className="flex - shrink - 0">;
              <div className="bg - white dark: bg - zion - blue - dark p - 6 rounded - xl shadow - lg">;
                <div className="w - 48 h - 48 flex items - center justify - center bg - white dark:bg - zion - blue rounded - lg">;
                  <QrCode className="w - full h - full p - 4" />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  {/* This would be replaced with an actual QR code in production */}
                </div>;
                <p className="text - center text - sm mt - 2 text - zion - blue - dark font - medium">;
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}


};
import React from "react";
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons";
export const QrCodeDownload: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (;
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="max-w-5xl mx-auto">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">;
            <div className="flex-1">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Download <span className="text-zion-cyan">Zion</span> to Your Device;
              </h2>;
              <p className="text-lg text-gray-300 mb-8">;
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.;
              </p>;
              <AppStoreButtons;
                className="mb-8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
              <div className="flex gap-2 items-center text-sm text-gray-400">;
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;
            <div className="flex-shrink-0">;
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">;
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">;
                  <QrCode className="w-full h-full p-4" />;
                  {/* This would be replaced with an actual QR code in production */}
                </div>;
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">;
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
};

"


";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </section>);
};
<<<<<<< HEAD
";
  )
}
"

},
import React from "react",;
import { QrCode } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;
=======
import React from "react";
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const QrCodeDownload: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (;
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="max-w-5xl mx-auto">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">;
            <div className="flex-1">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Download <span className="text-zion-cyan">Zion</span> to Your Device;
              </h2>;
              <p className="text-lg text-gray-300 mb-8">;
                Scan the QR code with your phone camera to download the app instantly, or use the buttons below to get it from your app store of choice.;
              </p>;
              <AppStoreButtons;
                className="mb-8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
              <div className="flex gap-2 items-center text-sm text-gray-400">;
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;
            <div className="flex-shrink-0">;
              <div className="bg-white dark:bg-zion-blue-dark p-6 rounded-xl shadow-lg">;
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">;
                  <QrCode className="w-full h-full p-4" />;
                  {/* This would be replaced with an actual QR code in production */}
                </div>;
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">;
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
=======

"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

";
                  {/* This would be replaced with an actual QR code in production */}
                </div>
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </section>

  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
