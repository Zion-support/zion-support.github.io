
import { SearchSuggestion,  } from "@/types/search",
import React, { useState } from "react",
import Link from 'next/link';
import { useRouter,, ,  } from 'next/router';
import { Search,  } from 'lucide-react'
import { EnhancedSearchInput,  } from "@/components/search/EnhancedSearchInput";
import { cn,  } from "@/lib/utils";
import { getDocsSearchPath;
, docsSearchSuggestions,
 } from "@/data/docsSearchData"
interface ApiDocsLayoutProps {
  children: React.ReactNode,
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
