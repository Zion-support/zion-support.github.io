

import React, { useEffect } from 'react','
import EnhancedNavigation from './EnhancedNavigation','
import EnhancedFooter from './EnhancedFooter','
import i18n, { isRtl } from '../../utils/i18n';'
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';'

export type EnhancedLayoutProps = any;

export default function EnhancedLayout() {
  }
  useEffect(() => {
;

}

const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');'
document.documentElement.setAttribute('lang', lng);'
  }, []);

return (;
    <div className='min-h-screen flex flex-col'>'
      <header>
=======
=======
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {};
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;'
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');'
    document.documentElement.setAttribute('lang', lng);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }, []);
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

"
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
}
}
  );
}
  );
}"
    <div className="min - h-screen flex flex - col">;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;'
      <main id='main' className='flex - 1 container mx - auto px - 4 py - 6'>;
        {children}"
      </main>      <main id="main" className="flex - 1 container mx - auto px - 4 py - 6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>);
}
}
  );
}


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className='min-h-screen flex flex-col' />
      <header />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
<main id='main' className='flex-1 container mx-auto px-4 py-6'>'
        {children}
      </main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}