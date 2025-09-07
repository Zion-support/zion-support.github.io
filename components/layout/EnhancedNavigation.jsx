<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import React, { useState } from 'react';
<<<<<<< HEAD
const EnhancedNavigation = () => {}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD

import Link from 'next/link';
=======
'
import Link from 'next / link';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
const EnhancedNavigation = () =>: any {}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
;
  return ('
    <nav className='bg - white shadow - lg sticky top - 0 z - 50'>;'
      <div className='container mx - auto px - 4'>;'
        <div className='flex justify - between items - center py - 4'>;
          {/* Logo */}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
'
          <Link href='/' className='flex items - center space - x-2'>;'
            <div className='w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center'>;'
              <span className='text - white font - bold text - xl'>Z</span>;
            </div>;'
            <span className='text - xl font - bold text - gray - 800'>;
              Zion Tech Group;
            </span>;
          </Link>;
          {/* Desktop Navigation */}'
          <div className='hidden lg:flex items - center space - x-8'>;
            <Link;'
              href='/';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Home;
            </Link>;
            <Link;'
              href='/services';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Services;
            </Link>;
            <Link;'
              href='/products';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Products;
            </Link>;
            <Link;'
              href='/about';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              About;
            </Link>;
            <Link;'
              href='/blog';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Blog;
            </Link>;
            <Link;'
              href='/talent';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Careers;
            </Link>;
            <Link;'
              href='/contact';'
              className='bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue - 700 transition - colors';
            >              Get Startedconst EnhancedNavigation = () =>: any {}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),
            >
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
<<<<<<< HEAD
    <nav className="bg - white shadow - lg sticky top-0 z-50">;
      <div className="container mx-auto px-4">;
        <div className="flex justify - between items-center py-4">;
=======
    <nav className="bg - white shadow - lg sticky top - 0 z - 50">;"
      <div className="container mx - auto px - 4">;"
        <div className="flex justify - between items - center py - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
;
const EnhancedNavigation = () =>: any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
;
  return (
    <nav className="bg - white shadow - lg sticky top-0 z-50">;
      <div className="container mx-auto px-4">;
        <div className="flex justify - between items-center py-4">;
=======
  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
=======
const EnhancedNavigation = (
 ;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <nav className=\"bg - white shadow - lg sticky top-0 z-50\" />;
      <div className=\"container mx-auto px-4\" />;
        <div className=\"flex justify - between items-center py-4\" />;) => {
  return $3;}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {/* Logo */}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >"
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>

          <Link href=\"/\" className=\"flex items-center space-x-2\" />
            <div className=\"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center\" />
              <span className=\"text-white font-bold text-xl\" />Z</span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
          </Link>
<<<<<<< HEAD
const EnhancedNavigation = () => {const [isMobileMenuOpen, setIsMobileMenuOpen]  = useState(false)import Link from 'next/link';const EnhancedNavigation = () =>: any {const [isMobileMenuOpen, setIsMobileMenuOpen]  = useState (false)return (<nav className='bg - white shadow - lg sticky top - 0 z - 50'>;
      <div className='container mx - auto px - 4'>;
        <div className='flex justify - between items - center py - 4'>;
          {/* Logo */}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),<Link href='/' className='flex items - center space - x-2'>;
            <div className='w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center'>;
              <span className='text - white font - bold text - xl'>Z</span>;
            </div>;
            <span className='text - xl font - bold text - gray - 800'>;
              Zion Tech Group;
            </span>;
          </Link>;
<<<<<<< HEAD
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            <Link;
              href='/';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Home;
            </Link>;
            <Link;
              href='/services';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Services;
            </Link>;
            <Link;
              href='/products';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Products;
            </Link>;
            <Link;
              href='/about';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              About;
            </Link>;
            <Link;
              href='/blog';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Blog;
            </Link>;
            <Link;
              href='/talent';
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Careers;
            </Link>;
            <Link;
              href='/contact';
              className='bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue - 700 transition - colors';
            >              Get Startedconst EnhancedNavigation = () =>: any {const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),>;
  return (<nav className="bg - white shadow - lg sticky top-0 z-50">;
      <div className="container mx-auto px-4">;
        <div className="flex justify - between items-center py-4">;
          {/* Logo */}onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >;
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              Home;
            </Link>;
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              Services;
            </Link>;
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              Products;
            </Link>;
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              About;
            </Link>;
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              Blog;
            </Link>;
            <Link href="/talent" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">;
              Careers;
            </Link>;
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">;
              Get Started;
            </Link>;
          </div>;
=======
          {/* Desktop Navigation */}'
          <div className='hidden lg:flex items - center space - x-8'>;
            <Link;'
              href='/';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Home;
            </Link>;
            <Link;'
              href='/services';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Services;
            </Link>;
            <Link;'
              href='/products';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Products;
            </Link>;
            <Link;'
              href='/about';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              About;
            </Link>;
            <Link;'
              href='/blog';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Blog;
            </Link>;
            <Link;'
              href='/talent';'
              className='text - gray - 600 hover:text - blue - 600 font - medium transition - colors';
            >;
              Careers;
            </Link>;
            <Link;'
              href='/contact';'
              className='bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue - 700 transition - colors';
            >              Get Startedconst EnhancedNavigation = () =>: any {}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),
            >
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

          {/* Logo */}

          <Link href=\"/\" className=\"flex items-center space-x-2\"    />
            <div className=\"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center\"    />
              <span className=\"text-white font-bold text-xl\"    />Z</span>
            </div>
            <span className=\"text-xl font-bold text-gray-800\"    />Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
=======
          {/* Desktop Navigation */}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/talent" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          {/* Mobile menu button */}
          <button;
className='lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100';
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >;
            <svg;
              className='w-6 h-6';
              fill='none';
              stroke='currentColor';
              viewBox='0 0 24 24';
            >;
              <path;
                strokeLinecap='round';
                strokeLinejoin='round';
                strokeWidth={2}
            >              Get Startedconst EnhancedNavigation = () =>: any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),
  return (
    <nav className="bg - white shadow - lg sticky top-0 z-50">;
      <div className="container mx-auto px-4">;
        <div className="flex justify - between items-center py-4">;
          {/* Logo */}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
=======
          {/* Mobile menu button */}
          <button
className='lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
<<<<<<< HEAD
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Services
              </Link>
              <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Products
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Blog
              </Link>
              <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Careers
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Contact
              </Link>
=======
<<<<<<< HEAD
              </Link>"
=======
              </Link>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Services;
              </Link>"
              <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Products;
              </Link>"
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                About;
              </Link>"
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Blog;
              </Link>"
              <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Careers;
              </Link>"
              <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
<div className='lg:hidden border-t border-gray-200 py-4'>
            <div className='space-y-2'>
              <Link
                href='/'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                Home
              </Link>
              <Link
                href='/services'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                Services
              </Link>
              <Link
                href='/products'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                Products
              </Link>
              <Link
                href='/about'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                About
              </Link>
              <Link
                href='/blog'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                Blog
              </Link>
              <Link
                href='/talent'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
                Careers
              </Link>
              <Link
                href='/contact'
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Contact
=======
                Contact;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </Link>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
          </div>
        )}
      </div>
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD
                d='M4 6h16M4 12h16M4 18h16';
              />;
            </svg>;
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (</Link>;
              <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
                Services;
              </Link>;
              <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
                Products;
              </Link>;
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
                About;
              </Link>;
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
                Blog;
              </Link>;
              <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
                Careers;
              </Link>;
              <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">;
<div className='lg:hidden border-t border-gray-200 py-4'>;
            <div className='space-y-2'>;
              <Link;
                href='/';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Home;
              </Link>;
              <Link;
                href='/services';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Services;
              </Link>;
              <Link;
                href='/products';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Products;
              </Link>;
              <Link;
                href='/about';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                About;
              </Link>;
              <Link;
                href='/blog';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Blog;
              </Link>;
              <Link;
                href='/talent';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Careers;
              </Link>;
              <Link;
                href='/contact';
                className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md';
              >;
                Contact;
              </Link>;
            </div>;
          </div>;
        )}
      </div>;
    </nav>;
=======
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

          <Link href="/" className="flex items-center space-x-2">;
            <div className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items-center justify-center">;
              <span className="text - white font-bold text-xl">Z</span>;
            </div>;
            <span className="text - xl font - bold text-gray-800">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            <Link href="/" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              Home;
            </Link>;
            <Link href="/services" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              Services;
            </Link>;
            <Link href="/products" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              Products;
            </Link>;
            <Link href="/about" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              About;
            </Link>;
            <Link href="/blog" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              Blog;
            </Link>;
            <Link href="/talent" className="text - gray - 600 hover:text - blue - 600 font-medium transition-colors">;
              Careers;
            </Link>;
            <Link href="/contact" className="bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue-700 transition-colors">;
<<<<<<< HEAD
=======
=======
"
          <Link href="/" className="flex items - center space - x-2">;"
            <div className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center">;"
              <span className="text - white font - bold text - xl">Z</span>;
            </div>;"
            <span className="text - xl font - bold text - gray - 800">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}"
          <div className="hidden lg:flex items - center space - x-8">;"
            <Link href="/" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Home;
            </Link>;"
            <Link href="/services" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Services;
            </Link>;"
            <Link href="/products" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Products;
            </Link>;"
            <Link href="/about" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              About;
            </Link>;"
            <Link href="/blog" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Blog;
            </Link>;"
            <Link href="/talent" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Careers;
            </Link>;"
            <Link href="/contact" className="bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue - 700 transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
<<<<<<< HEAD
          <button;
            className='lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg - gray - 100';
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;
=======
          <button;'
            className='lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg - gray - 100';
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <svg;
              className='w - 6 h - 6';
              fill='none';
              stroke='current_color';
              viewBox='0 0 24 24';
            >;
              <path;
                strokeLinecap='round';
                strokeLinejoin='round';
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16';
              />            </svg>            className="lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg-gray-100";
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;
            <svg className="w-6 h-6" fill="none" stroke="current_color" viewBox="0 0 24 24">;
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;
<<<<<<< HEAD
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (<div className='lg:hidden border - t border - gray - 200 py - 4'>;
            <div className='space - y-2'>;
              <Link;
                href='/';
=======
=======
            <svg;'
              className='w - 6 h - 6';'
              fill='none';'
              stroke='current_color';'
              view_box='0 0 24 24';
            >;
              <path;'
                stroke_linecap='round';'
                stroke_linejoin='round';
                stroke_width={2}'
                d='M4 6h16M4 12h16M4 18h16';"
              />            </svg>            className="lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg - gray - 100";
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;"
            <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24">;"
              <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && ('
          <div className='lg:hidden border - t border - gray - 200 py - 4'>;'
            <div className='space - y-2'>;
              <Link;'
                href='/';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Home;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/services';
=======
              <Link;'
                href='/services';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Services;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/products';
=======
              <Link;'
                href='/products';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Products;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/about';
=======
              <Link;'
                href='/about';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                About;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/blog';
=======
              <Link;'
                href='/blog';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Blog;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/talent';
=======
              <Link;'
                href='/talent';'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Careers;
              </Link>;
<<<<<<< HEAD
              <Link;
                href='/contact';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >                Contact                Home;
=======
              <Link;'
                href='/contact';'
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >                Contact                Home;
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </Link>;
              <Link href="/services" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
                Services;
              </Link>;
              <Link href="/products" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
                Products;
              </Link>;
              <Link href="/about" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
                About;
              </Link>;
              <Link href="/blog" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
                Blog;
              </Link>;
              <Link href="/talent" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
                Careers;
              </Link>;
              <Link href="/contact" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray-50 rounded-md">;
<<<<<<< HEAD
=======
=======
              </Link>;"
              <Link href="/services" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Services;
              </Link>;"
              <Link href="/products" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Products;
              </Link>;"
              <Link href="/about" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                About;
              </Link>;"
              <Link href="/blog" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Blog;
              </Link>;"
              <Link href="/talent" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Careers;
              </Link>;"
              <Link href="/contact" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                Contact;
              </Link>;
            </div>;
          </div>)}
      </div>;
    </nav>);
}
export default EnhancedNavigation;}
<<<<<<< HEAD
export default EnhancedNavigation;
    </nav>)}
export default EnhancedNavigation;})}export default EnhancedNavigation;
import Link from 'next/link';
const EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),

  return (
<<<<<<< HEAD
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/talent" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Home
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Services
              </Link>
              <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Products
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Blog
              </Link>
              <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Careers
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
},

export default EnhancedNavigation;
=======
    <nav className = $2;
export default EnhancedNavigation,
=======
  )
};
export default EnhancedNavigation;
<<<<<<< HEAD

=======
{
  /* Logo */ 
}<Link href="/" className="flex items-center space-x-2" > <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" > <span className="text-white font-bold text-xl" >Z</span> </div> <span className="text-xl font-bold text-gray-800" >Zion Tech Group</span> </Link> Home </Link> <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors" > Services </Link> <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors" > Products </Link> <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors" > About </Link> <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors" > Blog </Link> <Link href="/talent" className="text-gray-600 hover:text-blue-600 font-medium transition-colors" > Careers </Link> <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors" > Get Started </Link> </div> {
  /* Mobile menu button */ 
}<button </svg> </button> </div> Home </Link> <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > Services </Link> <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > Products </Link> <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > About </Link> <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > Blog </Link> <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > Careers </Link> <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md" > Contact </Link> </div> </div>) 
}</div> </nav>) 
}
export default EnhancedNavigation
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
);
}
export default EnhancedNavigation;}
export default EnhancedNavigation;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
  )
};
origin/cursor/automate-test-improve-and-merge-code-2533
export default EnhancedNavigation;
'"
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
