

export default function URLShortenerPage() {;


    for (let i = 0; i < 6; i++) {
      }
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      id: Date.now($2);
      longUrl: longUrl.trim($2);
      shortUrl,
      alias,
      clicks: 0,
      createdAt: new Date().toISOString($2);
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size = $2;
    setShortenedUrls($2);
    setLongUrl($2);
    setCustomAlias($2);
    setIsShortening(false)
  },

  const generateRandomAlias = $2;
    let result = $2;
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

const copyToClipboard = ("text": string) => {
    }
    navigator.clipboard.writeText(text);
  }

const incrementClicks = ("id": number) => {
    }
    setShortenedUrls(prev =>
      prev.map(url =>
        url.id === id ? { ...url, "clicks": url.clicks + 1
} : url
      )

  Link;
  Copy;
  BarChart3;
  ArrowRight;
  RefreshCw;
  CheckCircle;
  ExternalLink;
  QrCode;
  Settings;
  Trash2;
} from lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2  } from 'lucide-react;
import React, { useState } from react',import Head from 'next/head,import Card from ../components/ui/Card',import Button from '../components/ui/Button;
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2  } from lucide-react';
export default function URLShortenerPage() {Link,Copy,BarChart3,ArrowRight,RefreshCw,CheckCircle,ExternalLink,QrCode,class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:, error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }

  }return (<>;
      <Head>;
        <title>URL Shortener - Zion Tech Group</title>;
<meta;

      </Head>;
      {/* Hero Section */}
    for (let i = 0, i < 6, i++) {
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
    }
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;
    let result = ';
    for (let index = 0, i < 6, i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));
    }


          </p>
        </div>
      </section>


            </p>
          </div>
          <div className='grid grid-cols-1 "lg": grid-cols-2 gap-8'>'


                  />;
                </div>;
                {/* Custom Alias */}
                <div>;

                    Leave empty for auto-generated alias;
                  </p>;
                </div>;
                <Button;
                  onClick={generateShortUrl}
                  disabled={!longUrl.trim() || isShortening}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder=https://example.com/very-long-url-that-needs-shortening"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                  />
                </div>


                      Creating Short URL...
                    </>
                  ) : (
                    <>


                      Create Short URL
                    </>
                  
}
                </Button>


                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
                </div>
              </div>
            </Card>
className=w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed';
                >;
                  {isShortening ? (<>;
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin />;
                      Creating Short URL...;
                    </>;
                  ) : (<>;
<Link className=w-5 h-5 mr-2' />;
                      Create Short URL;
                    </>;
                  )}
                </Button>;
                <Button;

                <Button
                  onClick={generateShortUrl}
                  disabled={!longUrl && longUrl.trim() || isShortening}
                  className='w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed>;
                  {isShortening ? (<>;
                      <RefreshCw className=w-5 h-5 mr-2 animate-spin' />                      Creating Short URL...;
                    </>;
                  ) : (<>;
                      <Link className='w-5 h-5 mr-2 />                      Create Short URL                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed;
                >;
                  {isShortening ? (<>;
                      <RefreshCw className=w-5 h-5 mr-2 animate-spin" />;
                      Creating Short URL...;
                    </>;
                  ) : (<>;
                      <Link className=w-5 h-5 mr-2' />                      <Link className="w-5 h-5 mr-2 />;
                      Create Short URL;
                    </>;
                  )}
                </Button>;
                <div className='text-sm text-gray-400>                  <p>• Professional, branded short URLs</p>                <div className=text-sm text-gray-400">;
                  <p>• Professional, branded short URLs</p>;
                  <p>• Click tracking and analytics</p>;
                  <p>• QR code generation</p>;
                  <p>• Custom aliases available</p>;
                </div>;
              </div>;
            </Card>;
            {/* Statistics */}

                              {url.longUrl}
                    </div>
                    <div className=text-sm text-gray-400">Total Clicks</div>
                  </div>
                </div>

                {shortenedUrls.length === 0 ? (
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center>
                    <div className=text-6xl mb-4">📊</div>
                    <p className="text-gray-400>
                      Your URL statistics will appear here. Create your first short URL to get started.
                    </p>
                  </div>
                ) : (
                  <div className=space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3>Recent URLs</h4>
                    {shortenedUrls.slice(0, 3).map((url) => (
                      <div key={url.id} className=p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between>
                          <div className=flex-1 min-w-0">
                            <div className="text-sm text-orange-400 font-medium truncate>
                              {url.shortUrl}
                            </div>
                            <div className=text-xs text-gray-400 truncate">
                              {url.longUrl}
                            </div>
                          </div>

                              {url.clicks} clicks
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>;
                    ))}
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (


                            <span>;
                              Created:{ '}{url.clicks}
                        </div>;
                        <div className=text-xs text-gray-400">Total Clicks</div>;
                      </div>;
                      <div className="flex space-x-2>;
                        <Button;
                              Created:{' }
                Manage and track all your shortened URLs in one place.
              </p>
            </div>


                            </span>;
                            <span>"Alias": {url.alia
}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                    {/* Actions and Stats */}

                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                  {/* QR Code */}

                      <img;
                        }
                        src={url.qrCode}
                        alt='QR Code;
                        className=mx-auto mb-3 w-32 h-32';
                      />;
                      <p className='text-sm text-gray-400>;
                        Scan this QR code to visit the shortened URL;
                      </p>;
                    </div>;
                  </div>;


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

              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}

                <li>• Track campaign performance</li>
                <li>• Measure click-through rates</li>
                <li>• Optimize marketing strategies</li>
              </ul>
            </Card>


                <li>• Professional appearance</li>
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>


                <li>• Clean email design</li>
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>


                <li>• Professional branding</li>
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}

            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
      )}{/* Features */}<section className=py-20 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to create, manage, and track your shortened;
              URLs effectively.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🔗</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Custom Aliases;
              </h3>;
              <p className='text-gray-400>;
                Create memorable, branded short URLs with custom aliases that;
                reflect your brand.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📊</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Click Analytics;
              </h3>;
              <p className='text-gray-400>;
                Track clicks, engagement, and performance metrics for all your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📱</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                QR Code Generation;
              </h3>;
              <p className='text-gray-400>;
                Generate QR codes for easy sharing and mobile access to your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🛡️</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Secure & Reliable;
              </h3>;
              <p className='text-gray-400>;
                Enterprise-grade infrastructure ensures your URLs are always;
                accessible and secure.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>⚡</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Fast Performance;
              </h3>;
              <p className='text-gray-400>;
                Lightning-fast redirects with global CDN for optimal user;
                experience worldwide.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🔧</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Easy Management;
              </h3>;
              <p className='text-gray-400>;
                Simple dashboard to manage, edit, and delete your shortened URLs;
                as needed.;
              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto">;
              From marketing campaigns to social media, our URL shortener serves all your link management needs.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>;
            <Card className=p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4>📢</div>;
              <h3 className=text-2xl font-bold text-white mb-4">Marketing Campaigns</h3>;
              <p className="text-gray-400 mb-6>;
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className=space-y-2 text-gray-300">;
      {/* Use Cases */}
<section className=py-20 bg-gray-800'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
              Perfect For Every Business Need;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              From marketing campaigns to social media, our URL shortener serves;
              all your link management needs.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8>;
            <Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📢</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
                Marketing Campaigns;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Create trackable links for email marketing, social media;
                campaigns, and advertising to measure ROI and engagement.;
              </p>;
              <ul className=space-y-2 text-gray-300'>;
                <li>• Track campaign performance</li>;
                <li>• Measure click-through rates</li>;
                <li>• Optimize marketing strategies</li>;
              </ul>;
            </Card>;
              <h3 className="text-2xl font-bold text-white mb-4>Social Media</h3>;
              <p className=text-gray-400 mb-6">;
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.;
              </p>;
              <ul className="space-y-2 text-gray-300>;
              <h3 className=text-2xl font-bold text-white mb-4">Email Marketing</h3>;
              <p className="text-gray-400 mb-6>;
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.;
              </p>;
              <ul className=space-y-2 text-gray-300">;
              <h3 className="text-2xl font-bold text-white mb-4>Business Presentations</h3>;
              <p className=text-gray-400 mb-6">;
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.;
              </p>;
              <ul className="space-y-2 text-gray-300>;
<Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>📱</div>;
              <h3 className='text-2xl font-bold text-white mb-4>;
                Social Media;
              </h3>;
              <p className=text-gray-400 mb-6'>;
                Share concise, professional links on social platforms with;
                built-in analytics to understand audience engagement.;
              </p>;
              <ul className='space-y-2 text-gray-300>;
                <li>• Professional appearance</li>;
                <li>• Engagement tracking</li>;
                <li>• Brand consistency</li>;
              </ul>;
            </Card>;
<Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📧</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
                Email Marketing;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Include short, trackable URLs in newsletters and promotional;
                emails to monitor subscriber engagement.;
              </p>;
              <ul className=space-y-2 text-gray-300'>;
                <li>• Clean email design</li>;
                <li>• Subscriber analytics</li>;
                <li>• A/B testing support</li>;
              </ul>;
            </Card>;
<Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>🏢</div>;
              <h3 className='text-2xl font-bold text-white mb-4>;
                Business Presentations;
              </h3>;
              <p className=text-gray-400 mb-6'>;
                Use short URLs in presentations, business cards, and printed;
                materials for easy access and tracking.;
              </p>;
              <ul className='space-y-2 text-gray-300>;
                <li>• Professional branding</li>;
                <li>• Easy sharing</li>;
                <li>• Access tracking</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
      <section className=py-20 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to create, manage, and track your shortened;
              URLs effectively.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🔗</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Custom Aliases;
              </h3>;
              <p className='text-gray-400>;
                Create memorable, branded short URLs with custom aliases that;
                reflect your brand.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📊</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Click Analytics;
              </h3>;
              <p className='text-gray-400>;
                Track clicks, engagement, and performance metrics for all your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📱</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                QR Code Generation;
              </h3>;
              <p className='text-gray-400>;
                Generate QR codes for easy sharing and mobile access to your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🛡️</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Secure & Reliable;
              </h3>;
              <p className='text-gray-400>;
                Enterprise-grade infrastructure ensures your URLs are always;
                accessible and secure.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>⚡</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Fast Performance;
              </h3>;
              <p className='text-gray-400>;
                Lightning-fast redirects with global CDN for optimal user;
                experience worldwide.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🔧</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Easy Management;
              </h3>;
              <p className='text-gray-400>;
                Simple dashboard to manage, edit, and delete your shortened URLs;
                as needed.              </p>            <Card className=text-center p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4>🔧</div>;
              <h3 className=text-xl font-bold text-white mb-4">Easy Management</h3>;
              <p className="text-gray-400">;
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className=py-20 bg-gray-800'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
              Perfect For Every Business Need;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
}{/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-orange-600 to-red-600>;
        <div className=max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
          </h2>;
          <p className=text-xl text-orange-100 mb-8'>;
            Join thousands of businesses using our professional URL shortening;
            service to improve their link management.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-4 justify-center>;
            <Button;
              href=/contact';
              size='lg;
              className=bg-white text-orange-600 hover:bg-gray-100';
            >;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2 />;
            </Button>;
            <Button;
              href=/pricing';
              variant='outline;
              size=lg';
              className='border-white text-white hover:bg-white hover:text-orange-600';
            >;
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
}

  );
}
  )}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
