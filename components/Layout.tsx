
import React from 'react';
import Head from 'next/head';

import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {

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
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;

interface LayoutProps {

  children: React.ReactNode;
  title?: string;
  description?: string;
}
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https: //ziontechgroup.com/og-image.jpg";,
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}

}

}
import React, { ReactNode } from 'react';

}

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children ;}) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
};

export default Layout;
main
main
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
pr-12243

}

