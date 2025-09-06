

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
import { cn } from "@/lib/utils",
interface ApiDocsLayoutProps {
  children: React.ReactNode
}
interface ApiDocsLayoutProps {
  children: React.ReactNode
}



export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation(),
  const currentPath = location.pathname,

  

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
=======
import { cn } from "@/lib/utils",export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  const location = useLocation();
  const currentPath = location.pathname;
  const location = useLocation(),
  const currentPath = location.pathname,
  
<<<<<<< HEAD
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]
  return (
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}

                <Link
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
            <span className="text-white font-bold">Z</span>;
          </div>;
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
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
  return (
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
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
      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {children}
      </div>;
    </div>;
  );
}

<<<<<<< HEAD
;


export default ApiDocsLayout;

;
export default ApiDocsLayout;


=======
export default ApiDocsLayout;;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default ApiDocsLayout;
