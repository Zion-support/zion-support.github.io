import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <footer className='bg-black/40 backdrop-blur-md border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center text-gray-40o0'>
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <div className='mt-4 flex justify-center space-x-6'>
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='hover:text-white transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
