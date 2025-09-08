import type { AppProps } from 'next/app';
import SiteLayout from '../components/layout/SiteLayout';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          <span className="logo-text">Zion Tech Group</span>
          <span className="logo-tagline">Innovative Technology Solutions</span>
        </Link>
        
        <div className="header-nav-links">
          <Link href="/" className="header-nav-link">Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="header-nav-dropdown"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <span className="header-nav-link dropdown-trigger">
              Services <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
              <Link href="/services" className="dropdown-item">All Services</Link>
              <Link href="/micro-saas" className="dropdown-item">Micro SaaS Products</Link>
              <Link href="/ai-services" className="dropdown-item">AI Services</Link>
              <Link href="/it-services" className="dropdown-item">IT Services</Link>
              <Link href="/services-catalog" className="dropdown-item">Services Catalog</Link>
            </div>
          </div>

          <Link href="/about" className="header-nav-link">About</Link>
          <Link href="/blog" className="header-nav-link">Blog</Link>
          <Link href="/pricing" className="header-nav-link">Pricing</Link>
          <Link href="/faq" className="header-nav-link">FAQ</Link>
          <Link href="/request-quote" className="header-nav-link">Get Quote</Link>
          <Link href="/contact" className="header-nav-cta">Contact</Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
        <Link href="/micro-saas" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Micro SaaS</Link>
        <Link href="/ai-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>AI Services</Link>
        <Link href="/it-services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
        <Link href="/services-catalog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
        <Link href="/about" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/blog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link href="/pricing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link href="/faq" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
        <Link href="/request-quote" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
        <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    );
  }

  return (
    <ProductionErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ProviderWrapper>
          <Head>
            <title>Zion App - AI Marketplace & DAO Platform</title>
            <meta name="description" content="Zion App - The ultimate AI marketplace and DAO platform for the future of work" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={`${inter.variable} ${poppins.variable}`}>
            <ProductionErrorBoundary>
              <RootErrorBoundary>
                <HydrationErrorBoundary>
                  <React.Suspense
                    fallback={
                      <div className="flex items-center justify-center min-h-screen">
                        <div className="animate-pulse text-lg">Loading...</div>
                      </div>
                    }
                  >
                    <GlobalErrorBoundary>
                      <QueryClientProvider client={queryClient}>
                        <ApiErrorBoundary>
                          <ReduxProvider store={store}>
                            <I18nextProvider i18n={i18n}>
                              <ErrorProvider>
                                <AuthProvider>
                                  <WhitelabelProvider>
                                    <LanguageProviderWrapper>
                                      <WalletProvider>
                                        <CartProvider>
                                          <AnalyticsProvider>
                                            <FeedbackProvider>
                                              <CommunityProvider>
                                                <ThemeProvider>
                                                  <AppLayout>
                                                    <RouteChangeHandler
                                                      resetScrollOnChange={true}
                                                      forceRerender={false}
                                                    />
                                                    <ErrorBoundary>
                                                      <Component
                                                        key={router.asPath}
                                                        {...pageProps}
                                                      />
                                                    </ErrorBoundary>
                                                    <ErrorResetOnRouteChange />
                                                    <ToastContainer />
                                                    <OfflineIndicator />
                                                    <IntercomChat />
                                                    <PerformanceMonitor />
                                                    <BundleAnalyzer />
                                                    <QuickActions />
                                                  </AppLayout>
                                                </ThemeProvider>
                                              </CommunityProvider>
                                            </FeedbackProvider>
                                          </AnalyticsProvider>
                                        </CartProvider>
                                      </WalletProvider>
                                    </LanguageProviderWrapper>
                                  </WhitelabelProvider>
                                </AuthProvider>
                              </ErrorProvider>
                            </I18nextProvider>
                          </ReduxProvider>
                        </ApiErrorBoundary>
                      </QueryClientProvider>
                    </GlobalErrorBoundary>
                  </React.Suspense>
                </HydrationErrorBoundary>
              </RootErrorBoundary>
            </ProductionErrorBoundary>
          </div>
        </ProviderWrapper>
      </QueryClientProvider>
    </ProductionErrorBoundary>
  );
}

function Footer(): any {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">Zion Tech Group</span>
            <span className="logo-tagline">Innovative Technology Solutions</span>
          </div>
          <p>
            Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
            Empowering businesses with cutting-edge technology and digital transformation.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+13024640950" className="contact-link">+1 302 464 0950</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" className="contact-link">kleber@ziontechgroup.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <div className="footer-links">
            <Link href="/services" className="footer-link">All Services</Link>
            <Link href="/micro-saas" className="footer-link">Micro SaaS Products</Link>
            <Link href="/ai-services" className="footer-link">AI Services</Link>
            <Link href="/it-services" className="footer-link">IT Services</Link>
            <Link href="/services-catalog" className="footer-link">Services Catalog</Link>
            <Link href="/pricing" className="footer-link">Pricing Plans</Link>
          </div>
          <div className="service-stats">
            <div className="stat-item">• 120+ Micro SaaS Products</div>
            <div className="stat-item">• 80+ AI Services</div>
            <div className="stat-item">• 80+ IT Solutions</div>
            <div className="stat-item">• 24/7 Support</div>
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
            <Link href="/faq" className="footer-link">FAQ</Link>
            <Link href="/request-quote" className="footer-link">Request Quote</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>

        {/* Get Started */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p className="footer-description">
            Ready to transform your business with our innovative solutions? 
            Let's discuss your project requirements.
          </p>
          <div className="footer-cta">
            <Link href="/contact" className="footer-cta-button">Request Quote</Link>
            <a href="tel:+13024640950" className="footer-cta-secondary">Call Now</a>
            <a href="mailto:kleber@ziontechgroup.com" className="footer-cta-secondary">Email Us</a>
          </div>
          <div className="social-links">
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="social-link">
              🌐 Main Website
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <small>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </small>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
            <Link href="/contact" className="footer-bottom-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyApp;
