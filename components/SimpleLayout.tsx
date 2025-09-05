import React from 'react';
import Header from './Header';
import Footer from './layout/Footer';

interface SimpleLayoutProps {
  children: React.ReactNode;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SimpleLayout;