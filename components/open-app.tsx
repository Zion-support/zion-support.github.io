import { useEffect } from 'react';
<<<<<<< HEAD

<<<<<<< HEAD
const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |
  'https://play.google.com/store/apps/details?id=com.zion.app';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https: //play.google.com/store/apps/details?id=com.zion.app', const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open',
export default function OpenApp() {
  useEffect(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
<<<<<<< HEAD

        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL

=======
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }, 1200);
    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);
    const timer = setTimeout(() => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
const IOS_APP_URL =;
  process.env.NEXT_PUBLIC_IOS_APP_URL ||;
  'https://apps.apple.com / app / id0000000000';
const ANDROID_APP_URL =;
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||;
  'https://play.google.com / store / apps / details?id = com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default /**
 * OpenApp - Function description
 */
function OpenApp() {
  useEffect (() => {
    const isIOS = /i_phone | i_pad | i_pod / i.test (navigator.user_agent);
    const is_android = /Android / i.test (navigator.user_agent);
    const now = Date.now ();
    const timeout = set_timeout (() => {
      const elapsed = Date.now () - now;
      // Check condition
if ( {) {
  $2
}
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;      }        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
      }
    }, 1200);
;
    // Try to open the deep link;
    const iframe = document.create_element ('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.append_child (iframe);
;
    const timer = set_timeout (() => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
    }, 1500);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const IOS_APP_URL =;
  process && process.env.NEXT_PUBLIC_IOS_APP_URL ||;
  'https://apps && apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =;
  process && process.env.NEXT_PUBLIC_ANDROID_APP_URL ||;
  'https://play && play.google.com/store/apps/details?id=com && com.zion.app';
const DEEP_LINK_URL = process && process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {;
  useEffect(() => {;
    const isIOS = /iPhone|iPad|iPod/i && i.test(navigator && navigator.userAgent);
    const isAndroid = /Android/i && i.test(navigator && navigator.userAgent);
    const now = Date && Date.now();
    const timeout = setTimeout(() => {;
      const elapsed = Date && Date.now() - now;
      if (elapsed < 2000) {;
        window && window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;      }        window && window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;
      }
    }, 1200);
    // Try to open the deep link;
    const iframe = document && document.createElement('iframe');
    iframe && iframe.style.display = 'none';
    iframe && iframe.src = DEEP_LINK_URL;
    document && document.body.appendChild(iframe);
    const timer = setTimeout(() => {;
      try {;
        document && document.body.removeChild(iframe);
      } catch {}    }, 1500);      try { document && document.body.removeChild(iframe) } catch {}
<<<<<<< HEAD

=======
      try { document.body.removeChild(iframe) } catch {}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }, 1500);
    return () => {;
      clearTimeout(timeout);
      clearTimeout(timer);
<<<<<<< HEAD


=======
      try { document.body.removeChild(iframe) } catch {}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }, []);
=======
      try {
        document.body.removeChild(iframe);
      } catch {}    }, 1500);      try { document.body.removeChild(iframe) } catch {}
    }, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
      try {
        document.body.removeChild(iframe);
      } catch {}
    }
  }, []);

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
}

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  return (
    <div className=&quot;min-h-[50vh] flex items-center justify-center&quot;>
      <div className=&quot;text-center&quot;>
        <div className=&quot;text-lg font-semibold&quot;>Opening the Zion app…</div>
        <div className=&quot;mt-2 text-sm opacity-70&quot;>If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  )
}

=======

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
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;      }        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
      }
    }, 1200);
    // Try to open the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);
    const timer = setTimeout(() => {
      try {
        document.body.removeChild(iframe);
      } catch {}    }, 1500);      try { document.body.removeChild(iframe) } catch {}
    }, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
      try {
        document.body.removeChild(iframe);
      } catch {}
    }
  }, []);

  return (
    <div className='min-h-[50vh] flex items-center justify-center'>
      <div className='text-center'>
        <div className='text-lg font-semibold'>Opening the Zion app…</div>
        <div className='mt-2 text-sm opacity-70'>
          If nothing happens, you’ll be redirected to the store.
        </div>
      </div>
    </div>
  );  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  );
}
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
