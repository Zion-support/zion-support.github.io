import React from 'react';
import { Helmet } from 'react-helmet-async';

const Footer: React.FC = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Advanced AI and IT Solutions",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup"
            ]
          })}
        </script>
      </Helmet>
      
      <footer className="bg-slate-900 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of advanced AI and IT solutions. We help businesses 
                transform their operations with cutting-edge technology and intelligent automation.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/ziontechgroup" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/ziontechgroup" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</a></li>
                <li><a href="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">5G Solutions</a></li>
                <li><a href="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                <li><a href="/cloud-migration" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Migration</a></li>
                <li><a href="/cybersecurity-consulting" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a></p>
                <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a></p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
                <a href="/support" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
