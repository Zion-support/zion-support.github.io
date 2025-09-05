
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
      router.push(path);
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
       <form onSubmit={_handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
        <EnhancedSearchInput
         value={_searchValue}
         onChange={_setSearchValue}
         onSelectSuggestion={_handleSelectSuggestion}
         searchSuggestions={_docsSearchSuggestions}
         placeholder="Search documentation"
        />
       </form>
      </div>

      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">
       {_navigationItems.map((item) => (
        <Link
         key={item.path}
         href={_item.path}
         className={_cn(
          "block px-3 py-2 rounded-md text-sm", _currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
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
  );
}

export default ApiDocsLayout;
