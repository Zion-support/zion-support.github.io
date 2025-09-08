import React from 'react';
export default AppLayout;
=======
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
