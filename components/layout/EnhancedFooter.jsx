<<<<<<< HEAD
=======

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
import React from 'react';


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





const EnhancedFooter = () => {

import Link from 'next / link';
;
const EnhancedFooter = () =>: any {
  const current_year = new Date ().getFullYear ();
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <footer className='bg - gray - 900 text - white'>;
      {/* Main Footer Content */}
      <div className='container mx - auto px - 4 py - 16'>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
          {/* Company Info */}

<<<<<<< HEAD
=======
  const currentYear = new Date().getFullYear()
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const currentYear = new Date().getFullYear(),
          <div className='lg:col - span - 2'>;
            <div className='flex items - center space - x-2 mb - 4'>;
              <div className='w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center'>;
                <span className='text - white font - bold text - xl'>Z</span>;
              </div>;
              <span className='text - xl font - bold'>Zion Tech Group</span>;
            </div>;
            <p className='text - gray - 300 mb - 6 max - w-md'>;
              Leading technology solutions provider helping businesses transform;
              their digital presence with cutting - edge AI, cloud architecture,
              and innovative development services.            </p > const EnhancedFooter = () =>: any {
  const current_year = new Date ().getFullYear (),
  return (
    <footer className="bg - gray - 900 text - white">;
      {/* Main Footer Content */}
      <div className="container mx - auto px - 4 py - 16">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
          {/* Company Info */}
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">Services</h3>
import React from 'react';
import Link from 'next/link';

const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>Z</span>
              </div>
              <span className='text-xl font-bold'>Zion Tech Group</span>
            </div>
            <p className='text-gray-300 mb-6 max-w-md'>
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture
              and innovative development services.            </p>const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Blockchain Solutions
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Data Analytics
                </Link>
              </li>            </ul>            <h3 className="text-lg font-semibold mb-4">Services</h3>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
<<<<<<< HEAD
          </div>
          {/* Company */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/talent'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Blog
                </Link>
              </li>            </ul>            <h3 className="text-lg font-semibold mb-4">Company</h3>
=======


          </div>
          {/* Company */}
          <div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/talent" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
<<<<<<< HEAD


export default EnhancedFooter;

          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className='border-t border-gray-700 py-6'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-gray-300 text-sm'>
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>          </div>      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy, {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>

);
},
export default EnhancedFooter;


export default EnhancedFooter;},

export default EnhancedFooter;
=======


          </div>
        </div>
      </div>
      {/* Bottom Footer */}



export default EnhancedFooter;

          <div className="lg:col - span - 2">;
            <div className="flex items - center space - x-2 mb - 4">;
              <div className="w - 10 h - 10 bg - blue - 600 rounded - lg flex items - center justify - center">;
                <span className="text - white font - bold text - xl">Z</span>;
              </div>;
              <span className="text - xl font - bold">Zion Tech Group</span>;
            </div>;
            <p className="text - gray - 300 mb - 6 max - w-md">;
              Leading technology solutions provider helping businesses transform their digital presence;
              with cutting - edge AI, cloud architecture, and innovative development services.;
            </p>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className='text - lg font - semibold mb - 4'>Services</h3>;
            <ul className='space - y-2'>;
              <li>;
                <Link;
                  href='/services';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  AI Development;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/services';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Cloud Services;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/services';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Blockchain Solutions;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/services';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Data Analytics;
                </Link>;
              </li>            </ul>            <h3 className="text - lg font - semibold mb - 4">Services</h3>;
            <ul className="space - y-2">;
              <li><Link href="/services" className="text - gray - 300 hover:text - white transition - colors">AI Development</Link></li>;
              <li><Link href="/services" className="text - gray - 300 hover:text - white transition - colors">Cloud Services</Link></li>;
              <li><Link href="/services" className="text - gray - 300 hover:text - white transition - colors">Blockchain Solutions</Link></li>;
              <li><Link href="/services" className="text - gray - 300 hover:text - white transition - colors">Data Analytics</Link></li>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className='text - lg font - semibold mb - 4'>Company</h3>;
            <ul className='space - y-2'>;
              <li>;
                <Link;
                  href='/about';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  About Us;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/talent';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Careers;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/contact';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Contact;
                </Link>;
              </li>;
              <li>;
                <Link;
                  href='/blog';
                  className='text - gray - 300 hover:text - white transition - colors';
                >;
                  Blog;
                </Link>;
              </li>            </ul>            <h3 className="text - lg font - semibold mb - 4">Company</h3>;
            <ul className="space - y-2">;
              <li><Link href="/about" className="text - gray - 300 hover:text - white transition - colors">About Us</Link></li>;
              <li><Link href="/talent" className="text - gray - 300 hover:text - white transition - colors">Careers</Link></li>;
              <li><Link href="/contact" className="text - gray - 300 hover:text - white transition - colors">Contact</Link></li>;
              <li><Link href="/blog" className="text - gray - 300 hover:text - white transition - colors">Blog</Link></li>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className='border - t border - gray - 700 py - 6'>;
        <div className='container mx - auto px - 4'>;
          <div className='text - center text - gray - 300 text - sm'>;
            <p>&copy; {current_year} Zion Tech Group. All rights reserved.</p>          </div>      <div className="border - t border - gray - 700 py - 6">;
        <div className="container mx - auto px - 4">;
          <div className="text - center text - gray - 300 text - sm">;
            <p>&copy, {current_year} Zion Tech Group. All rights reserved.</p>;
        </div>;
      </div>;
    </footer>);
}
;
export default EnhancedFooter;},
export default EnhancedFooter;
;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
