


import React from "react",""
import { Link, useLocation } from "react-router-dom",""
import { Search } from "lucide-react",""
import { Input } from "@/components/ui/input";""
import { cn } from "@/lib/utils";""
import { Input } from "@/components/ui/input",""
import { cn } from "@/lib/utils","
interface ApiDocsLayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
}
interface ApiDocsLayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
}



export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation(),
  const currentPath = location.pathname,

  

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
  const currentPath = location.pathname;
  const location = useLocation(),
  const currentPath = location.pathname,
  
  const navigationItems = ["
    { title: "Getting Started", path: "/developers/docs/getting-started" }""
    { title: "API Reference", path: "/developers/docs/reference" }""
    { title: "Webhooks", path: "/developers/docs/webhooks" }""
    { title: "Sample Code", path: "/developers/docs/samples" }"]"
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]"
  return ("
    <div className="flex min-h-screen bg-zinc-950">;"
</div>
                <Link;
                  to={item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm","
                    currentPath === item.path;"
                      ? "bg-zion-purple/20 text-zion-cyan"""
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"""
import React from "react",;""
import { Link, useLocation } from "react-router-dom",;""
import { Search } from "lucide-react",;""
import { Input } from "@/components/ui/input",;""
import { cn } from "@/lib/utils",;"
interface ApiDocsLayoutProps {;
  children: React.ReactNode;
}
;)
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation(),;
  const currentPath = location.pathname,;
  const navigationItems = [;"
    { title: "Getting Started", path: "/developers/docs/getting-started" },;""
    { title: "API Reference", path: "/developers/docs/reference" },;""
    { title: "Webhooks", path: "/developers/docs/webhooks" },;""
    { title: "Sample Code", path: "/developers/docs/samples" },;"]"
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;"
  return (;"
    <div className="flex min-h-screen bg-zinc-950">;"
</Link>"
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;"
</div>"
        <Link to="/developers/docs" className="flex items-center mb-8">;"
</Link>"
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;"
</div>"
            <span className="text-white font-bold">Z</span>;"
          </div>;"
          <span className="font-bold text-white">API Docs</span>;"
        </Link>;"
        <div className="mb-6">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;"
</Search>
            <Input;"
              placeholder="Search documentation"""
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple""
            />;
</Input>
          </div>;
        </div>;
        <nav>;
</nav>"
          <ul className="space-y-1">;"
</ul>
              <li key={item && item.path}>;
</li>"
    <div className="flex min-h-screen bg-zinc-950">;"
</div>
                <Link;
                  to={item && item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm""
                    currentPath === item && item.path;"
                      ? "bg-zion-purple/20 text-zion-cyan"""
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"")
                  )}>;
</Link>
                </Link>;
              </li>;"
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;"
</div>
      </div>;
    </div>;"