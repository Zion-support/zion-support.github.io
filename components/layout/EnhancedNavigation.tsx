
<<<<<<< HEAD
const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          </div>
          <div className="hidden lg:block">
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200>
            <div className="space-y-2">
              <Link href="/">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>
              </Link>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600> {service.name}
                    </span"
                  </Link>
                ))}
              </div>
              <Link href="/about">
                <span className="block py-2 text-gray-600 hover:text-blue-600>About</span> </Link"
              <Link href="/contact">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default EnhancedNavigation;
=======
export default function EnhancedNavigation() {
	return (
		<nav className="w-full border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
				<Link href="/" className="font-semibold">Zion Tech Group</Link>
				<Link href="/services" className="text-gray-600 hover:text-black">Services</Link>
				<Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
				<Link href="/blog" className="text-gray-600 hover:text-black">Blog</Link>
				<Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
			</div>
		</nav>
	);
}
>>>>>>> origin/chore/fix-build-nav-links
