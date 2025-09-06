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

  CheckCircle,;
  AlertTriangle,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

=======
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default function APIRateLimiterPage() {;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
export default function APIRateLimiterPage() {;
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');
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
  Shield
  Zap
  BarChart3
  Code
  ArrowRight
  Copy
  RefreshCw
  CheckCircle
  AlertTriangle;
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export default function APIRateLimiterPage() {
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  Shield,
  Zap,
  BarChart3,
  Code,
  ArrowRight,
  Copy,
  RefreshCw,
<<<<<<< HEAD
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
export default /**
 * APIRateLimiterPage - Function description
 */
function APIRateLimiterPage() {
  const [endpoint, set_endpoint] = useState ('');
  const [rate_limit, setRateLimit] = useState ('100');
  const [time_window, setTimeWindow] = useState ('1m');
  const [test_results, setTestResults] = useState < any[]>([]);
  const [is_testing, setIsTesting] = useState (false);
  const [api_key, setApiKey] = useState ('');
;
  const time_windows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
];
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
];
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  const timeWindows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },;
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },;
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },;
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  const rateLimits = [;
    { value: '10', label: '10 requests', description: 'Very strict' },;
    { value: '100', label: '100 requests', description: 'Standard' },;
    { value: '1000', label: '1000 requests', description: 'High volume' },;
    { value: '10000', label: '10000 requests', description: 'Enterprise' },;
  ];
  const generateApiKey = () => {;
    const key =;
      'zt_' +;
      Math && Math.random().toString(36).substr(2, 9) +;
      '_' +;
      Date && Date.now().toString(36);
    setApiKey(key);  };
  const testRateLimiting = async () => {;
    if (!endpoint && endpoint.trim() || !rateLimit || !timeWindow) return;
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {;
    const key = 'zt_' + Math && Math.random().toString(36).substr(2, 9) + '_' + Date && Date.now().toString(36);
    setApiKey(key);
  };
  const testRateLimiting = async () => {;
    if (!endpoint && endpoint.trim() || !rateLimit || !timeWindow) return;
=======
  CheckCircle,;
  AlertTriangle,;
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
export default function APIRateLimiterPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const timeWindows = [
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' }
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' }
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' }
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' }
    { value: '100', label: '100 requests', description: 'Standard' }
    { value: '1000', label: '1000 requests', description: 'High volume' }
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key =
      'zt_' +
      Math.random().toString(36).substr(2, 9) +
      '_' +
      Date.now().toString(36);
    setApiKey(key);  }
  const testRateLimiting = async () => {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
=======
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
<<<<<<< HEAD
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
<<<<<<< HEAD

    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
=======


  ];

    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },

    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
=======

    if (!endpoint.trim() || !rateLimit || !timeWindow) return;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


  const timeWindows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },;
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },;
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },;
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
=======
=======
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  };

<<<<<<< HEAD
<<<<<<< HEAD
  const testRateLimiting = async () => {
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;
=======
  const testRateLimiting = async () => {;
    if (!endpoint && endpoint.trim() || !rateLimit || !timeWindow) return;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const testRateLimiting = async () => {
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];
<<<<<<< HEAD


    // Simulate API calls to test rate limiting;
    for (let i = 1; i <= limit + 5; i++) {;

=======
<<<<<<< HEAD
    // Simulate API calls to test rate limiting;
    for (let i = 1; i <= limit + 5; i++) {;
=======
    // Simulate API calls to test rate limiting
    for (let i = 1; i <= limit + 5; i++) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      await new Promise(resolve => setTimeout(resolve, 100));
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      results && results.push({;
        request: i,;
        timestamp: new Date().toLocaleTimeString(),;
        status,;
        statusCode,;
        responseTime: Math && Math.random() * 100 + 50,;
        headers: {;
          'X-RateLimit-Limit': limit,;
          'X-RateLimit-Remaining': Math && Math.max(0, limit - i),;
          'X-RateLimit-Reset': new Date(Date && Date.now() + 60000).toISOString(),;
        },;
<<<<<<< HEAD

=======
=======
      results.push({
        request: i
        timestamp: new Date().toLocaleTimeString()
        status
        statusCode
        responseTime: Math.random() * 100 + 50
        headers: {
          'X-RateLimit-Limit': limit
          'X-RateLimit-Remaining': Math.max(0, limit - i)
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
      if (!isAllowed) break;
    }
    setTestResults(results);
    setIsTesting(false);
<<<<<<< HEAD

  };

  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);  };    setIsTesting(true);
    setTestResults([]);

    const limit = parseInt(rateLimit);
    const results = [];

    // Simulate API calls to test rate limiting;
    for (let i = 1, i <= limit + 5, i++) {;
      await new Promise(resolve => setTimeout(resolve, 100));

      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;

=======
<<<<<<< HEAD
  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);  };    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];
    // Simulate API calls to test rate limiting;
    for (let i = 1, i <= limit + 5, i++) {;
=======
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);  };    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      await new Promise(resolve => setTimeout(resolve, 100));
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      results && results.push({;
        request: i,;
        timestamp: new Date().toLocaleTimeString(),;
        status;
        statusCode;
        responseTime: Math && Math.random() * 100 + 50,;
        headers: {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math && Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date && Date.now() + 60000).toISOString();
        }
      });
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!isAllowed) break;
    }
    setTestResults(results);
    setIsTesting(false);
  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);
  };
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'success':;
<<<<<<< HEAD

        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'rate_limited':;
        return <AlertTriangle className='w-5 h-5 text-red-400' />;
<<<<<<< HEAD
      default:

=======

=======
=======
        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'rate_limited':;
        return <AlertTriangle className='w-5 h-5 text-red-400' />;
      default:;
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }      case 'rate_limited':;
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:;
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  const testRateLimiting = async () => {
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
;
  const rate_limits = [;
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
    { value: '10000', label: '10000 requests', description: 'Enterprise' },
  ];
;
  const generateApiKey = () =>: any {
    const key =;
      'zt_' +;
      Math.random ().to_string (36).substr (2, 9) +;
      '_' +;
      Date.now ().to_string (36);
    setApiKey (key);  }
;
  const testRateLimiting = async () => {
    if (|| !rate_limit || !time_window) return) {
  $2
}
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
;
  const generateApiKey = () =>: any {
    const key = 'zt_' + Math.random ().to_string (36).substr (2, 9) + '_' + Date.now ().to_string (36);
    setApiKey (key);
  }
;
  const testRateLimiting = async () => {
    if (|| !rate_limit || !time_window) return) {
  $2
}
    setIsTesting (true);
    setTestResults ([]);
;
    const limit = parse_int (rate_limit);
    const results = [];
;
    // Simulate API calls to test rate limiting;
    for (let index = 1; i <= limit + 5; i++) {
      await new Promise (resolve => set_timeout (resolve, 100));
;
      const is_allowed = i <= limit;
      const status = is_allowed ? 'success' : 'rate_limited';
      const status_code = is_allowed ? 200 : 429;
;
      results.push ({
        request: i,
        timestamp: new Date ().toLocaleTimeString (),
        status,
        status_code,
        response_time: Math.random () * 100 + 50,
        headers: {
          'X - RateLimit - Limit': limit,
          'X - RateLimit - Remaining': Math.max (0, limit - i),
          'X - RateLimit - Reset': new Date (Date.now () + 60000).toISOString (),
        },
      });
;
      // Check condition
if (break) {
  $2
}
    }
    setTestResults (results);
    setIsTesting (false);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);  }    setIsTesting (true);
    setTestResults ([]);
;
    const limit = parse_int (rate_limit);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const results = [];
;
    // Simulate API calls to test rate limiting;
    for (let index = 1, i <= limit + 5, i++) {
      await new Promise (resolve => set_timeout (resolve, 100));
;
      const is_allowed = i <= limit;
      const status = is_allowed ? 'success' : 'rate_limited';
      const status_code = is_allowed ? 200 : 429;
;
      results.push ({
        request: i,
        timestamp: new Date ().toLocaleTimeString (),
        status;
        status_code;
        response_time: Math.random () * 100 + 50,
        headers: {
          'X - RateLimit - Limit': limit;
          'X - RateLimit - Remaining': Math.max (0, limit - i);
          'X - RateLimit - Reset': new Date (Date.now () + 60000).toISOString ();
        }
      });
;
      // Check condition
if (break) {
  $2
}
    }
    setTestResults (results);
    setIsTesting (false);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const getStatusIcon = (status: string) =>: any {
    switch (status) {
<<<<<<< HEAD

      default:


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }

    }

<<<<<<< HEAD
  };

=======



  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:
<<<<<<< HEAD
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }

=======

=======
        return 'text-yellow-400'
    }

=======
        return 'text-yellow-400'
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'success':;
        return 'text-green-400';
      case 'rate_limited':;
        return 'text-red-400',;
      default:;
        return 'text-yellow-400';    }        return 'text-yellow-400';
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
=======
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }


  };


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (


=======
    }
  }
=======
      results.push({
        request: i
        timestamp: new Date().toLocaleTimeString()
        status;
        statusCode;
        responseTime: Math.random() * 100 + 50
        headers: {
          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
      });
      if (!isAllowed) break
    }
    setTestResults(results);
    setIsTesting(false)
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'rate_limited':
        return <AlertTriangle className='w-5 h-5 text-red-400' />;
      default:
<<<<<<< HEAD
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
<<<<<<< HEAD
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }

    }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }
<<<<<<< HEAD
  }
=======

  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
      </Head>
      {/* Hero Section */}
=======
        <meta
          name='description'
          content='Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.'
        />
        <meta
          property='og:title'
          content='API Rate Limiter - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Protect your APIs with intelligent rate limiting and prevent abuse.'
        />
      </Head>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6'>
              <Shield className='w-4 h-4 mr-2' />
              API Protection & Security
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
            API Rate Limiter
          </h1>
          <p className='text-xl text-green-200 max-w-4xl mx-auto leading-relaxed'>
            Protect your APIs from abuse with intelligent rate limiting. Ensure
            fair usage, prevent DDoS attacks, and maintain optimal performance
            for all your users with our enterprise-grade rate limiting solution.          </p>      </Head>
      {/* Hero Section */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              API Protection & Security
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            API Rate Limiter
          </h1>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
          </p>
        </div>
      </section>
      {/* Rate Limiter Configuration */}
<<<<<<< HEAD
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6'>;
              <Shield className='w-4 h-4 mr-2' />;
              API Protection & Security;
            </div>;
          </div>;
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
            API Rate Limiter;
          </h1>;
          <p className='text-xl text-green-200 max-w-4xl mx-auto leading-relaxed'>;
            Protect your APIs from abuse with intelligent rate limiting. Ensure;
            fair usage, prevent DDoS attacks, and maintain optimal performance;
            for all your users with our enterprise-grade rate limiting solution.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">;
              <Shield className="w-4 h-4 mr-2" />;
              API Protection & Security;
            </div>;
          </div>;
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;
            API Rate Limiter;
          </h1>;
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">;
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.;
          </p>;
        </div>;
      </section>;
      {/* Rate Limiter Configuration */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Configure Your Rate Limiting;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Set up intelligent rate limiting rules to protect your APIs and;
              ensure fair usage across all users.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Configuration Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Code className='w-6 h-6 mr-3 text-green-400' />;
                Rate Limiting Rules;
              </h3>;
              <div className='space-y-6'>;
                {/* API Endpoint */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    API Endpoint;
                  </label>;
                  <input
                    type='text'
                    value={endpoint}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Configure Your Rate Limiting
=======
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Configure Your Rate Limiting
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Set up intelligent rate limiting rules to protect your APIs and
              ensure fair usage across all users.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Configuration Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Code className='w-6 h-6 mr-3 text-green-400' />
                Rate Limiting Rules
              </h3>
              <div className='space-y-6'>
                {/* API Endpoint */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    API Endpoint
                  </label>
                  <input
                    type='text'
                    value={endpoint}
                    onChange={e => setEndpoint(e.target.value)}
                    placeholder='e.g., /api/users, /api/data, /api/analytics'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'                  />              Configure Your Rate Limiting
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Rate Limiting Rules
              </h3>
              <div className="space-y-6">
<<<<<<< HEAD
                    onChange={e => setEndpoint(e && e.target.value)}
                    placeholder='e && e.g., /api/users, /api/data, /api/analytics';
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'                  />              Configure Your Rate Limiting;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">;
                <Code className="w-6 h-6 mr-3 text-green-400" />;
                Rate Limiting Rules;
              </h3>;
              <div className="space-y-6">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* API Endpoint */}
                <div>;
                  <labelclassName="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Endpoint
                  ">;
                    API Endpoint;
                  </label>;
                  <input
                    type="text"
                    value={endpoint}
<<<<<<< HEAD


                {/* Rate Limit */}

=======
=======
                    onChange={(e) => setEndpoint(e && e.target.value)}
                    placeholder="e && e.g., /api/users, /api/data, /api/analytics";
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                  />;
                </div>;
                {/* Rate Limit */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div>
<<<<<<< HEAD
=======
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Rate Limit
                  ">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
                      <button
      case 'success':;
        return <CheckCircle className='w - 5 h - 5 text - green - 400' />;
      case 'rate_limited':;
        return <AlertTriangle className='w - 5 h - 5 text - red - 400' />;
      default:;
        return <AlertTriangle className='w - 5 h - 5 text - yellow - 400' />;    }      case 'rate_limited':;
        return <AlertTriangle className="w - 5 h - 5 text - red - 400" />;
      default:;
        return <AlertTriangle className="w - 5 h - 5 text - yellow - 400" />;
    }
  }
;
  const getStatusColor = (status: string) =>: any {
    switch (status) {
      case 'success':;
        return 'text - green - 400';
      case 'rate_limited':;
        return 'text - red - 400',
      default:;
        return 'text - yellow - 400';    }        return 'text - yellow - 400';
    }
  }
;
  return (
    <>;
      <Head>;
        <title > API Rate Limiter - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.';
        />;
        <meta;
          property='og:title';
          content='API Rate Limiter - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Protect your APIs with intelligent rate limiting and prevent abuse.';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 32 pb - 20 bg - gradient - to - br from - green - 900 via - blue - 900 to - indigo - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 8'>;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 20 border border - green - 400 / 30 text - green - 300 text - sm font - medium mb - 6'>;
              <Shield className='w - 4 h - 4 mr - 2' />;
              API Protection & Security;
            </div>;
          </div>;
          <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
            API Rate Limiter;
          </h1>;
          <p className='text - xl text - green - 200 max - w-4xl mx - auto leading - relaxed'>;
            Protect your APIs from abuse with intelligent rate limiting. Ensure;
            fair usage, prevent DDoS attacks, and maintain optimal performance;
            for all your users with our enterprise - grade rate limiting solution.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt - 32 pb - 20 bg - gradient - to - br from - green - 900 via - blue - 900 to - indigo - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <div className="mb - 8">;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 20 border border - green - 400 / 30 text - green - 300 text - sm font - medium mb - 6">;
              <Shield className="w - 4 h - 4 mr - 2" />;
              API Protection & Security;
            </div>;
          </div>;
          <h1 className="text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight">;
            API Rate Limiter;
          </h1>;
          <p className="text - xl text - green - 200 max - w-4xl mx - auto leading - relaxed">;
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise - grade rate limiting solution.;
          </p>;
        </div>;
      </section>;
      {/* Rate Limiter Configuration */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Configure Your Rate Limiting;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Set up intelligent rate limiting rules to protect your APIs and;
              ensure fair usage across all users.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {/* Configuration Form */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - 2xl font - bold text - white mb - 6 flex items - center'>;
                <Code className='w - 6 h - 6 mr - 3 text - green - 400' />;
                Rate Limiting Rules;
              </h3>;
              <div className='space - y-6'>;
                {/* API Endpoint */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    API Endpoint;
                  </label>;
                  <input;
                    type='text';
                    value={endpoint}
                    on_change={e => set_endpoint (e.target.value)}
                    placeholder='e.g., /api / users, /api / data, /api / analytics';
                    className='w - full px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - green - 500 focus:border - transparent'                  />              Configure Your Rate Limiting;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
            {/* Configuration Form */}
            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center">;
                <Code className="w - 6 h - 6 mr - 3 text - green - 400" />;
                Rate Limiting Rules;
              </h3>;
              <div className="space - y-6">;
                {/* API Endpoint */}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2" html_for="input-;
                    API Endpoint;
                  ">;
                    API Endpoint;
                  </label>;
                  <input;
                    type="text";
                    value={endpoint}
                    on_change={(e) => set_endpoint (e.target.value)}
                    placeholder="e.g., /api / users, /api / data, /api / analytics";
                    className="w - full px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - green - 500 focus:border - transparent";
                  />;
                </div>;
                {/* Rate Limit */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Rate Limit;
                  </label>;
                  <div className='grid grid - cols - 2 gap - 3'>;
                    {rate_limits.map (limit => (                      <button                  <label className="block text - sm font - medium text - gray - 300 mb - 3" html_for="input-;
                    Rate Limit;
                  ">;
                    Rate Limit;
                  </label>;
                  <div className="grid grid - cols - 2 gap - 3">;
                    {rate_limits.map ((limit) => (
<<<<<<< HEAD

=======
                <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Rate Limit
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
<<<<<<< HEAD

=======

                    {rateLimits.map(limit => (                      <button

                      <button


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        key={limit.value}
                        on_click={() => setRateLimit (limit.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          rate_limit === limit.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}
<<<<<<< HEAD
<<<<<<< HEAD
                      >
                        <div className='font-medium'>{limit.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {limit.description}
                        </div>                      </button>                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
                      </button>

=======

                  </div>;
                </div>;


                {/* Time Window */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
<<<<<<< HEAD

=======

                    {timeWindows.map(window => (                      <button

                      <button


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  </div>;
                </div>;
                {/* Time Window */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
                      <button
                      >;
                        <div className='font - medium'>{limit.label}</div>;
                        <div className='text - xs text - gray - 400 mt - 1'>;
                          {limit.description}
                        </div>                      </button>                        <div className="font - medium">{limit.label}</div>;
                        <div className="text - xs text - gray - 400 mt - 1">{limit.description}</div>;
                      </button>))}
                  </div>;
                </div>;
                {/* Time Window */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Time Window;
                  </label>;
                  <div className='grid grid - cols - 2 gap - 3'>;
                    {time_windows.map (window => (                      <button                  <label className="block text - sm font - medium text - gray - 300 mb - 3" html_for="input-;
                    Time Window;
                  ">;
                    Time Window;
                  </label>;
                  <div className="grid grid - cols - 2 gap - 3">;
                    {time_windows.map ((window) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        key={window.value}
                        on_click={() => setTimeWindow (window.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          time_window === window.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}
<<<<<<< HEAD
<<<<<<< HEAD
                      >
                        <div className='font-medium'>{window.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {window.description}
                        </div>                      </button>                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
                      </button>

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                </div>;
                {/* API Key Generation */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Key
                  ">
                    API Key
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />;
                    <Button
                      onClick={generateApiKey}
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
    
    setIsTesting(true),
    setTestResults([]),
    
    const limit = parseInt(rateLimit)
    const results = []
    
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
      await new Promise(resolve => setTimeout(resolve, 100)),
      
      const isAllowed = i <= limit
      const status = isAllowed ? 'success' : 'rate_limited'
      const statusCode = isAllowed ? 200 : 429
      
      results.push({
        request: i,
        timestamp: new Date().toLocaleTimeString(),
        status,
        statusCode,
        responseTime: Math.random() * 100 + 50,
        headers: {
          'X-RateLimit-Limit': limit,
          'X-RateLimit-Remaining': Math.max(0, limit - i),
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
      }),

      if (!isAllowed) break
    }
    
    setTestResults(results),
    setIsTesting(false)
  },

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  },

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />,
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />,
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
  },
    }
  },
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;}
  };

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'success':
        return 'text-green-400',
      case 'rate_limited':
        return 'text-red-400',
      default:
        return 'text-yellow-400'
    }
  },

  return (_<>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;API Rate Limiter - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Protect your APIs with intelligent rate limiting and prevent abuse.&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6&quot;>
              <Shield className=&quot;w-4 h-4 mr-2&quot; />
              API Protection & Security
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            API Rate Limiter
          </h1>
          <p className=&quot;text-xl text-green-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, 
            and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
          </p>
        </div>
      </section>

      {/* Rate Limiter Configuration */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Configure Your Rate Limiting
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Configuration Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center&quot;>
                <Code className=&quot;w-6 h-6 mr-3 text-green-400&quot; />
                Rate Limiting Rules
              </h3>

              <div className=&quot;space-y-6&quot;>
                {/* API Endpoint */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    API Endpoint
                  </label>
                  <input
                    type=&quot;text&quot;
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder=&quot;e.g., /api/users, /api/data, /api/analytics&quot;
                    className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent&quot;
                  />
                </div>

                {_/* Rate Limit */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Rate Limit
                  </label>
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {rateLimits.map((limit) => (
                      <button
                        key={limit.value}
                        onClick={_() => setRateLimit(limit.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className=&quot;font-medium&quot;>{limit.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{limit.description}</div>
=======
                {/* API Endpoint */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Endpoint
                  ">
                    API Endpoint
                  </label>
                  <input
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                {/* Rate Limit */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Rate Limit
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
<<<<<<< HEAD
                    {rateLimits.map(limit => (                      <button                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Rate Limit
                  ">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
=======
                    {rateLimits.map(limit => (                      <button

                      <button

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        key={limit.value}
                        onClick={() => setRateLimit(limit.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className='font-medium'>{limit.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {limit.description}
                        </div>                      </button>                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </button>
<<<<<<< HEAD
                    ))}
                  </div>
                </div>
<<<<<<< HEAD

                {_/* Time Window */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Time Window
                  </label>
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {timeWindows.map((window) => (
                      <button
                        key={window.value}
                        onClick={_() => setTimeWindow(window.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className=&quot;font-medium&quot;>{window.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{window.description}</div>
=======
=======

                    ))}
                  </div>
                </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
<<<<<<< HEAD
                    {timeWindows.map(window => (                      <button                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
=======
                    {timeWindows.map(window => (                      <button

                      <button

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        key={window.value}
                        onClick={() => setTimeWindow(window.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className='font-medium'>{window.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {window.description}
                        </div>                      </button>                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </button>
<<<<<<< HEAD
                    ))}
                  </div>
                </div>
<<<<<<< HEAD

<<<<<<< HEAD

=======

=======
                {_/* API Key Generation */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    API Key
                  </label>
                  <div className=&quot;flex space-x-2&quot;>
                    <input
                      type=&quot;text&quot;
                      value={apiKey}
                      readOnly
                      placeholder=&quot;Generate an API key to test rate limiting&quot;
                      className=&quot;flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400&quot;
                    />
                    <Button
                      onClick={generateApiKey}
                      className=&quot;px-6 py-3 bg-green-600 hover:bg-green-700 text-white&quot;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

                    ))}
                  </div>
                </div>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {/* API Key Generation */}


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {/* API Key Generation */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    API Key
                  </label>
                  <div className='flex space-x-2'>
                    <input
                      type='text'
                      value={apiKey}
                      readOnly
                      placeholder='Generate an API key to test rate limiting'
                      className='flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400'
                    />
                    <Button
                      onClick={generateApiKey}
                      className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white'                    >                    API Key
                  </label>
                  <div className="flex space-x-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={generateApiKey}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    >
                      Generate
                    </Button>
                  </div>
                </div>
<<<<<<< HEAD

                <Button
                  onClick={testRateLimiting}
<<<<<<< HEAD
=======
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className=&quot;w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
                >
                  {_isTesting ? (
                    <>
                      <RefreshCw className=&quot;w-5 h-5 mr-2 animate-spin&quot; />

=======
                <Button
                  onClick={testRateLimiting}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  disabled={
                    !endpoint.trim() |!rateLimit |!timeWindow |isTesting
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin' />                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className='w-5 h-5 mr-2' />                      Test Rate Limiting                  disabled={!endpoint.trim() |!rateLimit |!timeWindow |isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
<<<<<<< HEAD
                      <Zap className='w-5 h-5 mr-2' />                      <Zap className="w-5 h-5 mr-2" />
=======
<<<<<<< HEAD
<Zap className="w-5 h-5 mr-2" />
=======
                      <Zap className='w-5 h-5 mr-2' />                      <Zap className="w-5 h-5 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white">;
                      Generate;
                    </Button>;
                  </div>;
                </div>;
                <Button
                  onClick={testRateLimiting}
                  disabled={
                    !endpoint && endpoint.trim() || !rateLimit || !timeWindow || isTesting
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>;
                  {isTesting ? (;
                    <>;
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin' />                      Testing Rate Limiting...;
                    </>;
                  ) : (;
                    <>;
                      <Zap className='w-5 h-5 mr-2' />                      Test Rate Limiting                  disabled={!endpoint && endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed";
                >;
                  {isTesting ? (;
                    <>;
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />;
                      Testing Rate Limiting...;
                    </>;
                  ) : (;
                    <>;
                      <Zap className='w-5 h-5 mr-2' />                      <Zap className="w-5 h-5 mr-2" />;
                      Test Rate Limiting;
                    </>;
                  )}
                </Button>;
              </div>;
            </Card>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <div className='flex items-center justify-between mb-6'>;
                <h3 className='text-2xl font-bold text-white flex items-center'>;
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <div className="flex items-center justify-between mb-6">;
                <h3 className="text-2xl font-bold text-white flex items-center">;
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />;
                </h3>;
                {testResults && testResults.length > 0 && (;
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
<<<<<<< HEAD

=======


                  Test Results


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </h3>
                {testResults.length > 0 && (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <Button
                    onClick={() => setTestResults([])}
                    variant='outline';
                    size='sm';
                    className='border-gray-600 text-gray-300 hover:bg-gray-700'                  >                    variant="outline";
                    size="sm";
                    className="border-gray-600 text-gray-300 hover:bg-gray-700";
                  >;
                    Clear Results;
                  </Button>;
                )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
              {testResults && testResults.length > 0 ? (;
                <div className='space-y-3 max-h-96 overflow-y-auto'>                  {testResults && testResults.map((result, index) => (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result && result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'                <div className="space-y-3 max-h-96 overflow-y-auto">;
                  {testResults && testResults.map((result, index) => (;
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
<<<<<<< HEAD

=======
                        result && result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'
                      }`}>;
                      <div className='flex items-center justify-between mb-2'>;
                        <div className='flex items-center space-x-3'>;
                          {getStatusIcon(result && result.status)}
                          <span
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      >;
                        <div className='font - medium'>{window.label}</div>;
                        <div className='text - xs text - gray - 400 mt - 1'>;
                          {window.description}
                        </div>                      </button>                        <div className="font - medium">{window.label}</div>;
                        <div className="text - xs text - gray - 400 mt - 1">{window.description}</div>;
                      </button>))}
                  </div>;
                </div>;
                {/* API Key Generation */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    API Key;
                  </label>;
                  <div className='flex space - x-2'>;
                    <input;
                      type='text';
                      value={api_key}
                      read_only;
                      placeholder='Generate an API key to test rate limiting';
                      className='flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400';
                    />;
                    <Button;
                      on_click={generateApiKey}
                      className='px - 6 py - 3 bg - green - 600 hover:bg - green - 700 text - white'                    >                    API Key;
                  </label>;
                  <div className="flex space - x-2">;
                    <input;
                      type="text";
                      value={api_key}
                      read_only;
                      placeholder="Generate an API key to test rate limiting";
                      className="flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400";
                    />;
                    <Button;
                      on_click={generateApiKey}
                      className="px - 6 py - 3 bg - green - 600 hover:bg - green - 700 text - white";
                    >;
                      Generate;
                    </Button>;
                  </div>;
                </div>;
                <Button;
                  on_click={testRateLimiting}
                  disabled={
                    !endpoint.trim () || !rate_limit || !time_window || is_testing;
                  }
                  className='w - full bg - gradient - to - r from - green - 600 to - blue - 600 hover:from - green - 700 hover:to - blue - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed';
                >;
                  {is_testing ? (
                    <>;
                      <RefreshCw className='w - 5 h - 5 mr - 2 animate - spin' />                      Testing Rate Limiting...;
                    </>) : (
                    <>;
                      <Zap className='w - 5 h - 5 mr - 2' />                      Test Rate Limiting                  disabled={!endpoint.trim () || !rate_limit || !time_window || is_testing}
                  className="w - full bg - gradient - to - r from - green - 600 to - blue - 600 hover:from - green - 700 hover:to - blue - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  {is_testing ? (
                    <>;
                      <RefreshCw className="w - 5 h - 5 mr - 2 animate - spin" />;
                      Testing Rate Limiting...;
                    </>) : (
                    <>;
                      <Zap className='w - 5 h - 5 mr - 2' />                      <Zap className="w - 5 h - 5 mr - 2" />;
                      Test Rate Limiting;
                    </>)}
                </Button>;
              </div>;
            </Card>;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {/* Test Results */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <div className='flex items - center justify - between mb - 6'>;
                <h3 className='text - 2xl font - bold text - white flex items - center'>;
                  <BarChart3 className='w - 6 h - 6 mr - 3 text - blue - 400' />                  Test Results            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <div className="flex items - center justify - between mb - 6">;
                <h3 className="text - 2xl font - bold text - white flex items - center">;
                  <BarChart3 className="w - 6 h - 6 mr - 3 text - blue - 400" />;
                </h3>;
                {test_results.length > 0 && (
                  <Button;
                    on_click={() => setTestResults ([])}
                    variant='outline';
                    size='sm';
                    className='border - gray - 600 text - gray - 300 hover:bg - gray - 700'                  >                    variant="outline";
                    size="sm";
                    className="border - gray - 600 text - gray - 300 hover:bg - gray - 700";
                  >;
                    Clear Results;
                  </Button>)}
              </div>;
              {test_results.length > 0 ? (
                <div className='space - y-3 max - h-96 overflow - y-auto'>                  {test_results.map ((result, index) => (
                    <div;
                      key={index}
                      className={`p - 4 rounded - lg border ${
                        result.status === 'success';
                          ? 'border - green - 500 / 30 bg - green - 500 / 10';
                          : 'border - red - 500 / 30 bg - red - 500 / 10'                <div className="space - y-3 max - h-96 overflow - y-auto">;
                  {test_results.map ((result, index) => (
                    <div;
                      key={index}
                      className={`p - 4 rounded - lg border ${
                        result.status === 'success';
                          ? 'border - green - 500 / 30 bg - green - 500 / 10';
                          : 'border - red - 500 / 30 bg - red - 500 / 10';
                      }`}
                    >;
                      <div className='flex items - center justify - between mb - 2'>;
                        <div className='flex items - center space - x-3'>;
                          {getStatusIcon (result.status)}
                          <span;
                            className={`font - medium ${getStatusColor (result.status)}`}
                          >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            Request #{result.request}
                          </span>;
                        </div>;
                        <span className='text - sm text - gray - 400'>;
                          {result.timestamp}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            className={`font-medium ${getStatusColor(result && result.status)}`}>;
                            Request #{result && result.request}
                          </span>;
                        </div>;
                        <span className='text-sm text-gray-400'>;
                          {result && result.timestamp}
                        </span>;
                      </div>;
                      <div className='grid grid-cols-2 gap-4 text-sm'>;
                        <div>;
                          <span className='text-gray-400'>Status:</span>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <span
                            className={`ml-2 font-medium ${getStatusColor(result && result.status)}`}>;
                            {result && result.statusCode}{' '}
                            {result && result.status === 'success';
                              ? 'OK';
                              : 'Too Many Requests'}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
<<<<<<< HEAD
                  Test Results
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

                  Test Results

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </h3>
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Results
                  </Button>
                )}
              </div>
<<<<<<< HEAD
{testResults.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
=======
              {testResults.length > 0 ? (
<<<<<<< HEAD
                <div className="space-y-3 max-h-96 overflow-y-auto">
=======
                <div className='space-y-3 max-h-96 overflow-y-auto'>                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'                <div className="space-y-3 max-h-96 overflow-y-auto">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
<<<<<<< HEAD
<<<<<<< HEAD

                        </div>
                      </div>
                      {result.status === 'rate_limited' && (

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10';
=======
<<<<<<< HEAD
                        result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      }`}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<span className="text-sm text-gray-400">{result.timestamp}</span>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <span className="text-sm text-gray-400">{result.timestamp}</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<span className="text-gray-400">Response Time:</span>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <span className="text-gray-400">Response Time:</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
<<<<<<< HEAD
                        </div>
                      </div>
                      {result.status === 'rate_limited' && (

=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        </div>
                      </div>
                      {result.status === 'rate_limited' && (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          </span>;
                        </div>;
                        <div>;
                          <span className='text-gray-400'>Response Time:</span>;
                          <span className='ml-2 text-white'>;
                            {result && result.responseTime.toFixed(0)}ms;
                          </span>                        </div>;
                      </div>;
                      {result && result.status === 'rate_limited' && (;
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>;
                          <strong>Rate Limited:</strong> Request exceeded the;
                          limit of {rateLimit} requests per {timeWindow}                        </div>                      }`}
                    >;
                      <div className="flex items-center justify-between mb-2">;
                        <div className="flex items-center space-x-3">;
                          {getStatusIcon(result && result.status)}
                          <span className={`font-medium ${getStatusColor(result && result.status)}`}>;
                            Request #{result && result.request}
                          </span>;
                        </div>;
                        <span className="text-sm text-gray-400">{result && result.timestamp}</span>;
                      </div>;
                      <div className="grid grid-cols-2 gap-4 text-sm">;
                        <div>;
                          <span className="text-gray-400">Status:</span>;
                          <span className={`ml-2 font-medium ${getStatusColor(result && result.status)}`}>;
                            {result && result.statusCode} {result && result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>;
                        </div>;
                        <div>;
                          <span className="text-gray-400">Response Time:</span>;
                          <span className="ml-2 text-white">{result && result.responseTime.toFixed(0)}ms</span>;
                        </div>;
                      </div>;
                      {result && result.status === 'rate_limited' && (;
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>;
                          <strong>Rate Limited:</strong> Request exceeded the;
                          limit of {rateLimit} requests per {timeWindow}                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">;
<<<<<<< HEAD

                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;

=======
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        </div>
                      </div>
                      {result.status === 'rate_limited' && (


                        </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      )}
                    </div>;
                  ))}

=======
                </div>
              ) : (
=======
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
=======
<<<<<<< HEAD
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
                          <strong>Rate Limited:</strong> Request exceeded the
                          limit of {rateLimit} requests per {timeWindow}                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>
=======

                        </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      )}
                    </div>;
                  ))}
                </div>
              ) : (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
                  </p>
<<<<<<< HEAD
                </div>
<<<<<<< HEAD
=======
                </div>
              )}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Rate Limiting Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">DDoS Protection</h3>
              <p className="text-gray-400">
                Advanced algorithms detect and prevent distributed denial of service attacks in real-time.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">
                Built on Redis and optimized for high-throughput applications with minimal latency.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Rules</h3>
              <p className="text-gray-400">
                Configure different limits for different endpoints, users, or IP addresses.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-400">
                Monitor API usage, identify patterns, and optimize your rate limiting strategy.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400">
                Simple REST API and SDKs for Node.js, Python, Go, and other popular languages.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
=======
                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>📊</div>
                  <p className='text-gray-400'>
                    Test results will appear here. Configure your settings and
                    click "Test Rate Limiting" to see how it works.                  </p>                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              )}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Features */}



              Advanced Rate Limiting Features


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

              Advanced Rate Limiting Features
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Enterprise-grade rate limiting with intelligent algorithms and
              comprehensive monitoring.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🛡️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                DDoS Protection
              </h3>
              <p className='text-gray-400'>
                Advanced algorithms detect and prevent distributed denial of
                service attacks in real-time.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                High Performance
              </h3>
              <p className='text-gray-400'>
                Built on Redis and optimized for high-throughput applications
                with minimal latency.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Flexible Rules
              </h3>
              <p className='text-gray-400'>
                Configure different limits for different endpoints, users, or IP
                addresses.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Real-time Analytics
              </h3>
              <p className='text-gray-400'>
                Monitor API usage, identify patterns, and optimize your rate
                limiting strategy.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Easy Integration
              </h3>
              <p className='text-gray-400'>
                Simple REST API and SDKs for Node.js, Python, Go, and other
                popular languages.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🌍</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Global Distribution
              </h3>
              <p className='text-gray-400'>
                Edge locations worldwide ensure consistent performance and low
                latency for all users.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
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
      {/* Code Examples */}

=======
<<<<<<< HEAD
{/* Code Examples */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quick Integration Examples
<<<<<<< HEAD

=======
            </h2>
=======
      {/* Code Examples */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Quick Integration Examples
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Get started with our rate limiting service in just a few lines of
              code.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Card className='p-6 bg-gray-800 border border-gray-700'>
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>
                <Code className='w-5 h-5 mr-2 text-green-400' />
                Node.js Example
              </h3>
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>
                <pre className='text-sm text-gray-300'>
                  {`const axios = require('axios');              Quick Integration Examples
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </h2>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started with our rate limiting service in just a few lines of code.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Node.js Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`const axios = require('axios');
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Enterprise-grade rate limiting with intelligent algorithms and;
              comprehensive monitoring.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🛡️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                DDoS Protection;
              </h3>;
              <p className='text-gray-400'>;
                Advanced algorithms detect and prevent distributed denial of;
                service attacks in real-time.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚡</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                High Performance;
              </h3>;
              <p className='text-gray-400'>;
                Built on Redis and optimized for high-throughput applications;
                with minimal latency.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🎯</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Flexible Rules;
              </h3>;
              <p className='text-gray-400'>;
                Configure different limits for different endpoints, users, or IP;
                addresses.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📊</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Real-time Analytics;
              </h3>;
              <p className='text-gray-400'>;
                Monitor API usage, identify patterns, and optimize your rate;
                limiting strategy.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔧</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Easy Integration;
              </h3>;
              <p className='text-gray-400'>;
                Simple REST API and SDKs for Node && Node.js, Python, Go, and other;
                popular languages.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🌍</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Global Distribution;
              </h3>;
              <p className='text-gray-400'>;
                Edge locations worldwide ensure consistent performance and low;
                latency for all users.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4">🌍</div>;
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>;
              <p className="text-gray-400">;
                Edge locations worldwide ensure consistent performance and low latency for all users.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Code Examples */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Quick Integration Examples;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                        </span>;
                      </div>;
                      <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                        <div>;
                          <span className='text - gray - 400'>Status:</span>;
                          <span;
                            className={`ml - 2 font - medium ${getStatusColor (result.status)}`}
                          >;
                            {result.status_code}{' '}
                            {result.status === 'success';
                              ? 'OK';
                              : 'Too Many Requests'}
                          </span>;
                        </div>;
                        <div>;
                          <span className='text - gray - 400'>Response Time:</span>;
                          <span className='ml - 2 text - white'>;
                            {result.response_time.to_fixed (0)}ms;
                          </span>                        </div>;
                      </div>;
                      {result.status === 'rate_limited' && (
                        <div className='mt - 3 p - 3 bg - red - 500 / 20 border border - red - 500 / 30 rounded text - sm text - red - 300'>;
                          <strong > Rate Limited:</strong> Request exceeded the;
                          limit of {rate_limit} requests per {time_window}                        </div>                      }`}
                    >;
                      <div className="flex items - center justify - between mb - 2">;
                        <div className="flex items - center space - x-3">;
                          {getStatusIcon (result.status)}
                          <span className={`font - medium ${getStatusColor (result.status)}`}>;
                            Request #{result.request}
                          </span>;
                        </div>;
                        <span className="text - sm text - gray - 400">{result.timestamp}</span>;
                      </div>;
                      <div className="grid grid - cols - 2 gap - 4 text - sm">;
                        <div>;
                          <span className="text - gray - 400">Status:</span>;
                          <span className={`ml - 2 font - medium ${getStatusColor (result.status)}`}>;
                            {result.status_code} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>;
                        </div>;
                        <div>;
                          <span className="text - gray - 400">Response Time:</span>;
                          <span className="ml - 2 text - white">{result.response_time.to_fixed (0)}ms</span>;
                        </div>;
                      </div>;
                      {result.status === 'rate_limited' && (
                        <div className='mt - 3 p - 3 bg - red - 500 / 20 border border - red - 500 / 30 rounded text - sm text - red - 300'>;
                          <strong > Rate Limited:</strong> Request exceeded the;
                          limit of {rate_limit} requests per {time_window}                        <div className="mt - 3 p - 3 bg - red - 500 / 20 border border - red - 500 / 30 rounded text - sm text - red - 300">;
                          <strong > Rate Limited:</strong> Request exceeded the limit of {rate_limit} requests per {time_window}
                        </div>)}
                    </div>))}
                </div>) : (
                <div className='bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center'>;
                  <div className='text - 6xl mb - 4'>📊</div>;
                  <p className='text - gray - 400'>;
                    Test results will appear here. Configure your settings and;
                    click "Test Rate Limiting" to see how it works.                  </p>                <div className="bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center">;
                  <div className="text - 6xl mb - 4">📊</div>;
                  <p className="text - gray - 400">;
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.;
                </div>)}
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py - 20 bg - gray - 800'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Enterprise - grade rate limiting with intelligent algorithms and;
              comprehensive monitoring.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🛡️</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                DDoS Protection;
              </h3>;
              <p className='text - gray - 400'>;
                Advanced algorithms detect and prevent distributed denial of;
                service attacks in real - time.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>⚡</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                High Performance;
              </h3>;
              <p className='text - gray - 400'>;
                Built on Redis and optimized for high - throughput applications;
                with minimal latency.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🎯</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Flexible Rules;
              </h3>;
              <p className='text - gray - 400'>;
                Configure different limits for different endpoints, users, or IP;
                addresses.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📊</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Real - time Analytics;
              </h3>;
              <p className='text - gray - 400'>;
                Monitor API usage, identify patterns, and optimize your rate;
                limiting strategy.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔧</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Easy Integration;
              </h3>;
              <p className='text - gray - 400'>;
                Simple REST API and SDKs for Node.js, Python, Go, and other;
                popular languages.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🌍</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Global Distribution;
              </h3>;
              <p className='text - gray - 400'>;
                Edge locations worldwide ensure consistent performance and low;
                latency for all users.              </p>            <Card className="text - center p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🌍</div>;
              <h3 className="text - xl font - bold text - white mb - 4">Global Distribution</h3>;
              <p className="text - gray - 400">;
                Edge locations worldwide ensure consistent performance and low latency for all users.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Code Examples */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Quick Integration Examples;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Get started with our rate limiting service in just a few lines of;
              code.;
            </p>;
          </div>;
<<<<<<< HEAD



const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';



    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
=======
=======
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
});
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
console && console.log('Response:', response && response.data);
console && console.log('Rate Limit Info:', {;
  limit: response && response.headers['x-ratelimit-limit'],;
  remaining: response && response.headers['x-ratelimit-remaining'],;
  reset: response && response.headers['x-ratelimit-reset'];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
});`}
                </pre>;
              </div>;
              <Button
                onClick={() =>;
                  copyToClipboard(`const axios = require('axios');}),`}
                </pre>;
              </div>;
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
<<<<<<< HEAD

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

=======
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Make API request with rate limiting;
const response = await axios && axios.get(\`https://api && api.zion.tech\${endpoint}\`, {;
  headers: {;
    'Authorization': \`Bearer \${apiKey}\`,;
    'X-RateLimit-Limit': '${rateLimit}',;
<<<<<<< HEAD

    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
=======
}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
<<<<<<< HEAD

    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',

=======


    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }


=======
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',

    'X-RateLimit-Window': '${timeWindow}'  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
});


console && console.log('Response:', response && response.data);
console && console.log('Rate Limit Info:', {;
  limit: response && response.headers['x-ratelimit-limit'],;
  remaining: response && response.headers['x-ratelimit-remaining'],;
  reset: response && response.headers['x-ratelimit-reset'];
});`);

                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code;
              </Button>;
            </Card>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}),`)}

=======
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
}),

console.log('Response:', response.data),
console.log('Rate Limit Info:', {
  }
}),

  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']

}),`}
                </pre>
              </div>
              <Button
onClick={() => copyToClipboard(`const axios = require('axios');
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
});
console && console.log('Response:', response && response.data);
console && console.log('Rate Limit Info:', {;
  limit: response && response.headers['x-ratelimit-limit'],;
  remaining: response && response.headers['x-ratelimit-remaining'],;
  reset: response && response.headers['x-ratelimit-reset'];
});`);
                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code;
              </Button>;
            </Card>;
}),`)}
                Copy Code
              </Button>
            </Card>
=======
const apiKey = '${apiKey |'your_api_key_here'}';
const endpoint = '${endpoint |'/api/users'}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
});
console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit']
  remaining: response.headers['x-ratelimit-remaining']
  reset: response.headers['x-ratelimit-reset']
});`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`const axios = require('axios');}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
const apiKey = '${apiKey |'your_api_key_here'}';
const endpoint = '${endpoint |'/api/users'}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': \`Bearer \${apiKey}\`
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
<<<<<<< HEAD
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
    'X-RateLimit-Window': '${timeWindow}'  }

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit']
  remaining: response.headers['x-ratelimit-remaining']
  reset: response.headers['x-ratelimit-reset']
});`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code
              </Button>
            </Card>
}),`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
              </Button>
            </Card>
            <Card className='p-6 bg-gray-800 border border-gray-700'>
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>
                <Code className='w-5 h-5 mr-2 text-blue-400' />
                Python Example
              </h3>
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>
                <pre className='text-sm text-gray-300'>
                  {`import requests
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests
<<<<<<< HEAD
api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
}),

console.log('Response:', response.data),
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
}),`)}
  }
}),

                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"

              >
                <Copy className=&quot;w-4 h-4 mr-2&quot; />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Copy Code
              </Button>
            </Card>

<<<<<<< HEAD

            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests


api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
<<<<<<< HEAD
=======
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'

}
response = requests.get(
=======

    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
<<<<<<< HEAD

=======


response = requests.get(;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {

    'limit': response.headers.get('x-ratelimit-limit');

    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
<<<<<<< HEAD
})`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

=======
=======
=======
            <Card className=&quot;p-6 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
                <Code className=&quot;w-5 h-5 mr-2 text-blue-400&quot; />
                Python Example
              </h3>
              <div className=&quot;bg-gray-900 p-4 rounded-lg overflow-x-auto&quot;>
                <pre className=&quot;text-sm text-gray-300&quot;>
{`import requests

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(
    f'https://api.zion.tech{endpoint}';
    headers=headers
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant="outline";
                size="sm";
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700";
              >;
                <Copy className="w-4 h-4 mr-2" />;
              </Button>;
            </Card>;
            <Card className='p-6 bg-gray-800 border border-gray-700'>;
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>;
                <Code className='w-5 h-5 mr-2 text-blue-400' />;
                Python Example;
              </h3>;
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>;
                <pre className='text-sm text-gray-300'>;
                  {`import requests;
            <Card className="p-6 bg-gray-800 border border-gray-700">;
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
                <Code className="w-5 h-5 mr-2 text-blue-400" />;
                Python Example;
              </h3>;
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">;
                <pre className="text-sm text-gray-300">;
{`import requests;
api_key = '${apiKey || 'your_api_key_here'}';
endpoint = '${endpoint || '/api/users'}';
# Make API request with rate limiting;
headers = {;
    'Authorization': f'Bearer {api_key}',;
    'X-RateLimit-Limit': '${rateLimit}',;
    'X-RateLimit-Window': '${timeWindow}';
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
}
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}';
);
print('Response:', response && response.json());
print('Rate Limit Info:', {;
    'limit': response && response.headers.get('x-ratelimit-limit'),;
    'remaining': response && response.headers.get('x-ratelimit-remaining'),    'reset': response && response.headers.get('x-ratelimit-reset')    'limit': response && response.headers.get('x-ratelimit-limit');
    'remaining': response && response.headers.get('x-ratelimit-remaining');
    'reset': response && response.headers.get('x-ratelimit-reset');
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
})`}
                </pre>;
              </div>;
              <Button
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {

<<<<<<< HEAD
    'reset': response.headers.get('x-ratelimit-reset')
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-green-100 mb-8'>
            Join thousands of developers and companies who trust our rate
            limiting service to protect their APIs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>;

=======

=======
                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(
    f'https://api.zion.tech{endpoint}';
    headers=headers
)
print('Response:', response.json())
print('Rate Limit Info:', {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onClick={() =>;
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests;
api_key = '${apiKey || 'your_api_key_here'}';
endpoint = '${endpoint || '/api/users'}';
# Make API request with rate limiting;
headers = {;
    'Authorization': f'Bearer {api_key}',;
    'X-RateLimit-Limit': '${rateLimit}',;
    'X-RateLimit-Window': '${timeWindow}';
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
}
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}';
);
print('Response:', response && response.json());
print('Rate Limit Info:', {;
    'limit': response && response.headers.get('x-ratelimit-limit'),;
    'remaining': response && response.headers.get('x-ratelimit-remaining'),;
    'reset': response && response.headers.get('x-ratelimit-reset');
})`);
                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response && response.headers.get('x-ratelimit-reset');
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant="outline";
                size="sm";
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700";
              >;
                <Copy className="w-4 h-4 mr-2" />;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            <Card className='p - 6 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - xl font - bold text - white mb - 4 flex items - center'>;
                <Code className='w - 5 h - 5 mr - 2 text - green - 400' />;
                Node.js Example;
              </h3>;
              <div className='bg - gray - 900 p - 4 rounded - lg overflow - x-auto'>;
                <pre className='text - sm text - gray - 300'>;
                  {`const axios = require ('axios');              Quick Integration Examples;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Get started with our rate limiting service in just a few lines of code.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
            <Card className="p - 6 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - xl font - bold text - white mb - 4 flex items - center">;
                <Code className="w - 5 h - 5 mr - 2 text - green - 400" />;
                Node.js Example;
              </h3>;
              <div className="bg - gray - 900 p - 4 rounded - lg overflow - x-auto">;
                <pre className="text - sm text - gray - 300">;
{`const axios = require ('axios');
;
const api_key = '${api_key || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api / users'}';
;
// Make API request with rate limiting;
const response = await axios.get (\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${api_key}\`,
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}'  }    'Authorization': \`Bearer \${api_key}\`;
    'X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
  }
});
;
console.log ('Response:', response.data);
console.log ('Rate Limit Info:', {
  limit: response.headers['x - ratelimit - limit'],
  remaining: response.headers['x - ratelimit - remaining'],
  reset: response.headers['x - ratelimit - reset'];
});`}
                </pre>;
              </div>;
              <Button;
                on_click={() =>;
                  copyToClipboard (`const axios = require ('axios');}), `}
                </pre>;
              </div>;
              <Button;
                on_click={() => copyToClipboard (`const axios = require ('axios');
const api_key = '${api_key || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api / users'}';
;
// Make API request with rate limiting;
const response = await axios.get (\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${api_key}\`,
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}'  }    'Authorization': \`Bearer \${api_key}\`;
    'X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
  }
});
;
console.log ('Response:', response.data);
console.log ('Rate Limit Info:', {
  limit: response.headers['x - ratelimit - limit'],
  remaining: response.headers['x - ratelimit - remaining'],
  reset: response.headers['x - ratelimit - reset'];
});`);
                }
                variant='outline';
                size='sm';
                className='mt - 4 border - gray - 600 text - gray - 300 hover:bg - gray - 700';
              >;
                <Copy className='w - 4 h - 4 mr - 2' />                Copy Code;
              </Button>;
            </Card>;
}), `)}
                variant="outline";
                size="sm";
                className="mt - 4 border - gray - 600 text - gray - 300 hover: bg - gray - 700";
              >;
                <Copy className="w - 4 h - 4 mr - 2" />;
              </Button>;
            </Card>;
            <Card className='p - 6 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - xl font - bold text - white mb - 4 flex items - center'>;
                <Code className='w - 5 h - 5 mr - 2 text - blue - 400' />;
                Python Example;
              </h3>;
              <div className='bg - gray - 900 p - 4 rounded - lg overflow - x-auto'>;
                <pre className='text - sm text - gray - 300'>;
                  {`import requests;
            <Card className="p - 6 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - xl font - bold text - white mb - 4 flex items - center">;
                <Code className="w - 5 h - 5 mr - 2 text - blue - 400" />;
                Python Example;
              </h3>;
              <div className="bg - gray - 900 p - 4 rounded - lg overflow - x-auto">;
                <pre className="text - sm text - gray - 300">;
{`import requests;
api_key = '${api_key || 'your_api_key_here'}';
endpoint = '${endpoint || '/api / users'}';
# Make API request with rate limiting;
headers = {
    'Authorization': f'Bearer {api_key}',
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}';
response = requests.get (
    f'https://api.zion.tech{endpoint}',    headers = headers    'Authorization': f'Bearer {api_key}X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
}
response = requests.get (
    f'https://api.zion.tech{endpoint}');
print ('Response:', response.json ());
print ('Rate Limit Info:', {
    'limit': response.headers.get ('x - ratelimit - limit'),
    'remaining': response.headers.get ('x - ratelimit - remaining'),    'reset': response.headers.get ('x - ratelimit - reset')    'limit': response.headers.get ('x - ratelimit - limit');
    'remaining': response.headers.get ('x - ratelimit - remaining');
    'reset': response.headers.get ('x - ratelimit - reset');
})`}
                </pre>;
              </div>;
              <Button;
                on_click={() =>;
                  copyToClipboard (`import requests                on_click={() => copyToClipboard (`import requests;
api_key = '${api_key || 'your_api_key_here'}';
endpoint = '${endpoint || '/api / users'}';
# Make API request with rate limiting;
headers = {
    'Authorization': f'Bearer {api_key}',
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}';
response = requests.get (
    f'https://api.zion.tech{endpoint}',    headers = headers    'Authorization': f'Bearer {api_key}X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
}
response = requests.get (
    f'https://api.zion.tech{endpoint}');
print ('Response:', response.json ());
print ('Rate Limit Info:', {
    'limit': response.headers.get ('x - ratelimit - limit'),
    'remaining': response.headers.get ('x - ratelimit - remaining'),
    'reset': response.headers.get ('x - ratelimit - reset');
})`);
                }
                variant='outline';
                size='sm';
                className='mt - 4 border - gray - 600 text - gray - 300 hover:bg - gray - 700';
              >;
                <Copy className='w - 4 h - 4 mr - 2' />                Copy Code    'reset': response.headers.get ('x - ratelimit - reset');
})`)}
                variant="outline";
                size="sm";
                className="mt - 4 border - gray - 600 text - gray - 300 hover:bg - gray - 700";
              >;
                <Copy className="w - 4 h - 4 mr - 2" />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Copy Code;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - green - 600 to - blue - 600'>;
        <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
          </h2>;
          <p className='text - xl text - green - 100 mb - 8'>;
            Join thousands of developers and companies who trust our rate;
            limiting service to protect their APIs.;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
            <Button;
              href='/contact';
              size='lg';
              className='bg - white text - green - 600 hover:bg - gray - 100';
            >;
              Get Started Today;
              <ArrowRight className='w - 5 h - 5 ml - 2' />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border - white text - white hover:bg - white hover:text - green - 600'            >              href="/pricing";
              variant="outline";
              size="lg";
              className="border - white text - white hover:bg - white hover:text - green - 600";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

  );    </>;
  );

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  );    </>;
  );
}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Protect Your APIs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
=======
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
<<<<<<< HEAD
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
=======
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
<<<<<<< HEAD
response = requests.get(
=======

response = requests.get(;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    f'https://api.zion.tech{endpoint}';
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit')
    'remaining': response.headers.get('x-ratelimit-remaining'),    'reset': response.headers.get('x-ratelimit-reset')    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
})`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
<<<<<<< HEAD
response = requests.get(
=======

response = requests.get(;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    f'https://api.zion.tech{endpoint}';
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit')
    'remaining': response.headers.get('x-ratelimit-remaining')

    'reset': response.headers.get('x-ratelimit-reset')
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-green-100 mb-8'>
            Join thousands of developers and companies who trust our rate
            limiting service to protect their APIs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              View Pricing
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
  )
}
    </>);    </>);
}
=======
    </>;
<<<<<<< HEAD
  );    </>
  )
}
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
