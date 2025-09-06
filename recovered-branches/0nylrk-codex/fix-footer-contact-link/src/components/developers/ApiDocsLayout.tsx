<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx


<<<<<<< HEAD
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
=======
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface ApiDocsLayoutProps {
  children: React.ReactNode
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

<<<<<<< HEAD
<<<<<<< HEAD
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

=======


export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation(),
  const currentPath = location.pathname,

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
<<<<<<< HEAD

  const location = useLocation();
  const currentPath = location.pathname;
=======
  const location = useLocation(),
  const currentPath = location.pathname,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx
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
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
interface ApiDocsLayoutProps {;
  children: React && React.ReactNode;
}
export function ApiDocsLayout(): any ({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location && location.pathname;
  const navigationItems = [;
    { title: "Getting Started", path: "/developers/docs/getting-started" },;
    { title: "API Reference", path: "/developers/docs/reference" },;
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/developers/docs/samples" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  return (
=======

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
;
interface ApiDocsLayoutProps {;
  children:React.ReactNode;
}
;
export function ApiDocsLayout({ children } ApiDocsLayoutProps) {;
  const location = useLocation(),;
  const currentPath = location.pathname,;
  ;
  const navigationItems = [;
    { title:"Getting Started", path:"/developers/docs/getting-started" },;
    { title:"API Reference", path:"/developers/docs/reference" },;
    { title:"Webhooks", path:"/developers/docs/webhooks" },;
    { title:"Sample Code", path:"/developers/docs/samples" },;
    { title:"Error Codes & Rate Limits", path:"/developers/docs/errors" }],;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx

=======
=======
  return (
    <div className="flex min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
        <Link to="/developers/docs" className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
            <span className="text-white font-bold">Z</span>
          </div>
          <span className="font-bold text-white">API Docs</span>
        </Link>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search documentation"
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />
          </div>
        </div>
        <nav>
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.path}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Link
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
<<<<<<< HEAD
<<<<<<< HEAD

export default ApiDocsLayout;

=======

=======
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {children}
      </div>
    </div>
  )
}
export default ApiDocsLayout;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
interface ApiDocsLayoutProps {;
  children: React.ReactNode;
}
;
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation(),;
  const currentPath = location.pathname,;
  const navigationItems = [;
    { title: "Getting Started", path: "/developers/docs/getting-started" },;
    { title: "API Reference", path: "/developers/docs/reference" },;
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/developers/docs/samples" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  return (;
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
            <span className="text-white font-bold">Z</span>;
          </div>;
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
            <Input
              placeholder="Search documentation" 
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />;
          </div>;
        </div>;
        <nav>;
          <ul className="space-y-1">;
            {navigationItems && navigationItems.map((item) => (;
              <li key={item && item.path}>;
                <Link
                  to={item && item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm"
                    currentPath === item && item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}>;
                  {item && item.title}
                </Link>;
              </li>;
            ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx

          </ul>;
        </nav>;
      </div>;


========
          </ul>;
        </nav>;
      </div>;
=======
;
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />;
            <Input ;
              placeholder="Search documentation" ;
=======
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />;
            <Input;
              placeholder="Search documentation";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple";
            />;
          </div>;
        </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <nav>;
          <ul className="space-y-1">;
            {navigationItems.map((item) => (;
              <li key={item.path}>;
                <Link;
                  to={item.path}
                  className={cn(;
<<<<<<< HEAD
                    "block px-3 py-2 rounded-md text-sm",;
                    currentPath === item.path;
                      ? "bg-zion-purple/20 text-zion-cyan";
                      :"text-zinc-400 hover:text-white hover:bg-zinc-900";
                  )}
                >;
                  {item.title}
                </Link>;
              </li>;            ))}
          </ul>;
        </nav>;
      </div>;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx
      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
        {children}
      </div>;
    </div>;
<<<<<<< HEAD
  );
}

;


export default ApiDocsLayout;
import React from './react';
import { Link, use_location } from './react-router-dom';
import { Search } from './lucide-react';
import { Input } from '@/components / ui / input';
import { cn } from '@/lib / utils';
interface ApiDocsLayoutProps {
  children: React.ReactNode;
}
export /**
 * ApiDocsLayout - Function description
 */
function ApiDocsLayout() {
  const location = use_location ();
  const current_path = location.pathname;
;
  const navigation_items = [;
    { title: "Getting Started", path: "/developers / docs / getting - started" },
    { title: "API Reference", path: "/developers / docs / reference" },
    { title: "Webhooks", path: "/developers / docs / webhooks" },
    { title: "Sample Code", path: "/developers / docs / samples" },
    { title: "Error Codes & Rate Limits", path: "/developers / docs / errors" }],
  return (
    <div className="flex min - h-screen bg - zinc - 950">;
      {/* Sidebar */}
      <div className="hidden md:block w - 64 border - r border - zinc - 800 p - 6 sticky top - 0 h - screen overflow - y-auto">;
        <Link to="/developers / docs" className="flex items - center mb - 8">;
          <div className="bg - gradient - to - r from - zion - purple to - zion - cyan rounded - md w - 8 h - 8 mr - 3 flex items - center justify - center">;
            <span className="text - white font - bold">Z</span>;
          </div>;
          <span className="font - bold text - white">API Docs</span>;
        </Link>;
        <div className="mb - 6">;
          <div className="relative">;
            <Search className="absolute left - 2 top - 2.5 h - 4 w - 4 text - zinc - 500" />;
            <Input;
              placeholder="Search documentation";
              className="pl - 8 bg - zinc - 900 border - zinc - 800 focus:border - zion - purple";
            />;
          </div>;
        </div>;
        <nav>;
          <ul className="space - y-1">;
            {navigation_items.map ((item) => (
              <li key={item.path}>;
                <Link;
                  to={item.path}
                  className={cn (
                    "block px - 3 py - 2 rounded - md text - sm";
                    current_path === item.path;
                      ? "bg - zion - purple / 20 text - zion - cyan";
                      : "text - zinc - 400 hover:text - white hover:bg - zinc - 900")}
                >;
                  {item.title}
                </Link>;
              </li>))}
          </ul>;
        </nav>;
      </div>;
      {/* Main content */}
      <div className="flex - grow max - w-5xl mx - auto px - 4 py - 8 md:px - 8 md:py - 12">;
        {children}
      </div>;
    </div>);
}
export default ApiDocsLayout;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
;
export default ApiDocsLayout,;
 interface ApiDocsLayoutProps {
  children: React.ReactNode 
}export function ApiDocsLayout ({
  children 
}: ApiDocsLayoutProps) {
  const location = useLocation ();
const currentPath = location.pathname;
const navigationItems = [ return (<div className="flex min-h-screen bg-zinc-950" > {
  /* Sidebar */ 
}<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto" > <Link to="/developers/docs" className="flex items-center mb-8" > <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center" > <span className="text-white font-bold" >Z</span> font-bold text-white">API Docs</span> </Link> <div className=" mb-6"> <div className=" relative"> <Search className=" absolute left-2 top-2.5 h-4 w-4 text-zinc-500"/> <Input placeholder=" Search documentation"className=" pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple" /> </div> </div> <nav>) 
}> {
  item.title 
}</Link> </li>) ) 
}</ul> </nav> </div> </div> </div>) 
}export default ApiDocsLayout;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/ApiDocsLayout.tsx
=======
                    "block px-3 py-2 rounded-md text-sm";
                    currentPath === item.path;
                      ? "bg-zion-purple/20 text-zion-cyan";
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900";
                  )}
                >
                  {item.title}
                </Link>;
              </li>;
            ))}
          </ul>;
        </nav>;
      </div>;
      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {children}
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ApiDocsLayout;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
