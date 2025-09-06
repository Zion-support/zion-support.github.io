import { useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL |'zion://open';export default function OpenApp() {
=======
<<<<<<< HEAD

const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL |'zion://open';export default function OpenApp() {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const IOS_APP_URL = null;
const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |
  'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

export default function OpenApp() {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  useEffect(() => {
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {
  useEffect(() => {;

  useEffect(() => {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;      }        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
=======
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
=======
try {
        document.body.removeChild(iframe);
      } catch {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
try {
        document.body.removeChild(iframe);
      } catch {}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    }, 1500);
    }, 1500);

    return () => {;
      clearTimeout(timeout);
      clearTimeout(timer);
<<<<<<< HEAD
<<<<<<< HEAD
      try {;
        document && document.body.removeChild(iframe);
=======
<<<<<<< HEAD
      try {;
        document && document.body.removeChild(iframe);
=======
try {
        document.body.removeChild(iframe);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
try {
        document.body.removeChild(iframe);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      } catch {}
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
  );  }, []);

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    <div className='min-h-[50vh] flex items-center justify-center'>
      <div className='text-center'>
        <div className='text-lg font-semibold'>Opening the Zion app…</div>
        <div className='mt-2 text-sm opacity-70'>
          If nothing happens, you’ll be redirected to the store.
        </div>
      </div>
    </div>
  );
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
