import { Link } from 'react-router-dom';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const TWITTER_URL = process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL || 'https://twitter.com/ZionTechGroup';
const LINKEDIN_URL = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL || 'https://linkedin.com/company/ziontechgroup';
const FACEBOOK_URL = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL || 'https://facebook.com/ZionTechGroup';
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL || 'https://instagram.com/ziontechgroup';
const GITHUB_URL = process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL || 'https://github.com/ZionTechGroup';

function resolveUrl(envUrl: string | undefined, fallback: string): string {
  if (!envUrl) return fallback;
  if (envUrl.startsWith('http')) return envUrl;
  return `https://${envUrl}`;
}

const TWITTER_URL_RESOLVED = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
  'https://twitter.com/ZionTechGroup'
);
const LINKEDIN_URL_RESOLVED = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  'https://linkedin.com/company/ziontechgroup'
);
const FACEBOOK_URL_RESOLVED = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  'https://facebook.com/ZionTechGroup'
);
const INSTAGRAM_URL_RESOLVED = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  'https://instagram.com/ziontechgroup'
);
const GITHUB_URL_RESOLVED = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  'https://github.com/ZionTechGroup'
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Solutions', href: '/services/iot' },
        { name: 'Quantum Computing', href: '/services/quantum' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'News', href: '/news' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'API Reference', href: '/api' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: TWITTER_URL_RESOLVED, icon: Twitter },
    { name: 'LinkedIn', href: LINKEDIN_URL_RESOLVED, icon: Linkedin },
    { name: 'Facebook', href: FACEBOOK_URL_RESOLVED, icon: Facebook },
    { name: 'Instagram', href: INSTAGRAM_URL_RESOLVED, icon: Instagram },
    { name: 'GitHub', href: GITHUB_URL_RESOLVED, icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading the future of technology with innovative AI solutions, cybersecurity, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;