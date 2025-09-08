import type { AppProps } from 'next/app';
import '../styles/globals.css';

function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          Zion Tech Group
        </Link>
        
        <div className="header-nav-links">
          <Link href="/" className="header-nav-link">Home</Link>
          <Link href="/services" className="header-nav-link">All Services</Link>
          <Link href="/services-catalog" className="header-nav-link">Catalog</Link>
          <Link href="/cloud-devops" className="header-nav-link">Cloud DevOps</Link>
          <Link href="/cybersecurity" className="header-nav-link">Cybersecurity</Link>
          <Link href="/quantum-computing" className="header-nav-link">Quantum</Link>
          <Link href="/docs" className="header-nav-link">Docs</Link>
          <Link href="/pricing" className="header-nav-link">Pricing</Link>
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
        <Link href="/services-catalog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Catalog</Link>
        <Link href="/cloud-devops" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cloud DevOps</Link>
        <Link href="/cybersecurity" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
        <Link href="/quantum-computing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Quantum</Link>
        <Link href="/docs" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
        <Link href="/pricing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">Zion Tech Group</div>
          <p>
            Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
            Empowering businesses with cutting-edge technology.
          </p>
          <div className="text-sm space-y-2">
            <div>📞 <a href="tel:+13024640950" className="text-blue-300">+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300">kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <Link href="/services">All Services</Link>
          <Link href="/micro-saas">Micro SaaS Products</Link>
          <Link href="/ai-services">AI Services</Link>
          <Link href="/it-services">IT Services</Link>
          <Link href="/cloud-devops">Cloud DevOps</Link>
          <Link href="/cybersecurity">Cybersecurity</Link>
          <Link href="/quantum-computing">Quantum Computing</Link>
          <Link href="/services-catalog">Services Catalog</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
          <div className="text-sm mt-2 space-y-1">
            <div>• 120+ Micro SaaS Products</div>
            <div>• 80+ AI Services</div>
            <div>• 80+ IT Solutions</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">Main Website</a>
        </div>

        {/* Contact CTA */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p className="text-sm">
            Ready to transform your business with our innovative solutions?
          </p>
          <div className="space-y-2">
            <Link href="/contact" className="footer-cta-button">Request Quote</Link>
            <a href="tel:+13024640950" className="footer-cta-secondary">Call Now</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy">Privacy Policy</Link>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<link rel="canonical" href={canonicalUrl} />
				<meta name="robots" content="index,follow" />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
			</Head>
			<div className="min-h-screen flex flex-col bg-black text-white">
				<main className="flex-1">
					<Component {...pageProps} />
				</main>
			</div>
		</div>
	)
}
