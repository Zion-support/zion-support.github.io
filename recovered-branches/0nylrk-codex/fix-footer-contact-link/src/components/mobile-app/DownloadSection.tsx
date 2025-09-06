<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import { QrCodeIcon } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";
<<<<<<< HEAD
<<<<<<< HEAD

import { QrCodeIcon } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
=======
import React from "react";"
import { QrCodeIcon } from "lucide-react";"
import { AppStoreButtons } from "./AppStoreButtons";
export const DownloadSection: React.FC = () => {}
  // These would typically come from environment variables or a config";
  const appStoreUrl = "#"; // Replace with actual App Store URL when available"
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available;
  return ("
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">"
      <div className="container mx-auto px-4">"
        <div className="max-w-4xl mx-auto">"
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">"
            <div className="flex-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get The App Today;
              </h2>"
              <p className="text-lg text-gray-300 mb-8">
                Download the Zion app now and take your tech career or hiring;
                needs to the next level. Available on iOS and Android.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <AppStoreButtons
                className="mb-8"
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log ("App Store button clicked")}
                onGooglePlayClick={() =>;
                  console.log ("Google Play button clicked");
<<<<<<< HEAD
=======
=======
                }


              
              <AppStoreButtons 
                className="mb-8" 
=======
              <AppStoreButtons 
                className="mb-8" 


              />
=======
<<<<<<< HEAD
              <AppStoreButtons 
                className="mb-8" 
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <AppStoreButtons
                className="mb-8"
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() =>
                  console.log("Google Play button clicked")
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              />
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  )
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}

};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  )
},

              />;"
              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8 && 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react",;
import { QrCodeIcon } from "lucide-react",;
import { AppStoreButtons } from "./AppStoreButtons",;
;
export const DownloadSection:React.FC = () => {;
  // These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
;
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
              ;
              <AppStoreButtons ;
                className="mb-8" ;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => // // // console.log("App Store button clicked")}
                onGooglePlayClick={() => // // // console.log("Google Play button clicked")}
              />;
              ;
              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;
            ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;
=======


"
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;"
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;"
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </section>);
}
;

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}
};



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
