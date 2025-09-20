
import { SearchSuggestion,,  } from "@/types/search",
import React, { useState } from "react",
import import Link from 'next/link';
import import { useRouter,,, ,,  } from 'next/router';
import { Search,,  } from 'lucide-react'
import { EnhancedSearchInput,,  } from "
import { cn,,  } from "
import import { getDocsSearchPath;
,, docsSearchSuggestions,
 } from "@/data/docsSearchData"
interface ApiDocsLayoutProps {
  children: React.ReactNode,
}
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
