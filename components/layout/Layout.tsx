import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';

type LayoutProps = {

  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return <div>{children}</div>;
}
