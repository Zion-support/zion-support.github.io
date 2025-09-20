function Header() {;
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
        <Link,
          href="/",
          className="font-bold text-lg text-gray-900 hover: text-blue-600 transition-colors focus-visible:focus"
          aria-label="Zion Tech Group - Home",
        >
          Zion Tech Group,
        </Link>
        <div>
          <Link,
            href="/content-showcase",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            Content Library,
          </Link>
          <Link,
            href="/services",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Services,
          </Link>
          <Link,
            href="/case-studies",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Case Studies,
          </Link>
          <Link,
            href="/contact",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Contact,
          </Link>
        </div>
        {/* Mobile menu button */}
        <button,
          className="md: hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:focus"
          aria-label="Toggle menu",
          aria-expanded="false",
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <p>
          </svg>
        </button>
      </nav>
    </header>)
}
function Footer() {;
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">
      <div>
        <div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <div>
              <Link,
                href="/services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                All Services,
              </Link>
              <Link,
                href="/services/micro-saas",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Micro SaaS,
              </Link>
              <Link,
                href="/services/ai-services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                AI Services,
              </Link>
              <Link,
                href="/services/it-services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                IT Services,
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <div>
              <Link,
                href="/",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Home,
              </Link>
              <Link,
                href="/contact",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Contact,
              </Link>
              <a,
                href="https://ziontechgroup.com",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
                target="_blank",
                rel="noopener noreferrer",
              >
                Main Site,
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div>
              <div>Mobile: +1 302 464 0950</div>
              <div>
                Email: <a,
                  href="mailto:kleber@ziontechgroup.com",
                  className="hover:text-blue-600 transition-colors focus-visible:focus"
                >
                  kleber@ziontechgroup.com,
                </a>
              </div>
              <div>
                Address: 364 E Main St STE 1008<br />
                Middletown DE 19709,
              </div>
            </div>
          </div>
        </div>
        <div>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.,
        </div>
      </div>
    </footer>
