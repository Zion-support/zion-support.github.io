import React, { useState } from 'react';
import { QrCode, Smartphone, Download, Share2, Copy, Check } from 'lucide-react';

export const QrCodeDownload = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('ios');

  const downloadLinks = {
    ios: {
      name: 'iOS App Store',
      url: 'https://apps.apple.com/app/zion-it-asset-management',
      qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgNDBIMTYwVjE2MEg0MFY0MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCA2MEgxNDBWMTQwSDYwVjYwWiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K',
      icon: '🍎',
      description: 'Download for iPhone and iPad'
    },
    android: {
      name: 'Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.zion.mobile',
      qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgNDBIMTYwVjE2MEg0MFY0MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02MCA2MEgxNDBWMTQwSDYwVjYwWiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K',
      icon: '🤖',
      description: 'Download for Android devices'
    }
  };

  const handleCopyLink = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = async (platform) => {
    const { url, name } = downloadLinks[platform];
    const text = `Download ${name} - Zion IT Asset Management App: ${url}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zion Mobile App',
          text: text,
          url: url
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopyLink(url);
    }
  };

  const currentPlatform = downloadLinks[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Download Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scan the QR code with your mobile device or use the direct download links below. 
            Get Zion mobile app in seconds!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* QR Code Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <QrCode className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Scan to Download</h3>
                </div>
                
                <div className="bg-white rounded-2xl p-6 mb-6 inline-block">
                  <img 
                    src={currentPlatform.qrCode} 
                    alt={`QR Code for ${currentPlatform.name}`}
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                
                <p className="text-gray-300 mb-4">
                  Point your camera at the QR code above
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <Smartphone className="w-4 h-4" />
                  <span>Works with any QR code scanner app</span>
                </div>
              </div>
            </div>

            {/* Platform Tabs */}
            <div className="bg-white/5 rounded-2xl p-2 border border-white/10">
              <div className="flex space-x-1">
                {Object.keys(downloadLinks).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setActiveTab(platform)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === platform
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl">{downloadLinks[platform].icon}</span>
                    <span className="capitalize">{platform}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{currentPlatform.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentPlatform.name}
                  </h3>
                  <p className="text-gray-300">{currentPlatform.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a
                  href={currentPlatform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </a>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleShare(activeTab)}
                    className="flex items-center justify-center space-x-2 px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  
                  <button
                    onClick={() => handleCopyLink(currentPlatform.url)}
                    className="flex items-center justify-center space-x-2 px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Why Download Zion Mobile?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Instant access to your IT assets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time updates and notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Offline mode for field work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Secure enterprise-grade security</span>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">System Requirements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-gray-300 mb-2">iOS</h5>
                  <p className="text-gray-400">iOS 13.0 or later</p>
                  <p className="text-gray-400">iPhone 6s or newer</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-300 mb-2">Android</h5>
                  <p className="text-gray-400">Android 8.0 or later</p>
                  <p className="text-gray-400">2GB RAM minimum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Having Trouble?
            </h3>
            <p className="text-gray-300 mb-4">
              If you're experiencing issues with the download or QR code, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support"
                className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Help
              </a>
              <a
                href="#manual-download"
                className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Manual Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
