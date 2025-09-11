>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

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
=======} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

=======
import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';


export default function URLShortenerPage() {;



  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]),
  const [isShortening, setIsShortening] = useState(false);



    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
  const generateRandomAlias = () => {;
    const chars =;

      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {;
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
    }
    return result;


  };



  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  }
  const incrementClicks = (id: number) => {
    setShortenedUrls(prev =>
      prev.map(url =>
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url
      )
    );
  }
  const deleteUrl = (id: number) => {
    setShortenedUrls(prev => prev.filter(url => url.id !== id));
  }
  const getTotalClicks = () => {
    return shortenedUrls.reduce((sum, url) => sum + url.clicks, 0);
  }
  const getTotalUrls = () => {
    return shortenedUrls.length;  };    setIsShortening(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias.trim() |generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
    const newShortUrl = {
      id: Date.now()
      longUrl: longUrl.trim()
      shortUrl;
      alias;
      clicks: 0
      createdAt: new Date().toISOString()
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`
    }
    
    setIsShortening(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const alias = customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
    
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
import {
  Link
  Copy
  BarChart3
  ArrowRight
  RefreshCw
  CheckCircle
  ExternalLink
  QrCode
  Settings
  Trash2;
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

export default function URLShortenerPage() {
=======  Link,
  Copy,
  BarChart3,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  QrCode,  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);
  };
  const incrementClicks = (id: number) => {;
    setShortenedUrls(prev =>;
      prev && prev.map(url =>;
        url && url.id === id ? { ...url, clicks: url && url.clicks + 1 } : url;
      );
    );
  };
  const deleteUrl = (id: number) => {;
    setShortenedUrls(prev => prev && prev.filter(url => url && url.id !== id));
  };
  const getTotalClicks = () => {;
    return shortenedUrls && shortenedUrls.reduce((sum, url) => sum + url && url.clicks, 0);
  };
  const getTotalUrls = () => {;
    return shortenedUrls && shortenedUrls.length;  };    setIsShortening(true);
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias && customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion && zion.tech/${alias}`;
    const newShortUrl = {;
      id: Date && Date.now(),;
      longUrl: longUrl && longUrl.trim(),;
      shortUrl;
      alias;
      clicks: 0,;
      createdAt: new Date().toISOString(),;
      qrCode: `https://api && api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`;
    };
  Settings,;
  Trash2,;
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6">
              <Link className="w-4 h-4 mr-2" />
              Professional URL Shortening
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            URL Shortener
          </h1>
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
            Transform long URLs into short, memorable links with our professional shortening service.
=======                      {getTotalUrls()}
                    </div>
                    <div className="text-sm text-gray-400">Total URLs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {getTotalClicks()}

                    </div>;=======


                    </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="text-sm text-gray-400">Total Clicks</div>;
                  </div>;
                </div>;
                {shortenedUrls && shortenedUrls.length === 0 ? (;
                  <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>;
                    <div className='text-6xl mb-4'>📊</div>;
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

                    ))}
                  </div>                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

                    ))}
                  </div>;
                )}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Shortened URLs List */}
      {shortenedUrls && shortenedUrls.length > 0 && (;
        <section className='py-20 bg-gray-800'>;
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-16'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
                Your Shortened URLs;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Manage and track all your shortened URLs in one place.;
              </p>;
            </div>;
        <section className="py-20 bg-gray-800">;
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
                Your Shortened URLs;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              </p>;
            </div>;
            <div className='space-y-4'>;
              {shortenedUrls && shortenedUrls.map(url => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">

                          onClick={() => deleteUrl(url && url.id)}=======


                          onClick={() => deleteUrl(url && url.id)}                          variant='outline';
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


                  {/* QR Code */}


                        className="mx-auto mb-3 w-32 h-32"

=======
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Business Need

            <Card className="p-8 bg-gray-700 border border-gray-600">

                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-700 border border-gray-600">

                <li>• Clean email design</li>
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-700 border border-gray-600">

                <li>• Professional branding</li>
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📢</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Marketing Campaigns;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Create trackable links for email marketing, social media;
                campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className='space - y-2 text - gray - 300'>                <li>• Track campaign performance</li>              Perfect For Every Business Need;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              From marketing campaigns to social media, our URL shortener serves all your link management needs.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📢</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Marketing Campaigns</h3>;
              <p className="text - gray - 400 mb - 6">;
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
                <li>• Track campaign performance</li>;
                <li>• Measure click - through rates</li>;
                <li>• Optimize marketing strategies</li>;
              </ul>;
            </Card>;
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📱</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Social Media;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Share concise, professional links on social platforms with;
                built - in analytics to understand audience engagement.;
              </p>;
              <ul className='space - y-2 text - gray - 300'>                <li>• Professional appearance</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📱</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Social Media</h3>;
              <p className="text - gray - 400 mb - 6">;
                Share concise, professional links on social platforms with built - in analytics to understand audience engagement.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <li>• Engagement tracking</li>;
                <li>• Brand consistency</li>;
              </ul>;
            </Card>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📧</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Email Marketing;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Include short, trackable URLs in newsletters and promotional;
                emails to monitor subscriber engagement.;
              </p>;
              <ul className='space - y-2 text - gray - 300'>                <li>• Clean email design</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📧</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Email Marketing</h3>;
              <p className="text - gray - 400 mb - 6">;
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
                <li>• Subscriber analytics</li>;
                <li>• A / B testing support</li>;
              </ul>;
            </Card>;
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🏢</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Business Presentations;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Use short URLs in presentations, business cards, and printed;
                materials for easy access and tracking.;
              </p>;
              <ul className='space - y-2 text - gray - 300'>                <li>• Professional branding</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🏢</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Business Presentations</h3>;
              <p className="text - gray - 400 mb - 6">;
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <li>• Easy sharing</li>;
                <li>• Access tracking</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  );
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </>);
=======
  );
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

=======
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
