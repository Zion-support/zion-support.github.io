import React, { useEffect, useState } from 'react';

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapGeneratorProps {
  baseUrl: string;
  urls: SitemapUrl[];
  autoGenerate?: boolean;
  showDownload?: boolean;
}

export const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({
  baseUrl,
  urls,
  autoGenerate = true,
  showDownload = false
}) => {
  const [sitemapXml, setSitemapXml] = useState<string>('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.url}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

    setSitemapXml(xml);
    setIsGenerated(true);

    // Save to localStorage for persistence
    localStorage.setItem('zion-sitemap', xml);
    localStorage.setItem('zion-sitemap-timestamp', new Date().toISOString());

    // Submit to search engines
    submitToSearchEngines();
  };

  const submitToSearchEngines = async () => {
    try {
      // Submit to Google
      await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${baseUrl}/sitemap.xml`)}`);
      
      // Submit to Bing
      await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(`${baseUrl}/sitemap.xml`)}`);
      
      console.log('Sitemap submitted to search engines');
    } catch (error) {
      console.warn('Failed to submit sitemap to search engines:', error);
    }
  };

  const downloadSitemap = () => {
    if (!sitemapXml) return;

    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sitemapXml);
      console.log('Sitemap copied to clipboard');
    } catch (error) {
      console.error('Failed to copy sitemap:', error);
    }
  };

  useEffect(() => {
    if (autoGenerate) {
      generateSitemap();
    }

    // Load from localStorage if available
    const savedSitemap = localStorage.getItem('zion-sitemap');
    const timestamp = localStorage.getItem('zion-sitemap-timestamp');
    
    if (savedSitemap && timestamp) {
      const lastGenerated = new Date(timestamp);
      const now = new Date();
      const hoursSinceLastGenerated = (now.getTime() - lastGenerated.getTime()) / (1000 * 60 * 60);
      
      // Regenerate if older than 24 hours
      if (hoursSinceLastGenerated < 24) {
        setSitemapXml(savedSitemap);
        setIsGenerated(true);
      }
    }
  }, [autoGenerate]);

  if (!showDownload && !isGenerated) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Sitemap Generator
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            XML sitemap for search engine optimization
          </p>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={generateSitemap}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {isGenerated ? 'Regenerate' : 'Generate'}
          </button>
          
          {isGenerated && (
            <>
              <button
                onClick={downloadSitemap}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                Download
              </button>
              
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Copy
              </button>
            </>
          )}
        </div>
      </div>

      {isGenerated && (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sitemap Preview
            </h4>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-white dark:bg-gray-800 p-3 rounded border overflow-x-auto">
              <pre>{sitemapXml}</pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {urls.length}
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                Total URLs
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {baseUrl}
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Base URL
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                XML
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                Format
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
              Next Steps
            </h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Upload sitemap.xml to your website root directory</li>
              <li>• Submit sitemap URL to Google Search Console</li>
              <li>• Submit sitemap URL to Bing Webmaster Tools</li>
              <li>• Add sitemap reference to robots.txt file</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SitemapGenerator;