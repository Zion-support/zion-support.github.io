<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

function Layout({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
  keywords = 'AI solutions, technology consulting, cloud services, automation, cybersecurity, web development, mobile development',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onMenuClick={toggleSidebar} />
        
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Layout;
