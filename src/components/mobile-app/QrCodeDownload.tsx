<<<<<<< HEAD


export const QrCodeDownload: React.FC = () => {



=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
}
import React from "react"
import { QrCode } from 'lucide-react'import { AppStoreButtons } from "./AppStoreButtons"
=======
<<<<<<< HEAD
import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

import React from "react",
import { QrCode } from 'lucide-react'
import { AppStoreButtons } from "./AppStoreButtons",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
              <AppStoreButtons
                className="mb-8"
                appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
              />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
              

              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />

              
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <div className="flex gap-2 items-center text-sm text-gray-400">
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>


            
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            <div className="flex-shrink-0">
              <div className="bg-white dark: bg-zion-blue-dark p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white dark:bg-zion-blue rounded-lg">
                  <QrCode className="w-full h-full p-4" />
<<<<<<< HEAD

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
=======
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
  );
};
";
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
"

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
},
import React from "react",;
import { QrCode } from 'lucide-react';
import { AppStoreButtons } from "./AppStoreButtons",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export const QrCodeDownload: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;

  return (
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

              <AppStoreButtons
                className="mb-8" 
                appStoreUrl = {appStoreUrl,}
                googlePlayUrl = {googlePlayUrl,}
              />;

              <div className="flex gap-2 items-center text-sm text-gray-400">;
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8 && 8.0+</span>;
              </div>;
            </div>;

            <div className="flex-shrink-0">;
              <div className="bg-white dark: bg-zion-blue-dark p-6 rounded-xl shadow-lg">;
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

"

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
