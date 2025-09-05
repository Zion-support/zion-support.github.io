import React from 'react',
import Link from 'next/link',
import Button from '../ui/Button',
const Header: React.FC = () => {
  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }],

  return (
    <header className=&quot;bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50&quot;>
      <div className=&quot;container mx-auto px-6 py-4&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
            <div className=&quot;w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-lg flex items-center justify-center&quot;>
              <span className=&quot;text-white font-bold text-lg&quot;>Z</span>
            </div>
            <span className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent&quot;>
              Zion Tech Group
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className=&quot;hidden md:flex items-center space-x-8&quot;>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=&quot;text-white/80 hover:text-white transition-colors duration-200&quot;
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className=&quot;hidden md:block&quot;>
            <Button href=&quot;/contact&quot; variant=&quot;primary&quot; size=&quot;sm&quot;>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className=&quot;md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200&quot;>
            <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
},

export default Header,
