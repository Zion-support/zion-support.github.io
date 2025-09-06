<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import React, { ReactNode } from 'react';

<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';


>>>>>>> origin/automation-improvements-final
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
=======
import Header from '../Header';
import Footer from '../Footer';

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Header from '../Header';
import Footer from '../Footer';






;
import React from 'react';
<<<<<<< HEAD
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





import React from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface LayoutProps {
  children: React.ReactNode;
=======
interface LayoutProps {;
  children: React && React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  title?: string;
  description?: string;
  keywords?: string;

=======
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
<<<<<<< HEAD

}


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
}

ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  title?: string;
  description?: string;
  keywords?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function Layout({

  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical
  ogTitle
  ogDescription
  ogImage
  noIndex = false

}: LayoutProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
const Layout: React.FC<LayoutProps> = ({ children }) => {

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

=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const Layout: React.FC<LayoutProps> = ({ children }) => {

const Layout: React.FC<LayoutProps> = ({ children }) => {



const Layout: React.FC<LayoutProps> = ({ children }) => {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="min-h-screen bg-white">;
=======
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min - h-screen bg - white">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      <Header />;
      <main>;
<<<<<<< HEAD
        {children}
<<<<<<< HEAD
      </main>;
      <Footer />;

    </div>);
}
;

=======
    </div>);
      </main>
      <Footer />
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;


<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
type LayoutProps = {children: React && React.ReactNode;
};
  children: React && React.ReactNode}

export: default function Layout() {;

  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer,;
export default function Layout(): any ({ children }: LayoutProps) {;
=======
    <div className="min-h-screen bg-white">;
export default /**
 * Layout - Function description
 */
function Layout() {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="min - h-screen bg - white">;
      <Header />;
      <main>;
        {children}
      </main>;
      <Footer />;
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
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
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
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
export default function Layout({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: LayoutProps) {
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
