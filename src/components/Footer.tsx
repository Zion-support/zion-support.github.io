import React from 'react',
import Link from 'next/link',
export function Footer() {
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Zion Tech Group</h3>
            <p className="text-zion-cyan text-sm">
              Leading provider of AI, cloud, cybersecurity, and digital transformation solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-zion-cyan hover: text-white text-sm">All Services</Link></li>
              <li><Link href="/services/ai" className="text-zion-cyan hover:text-white text-sm">AI Solutions</Link></li>
              <li><Link href="/services/cloud" className="text-zion-cyan hover:text-white text-sm">Cloud Computing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" >
              <span className="text-zion-cyan hover:text-white text-sm">
                About
              </span>
            </Link></li>
              <li><Link href="/careers" >
              <span className="text-zion-cyan hover:text-white text-sm">
                Careers
              </span>
            </Link></li>
              <li><Link href="/contact" >
              <span className="text-zion-cyan hover:text-white text-sm">
                Contact
              </span>
            </Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" >
              <span className="text-zion-cyan hover:text-white text-sm">
                Privacy Policy
              </span>
            </Link></li>
              <li><Link href="/terms" >
              <span className="text-zion-cyan hover:text-white text-sm">
                Terms of Service
              </span>
            </Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
          <p className="text-zion-cyan text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )}
