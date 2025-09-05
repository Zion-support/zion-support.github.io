import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Leading provider of micro SaaS products, AI services, and IT solutions. 
              We help businesses scale efficiently and securely in the digital age.
            </p>
            <div className="text-slate-400">
              <p>364 E Main St STE 1008</p>
              <p>Middletown, DE 19709</p>
              <p>Phone: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/micro-saas" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Micro SaaS Products
                </Link>
              </li>
              <li>
                <Link href="/ai-services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/blockchain" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Blockchain Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}