import React, { useState } from 'react';''
import Link from 'next/link';''
import { Menu, X, ChevronDown } from 'lucide-react';'
const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const services = ['
    { name: 'AI Services', href: '/ai-services' },''
    { name: 'IT Services', href: '/it-services' },''
    { name: 'Micro SaaS', href: '/micro-saas' },''
    { name: 'Additional Services', href: '/additional-services' },']
  ];
  const products = ['
    { name: 'All Products', href: '/products' },''
    { name: 'Pricing', href: '/pricing' },''
    { name: 'Case Studies', href: '/case-studies' },''
    { name: 'Guides', href: '/guides' },']
  ];
  return ('
    <nav className="bg-white shadow-lg sticky top-0 z-50">"
</nav>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="flex justify-between items-center py-4">"
</div>"
          <Link href="/">"
</Link>"
            <div className="flex items-center space-x-2">"
</div>"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
                <span className="text-white font-bold text-xl">Z</span>{' '}''
              </div>{' '}''
              <div className="text-xl font-bold text-gray-800">"
</div>"
              </div>{' '}''
            </div>{' '}''
          </Link>{' '}''
          <div className="hidden lg:flex items-center space-x-8">"
</div>"
            <Link href="/">"
</Link>"
              <span className="text-gray-600 hover:text-blue-600 transition-colors">"
</span>"
              </span>{' '}''
            </Link>{' '}''
            <div className="relative group">"
</div>
              <button;"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"")
                onMouseEnter={() => setServicesOpen(true)}
</button>"
                Services <ChevronDown className="ml-1 w-4 h-4" />{' '}'
</ChevronDown>'
              </button>{' '}'
              <div;'
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`}'
                onMouseEnter={() => setServicesOpen(true)}
</div>
                  <Link key={service.name} href={service.href}>
</Link>'
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">"
</span>"
                    </span>{' '}'
                  </Link>'
              </div>{' '}''
            </div>{' '}''
            <div className="relative group">"
</div>"
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">"
</button>"
                Products <ChevronDown className="ml-1 w-4 h-4" />{' '}'
</ChevronDown>'
              </button>{' '}''
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">"
</div>
                  <Link key={product.name} href={product.href}>
</Link>"
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">"
</span>"
                    </span>{' '}'
                  </Link>'
              </div>{' '}''
            </div>{' '}''
            <Link href="/about">"
</Link>"
              <span className="text-gray-600 hover:text-blue-600 transition-colors">"
</span>
              </span>"
            </Link>{' '}''
            <Link href="/blog">"
</Link>"
              <span className="text-gray-600 hover:text-blue-600 transition-colors">"
</span>
              </span>"
            </Link>{' '}''
            <Link href="/talent">"
</Link>"
              <span className="text-gray-600 hover:text-blue-600 transition-colors">"
</span>
              </span>"
            </Link>{' '}''
            <Link href="/contact">"
</Link>"
              <span className="text-gray-600 hover:text-blue-600 transition-colors">"
</span>
              </span>"
            </Link>{' '}''
          </div>{' '}''
          <div className="hidden lg:block">"
</div>"
            <Link href="/contact">"
</Link>"
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">"
</span>
              </span>"
            </Link>{' '}''
          </div>{' '}''
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>"
</button>"
              <X className="w-6 h-6" />"
</X>"
              <Menu className="w-6 h-6" />"
</Menu>"
          </button>{' '}''
        </div>{' '}''
          <div className="lg:hidden py-4 border-t border-gray-200">"
</div>"
            <div className="space-y-2">"
</div>"
              <Link href="/">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">"
</span>
                </span>"
              </Link>{' '}''
              <div className="space-y-2">"
</div>"
                <div className="font-semibold text-gray-800 py-2">"
</div>"
                </div>{' '}'
                  <Link key={service.name} href={service.href}>
</Link>'
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">"
</span>"
                    </span>{' '}'
                  </Link>'
              </div>{' '}''
              <div className="space-y-2">"
</div>"
                <div className="font-semibold text-gray-800 py-2">"
</div>"
                </div>{' '}'
                  <Link key={product.name} href={product.href}>
</Link>'
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">"
</span>"
                    </span>{' '}'
                  </Link>'
              </div>{' '}''
              <Link href="/about">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">"
</span>
                </span>"
              </Link>{' '}''
              <Link href="/blog">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">"
</span>
                </span>"
              </Link>{' '}''
              <Link href="/talent">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">"
</span>
                </span>"
              </Link>{' '}''
              <Link href="/contact">"
</Link>"
                <span className="block py-2 text-gray-600 hover:text-blue-600">"
</span>
                </span>"
              </Link>{' '}''
              <Link href="/contact">"
</Link>"
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">"
</span>
                </span>"
              </Link>{' '}''
            </div>{' '}'
          </div>'
      </div>{' '}'
    </nav>'