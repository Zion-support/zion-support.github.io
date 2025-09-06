} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export default function APIRateLimiterPage() {;
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

  ];
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

    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];
      await new Promise(resolve => setTimeout(resolve, 100));
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
      });
      if (!isAllowed) break;
    }
    setTestResults(results);
    setIsTesting(false);
          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math && Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date && Date.now() + 60000).toISOString();
        }
      });
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
    }
  };

  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'success':;
        return 'text-green-400';
      case 'rate_limited':;
        return 'text-red-400',;
      default:;
        return 'text-yellow-400';    }        return 'text-yellow-400';
    }
  }
  return (
    <>;
      <Head>;
        <title>API Rate Limiter - Zion Tech Group</title>;
        <meta
          name='description'
          content='Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.'
        />;
        <meta
          property='og:title'
          content='API Rate Limiter - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Protect your APIs with intelligent rate limiting and prevent abuse.'
      {/* Hero Section */}
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
                {/* API Endpoint */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    API Endpoint;
                  </label>;
                  <input
                    type='text'
                    value={endpoint}
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
                {/* Rate Limit */}
                        key={limit.value}
                        on_click={() => setRateLimit (limit.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          rate_limit === limit.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}
                    ))}
                {/* Time Window */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-3'>;
                    Time Window;
                  </label>;
                  <div className='grid grid-cols-2 gap-3'>;
                    {timeWindows && timeWindows.map(window => (                      <button<label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">;
                    Time Window;
                  </label>;
                  <div className="grid grid-cols-2 gap-3">;
                    {timeWindows && timeWindows.map((window) => (;
                        key={window && window.value}
                        onClick={() => setTimeWindow(window && window.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${;
                          timeWindow === window && window.value;
                            ? 'border-green-500 bg-green-500/10 text-green-300';
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white';
                        }`}
                      >;
                        <div className='font-medium'>{window && window.label}</div>;
                        <div className='text-xs text-gray-400 mt-1'>;
                          {window && window.description}
                        </div>                      </button>                        <div className="font-medium">{window && window.label}</div>;
                        <div className="text-xs text-gray-400 mt-1">{window && window.description}</div>;
                      </button>;
                        key={window.value}
                        on_click={() => setTimeWindow (window.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          time_window === window.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}
                    ))}
                {/* API Key Generation */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    API Key;
                  </label>;
                  <div className='flex space-x-2'>;
                    <input
                      type='text'
                      value={apiKey}
                      readOnly
                      placeholder='Generate an API key to test rate limiting'
                      className='flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400'
                    />;
                    <Button
                      onClick={generateApiKey}
                      className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white'>                    API Key;
                  </label>;
                  <div className="flex space-x-2">;
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />;
                    <Button
                      onClick={generateApiKey}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
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
                            Request #{result.request}
                          </span>;
                        </div>;
                        <span className='text - sm text - gray - 400'>;
                          {result.timestamp}
                          <span
                            className={`ml-2 font-medium ${getStatusColor(result && result.status)}`}>;
                            {result && result.statusCode}{' '}
                            {result && result.status === 'success';
                              ? 'OK';
                              : 'Too Many Requests'}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{result.timestamp}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
                        </div>
                      </div>
                      {result.status === 'rate_limited' && (
              )}
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
            </Card>
          </div>
        </div>
      </section>
      {/* Code Examples */}
            </h2>
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
              Get started with our rate limiting service in just a few lines of;
              code.;
            </p>;
          </div>;

    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
});
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
  }
});
                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code;
              </Button>;
            </Card>;
}),`)}
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests
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
print('Response:', response && response.json());
print('Rate Limit Info:', {;
    'limit': response && response.headers.get('x-ratelimit-limit'),;
    'remaining': response && response.headers.get('x-ratelimit-remaining'),    'reset': response && response.headers.get('x-ratelimit-reset')    'limit': response && response.headers.get('x-ratelimit-limit');
    'remaining': response && response.headers.get('x-ratelimit-remaining');
    'reset': response && response.headers.get('x-ratelimit-reset');
})`}
                </pre>;
              </div>;
              <Button
# Make API request with rate limiting;
headers = {;
    'Authorization': f'Bearer {api_key}',;
    'X-RateLimit-Limit': '${rateLimit}',;
    'X-RateLimit-Window': '${timeWindow}';
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
})`)}
                Copy Code;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
}
    </>);    </>);
}
