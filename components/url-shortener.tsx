<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

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
<<<<<<< HEAD

  };

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
<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Link,
  Copy,
  BarChart3,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  QrCode,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Settings,
  Trash2,
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';
export default /**
 * URLShortenerPage - Function description
 */
function URLShortenerPage() {
  const [long_url, setLongUrl] = useState ('');
  const [custom_alias, setCustomAlias] = useState ('');
  const [shortened_urls, setShortenedUrls] = useState < any[]>([]);
  const [is_shortening, setIsShortening] = useState (false);
  const [showQR, setShowQR] = useState < string | null>(null);
;
  const generateShortUrl = async () => {
    if () return) {
  $2
}
    setIsShortening (true);
;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    const alias = custom_alias.trim () || generateRandomAlias ();
    const short_url = `https://zion.tech/${alias}`;
;
    const newShortUrl = {
      id: Date.now (),
      long_url: long_url.trim (),
      short_url,
      alias,
      clicks: 0,
      created_at: new Date ().toISOString (),
      qr_code: `https://api.qrserver.com / v1 / create - qr - code/?size = 200x200 & data=${encodeURIComponent (short_url)}`,
    }
;
    setShortenedUrls (prev => [newShortUrl, ...prev]);
    setLongUrl ('');
    setCustomAlias ('');
    setIsShortening (false);
  }
;
  const generateRandomAlias = () =>: any {
    const chars =;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0; i < 6; i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));
    }
    return result;
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const increment_clicks = (id: number) =>: any {
    setShortenedUrls (prev =>;
      prev.map (url =>;
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url));
  }
;
  const delete_url = (id: number) =>: any {
    setShortenedUrls (prev => prev.filter (url => url.id !== id));
  }
;
  const getTotalClicks = () =>: any {
    return shortened_urls.reduce ((sum, url) => sum + url.clicks, 0);
  }
;
  const getTotalUrls = () =>: any {
    return shortened_urls.length;  }    setIsShortening (true);
;
    // Simulate API call delay;
    await new Promise (resolve => set_timeout (resolve, 1000));
;
    const alias = custom_alias.trim () || generateRandomAlias ();
    const short_url = `https://zion.tech/${alias}`;
;
    const newShortUrl = {
      id: Date.now (),
      long_url: long_url.trim (),
      short_url;
      alias;
      clicks: 0,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  };
  const generateRandomAlias = () => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {;
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return result;
  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);
  };
  const incrementClicks = (id: number) => {;
    setShortenedUrls(prev => ;
      prev && prev.map(url => ;
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
    return shortenedUrls && shortenedUrls.length;
  };
  const generateRandomAlias = () => {
      created_at: new Date ().toISOString (),
      qr_code: `https://api.qrserver.com / v1 / create - qr - code/?size = 200x200 & data=${encodeURIComponent (short_url)}`;
    }
;
    setShortenedUrls (prev => [newShortUrl, ...prev]);
    setLongUrl ('');
    setCustomAlias ('');
    setIsShortening (false);
  }
;
  const generateRandomAlias = () =>: any {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0, i < 6, i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>
      <Head>
        <title>URL Shortener - Zion Tech Group</title>
        <meta name="description" content="Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently." />
        <meta property="og:title" content="URL Shortener - Zion Tech Group" />
        <meta property="og:description" content="Professional URL shortening service with analytics and QR code generation." />
      </Head>


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
<<<<<<< HEAD
    
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

    setShortenedUrls(prev => [newShortUrl, ...prev]),
    setLongUrl(''),
    setCustomAlias(''),
    setIsShortening(false)
  },

  const generateRandomAlias = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const generateRandomAlias = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
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
<<<<<<< HEAD
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false)
  }
  const generateRandomAlias = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }
  const incrementClicks = (id: number) => {
    setShortenedUrls(prev =>
      prev.map(url =>
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url
      )
    )
  }
  const deleteUrl = (id: number) => {
    setShortenedUrls(prev => prev.filter(url => url.id !== id))
  }
  const getTotalClicks = () => {
    return shortenedUrls.reduce((sum, url) => sum + url.clicks, 0)
  }
  const getTotalUrls = () => {
    return shortenedUrls.length
  }

  return (
    <>
      <Head>
        <title>URL Shortener - Zion Tech Group</title>
        <meta
          name='description'
          content='Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently.'
        />
        <meta property='og:title' content='URL Shortener - Zion Tech Group' />
        <meta
          property='og:description'
          content='Professional URL shortening service with analytics and QR code generation.'
        />
      </Head>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6'>
              <Link className='w-4 h-4 mr-2' />
              Professional URL Shortening
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
            URL Shortener
          </h1>
          <p className='text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed'>
            Transform long URLs into short, memorable links with our
            professional shortening service. Track clicks, generate QR codes
            and manage your links efficiently with advanced analytics.          </p>      </Head>
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.
          </p>
        </div>
      </section>
<<<<<<< HEAD
=======
      {/* URL Shortening Tool */}

        />;
      </Head>;

      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6'>;
              <Link className='w-4 h-4 mr-2' />;
              Professional URL Shortening;
            </div>;
          </div>;
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
            URL Shortener;
          </h1>;
          <p className='text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed'>;
            Transform long URLs into short, memorable links with our;
            professional shortening service. Track clicks, generate QR codes,;
            and manage your links efficiently with advanced analytics.          </p>      </Head>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6">;
              <Link className="w-4 h-4 mr-2" />;
              Professional URL Shortening;
            </div>;
          </div>;
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;
            URL Shortener;
          </h1>;
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">;
            Transform long URLs into short, memorable links with our professional shortening service. ;
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.;
          </p>;
        </div>;
      </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* URL Shortening Tool */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Create Short URLs Instantly;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Our advanced shortening engine creates professional, trackable;
              links in seconds.;
            </p>;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Link className='w-6 h-6 mr-3 text-orange-400' />;
                URL Shortening;
              </h3>;
<<<<<<< HEAD
              <div className='space-y-6'>;
                {/* Long URL Input */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    Long URL;
                  </label>;
      {/* URL Shortening Tool */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Create Short URLs Instantly
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Our advanced shortening engine creates professional, trackable
              links in seconds.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Link className='w-6 h-6 mr-3 text-orange-400' />
                URL Shortening
              </h3>
              <div className='space-y-6'>
=======

              <div className='space-y-6'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Long URL Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Long URL
                  </label>
                  <input
                    type='url'
                    value={longUrl}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Create Short URLs Instantly
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                    onChange={(e) => setLongUrl(e && e.target.value)}
                    placeholder="https://example && example.com/very-long-url-that-needs-shortening";
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
                  />;
                </div>;
                {/* Custom Alias */}
=======


                {/* Custom Alias */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Custom Alias (Optional)
                  ">
                    Custom Alias (Optional)
                  </label>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-3 py-3 bg-gray-600 border border-gray-500 rounded-l-lg text-gray-300 text-sm">
                      zion.tech/
                    </span>
<<<<<<< HEAD
                    <input
                      type="text"
                      value={customAlias}
                  disabled={!longUrl.trim() || isShortening}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
=======

                    <input
                      type="text"
                      value={customAlias}

                  disabled={!longUrl.trim() || isShortening}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >
                  {isShortening ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Short URL...
                    </>
                  ) : (
                    <>
<<<<<<< HEAD
                      <Link className='w-5 h-5 mr-2' />                      <Link className="w-5 h-5 mr-2" />
=======

                      <Link className="w-5 h-5 mr-2" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      Create Short URL
                    </>
                  )}
                </Button>
<<<<<<< HEAD
                <div className='text-sm text-gray-400'>                  <p>• Professional, branded short URLs</p>                <div className="text-sm text-gray-400">
=======


                <div className="text-sm text-gray-400">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
                </div>
              </div>
            </Card>
<<<<<<< HEAD
=======
            {/* Statistics */}

                      onChange={(e) => setCustomAlias(e && e.target.value)}
                      placeholder="my-custom-link";
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
                    />;
                  </div>;
                  <p className="text-xs text-gray-400 mt-1">;
                    Leave empty for auto-generated alias;
                  </p>;
                </div>;
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-red-400" />
                Your Statistics
              </h3>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
=======
    
    setIsShortening(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const alias = customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
    
=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Link,
  Copy,
  BarChart3,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  QrCode,
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                <div className='text-sm text-gray-400'>                  <p>• Professional, branded short URLs</p>                <div className="text-sm text-gray-400">;
                  <p>• Professional, branded short URLs</p>;
                  <p>• Click tracking and analytics</p>;
                  <p>• QR code generation</p>;
                  <p>• Custom aliases available</p>;
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
<<<<<<< HEAD
                    </div>;
                    <div className='text-sm text-gray-400'>Total URLs</div>;
                  </div>;
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>;
                    <div className='text-3xl font-bold text-red-400 mb-2'>;
                      {getTotalClicks()}
<<<<<<< HEAD
                    </div>;
                    <div className='text-sm text-gray-400'>Total Clicks</div>                  </div>;
                </div>;
                {shortenedUrls && shortenedUrls.length === 0 ? (                Your Statistics;
              </h3>;
=======

                    </div>;
                    <div className='text-sm text-gray-400'>Total Clicks</div>                  </div>;
                </div>;

                {shortenedUrls && shortenedUrls.length === 0 ? (                Your Statistics;
              </h3>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="space-y-6">;
                <div className="grid grid-cols-2 gap-4">;
                  <div className="text-center p-4 bg-gray-700 rounded-lg">;
                    <div className="text-3xl font-bold text-orange-400 mb-2">;
<<<<<<< HEAD
                      {getTotalUrls()}
                    </div>;
                    <div className="text-sm text-gray-400">Total URLs</div>;
                  </div>;
                  <div className="text-center p-4 bg-gray-700 rounded-lg">;
                    <div className="text-3xl font-bold text-red-400 mb-2">;
                      {getTotalClicks()}
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-400">
                      Your URL statistics will appear here. Create your first short URL to get started.
                    </p>
                  </div>
                ) : (
<div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Recent URLs</h4>
                    {shortenedUrls.slice(0, 3).map((url) => (
                      <div key={url.id} className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-orange-400 font-medium truncate">
                              {url.shortUrl}
                            </div>
                            <div className="text-xs text-gray-400 truncate">
                              {url.longUrl}
                            </div>
                          </div>
                          <div className="text-right ml-3">
            {/* Statistics */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <BarChart3 className='w-6 h-6 mr-3 text-red-400' />
                Your Statistics
              </h3>
              <div className='space-y-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>
                    <div className='text-3xl font-bold text-orange-400 mb-2'>
                      {getTotalUrls()}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                    <div className='text-sm text-gray-400'>Total URLs</div>
                  </div>
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>
                    <div className='text-3xl font-bold text-red-400 mb-2'>
                      {getTotalClicks()}
                    </div>
                    <div className='text-sm text-gray-400'>Total Clicks</div>                  </div>
                </div>
                {shortenedUrls.length === 0 ? (                Your Statistics
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {getTotalUrls()}
                    </div>
                    <div className="text-sm text-gray-400">Total URLs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {getTotalClicks()}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>
                    <div className="text-sm text-gray-400">Total Clicks</div>
                  </div>
                </div>
                {shortenedUrls.length === 0 ? (
                  <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                    <div className='text-6xl mb-4'>📊</div>
                    <p className='text-gray-400'>
                      Your URL statistics will appear here. Create your first
                      short URL to get started.
                  </div>
                ) : (
                  <div className='space-y-3'>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Recent URLs
                    </h4>
                    {shortenedUrls.slice(0, 3).map(url => (
                      <div key={url.id} className='p-3 bg-gray-700 rounded-lg'>
                        <div className='flex items-center justify-between'>
                          <div className='flex-1 min-w-0'>
                            <div className='text-sm text-orange-400 font-medium truncate'>
                              {url.shortUrl}
                            </div>
                            <div className='text-xs text-gray-400 truncate'>
                              {url.longUrl}
                            </div>
                          </div>
                          <div className='text-right ml-3'>
                            <div className='text-sm text-white font-medium'>                              {url.clicks} clicks                          <div className="text-right ml-3">
                            <div className="text-sm text-white font-medium">
                              {url.clicks} clicks
                            </div>
                          </div>
                        </div>
                      </div>
</div>;
=======


                    </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


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
<<<<<<< HEAD
<<<<<<< HEAD
                    ))}
                  </div>;
=======


                    ))}
                  </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}
                  </div>;
                )}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Shortened URLs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                              {new Date(url.createdAt).toLocaleDateString()}
                            </span>                            <span>Alias: {url.alias}</span>                    {/* URL Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {url.shortUrl}
                            </h3>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Active
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm break-all">
                            {url.longUrl}
                          </p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                            <span>Created: {new Date(url.createdAt).toLocaleDateString()}</span>
                            <span>Alias: {url.alias}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Actions and Stats */}
                    <div className='flex flex-col space-y-3'>
                      <div className='text-center p-4 bg-gray-800 rounded-lg'>
                        <div className='text-2xl font-bold text-orange-400 mb-1'>
                          {url.clicks}
                        </div>
                        <div className='text-xs text-gray-400'>
                          Total Clicks
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              {new Date(url && url.createdAt).toLocaleDateString()}
                            </span>                            <span>Alias: {url && url.alias}</span>                    {/* URL Info */}
                    <div className="lg:col-span-2">;
                      <div className="flex items-start justify-between mb-4">;
                        <div className="flex-1">;
                          <div className="flex items-center space-x-3 mb-2">;
                            <h3 className="text-xl font-bold text-white">;
                              {url && url.shortUrl}
                            </h3>;
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">;
                              Active;
                            </span>;
                          </div>;
                          <p className="text-gray-400 text-sm break-all">;
                            {url && url.longUrl}
                          </p>;
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">;
                            <span>Created: {new Date(url && url.createdAt).toLocaleDateString()}</span>;
                            <span>Alias: {url && url.alias}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                    {/* Actions and Stats */}
                    <div className='flex flex-col space-y-3'>;
                      <div className='text-center p-4 bg-gray-800 rounded-lg'>;
                        <div className='text-2xl font-bold text-orange-400 mb-1'>;
                          {url && url.clicks}
                        </div>;
                        <div className='text-xs text-gray-400'>;
                          Total Clicks;
                          {url && url.clicks}
                        </div>;
                        <div className="text-xs text-gray-400">Total Clicks</div>;
                      </div>;
                      <div className="flex space-x-2">;
                        <Button
                          onClick={() => copyToClipboard(url && url.shortUrl)}
                          variant="outline";
                          size="sm";
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600";
                        >;
                          <Copy className='w-4 h-4 mr-2' />                        </div>;
                      </div>;
                      <div className='flex space-x-2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          onClick={() => incrementClicks(url.id)}
<<<<<<< HEAD
<<<<<<< HEAD
                          variant='outline'
                          size='sm'
                          className='flex-1 border-gray-600 text-gray-300 hover:bg-gray-600'
                        >
                          <Copy className='w-4 h-4 mr-2' />                          Copy
                        </Button>
                        <Button
                          onClick={() => incrementClicks(url.id)}
                          variant='outline'
                          size='sm'
                          className='flex-1 border-gray-600 text-gray-300 hover:bg-gray-600'
                        >
                          <ExternalLink className='w-4 h-4 mr-2' />                          Visit
                        </Button>
                      </div>
                      <div className='flex space-x-2'>                          variant="outline"
=======
                          variant="outline"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          variant="outline"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </Button>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          onClick={() => incrementClicks(url && url.id)}
                          variant='outline';
                          size='sm';
                          className='flex-1 border-gray-600 text-gray-300 hover:bg-gray-600';
                        >;
                          <ExternalLink className='w-4 h-4 mr-2' />                          Visit;
                        </Button>;
                      </div>;
                      <div className='flex space-x-2'>                          variant="outline";
                          size="sm";
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600";
                        >;
                          <ExternalLink className="w-4 h-4 mr-2" />;
                          Visit;
                        </Button>;
                      </div>;
                      <div className='flex space-x-2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => setShowQR(showQR === url.id ? null : url.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <QrCode className="w-4 h-4 mr-2" />
                          QR Code
                        </Button>
                        <Button
                          onClick={() => deleteUrl(url.id)}
                          variant='outline'
                          size='sm'
                          className='border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                        >
                          <Trash2 className='w-4 h-4' />                        </Button>                          variant="outline"
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
onClick={() => deleteUrl(url && url.id)}
=======


                          onClick={() => deleteUrl(url && url.id)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


                          onClick={() => deleteUrl(url && url.id)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                  {/* QR Code */}


                        className="mx-auto mb-3 w-32 h-32"

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />
                      <p className="text-sm text-gray-400">
                        Scan this QR code to visit the shortened URL
                      </p>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                  {/* QR Code */}
                      />;
                      <p className='text-sm text-gray-400'>                        Scan this QR code to visit the shortened URL                    <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center">;
                      <img
                        src={url && url.qrCode} 
                  {showQR === url.id && (
                    <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center">
                      <img 
                        src={url.qrCode} 
                        alt="QR Code" 
                        className="mx-auto mb-3 w-32 h-32"
                      />
                      <p className="text-sm text-gray-400">
                      </p>
                    </div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  )}
</Card>;
              ))}
            </div>;
          </div>;
        </section>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />
                      <p className="text-sm text-gray-400">
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Features */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>


<<<<<<< HEAD
      {/* Features */}


<<<<<<< HEAD

              Professional URL Shortening Features

              Professional URL Shortening Features
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Everything you need to create, manage, and track your shortened
              URLs effectively.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔗</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Custom Aliases
              </h3>
              <p className='text-gray-400'>
                Create memorable, branded short URLs with custom aliases that
                reflect your brand.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Click Analytics
              </h3>
              <p className='text-gray-400'>
                Track clicks, engagement, and performance metrics for all your
                shortened URLs.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📱</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                QR Code Generation
              </h3>
              <p className='text-gray-400'>
                Generate QR codes for easy sharing and mobile access to your
                shortened URLs.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🛡️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Secure & Reliable
              </h3>
              <p className='text-gray-400'>
                Enterprise-grade infrastructure ensures your URLs are always
                accessible and secure.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Fast Performance
              </h3>
              <p className='text-gray-400'>
                Lightning-fast redirects with global CDN for optimal user
                experience worldwide.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Easy Management
              </h3>
              <p className='text-gray-400'>
                Simple dashboard to manage, edit, and delete your shortened URLs
                as needed.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
              <p className="text-gray-400">
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.
<<<<<<< HEAD
<<<<<<< HEAD
=======

              </p>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              </p>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
            </h2>
      {/* Use Cases */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Perfect For Every Business Need
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              From marketing campaigns to social media, our URL shortener serves
              all your link management needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📢</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Marketing Campaigns
              </h3>
              <p className='text-gray-400 mb-6'>
                Create trackable links for email marketing, social media
                campaigns, and advertising to measure ROI and engagement.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Track campaign performance</li>              Perfect For Every Business Need
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Use Cases */}

      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Business Need

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From marketing campaigns to social media, our URL shortener serves all your link management needs.
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
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📱</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Social Media
              </h3>
              <p className='text-gray-400 mb-6'>
                Share concise, professional links on social platforms with
                built-in analytics to understand audience engagement.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Professional appearance</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <Card className="p-8 bg-gray-700 border border-gray-600">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-400 mb-6">
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======

                <li>• Professional appearance</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <li>• Professional appearance</li>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📧</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Email Marketing
              </h3>
              <p className='text-gray-400 mb-6'>
                Include short, trackable URLs in newsletters and promotional
                emails to monitor subscriber engagement.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Clean email design</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <Card className="p-8 bg-gray-700 border border-gray-600">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======

                <li>• Clean email design</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <li>• Clean email design</li>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🏢</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Business Presentations
              </h3>
              <p className='text-gray-400 mb-6'>
                Use short URLs in presentations, business cards, and printed
                materials for easy access and tracking.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Professional branding</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <Card className="p-8 bg-gray-700 border border-gray-600">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>
              <p className="text-gray-400 mb-6">
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======

                <li>• Professional branding</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <li>• Professional branding</li>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>;
<section className='py-20 bg-gray-900'>;
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      <section className='py-20 bg-gray-900'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-orange-600 to-red-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-orange-100 mb-8'>
            Join thousands of businesses using our professional URL shortening
            service to improve their link management.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-orange-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-orange-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
=======
      <section className='py-20 bg-gray-900'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <div className='text-4xl mb-4'>🔗</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Custom Aliases;
              </h3>;
              <p className='text-gray-400'>;
                Create memorable, branded short URLs with custom aliases that;
                reflect your brand.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📊</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Click Analytics;
              </h3>;
              <p className='text-gray-400'>;
                Track clicks, engagement, and performance metrics for all your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📱</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                QR Code Generation;
              </h3>;
              <p className='text-gray-400'>;
                Generate QR codes for easy sharing and mobile access to your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🛡️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Secure & Reliable;
              </h3>;
              <p className='text-gray-400'>;
                Enterprise-grade infrastructure ensures your URLs are always;
                accessible and secure.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚡</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Fast Performance;
              </h3>;
              <p className='text-gray-400'>;
                Lightning-fast redirects with global CDN for optimal user;
                experience worldwide.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔧</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Easy Management;
              </h3>;
              <p className='text-gray-400'>;
                Simple dashboard to manage, edit, and delete your shortened URLs;
                as needed.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4">🔧</div>;
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
    return result;
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const increment_clicks = (id: number) =>: any {
    setShortenedUrls (prev =>;
      prev.map (url =>;
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url));
  }
;
  const delete_url = (id: number) =>: any {
    setShortenedUrls (prev => prev.filter (url => url.id !== id));
  }
;
  const getTotalClicks = () =>: any {
    return shortened_urls.reduce ((sum, url) => sum + url.clicks, 0);
  }
;
  const getTotalUrls = () =>: any {
    return shortened_urls.length;
  }
;
  return (
    <>;
      <Head>;
        <title > URL Shortener - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently.';
        />;
        <meta property='og:title' content='URL Shortener - Zion Tech Group' />;
        <meta;
          property='og:description';
          content='Professional URL shortening service with analytics and QR code generation.';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 32 pb - 20 bg - gradient - to - br from - orange - 900 via - red - 900 to - pink - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 8'>;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - orange - 500 / 20 border border - orange - 400 / 30 text - orange - 300 text - sm font - medium mb - 6'>;
              <Link className='w - 4 h - 4 mr - 2' />;
              Professional URL Shortening;
            </div>;
          </div>;
          <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
            URL Shortener;
          </h1>;
          <p className='text - xl text - orange - 200 max - w-4xl mx - auto leading - relaxed'>;
            Transform long URLs into short, memorable links with our;
            professional shortening service. Track clicks, generate QR codes,
            and manage your links efficiently with advanced analytics.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt - 32 pb - 20 bg - gradient - to - br from - orange - 900 via - red - 900 to - pink - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <div className="mb - 8">;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - orange - 500 / 20 border border - orange - 400 / 30 text - orange - 300 text - sm font - medium mb - 6">;
              <Link className="w - 4 h - 4 mr - 2" />;
              Professional URL Shortening;
            </div>;
          </div>;
          <h1 className="text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight">;
            URL Shortener;
          </h1>;
          <p className="text - xl text - orange - 200 max - w-4xl mx - auto leading - relaxed">;
            Transform long URLs into short, memorable links with our professional shortening service.;
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.;
          </p>;
        </div>;
      </section>;
      {/* URL Shortening Tool */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Create Short URLs Instantly;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Our advanced shortening engine creates professional, trackable;
              links in seconds.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {/* Input Form */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - 2xl font - bold text - white mb - 6 flex items - center'>;
                <Link className='w - 6 h - 6 mr - 3 text - orange - 400' />;
                URL Shortening;
              </h3>;
              <div className='space - y-6'>;
                {/* Long URL Input */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    Long URL;
                  </label>;
                  <input;
                    type='url';
                    value={long_url}
                    on_change={e => setLongUrl (e.target.value)}
                    placeholder='https://example.com / very - long - url - that - needs - shortening';
                    className='w - full px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - orange - 500 focus:border - transparent'                  />              Create Short URLs Instantly;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Our advanced shortening engine creates professional, trackable links in seconds.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
            {/* Input Form */}
            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center">;
                <Link className="w - 6 h - 6 mr - 3 text - orange - 400" />;
                URL Shortening;
              </h3>;
              <div className="space - y-6">;
                {/* Long URL Input */}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2" html_for="input-;
                    Long URL;
                  ">;
                    Long URL;
                  </label>;
                  <input;
                    type="url";
                    value={long_url}
                    on_change={(e) => setLongUrl (e.target.value)}
                    placeholder="https://example.com / very - long - url - that - needs - shortening";
                    className="w - full px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - orange - 500 focus:border - transparent";
                  />;
                </div>;
                {/* Custom Alias */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    Custom Alias (Optional);
                  </label>;
                  <div className='flex space - x-2'>;
                    <span className='inline - flex items - center px - 3 py - 3 bg - gray - 600 border border - gray - 500 rounded - l-lg text - gray - 300 text - sm'>;
                      zion.tech/;
                    </span>;
                    <input;
                      type='text';
                      value={custom_alias}
                      on_change={e => setCustomAlias (e.target.value)}
                      placeholder='my - custom - link';
                      className='flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - r-lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - orange - 500 focus:border - transparent';
                    />;
                  </div>;
                  <p className='text - xs text - gray - 400 mt - 1'>                    Leave empty for auto - generated alias                    Custom Alias (Optional);
                  </label>;
                  <div className="flex space - x-2">;
                    <span className="inline - flex items - center px - 3 py - 3 bg - gray - 600 border border - gray - 500 rounded - l-lg text - gray - 300 text - sm">;
                      zion.tech/;
                    </span>;
                    <input;
                      type="text";
                      value={custom_alias}
                      on_change={(e) => setCustomAlias (e.target.value)}
                      placeholder="my - custom - link";
                      className="flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - r-lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - orange - 500 focus:border - transparent";
                    />;
                  </div>;
                  <p className="text - xs text - gray - 400 mt - 1">;
                    Leave empty for auto - generated alias;
                  </p>;
                </div>;
                <Button;
                  on_click={generateShortUrl}
                  disabled={!long_url.trim () || is_shortening}
                  className='w - full bg - gradient - to - r from - orange - 600 to - red - 600 hover:from - orange - 700 hover:to - red - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed';
                >;
                  {is_shortening ? (
                    <>;
                      <RefreshCw className='w - 5 h - 5 mr - 2 animate - spin' />                      Creating Short URL...;
                    </>) : (
                    <>;
                      <Link className='w - 5 h - 5 mr - 2' />                      Create Short URL                  className="w - full bg - gradient - to - r from - orange - 600 to - red - 600 hover:from - orange - 700 hover:to - red - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  {is_shortening ? (
                    <>;
                      <RefreshCw className="w - 5 h - 5 mr - 2 animate - spin" />;
                      Creating Short URL...;
                    </>) : (
                    <>;
                      <Link className='w - 5 h - 5 mr - 2' />                      <Link className="w - 5 h - 5 mr - 2" />;
                      Create Short URL;
                    </>)}
                </Button>;
                <div className='text - sm text - gray - 400'>                  <p>• Professional, branded short URLs</p>                <div className="text - sm text - gray - 400">;
                  <p>• Professional, branded short URLs</p>;
                  <p>• Click tracking and analytics</p>;
                  <p>• QR code generation</p>;
                  <p>• Custom aliases available</p>;
                </div>;
              </div>;
            </Card>;
            {/* Statistics */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - 2xl font - bold text - white mb - 6 flex items - center'>;
                <BarChart3 className='w - 6 h - 6 mr - 3 text - red - 400' />;
                Your Statistics;
              </h3>;
              <div className='space - y-6'>;
                <div className='grid grid - cols - 2 gap - 4'>;
                  <div className='text - center p - 4 bg - gray - 700 rounded - lg'>;
                    <div className='text - 3xl font - bold text - orange - 400 mb - 2'>;
                      {getTotalUrls ()}
                    </div>;
                    <div className='text - sm text - gray - 400'>Total URLs</div>;
                  </div>;
                  <div className='text - center p - 4 bg - gray - 700 rounded - lg'>;
                    <div className='text - 3xl font - bold text - red - 400 mb - 2'>;
                      {getTotalClicks ()}
                    </div>;
                    <div className='text - sm text - gray - 400'>Total Clicks</div>                  </div>;
                </div>;
                {shortened_urls.length === 0 ? (                Your Statistics;
              </h3>;
              <div className="space - y-6">;
                <div className="grid grid - cols - 2 gap - 4">;
                  <div className="text - center p - 4 bg - gray - 700 rounded - lg">;
                    <div className="text - 3xl font - bold text - orange - 400 mb - 2">;
                      {getTotalUrls ()}
                    </div>;
                    <div className="text - sm text - gray - 400">Total URLs</div>;
                  </div>;
                  <div className="text - center p - 4 bg - gray - 700 rounded - lg">;
                    <div className="text - 3xl font - bold text - red - 400 mb - 2">;
                      {getTotalClicks ()}
                    </div>;
                    <div className="text - sm text - gray - 400">Total Clicks</div>;
                  </div>;
                </div>;
                {shortened_urls.length === 0 ? (
                  <div className='bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center'>;
                    <div className='text - 6xl mb - 4'>📊</div>;
                    <p className='text - gray - 400'>;
                      Your URL statistics will appear here. Create your first;
                      short URL to get started.;
                  </div>) : (
                  <div className='space - y-3'>;
                    <h4 className='text - lg font - semibold text - white mb - 3'>;
                      Recent URLs;
                    </h4>;
                    {shortened_urls.slice (0, 3).map (url => (
                      <div key={url.id} className='p - 3 bg - gray - 700 rounded - lg'>;
                        <div className='flex items - center justify - between'>;
                          <div className='flex - 1 min - w-0'>;
                            <div className='text - sm text - orange - 400 font - medium truncate'>;
                              {url.short_url}
                            </div>;
                            <div className='text - xs text - gray - 400 truncate'>;
                              {url.long_url}
                            </div>;
                          </div>;
                          <div className='text - right ml - 3'>;
                            <div className='text - sm text - white font - medium'>                              {url.clicks} clicks                          <div className="text - right ml - 3">;
                            <div className="text - sm text - white font - medium">;
                              {url.clicks} clicks;
                            </div>;
                          </div>;
                        </div>;
                      </div>))}
                  </div>)}
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Shortened URLs List */}
      {shortened_urls.length > 0 && (
        <section className='py - 20 bg - gray - 800'>;
          <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 16'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
                Your Shortened URLs;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>                Manage and track all your shortened URLs in one place.;
              </p>;
            </div>;
        <section className="py - 20 bg - gray - 800">;
          <div className="max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <div className="text - center mb - 16">;
              <h2 className="text - 3xl sm:text - 4xl font - bold text - white mb - 6">;
                Your Shortened URLs;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              </p>;
            </div>;
            <div className='space - y-4'>;
              {shortened_urls.map (url => (
                <Card;
                  key={url.id}
                  className='p - 6 bg - gray - 700 border border - gray - 600';
                >;
                  <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
                    {/* URL Info */}
                    <div className='lg:col - span - 2'>;
                      <div className='flex items - start justify - between mb - 4'>;
                        <div className='flex - 1'>;
                          <div className='flex items - center space - x-3 mb - 2'>;
                            <h3 className='text - xl font - bold text - white'>;
                              {url.short_url}
                            </h3>;
                            <span className='px - 2 py - 1 bg - green - 500 / 20 text - green - 400 text - xs rounded - full'>;
                              Active;
                            </span>;
                          </div>;
                          <p className='text - gray - 400 text - sm break - all'>;
                            {url.long_url}
                          </p>;
                          <div className='flex items - center space - x-4 mt - 3 text - sm text - gray - 400'>;
                            <span>;
                              Created:{' '}
                              {new Date (url.created_at).toLocaleDateString ()}
                            </span>                            <span > Alias: {url.alias}</span>                    {/* URL Info */}
                    <div className="lg:col - span - 2">;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="flex - 1">;
                          <div className="flex items - center space - x-3 mb - 2">;
                            <h3 className="text - xl font - bold text - white">;
                              {url.short_url}
                            </h3>;
                            <span className="px - 2 py - 1 bg - green - 500 / 20 text - green - 400 text - xs rounded - full">;
                              Active;
                            </span>;
                          </div>;
                          <p className="text - gray - 400 text - sm break - all">;
                            {url.long_url}
                          </p>;
                          <div className="flex items - center space - x-4 mt - 3 text - sm text - gray - 400">;
                            <span > Created: {new Date (url.created_at).toLocaleDateString ()}</span>;
                            <span > Alias: {url.alias}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                    {/* Actions and Stats */}
                    <div className='flex flex - col space - y-3'>;
                      <div className='text - center p - 4 bg - gray - 800 rounded - lg'>;
                        <div className='text - 2xl font - bold text - orange - 400 mb - 1'>;
                          {url.clicks}
                        </div>;
                        <div className='text - xs text - gray - 400'>;
                          Total Clicks;
                          {url.clicks}
                        </div>;
                        <div className="text - xs text - gray - 400">Total Clicks</div>;
                      </div>;
                      <div className="flex space - x-2">;
                        <Button;
                          on_click={() => copyToClipboard (url.short_url)}
                          variant="outline";
                          size="sm";
                          className="flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                        >;
                          <Copy className='w - 4 h - 4 mr - 2' />                        </div>;
                      </div>;
                      <div className='flex space - x-2'>;
                        <Button;
                          on_click={() => copyToClipboard (url.short_url)}
                          variant="outline";
                          size="sm";
                          className="flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                        >;
                          <Copy className="w - 4 h - 4 mr - 2" />;
                          Copy;
                        </Button>;
                        <Button;
                          on_click={() => increment_clicks (url.id)}
                          variant='outline';
                          size='sm';
                          className='flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600';
                        >;
                          <Copy className='w - 4 h - 4 mr - 2' />                          Copy;
                        </Button>;
                        <Button;
                          on_click={() => increment_clicks (url.id)}
                          variant='outline';
                          size='sm';
                          className='flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600';
                        >;
                          <ExternalLink className='w - 4 h - 4 mr - 2' />                          Visit;
                        </Button>;
                      </div>;
                      <div className='flex space - x-2'>                          variant="outline";
                          size="sm";
                          className="flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                        >;
                          <ExternalLink className="w - 4 h - 4 mr - 2" />;
                          Visit;
                        </Button>;
                      </div>;
                      <div className='flex space - x-2'>;
                        <Button;
                          on_click={() =>;
                            setShowQR (showQR === url.id ? null : url.id);
                          }
                          variant='outline';
                          size='sm';
                          className='flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600';
                        >;
                          <QrCode className='w - 4 h - 4 mr - 2' />                          QR Code;
                        </Button>;
                        <Button;
                          on_click={() => delete_url (url.id)}                        <Button;
                          on_click={() => setShowQR (showQR === url.id ? null : url.id)}
                          variant="outline";
                          size="sm";
                          className="flex - 1 border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                        >;
                          <QrCode className="w - 4 h - 4 mr - 2" />;
                          QR Code;
                        </Button>;
                        <Button;
                          on_click={() => delete_url (url.id)}
                          variant='outline';
                          size='sm';
                          className='border - red - 600 text - red - 400 hover:bg - red - 600 hover:text - white';
                        >;
                          <Trash2 className='w - 4 h - 4' />                        </Button>                          variant="outline";
                          size="sm";
                          className="border - red - 600 text - red - 400 hover:bg - red - 600 hover:text - white";
                        >;
                          <Trash2 className="w - 4 h - 4" />;
                      </div>;
                    </div>;
                  </div>;
                  {/* QR Code */}
                  {showQR === url.id && (
                    <div className='mt - 4 p - 4 bg - gray - 800 rounded - lg text - center'>;
                      <img;
                        src={url.qr_code}
                        alt='QR Code';
                        className='mx - auto mb - 3 w - 32 h - 32';
                      />;
                      <p className='text - sm text - gray - 400'>                        Scan this QR code to visit the shortened URL                    <div className="mt - 4 p - 4 bg - gray - 800 rounded - lg text - center">;
                      <img;
                        src={url.qr_code}
                        alt="QR Code";
                        className="mx - auto mb - 3 w - 32 h - 32";
                      />;
                      <p className="text - sm text - gray - 400">;
                      </p>;
                    </div>)}
                </Card>))}
            </div>;
          </div>;
        </section>)}
      {/* Features */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Everything you need to create, manage, and track your shortened;
              URLs effectively.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔗</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Custom Aliases;
              </h3>;
              <p className='text - gray - 400'>;
                Create memorable, branded short URLs with custom aliases that;
                reflect your brand.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📊</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Click Analytics;
              </h3>;
              <p className='text - gray - 400'>;
                Track clicks, engagement, and performance metrics for all your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📱</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                QR Code Generation;
              </h3>;
              <p className='text - gray - 400'>;
                Generate QR codes for easy sharing and mobile access to your;
                shortened URLs.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🛡️</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Secure & Reliable;
              </h3>;
              <p className='text - gray - 400'>;
                Enterprise - grade infrastructure ensures your URLs are always;
                accessible and secure.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>⚡</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Fast Performance;
              </h3>;
              <p className='text - gray - 400'>;
                Lightning - fast redirects with global CDN for optimal user;
                experience worldwide.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔧</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Easy Management;
              </h3>;
              <p className='text - gray - 400'>;
                Simple dashboard to manage, edit, and delete your shortened URLs;
                as needed.              </p>            <Card className="text - center p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🔧</div>;
              <h3 className="text - xl font - bold text - white mb - 4">Easy Management</h3>;
              <p className="text - gray - 400">;
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className='py - 20 bg - gray - 800'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Perfect For Every Business Need;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              From marketing campaigns to social media, our URL shortener serves;
              all your link management needs.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>• Engagement tracking</li>;
                <li>• Brand consistency</li>;
              </ul>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>• Easy sharing</li>;
                <li>• Access tracking</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Shorten Your URLs?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses using our professional URL shortening service to improve their link management.
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
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-orange-600 to-red-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-orange-100 mb-8'>
            Join thousands of businesses using our professional URL shortening
            service to improve their link management.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-orange-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-orange-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
}
  );
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>);
);
  );
}
<<<<<<< HEAD

  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
