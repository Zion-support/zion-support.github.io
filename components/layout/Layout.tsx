<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621


<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
;

import React, { ReactNode } from 'react';
import React from 'react';
import React from 'react';
import React, { ReactNode } from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';



=======
import React from 'react';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
<<<<<<< HEAD
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> origin/resolved-merge-conflicts

interface LayoutProps {
<<<<<<< HEAD
  children: ReactNode;
  title?: string;
  description?: string;
=======
<<<<<<< HEAD
	children: ReactNode;
	title?: string;
	description?: string;
	keywords?: string;
}

export default function Layout({
	children,
	title = 'Zion Tech Group',
	description = 'Leading technology solutions provider',
}: LayoutProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen bg-gray-50">
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</>
	);
}
=======
  children: React.ReactNode,
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  canonical?: string;
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Header from '../Header';
import Footer from '../Footer';


>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
<<<<<<< HEAD
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  title?: string;
  description?: string;
  keywords?: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> origin/resolved-merge-conflicts
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group', 
  description = 'Building practical AI and modern web solutions.' 
}) => {
  return (
<<<<<<< HEAD
    <>
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
>>>>>>> origin/resolved-merge-conflicts
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export: default /**
 * Layout - Function description
 */
function Layout() {
;
  return: <div>{children}</div>;
React from";
  "react""import Footer from './react';
  "./Footer"import Footer  from "react./Footer,
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
<div className="min - h-screen flex flex - col>      <Header />"      <main className="flex - 1 pt - 16>        {children}"      </main><Footer />;
    </div>)"; type: LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div> } " ;
}}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min-h-screen bg-gray-50">
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
    <div className="min-h-screen bg-gray-50">
      {children}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
    </div>
  );
<<<<<<< HEAD
}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
