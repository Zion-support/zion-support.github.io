import React from 'react';

const Sitemap: React.FC = () => {
  const sitemapData = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/services', title: 'Services' },
    { path: '/solutions', title: 'Solutions' },
    { path: '/blog', title: 'Blog' },
    { path: '/news', title: 'News' },
    { path: '/contact', title: 'Contact' },
    { path: '/help', title: 'Help' }
  ];

  return (
    <div className="sitemap-page">
      <h1>Site Map</h1>
      <ul>
        {sitemapData.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
