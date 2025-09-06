import { useEffect } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |
  'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL |'zion://open';export default function OpenApp() {
  useEffect(() => {
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {
  useEffect(() => {;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  useEffect(() => {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
      }
    }, 1200);
    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);
    const timer = setTimeout(() => {
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
    }, 1500);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }, 1500);

    return () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      clearTimeout(timeout);
      clearTimeout(timer);
      try {;
        document && document.body.removeChild(iframe);
      } catch {}
=======
      try { document.body.removeChild(iframe) } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }, []);
<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
  );  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">;
      <div className="text-center">;
        <div className="text-lg font-semibold">Opening the Zion app…</div>;
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
}
=======
=======
;
    return () => {
      clear_timeout (timeout);
      clear_timeout (timer);
      try {
        document.body.remove_child (iframe);
      } catch {}
    }
  }, []);
;
  return (
    <div className='min - h-[50vh] flex items - center justify - center'>;
      <div className='text - center'>;
        <div className='text - lg font - semibold'>Opening the Zion app…</div>;
        <div className='mt - 2 text - sm opacity - 70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>);  }, []);
;
  return (
    <div className="min - h-[50vh] flex items - center justify - center">;
      <div className="text - center">;
        <div className="text - lg font - semibold">Opening the Zion app…</div>;
        <div className="mt - 2 text - sm opacity - 70">If nothing happens, you’ll be redirected to the store.</div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
