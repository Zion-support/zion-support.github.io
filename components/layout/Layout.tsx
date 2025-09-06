<<<<<<< HEAD
<<<<<<< HEAD


import React from 'react';

=======


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
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
=======

import React, { ReactNode } from 'react';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Header from '../Header';
import Footer from '../Footer';
<<<<<<< HEAD


=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> origin/automation-improvements-final
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  title?: string;
  description?: string;
  keywords?: string;

<<<<<<< HEAD
=======
=======
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  canonical?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
<<<<<<< HEAD

}


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
const Layout: React.FC<LayoutProps> = ({ children }) => {

=======
const Layout: React.FC<LayoutProps> = ({ children }) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      </main>;
      <Footer />;
<<<<<<< HEAD

    </div>);
}
;

=======
    </div>);
=======
      </main>
      <Footer />
    </div>;
  );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
<<<<<<< HEAD
<<<<<<< HEAD
type LayoutProps = {children: React.ReactNode;
}
  children: React.ReactNode}
export: default function Layout() {return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
=======


  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
<<<<<<< HEAD

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
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
=======
  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
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
export default function Layout({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: LayoutProps) {
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
