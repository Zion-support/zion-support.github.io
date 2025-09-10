import React, { ReactNode } from "react";
import { ReactNode } from "react";
import EnhancedNavigation from "./EnhancedNavigation";
import EnhancedFooter from "./EnhancedFooter";
interface EnhancedLayoutProps {
  \"children\": ReactNode;
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col\">
      <EnhancedNavigation />
      <main className=\"container mx-auto px-4 py-8 flex-1\">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
}
 import React,{ ReactNode } from "react";  import { ReactNode } from "react"; import EnhancedNavigation from "./EnhancedNavigation"; import EnhancedFooter from "./EnhancedFooter";