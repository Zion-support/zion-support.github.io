<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react'';
import { Outlet } from 'react-router-dom'';
import { Footer } from '@/components/Footer';
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
ursor/integrate-build-improve-and-re-verify-8f7d
		</div>
	)
}
=======
			{!hideFooter && <Footer />}


		</div>
	)
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
		</div>;
	);
}'"
origin/chore/build-fixes-and-slim-app
		</div>;
	);
}'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


		</div>;
	);
}'"
=======


		</div>;
	);
}'"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
