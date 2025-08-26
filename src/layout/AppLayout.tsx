import React from "react";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main id="main-content" className="flex-grow">
        {children}
      </main>
    </div>
  );
}
