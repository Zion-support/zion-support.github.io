<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
=======



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

const servicesDropdown = [
  {
    title: 'AI & Machine Learning,
    description: Custom AI solutions and ML models',
    href: '/services/ai-ml,
    icon: Brain
  },
  {
    title: Cloud Solutions',
    description: 'Scalable cloud infrastructure,
    href: /services/cloud',
    icon: Cloud
  },
  {
    title: 'Cybersecurity,
    description: Advanced security solutions',
    href: '/services/cybersecurity,
    icon: Shield
  },
  {
    title: Data Analytics',
    description: 'Business intelligence and insights,
    href: /services/analytics',
    icon: BarChart3
  },
  {
    title: 'Web Development,
    description: Modern web applications',
    href: '/services/web-development,
    icon: Code
  },
  {
    title: Database Solutions',
    description: 'Database design and optimization,
    href: /services/database',
    icon: Database
  }
];

const solutionsDropdown = [
  {
    title: 'Digital Transformation,
    description: Complete business modernization',
    href: '/solutions/digital-transformation,
    icon: Zap
  },
  {
    title: Enterprise Solutions',
    description: 'Large-scale business systems,
    href: /solutions/enterprise',
    icon: Building
  },
  {
    title: 'Startup Acceleration,
    description: Rapid growth and scaling',
    href: '/solutions/startup,
    icon: Rocket
  }
];

const industriesDropdown = [
  { name: Healthcare', href: '/industries/healthcare, icon: Stethoscope },
  { name: Finance', href: '/industries/finance, icon: Landmark },
  { name: Education', href: '/industries/education, icon: GraduationCap },
  { name: Manufacturing', href: '/industries/manufacturing, icon: Factory },
  { name: Retail', href: '/industries/retail, icon: ShoppingCart },
  { name: Government', href: '/industries/government, icon: Building }
];

  { name: Services', href: '/services },
  { name: Solutions', href: '/solutions },
  { name: Industries', href: '/industries },
  { name: About', href: '/about },
  { name: Contact', href: '/contact }
];

export default function Header() {

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6



                    <div className="p-6>
                      <div className=grid grid-cols-2 gap-4">
                        {servicesDropdown.map((service) => (
                          <Link key={service.title} href={service.href} className="group>
                            <div className=flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <service.icon className="w-6 h-6 text-blue-600 mt-1 />
                              <div>
                                <h3 className=font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                                <p className="text-sm text-gray-600>{service.description}</p>
                              </div>
                            </div>

                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className=lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6 /> : <Menu className=w-6 h-6" />}
          </button>

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: auto' }}
              exit={{ opacity: 0, height: 0 }}

              className="lg:hidden mt-4 border-t border-gray-200 pt-4
            >
              {navigation.map((item) => (
                <div key={item.name} className=mb-2">
                  <div className="flex items-center justify-between>
                    <Link
                      href={item.href}
                      className=text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="p-1
                      >

                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className=ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link

                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>


=======
              className=md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
}
export default Header;

=======
    </header>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
=======
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );

=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
=======
}
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
