import React, { useState } from 'react',
import Head from 'next/head'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react',

export default function URLShortenerPage() {
  const [longUrl, setLongUrl] = useState(''),
  const [customAlias, setCustomAlias] = useState(''),
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]),
  const [isShortening, setIsShortening] = useState(false),
  const [showQR, setShowQR] = useState<string | null>(null),

  const generateShortUrl = async () => {
    if (!longUrl.trim()) return,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    
    setIsShortening(true),
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000)),
    
    const alias = customAlias.trim() || generateRandomAlias()
    const shortUrl = `https://zion.tech/${alias}`
    
    const newShortUrl = {
      id: Date.now(),
      longUrl: longUrl.trim(),
      shortUrl,
      alias,
      clicks: 0,
      createdAt: new Date().toISOString(),
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`
    },
    
    
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    setShortenedUrls(prev => [newShortUrl, ...prev]),
    setLongUrl(''),
    setCustomAlias(''),
    setIsShortening(false)
  },

  const generateRandomAlias = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

  const _incrementClicks = (_id: number) => {_setShortenedUrls(prev => 
      prev.map(url => 
        url.id === id ? { ...url, _clicks: url.clicks + 1} : url
      )
    )
  },

  const deleteUrl = (id: number) => {
    setShortenedUrls(prev => prev.filter(url => url.id !== id))
  },

  const getTotalClicks = () => {
    return shortenedUrls.reduce((sum, url) => sum + url.clicks, 0)
  },

  const getTotalUrls = () => {
    return shortenedUrls.length
  },

  return (_<>
      <Head>
        <title>URL Shortener - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;URL Shortener - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Professional URL shortening service with analytics and QR code generation.&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6&quot;>
              <Link className=&quot;w-4 h-4 mr-2&quot; />
              Professional URL Shortening
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            URL Shortener
          </h1>
          <p className=&quot;text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Transform long URLs into short, memorable links with our professional shortening service. 
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.
          </p>
        </div>
      </section>

      {/* URL Shortening Tool */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Create Short URLs Instantly
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Our advanced shortening engine creates professional, trackable links in seconds.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Input Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center&quot;>
                <Link className=&quot;w-6 h-6 mr-3 text-orange-400&quot; />
                URL Shortening
              </h3>

              <div className=&quot;space-y-6&quot;>
                {/* Long URL Input */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Long URL
                  </label>
                  <input
                    type=&quot;url&quot;
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder=&quot;https://example.com/very-long-url-that-needs-shortening&quot;
                    className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent&quot;
                  />
                </div>

                {_/* Custom Alias */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Custom Alias (Optional)
                  </label>
                  <div className=&quot;flex space-x-2&quot;>
                    <span className=&quot;inline-flex items-center px-3 py-3 bg-gray-600 border border-gray-500 rounded-l-lg text-gray-300 text-sm&quot;>
                      zion.tech/
                    </span>
                    <input
                      type=&quot;text&quot;
                      value={customAlias}
                      onChange={(e) => setCustomAlias(e.target.value)}
                      placeholder=&quot;my-custom-link&quot;
                      className=&quot;flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent&quot;
                    />
                  </div>
                  <p className=&quot;text-xs text-gray-400 mt-1&quot;>
                    Leave empty for auto-generated alias
                  </p>
                </div>

                <Button
                  onClick={generateShortUrl}
                  disabled={!longUrl.trim() || isShortening}
                  className=&quot;w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
                >
                  {_isShortening ? (
                    <>
                      <RefreshCw className=&quot;w-5 h-5 mr-2 animate-spin&quot; />
                      Creating Short URL...
                    </>
                  ) : (
                    <>
                      <Link className=&quot;w-5 h-5 mr-2&quot; />
                      Create Short URL
                    </>
                  )}
                </Button>

                <div className=&quot;text-sm text-gray-400&quot;>
                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
                </div>
              </div>
            </Card>

            {/* Statistics */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center&quot;>
                <BarChart3 className=&quot;w-6 h-6 mr-3 text-red-400&quot; />
                Your Statistics
              </h3>

              <div className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-2 gap-4&quot;>
                  <div className=&quot;text-center p-4 bg-gray-700 rounded-lg&quot;>
                    <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>
                      {getTotalUrls()}
                    </div>
                    <div className=&quot;text-sm text-gray-400&quot;>Total URLs</div>
                  </div>
                  <div className=&quot;text-center p-4 bg-gray-700 rounded-lg&quot;>
                    <div className=&quot;text-3xl font-bold text-red-400 mb-2&quot;>
                      {getTotalClicks()}
                    </div>
                    <div className=&quot;text-sm text-gray-400&quot;>Total Clicks</div>
                  </div>
                </div>

                {shortenedUrls.length === 0 ? (
                  <div className=&quot;bg-gray-900 p-6 rounded-lg border border-gray-700 text-center&quot;>
                    <div className=&quot;text-6xl mb-4&quot;>📊</div>
                    <p className=&quot;text-gray-400&quot;>
                      Your URL statistics will appear here. Create your first short URL to get started.
                    </p>
                  </div>
                ) : (
                  <div className=&quot;space-y-3&quot;>
                    <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Recent URLs</h4>
                    {shortenedUrls.slice(0, 3).map((url) => (
                      <div key={url.id} className=&quot;p-3 bg-gray-700 rounded-lg&quot;>
                        <div className=&quot;flex items-center justify-between&quot;>
                          <div className=&quot;flex-1 min-w-0&quot;>
                            <div className=&quot;text-sm text-orange-400 font-medium truncate&quot;>
                              {url.shortUrl}
                            </div>
                            <div className=&quot;text-xs text-gray-400 truncate&quot;>
                              {url.longUrl}
                            </div>
                          </div>
                          <div className=&quot;text-right ml-3&quot;>
                            <div className=&quot;text-sm text-white font-medium&quot;>
                              {url.clicks} clicks
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

      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (
        <section className=&quot;py-20 bg-gray-800&quot;>
          <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
                Your Shortened URLs
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Manage and track all your shortened URLs in one place.
              </p>
            </div>

            <div className=&quot;space-y-4&quot;>
              {shortenedUrls.map((url) => (
                <Card key={url.id} className=&quot;p-6 bg-gray-700 border border-gray-600&quot;>
                  <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
                    {/* URL Info */}
                    <div className=&quot;lg:col-span-2&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex items-center space-x-3 mb-2&quot;>
                            <h3 className=&quot;text-xl font-bold text-white&quot;>
                              {url.shortUrl}
                            </h3>
                            <span className=&quot;px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full&quot;>
                              Active
                            </span>
                          </div>
                          <p className=&quot;text-gray-400 text-sm break-all&quot;>
                            {url.longUrl}
                          </p>
                          <div className=&quot;flex items-center space-x-4 mt-3 text-sm text-gray-400&quot;>
                            <span>Created: {new Date(url.createdAt).toLocaleDateString()}</span>
                            <span>Alias: {url.alias}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions and Stats */}
                    <div className=&quot;flex flex-col space-y-3&quot;>
                      <div className=&quot;text-center p-4 bg-gray-800 rounded-lg&quot;>
                        <div className=&quot;text-2xl font-bold text-orange-400 mb-1&quot;>
                          {url.clicks}
                        </div>
                        <div className=&quot;text-xs text-gray-400&quot;>Total Clicks</div>
                      </div>

                      <div className=&quot;flex space-x-2&quot;>
                        <Button
                          onClick={() => copyToClipboard(url.shortUrl)}
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;flex-1 border-gray-600 text-gray-300 hover:bg-gray-600&quot;
                        >
                          <Copy className=&quot;w-4 h-4 mr-2&quot; />
                          Copy
                        </Button>
                        <Button
                          onClick={() => incrementClicks(url.id)}
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;flex-1 border-gray-600 text-gray-300 hover:bg-gray-600&quot;
                        >
                          <ExternalLink className=&quot;w-4 h-4 mr-2&quot; />
                          Visit
                        </Button>
                      </div>

                      <div className=&quot;flex space-x-2&quot;>
                        <Button
                          onClick={() => setShowQR(showQR === url.id ? null : url.id)}
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;flex-1 border-gray-600 text-gray-300 hover:bg-gray-600&quot;
                        >
                          <QrCode className=&quot;w-4 h-4 mr-2&quot; />
                          QR Code
                        </Button>
                        <Button
                          onClick={() => deleteUrl(url.id)}
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;border-red-600 text-red-400 hover:bg-red-600 hover:text-white&quot;
                        >
                          <Trash2 className=&quot;w-4 h-4&quot; />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  {showQR === url.id && (
                    <div className=&quot;mt-4 p-4 bg-gray-800 rounded-lg text-center&quot;>
                      <img 
                        src={url.qrCode} 
                        alt=&quot;QR Code&quot; 
                        className=&quot;mx-auto mb-3 w-32 h-32&quot;
                      />
                      <p className=&quot;text-sm text-gray-400&quot;>
                        Scan this QR code to visit the shortened URL
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Professional URL Shortening Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Everything you need to create, manage, and track your shortened URLs effectively.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔗</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Custom Aliases</h3>
              <p className=&quot;text-gray-400&quot;>
                Create memorable, branded short URLs with custom aliases that reflect your brand.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Click Analytics</h3>
              <p className=&quot;text-gray-400&quot;>
                Track clicks, engagement, and performance metrics for all your shortened URLs.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📱</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>QR Code Generation</h3>
              <p className=&quot;text-gray-400&quot;>
                Generate QR codes for easy sharing and mobile access to your shortened URLs.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🛡️</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Secure & Reliable</h3>
              <p className=&quot;text-gray-400&quot;>
                Enterprise-grade infrastructure ensures your URLs are always accessible and secure.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>⚡</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Fast Performance</h3>
              <p className=&quot;text-gray-400&quot;>
                Lightning-fast redirects with global CDN for optimal user experience worldwide.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔧</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Easy Management</h3>
              <p className=&quot;text-gray-400&quot;>
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className=&quot;py-20 bg-gray-800&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Perfect For Every Business Need
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              From marketing campaigns to social media, our URL shortener serves all your link management needs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📢</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Marketing Campaigns</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Track campaign performance</li>
                <li>• Measure click-through rates</li>
                <li>• Optimize marketing strategies</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📱</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Social Media</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Professional appearance</li>
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📧</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Email Marketing</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Clean email design</li>
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🏢</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Business Presentations</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Professional branding</li>
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            Ready to Shorten Your URLs?
          </h2>
          <p className=&quot;text-xl text-orange-100 mb-8&quot;>
            Join thousands of businesses using our professional URL shortening service to improve their link management.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-orange-600 hover:bg-gray-100&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-orange-600&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}