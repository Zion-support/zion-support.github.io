=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
				{children ?? <Outlet />}
			</main>
			{!hideFooter && <Footer />}
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
		</div>
	)
}
=======
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
>>>>>>> origin/chore/build-fixes-and-slim-app
=======
		</div>;
	);
}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
