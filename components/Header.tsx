<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="hover:text-blue-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">
              Zion Tech Group
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
=======
      {/* Top Bar */};
      <div className="bg-blue-900text-whitepy-2">;
        <div className="containermx-autopx-4">;
          <div className="flex flex-col: md: flex-row justify-betweenitems-centertext-sm">;
            <div className="flex items-center space-x-6mb-2m: d:mb-0">;
              <div className="flexitems-center">;
                <Phone className="w-4h-4mr-2" />;
                <a href="te: l:+13024640950" className="hove: r:text-blue-300">+1 302 464 0950</a>;
              </div>;
              <div className="flexitems-center">;
                <Mail className="w-4h-4mr-2" />;
                <a href="mailt: o:kleber@ziontechgroup.com" className="hove: r:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>;
            </div>;
            <div className="flexitems-centerspace-x-4">;
              <span className="text-blue-200">24/7 Support Available</span>;
              <div className="flexspace-x-2">;
                <a href="#" className="hove: r:text-blue-300"><Facebook className="w-4h-4" /></a>;
                <a href="#" className="hove: r:text-blue-300"><Twitter className="w-4h-4" /></a>;
                <a href="#" className="hove: r:text-blue-300"><Linkedin className="w-4h-4" /></a>;
                <a href="#" className="hove: r:text-blue-300"><Instagram className="w-4h-4" /></a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className="containermx-autopx-4">;
        <div className="flex justify-betweenitems-centerpy-4">;
          {/* Logo */};
          <Link href="/" className="flexitems-centerspace-x-2">;
            <div className="w-10 h-10 bg-blue-600 rounded-lg flexitems-centerjustify-center">;
              <span className="text-whitefont-boldtext-xl">Z</span>;
            </div>;
            <div>;
              <div className="text-xlfont-boldtext-gray-900">Zion Tech Group</div>;
              <div className="text-xstext-gray-500">Technology Solutions</div>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
            {/* Services Dropdown */};
            <div className="relative group">
              <button
                className="flex items-center text-gray-700: hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>;
              <AnimatePresence>;
                {isServicesOpen && (;
                  <motion.div;
                    initial={{ opacit: y: 0, y: 10 }};
                    animate={{ opacit: y: 1, y: 0 }};
                    exit={{ opacit: y: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsServicesOpen(true)};
                    onMouseLeave={() => setIsServicesOpen(false)};
                  >;
                    <div className="p-6">;
                      <div className="gridgrid-cols-2gap-4">;
                        {servicesDropdown.map((service) => (;
                          <Link key={service.title} href={service.href} className="group">;
                            <div className="flex items-start space-x-3 p-3 rounded-lghove: r:bg-gray-50transition-colors">;
                              <service.icon className="w-6 h-6text-blue-600mt-1" />;
                              <div>;
                                <h3 className="font-semibold text-gray-900group-hove: r:text-blue-600">{service.title}</h3>;
                                <p className="text-smtext-gray-600">{service.description}</p>;
                              </div>;
                            </div>;
                          </Link>))};
            {/* Solutions Dropdown */};
            <div className="relativegroup">;
              <button;
                className="flex items-center text-gray-700: hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsSolutionsOpen(true)};
                onMouseLeave={() => setIsSolutionsOpen(false)};
              >;
                Solutions <ChevronDown className="w-4h-4ml-1" />;
              </button>;
              <AnimatePresence>;
                {isSolutionsOpen && (;
                  <motion.div;
                    initial={{ opacit: y: 0, y: 10 }};
                    animate={{ opacit: y: 1, y: 0 }};
                    exit={{ opacit: y: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsSolutionsOpen(true)};
                    onMouseLeave={() => setIsSolutionsOpen(false)};
                  >;
                    <div className="p-6">;
                      {solutionsDropdown.map((solution) => (;
                        <Link key={solution.title} href={solution.href} className="group block mb-4las: t:mb-0">;
                          <div className="flex items-start space-x-3 p-3 rounded-lghove: r:bg-gray-50transition-colors">;
                            <solution.icon className="w-6 h-6text-blue-600mt-1" />;
                            <div>;
                              <h3 className="font-semibold text-gray-900group-hove: r:text-blue-600">{solution.title}</h3>;
                              <p className="text-smtext-gray-600">{solution.description}</p>;
                            </div>;
                          </div>;
                        </Link>))};
            {/* Industries Dropdown */};
            <div className="relativegroup">;
              <button;
                className="flex items-center text-gray-700: hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsIndustriesOpen(true)};
                onMouseLeave={() => setIsIndustriesOpen(false)};
              >;
                Industries <ChevronDown className="w-4h-4ml-1" />;
              </button>;
              <AnimatePresence>;
                {isIndustriesOpen && (;
                  <motion.div;
                    initial={{ opacit: y: 0, y: 10 }};
                    animate={{ opacit: y: 1, y: 0 }};
                    exit={{ opacit: y: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsIndustriesOpen(true)};
                    onMouseLeave={() => setIsIndustriesOpen(false)};
                  >;
                    <div className="p-4">;
                      {industriesDropdown.map((industry) => (;
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lghove: r:bg-gray-50transition-colors">;
                          <industry.icon className="w-5h-5text-blue-600" />;
                          <span className="text-gray-700group-hove: r:text-blue-600">{industry.name}</span>;
                        </Link>))};
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
          {/* Mobile Menu Button */};
          <button;
            className="l: g:hiddenp-2";
            onClick={() => setIsMenuOpen(!isMenuOpen)};
          >;
            {isMenuOpen ? <X className="h-6w-6" /> : <Menu className="h-6w-6" />};
          </button>;
          <nav className="hidden: md:flexspace-x-8">;
            {navigation.map((item) => (;
              <div key={item.name} className="relativegroup">;
                <Link;
                  href={item.href};
                  {item.name};
                </Link>;
                {item.submenu && (;
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hove: r:opacity-100 group-hove: r:visible transition-allduration-200z-50">;
                    <div className="py-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
          {/* Contact Info */};
          <div className="hidden: lg: flex items-center space-x-4text-smtext-gray-600">;
            <div className="flexitems-center">;
              <Phone className="h-4w-4mr-1" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flexitems-center">;
              <Mail className="h-4w-4mr-1" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
          </div>;
          {/* Mobile menu button */};
          <div className="m: d:hidden">;
            <button;
              onClick={toggleMenu};
              {isMenuOpen ? <X className="h-6w-6" /> : <Menu className="h-6w-6" />};
            </button>;
          </div>;
        </div>;
      {/* Mobile Menu */};
      <AnimatePresence>;
        {isMenuOpen && (;
          <motion.div;
            initial={{ opacit: y: 0, heigh: t: 0 }};
            animate={{ opacit: y: 1, heigh: t: 'auto' }};
            exit={{ opacit: y: 0, heigh: t: 0 }};
        {/* Mobile Navigation */};
        {isMenuOpen && (;
          <div className="m: d:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1: sm:px-3 bg-gray-50rounded-lgmt-2">;
              {navigation.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    href={item.href};
                    className="text-gray-700: hover:text-blue-600 block px-3 py-2text-basefont-medium";
                    onClick={() => setIsMenuOpen(false)};
                  >;
                    {item.name};
                  </Link>;
                  {item.submenu && (;
                    <div className="ml-4space-y-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className="flex items-center text-gray-600: hover:text-blue-600 block px-3py-2text-sm";
                          onClick={() => setIsMenuOpen(false)};
                        >;
                          <subItem.icon className="h-4w-4mr-2" />;
                          {subItem.name};
                              {service.title};
                            </h3>;
                            <p className="text-gray-600text-xs">;
                              {service.description};
                  onClick={closeMenu};
                  className="block w-full bg-blue-600: hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200";
            {isMenuOpen ? <X className="w-6h-6" /> : <Menu className="w-6h-6" />};
          </button>;
        </div>;
        {/* Mobile Menu */};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
      {/* Top Bar */},;
      <div className="bg-blue-900text-whitepy-2">,;
        <div className="containermx-autopx-4">,;
          <div className="flex flex-col: md: flex-row justify-betweenitems-centertext-sm">,;
            <div className="flex items-center space-x-6mb-2m: d:mb-0">,;
              <div className="flexitems-center">,;
                <Phone className="w-4h-4mr-2" />,;
                <a href="te: l:+13024640950" className="hove: r:text-blue-300">+1 302 464 0950</a>,;
              </div>,;
              <div className="flexitems-center">,;
                <Mail className="w-4h-4mr-2" />,;
                <a href="mailt: o:kleber@ziontechgroup.com" className="hove: r:text-blue-300">kleber@ziontechgroup.com</a>,;
              </div>,;
            </div>,;
            <div className="flexitems-centerspace-x-4">,;
              <span className="text-blue-200">24/7 Support Available</span>,;
              <div className="flexspace-x-2">,;
                <a href="#" className="hove: r:text-blue-300"><Facebook className="w-4h-4" /></a>,;
                <a href="#" className="hove: r:text-blue-300"><Twitter className="w-4h-4" /></a>,;
                <a href="#" className="hove: r:text-blue-300"><Linkedin className="w-4h-4" /></a>,;
                <a href="#" className="hove: r:text-blue-300"><Instagram className="w-4h-4" /></a>,;
              </div>,;
            </div>,;
          </div>,;
        </div>,;
      </div>,;
      {/* Main Navigation */},;
      <nav className="containermx-autopx-4">,;
        <div className="flex justify-betweenitems-centerpy-4">,;
          {/* Logo */},;
          <Link href="/" className="flexitems-centerspace-x-2">,;
            <div className="w-10 h-10 bg-blue-600 rounded-lg flexitems-centerjustify-center">,;
              <span className="text-whitefont-boldtext-xl">Z</span>,;
            </div>,;
            <div>,;
              <div className="text-xlfont-boldtext-gray-900">Zion Tech Group</div>,;
              <div className="text-xstext-gray-500">Technology Solutions</div>,;
            </div>,;
          </Link>,;
          {/* Desktop Navigation */},;
            {/* Services Dropdown */},;
            <div className="relative group">;
              <button;
                className="flex items-center text-gray-700: hover:text-blue-600 font-medium transition-colors";
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >;
                Services <ChevronDown className="w-4 h-4 ml-1" />;
              </button>,;
              <AnimatePresence>,;
                {isServicesOpen && (,;
                  <motion.div,;
                    initial={{ opacit: y: 0, y: 10 }},;
                    animate={{ opacit: y: 1, y: 0 }},;
                    exit={{ opacit: y: 0, y: 10 }},;
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xlborderz-50",;
                    onMouseEnter={() => setIsServicesOpen(true)},;
                    onMouseLeave={() => setIsServicesOpen(false)},;
                  >,;
                    <div className="p-6">,;
                      <div className="gridgrid-cols-2gap-4">,;
                        {servicesDropdown.map((service) => (,;
                          <Link key={service.title} href={service.href} className="group">,;
                            <div className="flex items-start space-x-3 p-3 rounded-lghove: r:bg-gray-50transition-colors">,;
                              <service.icon className="w-6 h-6text-blue-600mt-1" />,;
                              <div>,;
                                <h3 className="font-semibold text-gray-900group-hove: r:text-blue-600">{service.title}</h3>,;
                                <p className="text-smtext-gray-600">{service.description}</p>,;
                              </div>,;
                            </div>,;
                          </Link>))},;
            {/* Solutions Dropdown */},;
            <div className="relativegroup">,;
              <button,;
                className="flex items-center text-gray-700: hover:text-blue-600font-mediumtransition-colors",;
                onMouseEnter={() => setIsSolutionsOpen(true)},;
                onMouseLeave={() => setIsSolutionsOpen(false)},;
              >,;
                Solutions <ChevronDown className="w-4h-4ml-1" />,;
              </button>,;
              <AnimatePresence>,;
                {isSolutionsOpen && (,;
                  <motion.div,;
                    initial={{ opacit: y: 0, y: 10 }},;
                    animate={{ opacit: y: 1, y: 0 }},;
                    exit={{ opacit: y: 0, y: 10 }},;
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xlborderz-50",;
                    onMouseEnter={() => setIsSolutionsOpen(true)},;
                    onMouseLeave={() => setIsSolutionsOpen(false)},;
                  >,;
                    <div className="p-6">,;
                      {solutionsDropdown.map((solution) => (,;
                        <Link key={solution.title} href={solution.href} className="group block mb-4las: t:mb-0">,;
                          <div className="flex items-start space-x-3 p-3 rounded-lghove: r:bg-gray-50transition-colors">,;
                            <solution.icon className="w-6 h-6text-blue-600mt-1" />,;
                            <div>,;
                              <h3 className="font-semibold text-gray-900group-hove: r:text-blue-600">{solution.title}</h3>,;
                              <p className="text-smtext-gray-600">{solution.description}</p>,;
                            </div>,;
                          </div>,;
                        </Link>))},;
            {/* Industries Dropdown */},;
            <div className="relativegroup">,;
              <button,;
                className="flex items-center text-gray-700: hover:text-blue-600font-mediumtransition-colors",;
                onMouseEnter={() => setIsIndustriesOpen(true)},;
                onMouseLeave={() => setIsIndustriesOpen(false)},;
              >,;
                Industries <ChevronDown className="w-4h-4ml-1" />,;
              </button>,;
              <AnimatePresence>,;
                {isIndustriesOpen && (,;
                  <motion.div,;
                    initial={{ opacit: y: 0, y: 10 }},;
                    animate={{ opacit: y: 1, y: 0 }},;
                    exit={{ opacit: y: 0, y: 10 }},;
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xlborderz-50",;
                    onMouseEnter={() => setIsIndustriesOpen(true)},;
                    onMouseLeave={() => setIsIndustriesOpen(false)},;
                  >,;
                    <div className="p-4">,;
                      {industriesDropdown.map((industry) => (,;
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lghove: r:bg-gray-50transition-colors">,;
                          <industry.icon className="w-5h-5text-blue-600" />,;
                          <span className="text-gray-700group-hove: r:text-blue-600">{industry.name}</span>,;
                        </Link>))},;
          {/* Mobile Menu Button */},;
          <button,;
            onClick={toggleMenu},;
          {/* Mobile Menu Button */},;
          <button,;
            className="l: g:hiddenp-2",;
            onClick={() => setIsMenuOpen(!isMenuOpen)},;
          >,;
            {isMenuOpen ? <X className="h-6w-6" /> : <Menu className="h-6w-6" />},;
          </button>,;
          <nav className="hidden: md:flexspace-x-8">,;
            {navigation.map((item) => (,;
              <div key={item.name} className="relativegroup">,;
                <Link,;
                  href={item.href},;
                  {item.name},;
                </Link>,;
                {item.submenu && (,;
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hove: r:opacity-100 group-hove: r:visible transition-allduration-200z-50">,;
                    <div className="py-1">,;
                      {item.submenu.map((subItem) => (,;
                        <Link,;
                          key={subItem.name},;
                          href={subItem.href},;
          {/* Contact Info */},;
          <div className="hidden: lg: flex items-center space-x-4text-smtext-gray-600">,;
            <div className="flexitems-center">,;
              <Phone className="h-4w-4mr-1" />,;
              <span>+1 302 464 0950</span>,;
            </div>,;
            <div className="flexitems-center">,;
              <Mail className="h-4w-4mr-1" />,;
              <span>kleber@ziontechgroup.com</span>,;
            </div>,;
          </div>,;
          {/* Mobile menu button */},;
          <div className="m: d:hidden">,;
            <button,;
              onClick={toggleMenu},;
              {isMenuOpen ? <X className="h-6w-6" /> : <Menu className="h-6w-6" />},;
            </button>,;
          </div>,;
        </div>,;
      {/* Mobile Menu */},;
      <AnimatePresence>,;
        {isMenuOpen && (,;
          <motion.div,;
            initial={{ opacit: y: 0, heigh: t: 0 }},;
            animate={{ opacit: y: 1, heigh: t: 'auto' }},;
            exit={{ opacit: y: 0, heigh: t: 0 }},;
        {/* Mobile Navigation */},;
        {isMenuOpen && (,;
          <div className="m: d:hidden">,;
            <div className="px-2 pt-2 pb-3 space-y-1: sm:px-3 bg-gray-50rounded-lgmt-2">,;
              {navigation.map((item) => (,;
                <div key={item.name}>,;
                  <Link,;
                    href={item.href},;
                    className="text-gray-700: hover:text-blue-600 block px-3 py-2text-basefont-medium",;
                    onClick={() => setIsMenuOpen(false)},;
                  >,;
                    {item.name},;
                  </Link>,;
                  {item.submenu && (,;
                    <div className="ml-4space-y-1">,;
                      {item.submenu.map((subItem) => (,;
                        <Link,;
                          key={subItem.name},;
                          href={subItem.href},;
                          className="flex items-center text-gray-600: hover:text-blue-600 block px-3py-2text-sm",;
                          onClick={() => setIsMenuOpen(false)},;
                        >,;
                          <subItem.icon className="h-4w-4mr-2" />,;
                          {subItem.name},;
                              {service.title},;
                            </h3>,;
                            <p className="text-gray-600text-xs">,;
                              {service.description},;
                  onClick={closeMenu},;
                  className="block w-full bg-blue-600: hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200",;
            {isMenuOpen ? <X className="w-6h-6" /> : <Menu className="w-6h-6" />},;
          </button>,;
        </div>,;
        {/* Mobile Menu */},;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
