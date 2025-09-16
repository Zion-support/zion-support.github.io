<<<<<<< HEAD
import React from 'react';

const open-app: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">open-app</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default open-app;
=======
import { useEffect } from 'react';

const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

export default function OpenApp() {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
      }
    }, 1200);
    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);
    const timer = setTimeout(() => {
      try { document.body.removeChild(iframe); } catch {}
    }, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
      try { document.body.removeChild(iframe); } catch {}
    };
  }, []);
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
