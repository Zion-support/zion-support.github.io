import { useEffect } from 'react';
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
      try {
        document.body.remove_child (iframe);
      } catch {}    }, 1500);      try { document.body.remove_child (iframe) } catch {}
    }, 1500);
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