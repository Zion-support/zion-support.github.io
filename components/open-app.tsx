
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import { useEffect } from 'react';'

const IOS_APP_URL =;
  process.env.NEXT_PUBLIC_IOS_APP_URL |

  ''https'://apps.apple.com/app/id0000000000';'

const ANDROID_APP_URL =;
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |;
  ''https'://play.google.com/store/apps/details?id=com.zion.app';'

<<<<<<< HEAD
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || ''zion'://open';'
=======
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || '"zion"://open';'
=======
import { useEffect } from 'react';
<<<<<<< HEAD

        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
=======

const IOS_APP_URL = null;

const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |

  'https://apps.apple.com/app/id0000000000';

>>>>>>> origin/chore/fix-lint-and-merge
const ANDROID_APP_URL =;
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |;
  'https://play.google.com/store/apps/details?id=com.zion.app';

const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

export default function OpenApp() {
  }
  useEffect(() => {

}

const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || ''zion'://open';'

export default function OpenApp() {
  }
  useEffect(() => {
;

  }

  useEffect(() => {

    }

    const isAndroid = /Android/i.test(navigator.userAgent);

const now = Date.now();

const timeout = setTimeout(() => {
     ;
  }
  const elapsed = Date.now() - now;
      if (elapsed < 2000) {

}

window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;

        window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL
      }
    }, 1200);
    // Try to open the deep link,
const iframe = document.createElement('iframe');'
    iframe.style.display = 'none';'
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe);

const timer = setTimeout(() => {

}

try {
        }
        document.body.removeChild(iframe);
      } catch {}
    }, 1500);
    }, 1500);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    return () => {;
      }
      clearTimeout(timeout);
      clearTimeout(timer);

try {
        }
        document.body.removeChild(iframe);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
    return () => {;
      clearTimeout(timeout);
      clearTimeout(timer);

try {}
        document.body.removeChild(iframe);}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      } catch {}
      try { document.body.removeChild(iframe) } catch {}
    }
  }, []);
return (;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    <div className='min-h-[50vh] flex items-center justify-center'>'
      <div className='text-center'>'
        <div className='text-lg font-semibold'>Opening the Zion app…</div>'
        <div className='mt-2 text-sm opacity-70'>'
          If nothing happens, you’ll be redirected to the store.
        </div>
      </div>
    </div>
  );
return (;
<<<<<<< HEAD
    <div className='min-h-[50vh] flex items-center justify-center'>'
      <div className='text-center'>'
        <div className='text-lg font-semibold'>Opening the Zion app…</div>'
        <div className='mt-2 text-sm opacity-70'>If nothing happens, you’ll be redirected to the store.</div>'
      </div>
    </div>
=======
    <div className="min-h-[50vh] flex items-center justify-center">"
      <div className="text-center">"
        <div className="text-lg font-semibold">Opening the Zion app…</div>"
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

<<<<<<< HEAD

=======
    <div className='min-h-[50vh] flex items-center justify-center'    />
      <div className='text-center'    />
        <div className='text-lg font-semibold'    />Opening the Zion app…</div>
        <div className='mt-2 text-sm opacity-70'    />
          If nothing happens, you’ll be redirected to the store.
        </div>
      </div>
    </div>
  );
  return (
    <div className=\"min-h-[50vh] flex items-center justify-center\"    />
      <div className=\"text-center\"    />
        <div className=\"text-lg font-semibold\"    />Opening the Zion app…</div>
        <div className=\"mt-2 text-sm opacity-70\"    />If nothing happens, you’ll be redirected to the store.</div>
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    </div>
  );
}
<<<<<<< HEAD
const DEEP_LINK_URL  = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {useEffect(() => {const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {useEffect(() => {useEffect(() => {const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)const isAndroid = /Android/i.test(navigator.userAgent)const now = Date.now()const timeout = setTimeout(() => {const elapsed = Date.now() - now;
      if (elapsed < 2000) {window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;}
    }, 1200)// Try to open the deep link;
    const iframe = document.createElement('iframe')iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe)const timer = setTimeout(() => {try {document.body.remove_child (iframe)} catch {}    }, 1500)try { document.body.remove_child (iframe) } catch {}try {document.body.removeChild(iframe)} catch {}}, 1500)}, 1500)return () => {clearTimeout(timeout)clearTimeout(timer)try {document && document.body.removeChild(iframe)try {document.body.removeChild(iframe)} catch {}
      try { document.body.removeChild(iframe) } catch {}
    }
  }, [])return (<div className='min-h-[50vh] flex items-center justify-center'>;
    <div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  )}, [])<div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
  )return (<div className="min-h-[50vh] flex items-center justify-center">;
=======
  );  }, []);
  return (
    <div className="min-h-[50vh] flex items-center justify-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="text-center">;
        <div className="text-lg font-semibold">Opening the Zion app…</div>;
        <div className="mt-2 text-sm opacity-70">If nothing happens, you’ll be redirected to the store.</div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );  }, []);

  )}
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
  );
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


  return (
    <div className=&quot;min-h-[50vh] flex items-center justify-center&quot;>
      <div className=&quot;text-center&quot;>
        <div className=&quot;text-lg font-semibold&quot;>Opening the Zion app…</div>
        <div className=&quot;mt-2 text-sm opacity-70&quot;>If nothing happens, you’ll be redirected to the store.</div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
>>>>>>> origin/resolved-merge-conflicts
  )
}
const DEEP_LINK_URL  = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {useEffect(() => {const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open';export default function OpenApp() {useEffect(() => {useEffect(() => {const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)const isAndroid = /Android/i.test(navigator.userAgent)const now = Date.now()const timeout = setTimeout(() => {const elapsed = Date.now() - now;
      if (elapsed < 2000) {window.location.href = isIOS ? IOS_APP_URL : ANDROID_APP_URL;}
    }, 1200)// Try to open the deep link;
    const iframe = document.createElement('iframe')iframe.style.display = 'none';
    iframe.src = DEEP_LINK_URL;
    document.body.appendChild(iframe)const timer = setTimeout(() => {try {document.body.remove_child (iframe)} catch {}    }, 1500)try { document.body.remove_child (iframe) } catch {}try {document.body.removeChild(iframe)} catch {}, 1500)}, 1500)return () => {clearTimeout(timeout)clearTimeout(timer)try {document && document.body.removeChild(iframe)try {document.body.removeChild(iframe)} catch {}
      try { document.body.removeChild(iframe) } catch {}
    }
  }, [])return (<div className='min-h-[50vh] flex items-center justify-center'>;
    <div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
  )}, [])<div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>;
          If nothing happens, you’ll be redirected to the store.;
        </div>;
      </div>;
    </div>;
  )return (<div className='min-h-[50vh] flex items-center justify-center'>;
      <div className='text-center'>;
        <div className='text-lg font-semibold'>Opening the Zion app…</div>;
        <div className='mt-2 text-sm opacity-70'>If nothing happens, you’ll be redirected to the store.</div>;
      </div>;
    </div>;
  );  }, []);

<<<<<<< HEAD
  )}
=======
<<<<<<< HEAD
  )}
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
