
import React, { ReactNode, useState } from "react"; // Added useState
import { Outlet } from "react-router-dom";
// Assume useAuth hook exists and provides user object with emailVerified status and email
import { useAuth } from '@/hooks/useAuth'; // Corrected path to the hook
import EmailVerificationBanner from '@/components/EmailVerificationBanner'; // Assuming path
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
