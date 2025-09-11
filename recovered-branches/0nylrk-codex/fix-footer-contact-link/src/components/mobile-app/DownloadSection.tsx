


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const DownloadSection: React.FC = () => {
  // These would typically come from environment variables or a config
  const appStoreUrl = "#"; // Replace with actual App Store URL when available
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <AppStoreButtons
                className="mb-8"
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log("App Store button clicked")}
                onGooglePlayClick={() =>
                  console.log("Google Play button clicked")
                }
              
              <AppStoreButtons 
                className="mb-8" 
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console.log ("App Store button clicked")}
                onGooglePlayClick={() =>;
                  console.log ("Google Play button clicked");
                }
<<<<<<< HEAD
=======
              
              <AppStoreButtons 
                className="mb-8" 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AppStoreButtons 
                className="mb-8" 


              />
              <div className="text-sm text-gray-400">
                <p>Compatible with iOS 14+ and Android 8.0+</p>
                <p>Free download, in-app purchases available</p>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {QrCodeIcon} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
export const DownloadSection: React.FC = () => {;
  // These would typically come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <AppStoreButtons
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
                onAppStoreClick={() => console && console.log("App Store button clicked")}
                onGooglePlayClick={() => console && console.log("Google Play button clicked")}
<<<<<<< HEAD

};

  );
}

};
=======
=======

};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
},

              />;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-sm text-gray-400">;
                <p>Compatible with iOS 14+ and Android 8 && 8.0+</p>;
                <p>Free download, in-app purchases available</p>;
              </div>;
            </div>;

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;
                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
<<<<<<< HEAD
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
export default DownloadSection;

    </section>;
  ),;
},; return (<section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark" > <div className="container mx-auto px-4" > <div className="max-w-4xl mx-auto" > <div className="flex flex-col md:flex-row items-center justify-between gap-8" > <div className="flex-1" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Get The App Today</h2> <p className="text-lg text-gray-300 mb-8" > mb-8"appStoreUrl= {
  appStoreUrl 
}text-sm text-gray-400" > <p>Compatible with iOS 14+ and Android 8.0+</p> <p>Free download, in-app purchases available</p> </div> </div> </div> <p className="text-center text-xs mt-2 text-zion-blue-dark" >Scan to download</p> </div> </div> </div> </div> </section>) 
};
);

}
};

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </section>);
}
;

=======

export default DownloadSection;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
