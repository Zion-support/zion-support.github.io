
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

interface ApiDocsLayoutProps {
  children: React.ReactNode;
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [searchValue, setSearchValue] = useState("&quot;);

  const navigationItems = [
   { title: &quot;Getting Started&quot;, path: &quot;/developers/docs/getting-started&quot; },
    { title: &quot;API Reference&quot;, path: &quot;/developers/docs/reference&quot; },
    { title: &quot;Webhooks&quot;, path: &quot;/developers/docs/webhooks&quot; },
    { title: &quot;Sample Code&quot;, path: &quot;/docs/sample-code&quot; },
    { title: &quot;Error Codes & Rate Limits&quot;, path: &quot;/developers/docs/errors&quot; }];

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath(suggestion.text);
    if (path) {
      router.push(path);
      setSearchValue("&quot;);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = getDocsSearchPath(searchValue);
    if (path) {
      router.push(path);
      setSearchValue("");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950">
     {/* Sidebar */}
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
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
         placeholder=&quot;Search documentation&quot;
        />
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
           : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900"
         )}
        >
         {item.title}
        </Link>
       ))}
      </nav>
     </div>

     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
      {children}
     </div>
    </div>
  );
}

export default ApiDocsLayout;
