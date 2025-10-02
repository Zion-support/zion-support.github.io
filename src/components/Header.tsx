import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
const, Heade, r: Rea, c, t.FC = () => {
  con, s, t [isMobileMenuOp, e, n, setIsMobileMenuOp, e, n] = useSta, t, e(fal, s, e);
  return (
<<<<<<< HEAD
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Resources
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </nav>
          </div>
=======
    <header, className="bg-white, shado, w-sm, borde, r-b, borde, r-gr, a, y-200, sticky, top-0 z-50">
      <div, className="container, m, x-auto, p, x-6">
        <div, className="flex, item, s-center, justif, y-betwee, n, h-16">
          <Link, t, o="/" classNa, m, e="flex, item, s-center, spac, e-x-2">
            <span, className="te, x, t-2, x, l">🚀</sp, a, n>
            <span, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">Zion, Tech, Group</sp, a, n>
          </Li, n, k>
          <nav, className="hidden, m, d: flex, item, s-center, spac, e-x-8">
            <Link, t, o="/" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Ho, m, e</Li, n, k>
            <Link, t, o="/servic, e, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Servic, e, s</Li, n, k>
            <Link, t, o="/solutio, n, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Solutio, n, s</Li, n, k>
            <Link, t, o="/resourc, e, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Resourc, e, s</Li, n, k>
            <Link, t, o="/prici, n, g" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Prici, n, g</Li, n, k>
            <Link, t, o="/bl, o, g" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Bl, o, g</Li, n, k>
            <Link, t, o="/abo, u, t" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Abo, u, t</Li, n, k>
            <Link, t, o="/conta, c, t" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">Conta, c, t</Li, n, k>
            <Link, t, o="/conta, c, t" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-6, p, y-2, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s">Get, Starte, d</Li, n, k>
          </n, a, v>
          <butt, o, n
  classNa, m, e="m
  d:hidde, n, p-2"
            onCli, c, k={() => setIsMobileMenuOp, e, n(!isMobileMenuOp, e, n)}
            ar, i, a-lab, e, l="Toggle, mobile, menu"
          >
            <svg, className="w-6 h-6" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
              <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M4, 6h16M4, 12h16M4 18h, 1, 6"  />
            </s, v, g>
          </butt, o, n>
        </d, i, v>
        {isMobileMenuOp, e, n && (
          <div, className="md: hidden, p, y-4, borde, r-t, borde, r-gr, a, y-2, 0, 0">
            <nav, className="flex, fle, x-col, spac, e-y-4">
              <Link, t, o="/" classNa, m, e="te, x, t-gr, a, y-600, hov, e
  r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Ho, m, e</Li, n, k>
              <Link, t, o="/servic, e, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Servic, e, s</Li, n, k>
              <Link, t, o="/solutio, n, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Solutio, n, s</Li, n, k>
              <Link, t, o="/resourc, e, s" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Resourc, e, s</Li, n, k>
              <Link, t, o="/prici, n, g" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Prici, n, g</Li, n, k>
              <Link, t, o="/bl, o, g" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Bl, o, g</Li, n, k>
              <Link, t, o="/abo, u, t" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Abo, u, t</Li, n, k>
              <Link, t, o="/conta, c, t" classNa, m, e="te, x, t-gr, a, y-600, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Conta, c, t</Li, n, k>
              <Link, t, o="/conta, c, t" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-6, p, y-2, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colors, tex, t-cent, e, r" onCli, c, k={() => setIsMobileMenuOp, e, n(fal, s, e)}>Get, Starte, d</Li, n, k>
            </n, a, v>
          </d, i, v>
>>>>>>> 84a13d73df97 (Fix syntax errors and optimize build performance)
        )}
      </d, i, v>
    </head, e, r>
  );
};
export default Header;