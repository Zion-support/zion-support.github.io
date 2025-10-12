import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
export default Layout;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps />= ({
  children,
  
  };

export default function Layout() {
  return (</LayoutProps>
    <div></meta>
          {/* Open Graph Meta Tags */}
          <meta property="og: title" content="{title}" /  /></meta>
          <meta property="og: description" content="{description}" /  /></meta>
          <meta property="og:type" content="website" /  /></meta>
          <meta property="og:url" content="https://ziontechgroup.com" /  /></meta>
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" /  /></meta>
          <meta property="og:site_name" content="Zion Tech Group" /  /></meta>
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" /></meta>
          <meta name="twitter: title" content="{title}" /></meta>
          <meta name="twitter: description" content="{description}" /></meta>
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" /></meta>
          <meta name="twitter:site" content="@ziontechgroup" /></meta>
          {/* Additional SEO Meta Tags */}
          <meta name="robots" content="index, follow" /></meta>
          <meta name="author" content="Zion Tech Group" /></meta>
          <meta name="viewport" content="width="device-width," initial-scale=1.0" /  /></meta>
          <meta name="theme-color" content="#8 b5 cf6" /></meta>
          {/* Structured Data */}
          <script type="application/ld+json"  />{JSON.stringify(structuredData)}</script>
          </script>
        </Helmet>
        <Navigation /></Navigation>
        <main className="w-5h-5ml-2" />{children}</main>
        </main>
        <Footer /></Footer>
        {/* Theme Toggle - Fixed Position */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <ThemeToggle /></ThemeToggle>
        </div>
    </ErrorBoundary>
  );
};

export default Layout;

}