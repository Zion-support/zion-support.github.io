import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

// This component handles deep linking to the mobile app
const OpenAppRedirect = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('redirecting');

  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = "zion://";
      const androidAppUrl = "market://details?id=app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000";
      const fallbackUrl = "/mobile-launch"; // Fallback to mobile launch page
      
      let timeout;

      // Try to open the app
      if (isAndroid || isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
          setStatus('timeout');
          if (isAndroid) {
            window.location.href = androidAppUrl;
          } else if (isiOS) {
            window.location.href = iosAppUrl;
          }
        }, 2500); // Wait 2.5 seconds before redirecting to store

        // Try to open the app
        window.location.href = appScheme;
      } else {
        // Not on mobile, redirect to mobile launch page
        setStatus('failed');
        setTimeout(() => {
          navigate(fallbackUrl);
        }, 1500);
      }

      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener("visibilitychange", () => {
        if (document.hidden && timeout) {
          clearTimeout(timeout);
        }
      });
    };

    attemptAppOpen();
  }, [navigate]);

  return (
    <>
      <SEO title="Opening Zion App" description="Redirecting to the Zion AI Marketplace mobile app" />
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center p-8">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          
          {status === 'redirecting' && (
            <>
              <h1 className="text-2xl font-bold text-white mb-2">Opening Zion App...</h1>
              <p className="text-gray-300">If nothing happens, download the app first.</p>
            </>
          )}
          
          {status === 'timeout' && (
            <>
              <h1 className="text-2xl font-bold text-white mb-2">App Not Installed</h1>
              <p className="text-gray-300 mb-6">We're redirecting you to download the Zion app.</p>
            </>
          )}
          
          {status === 'failed' && (
            <>
              <h1 className="text-2xl font-bold text-white mb-2">Opening App Failed</h1>
              <p className="text-gray-300 mb-6">We're taking you to our mobile app page where you can download the app.</p>
              <Link
                to="/mobile-launch"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Go to Mobile App Page
              </Link>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenAppRedirect;
