import { useEffect } from 'react';

  useEffect(() => {;

const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';

export default function OpenApp() {
  useEffect(() => {
;

  useEffect(() => {

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {}
      const elapsed = Date.now() - now;

      }
    }, 1200);
    // Try to open the deep link;
const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);

const timer = setTimeout(() => {

try {}
        document.body.removeChild(iframe);}
      } catch {}
    }, 1500);
    }, 1500);

    return () => {;
      clearTimeout(timeout);
      clearTimeout(timer);

try {}
        document.body.removeChild(iframe);}
      } catch {}
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []);
  return (

  return (
    <div className=\"min-h-[50vh] flex items-center justify-center\"    />
      <div className=\"text-center\"    />
        <div className=\"text-lg font-semibold\"    />Opening the Zion app…</div>
        <div className=\"mt-2 text-sm opacity-70\"    />If nothing happens, you’ll be redirected to the store.</div>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

