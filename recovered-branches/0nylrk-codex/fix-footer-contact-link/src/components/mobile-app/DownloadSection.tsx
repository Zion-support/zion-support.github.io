<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {QrCodeIcon} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
import React from "react",
import { QrCodeIcon } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";

import { QrCodeIcon } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = "#"; // Replace with actual App Store URL when available
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get The App Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Download the Zion app now and take your tech career or hiring
                needs to the next level. Available on iOS and Android.
              </p>
<<<<<<< HEAD
              <AppStoreButtons
                className="mb-8"
=======

import React from './react';
import { QrCodeIcon  } from './lucide-react';
import { AppStoreButtons  } from './AppStoreButtons';
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config;
  const appStoreUrl = "#"; // Replace with actual App Store URL when available;
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available;
  return (
    <section className="py - 16 bg - gradient - to - b from - zion - blue to - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-4xl mx - auto">;
          <div className="flex flex - col md:flex - row items - center justify - between gap - 8">;
            <div className="flex - 1">;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
                Get The App Today;
              </h2>;
              <p className="text - lg text - gray - 300 mb - 8">;
                Download the Zion app now and take your tech career or hiring;
                needs to the next level. Available on iOS and Android.;
              </p>;
              <AppStoreButtons;
                className="mb - 8";

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log ("App Store button clicked")}
                onGooglePlayClick={() =>;
                  console.log ("Google Play button clicked");
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <AppStoreButtons
                className="mb-8"
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() =>
                  console.log("Google Play button clicked")
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                }
              
              <AppStoreButtons 
                className="mb-8" 
<<<<<<< HEAD
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() => console.log("Google Play button clicked")}
import React from "react",;
import { QrCodeIcon } from "lucide-react",;
import { AppStoreButtons } from "./AppStoreButtons",;
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
                onAppStoreClick={() => // // // console.log("App Store button clicked")}
                onGooglePlayClick={() => // // // console.log("Google Play button clicked")}
=======
=======
              <AppStoreButtons 
                className="mb-8" 


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              />
              <div className="text-sm text-gray-400">
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">
                <QrCodeIcon className="w-full h-full p-2" />
                {/* This would be replaced with an actual QR code in production */}
              </div>
              <p className="text-center text-xs mt-2 text-zion-blue-dark">
                Scan to download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  );
}

};
=======

import React from "react";
import {QrCodeIcon} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
export const DownloadSection: React.FC = () => {;
  // These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;

  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="max-w-4xl mx-auto">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">;
            <div className="flex-1">;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The App Today</h2>;
              <p className="text-lg text-gray-300 mb-8">;
                Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android.;
              </p>;

              <AppStoreButtons
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console && console.log("App Store button clicked")}
                onGooglePlayClick={() => console && console.log("Google Play button clicked")}
=======

};

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  )
},

              />;

              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8 && 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;

            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;
                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
=======
              />;
              <div className="text - sm text - gray - 400">;
                <p > Compatible with iOS 14+ and Android 8.0+</p>;
                <p > Free download, in - app purchases available</p>;
              </div>;
            </div>;
            <div className="flex - shrink - 0 bg - white p - 4 rounded - lg">;
              <div className="w - 36 h - 36 flex items - center justify - center bg - white rounded - lg">;
                <QrCodeIcon className="w - full h - full p - 2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text - center text - xs mt - 2 text - zion - blue - dark">;
                Scan to download;
              </p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

    </section>);
}
;

=======

export default DownloadSection;
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
