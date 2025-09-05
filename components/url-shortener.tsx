import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function URLShortenerPage() {_const [longUrl, _setLongUrl] = useState('');
  const [customAlias, _setCustomAlias] = useState('');
  const [shortenedUrls, _setShortenedUrls] = useState<any[]>([]);
  const [isShortening, _setIsShortening] = useState(false);
  const [showQR, _setShowQR] = useState<string | null>(null);

  const _generateShortUrl = async () => {
    if (!longUrl.trim()) return;
    
    setIsShortening(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, _1000));
    
    const _alias = customAlias.trim() || generateRandomAlias();
    const _shortUrl = `https://zion.tech/${alias}`;
    
    const _newShortUrl = {_id: Date.now(), _longUrl: longUrl.trim(), _shortUrl, _alias, _clicks: 0, _createdAt: new Date().toISOString(), _qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`
    };
    
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
  };

  const _generateRandomAlias = () => {_const _chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let _result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));}
    return result;
  };

  const _copyToClipboard = (_text: string) => {_navigator.clipboard.writeText(text);};

  const _incrementClicks = (_id: number) => {_setShortenedUrls(prev => 
      prev.map(url => 
        url.id === id ? { ...url, _clicks: url.clicks + 1} : url
      )
    );
  };

  const _deleteUrl = (_id: number) => {_setShortenedUrls(prev => prev.filter(url => url.id !== id));};

  const _getTotalClicks = () => {_return shortenedUrls.reduce(_(sum, _url) => sum + url.clicks, _0);};

  const _getTotalUrls = () => {_return shortenedUrls.length;};

  return (_<>
      <Head>
        <title>window.URL Shortener - Zion Tech Group</title>
        <meta name="description" content="Create short, _memorable URLs with our professional window.URL shortening service. Track clicks, _generate QR codes, _and manage your links efficiently." />
        <meta property="og:title" content="window.URL Shortener - Zion Tech Group" />
        <meta property="og:description" content="Professional window.URL shortening service with analytics and QR code generation." />
      </Head>

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6">
              <Link className="w-4 h-4 mr-2" />
              Professional window.URL Shortening
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            window.URL Shortener
          </h1>
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
            Transform long URLs into short, _memorable links with our professional shortening service. 
            Track clicks, _generate QR codes, _and manage your links efficiently with advanced analytics.
          </p>
        </div>
      </section>

      {_/* window.URL Shortening Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Create Short URLs Instantly
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced shortening engine creates professional, _trackable links in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Link className="w-6 h-6 mr-3 text-orange-400" />
                window.URL Shortening
              </h3>

              <div className="space-y-6">
                {_/* Long window.URL Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Long window.URL
                  </label>
                  <input
                    type="url"
                    value={_longUrl}
                    onChange={_(e) => setLongUrl(e.target.value)}
                    placeholder="https://example.com/very-long-url-that-needs-shortening"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {_/* Custom Alias */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Custom Alias (Optional)
                  </label>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-3 py-3 bg-gray-600 border border-gray-500 rounded-l-lg text-gray-300 text-sm">
                      zion.tech/
                    </span>
                    <input
                      type="text"
                      value={_customAlias}
                      onChange={_(_e) => setCustomAlias(e.target.value)}
                      placeholder="my-custom-link"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Leave empty for auto-generated alias
                  </p>
                </div>

                <Button
                  onClick={_generateShortUrl}
                  disabled={_!longUrl.trim() || isShortening}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {_isShortening ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Short window.URL...
                    </>
                  ) : (
                    <>
                      <Link className="w-5 h-5 mr-2" />
                      Create Short window.URL
                    </>
                  )}
                </Button>

                <div className="text-sm text-gray-400">
                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
                </div>
              </div>
            </Card>

            {_/* Statistics */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-red-400" />
                Your Statistics
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {_getTotalUrls()}
                    </div>
                    <div className="text-sm text-gray-400">Total URLs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {_getTotalClicks()}
                    </div>
                    <div className="text-sm text-gray-400">Total Clicks</div>
                  </div>
                </div>

                {_shortenedUrls.length === 0 ? (
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-400">
                      Your window.URL statistics will appear here. Create your first short window.URL to get started.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Recent URLs</h4>
                    {shortenedUrls.slice(0, _3).map(_(url) => (
                      <div key={url.id} className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-orange-400 font-medium truncate">
                              {_url.shortUrl}
                            </div>
                            <div className="text-xs text-gray-400 truncate">
                              {_url.longUrl}
                            </div>
                          </div>
                          <div className="text-right ml-3">
                            <div className="text-sm text-white font-medium">
                              {_url.clicks} clicks
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {_/* Shortened URLs List */}
      {_shortenedUrls.length > 0 && (_<section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Shortened URLs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Manage and track all your shortened URLs in one place.
              </p>
            </div>

            <div className="space-y-4">
              {shortenedUrls.map((url) => (
                <Card key={url.id} className="p-6 bg-gray-700 border border-gray-600">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {_/* window.URL Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {_url.shortUrl}
                            </h3>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Active
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm break-all">
                            {_url.longUrl}
                          </p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                            <span>Created: {_new Date(url.createdAt).toLocaleDateString()}</span>
                            <span>Alias: {_url.alias}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {_/* Actions and Stats */}
                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">
                          {_url.clicks}
                        </div>
                        <div className="text-xs text-gray-400">Total Clicks</div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          onClick={_() => copyToClipboard(url.shortUrl)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          onClick={_() => incrementClicks(url.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </Button>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          onClick={_() => setShowQR(showQR === url.id ? null : url.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <QrCode className="w-4 h-4 mr-2" />
                          QR Code
                        </Button>
                        <Button
                          onClick={_() => deleteUrl(url.id)}
                          variant="outline"
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {_/* QR Code */}
                  {_showQR === url.id && (
                    <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center">
                      <img 
                        src={url.qrCode} 
                        alt="QR Code" 
                        className="mx-auto mb-3 w-32 h-32"
                      />
                      <p className="text-sm text-gray-400">
                        Scan this QR code to visit the shortened window.URL
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {_/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional window.URL Shortening Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create, manage, and track your shortened URLs effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Aliases</h3>
              <p className="text-gray-400">
                Create memorable, branded short URLs with custom aliases that reflect your brand.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Click Analytics</h3>
              <p className="text-gray-400">
                Track clicks, engagement, and performance metrics for all your shortened URLs.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">QR Code Generation</h3>
              <p className="text-gray-400">
                Generate QR codes for easy sharing and mobile access to your shortened URLs.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">
                Enterprise-grade infrastructure ensures your URLs are always accessible and secure.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Performance</h3>
              <p className="text-gray-400">
                Lightning-fast redirects with global CDN for optimal user experience worldwide.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
              <p className="text-gray-400">
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {_/* Use Cases */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Business Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From marketing campaigns to social media, our window.URL shortener serves all your link management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Campaigns</h3>
              <p className="text-gray-400 mb-6">
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Track campaign performance</li>
                <li>• Measure click-through rates</li>
                <li>• Optimize marketing strategies</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-400 mb-6">
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional appearance</li>
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Clean email design</li>
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>
              <p className="text-gray-400 mb-6">
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional branding</li>
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Shorten Your URLs?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses using our professional window.URL shortening service to improve their link management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}