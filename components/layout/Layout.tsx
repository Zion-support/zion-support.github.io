>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd

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

import React, { ReactNode } from 'react';=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
import React from 'react';
=======
import React from 'react';
import React, { ReactNode } from 'react';

>>>>>>> origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';


>>>>>>> origin/automation-improvements-final
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LayoutProps {
export default function Layout({ children }: LayoutProps) {
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
=======
=======
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;}


=======
const Layout: React.FC<LayoutProps> = ({ children }) => {



=======const Layout: React.FC<LayoutProps> = ({ children }) => {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    </div>);
}
;
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;


<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
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

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-screen bg-gray-50">
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <div className="sticky top-0 z-50">
          <div className="absolute left-4 top-5 lg:hidden">
            <button
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg bg-gray-900/80 border border-gray-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          <UltraFuturisticNavigation2040 />
        </div>
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
      </div>

      {/* Performance and Accessibility Enhancements */}
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      <CookieConsentBanner />
    </div>
  );
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
}
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
