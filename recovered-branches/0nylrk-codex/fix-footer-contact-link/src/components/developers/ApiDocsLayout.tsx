<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;
=======
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
=======
import { cn } from "@/lib/utils",export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { cn } from "@/lib/utils",export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
import React from "react","
import { Link, useLocation } from "react-router-dom","
import { Search } from "lucide-react",";
import { Input } from "@/components/ui/input";"
import { cn } from "@/lib/utils";"
import { Input } from "@/components/ui/input","
import { cn } from "@/lib/utils",
interface ApiDocsLayoutProps {};
  children: React.ReactNode;
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const location = useLocation();
  const currentPath = location.pathname;
  const location = useLocation(),
  const currentPath = location.pathname,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }

    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]

  return ("
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}

                <Link;
                  to={item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"

export default ApiDocsLayout;
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
interface ApiDocsLayoutProps {;
  children: React.ReactNode;
}
;
export function ApiDocsLayout() { return null; }
    { title: "Getting Started", path: "/developers/docs/getting-started" },;"
    { title: "API Reference", path: "/developers/docs/reference" },;"
    { title: "Webhooks", path: "/developers/docs/webhooks" },;"
    { title: "Sample Code", path: "/developers/docs/samples" },;"
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  return (;"
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
            <span className="text-white font-bold">Z</span>;
          </div>;"
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

"
        <div className="mb-6">;"
          <div className="relative">;"
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
            <Input"
              placeholder="Search documentation" "
=======

        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
            <Input
              placeholder="Search documentation" 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />;
          </div>;
        </div>;

<nav>;"
          <ul className="space-y-1">;
            {navigationItems && navigationItems.map((item) => (;
              <li key={item && item.path}>;
  return ("
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Link
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
{/* Main content */}"
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {children}
      </div>;
    </div>;
  );
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
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}

interface ApiDocsLayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
}
interface ApiDocsLayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

export default ApiDocsLayout;
<<<<<<< HEAD

<<<<<<< HEAD
=======

export default ApiDocsLayout;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
