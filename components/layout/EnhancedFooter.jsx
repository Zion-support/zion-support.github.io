<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';

=======


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const EnhancedFooter = () => {

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next / link';
;
const EnhancedFooter = () =>: any {
  const current_year = new Date ().getFullYear ();
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <footer className='bg - gray - 900 text - white'>;
      {/* Main Footer Content */}
      <div className='container mx - auto px - 4 py - 16'>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
          {/* Company Info */}
<<<<<<< HEAD

  const currentYear = new Date().getFullYear()
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
<<<<<<< HEAD


          </div>
          {/* Company */}
          <div>


=======
<<<<<<< HEAD
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/talent" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
<<<<<<< HEAD


          </div>
        </div>
      </div>
      {/* Bottom Footer */}

<<<<<<< HEAD
=======


export default EnhancedFooter;

=======
<<<<<<< HEAD

  return (
    <footer className=&quot;bg-gray-900 text-white&quot;>
      {/* Main Footer Content */}
      <div className=&quot;container mx-auto px-4 py-16&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2&quot;>
            <div className=&quot;flex items-center space-x-2 mb-4&quot;>
              <div className=&quot;w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>Z</span>
              </div>
              <span className=&quot;text-xl font-bold&quot;>Zion Tech Group</span>
            </div>
            <p className=&quot;text-gray-300 mb-6 max-w-md&quot;>
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
          </div>

          {_/* Services */}
          <div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Services</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>AI Development</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Cloud Services</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Blockchain Solutions</Link></li>
              <li><Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Data Analytics</Link></li>
            </ul>
          </div>

          {_/* Company */}
          <div>
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Company</h3>
            <ul className=&quot;space-y-2&quot;>
              <li><Link href=&quot;/about&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>About Us</Link></li>
              <li><Link href=&quot;/talent&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Careers</Link></li>
              <li><Link href=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Contact</Link></li>
              <li><Link href=&quot;/blog&quot; className=&quot;text-gray-300 hover:text-white transition-colors&quot;>Blog</Link></li>

            </ul>
          </div>
        </div>
      </div>
{/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy, {currentYear} Zion Tech Group. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
},
export default EnhancedFooter;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

export default EnhancedFooter;},

export default EnhancedFooter;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
