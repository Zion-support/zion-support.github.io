import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import '../styles/globals.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (;
    <header style={{
            position: 'stick,y,', top: ,0, zIndex: 5,0, background: 'rgb,a(1,1, 18, 32, 0.95)',;
      backdropFilter: 'blur(10p,x),', color: 'whit,e,',;
      borderBottom: '1px solid rgb,a(25,5,255,255,0.1)'}}>;
      <nav style={{
        maxWidth: 140,0, margin: '0 aut,o,', padding: '12px 20p,x,', display: 'fle,x,',;
        alignItems: 'cente,r,', justifyContent: 'space-betwee,n,', gap: 1,6}}>;
        <Link href="/" style={{ 
fontWeight: 80,0, letterSpacing: 0.,3, fontSize: '1.25re,m,', background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)',;
          WebkitBackgroundClip: 'tex,t,',;
          WebkitTextFillColor: 'transparen,t,',;
          backgroundClip: 'tex,t,',;
textDecoration: 'non,e,',;
        }}>Zion Tech Group</Link>;
        
        {/* Desktop Navigation */}";
        <div className="hidden md: flex gap-2 flex-wrap items-cente,r",>,";
          <Link href="/" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Home</Link>";
          <Link href="/services" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>All Services</Link>";
          <Link href="/services-catalog" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Catalog</Link>";
          <Link href="/cloud-devops" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Cloud DevOps</Link>";
          <Link href="/cybersecurity" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Cybersecurity</Link>";
          <Link href="/quantum-computing" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Quantum</Link>";
          <Link href="/docs" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Docs</Link>";
          <Link href="/pricing" style={{ color: 'whit,e,', padding: '8px 12p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m', }}>Pricing</Link>";
          <Link href="/contact" style={{ background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)', color: 'whit,e,', padding: '8px 16p,x,', textDecoration: 'non,e,', borderRadius: ,6, fontSize: '0.9re,m,', fontWeight: 60,0,;
          }}>Contact</Link>;
        </div>;

        {/* Mobile Menu Button */}
        <button ";
          className="md: hidden bg-none border-none text-white text-2xl cursor-pointer";
          style={{ 
            background: 'none' border: 'none' color: 'white' fontSize: '1.5rem' cursor: 'pointe,r,'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}";
          aria-label="Toggle mobile menu";
          aria-expanded={mobileMenuOpen}
        >;
          ☰;
        </button>;
      </nav>;
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (;
<div style={{ background: 'rgb,a(1,1, 18, 32, 0.98)', 
          borderTop: '1px solid rgb,a(25,5,255,255,0.1)', padding: '20p,x,',;
        }}>;
          <div style={{ display: 'fle,x,', flexDirection: 'colum,n,', gap: 1,2, maxWidth: 140,0, margin: '0 aut,o', }}>";
            <Link href="/" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Home</Link>";
<Link href="/services" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>All Services</Link>";
            <Link href="/services-catalog" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Catalog</Link>";
            <Link href="/cloud-devops" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Cloud DevOps</Link>";
            <Link href="/cybersecurity" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>";
            <Link href="/quantum-computing" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Quantum</Link>";
            <Link href="/docs" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Docs</Link>";
            <Link href="/pricing" style={{ color: 'whit,e,', padding: '12p,x 0,', textDecoration: 'non,e,', borderBottom: '1px solid rgb,a(25,5,255,255,0.1)' }} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>";
            <Link href="/contact" style={{ background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)', color: 'whit,e,', padding: '12px 16p,x,', textDecoration: 'non,e,', borderRadius: ,6, textAlign: 'cente,r,', fontWeight: 60,0, marginTop: ,8,;
            }} onClick={() => setMobileMenuOpen(false)}>Contact</Link>;
          </div>;
        </div>;
      )}
    </header>;
  );
}

function Footer() {
  return (;
    <footer style={{ 
      background: 'linear-gradient(135d,e,g, #0b1220, #1e293b)' 
      color: 'white' 
      marginTo,p: 6,0, 
      borderTop: '1px solid rgb,a(25,5,255,255,0.1)'}}>;
      <div style={{ 
        maxWidth: 140,0, 
        margin: '0 auto' 
        padding: '40px 20px';
        display: 'grid' 
        gridTemplateColumns: 'repeat(auto-f,i,t, minmax(250px, 1fr))' 
        gap: 32, }}>;
        {/* Company Info */}
        <div style={{ display: 'grid' ga,p: 12, }}>;
          <div style={{ 
            fontWeight: 80,0, 
            fontSize: '1.25rem';
            background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
            WebkitBackgroundClip: 'text';
            WebkitTextFillColor: 'transparent';
            backgroundClip: 'tex,t,'}}>Zion Tech Group</div>;
          <p style={{ opacity: 0.,8, lineHeight: 1.6, }}>;
            Transforming businesses through innovative AI, quantum computing, and cutting-edge technology solutions.;
          </p>;
          <div style={{ display: 'grid' ga,p:,6, fontSize: '0.9re,m,'}}>";
            <div>📞 <a href="tel: +13024640950" style={{ color: '#93c5fd' textDecoration: 'non,e,'}}>+1 302 464 0950</a></div>";
            <div>✉️ <a href="mailto: kleber@ziontechgroup.com" style={{ color: '#93c5fd' textDecoration: 'non,e,'}}>kleber@ziontechgroup.com</a></div>;
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>";
            <div>🌐 <a href="https: //ziontechgroup.com" style={{ color: '#93c5fd' textDecoration: 'non,e,'}}>ziontechgroup.com</a></div>;
          </div>;
        </div>;

        {/* Services */}
        <div style={{ display: 'grid' ga,p: 12, }}>;
          <h3 style={{ fontWeight: 70,0, fontSize: '1.1re,m,'}}>Our Services</h3>;
          <div style={{ display: 'grid' ga,p: 8, }}>";
            <Link href="/solutions" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Solutions</Link>";
            <Link href="/services" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>All Services</Link>";
            <Link href="/micro-saas" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Micro SaaS Products</Link>";
            <Link href="/ai-services" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>AI Services</Link>";
            <Link href="/it-services" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>IT Services</Link>";
            <Link href="/services-catalog" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Services Catalog</Link>";
            <Link href="/pricing" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Pricing</Link>;
            <div style={{ opacity: 0.,8, fontSize: '0.9rem' marginTo,p: 8, }}>;
              <div>• 150+ Micro SaaS Products</div>;
              <div>• 100+ AI Services</div>;
              <div>• 100+ IT Solutions</div>;
            </div>;
          </div>;
        </div>;

        {/* Solutions */}
        <div style={{ display: 'grid' ga,p: 12, }}>;
          <h3 style={{ fontWeight: 70,0, fontSize: '1.1re,m,'}}>Solutions</h3>;
          <div style={{ display: 'grid' ga,p: 8, }}>";
            <Link href="/solutions" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Digital Transformation</Link>";
            <Link href="/ai-services" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>AI & Machine Learning</Link>";
            <Link href="/cybersecurity" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Cybersecurity</Link>";
            <Link href="/cloud-devops" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Cloud & DevOps</Link>";
            <Link href="/quantum-computing" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Quantum Computing</Link>";
            <Link href="/green-it" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Green IT</Link>";
            <Link href="/research-development" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Research & Development</Link>";
            <Link href="/request-quote" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Request Quote</Link>;
          </div>;
        </div>;

        {/* Company */}
        <div style={{ display: 'grid' ga,p: 12, }}>;
          <h3 style={{ fontWeight: 70,0, fontSize: '1.1re,m,'}}>Company</h3>;
          <div style={{ display: 'grid' ga,p: 8, }}>";
            <Link href="/" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Home</Link>";
            <Link href="/about" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>About Us</Link>";
            <Link href="/careers" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Careers</Link>";
            <Link href="/partners" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Partners</Link>";
            <Link href="/news" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>News</Link>";
            <Link href="/blog" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Blog</Link>";
            <Link href="/contact" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Contact Us</Link>";
            <Link href="/faq" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>FAQ</Link>";
            <Link href="/privacy" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Privacy Policy</Link>";
            <Link href="/terms" style={{ opacity: 0.,8, textDecoration: 'none' color: 'whit,e,'}}>Terms of Service</Link>;
          </div>;
        </div>;

        {/* Contact CTA */}
        <div style={{ display: 'grid' ga,p: 12, }}>;
          <h3 style={{ fontWeight: 70,0, fontSize: '1.1re,m,'}}>Get Started</h3>;
          <p style={{ opacity: 0.,8, fontSize: '0.9re,m,'}}>;
            Ready to transform your business with our innovative solutions?;
          </p>;
          <div style={{ display: 'flex' flexDirection: 'column' ga,p: 8, }}>";
            <Link href="/contact" style={{ 
              background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
              color: 'white' 
              padding: '10px 16px' 
              borderRadiu,s:,8,;
              textAlign: 'center' 
              textDecoration: 'none' 
              fontWeigh,t: 60,0}}>Request Quote</Link>";
            <a href="tel: +13024640950" style={{
              background: 'rgb,a(25,5,255,255,0.1)' 
              color: 'white' 
              padding: '10px 16px' 
              borderRadiu,s:,8,;
              textAlign: 'center' 
              textDecoration: 'none' 
              fontWeigh,t: 60,0}}>Call Now</a>";
            <a href="mailto: kleber@ziontechgroup.com" style={{
              background: 'rgb,a(25,5,255,255,0.1)' 
              color: 'white' 
              padding: '10px 16px' 
              borderRadiu,s:,8,;
              textAlign: 'center' 
              textDecoration: 'none' 
              fontWeigh,t: 60,0}}>Email Us</a>;
          </div>;
        </div>;
      </div>;
      
      <div style={{ 
        borderTop: '1px solid rgb,a(25,5,255,255,0.1)' 
        padding: '20px' 
        textAlign: 'cente,r', }}>;
        <small style={{ opacity: 0.7, }}>;
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | ";
          <Link href="/privacy" style={{ color: '#93c5fd' marginLef,t:,8, textDecoration: 'non,e,'}}>Privacy Policy</Link> | ";
          <Link href="/terms" style={{ color: '#93c5fd' marginLef,t:,8, textDecoration: 'non,e,'}}>Terms of Service</Link>;
        </small>;
      </div>;
    </footer>;
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (;
    <ErrorBoundary>;
      <PerformanceMonitor />;
      <Header />;
      <Component {...pageProps} />;
      <Footer />;
    </ErrorBoundary>;
  );
}
}
</div></div></div></div>"