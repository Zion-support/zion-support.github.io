import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import OnboardingWizard from '../ui/OnboardingWizard';

const EnhancedLayout: React.FC = ({ children }) => {
  return <>{children}</>;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header>
        <EnhancedNavigation />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
      <OnboardingWizard />
    </div>
  );
}