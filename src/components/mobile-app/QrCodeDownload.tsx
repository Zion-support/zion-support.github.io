import React from 'react';

export function QrCodeDownload() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Quick Download
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Scan the QR code to download our app
        </p>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-gray-500 text-sm">QR Code</div>
            </div>
            <p className="text-sm text-gray-600">
              Scan with your phone camera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}