import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Professional AI and IT solutions with cutting-edge technology." />
      </Helmet>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;