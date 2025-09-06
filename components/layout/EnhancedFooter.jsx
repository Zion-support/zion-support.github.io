import React from 'react',
import Link from 'next/link',
const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear(),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  return (
    <footer className=&quot;bg-gray-900 text-white&quot;>
      {/* Main Footer Content */}
      <div className=&quot;container mx-auto px-4 py-16&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2&quot;>
            <div className=&quot;flex items-center space-x-2 mb-4&quot;>
              <div className=&quot;w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>Z</span>
              </div>
              <span className=&quot;text-xl font-bold&quot;>Zion Tech Group</span>
            </div>
            <p className=&quot;text-gray-300 mb-6 max-w-md&quot;>
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
          </div>

          {_/* Services */}
          <div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Services</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>AI Development</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Cloud Services</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Blockchain Solutions</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Data Analytics</Link></li>
            </ul>
          </div>

          {_/* Company */}
          <div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Company</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link href=&quot;/about&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>About Us</Link></li>
              <li><Link href=&quot;/talent&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Careers</Link></li>
              <li><Link href=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Contact</Link></li>
              <li><Link href=&quot;/blog&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
<<<<<<< HEAD
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy, {currentYear} Zion Tech Group. All rights reserved.</p>
<<<<<<< HEAD
=======
      {_/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; {_currentYear} Zion Tech Group. All rights reserved.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
          </div>
        </div>
      </div>
    </footer>
  )
},

export default EnhancedFooter,