import Link from 'next/link';
import dynamic from 'next/dynamic';

<<<<<<< HEAD
const Web3LoginButton = dynamic(() => import('../auth/Web3LoginButton'), { ssr: false });
=======
const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Platform Engineering', href: '/services/it/platform-engineering' },
    { name: 'Cybersecurity', href: '/services/it/cybersecurity' },
  ];

  const products = [
    { name: 'Revenue AI Copilot', href: '/products' },
    { name: 'Cloud FinOps Toolkit', href: '/products' },
    { name: 'SOC-as-a-Service', href: '/products' },
  ];
>>>>>>> origin/services-expansion-2025

export default function EnhancedNavigation() {
  return (
<<<<<<< HEAD
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">Zion</a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/settings/account"><a>Account</a></Link>
          <Web3LoginButton />
        </div>
      </div>
    </nav>
  );
}
=======
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/"><span className="text-gray-600 hover:text-blue-600 transition-colors">Home</span></Link>

            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {products.map((product) => (
                  <Link key={product.name} href={product.href}>
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about"><span className="text-gray-600 hover:text-blue-600 transition-colors">About</span></Link>
            <Link href="/blog"><span className="text-gray-600 hover:text-blue-600 transition-colors">Blog</span></Link>
            <Link href="/talent"><span className="text-gray-600 hover:text-blue-600 transition-colors">Careers</span></Link>
            <Link href="/contact"><span className="text-gray-600 hover:text-blue-600 transition-colors">Contact</span></Link>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact"><span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Get Started</span></Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/"><span className="block py-2 text-gray-600 hover:text-blue-600">Home</span></Link>

              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">{service.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Products</div>
                {products.map((product) => (
                  <Link key={product.name} href={product.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">{product.name}</span>
                  </Link>
                ))}
              </div>

              <Link href="/about"><span className="block py-2 text-gray-600 hover:text-blue-600">About</span></Link>
              <Link href="/blog"><span className="block py-2 text-gray-600 hover:text-blue-600">Blog</span></Link>
              <Link href="/talent"><span className="block py-2 text-gray-600 hover:text-blue-600">Careers</span></Link>
              <Link href="/contact"><span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span></Link>
              <Link href="/contact"><span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">Get Started</span></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
>>>>>>> origin/services-expansion-2025
