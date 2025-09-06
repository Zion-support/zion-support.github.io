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
import React from 'react';
  const currentPath = router && router.pathname;
export default ApiDocsLayout;

import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Search } from 'lucide-react'

  const current_path = router.pathname;
export default ApiDocsLayout;
import Link from 'next / link';
import { use_router } from 'next / router';
import { Search } from 'lucide-react'import Link from 'next / link';
import { Search } from 'lucide-react';
import { EnhancedSearchInput  } from '@/components / search / EnhancedSearchInput';
import { cn  } from '@/lib / utils';
import {
getDocsSearchPath;
docsSearchSuggestions;
} from '@/data / docsSearchData';


import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { cn } from "@/lib/utils",
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData"
} from "@/data/docsSearchData",

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
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
} from "@/data/docsSearchData";

interface ApiDocsLayoutProps {;
  children: React && React.ReactNode;
}

export function ApiDocsLayout(): any ({ children }: ApiDocsLayoutProps) {;
  const router = useRouter();
  const currentPath = router && router.pathname;
  const [searchValue, setSearchValue] = useState("");

  const navigationItems = [;
   { title: "Getting Started", path: "/developers/docs/getting-started" },;
    { title: "API Reference", path: "/developers/docs/reference" },;
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;
    const path = getDocsSearchPath(suggestion.text);    if (path) {
      router.push(path)
      setSearchValue("")
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const path = getDocsSearchPath(searchValue);    if (path) {
      router.push(path)
      setSearchValue("")
    }
  }
  return (
    <div className="flex min-h-screen bg-zinc-950">
     {/* Sidebar */}
     <div className="hidden md: block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
    const path = getDocsSearchPath(suggestion.text),;
    if (path) {;
      router.push(path),;
      setSearchValue("");
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const path = getDocsSearchPath(searchValue);    if (path) {
      router.push(path)
      setSearchValue("")
    }
  }
  return (
    <div className="flex min-h-screen bg-zinc-950">;
     {/* Sidebar */}
     <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
     <div className="hidden md: block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
      <Link href="/developers/docs" className="flex items-center mb-8">;
       <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
        <span className="text-white font-bold">Z</span>;
       </div>;
       <span className="font-bold text-white">API Docs</span>;
      </Link>;

      <div className="mb-6">;
       <form onSubmit={handleSubmit} className="relative">;
        <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
        <EnhancedSearchInput
         value = {searchValue,}
         onChange = {setSearchValue,}
         onSelectSuggestion = {handleSelectSuggestion,}
         searchSuggestions = {docsSearchSuggestions,}
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
export default ApiDocsLayout;
