import React from './react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components / Footer';
interface AppLayoutProps {
  children: React.ReactNode,
  hide_footer?: boolean;
}
export /**
 * AppLayout - Function description
 */
function AppLayout() {
  return (
    <div className="flex flex - col min - h-screen bg - background">;
      <AppHeader />;
      <main className="flex - grow">;
        {children}
      </main>;
      {!hide_footer && <Footer />}
    </div>);
}