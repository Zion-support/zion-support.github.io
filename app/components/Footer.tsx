import React from 'react";"
import Link from 'next/link";

const Footer: React.FC = () =>{
  const currentYear = new Date().getFullYear();

  return ("</>")"
    <footer className="bg-gray-900 text-white">"</>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"</>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></>"
          <div>"</>"
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>"</>"
            <p className="text-gray-300 mb-4">Leading provider of AI and IT solutions for modern businesses.</>
            </p></>"
          </div></>"
          <div>"</>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>"</>"
            <ul className="space-y-2">"</>"
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>"</>"
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>"</>"
              <li><Link href="/cloud-solutions" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li></>
            </ul></>"
          </div></>"
          <div>"</>"
            <h3 className="text-lg font-semibold mb-4">Company</h3>"</>"
            <ul className="space-y-2">"</>"
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>"</>"
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>"</>"
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li></>
            </ul></>"
          </div></>"
          <div>"</>"
            <h3 className="text-lg font-semibold mb-4">Resources</h3>"</>"
            <ul className="space-y-2">"</>"
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>"</>"
              <li><Link href="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>"</>"
              <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li></>
            </ul></>"
          </div></>"
        </div>"</>"
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">"</>"
          <p className="text-gray-300">© {currentYear} Zion Tech Group. All rights reserved.</>
          </p></>
        </div></>
      </div></>
    </footer>);
};

export default Footer;"</>