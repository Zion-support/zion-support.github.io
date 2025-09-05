import React, { useState } from 'react';''
import Link from 'next/link';''
import { Menu, X, ChevronDown } from 'lucide-react';''
const "EnhancedNavigation": React.FC = () => {"
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);"
  const services = [{ name: 'All Services', href: '/services' },''
    { name: 'AI Services', href: '/ai-services' },''
    { name: 'IT Services', href: '/it-services' },''
    { name: 'Micro SaaS', href: '/micro-saas' },']
  ];
  return ('
    <nav className="bg-white shadow-lg">"
</nav>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="flex justify-between items-center py-4">"
</div>"
<div className="text-xl font-bold text-gray-800">Logo</div>""
          <div className="hidden md:flex space-x-8>"
</div>"
            <Link href="/"><span className="text-gray-600 hover:text-gray-900">Home</span></Link>""
            <Link href="/services"><span className="text-gray-600 hover:text-gray-900">Services</span></Link>""
            <Link href="/about"><span className="text-gray-600 hover:text-gray-900">About</span></Link>""
            <Link href="/contact"><span className="text-gray-600 hover:text-gray-900">Contact</span></Link>"
          </div>"
          <div className="hidden lg:block">"
</div>"
            <Link href="/contact">"
</Link>"
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">"
</span>
              </span>
            </Link>
          </div>
          <button;"
            className="lg:hidden"")
            onClick={() => setIsOpen(!isOpen)}
</button>"
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
</X>
          </button>
        </div>"
          <div className="lg:hidden py-4 border-t border-gray-200>"
</div>"
            <div className="space-y-2">"
</div>"
              <Link href="/">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>"
              </Link>"
              <div className="space-y-2">"
</div>"
                <div className="font-semibold text-gray-800 py-2">Services</div>"
                  <Link key={service.name} href={service.href}>
</Link>"
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600> {service.name}"
</span>"
                    </span""
                  </Link>
              </div>"
              <Link href="/about">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600>About</span> </Link"""
              <Link href="/contact">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>"
              </Link>"
              <Link href="/contact">"
</Link>"
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">"
</span>
                </span>
              </Link>
            </div>
          </div>
      </div>
    </nav>"