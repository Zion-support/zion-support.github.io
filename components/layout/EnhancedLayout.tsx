
interface EnhancedLayoutProps {
  children: React.ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
=======
    <div className='min-h-screen flex flex-col'>
      <header>
  }, []);

import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}

<<<<<<< HEAD

  return (
    <div className='min-h-screen flex flex-col' />
      <header />
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>

=======
  return (
    <div className='min-h-screen flex flex-col'    />
      <header    />
        <EnhancedNavigation    />
        <LanguageSwitchPrompt    />
      </header>
<main id='main' className='flex-1 container mx-auto px-4 py-6'    />
>>>>>>> origin/chore/fix-lint-and-merge
        {children}
      </main>
      <footer    />
        <EnhancedFooter    />
      </footer>
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
    </div>
  );
}

