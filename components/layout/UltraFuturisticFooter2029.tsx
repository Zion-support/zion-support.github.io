const serviceCategories = [ {
  title: 'AI & Machine Learning', icon: Brain, services: [ {
  name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' 
}
{
  name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' 
}
{
  name: 'Autonomous Business Operations', href: '/autonomous-business-operations-platform' 
}
{
  name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management' 
}] 
}
{
  title: '🧠 AI & Technology', services: [ {
  name: 'AI Services', href: '/ai-services' 
}
{
  name: 'Machine Learning', href: '/machine-learning' 
}
{
  name: 'Natural Language Processing', href: '/nlp-services' 
}
{
  name: 'Computer Vision', href: '/computer-vision' 
}] 
}
{
  title: '⚛️ Quantum & Emerging Tech', services: [ {
  name: 'Quantum Computing', href: '/quantum-computing' 
}
{
  name: 'Blockchain Solutions', href: '/blockchain-solutions' 
}
{
  name: 'IoT Platforms', href: '/iot-platforms' 
}
{
  name: 'Space Technology', href: '/space-tech' 
}] 
}
{
  title: '🏙️ Enterprise Solutions', services: [ {
  name: 'Enterprise IT', href: '/enterprise-it' 
}
{
  name: 'Cloud Solutions', href: '/cloud-solutions' 
}
{
  name: 'Cybersecurity', href: '/cybersecurity' 
}
{
  name: 'DevOps Automation', href: '/devops-automation' 
}] 
}]
const footerSections = [ {
  title: 'Company', links: [ {
  name: 'About Us', href: '/about' 
}
    ];
  }
];
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50' />;

      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16' />;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12' />;
          {/* Company Info */}
          <div className='lg:col-span-1' />;
            <div className='flex items-center space-x-3 mb-6' />;
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center' />;
                <Rocket className='w-6 h-6 text-white' />;
              </div>;
              <div />;
                <h3 className='text-xl font-bold text-white' />;
                  Zion Tech Group;
                </h3>;
                <p className='text-sm text-gray-400' />Innovating the Future</p>;
              </div>;
            </div>;
            <p className='text-gray-400 mb-6 leading-relaxed' />;
              Leading the revolution in AI, quantum computing, and autonomous;
              technology solutions. Transforming businesses with cutting-edge;
              innovation.;
            </p>;


          {/* Service Categories */}

<div className='lg:col-span-1' />
            <h4 className='text-lg font-semibold text-white mb-6' />
              Our Services;
            </h4>
            <div className='space-y-4' />
              {serviceCategories.map((category, index) => (}
                <div key={index} />
                  <h5 className='text-sm font-medium text-gray-300 mb-3' />
                    {category.title}
                  </h5>
                  <ul className='space-y-2' />
                    {category.services.map(service => (}
                      <li key={service.name} />

                        <Link;
href={service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group' />

                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />;
                          <span />{service.name}</span>;
                        </Link>;
                      </li>;
                    ))}

                  </ul>
                </div>

              ))}
          {/* Service Categories */}
          <div className='lg:col-span-1' />;
            <h4 className='text-lg font-semibold text-white mb-6' />;
              Our Services;
            </h4>;
            <div className='space-y-4' />;
              {serviceCategories && serviceCategories.map((category, index) => (<div key={index} />;
                  <h5 className='text-sm font-medium text-gray-300 mb-3' />;
                    {category && category.title}
                  </h5>;
                  <ul className='space-y-2' />;
                    {category && category.services.map(service => (<li key={service && service.name} />;
                        <Link;
                          href={service && service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group' />;
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover: opacity-100 transition-opacity duration-200' />                          <span />{service && service.nam}
}</span>              {serviceCategories && serviceCategories.map((category, index) => (<div key={index} />;
                  <h5 className="text-sm font-medium text-gray-300 mb-3" />{category && category.title}</h5>;"
                  <ul className="space-y-2" />;
                    {category && category.services.map((service) => (<li key={service && service.name} />;
                        <Link;
                          href={service && service.href}"
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group" />;"
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />;
                          <span />{service && service.name}</span>;
                        </Link>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              ))}
            </div>;
          </div>;{/* Quick Links */}
<div className='lg:col-span-1' />;
            <h4 className='text-lg font-semibold text-white mb-6' />;
              Quick Links;
            </h4>;
            <div className='grid grid-cols-2 gap-2' />;
              {quickLinks.map(link => (<Link;}
                  key={link.name}
                  href={link.href}

                  className='flex items-center space-x-2 text-sm text-gray-400 hover: text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50'
                 />

                  <link.icon className='w-4 h-4' />
                  <span />{link.name}</span>

                </Link>

              ))}
          {/* Footer Sections *}
}
          <div className='lg:col-span-1' />;
            <h4 className='text-lg font-semibold text-white mb-6' />Company</h4>;
            <div className='space-y-4' />;
              {footerSections && footerSections.map(section => (<div key={section && section.title} />;
                  <h5 className='text-sm font-medium text-gray-300 mb-3' />;
                    {section && section.title}
                  </h5>;
                  <ul className='space-y-2' />;
                    {section && section.links.map(link => (<li key={link && link.name} />;
                        <Link;
                          href={link && link.href}
                          className='text-sm text-gray-400 hover: text-white transition-colors duration-200' />                <div key={section && section.titl}
} />;"
                  <h5 className="text-sm font-medium text-gray-300 mb-3" />{section && section.title}</h5>;"
                  <ul className="space-y-2" />;
                    {section && section.links.map((link) => (<li key={link && link.name} />;
                        <Link;
                          href={link && link.href}"
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200" />;
                          {link && link.name}
                        </Link>;
                      </li>;{/* Footer Sections */}
          {/* Footer Sections */}

          {/* Footer Sections */}
<div className='lg: col-span-1' />
            <h4 className='text-lg font-semibold text-white mb-6' />Company</h4>
            <div className='space-y-4' />
              {footerSections.map(section => (}
}
{
  name: 'Careers', href: '/careers' 
}
{
  name: 'Press & Media', href: '/press' 
}
{
  name: 'Partnerships', href: '/partnerships' 
}] 
}
{
  title: 'Solutions', links: [ {
  name: 'AI Services', href: '/ai-services' 
}
{
  name: 'Quantum Technology', href: '/quantum-technology' 
}
{
  name: 'IT Infrastructure', href: '/it-infrastructure' 
}
{
  name: 'Cybersecurity', href: '/cybersecurity' 
}
{
  name: 'Cloud Solutions', href: '/cloud-solutions' 
}
{
  name: 'Blockchain', href: '/blockchain-solutions' 
}] 
}
{
  title: 'Resources', links: [ {
  name: 'Blog', href: '/blog' 
}
{
  name: 'Case Studies', href: '/case-studies' 
}
{
  name: 'White Papers', href: '/white-papers' 
}
{
  name: 'Documentation', href: '/docs' 
}
{
  name: 'API Reference', href: '/api' 
}
{
  name: 'Support Center', href: '/support' 
}] 
}
{
  title: 'Legal', links: [ {
  name: 'Privacy Policy', href: '/privacy' 
}
{
  name: 'Terms of Service', href: '/terms' 
}
{
  name: 'Cookie Policy', href: '/cookies' 
}
{
  name: 'Data Protection', href: '/data-protection' 
}
{
  name: 'Accessibility', href: '/accessibility' 
}
{
  name: 'Compliance', href: '/compliance' 
}] 
}]
</div> <div> <h3 className="text-xl font-bold text-white" >Zion Tech Group</h3> <p className="text-sm text-gray-400" >Innovating the Future</p> </div> </div> > <social.icon className="w-5 h-5" /> </a>) ) 
}</div> </div> </li>) ) 
}</ul> </div>) ) 
}</div> </div>) ) 
}</div> </div> </li>) ) 
}</ul> </div>) ) 
}</div> </div> </div> </div> © 2025 Zion Tech Group. All rights reserved. </div> <div className="flex items-center space-x-6 text-sm text-gray-400" > <Link href="/privacy" className="hover:text-white transition-colors" > Privacy Policy </a> <Link href="/terms" className="hover:text-white transition-colors" > Terms of Service </a> <Link href="/cookies" className="hover:text-white transition-colors" > Cookie Policy </a> </div> </div> </div> </div> Stay Updated with Innovation </h3> <p className="text-gray-400 mb-8 max-w-2xl mx-auto" > Get the latest insights on AI, quantum computing, and autonomous technology. Join our newsletter for exclusive updates and industry insights. </p> <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" /> <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200" > Subscribe </button> </div> </div> </div> </div> </footer>) 
}
export default UltraFuturisticFooter2029