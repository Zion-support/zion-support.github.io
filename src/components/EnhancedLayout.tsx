<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react.ts';
import { ReactNode   } from 'react.ts';
import { FuturisticNavigation   } from './FuturisticNavigation';
import { FuturisticFooter   } from './FuturisticFooter';
import { EnhancedSidebar   } from './EnhancedSidebar';
import { FuturisticAnimatedBackground   } from './FuturisticAnimatedBackground';

interface EnhancedLayoutProps extends React.PropsWithChildren<{}> {
=======
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
import React from 'react.ts';
import { ReactNode  } from 'react.ts';
import { FuturisticNavigation  } from './FuturisticNavigation';
import { FuturisticFooter  } from './FuturisticFooter';
import { EnhancedSidebar  } from './EnhancedSidebar';
import { FuturisticAnimatedBackground  } from './FuturisticAnimatedBackground';
<<<<<<< HEAD
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
=======

interface EnhancedLayoutProps extends React.PropsWithChildren<{}> {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

  children: ReactNode;
<<<<<<< HEAD
  showSidebar?: boolean;
<<<<<<< HEAD
=======
  showSidebar?: boolean}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======

}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  showSidebar = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
      {/* Futuristic Animated Background */}
      <FuturisticAnimatedBackground />

      {/* Navigation */}
      <FuturisticNavigation />

      {/* Main Content with Sidebar */}
      <div className="flex relative z-10">
        {/* Sidebar */}
        {showSidebar && <EnhancedSidebar />}

        {/* Main Content */}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-80' : ''}`}>
          {children}
        </main>
<<<<<<< HEAD
      </div>

      {/* Footer */}
      <FuturisticFooter />;
    </div>;
  )};
=======
      </div>;
      ;
      {/* Footer */};
      <FuturisticFooter />;
    </div>;
  );
<<<<<<< HEAD
};}
=======
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
