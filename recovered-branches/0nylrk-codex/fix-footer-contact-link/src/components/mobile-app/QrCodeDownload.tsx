


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {QrCode} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
import React from "react",
import { QrCode } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";

import { QrCode } from "lucide-react",
import { AppStoreButtons } from "./AppStoreButtons",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#"; // Replace with actual App Store URL
  const googlePlayUrl = "#"; // Replace with actual Google Play URL
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download <span className="text-zion-cyan">Zion</span> to Your
                Device
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Scan the QR code with your phone camera to download the app
                instantly, or use the buttons below to get it from your app
                store of choice.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <AppStoreButtons 
                className="mb-8" 


<<<<<<< HEAD
<<<<<<< HEAD
<AppStoreButtons
                className="mb-8"
              <AppStoreButtons
                className="mb-8"
              <AppStoreButtons 
                className="mb-8" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
              <div className="flex gap-2 items-center text-sm text-gray-400">
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>
                <span>Compatible with iOS 14+ and Android 8.0+</span>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex-shrink-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-48 h-48 flex items-center justify-center bg-white rounded-lg">
                  <QrCode className="w-full h-full p-4" />
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
<<<<<<< HEAD
};

  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {QrCode} from "lucide-react";
import {AppStoreButtons} from "./AppStoreButtons";
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
=======

};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
},
import React from "react",;
import { QrCode } from "lucide-react",;
import { AppStoreButtons } from "./AppStoreButtons",;

export const QrCodeDownload: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
<<<<<<< HEAD
  return (

import React from "react",;
import { QrCode } from "lucide-react",;
import { AppStoreButtons } from "./AppStoreButtons",;
;
export const QrCodeDownload:React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
;
  return (;
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              ;
              <AppStoreButtons ;
                className="mb-8" ;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
              ;
              <div className="flex gap-2 items-center text-sm text-gray-400">;
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;
            ;
=======

              <AppStoreButtons
                className="mb-8" 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;

              <div className="flex gap-2 items-center text-sm text-gray-400">;
                <span className="block h-1 w-1 rounded-full bg-zion-purple"></span>;
                <span>Compatible with iOS 14+ and Android 8 && 8.0+</span>;
              </div>;
            </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex-shrink-0">;
              <div className="bg-white p-6 rounded-xl shadow-lg">;
                <div className="w-48 h-48 flex items-center justify-center bg-white rounded-lg">;
                  <QrCode className="w-full h-full p-4" />;
                  {/* This would be replaced with an actual QR code in production */}
                </div>;
                <p className="text-center text-sm mt-2 text-zion-blue-dark font-medium">;
<<<<<<< HEAD
=======
=======
import React from './react';
import { QrCode  } from './lucide-react';
import { AppStoreButtons  } from './AppStoreButtons';
export const QrCodeDownload: React.FC = () => {
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#"; // Replace with actual App Store URL;
  const googlePlayUrl = "#"; // Replace with actual Google Play URL;
  return (
    <section className="py - 16 bg - gradient - to - b from - zion - blue to - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-5xl mx - auto">;
          <div className="flex flex - col md:flex - row items - center justify - between gap - 8 md:gap - 12">;
            <div className="flex - 1">;
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">;
                Download <span className="text - zion - cyan">Zion</span> to Your;
                Device;
              </h2>;
              <p className="text - lg text - gray - 300 mb - 8">;
                Scan the QR code with your phone camera to download the app;
                instantly, or use the buttons below to get it from your app;
                store of choice.;
              </p>;
              <AppStoreButtons;
                className="mb - 8";
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
              <div className="flex gap - 2 items - center text - sm text - gray - 400">;
                <span className="block h - 1 w - 1 rounded - full bg - zion - purple"></span>;
                <span > Compatible with iOS 14+ and Android 8.0+</span>;
              </div>;
            </div>;
            <div className="flex - shrink - 0">;
              <div className="bg - white p - 6 rounded - xl shadow - lg">;
                <div className="w - 48 h - 48 flex items - center justify - center bg - white rounded - lg">;
                  <QrCode className="w - full h - full p - 4" />;
                  {/* This would be replaced with an actual QR code in production */}
                </div>;
                <p className="text - center text - sm mt - 2 text - zion - blue - dark font - medium">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Scan to download;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
export default QrCodeDownload;

    </section>;
  ),;
},; py-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark"> <div className=" container mx-auto px-4"> <div className=" max-w-5xl mx-auto"> <div className=" flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"> <div className=" flex-1"> <h2 className=" text-3xl md:text-4xl font-bold text-white mb-6"> Download <span className=" text-zion-cyan">Zion</span> to Your Device </h2> </p> <AppStoreButtons className=" mb-8"appStoreUrl= {
  appStoreUrl 
}googlePlayUrl= {
  googlePlayUrl 
}/> <div className=" flex gap-2 items-center text-sm text-gray-400"> <span className=" block h-1 w-1 rounded-full bg-zion-purple"></span> <span>Compatible with iOS 14+ and Android 8.0+</span> </div> </div> </div> <p className=" text-center text-sm mt-2 text-zion-blue-dark font-medium" > Scan to download </p> </div> </div> </div> </div> </div> </section>) 
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

export default QrCodeDownload;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
