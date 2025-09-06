
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
interface AppLayoutProps {
<<<<<<< HEAD
  children: React.ReactNode;
=======
  children: React.ReactNode
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}