
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const location = useLocation(),
  const currentPath = location.pathname,
  
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/developers/docs/samples" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],
  return (
    <div className=&quot;flex min-h-screen bg-zinc-950&quot;>
      {/* Sidebar */}
      <div className=&quot;hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto&quot;>
        <Link to=&quot;/developers/docs&quot; className=&quot;flex items-center mb-8&quot;>
          <div className=&quot;bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center&quot;>
            <span className=&quot;text-white font-bold&quot;>Z</span>
import React from "react";

interface ApiDocsLayoutProps {_children: React.ReactNode;}

export function ApiDocsLayout(_{_children}: ApiDocsLayoutProps) {_const _location = useLocation();
  const _currentPath = location.pathname;
  
  const _navigationItems = [
    { title: "Getting Started", _path: "/developers/docs/getting-started"},
    {_title: "API Reference", _path: "/developers/docs/reference"},
    {_title: "Webhooks", _path: "/developers/docs/webhooks"},
    {_title: "Sample Code", _path: "/developers/docs/samples"},
    {_title: "Error Codes & Rate Limits", _path: "/developers/docs/errors"}];

  return (_<div className="flex min-h-screen bg-zinc-950">
      {_/* Sidebar */}
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
        <Link to="/developers/docs" className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
            <span className="text-white font-bold">Z</span>
          </div>
          <span className=&quot;font-bold text-white&quot;>API Docs</span>
        </Link>

        <div className=&quot;mb-6&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-2 top-2.5 h-4 w-4 text-zinc-500&quot; />
            <Input 
              placeholder=&quot;Search documentation&quot; 
              className=&quot;pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple&quot;
            />
          </div>
        </div>

        <nav>
          <ul className=&quot;space-y-1&quot;>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    &quot;block px-3 py-2 rounded-md text-sm&quot;,
                    currentPath === item.path
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900&quot;                  )}
                >
                  {_item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className=&quot;flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12&quot;>
        {children}      </div>
    </div>
  )
}

export default ApiDocsLayout,
