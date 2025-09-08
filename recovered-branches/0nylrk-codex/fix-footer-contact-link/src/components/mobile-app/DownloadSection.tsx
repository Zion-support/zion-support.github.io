import React from "react";
import { QrCodeIcon } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";
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

            <div className="flex-shrink-0 bg-white p-4 rounded-lg">;
              <div className="w-36 h-36 flex items-center justify-center bg-white rounded-lg">;

                <QrCodeIcon className="w-full h-full p-2" />;
                {/* This would be replaced with an actual QR code in production */}
              </div>;"
              <p className="text-center text-xs mt-2 text-zion-blue-dark">Scan to download</p>;
            </div>;
          </div>;
        </div>;
      </div>;
}
};
  );
};