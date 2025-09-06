<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Leading technology solutions provider for modern businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2" role="list">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">AI Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">IT Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">Cloud Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2" role="list">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
=======
import { 
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ChevronUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === '' || envVar === '#' || envVar === '/') {
    return fallback;
  }
  return envVar;
}

const TWITTER_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
  'https://twitter.com/ZionTechGroup'
);
const LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  'https://linkedin.com/company/ziontechgroup'
);
const FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  'https://facebook.com/ZionTechGroup'
);
const INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  'https://instagram.com/ZionTechGroup'
);
const GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  'https://github.com/ZionTechGroup'
);

const Footer: React.FC = () => {
  return (
    <footer className='bg-card border-t border-primary/20 pt-12 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <div className='space-y-4'>
            <div className='mb-4'>
              <span className='text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
                ZION
              </span>
            </div>
            <p
              className='text-foreground/80 mb-4'
              style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}
            >
              The world&apos;s first free marketplace dedicated to high-tech and
              artificial intelligence.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href={TWITTER_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Twitter'
                title='Twitter'              >
                <Twitter className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Twitter</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='LinkedIn'
                title='LinkedIn'              >
                <Linkedin className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Facebook'
                title='Facebook'              >
                <Facebook className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='Instagram'
                title='Instagram'              >
                <Instagram className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Instagram</span>
              </a>
              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
                aria-label='GitHub'
                title='GitHub'              >
                <Github className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>GitHub</span>
              </a>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Marketplace
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/marketplace'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Products
                </Link>
              </li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  to='/services'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/talent'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  to='/equipment'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  to='/categories'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to='/green-it'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Green IT
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Company
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/about'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/innovation'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Innovation
                </Link>
              </li>
              <li>
                <Link
                  to='/partners'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to='/careers'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href='/sitemap'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground/80 hover:text-primary transition-colors text-sm'
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4 sm:col-span-2 lg:col-span-1'>
            <h3 className='text-foreground font-semibold mb-4 text-lg'>
              Newsletter
            </h3>
            <p className='text-foreground/80 mb-4 text-sm'>
              Stay updated with the latest news on tech, AI, and marketplace
              opportunities.
            </p>
            <div className='max-w-sm'>
              <div className='text-sm text-gray-500'>
                Newsletter signup coming soon
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-end'>
          <button
            type='button'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className='flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer'
            aria-label='Back to top'
          >
            <ChevronUp className='h-4 w-4' aria-hidden='true' />
            <span>Back to Top</span>
          </button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>

        <div className='mt-12 pt-8 border-t border-primary/20'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-foreground/80 text-sm'>
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights
              reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                to='/privacy'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                to='/terms'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                to='/status'
                className='text-foreground/80 hover:text-primary text-sm transition-colors'
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
