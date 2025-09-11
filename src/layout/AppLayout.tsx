import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
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
		</div>;
	);
}'"