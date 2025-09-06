<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx

<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React from "react";
import {QrCodeIcon} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { QrCodeIcon } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";

<<<<<<< HEAD
import React from "react";
import { QrCodeIcon } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { QrCodeIcon } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = "#"; // Replace with actual App Store URL when available
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <AppStoreButtons
                className="mb-8"
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() =>
                  console.log("Google Play button clicked")
                }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              
              <AppStoreButtons 
                className="mb-8" 
              <AppStoreButtons 
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() => console.log("Google Play button clicked")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log ("App Store button clicked")}
                onGooglePlayClick={() =>;
                  console.log ("Google Play button clicked");
                }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx


              
              <AppStoreButtons 
                className="mb-8" 
=======
              <AppStoreButtons 
                className="mb-8" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />
              <div className="text-sm text-gray-400">
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  );
}

};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  )
},

              />;
              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8 && 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;
                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx

    </section>);
}
;

=======

export default DownloadSection;
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </section>);
}
;
=======
    </section>;
  ),;
},; return (<section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark" > <div className="container mx-auto px-4" > <div className="max-w-4xl mx-auto" > <div className="flex flex-col md:flex-row items-center justify-between gap-8" > <div className="flex-1" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Get The App Today</h2> <p className="text-lg text-gray-300 mb-8" > mb-8"appStoreUrl= {
  appStoreUrl 
}text-sm text-gray-400" > <p>Compatible with iOS 14+ and Android 8.0+</p> <p>Free download, in-app purchases available</p> </div> </div> </div> <p className="text-center text-xs mt-2 text-zion-blue-dark" >Scan to download</p> </div> </div> </div> </div> </section>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/DownloadSection.tsx
=======
);

}
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
