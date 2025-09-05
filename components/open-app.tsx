<<<<<<< HEAD
import { useEffect } from 'react',
const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app',
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open',

export default function OpenApp() {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent),
    const isAndroid = /Android/i.test(navigator.userAgent),
    const now = Date.now(),
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now,
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
      }
    }, 1200),

    // Try to open the deep link
    const iframe = document.createElement('iframe'),
    iframe.style.display = 'none',
    iframe.src = DEEP_LINK_URL,
    document.body.appendChild(iframe),

    const timer = setTimeout(() => {
      try { document.body.removeChild(iframe) } catch {}
    }, 1500),

    return () => {
      clearTimeout(timeout),
      clearTimeout(timer),
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []),
=======

const _IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https://apps.apple.com/app/id0000000000';
const _ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https://play.google.com/store/apps/details?id=com.zion.app';
const _DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

export default function OpenApp() {_useEffect__(() => {
    const _isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const _isAndroid = /Android/i.test(navigator.userAgent);
    const _now = Date.now();
    const _timeout = setTimeout__(() => {
      const _elapsed = Date.now() - now;
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;}
    }, 1200);

    // Try to open the deep link
    const _iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);

    const _timer = setTimeout__(() => {_try { document.body.removeChild(iframe);} catch {}
    }, 1500);

    return () => {_clearTimeout(timeout);
      clearTimeout(timer);
      try { document.body.removeChild(iframe);} catch {}
    };
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;min-h-[50vh] flex items-center justify-center&quot;>
      <div className=&quot;text-center&quot;>
        <div className=&quot;text-lg font-semibold&quot;>Opening the Zion app…</div>
        <div className=&quot;mt-2 text-sm opacity-70&quot;>If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  )
}
