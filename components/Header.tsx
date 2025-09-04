import NextLink from 'next/link'

const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/micro-saas', label: 'Micro SaaS' },
  { href: '/it-services', label: 'IT Services' },
  { href: '/services/ai-development', label: 'AI Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  return (
    <header className="ztg-header">
      <div className="ztg-container">
        <div className="ztg-brand">
          <NextLink href="/">
            <span>Zion Tech Group</span>
          </NextLink>
        </div>
        <nav className="ztg-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NextLink key={link.href} href={link.href} className="ztg-nav-link">
              {link.label}
            </NextLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

