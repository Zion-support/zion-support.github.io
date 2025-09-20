
import { SearchSuggestion } from "@/types/search";,
import React, { useState } from "react",;
import Link from 'next/link';
import { useRouter } from "next/router";
import { Search } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import { getDocsSearchPath;
<<<<<<< HEAD
, docsSearchSuggestions,
} from "@/data/docsSearchData";
interface ApiDocsLayoutProps {
children: React.ReactNode,
}
=======
, docsSearchSuggestions } from "@/data/docsSearchData";
interface ApiDocsLayoutProps {children: React.ReactNode}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
}