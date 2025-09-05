import Link from 'next/link';
import { useState } from 'react';
const "Header": React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header">
      {' '}
      <nav className="header-nav">
        {' '}
        <Link href="/" className="header-logo">
          {' '}
          Zion Tech Group{' '}
        </Link>{' '}
        {}{' '}
        <div className="header-nav-links">
          {' '}
          <Link href="/" className="header-nav-link">
            Home
          </Link>{' '}
          <Link href="/services" className="header-nav-link">
            All Services
          </Link>{' '}
          <Link href="/services-catalog" className="header-nav-link">
            Catalog
          </Link>{' '}
          <Link href="/cloud-devops" className="header-nav-link">
            Cloud DevOps
          </Link>{' '}
          <Link href="/cybersecurity" className="header-nav-link">
            Cybersecurity
          </Link>{' '}
          <Link href="/quantum-computing" className="header-nav-link">
            Quantum
          </Link>{' '}
          <Link href="/docs" className="header-nav-link">
            Docs
          </Link>{' '}
          <Link href="/pricing" className="header-nav-link">
            Pricing
          </Link>{' '}
          <Link href="/contact" className="header-nav-cta">
            Contact
          </Link>{' '}
        </div>{' '}
        {}{' '}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {' '}
          ☰{' '}
        </button>{' '}
      </nav>{' '}
      {}{' '}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {' '}
        <Link
          href="/"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>{' '}
        <Link
          href="/services"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          All Services
        </Link>{' '}
        <Link
          href="/services-catalog"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Catalog
        </Link>{' '}
        <Link
          href="/cloud-devops"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Cloud DevOps
        </Link>{' '}
        <Link
          href="/cybersecurity"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Cybersecurity
        </Link>{' '}
        <Link
          href="/quantum-computing"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Quantum
        </Link>{' '}
        <Link
          href="/docs"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Docs
        </Link>{' '}
        <Link
          href="/pricing"
          className="header-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Pricing
        </Link>{' '}
        <Link
          href="/contact"
          className="header-nav-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>{' '}
      </div>{' '}
    </header>
  );
};
export default Header;
import Link from 'next/link'; import { useState } from 'react'; const Header: React.FC = () => { const [mobileMenuOpen,setMobileMenuOpen] = useState(false); return ( <header className="header"> {' '} <nav className="header-nav"> {' '} <Link href="/" className="header-logo"> {' '} Zion Tech Group{' '} </Link>{' '} {}{' '} <div className="header-nav-links"> {' '} <Link href="/" className="header-nav-link"> Home </Link>{' '} <Link href="/services" className="header-nav-link"> All Services </Link>{' '} <Link href="/services-catalog" className="header-nav-link"> Catalog </Link>{' '} <Link href="/cloud-devops" className="header-nav-link"> Cloud DevOps </Link>{' '} <Link href="/cybersecurity" className="header-nav-link"> Cybersecurity </Link>{' '} <Link href="/quantum-computing" className="header-nav-link"> Quantum </Link>{' '} <Link href="/docs" className="header-nav-link"> Docs </Link>{' '} <Link href="/pricing" className="header-nav-link"> Pricing </Link>{' '} <Link href="/contact" className="header-nav-cta"> Contact </Link>{' '} </div>{' '} {}{' '} <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu" aria-expanded={mobileMenuOpen} > {' '} ☰{' '} </button>{' '} </nav>{' '} {}{' '} <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}> {' '} <Link href="/" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Home </Link>{' '} <Link href="/services" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > All Services </Link>{' '} <Link href="/services-catalog" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Catalog </Link>{' '} <Link href="/cloud-devops" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Cloud DevOps </Link>{' '} <Link href="/cybersecurity" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Cybersecurity </Link>{' '} <Link href="/quantum-computing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Quantum </Link>{' '} <Link href="/docs" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Docs </Link>{' '} <Link href="/pricing" className="header-nav-link" onClick={() => setMobileMenuOpen(false)} > Pricing </Link>{' '} <Link href="/contact" className="header-nav-cta" onClick={() => setMobileMenuOpen(false)} > Contact </Link>{' '} </div>{' '} </header> )}; export default Header;
