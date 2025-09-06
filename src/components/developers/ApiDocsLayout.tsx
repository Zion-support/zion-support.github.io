
import { SearchSuggestion } from "@/types/search";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from 'lucide-react'
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData",

interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter($2);
  const currentPath = $2;
  const [searchValue, setSearchValue] = useState($2);
  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath($2);
    if (path) {
      router.push($2);
      setSearchValue("")
    }
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault($2);
    const path = getDocsSearchPath($2);
    if (path) {
      router.push($2);
      setSearchValue("")
    }
  },

  return (
    <div className = $2;
          currentPath = $2;