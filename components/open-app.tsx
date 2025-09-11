import { useEffect } from 'react';
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
=======
=======

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {

        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
    }, 1500);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }, 1500);
    return () => {;
      clearTimeout(timeout);
      clearTimeout(timer);
    }
  }, []);
=======


    }
  }, []);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======  return (
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

}


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
==============
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
