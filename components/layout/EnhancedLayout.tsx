import React, { ReactNode } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

interface EnhancedLayoutProps {
  children: ReactNode}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
export type EnhancedLayoutProps = {;
export type EnhancedLayoutProps = {
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
};

// Simple animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
  </div>
);

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100" style={{ color: 'var(--brand, #111827)' }}>
      <header>
        <EnhancedNavigation />
      </header>
      <main className="relative z-10 flex-1">{children}</main>
      <footer className="relative z-10">
        <EnhancedFooter />
      </footer>
      <MobileTabBar />
    </div>
  )}
