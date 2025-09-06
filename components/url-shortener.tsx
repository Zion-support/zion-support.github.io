
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';

  Settings,;
  Trash2,;
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';


export default function URLShortenerPage() {;
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]),
  const [isShortening, setIsShortening] = useState(false);

  const [showQR, setShowQR] = useState<string | null>(null);
  const generateShortUrl = async () => {
    if (!longUrl.trim()) return;
    setIsShortening(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias.trim() |generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
    const newShortUrl = {
      id: Date.now()
      longUrl: longUrl.trim()
      shortUrl
      alias
      clicks: 0
      createdAt: new Date().toISOString()
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`
    }
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced shortening engine creates professional, trackable links in seconds.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Link className="w-6 h-6 mr-3 text-orange-400" />
                URL Shortening
              </h3>
              <div className="space-y-6">
                    onChange={e => setLongUrl(e && e.target.value)}
                    placeholder='https://example && example.com/very-long-url-that-needs-shortening';
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'                  />              Create Short URLs Instantly;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our advanced shortening engine creates professional, trackable links in seconds.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">;
                <Link className="w-6 h-6 mr-3 text-orange-400" />;
                URL Shortening;
              </h3>;

              <div className="space-y-6">;
                {/* Long URL Input */}
                <div>;
                  <labelclassName="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Long URL
                  ">;
                    Long URL;
                  </label>;
                  <input
                    type="url"
                    value={longUrl}
                >
                  {isShortening ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Short URL...
                    </>
                  ) : (
                    <>
                      Create Short URL
                    </>
                  )}
                </Button>
                <Button
                  onClick={generateShortUrl}
                  disabled={!longUrl && longUrl.trim() || isShortening}
                  className='w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>;
                  {isShortening ? (;
                    <>;
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin' />                      Creating Short URL...;
                    </>;
                  ) : (;
                    <>;
                      <Link className='w-5 h-5 mr-2' />                      Create Short URL                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed";
                >;
                  {isShortening ? (;
                    <>;
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />;
                      Creating Short URL...;
                    </>;
                  ) : (;
                    <>;
                      <Link className='w-5 h-5 mr-2' />                      <Link className="w-5 h-5 mr-2" />;
                      Create Short URL;
                    </>;
                  )}
                </Button>;

                <div className='text-sm text-gray-400'>                  <p> Professional, branded short URLs</p>                <div className="text-sm text-gray-400">;
                  <p> Professional, branded short URLs</p>;
                  <p> Click tracking and analytics</p>;
                  <p> QR code generation</p>;
                  <p> Custom aliases available</p>;
                </div>;
              </div>;
            </Card>;

            {/* Statistics */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <BarChart3 className='w-6 h-6 mr-3 text-red-400' />;
                Your Statistics;
              </h3>;

              <div className='space-y-6'>;
                <div className='grid grid-cols-2 gap-4'>;
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>;
                    <div className='text-3xl font-bold text-orange-400 mb-2'>;
                      {getTotalUrls()}
                    </div>;
                    <div className='text-sm text-gray-400'>Total URLs</div>;
                  </div>;
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>;
                    <div className='text-3xl font-bold text-red-400 mb-2'>;
                      {getTotalClicks()}
                      {getTotalUrls()}
                    </div>;
                    <div className="text-sm text-gray-400">Total URLs</div>;
                  </div>;
                  <div className="text-center p-4 bg-gray-700 rounded-lg">;
                    <div className="text-3xl font-bold text-red-400 mb-2">;
                      {getTotalClicks()}
                    <div className="text-sm text-gray-400">Total Clicks</div>;
                  </div>;
                </div>;

                {shortenedUrls && shortenedUrls.length === 0 ? (;
                  <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>;
                    <div className='text-6xl mb-4'></div>;
                    <p className='text-gray-400'>;
                      Your URL statistics will appear here. Create your first;
                      short URL to get started.;
                  </div>;
                ) : (;
                  <div className='space-y-3'>;
                    <h4 className='text-lg font-semibold text-white mb-3'>;
                      Recent URLs;
                    </h4>;
                    {shortenedUrls && shortenedUrls.slice(0, 3).map(url => (;
                      <div key={url && url.id} className='p-3 bg-gray-700 rounded-lg'>;
                        <div className='flex items-center justify-between'>;
                          <div className='flex-1 min-w-0'>;
                            <div className='text-sm text-orange-400 font-medium truncate'>;
                              {url && url.shortUrl}
                            </div>;
                            <div className='text-xs text-gray-400 truncate'>;
                              {url && url.longUrl}
                            </div>;
                          </div>;
                          <div className='text-right ml-3'>;
                            <div className='text-sm text-white font-medium'>                              {url && url.clicks} clicks                          <div className="text-right ml-3">;
                            <div className="text-sm text-white font-medium">;
                              {url && url.clicks} clicks;
                            </div>;
                          </div>;
                        </div>;
                      </div>;
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (
        <section className='py-20 bg-gray-800'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
                Your Shortened URLs
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Manage and track all your shortened URLs in one place.
              </p>
            </div>
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Shortened URLs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                <Card
                  key={url && url.id}
                  className='p-6 bg-gray-700 border border-gray-600'>;
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>;
                Manage and track all your shortened URLs in one place.
              </p>
            </div>
            <div className="space-y-4">
              {shortenedUrls.map((url) => (
                <Card key={url.id} className="p-6 bg-gray-700 border border-gray-600">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* URL Info */}
                    <div className='lg:col-span-2'>;
                      <div className='flex items-start justify-between mb-4'>;
                        <div className='flex-1'>;
                          <div className='flex items-center space-x-3 mb-2'>;
                            <h3 className='text-xl font-bold text-white'>;
                              {url && url.shortUrl}
                            </h3>;
                            <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full'>;
                              Active;
                            </span>;
                          </div>;
                          <p className='text-gray-400 text-sm break-all'>;
                            {url && url.longUrl}
                          </p>;
                          <div className='flex items-center space-x-4 mt-3 text-sm text-gray-400'>;
                            <span>;
                              Created:{' '}
                          {url.clicks}
                        </div>
                        <div className="text-xs text-gray-400">Total Clicks</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyToClipboard(url.shortUrl)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                        <Button
                          onClick={() => copyToClipboard(url && url.shortUrl)}
                          variant="outline";
                          size="sm";
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600";
                        >;
                          <Copy className="w-4 h-4 mr-2" />;
                          Copy;
                        </Button>;
                        <Button
                          onClick={() => incrementClicks(url && url.id)}
                          variant='outline';
                          size='sm';
                          className='flex-1 border-gray-600 text-gray-300 hover:bg-gray-600';
                        >;
                          <Copy className='w-4 h-4 mr-2' />                          Copy;
                        </Button>;
                        <Button
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </Button>
                      </div>
                        <Button
                          onClick={() =>;
                            setShowQR(showQR === url && url.id ? null : url && url.id);
                          }
                          variant='outline';
                          size='sm';
                          className='flex-1 border-gray-600 text-gray-300 hover:bg-gray-600';
                        >;
                          <QrCode className='w-4 h-4 mr-2' />                          QR Code;
                        </Button>;
                        <Button
                          onClick={() => deleteUrl(url && url.id)}                        <Button
                          onClick={() => setShowQR(showQR === url && url.id ? null : url && url.id)}
                          variant="outline";
                          size="sm";
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600";
                        >;
                          <QrCode className="w-4 h-4 mr-2" />;
                          QR Code;
                        </Button>;
                        <Button
                          variant='outline';
                          size='sm';
                          className='border-red-600 text-red-400 hover:bg-red-600 hover:text-white';
                        >;
                          <Trash2 className='w-4 h-4' />                        </Button>                          variant="outline";
                          size="sm";
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white";
                        >;
                          <Trash2 className="w-4 h-4" />;
                      </div>;
                    </div>;
                  </div>;
                  )}
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;
      )}

              Professional URL Shortening Features
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Everything you need to create, manage, and track your shortened
              URLs effectively.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Custom Aliases
              </h3>
              <p className='text-gray-400'>
                Create memorable, branded short URLs with custom aliases that
                reflect your brand.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Click Analytics
              </h3>
              <p className='text-gray-400'>
                Track clicks, engagement, and performance metrics for all your
                shortened URLs.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                QR Code Generation
              </h3>
              <p className='text-gray-400'>
                Generate QR codes for easy sharing and mobile access to your
                shortened URLs.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Secure & Reliable
              </h3>
              <p className='text-gray-400'>
                Enterprise-grade infrastructure ensures your URLs are always
                accessible and secure.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Fast Performance
              </h3>
              <p className='text-gray-400'>
                Lightning-fast redirects with global CDN for optimal user
                experience worldwide.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'></div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Easy Management
              </h3>
              <p className='text-gray-400'>
                Simple dashboard to manage, edit, and delete your shortened URLs
                as needed.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
            </Card>
          </div>
        </div>
      </section>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From marketing campaigns to social media, our URL shortener serves all your link management needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Campaigns</h3>
              <p className="text-gray-400 mb-6">
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li> Track campaign performance</li>
                <li> Measure click-through rates</li>
                <li> Optimize marketing strategies</li>
              </ul>
            </Card>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-400 mb-6">
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>
              <p className="text-gray-400 mb-6">
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              </p>
              <ul className="space-y-2 text-gray-300">
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to create, manage, and track your shortened;
              URLs effectively.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Custom Aliases;
              </h3>;
              <p className='text-gray-400'>;
                Create memorable, branded short URLs with custom aliases that;
                reflect your brand.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Click Analytics;
              </h3>;
              <p className='text-gray-400'>;
                Track clicks, engagement, and performance metrics for all your;
                shortened URLs.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                QR Code Generation;
              </h3>;
              <p className='text-gray-400'>;
                Generate QR codes for easy sharing and mobile access to your;
                shortened URLs.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Secure & Reliable;
              </h3>;
              <p className='text-gray-400'>;
                Enterprise-grade infrastructure ensures your URLs are always;
                accessible and secure.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Fast Performance;
              </h3>;
              <p className='text-gray-400'>;
                Lightning-fast redirects with global CDN for optimal user;
                experience worldwide.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Easy Management;
              </h3>;
              <p className='text-gray-400'>;
                Simple dashboard to manage, edit, and delete your shortened URLs;
                as needed.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4"></div>;
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>;
              <p className="text-gray-400">;
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.;
            </Card>;
          </div>;
        </div>;
      </section>;

      {/* Use Cases */}
      <section className='py-20 bg-gray-800'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Perfect For Every Business Need;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                Marketing Campaigns;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Create trackable links for email marketing, social media;
                campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className='space-y-2 text-gray-300'>                <li> Track campaign performance</li>              Perfect For Every Business Need;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              From marketing campaigns to social media, our URL shortener serves all your link management needs.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <Card className="p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4"></div>;
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Campaigns</h3>;
              <p className="text-gray-400 mb-6">;
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className="space-y-2 text-gray-300">;
                <li> Track campaign performance</li>;
                <li> Measure click-through rates</li>;
                <li> Optimize marketing strategies</li>;
              </ul>;
            </Card>;

            <Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                Social Media;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Share concise, professional links on social platforms with;
                built-in analytics to understand audience engagement.;
              </p>;
              <ul className='space-y-2 text-gray-300'>                <li> Professional appearance</li>            <Card className="p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4"></div>;
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>;
              <p className="text-gray-400 mb-6">;
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.;
              </p>;
                Email Marketing;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Include short, trackable URLs in newsletters and promotional;
                emails to monitor subscriber engagement.;
              </p>;
              <ul className='space-y-2 text-gray-300'>                <li> Clean email design</li>            <Card className="p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4"></div>;
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>;
              <p className="text-gray-400 mb-6">;
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.;
              </p>;
              <ul className="space-y-2 text-gray-300">;
                <li> Subscriber analytics</li>;
                <li> A/B testing support</li>;
              </ul>;
            </Card>;

            <Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'></div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                Business Presentations;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Use short URLs in presentations, business cards, and printed;
                materials for easy access and tracking.;
              </p>;
              <ul className='space-y-2 text-gray-300'>                <li> Professional branding</li>            <Card className="p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4"></div>;
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>;
              <p className="text-gray-400 mb-6">;
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.;
              </p>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
