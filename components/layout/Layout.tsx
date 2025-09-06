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
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
=======
import React from 'react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { ReactNode } from 'react';

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Header from '../Header';
import Footer from '../Footer';

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

>>>>>>> origin/automation-improvements-final
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> origin/main

>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
interface LayoutProps {
  children: React.ReactNode;
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface LayoutProps {;
  children: React && React.ReactNode;
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

;
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
<<<<<<< HEAD
=======
>>>>>>> origin/main
}
<<<<<<< HEAD
<<<<<<< HEAD

  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}

export default function Layout({

  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical
  ogTitle
  ogDescription
  ogImage
=======

export default function Layout({
  children,
<<<<<<< HEAD
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS",
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
=======
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  noIndex = false

}: LayoutProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
const Layout: React.FC<LayoutProps> = ({ children }) => {

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default function Layout(): any ({;
  children,;
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",;
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",;
  canonical,;
  ogTitle,;
  ogDescription,;
  ogImage,;
  noIndex = false;
}: LayoutProps) {;
<<<<<<< HEAD
=======

=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className="min-h-screen bg-white">;
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min - h-screen bg - white">;
      <Header />;
      <main>;
        {children}
      </main>;
      <Footer />;
    </div>;
  );
}
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
type LayoutProps = {children: React.ReactNode;
}
  children: React.ReactNode}
export: default function Layout() {return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
=======
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
=======
  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
type LayoutProps = {children: React && React.ReactNode;
};
  children: React && React.ReactNode}

export: default function Layout() {;

  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
  "./Footer"import Footer  from "react./Footer,;
export default function Layout(): any ({ children }: LayoutProps) {;
  return (

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

=======
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
    </div>
  );
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
