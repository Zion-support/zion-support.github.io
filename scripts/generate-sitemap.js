import fs from 'fs';
import path from 'path';


const pages = ['
  { url: '/', priority: '1.0', changefreq: 'daily' },'
  { url: '/about', priority: '0.8', changefreq: 'monthly' },'
  { url: '/services', priority: '0.9', changefreq: 'weekly' },'
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },'
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },'
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },'
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
'
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },'
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },'
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },'
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },'
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
'
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },'
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },'
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },'
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },'
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },
// IT Solutions'
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },'
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },'
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },'
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },'
  { url: '/cybersecurity', priority: '0.7', changefreq: 'weekly' },
  
  // Other pages'
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },'
  { url: '/careers', priority: '0.5', changefreq: 'monthly' },

    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>'
  </url>`).join('\n')}`
</urlset>`;


'`