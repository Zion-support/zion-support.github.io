const serviceCategories = [
  {
    title: 'AI & Machine Learning'
    icon: Brain
    services: [
  },];      { name: 'DevOps Automation', href: '/devops-automation' }
    ];
  }
];
  }
];
;
const quick_links = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Rocket },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Privacy', href: '/privacy', icon: Shield }
];
const footerSections = [
  {
    title: 'Company'
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Leadership Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
  {
    title: 'Solutions',
    links: [;
      { name: 'AI Services', href: '/ai - services' },
      { name: 'Quantum Technology', href: '/quantum - technology' },
      { name: 'IT Infrastructure', href: '/it - infrastructure' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
  {
    title: 'Resources',
    links: [;
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case - studies' },
      { name: 'White Papers', href: '/white - papers' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
  {
    title: 'Legal',
    links: [;
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data - protection' },
      { name: 'Accessibility', href: '/accessibility' },
];
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50'>      { name: 'Compliance', href: '/compliance' }
    ];
  }
];
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50'>;
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
          {/* Company Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          <div className='lg:col-span-1'>;
            <div className='flex items-center space-x-3 mb-6'>;
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center'>;
                <Rocket className='w-6 h-6 text-white' />;
              </div>;
              <div>;
                <h3 className='text-xl font-bold text-white'>;
                  Zion Tech Group;
                </h3>;
                <p className='text-sm text-gray-400'>Innovating the Future</p>;
              </div>;
            </div>;

            <p className='text-gray-400 mb-6 leading-relaxed'>;
              Leading the revolution in AI, quantum computing, and autonomous;
              technology solutions. Transforming businesses with cutting-edge;
              innovation.;
            </p>;

            {/* Contact Information */}
            <div className='space-y-3 mb-6'>;
              <div className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors'>;
                <Phone className='w-4 h-4' />;
                <a href={`tel:${contactInfo && contactInfo.mobile}`} className='text-sm'>;
                  {contactInfo && contactInfo.mobile}
                </a>;
              </div>;
              <div className='flex items-center space-x-3 text-gray-400 hover:text-white transition-colors'>;
                <Mail className='w-4 h-4' />;
                <a href={`mailto:${contactInfo && contactInfo.email}`} className='text-sm'>;
                  {contactInfo && contactInfo.email}
                </a>;
              </div>;
              <div className='flex items-center space-x-3 text-gray-400'>;
                <MapPin className='w-4 h-4' />;
                <span className='text-sm'>{contactInfo && contactInfo.address}</span>              </div>            </div>;

            {/* Social Links */}
            {/* Social Links */}
            <div className='flex space-x-4'>;
              {socialLinks && socialLinks.map(social => (;
                <a
                  key={social && social.name}
                  href={social && social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social && social.color} transition-all duration-200 hover:bg-slate-700/50`}>;
                  <social && social.icon className='w-5 h-5' />                </a>                <a
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social && social.color} transition-all duration-200 hover:bg-slate-700/50`}>;
                  <social && social.icon className="w-5 h-5" />;
                </a>;
              ))}
          {/* Service Categories */}
          <div className='lg:col-span-1'>;
            <h4 className='text-lg font-semibold text-white mb-6'>;
              Our Services;
            </h4>;
            <div className='space-y-4'>;
              {serviceCategories && serviceCategories.map((category, index) => (;
                <div key={index}>;
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>;
                    {category && category.title}
                  </h5>;
                  <ul className='space-y-2'>;
                    {category && category.services.map(service => (;
                      <li key={service && service.name}>;
                        <Link
                          href={service && service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group'>;
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />                          <span>{service && service.name}</span>              {serviceCategories && serviceCategories.map((category, index) => (;
                <div key={index}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{category && category.title}</h5>;
                  <ul className="space-y-2">;
                    {category && category.services.map((service) => (;
                      <li key={service && service.name}>;
                        <Link
                          href={service && service.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">;
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />;
                          <span>{service && service.name}</span>;
                        </Link>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              ))}
              ))}
          {/* Footer Sections */}
          <div className='lg:col-span-1'>;
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>;
            <div className='space-y-4'>;
              {footerSections && footerSections.map(section => (;
                <div key={section && section.title}>;
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>;
                    {section && section.title}
                  </h5>;
                  <ul className='space-y-2'>;
                    {section && section.links.map(link => (;
                      <li key={link && link.name}>;
                        <Link
                          href={link && link.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200'>                <div key={section && section.title}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section && section.title}</h5>;
                  <ul className="space-y-2">;
                    {section && section.links.map((link) => (;
                      <li key={link && link.name}>;
                        <Link
                          href={link && link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200">;
                          {link && link.name}
                        </Link>;
                      </li>;
                          href={link.href}
                          className="text - sm text - gray - 400 hover:text - white transition - colors duration - 200";
                        >;
                          {link.name}
                    ))}
                  </ul>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'>;
                Privacy Policy;
              </Link>;
              <Link
                href='/terms'
                className='hover:text-white transition-colors'>;
                Terms of Service;
              </Link>;
              <Link
                href='/cookies'
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Signup */}
              Get the latest insights on AI, quantum computing, and autonomous;
              technology. Join our newsletter for exclusive updates and industry;
              insights.;
            </p>;
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and autonomous technology.
              Join our newsletter for exclusive updates and industry insights.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">
              />;
              <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>                Subscribe              Stay Updated with Innovation;
            </h3>;
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">;
              Get the latest insights on AI, quantum computing, and autonomous technology. ;
              Join our newsletter for exclusive updates and industry insights.;
            </p>;
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
};

export default UltraFuturisticFooter2029;  );
};

export default UltraFuturisticFooter2029;
    </footer>);
}
;
export default UltraFuturisticFooter2029);
}
;
export default UltraFuturisticFooter2029;
;
