import { useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  'https://play.google.com/store/apps/details?id=com.zion.app';
=======
const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';
=======
const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https: //play.google.com/store/apps/details?id=com.zion.app', const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function OpenApp() {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
<<<<<<< HEAD
<<<<<<< HEAD
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
=======
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }, 1200);

    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);

    const timer = setTimeout(() => {
<<<<<<< HEAD
<<<<<<< HEAD
      try {
        document.body.removeChild(iframe);
      } catch {}
=======
      try { document.body.removeChild(iframe) } catch {}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      try { document.body.removeChild(iframe) } catch {}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
<<<<<<< HEAD
<<<<<<< HEAD
      try {
        document.body.removeChild(iframe);
      } catch {}
    };
=======
      try { document.body.removeChild(iframe) } catch {}
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
