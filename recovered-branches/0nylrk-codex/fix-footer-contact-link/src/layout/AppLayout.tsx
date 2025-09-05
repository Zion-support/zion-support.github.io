
import React from &quot;react&quot;;
import { AppHeader } from &quot;./AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className=&quot;flex flex-col min-h-screen bg-background&quot;>
      <AppHeader />
      <main className=&quot;flex-grow&quot;>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
