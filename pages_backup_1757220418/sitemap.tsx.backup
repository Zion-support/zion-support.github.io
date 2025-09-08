// import { GetServerSideProps } from 'next';

<<<<<<< HEAD
export default function sitemap() {
  return (
    <Layout>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-lg text-gray-600">
            Professional sitemap solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
=======
const sitemap_data = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: 'Home' },
      { name: 'About', url: '/about', icon: 'Users' },
      { name: 'Contact', url: '/contact', icon: 'Globe' },
      { name: 'Services', url: '/services', icon: 'Settings' }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: 'Brain' },
      { name: 'IT Services', url: '/it-services', icon: 'Network' },
      { name: 'Micro SaaS', url: '/micro-saas', icon: 'Target' },
      { name: 'Cloud Services', url: '/services/cloud', icon: 'Cloud' },
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: 'Shield' },
      { name: 'Data Analytics', url: '/services/data-analytics', icon: 'BarChart3' }
    ]
  }
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${sitemap_data
       .flatMap(category => category.pages)
       .map(page => {
         return `
       <url>
           <loc>https://ziontechgroup.com${page.url}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
