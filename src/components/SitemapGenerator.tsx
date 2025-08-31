import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Globe, FileText, Code, ExternalLink, 
  Search, Settings, Users, Shield, Cloud, Brain,
  Zap, Rocket, Star, CheckCircle, AlertTriangle
} from 'lucide-react';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  title: string;
  description: string;
  category: string;
}

interface SitemapGeneratorProps {
  enabled: boolean;
}

export function SitemapGenerator({ enabled }: SitemapGeneratorProps) {
  const [sitemapData, setSitemapData] = useState<SitemapUrl[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSitemaps, setGeneratedSitemaps] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    generateSitemapData();
  }, [enabled]);

  const generateSitemapData = () => {
    const baseUrl = 'https://ziontechgroup.com';
    const currentDate = new Date().toISOString().split('T')[0];

    const urls: SitemapUrl[] = [
      // Core Pages
      {
        url: '/',
        lastmod: currentDate,
        changefreq: 'daily',
        priority: 1.0,
        title: 'Home',
        description: 'Zion Tech Group - Leading AI & Technology Solutions',
        category: 'Core'
      },
      {
        url: '/about',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
        title: 'About Us',
        description: 'Learn about Zion Tech Group and our mission',
        category: 'Core'
      },
      {
        url: '/contact',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
        title: 'Contact',
        description: 'Get in touch with Zion Tech Group',
        category: 'Core'
      },
      {
        url: '/services',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.9,
        title: 'Services',
        description: 'Our comprehensive technology services',
        category: 'Core'
      },

      // AI & Machine Learning Services
      {
        url: '/services/ai-business-intelligence',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Business Intelligence',
        description: 'Advanced analytics & ML insights for business',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-compliance-assistant',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Compliance Assistant',
        description: 'Automated regulatory compliance solutions',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-sales-copilot',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Sales Copilot',
        description: 'Intelligent sales optimization platform',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-powered-seo',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI-Powered SEO',
        description: 'Machine learning SEO optimization',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-content-marketing-suite',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Content Marketing Suite',
        description: 'Automated content creation platform',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-customer-support-automation',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Customer Support',
        description: 'Intelligent support automation',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-project-management',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Project Management',
        description: 'AI-driven project optimization',
        category: 'AI & ML'
      },
      {
        url: '/services/ai-financial-analytics',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Financial Analytics',
        description: 'Intelligent financial insights',
        category: 'AI & ML'
      },

      // Cloud & Infrastructure Services
      {
        url: '/services/cloud-devops',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Cloud DevOps',
        description: 'Infrastructure automation & scaling',
        category: 'Cloud & Infrastructure'
      },
      {
        url: '/services/it-infrastructure',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'IT Infrastructure',
        description: 'Enterprise infrastructure solutions',
        category: 'Cloud & Infrastructure'
      },
      {
        url: '/services/finops-advisor',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'FinOps Advisor',
        description: 'Cloud cost optimization',
        category: 'Cloud & Infrastructure'
      },
      {
        url: '/services/cloud-finops-optimizer',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Cloud FinOps Optimizer',
        description: 'Financial operations automation',
        category: 'Cloud & Infrastructure'
      },

      // Cybersecurity Services
      {
        url: '/services/ai-cybersecurity-platform',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'AI Cybersecurity Platform',
        description: 'Advanced AI-powered security',
        category: 'Cybersecurity'
      },
      {
        url: '/services/security-headers-csp',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Security Headers & CSP',
        description: 'Web security hardening',
        category: 'Cybersecurity'
      },
      {
        url: '/services/dsr-portal',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'DSR Privacy Portal',
        description: 'GDPR/CCPA compliance',
        category: 'Cybersecurity'
      },
      {
        url: '/services/zero-trust-network-access',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Zero Trust Network Access',
        description: 'Modern security architecture',
        category: 'Cybersecurity'
      },

      // Emerging Technologies
      {
        url: '/services/quantum-computing',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Quantum Computing',
        description: 'Next-generation computing power',
        category: 'Emerging Technologies'
      },
      {
        url: '/services/iot-edge-computing',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'IoT Edge Computing',
        description: 'Connected device intelligence',
        category: 'Emerging Technologies'
      },
      {
        url: '/services/digital-twin',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Digital Twin Platform',
        description: 'Virtual replica technology',
        category: 'Emerging Technologies'
      },
      {
        url: '/space-tech',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Space Technology',
        description: 'Innovative space solutions',
        category: 'Emerging Technologies'
      },

      // Micro SaaS Solutions
      {
        url: '/services/micro-crm',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Micro CRM',
        description: 'Lightweight customer management',
        category: 'Micro SaaS'
      },
      {
        url: '/services/helpdesk-platform',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
        title: 'Helpdesk Platform',
        description: 'Efficient support system',
        category: 'Micro SaaS'
      },

      // Additional Pages
      {
        url: '/careers',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7,
        title: 'Careers',
        description: 'Join our team at Zion Tech Group',
        category: 'Company'
      },
      {
        url: '/blog',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7,
        title: 'Blog',
        description: 'Latest insights and updates',
        category: 'Content'
      },
      {
        url: '/partners',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.7,
        title: 'Partners',
        description: 'Strategic partnerships and alliances',
        category: 'Company'
      },
      {
        url: '/faq',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6,
        title: 'FAQ',
        description: 'Frequently asked questions',
        category: 'Support'
      },
      {
        url: '/privacy',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.5,
        title: 'Privacy Policy',
        description: 'Our privacy practices',
        category: 'Legal'
      },
      {
        url: '/terms',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.5,
        title: 'Terms of Service',
        description: 'Terms and conditions',
        category: 'Legal'
      },
      {
        url: '/cookies',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.5,
        title: 'Cookie Policy',
        description: 'Cookie usage information',
        category: 'Legal'
      },
      {
        url: '/data-protection',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.5,
        title: 'Data Protection',
        description: 'Data protection and privacy',
        category: 'Legal'
      },
      {
        url: '/accessibility',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.5,
        title: 'Accessibility',
        description: 'Accessibility statement',
        category: 'Legal'
      }
    ];

    setSitemapData(urls);
  };

  const generateXMLSitemap = () => {
    const baseUrl = 'https://ziontechgroup.com';
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    sitemapData.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${url.url}</loc>\n`;
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    return xml;
  };

  const generateHTMLSitemap = () => {
    const categories = [...new Set(sitemapData.map(url => url.category))];
    
    let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
    html += '<meta charset="UTF-8">\n';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    html += '<title>Sitemap - Zion Tech Group</title>\n';
    html += '<meta name="robots" content="noindex, nofollow">\n';
    html += '<style>\n';
    html += 'body{font-family:Arial,sans-serif;max-width:1200px;margin:0 auto;padding:20px;}\n';
    html += '.category{margin-bottom:40px;}\n';
    html += '.category h2{color:#06b6d4;border-bottom:2px solid #06b6d4;padding-bottom:10px;}\n';
    html += '.url-list{list-style:none;padding:0;}\n';
    html += '.url-list li{margin-bottom:15px;padding:15px;background:#f8f9fa;border-radius:8px;}\n';
    html += '.url-list a{color:#2563eb;text-decoration:none;font-weight:600;}\n';
    html += '.url-list a:hover{text-decoration:underline;}\n';
    html += '.url-meta{font-size:14px;color:#6b7280;margin-top:5px;}\n';
    html += '</style>\n</head>\n<body>\n';
    html += '<h1>Sitemap - Zion Tech Group</h1>\n';
    html += '<p>Complete list of all pages on our website.</p>\n\n';
    
    categories.forEach(category => {
      const categoryUrls = sitemapData.filter(url => url.category === category);
      html += `<div class="category">\n`;
      html += `<h2>${category}</h2>\n`;
      html += `<ul class="url-list">\n`;
      
      categoryUrls.forEach(url => {
        html += `<li>\n`;
        html += `<a href="${url.url}">${url.title}</a>\n`;
        html += `<div class="url-meta">\div`;
        html += `Priority: ${url.priority} | `;
        html += `Update Frequency: ${url.changefreq} | `;
        html += `Last Modified: ${url.lastmod}\n`;
        html += `</div>\n`;
        html += `<div class="url-meta">${url.description}</div>\n`;
        html += `</li>\n`;
      });
      
      html += `</ul>\n</div>\n`;
    });
    
    html += '</body>\n</html>';
    
    return html;
  };

  const downloadSitemap = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateAllSitemaps = async () => {
    setIsGenerating(true);
    
    try {
      // Generate XML sitemap
      const xmlSitemap = generateXMLSitemap();
      downloadSitemap(xmlSitemap, 'sitemap.xml', 'application/xml');
      
      // Generate HTML sitemap
      const htmlSitemap = generateHTMLSitemap();
      downloadSitemap(htmlSitemap, 'sitemap.html', 'text/html');
      
      // Generate robots.txt
      const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://ziontechgroup.com/sitemap.xml\n`;
      downloadSitemap(robotsTxt, 'robots.txt', 'text/plain');
      
      setGeneratedSitemaps(['sitemap.xml', 'sitemap.html', 'robots.txt']);
      
      // Auto-submit to search engines
      await submitToSearchEngines();
      
    } catch (error) {
      console.error('Error generating sitemaps:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const submitToSearchEngines = async () => {
    const sitemapUrl = 'https://ziontechgroup.com/sitemap.xml';
    
    // Google Search Console
    try {
      await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    } catch (error) {
      console.log('Google ping failed:', error);
    }
    
    // Bing Webmaster Tools
    try {
      await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    } catch (error) {
      console.log('Bing ping failed:', error);
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      'Core': Globe,
      'AI & ML': Brain,
      'Cloud & Infrastructure': Cloud,
      'Cybersecurity': Shield,
      'Emerging Technologies': Rocket,
      'Micro SaaS': Code,
      'Company': Users,
      'Content': FileText,
      'Support': Search,
      'Legal': Settings
    };
    
    return icons[category] || Globe;
  };

  if (!enabled) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sitemap Generator
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Generate comprehensive sitemaps for better SEO
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800 dark:text-blue-200">Total URLs</span>
          </div>
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            {sitemapData.length}
          </div>
        </div>
        
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800 dark:text-green-200">High Priority</span>
          </div>
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">
            {sitemapData.filter(url => url.priority >= 0.8).length}
          </div>
        </div>
        
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800 dark:text-purple-200">Categories</span>
          </div>
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
            {new Set(sitemapData.map(url => url.category)).size}
          </div>
        </div>
        
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800 dark:text-orange-200">Daily Updates</span>
          </div>
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">
            {sitemapData.filter(url => url.changefreq === 'daily').length}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mb-6">
        <button
          onClick={generateAllSitemaps}
          disabled={isGenerating}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Generating Sitemaps...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Generate All Sitemaps</span>
            </div>
          )}
        </button>
      </div>

      {/* Generated Files */}
      {generatedSitemaps.length > 0 && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800 dark:text-green-200">
              Sitemaps Generated Successfully!
            </span>
          </div>
          <div className="text-sm text-green-700 dark:text-green-300">
            The following files have been generated and downloaded:
          </div>
          <ul className="mt-2 space-y-1">
            {generatedSitemaps.map((file, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-green-700 dark:text-green-300">
                <FileText className="w-4 h-4" />
                <span>{file}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sitemap Preview */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sitemap Preview
          </h3>
          
          {Object.entries(
            sitemapData.reduce((acc, url) => {
              if (!acc[url.category]) acc[url.category] = [];
              acc[url.category].push(url);
              return acc;
            }, {} as { [key: string]: SitemapUrl[] })
          ).map(([category, urls]) => (
            <div key={category} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-2">
                  {React.createElement(getCategoryIcon(category), { className: "w-5 h-5 text-gray-600 dark:text-gray-400" })}
                  <h4 className="font-semibold text-gray-900 dark:text-white">{category}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">({urls.length} URLs)</span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-600">
                {urls.map((url, index) => (
                  <div key={index} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <a
                            href={url.url}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {url.title}
                          </a>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {url.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>Priority: {url.priority}</span>
                          <span>Frequency: {url.changefreq}</span>
                          <span>Updated: {url.lastmod}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}