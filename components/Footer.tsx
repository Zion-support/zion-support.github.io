import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">Zion Tech Group</div>
          <p>
            Transforming businesses through innovative AI, quantum computing, and cutting-edge technology solutions.
          </p>
          <div style={{ display: 'grid', gap: 6, fontSize: '0.9rem' }}>
            <div>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd', textDecoration: 'none' }}>+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd', textDecoration: 'none' }}>kleber@ziontechgroup.com</a></div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
            <div>🌐 <a href="https://ziontechgroup.com" style={{ color: '#93c5fd', textDecoration: 'none' }}>ziontechgroup.com</a></div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <Link href="/services">All Services</Link>
          <Link href="/micro-saas">Micro SaaS Products</Link>
          <Link href="/ai-services">AI Services</Link>
          <Link href="/it-services">IT Services</Link>
          <Link href="/cloud-devops">Cloud DevOps</Link>
          <Link href="/cybersecurity">Cybersecurity</Link>
          <Link href="/quantum-computing">Quantum Computing</Link>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Contact CTA */}
        <div className="footer-section">
          <h3>Get Started</h3>
          <p>
            Ready to transform your business with our innovative solutions?
          </p>
          <Link href="/contact" className="footer-cta-button">Request Quote</Link>
          <a href="tel:+13024640950" className="footer-cta-secondary">Call Now</a>
          <a href="mailto:kleber@ziontechgroup.com" className="footer-cta-secondary">Email Us</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy">Privacy Policy</Link> | 
          <Link href="/terms">Terms of Service</Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;