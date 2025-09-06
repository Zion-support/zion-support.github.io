
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const location = useLocation($2);
  const currentPath = $2;
  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/developers/docs/samples" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }],

  return (
    <div className = $2;
                    currentPath = $2;