<<<<<<< HEAD
<<<<<<< HEAD
  const currentPath = router.pathname
export default ApiDocsLayout
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search } from 'lucide-react'import Link from 'next/link'
import { Search } from 'lucide-react'
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput"
import { cn } from "@/lib/utils"
import {
 getDocsSearchPath
 docsSearchSuggestions
} from "@/data/docsSearchData"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath;
 docsSearchSuggestions
} from "@/data/docsSearchData";

import { SearchSuggestion } from "@/types/search",
import React, { useState } from "react",
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Search } from 'lucide-react'
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { cn } from "@/lib/utils",
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData"
} from "@/data/docsSearchData",

interface ApiDocsLayoutProps {
  children: React.ReactNode
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData"
  children: React.ReactNode
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),
  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),

  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/docs/sample-code" }
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

import {
 getDocsSearchPath,
 docsSearchSuggestions

=======
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/data/docsSearchData",


interface ApiDocsLayoutProps {
  children: React.ReactNode;
}
<<<<<<< HEAD
=======
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },

  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),



  const navigationItems = [

<<<<<<< HEAD
<<<<<<< HEAD
    { title: "API Reference", path: "/developers/docs/reference" },
  const navigationItems = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath(suggestion.text),
    if (path) {
      router.push(path),
      setSearchValue("")
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
<<<<<<< HEAD
<<<<<<< HEAD
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;
 docsSearchSuggestions;
} from "@/data/docsSearchData",;
interface ApiDocsLayoutProps {;
  children: React.ReactNode;
}
;
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const router = useRouter(),;
  const currentPath = router.pathname,;
  const [searchValue, setSearchValue] = useState(""),;
  const navigationItems = [;
   { title: "Getting Started", path: "/developers/docs/getting-started" },;
    { title: "API Reference", path: "/developers/docs/reference" },;
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }];
=======
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const path = getDocsSearchPath(suggestion.text),;
    if (path) {;
      router.push(path),;
      setSearchValue("");
    }
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    const path = getDocsSearchPath(searchValue),;
    if (path) {;
      router.push(path),;
      setSearchValue("");
    }
  },;
  return (;
    <div className="flex min-h-screen bg-zinc-950">;
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
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
         value = {searchValue,}
         onChange = {setSearchValue,}
         onSelectSuggestion = {handleSelectSuggestion,}
         searchSuggestions = {docsSearchSuggestions,}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}


         placeholder="Search documentation"

        />;
       </form>;
      </div>;

      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">;
       {navigationItems && navigationItems.map((item,) => (;

<<<<<<< HEAD
         key={item && item.path}
         href={item && item.path}
         className={cn(
        <Link
         key={item.path}
         href={item.path}
         className={cn(
=======
        <Link
         key={item && item.path}
         href={item && item.path}
         className={cn(
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          "block px-3 py-2 rounded-md text-sm"
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover: text-white hover:bg-zinc-900"
<<<<<<< HEAD
         )}        >
          currentPath === item && item.path

           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover: text-white hover:bg-zinc-900"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
         )}>;
         {item && item.title}
        </Link>;

          "block px-3 py-2 rounded-md text-sm",
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
         )}
        >;

         {item.title}
        </Link>
       ))}

      </nav>;
     </div>;


     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
      {children}
<<<<<<< HEAD
<<<<<<< HEAD
          "block px-3 py-2 rounded-md text-sm",
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
         )}
        >;
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
  )
=======

     </div>;
    </div>;
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
     </div>
    </div>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
/* Sidebar */ "
}<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto"> <Link href="/developers/docs"className="flex items-center mb-8"> <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center"> <span className="text-white font-bold">Z</span> </div> <span className="font-bold text-white">API Docs</span> </Link> <div className="mb-6"> /> </form> </div>)
}> {
  item.title
}</Link>) )
}</nav> </div> {
  /* Main content */ "
}<div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12"> {
  children
}</div> </div>)
}export default ApiDocsLayout
"export default ApiDocsLayout


};
/* Sidebar */ ";
}<div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto"> <Link href="/developers/docs"className="flex items-center mb-8"> <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center"> <span className="text-white font-bold">Z</span> </div> <span className="font-bold text-white">API Docs</span> </Link> <div className="mb-6"> /> </form> </div>) ;
}> {;
  item && item.title ;
}</Link>) ) ;
}</nav> </div> {;
  /* Main content */ ";
}<div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12"> {;
  children ;
}</div> </div>) ;
}export default ApiDocsLayout;
"export default ApiDocsLayout;

export /**
 * ApiDocsLayout - Function description
 */
function ApiDocsLayout() {
  const router = use_router ();
  const current_path = router.pathname;
  const [search_value, setSearchValue] = useState ("");
  const navigation_items = [;
  { title: "Getting Started", path: "/developers / docs / getting - started" },
    { title: "API Reference", path: "/developers / docs / reference" },
    { title: "Webhooks", path: "/developers / docs / webhooks" },
    { title: "Sample Code", path: "/docs / sample - code" },
    { title: "Error Codes & Rate Limits", path: "/developers / docs / errors" }],
  const handleSelectSuggestion = (suggestion: SearchSuggestion) =>: any {
    const path = getDocsSearchPath (suggestion.text);    // Check condition
if ( {) {
  $2
}
      router.push (path);
      setSearchValue ("");
    }
  }
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    const path = getDocsSearchPath (search_value);    // Check condition
if ( {) {
  $2
}
      router.push (path);
      setSearchValue ("");
    }
  }
  return (
    <div className="flex min - h-screen bg - zinc - 950">;
    {/* Sidebar */}
      <div className="hidden md: block w - 64 border - r border - zinc - 800 p - 6 sticky top - 0 h - screen overflow - y-auto">;
      <Link href="/developers / docs" className="flex items - center mb - 8">;
      <div className="bg - gradient - to - r from - zion - purple to - zion - cyan rounded - md w - 8 h - 8 mr - 3 flex items - center justify - center">;
        <span className="text - white font - bold">Z</span>;
      </div>;
      <span className="font - bold text - white">API Docs</span>;
      </Link>;
      <div className="mb - 6">;
      <form on_submit={handle_submit} className="relative">;
        <Search className="absolute left - 2 top - 2.5 h - 4 w - 4 text - zinc - 500" />;
        <EnhancedSearchInput;
        value = {search_value, }
          on_change = {setSearchValue, }
          onSelectSuggestion = {handleSelectSuggestion, }
          search_suggestions = {docsSearchSuggestions, }
          placeholder="Search documentation";
        />;
      </form>;
      </div>;
      <nav role="navigation" aria - label="Main" className="flex flex - col space - y-1">;
      {navigation_items.map ((item, ) => (
        <Link;
        key={item.path}
          href={item.path}
          className={cn (
          "block px - 3 py - 2 rounded - md text - sm";
          current_path === item.path;
          ? "bg - zion - purple / 20 text - zion - cyan";
          : "text - zinc - 400 hover: text - white hover:bg - zinc - 900")}        >;
        {item.title}
        </Link>))}
      </nav>;
    </div>;
    {/* Main content */}
      <div className="flex - grow max - w-5xl mx - auto px - 4 py - 8 md:px - 8 md:py - 12">;
      {children}
      </div>;
    </div>);
}
}
/* Sidebar */ ";
}<div className="hidden md:block w - 64 border - r border - zinc - 800 p - 6 sticky top - 0 h - screen overflow - y-auto"> <Link href="/developers / docs"className="flex items - center mb - 8"> <div className="bg - gradient - to - r from - zion - purple to - zion - cyan rounded - md w - 8 h - 8 mr - 3 flex items - center justify - center"> <span className="text - white font - bold">Z</span> </div> <span className="font - bold text - white">API Docs</span> </Link> <div className="mb - 6"> /> </form> </div>);
}> {
  item.title;
}</Link>) );
}</nav> </div> {
  /* Main content */ ";
}<div className="flex - grow max - w-5xl mx - auto px - 4 py - 8 md:px - 8 md:py - 12"> {
  children;
}</div> </div>);
}export default ApiDocsLayout;
"export default ApiDocsLayout;

  children 
}</div> </div>) 
}export default ApiDocsLayout;
"export default ApiDocsLayout;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
     </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
export default ApiDocsLayout;
=======
export default ApiDocsLayout;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
