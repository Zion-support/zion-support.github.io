
<<<<<<< HEAD
import { SearchSuggestion } from "@/types/search",;
import React, { useState } from "react",;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { Search } from 'lucide-react';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { cn } from "@/lib/utils",;
import {;
 getDocsSearchPath,;
 docsSearchSuggestions;
} from "@/data/docsSearchData",;
;
interface ApiDocsLayoutProps {;
  children:React.ReactNode;
}
;
export function ApiDocsLayout({ children } ApiDocsLayoutProps) {;
  const router = useRouter(),;
  const currentPath = router.pathname,;
  const [searchValue, setSearchValue] = useState(""),;
;
  const navigationItems = [;
   { title:"Getting Started", path:"/developers/docs/getting-started" },;
    { title:"API Reference", path:"/developers/docs/reference" },;
    { title:"Webhooks", path:"/developers/docs/webhooks" },;
    { title:"Sample Code", path:"/docs/sample-code" },;
    { title:"Error Codes & Rate Limits", path:"/developers/docs/errors" }],;
;
  const handleSelectSuggestion = (suggestion:SearchSuggestion) => {;
    const path = getDocsSearchPath(suggestion.text),;
    if (path) {;
      router.push(path),;
      setSearchValue("");
    }
  },;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    const path = getDocsSearchPath(searchValue),;
    if (path) {;
      router.push(path),;
      setSearchValue("");
    }
  },;
;
  return (;
    <div className="flex min-h-screen bg-zinc-950">;
     {/* Sidebar */}
     <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
      <Link href="/developers/docs" className="flex items-center mb-8">;
       <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
        <span className="text-white font-bold">Z</span>;
       </div>;
       <span className="font-bold text-white">API Docs</span>;
      </Link>;
;
      <div className="mb-6">;
       <form onSubmit={handleSubmit} className="relative">;
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />;
        <EnhancedSearchInput;
=======
import { SearchSuggestion } from "@/types/search",
import React, { useState } from "react",
import Link from 'next/link',
import { useRouter } from 'next/router',
import { Search } from 'lucide-react'
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { cn } from "@/lib/utils",
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData",
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),

  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath(suggestion.text),
import React, {_useState} from "react";
import Link from 'next/link';
import {_getDocsSearchPath, _docsSearchSuggestions} from "@/data/docsSearchData";

interface ApiDocsLayoutProps {_children: React.ReactNode;}

export function ApiDocsLayout(_{_children}: ApiDocsLayoutProps) {_const _router = useRouter();
  const _currentPath = router.pathname;
  const [searchValue, _setSearchValue] = useState("");

  const _navigationItems = [
   { title: "Getting Started", _path: "/developers/docs/getting-started"},
    {_title: "API Reference", _path: "/developers/docs/reference"},
    {_title: "Webhooks", _path: "/developers/docs/webhooks"},
    {_title: "Sample Code", _path: "/docs/sample-code"},
    {_title: "Error Codes & Rate Limits", _path: "/developers/docs/errors"}];

  const _handleSelectSuggestion = (_suggestion: SearchSuggestion) => {_const _path = getDocsSearchPath(suggestion.text);
    if (path) {
      router.push(path),
      setSearchValue("")    }
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    const path = getDocsSearchPath(searchValue),
    if (path) {
      router.push(path),
      setSearchValue("")
    }
  },
      setSearchValue("");}
  };

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    const _path = getDocsSearchPath(searchValue);
    if (path) {
      router.push(path);
      setSearchValue("");}
  };

  return (_<div className="flex min-h-screen bg-zinc-950">
     {_/* Sidebar */}
     <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
      <Link href="/developers/docs" className="flex items-center mb-8">
       <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
        <span className="text-white font-bold">Z</span>
       </div>
       <span className="font-bold text-white">API Docs</span>
      </Link>

      <div className="mb-6">
       <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500&quot; />
        <EnhancedSearchInput
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
<<<<<<< HEAD
         placeholder="Search documentation";
        />;
       </form>;
      </div>;
;
      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">;
       {navigationItems.map((item) => (;
        <Link;
         key={item.path}
         href={item.path}
         className={cn(;
          "block px-3 py-2 rounded-md text-sm",;
          currentPath === item.path;
           ? "bg-zion-purple/20 text-zion-cyan";
           :"text-zinc-400 hover:text-white hover:bg-zinc-900";
         )}
        >;
         {item.title}
        </Link>;
       ))}
      </nav>;
     </div>;
;
     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
      {children}
     </div>;
    </div>;
  ),;
=======
         placeholder=&quot;Search documentation&quot;        />
       </form>
      </div>

      <nav role=&quot;navigation&quot; aria-label=&quot;Main" className="flex flex-col space-y-1">
       {navigationItems.map((item) => (
        <Link
         key={item.path}
         href={item.path}
         className={cn(
          "block px-3 py-2 rounded-md text-sm&quot;,
          currentPath === item.path
           ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
           : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900"         )}
        >
         {_item.title}
        </Link>
       ))}
      </nav>
     </div>

     {_/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
      {_children}
     </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export default ApiDocsLayout,;
