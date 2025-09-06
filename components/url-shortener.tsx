<<<<<<< HEAD

<<<<<<< HEAD
import Button from '../components/ui/Button';

import {

=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

=======
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default function URLShortenerPage() {;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]),
  const [isShortening, setIsShortening] = useState(false);



    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
<<<<<<< HEAD
  }
  const generateRandomAlias = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;

=======

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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
<<<<<<< HEAD
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
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';
export default function URLShortenerPage() {;
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]),
  const [isShortening, setIsShortening] = useState(false);
  const generateShortUrl = async () => {;
    if (!longUrl && longUrl.trim()) return;
    setIsShortening(true);
    // Simulate API call delay;
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias && customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion && zion.tech/${alias}`;
    const newShortUrl = {;
      id: Date && Date.now(),;
      longUrl: longUrl && longUrl.trim(),;
      shortUrl,;
      alias,;
      clicks: 0,;
      createdAt: new Date().toISOString(),;
      qrCode: `https://api && api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`,;
    };
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
  };
  const generateRandomAlias = () => {;
    const chars =;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {;
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
    }
    return result;
    setIsShortening(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
=======
<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Button from '../components/ui/Button';

import {
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Link,
  Copy,
  BarChart3,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  QrCode,
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  Settings,;
  Trash2,;
} from 'lucide-react';import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';
export default function URLShortenerPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
<<<<<<< HEAD
  };
  const generateRandomAlias = () => {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0, i < 6, i++) {;
      result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let index = 0, i < 6, i++) {
      result += chars.char_at (Math.floor (Math.random () * chars.length));
    }
<<<<<<< HEAD

    <>
      <Head>
        <title>URL Shortener - Zion Tech Group</title>
        <meta name="description" content="Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently." />
        <meta property="og:title" content="URL Shortener - Zion Tech Group" />
        <meta property="og:description" content="Professional URL shortening service with analytics and QR code generation." />
      </Head>


=======
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
  }
  const generateRandomAlias = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false)
  }
  const generateRandomAlias = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    for (let i = 0, i < 6, i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.
          </p>
        </div>
      </section>
<<<<<<< HEAD
      {/* URL Shortening Tool */}

        />;
      </Head>;

=======
<<<<<<< HEAD
{/* URL Shortening Tool */}
        />;
      </Head>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Link className='w-6 h-6 mr-3 text-orange-400' />;
                URL Shortening;
              </h3>;
<<<<<<< HEAD

              <div className='space-y-6'>;

=======
              <div className='space-y-6'>;
                {/* Long URL Input */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    Long URL;
                  </label>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Long URL Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Long URL
                  </label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <input
                    type='url'
                    value={longUrl}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Create Short URLs Instantly
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


                {/* Custom Alias */}

=======
                    onChange={(e) => setLongUrl(e && e.target.value)}
                    placeholder="https://example && example.com/very-long-url-that-needs-shortening";
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
                  />;
                </div>;
                {/* Custom Alias */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >
                  {isShortening ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Short URL...
                    </>
                  ) : (
                    <>
<<<<<<< HEAD

                      <Link className="w-5 h-5 mr-2" />

=======
<<<<<<< HEAD
<Link className="w-5 h-5 mr-2" />
=======
                      <Link className='w-5 h-5 mr-2' />                      <Link className="w-5 h-5 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      Create Short URL
                    </>
                  )}
                </Button>
<<<<<<< HEAD


                <div className="text-sm text-gray-400">

=======
<<<<<<< HEAD
<div className="text-sm text-gray-400">
=======
                <div className='text-sm text-gray-400'>                  <p>• Professional, branded short URLs</p>                <div className="text-sm text-gray-400">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
                </div>
              </div>
            </Card>
<<<<<<< HEAD
            {/* Statistics */}

=======
<<<<<<< HEAD
{/* Statistics */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='text-center p-4 bg-gray-700 rounded-lg'>
                    <div className='text-3xl font-bold text-orange-400 mb-2'>
                      {getTotalUrls()}
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
                      {getTotalUrls()}
                    </div>
                    <div className="text-sm text-gray-400">Total URLs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {getTotalClicks()}
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
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-6">;
                <div className="grid grid-cols-2 gap-4">;
                  <div className="text-center p-4 bg-gray-700 rounded-lg">;
                    <div className="text-3xl font-bold text-orange-400 mb-2">;
<<<<<<< HEAD

=======
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {getTotalUrls()}
                    </div>
                    <div className="text-sm text-gray-400">Total URLs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {getTotalClicks()}
<<<<<<< HEAD


                    </div>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                            <div className="text-sm text-white font-medium">
                              {url.clicks} clicks
                            </div>
                          </div>
                        </div>
                      </div>
</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}
                  </div>;
                )}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (


=======
                    ))}
                  </div>;
                )}
<<<<<<< HEAD
=======
              </div>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Shortened URLs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">

=======
<<<<<<< HEAD
                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          onClick={() => incrementClicks(url.id)}
<<<<<<< HEAD
                          variant="outline"

=======
<<<<<<< HEAD
variant="outline"
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </Button>
                      </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


                          onClick={() => deleteUrl(url && url.id)}
=======
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
<<<<<<< HEAD
variant="outline"
=======
                          variant='outline'
                          size='sm'
                          className='border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                        >
                          <Trash2 className='w-4 h-4' />                        </Button>                          variant="outline"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
onClick={() => deleteUrl(url && url.id)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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



                  {/* QR Code */}


                        className="mx-auto mb-3 w-32 h-32"

=======
                      />
                      <p className="text-sm text-gray-400">
                        Scan this QR code to visit the shortened URL
                      </p>
                    </div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
<<<<<<< HEAD
                        Scan this QR code to visit the shortened URL
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </p>
                    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  )}
</Card>;
              ))}
            </div>;
          </div>;
        </section>;
      )}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional URL Shortening Features
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
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Features */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Features */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

              Professional URL Shortening Features
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
              <p className="text-gray-400">
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.
<<<<<<< HEAD

              </p>

=======
<<<<<<< HEAD
              </p>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Use Cases */}

=======
<<<<<<< HEAD
{/* Use Cases */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Business Need
<<<<<<< HEAD

=======
            </h2>
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </h2>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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


            <Card className="p-8 bg-gray-700 border border-gray-600">

=======
<<<<<<< HEAD
<Card className="p-8 bg-gray-700 border border-gray-600">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-400 mb-6">
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD

                <li>• Professional appearance</li>

=======
<<<<<<< HEAD
                <li>• Professional appearance</li>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
              </ul>
            </Card>
<<<<<<< HEAD


            <Card className="p-8 bg-gray-700 border border-gray-600">

=======
<<<<<<< HEAD
<Card className="p-8 bg-gray-700 border border-gray-600">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD

                <li>• Clean email design</li>

=======
<<<<<<< HEAD
                <li>• Clean email design</li>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
              </ul>
            </Card>
<<<<<<< HEAD


            <Card className="p-8 bg-gray-700 border border-gray-600">

=======
<<<<<<< HEAD
<Card className="p-8 bg-gray-700 border border-gray-600">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>
              <p className="text-gray-400 mb-6">
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD

                <li>• Professional branding</li>

=======
<<<<<<< HEAD
                <li>• Professional branding</li>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      <section className='py-20 bg-gray-900'>;
=======
<section className='py-20 bg-gray-900'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <li>• Engagement tracking</li>;
                <li>• Brand consistency</li>;
              </ul>;
            </Card>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <li>• Easy sharing</li>;
                <li>• Access tracking</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
<<<<<<< HEAD
className='border-white text-white hover:bg-white hover:text-orange-600'>              href="/pricing";
              variant="outline";
              size="lg";
              className="border-white text-white hover:bg-white hover:text-orange-600";
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - orange - 600 to - red - 600'>;
        <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
          </h2>;
          <p className='text - xl text - orange - 100 mb - 8'>;
            Join thousands of businesses using our professional URL shortening;
            service to improve their link management.;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
            <Button;
              href='/contact';
              size='lg';
              className='bg - white text - orange - 600 hover:bg - gray - 100';
            >;
              Get Started Today;
              <ArrowRight className='w - 5 h - 5 ml - 2' />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border - white text - white hover:bg - white hover:text - orange - 600'            >              href="/pricing";
              variant="outline";
              size="lg";
              className="border - white text - white hover:bg - white hover:text - orange - 600";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  );
<<<<<<< HEAD

}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </>);
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
