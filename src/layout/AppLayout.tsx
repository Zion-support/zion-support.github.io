<<<<<<< HEAD:src/layout/AppLayout.tsx
<<<<<<< HEAD


import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
=======
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

interface AppLayoutProps {
	children?: React.ReactNode
	hideFooter?: boolean
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<main className="flex-grow">
				{children ?? <Outlet />}
			</main>
			{!hideFooter && <Footer />}
<<<<<<< HEAD

=======
<<<<<<< HEAD:backup-problematic-files/src/layout/AppLayout.tsx
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
interface AppLayoutProps {;
	children?: React.ReactNode;
	hideFooter?: boolean;
;
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {;
	return (;
		<div className="flex flex-col min-h-screen bg-background">";
			<main className="flex-grow">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

interface AppLayoutProps {
	children?: React.ReactNode
	hideFooter?: boolean
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<main className="flex-grow">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src/layout/AppLayout.tsx
				{children ?? <Outlet />}
			</main>
			{!hideFooter && <Footer />}
<<<<<<< HEAD:backup-problematic-files/src/layout/AppLayout.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/layout/AppLayout.tsx
		</div>
	)
}

=======
<<<<<<< HEAD:src/layout/AppLayout.tsx
ursor/integrate-build-improve-and-re-verify-8f7d
		</div>
	)
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src/layout/AppLayout.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/layout/AppLayout.tsx
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
<<<<<<< HEAD:src/layout/AppLayout.tsx
<<<<<<< HEAD

		</div>;
	);
}'"

=======
<<<<<<< HEAD:backup-problematic-files/src/layout/AppLayout.tsx
		</div>;
	);
}'"
=======
>>>>>>> origin/chore/build-fixes-and-slim-app
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/layout/AppLayout.tsx
=======
>>>>>>> origin/chore/build-fixes-and-slim-app
		</div>;
	);
}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD:src/layout/AppLayout.tsx
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src/layout/AppLayout.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/layout/AppLayout.tsx
