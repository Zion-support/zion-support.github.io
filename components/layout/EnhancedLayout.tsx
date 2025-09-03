import { ReactNode } from "react";
import EnhancedNavigation from "./EnhancedNavigation";
import EnhancedFooter from "./EnhancedFooter";
import Sidebar from "./Sidebar";

interface EnhancedLayoutProps {
  children: ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <EnhancedNavigation />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <EnhancedFooter />
    </div>
  );
}
