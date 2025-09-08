import React from 'react.ts';
import EnhancedNavigation2025 from './layout/EnhancedNavigation2025';
import EnhancedFooter from './layout/EnhancedFooter';

interface LayoutProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;

}

export default function Layout(...args: any[]): any {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>

      <Header 
        onMenuClick={() => setIsSidebarOpen(true)}
        onServicesClick={() => setIsServicesOpen(true)}
      />

      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;