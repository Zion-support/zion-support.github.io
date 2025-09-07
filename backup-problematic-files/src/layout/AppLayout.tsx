<<<<<<< HEAD
<<<<<<< HEAD


=======
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';

<<<<<<<< HEAD:src/layout/AppLayout.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

========
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:backup-problematic-files/src/layout/AppLayout.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react;
import { Outlet } from 'react-router-dom;
import { Footer } from '@/components/Footer';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface AppLayoutProps {
  // TODO: Implement
}
	children?: React.ReactNode;
	hideFooter?: boolean;

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (
<<<<<<< HEAD
		<div className="flex flex-col min-h-screen bg-background">
			<main className="flex-grow">
<<<<<<< HEAD

				{children ?? <Outlet />}
			</main>
			{!hideFooter && <Footer />}

		</div>
	)
}

=======
=======
		<div className="flex flex-col min-h-screen bg-background">"
</div>"
			<main className="flex-grow">"
</main>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
				{children ?? <Outlet />}

			{!hideFooter && <Footer />}
<<<<<<< HEAD
		</div>
	)
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react";
interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main id="main-content" className="flex-grow">
        {children}
      </main>
    </div>
  );
}
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/layout/AppLayout.tsx


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
========
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:backup-problematic-files/src/layout/AppLayout.tsx
		</div>;
	);
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    <div className="flex flex-col min-h-screen">"
      <main id="main-content" className="flex-grow">"
    </div>
		</div>;)"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
