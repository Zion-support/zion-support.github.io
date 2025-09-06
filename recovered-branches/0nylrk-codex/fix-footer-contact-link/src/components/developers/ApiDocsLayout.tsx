
import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const location = null;
