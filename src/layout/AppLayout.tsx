ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';


<<<<<<< HEAD
=======

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
ursor/integrate-build-improve-and-re-verify-8f7d
		</div>
	)
}
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


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
		</div>;
	);
}'"
