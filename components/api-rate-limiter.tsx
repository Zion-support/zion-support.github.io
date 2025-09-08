








    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },

    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];

    if (!endpoint.trim() || !rateLimit || !timeWindow) return;

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)


  const timeWindows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },;
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },;
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },;
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];

    }


    setTestResults(results);
    setIsTesting(false);


  }


          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math && Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date && Date.now() + 60000).toISOString();
        }
      });




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

        return <CheckCircle className='w-5 h-5 text-green-400' />;
      case 'rate_limited':;
        return <AlertTriangle className='w-5 h-5 text-red-400' />;



    switch (status) {
      case 'success':

;
  return <CheckCircle className='w-5 h-5 text-green-400'    />;
      case 'rate_limited':;
        return <AlertTriangle className='w-5 h-5 text-red-400'    />;

      default:
        return <AlertTriangle className='w-5 h-5 text-yellow-400'    />;) => {
  return $3;}
}


       ;
  return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:


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




<section className='py-20 bg-gray-900'    />
        <div className='max-w-6xl mx-auto px-4 sm: px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
              Configure Your Rate Limiting;
              <div className='space-y-6'    />


                {/* API Endpoint *,}
}

                <div    />;
                  <label className='block text-sm font-medium text-gray-300 mb-2'    />;
                    API Endpoint;
                  </label>;

                  <input;
type='text'
                    value={endpoint}


                        key={limit.value}
                        on_click={() => setRateLimit (limit.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          rate_limit === limit.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}

                  </div>;
                </div>;


                {/* Time Window */}


                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>

                    {timeWindows.map(window => (                      <button

                      <button






                        key={window.value}
                        on_click={() => setTimeWindow (window.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          time_window === window.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}

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
                    {rateLimits.map(limit => (                      <button                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Rate Limit
                  ">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
                    {rateLimits.map(limit => (                      <button

                      <button

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
                      </button>
                    ))}
                  </div>
                </div>

                    ))}
                  </div>
                </div>

                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    {timeWindows.map(window => (                      <button                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
                    {timeWindows.map(window => (                      <button

                      <button

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
                      </button>
                    ))}
                  </div>
                </div>




                {/* API Key Generation */}



                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={generateApiKey}



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


                <div    />
<label className='block text-sm font-medium text-gray-300 mb-3'    />
                    Time Window;
                  </label>
                  <div className='grid grid-cols-2 gap-3'    />



            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />




                        <span className='text-sm text-gray-400'    />
                          {result.timestamp}
                        </span>

                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
<div className = 'bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'    />
                  <div className='text-6xl mb-4'    />📊</div>
                  <p className='text-gray-400'    />
                    Test results will appear here. Configure your settings and;
click \"Test Rate Limiting\" to see how it works.

                  </p>
                </div>




              )}






      {/* Features */}


              </p>



              </p>









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









    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'


}

response = requests.get(

              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'    />
                <pre className='text-sm text-gray-300'    />
                  {;
  const axios = require('axios');}
}
const apiKey = '${apiKey || 'your_api_key_here'}';

})`}




              className='border - white text - white hover:bg - white hover:text - green - 600'            >              href="/pricing";
              variant="outline";
              size="lg";
              className="border - white text - white hover:bg - white hover:text - green - 600";





