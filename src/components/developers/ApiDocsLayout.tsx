
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { SearchSuggestion } from &quot;@/types/search&quot;;
import React, { useState } from &quot;react&quot;;
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from 'lucide-react'
import { EnhancedSearchInput } from &quot;@/components/search/EnhancedSearchInput&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from &quot;@/data/docsSearchData&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
<<<<<<< HEAD
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),

  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],
=======
  const router = useRouter();
  const currentPath = router.pathname;
  const [searchValue, setSearchValue] = useState("&quot;);

  const navigationItems = [
   { title: &quot;Getting Started&quot;, path: &quot;/developers/docs/getting-started&quot; },
    { title: &quot;API Reference&quot;, path: &quot;/developers/docs/reference&quot; },
    { title: &quot;Webhooks&quot;, path: &quot;/developers/docs/webhooks&quot; },
    { title: &quot;Sample Code&quot;, path: &quot;/docs/sample-code&quot; },
    { title: &quot;Error Codes & Rate Limits&quot;, path: &quot;/developers/docs/errors&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath(suggestion.text),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (path) {
<<<<<<< HEAD
      router.push(path),
      setSearchValue("")
=======
      router.push(path);
<<<<<<< HEAD
      setSearchValue("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    const path = getDocsSearchPath(searchValue),
    if (path) {
      router.push(path),
      setSearchValue("")
    }
  },
=======
      setSearchValue("");}
  };

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    const _path = getDocsSearchPath(searchValue);
    if (path) {
      router.push(path);
      setSearchValue("");}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
       <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500&quot; />
        <EnhancedSearchInput
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
         placeholder=&quot;Search documentation&quot;
=======
       <form onSubmit={_handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
        <EnhancedSearchInput
         value={_searchValue}
         onChange={_setSearchValue}
         onSelectSuggestion={_handleSelectSuggestion}
         searchSuggestions={_docsSearchSuggestions}
         placeholder="Search documentation"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
       </form>
      </div>

<<<<<<< HEAD
      <nav role=&quot;navigation&quot; aria-label=&quot;Main" className="flex flex-col space-y-1">
       {navigationItems.map((item) => (
        <Link
         key={item.path}
         href={item.path}
         className={cn(
          "block px-3 py-2 rounded-md text-sm&quot;,
          currentPath === item.path
           ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
           : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900"
=======
      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">
       {_navigationItems.map((item) => (
        <Link
         key={item.path}
         href={_item.path}
         className={_cn(
          "block px-3 py-2 rounded-md text-sm", _currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
         )}
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
}

export default ApiDocsLayout,
