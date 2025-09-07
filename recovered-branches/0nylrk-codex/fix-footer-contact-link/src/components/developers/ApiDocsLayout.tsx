<<<<<<< HEAD
import React from "react","
import { Link, useLocation } from "react-router-dom","
import { Search } from "lucide-react","
import { Input } from "@/components/ui/input";"
import { cn } from "@/lib/utils";"
import { Input } from "@/components/ui/input","
import { cn } from "@/lib/utils",export function ApiDocsLayout() {"
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
import { Input } from "@/components/ui/input",

import { cn } from "@/lib/utils",
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

<<<<<<< HEAD
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
  const currentPath = location.pathname;
=======
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
>>>>>>> origin/resolved-merge-conflicts
  const location = useLocation();
  const currentPath = location.pathname;
const location = useLocation(),;
const currentPath = location.pathname,;
import React from "react";"
import { Link, useLocation } from "react-router-dom";"
import { Search } from "lucide-react",;"
import { Input } from "@/components/ui/input",;"
import { cn } from "@/lib/utils",;"
interface ApiDocsLayoutProps {;
  }
  "children": React.ReactNode;
}
;
export function ApiDocsLayout() {;
  }
  const location = useLocation(),;
  const currentPath = location.pathname,;
  const navigationItems = [;
    { "title": "Getting Started", "path": "/developers/docs/getting-started" },;"
    { "title": "API Reference", "path": "/developers/docs/reference" },;"
    { "title": "Webhooks", "path": "/developers/docs/webhooks" },;"
    { "title": "Sample Code", "path": "/developers/docs/samples" },;"
    { "title": "Error Codes & Rate Limits", "path": "/developers/docs/errors" }],;"
  return (;
    <div className="flex min-h-screen bg-zinc-950">;"
      {/* Sidebar */}
      <div className="hidden "md":block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;"
        <Link to="/developers/docs" className="flex items-center mb-8">;"
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;"
            <span className="text-white font-bold">Z</span>;"
          </div>;
          <span className="font-bold text-white">API Docs</span>;"
        </Link>;
        {children}
      </div>;
    </div>;
  );
}

export default ApiDocsLayout;
export default ApiDocsLayout;
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const location = useLocation($2);
  const currentPath = $2;
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/developers/docs/samples" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],

  return (
<<<<<<< HEAD
    <div className = $2;
                    currentPath = $2;
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input",

import { cn } from "@/lib/utils",
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
<<<<<<< HEAD
  const currentPath = location.pathname;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
const location = useLocation(),;
const currentPath = location.pathname,;
import React from "react";"
import { Link, useLocation } from "react-router-dom";"
import { Search } from "lucide-react",;"
import { Input } from "@/components/ui/input",;"
import { cn } from "@/lib/utils",;"
=======
  const currentPath = location && location.pathname;

  const navigationItems = [;
    { title: "Getting Started", path: "/developers/docs/getting-started" },;
    { title: "API Reference", path: "/developers/docs/reference" },;
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/developers/docs/samples" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
<<<<<<< HEAD

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApiDocsLayoutProps {;
  }
  "children": React.ReactNode;
}
;
export function ApiDocsLayout() {;
  }
  const navigationItems = [;
    { "title": "Getting Started", "path": "/developers/docs/getting-started" },;"
    { "title": "API Reference", "path": "/developers/docs/reference" },;"
    { "title": "Webhooks", "path": "/developers/docs/webhooks" },;"
    { "title": "Sample Code", "path": "/developers/docs/samples" },;"
    { "title": "Error Codes & Rate Limits", "path": "/developers/docs/errors" }],;"
  return (;
    <div className="flex min-h-screen bg-zinc-950">;"
=======
  const location = useLocation(),
  const currentPath = location.pathname,

  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }

    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]

  return ("
    <div className="flex min-h-screen bg-zinc-950">;
>>>>>>> origin/chore/fix-lint-and-merge
      {/* Sidebar */}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Link;
                  to={item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <span className="text-white font-bold">Z</span>;
          </div>;"
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </ul>;
        </nav>;
      </div>;
;
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />;
            <Input ;
              placeholder="Search documentation" ;
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />;
            <Input;
              placeholder="Search documentation";
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple";
            />;
          </div>;
        </div>;
        <nav>;
          <ul className="space-y-1">;
            {navigationItems.map((item) => (;
              <li key={item.path}>;
                <Link;
                  to={item.path}
                  className={cn(;
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
        <div className="mb-6">;"
          <div className="relative">;"
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
            <Input"
              placeholder="Search documentation" "

              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />;
          </div>;
        </div>;

                  to={item && item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm"
                    currentPath === item && item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""

                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}>;
                  {item && item.title}
                </Link>;
              </li>;
            ))}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          </ul>;
        </nav>;
      </div>;


      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {children}
      </div>;
    </div>;
  );

}
<<<<<<< HEAD

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
=======
<<<<<<< HEAD
;
export default ApiDocsLayout;
=======
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
=======
;


export default ApiDocsLayout;

=======
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
<<<<<<< HEAD
    <div className = $2;
                    currentPath = $2;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
