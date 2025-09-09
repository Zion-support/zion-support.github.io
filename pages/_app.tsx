import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <Link href="/cloud-devops" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Cloud & DevOps</Link>
          <Link href="/cybersecurity" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Cybersecurity</Link>
          <Link href="/quantum-computing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Quantum Computing</Link>
          <Link href="/docs" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Documentation</Link>
          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>About</Link>
          <Link href="/contact" style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: 6, fontSize: '0.9rem', fontWeight: 600
          }}>Contact</Link>
        </div>

        // PERFORMANCE: Initialize Web Vitals monitoring in production
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
          try {
            const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals');
            const reportWebVitals = (metric: any) => {
              // Report metrics to analytics service
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', metric.name, {
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  event_label: metric.id,
                  non_interaction: true,
                });
              }
              
              // Initialize comprehensive performance monitoring on first metric
              if (!(global as any).performanceMonitorInitialized) {
                (global as any).performanceMonitorInitialized = true;
                import('@/utils/performance-monitor').then(({ default: performanceMonitor }) => {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('🔧 Performance monitoring initialized');
                  }
                }).catch((error) => {
                  console.warn('Failed to initialize performance monitoring:', error);
                });
              }
            };
            
            onCLS(reportWebVitals);
            onFCP(reportWebVitals);
            onINP(reportWebVitals);
            onLCP(reportWebVitals);
            onTTFB(reportWebVitals);
          } catch (webVitalsError) {
            // Silently fail if web-vitals is not available
          }
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setInitializationError('Failed to initialize application. Please refresh the page.');
        setIsLoading(false);
      }
    };

    // Force initialization completion after maximum 3 seconds
    // MODIFIED: Increased timeout to 15 seconds for debugging
    const forceInitTimeout = setTimeout(() => {
      console.warn('Force completing app initialization due to timeout (15s)');
      setLoadingProgress(100);
      setIsLoading(false);
    }, 15000); // Increased from 3000ms

    initializeApp().finally(() => {
      clearTimeout(forceInitTimeout);
    });

    return () => {
      clearTimeout(forceInitTimeout);
    };
  }, []);

  // Handle router events for page transitions
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Could add route change loading if needed
    };

    const handleRouteChangeComplete = () => {
      // Route change completed
    };

    const handleRouteChangeError = () => {
      console.error('Route change error');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  // Show loading screen during initialization
  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading - Zion App</title>
          <meta name="description" content="Zion App is loading..." />
        </Head>
        <LoadingScreen progress={loadingProgress} />
      </>
    );
  }

  // Show error screen if initialization failed
  if (initializationError) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2>🚫 Initialization Error</h2>
        <p>{initializationError}</p>
        <button 
          style={{ 
            background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer',
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' } as any
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(11, 18, 32, 0.98)',
          backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: 12
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
          <Link href="/cloud-devops" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Cloud & DevOps</Link>
          <Link href="/cybersecurity" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
          <Link href="/quantum-computing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Quantum Computing</Link>
          <Link href="/docs" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }} onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
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

function Footer(): any {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white',
      padding: '40px 20px', marginTop: 'auto'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ 
            fontSize: '1.5rem', fontWeight: 700, marginBottom: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Innovative IT Solutions & AI Services
          </p>
        </div>

        {/* Services */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Our Services</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>All Services</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Micro SaaS Products</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Services</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IT Services</Link>
            <Link href="/services-catalog" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Services Catalog</Link>
            <Link href="/cloud-devops" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud & DevOps</Link>
            <Link href="/cybersecurity" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity</Link>
            <Link href="/quantum-computing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Quantum Computing</Link>
            <Link href="/pricing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Pricing</Link>
            <div style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: 8 }}>
              <div>• 150+ Micro SaaS Products</div>
              <div>• 100+ AI Services</div>
              <div>• 100+ IT Solutions</div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #334155', paddingTop: 20, color: '#64748b', fontSize: '0.8rem'
        }}>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>

        {/* Resources */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Resources</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/docs/getting-started" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Getting Started</Link>
            <Link href="/docs/api-overview" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>API Overview</Link>
            <Link href="/docs/authentication" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Authentication</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Main Website</a>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Get Started</h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
            Ready to transform your business with our innovative solutions?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/contact" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white', padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Request Quote</Link>
            <a href="tel:+13024640950" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Call Now</a>
            <a href="mailto:kleber@ziontechgroup.com" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Email Us</a>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        padding: '20px', textAlign: 'center' 
      }}>
        <small style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}