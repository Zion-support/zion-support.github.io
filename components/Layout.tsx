<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  Star,
  CheckCircle
} from 'lucide-react';

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  children: React.ReactNode;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </>
  );
}
=======
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

export default Layout;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
