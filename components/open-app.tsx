import { useEffect } from 'react';

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const now = Date.now();
    const timeout = setTimeout(() => {
      const elapsed = Date.now() - now;
      if (elapsed < 2000) {

        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL

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
        </div>;
      </div>;
    </div>;
  );  }, []);
