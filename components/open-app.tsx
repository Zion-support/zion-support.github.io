import { useEffect } from 'react';
const IOS_APP_URL = $2;
const ANDROID_APP_URL = $2;
const DEEP_LINK_URL = $2;
export default function OpenApp() {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test($2);
    const isAndroid = /Android/i.test($2);
    const now = Date.now($2);
    const timeout = $2;
      if (elapsed < 2000) {
        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
      }
    }, 1200),

    // Try to open the deep link
    const iframe = document.createElement($2);
    iframe.style.display = $2;
    iframe.src = $2;
    document.body.appendChild($2);
    const timer = setTimeout(() => {
      try { document.body.removeChild(iframe) } catch {}
    }, 1500),

    return () => {
      clearTimeout($2);
      clearTimeout($2);
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []),

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg font-semibold">Opening the Zion app…</div>
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  )
}
