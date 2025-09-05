
import React from "react";

interface AppLayoutProps {_children: React.ReactNode;
  hideFooter?: boolean;}

export function AppLayout(_{_children, _hideFooter = false}: AppLayoutProps) {_return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      {_!hideFooter && <Footer />}
    </div>
  );
}
