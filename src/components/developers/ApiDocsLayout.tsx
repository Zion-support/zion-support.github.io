<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath;
 docsSearchSuggestions
} from "@/data/docsSearchData";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { SearchSuggestion } from "@/types/search",
import React, { useState } from "react",
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Search } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

import {
 getDocsSearchPath,
 docsSearchSuggestions

=======
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
=======
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { cn } from "@/lib/utils",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import {
 getDocsSearchPath,
 docsSearchSuggestions
<<<<<<< HEAD
} from "@/data/docsSearchData"
=======
} from "@/data/docsSearchData",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ApiDocsLayoutProps {
  children: React.ReactNode
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
<<<<<<< HEAD

  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),

=======
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData"
>>>>>>> interface ApiDocsLayoutProps {
  children: React.ReactNode
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),
>>>>>>> 
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662


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

} from "@/data/docsSearchData",


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
interface ApiDocsLayoutProps {
  children: React.ReactNode;
}

  const router = useRouter()
  const currentPath = router.pathname
  const [searchValue, setSearchValue] = useState("")
  const navigationItems = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },

  const router = useRouter(),
  const currentPath = router.pathname,
  const [searchValue, setSearchValue] = useState(""),



  const navigationItems = [

>>>>>>>    { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
=======
=======
=======
  const navigationItems = [
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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

    { title: "Webhooks", path: "/developers/docs/webhooks" },;
=======
>>>>>>>     { title: "Webhooks", path: "/developers/docs/webhooks" },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],;
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;
<<<<<<< HEAD

=======
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    { title: "Webhooks", path: "/developers/docs/webhooks" },;
    { title: "Sample Code", path: "/docs/sample-code" },;
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }];
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>>       <Link href="/developers/docs" className="flex items-center mb-8">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Link href="/developers/docs" className="flex items-center mb-8">
>>>>>>>        <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Link href="/developers/docs" className="flex items-center mb-8">
       <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <span className="text-white font-bold">Z</span>
       </div>
       <span className="font-bold text-white">API Docs</span>
      </Link>
      <div className="mb-6">
       <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
        <EnhancedSearchInput
<<<<<<< HEAD
<<<<<<< HEAD

         placeholder="Search documentation"
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
         value = {searchValue,}
         onChange = {setSearchValue,}
         onSelectSuggestion = {handleSelectSuggestion,}
         searchSuggestions = {docsSearchSuggestions,}
<<<<<<< HEAD
>>>>>>>          placeholder="Search documentation"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
         placeholder="Search documentation"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />
       </form>
      </div>
      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">
       {navigationItems.map((item) => (
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
         placeholder="Search documentation"

        />;
       </form>;
      </div>;

      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">;
       {navigationItems && navigationItems.map((item,) => (;

>>>>>>>         <Link
         key={item && item.path}
         href={item && item.path}
         className={cn(
<<<<<<< HEAD

=======
=======
        <Link
         key={item.path}
         href={item.path}
         className={cn(
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          "block px-3 py-2 rounded-md text-sm"
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover: text-white hover:bg-zinc-900"
         )}        >
<<<<<<< HEAD
>>>>>>>          {item.title}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
         {item.title}
>>>>>>>         </Link>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
       ))}

      </nav>;
     </div>;


     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
      {children}
<<<<<<< HEAD

     </div>;
=======
=======
=======
          "block px-3 py-2 rounded-md text-sm",
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
         )}
        >;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
         {item.title}
        </Link>
       ))}
      </nav>
     </div>
     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
      {children}
<<<<<<< HEAD
     </div>
    </div>
  )
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  children
}</div> </div>)
}export default ApiDocsLayout
"export default ApiDocsLayout

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  children 
}</div> </div>) 
}export default ApiDocsLayout;
"export default ApiDocsLayout;
<<<<<<< HEAD

>>>>>>>      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
     </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
}
;
export default ApiDocsLayout;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
