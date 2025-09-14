
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ childrenhideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
