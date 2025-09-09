import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import React, { ReactNode, useState } from "react"; // Added useState
import { Outlet } from "react-router-dom";
// Assume useAuth hook exists and provides user object with emailVerified status and email
import { useAuth } from '@/hooks/useAuth'; // Corrected path to the hook
import EmailVerificationBanner from '@/components/EmailVerificationBanner'; // Assuming path
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { useGlobalLoader } from '@/context/GlobalLoaderContext';
import LoaderOverlay from '@/components/LoaderOverlay';
import ErrorOverlay from '@/components/ErrorOverlay';

interface AppLayoutProps {
  children?: React.ReactNode;
  config?: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, config }) => {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/autonomy" element={<Autonomy />} />
          </Routes>
        </React.Suspense>
        {children}
      </main>
      <Footer />
    </div>
  );
};
