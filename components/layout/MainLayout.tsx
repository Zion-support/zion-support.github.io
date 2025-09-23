import React from 'react';
import Layout from '../Layout';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
