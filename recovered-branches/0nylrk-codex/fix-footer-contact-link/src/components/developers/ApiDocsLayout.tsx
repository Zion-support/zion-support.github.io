
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils",
interface ApiDocsLayoutProps {
  children: React.ReactNode
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApiDocsLayoutProps {
  children: React.ReactNode
}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;
=======


export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation(),
  const currentPath = location.pathname,

  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }
<<<<<<< HEAD
=======

  const navigationItems = ["
    { title: "Getting Started", path: "/developers/docs/getting-started" }"
    { title: "API Reference", path: "/developers/docs/reference" }"
    { title: "Webhooks", path: "/developers/docs/webhooks" }"
    { title: "Sample Code", path: "/developers/docs/samples" }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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


<<<<<<< HEAD
<<<<<<< HEAD
export default ApiDocsLayout;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======

"
import React from "react",;"
import { Link, useLocation } from "react-router-dom",;"
import { Search } from "lucide-react",;"
import { Input } from "@/components/ui/input",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
=======



"
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;"
        <Link to="/developers/docs" className="flex items-center mb-8">;"
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span className="text-white font-bold">Z</span>;
          </div>;"
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

<<<<<<< HEAD
        <nav>;"
          <ul className="space-y-1">;
            {navigationItems && navigationItems.map((item) => (;
              <li key={item && item.path}>;
  return ("
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Link
=======
                <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  to={item && item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm"
                    currentPath === item && item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}>;
                  {item && item.title}
                </Link>;
              </li>;
            ))}
<<<<<<< HEAD
      {/* Main content */}"
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
}
<<<<<<< HEAD
=======


;
export default ApiDocsLayout;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;


export default ApiDocsLayout;

;
export default ApiDocsLayout;


export default ApiDocsLayout;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
;
export default ApiDocsLayout;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


export default ApiDocsLayout;
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
