import React, { PropsWithChildren } from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LayoutProps } from '../types/components';

interface AppLayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string[];
  showHeader?: boolean;
  showFooter?: boolean;
}

export function AppLayout({ 
  children, 
  title = 'Zion Tech Group',
  description = 'Innovative IT Solutions & AI Services',
  keywords = ['AI', 'IT Services', 'Technology', 'Software'],
  showHeader = true,
  showFooter = true
}: AppLayoutProps): JSX.Element {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
      />
      <div className="min-h-screen flex flex-col">
        {showHeader && <Header />}
        <main className="flex-1">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
