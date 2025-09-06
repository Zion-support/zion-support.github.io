
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
<<<<<<< HEAD
=======


const EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

=======
import Link from 'next / link';
;
const EnhancedNavigation = () =>: any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
;
  return (
    <nav className='bg - white shadow - lg sticky top - 0 z - 50'>;
      <div className='container mx - auto px - 4'>;
        <div className='flex justify - between items - center py - 4'>;
          {/* Logo */}

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star } from 'lucide-react';
const EnhancedNavigation = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
          <Link href='/' className='flex items - center space - x-2'>;
            <div className='w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center'>;
              <span className='text - white font - bold text - xl'>Z</span>;
            </div>;
            <span className='text - xl font - bold text - gray - 800'>;
              Zion Tech Group;
            </span>;
          </Link>;
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
            >              Get Startedconst EnhancedNavigation = () =>: any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false),
  return (
    <nav className="bg - white shadow - lg sticky top - 0 z - 50">;
      <div className="container mx - auto px - 4">;
        <div className="flex justify - between items - center py - 4">;
          {/* Logo */}
<<<<<<< HEAD
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />


          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (


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
<<<<<<< HEAD
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
            <div className=&quot;w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
              <span className=&quot;text-white font-bold text-xl&quot;>Z</span>
            </div>
            <span className=&quot;text-xl font-bold text-gray-800&quot;>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            <Link href=&quot;/&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Home
            </Link>
            <Link href=&quot;/services&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Services
            </Link>
            <Link href=&quot;/products&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Products
            </Link>
            <Link href=&quot;/about&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              About
            </Link>
            <Link href=&quot;/blog&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Blog
            </Link>
            <Link href=&quot;/talent&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Careers
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors&quot;>
              Get Started
            </Link>
          </div>

          {_/* Mobile menu button */}
          <button
            className=&quot;lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100&quot;
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className=&quot;lg:hidden border-t border-gray-200 py-4&quot;>
            <div className=&quot;space-y-2&quot;>
              <Link href=&quot;/&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Home
              </Link>
              <Link href=&quot;/services&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Services
              </Link>
              <Link href=&quot;/products&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Products
              </Link>
              <Link href=&quot;/about&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                About
              </Link>
              <Link href=&quot;/blog&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Blog
              </Link>
              <Link href=&quot;/talent&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Careers
              </Link>
              <Link href=&quot;/contact&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>

import Link from 'next/link';

const EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>Z</span>
            </div>
            <span className='text-xl font-bold text-gray-800'>
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              Services
            </Link>
            <Link
              href='/products'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              Products
            </Link>
            <Link
              href='/about'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              About
            </Link>
            <Link
              href='/blog'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              Blog
            </Link>
            <Link
              href='/talent'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors'
            >
              Careers
            </Link>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'
            >              Get Startedconst EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
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
              />            </svg>            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
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
              >                Contact                Home
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
<<<<<<< HEAD


);
},
export default EnhancedNavigation;


=======


=======
          <Link href="/" className="flex items - center space - x-2">;
            <div className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center">;
              <span className="text - white font - bold text - xl">Z</span>;
            </div>;
            <span className="text - xl font - bold text - gray - 800">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            <Link href="/" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Home;
            </Link>;
            <Link href="/services" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Services;
            </Link>;
            <Link href="/products" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Products;
            </Link>;
            <Link href="/about" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              About;
            </Link>;
            <Link href="/blog" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Blog;
            </Link>;
            <Link href="/talent" className="text - gray - 600 hover:text - blue - 600 font - medium transition - colors">;
              Careers;
            </Link>;
            <Link href="/contact" className="bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - medium hover:bg - blue - 700 transition - colors">;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <button;
            className='lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg - gray - 100';
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;
            <svg;
              className='w - 6 h - 6';
              fill='none';
              stroke='current_color';
              view_box='0 0 24 24';
            >;
              <path;
                stroke_linecap='round';
                stroke_linejoin='round';
                stroke_width={2}
                d='M4 6h16M4 12h16M4 18h16';
              />            </svg>            className="lg:hidden p - 2 rounded - md text - gray - 600 hover:text - gray - 900 hover:bg - gray - 100";
            on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
          >;
            <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24">;
              <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />;
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='lg:hidden border - t border - gray - 200 py - 4'>;
            <div className='space - y-2'>;
              <Link;
                href='/';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Home;
              </Link>;
              <Link;
                href='/services';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Services;
              </Link>;
              <Link;
                href='/products';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Products;
              </Link>;
              <Link;
                href='/about';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                About;
              </Link>;
              <Link;
                href='/blog';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Blog;
              </Link>;
              <Link;
                href='/talent';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >;
                Careers;
              </Link>;
              <Link;
                href='/contact';
                className='block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md';
              >                Contact                Home;
              </Link>;
              <Link href="/services" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Services;
              </Link>;
              <Link href="/products" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Products;
              </Link>;
              <Link href="/about" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                About;
              </Link>;
              <Link href="/blog" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Blog;
              </Link>;
              <Link href="/talent" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Careers;
              </Link>;
              <Link href="/contact" className="block px - 4 py - 2 text - gray - 600 hover:bg - gray - 50 rounded - md">;
                Contact;
              </Link>;
            </div>;
          </div>)}
      </div>;
    </nav>);
}
;
export default EnhancedNavigation;},
export default EnhancedNavigation;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
