import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title || 'Zion Tech Group - Advanced AI and IT Solutions'}</title>
        <meta name="description" content={description || 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'} />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
