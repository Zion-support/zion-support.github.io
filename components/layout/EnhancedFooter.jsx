
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
import Link from 'next/link';
<<<<<<< HEAD

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const EnhancedFooter = () => {
<<<<<<< HEAD
  const currentYear = new Date().getFullYear();

=======
import Link from 'next / link';
;
const EnhancedFooter = () =>: any {
  const current_year = new Date ().getFullYear ();
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <footer className='bg - gray - 900 text - white'>;
      {/* Main Footer Content */}
      <div className='container mx - auto px - 4 py - 16'>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
          {/* Company Info */}
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
  const currentYear = new Date().getFullYear()
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const currentYear = new Date().getFullYear(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <footer className="bg - gray - 900 text - white">;
      {/* Main Footer Content */}
      <div className="container mx - auto px - 4 py - 16">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
          {/* Company Info */}
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            </ul>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          </div>
          {/* Company */}
          <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
=======
            <h3 className="text-lg font-semibold mb-4">Company</h3>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/talent" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            </ul>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      <div className='border-t border-gray-700 py-6'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-gray-300 text-sm'>
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>          </div>      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy, {currentYear} Zion Tech Group. All rights reserved.</p>
<<<<<<< HEAD
=======
        </div>
      </div>
    </footer>

);
}
export default EnhancedFooter;}
export default EnhancedFooter;

=======
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy, {currentYear} Zion Tech Group. All rights reserved.</p>
          </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default EnhancedFooter;},
=======
},
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default EnhancedFooter;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
