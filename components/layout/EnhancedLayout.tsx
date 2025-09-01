import React from 'react';
import Head from 'next/head';

type Props = { children?: React.ReactNode };

const EnhancedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zion</title>
      </Head>
      <div className="min-h-screen bg-high-contrast-secondary text-high-contrast">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Futuristic background layer */}
      <div className="futuristic-bg" aria-hidden>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="drift"></div>
        <div className="stars"></div>
      </div>

      {/* Site content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <header>
          <EnhancedNavigation />
        </header>
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <footer>
          <EnhancedFooter />
        </footer>
      </div>
    </div>
  );
}