<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';



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
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
		</div>
	)
}
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
		</div>
	)
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react";

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
<<<<<<< HEAD
origin/chore/build-fixes-and-slim-app
		</div>;
	);
}'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


		</div>;
	);
}'"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
