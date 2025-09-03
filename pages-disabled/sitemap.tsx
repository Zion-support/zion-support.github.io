import React from 'react';


const Sitemap: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' }, { name: 'About', url: '/about' }, { name: 'Services', url: '/services' }, { name: 'AI Services', url: '/services/ai-services' }, { name: 'IT Services', url: '/services/it-services' }, { name: 'Micro SaaS', url: '/services/micro-saas' }, { name: 'Solutions', url: '/solutions' }, { name: 'Enterprise', url: '/solutions/enterprise' }, { name: 'Small Business', url: '/solutions/small-business' }, { name: 'Startups', url: '/solutions/startups' }, { name: 'Products', url: '/products' }, { name: 'Contact', url: '/contact' }, { name: 'Careers', url: '/careers' }, { name: 'Privacy', url: '/privacy' }, { name: 'Terms', url: '/terms' } ];

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.url}>
            <a className="text-blue-600 hover:underline" href={l.url}>
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
>>>>>>> origin/main
  )};

export default SitemapPage;