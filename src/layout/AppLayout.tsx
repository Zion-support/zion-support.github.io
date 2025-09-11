<<<<<<< HEAD



=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5



interface AppLayoutProps {
	children?: React.ReactNode
	hideFooter?: boolean
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
			{!hideFooter && <Footer />}
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
		</div>;
	);
}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
