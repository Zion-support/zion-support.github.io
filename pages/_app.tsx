<<<<<<< HEAD
import type { AppProps } from 'next/app';
import '../src/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import type { AppProps } from 'next/app';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
=======

=======



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;


>>>>>>> origin/automation-improvements-final
=======

=======
}
=======

=======
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
=======




=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
import '../styles/globals.css';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedFooter from '../components/layout/EnhancedFooter';

<<<<<<< HEAD
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
origin/main
import '../src/styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
return <Component {...pageProps} />;
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {;
  return <Component {...pageProps} />;
}
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11, 18, 32, 0.95)', 
      backdropFilter: 'blur(10px)', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <nav style={{
        maxWidth: 1400, margin: '0 auto', padding: '12px 20px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
        <Link href="/" style={{ 
          fontWeight: 800, letterSpacing: 0.3, fontSize: '1.25rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none'
        }}>Zion Tech Group</Link>
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center'
        }} className="hidden md:flex">
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Home</Link>
          <Link href="/services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>All Services</Link>
          <Link href="/micro-saas" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>AI Services</Link>
          <Link href="/it-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>IT Services</Link>
          <Link href="/services-catalog" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Catalog</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>About</Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '8px 16px', borderRadius: 8,
            transition: 'all 0.2s ease', textDecoration: 'none'
          }}>Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div style={{
          display: 'flex', gap: 4, alignItems: 'center'
        }} className="md:hidden">
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '6px 12px', borderRadius: 6,
            transition: 'all 0.2s ease', textDecoration: 'none', fontSize: '0.9rem'
          }}>Contact</Link>
          <button 
            style={{
              background: 'none', border: 'none', color: 'white', fontSize: '1.2rem',
              cursor: 'pointer', padding: '6px', borderRadius: 4
            }
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, 
          background: 'rgba(11, 18, 32, 0.98)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px'
        }}>
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>All Services</Link>
          <Link href="/micro-saas" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
          <Link href="/ai-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
          <Link href="/it-services" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
          <Link href="/services-catalog" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import '../styles/globals.css';

}
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { AppProps } from 'next / app';
import '../src / styles / globals.css';
;
export default /**
 * App - Function description
 */
function App() {
return <Component {...page_props} />;
import '../styles / globals.css';
;
export default /**
 * App - Function description
 */
function App() {
  return <Component {...page_props} />;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
ursor/fix-lint-push-and-merge-to-main-e10e
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
import '../styles/globals.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
  );
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
