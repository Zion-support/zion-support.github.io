
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

<<<<<<< HEAD
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
=======
export function AppLayout({ childrenhideFooter = false }: AppLayoutProps) {
  return (

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
