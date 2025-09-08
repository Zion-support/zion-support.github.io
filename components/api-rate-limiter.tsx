setIsTesting (true)
setTestResults ([])
if (!isAllowed) break 
}setTestResults (results)
setIsTesting (false) 
}
const getStatusIcon = (status: string) => {
  switch (status) {
  case 'success': 
}
}
switch (status) {
  case 'success': return 'text-green-400'
case 'rate limited': return 'text-red-400'
default: return (<> <Head> <title>API Rate Limiter - Zion Tech Group</title> API Protection & Security </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > API Rate Limiter </h1> </p> </div> </section> Configure Your Rate Limiting </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users. </p> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" > API Endpoint </label> <input /> </div> {
  /* Rate Limit */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-3" > Rate Limit </label> key= {
  limit.value 
}onClick= {
  () => setRateLimit (limit.value) 
}className= {
  `p-3 rounded-lg border text-left transition-all $ {
  rateLimit === limit.value ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' 
}` 
}> </button>) ) 
}</div> </div> {
  /* Time Window */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-3" > Time Window </label> key= {
  window.value 
}onClick= {
  () => setTimeWindow (window.value) 
}className= {
  `p-3 rounded-lg border text-left transition-all $ {
  timeWindow === window.value ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' 
}` 
}> </button>) ) 
}</div> </div> {
  /* API Key Generation */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-2" > API Key </label> <div className="flex space-x-2" > <input readOnly placeholder="Generate an API key to test rate limiting" className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" /> <Button > Generate </Button> </div> </div> <Button > {
  isTesting ? (<> <RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Testing Rate Limiting... </>) : (<> <Zap className="w-5 h-5 mr-2" /> Test Rate Limiting </>) 
}</Button> </div> </Card> Test Results </h3> {
  testResults.length > 0 && (<Button onClick= {
  () => setTestResults ([]) 
}variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700" > Clear Results </Button>) 
}</div> <div key= {
  index 
}className= {
  `p-4 rounded-lg border $ {
  result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10' 
}` 
}> </div> <div className="grid grid-cols-2 gap-4 text-sm" > <div> </div>) 
}</div>) ) 
}</div>) : (<div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center" > <div className="text-6xl mb-4" >📊</div> <p className="text-gray-400" > Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works. </p> </div>) 
}</Card> </div> </div> </section> Advanced Rate Limiting Features </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🛡️</div> <h3 className="text-xl font-bold text-white mb-4" >DDoS Protection</h3> <p className="text-gray-400" > Advanced algorithms detect and prevent distributed denial of service attacks in real-time. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >⚡</div> <h3 className="text-xl font-bold text-white mb-4" >High Performance</h3> <p className="text-gray-400" > Built on Redis and optimized for high-throughput applications with minimal latency. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🎯</div> <h3 className="text-xl font-bold text-white mb-4" >Flexible Rules</h3> <p className="text-gray-400" > Configure different limits for different endpoints, users, or IP addresses. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📊</div> <h3 className="text-xl font-bold text-white mb-4" >Real-time Analytics</h3> <p className="text-gray-400" > Monitor API usage, identify patterns, and optimize your rate limiting strategy. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔧</div> <h3 className="text-xl font-bold text-white mb-4" >Easy Integration</h3> <p className="text-gray-400" > Simple REST API and SDKs for Node.js, Python, Go, and other popular languages. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🌍</div> <h3 className="text-xl font-bold text-white mb-4" >Global Distribution</h3> <p className="text-gray-400" > Edge locations worldwide ensure consistent performance and low latency for all users. </p> </Card> </div> </div> </section> <section className="py-20 bg-gray-900"> <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> text-xl text-gray-400 max-w-3xl mx-auto"> Get started with our rate limiting service in just a few lines of code. </p> </div> <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8"> <Card className=" p-6 bg-gray-800 border border-gray-700"> <h3 className=" text-xl font-bold text-white mb-4 flex items-center"> <Code className=" w-5 h-5 mr-2 text-green-400"/> Node.js Example </h3> const apiKey = '$ {
  apiKey || 'your api key here' 
}'
const endpoint = '$ {
  endpoint || '/api/users' 
}'
endpoint 
}\`, {

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


const copyToClipboard = ("text": string) => {
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

      default:


        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }

const getStatusIcon = (
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }

  };

const getStatusColor = (
    switch (status) {
      case 'success':
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
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }


  };


  return (


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

  return (


    }
  }
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
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
  }
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }

    }

  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:
    }
  }
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }
  }

  };

  return (
    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
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
                    onChange={(e) => setEndpoint(e && e.target.value)}
                    placeholder="e && e.g., /api/users, /api/data, /api/analytics";
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent";
                  />;
                </div>;
                {/* Rate Limit */}
                <div>
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
                    onChange={e => setEndpoint(e && e.target.value)}
                    placeholder='e && e.g., /api/users, /api/data, /api/analytics';
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'                  />              Configure Your Rate Limiting;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.;
            </p>;
          </div>;

    <>
      <Head><title>API Rate Limiter - Zion Tech Group</title>
<meta;
name='description'
          content='Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.'


                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Rate Limit;
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Generate
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={testRateLimiting}
                  disabled={
                    !endpoint.trim() |!rateLimit |!timeWindow |isTesting
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>{isTesting ? (
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
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className='w-5 h-5 mr-2' />                      <Zap className="w-5 h-5 mr-2" />
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>



                        </div>
                      </div>
                      {result.status === 'rate_limited' && (

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

                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;

                      

                        </div>
                      </div>
                      {result.status === 'rate_limited' && (


                        </div>


                      )}
                    </div>;
                  ))}

                </div>
              ) : (
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
                          <strong>Rate Limited:</strong> Request exceeded the
                          limit of {rateLimit} requests per {timeWindow}                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>

                        </div>

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
              Get started with our rate limiting service in just a few lines of;
              code.;
            </p>;
          </div>;



const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';



    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
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

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting;
const response = await axios && axios.get(\`https://api && api.zion.tech\${endpoint}\`, {;
  headers: {;
    'Authorization': \`Bearer \${apiKey}\`,;
    'X-RateLimit-Limit': '${rateLimit}',;

    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
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
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }


    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',

    'X-RateLimit-Window': '${timeWindow}'  }



  }
});
                Copy Code
              </Button>
            </Card>


}),`)}

    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
    'X-RateLimit-Window': '${timeWindow}'  }

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
                Copy Code
              </Button>
            </Card>
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
    'Authorization': \`Bearer \${apiKey}\`
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }



    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(

    f'https: //api.zion.tech{endpoin,}
}',
    headers=headers;
)
print('Response:', response.json())
print('Rate Limit Info:', {
'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
    'reset': response.headers.get('x-ratelimit-reset')
                variant=\'outline\';

                size=\'sm\';
                className=\"mt-4 border-gray-600 text-gray-300 hover: bg-gray-700\">

)

                <Copy className=\"w-4 h-4 mr-2\"    />;
              </Button>;
            </Card>;
            <Card className='p-6 bg-gray-800 border border-gray-700'    />;
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'    />;
                <Code className='w-5 h-5 mr-2 text-blue-400'    />;
                Python Example;
              </h3>;
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'    />;
                <pre className='text-sm text-gray-300'    />;
                  {`import requests;
            <Card className=\"p-6 bg-gray-800 border border-gray-700\"    />;
              <h3 className=\"text-xl font-bold text-white mb-4 flex items-center\"    />;
                <Code className=\"w-5 h-5 mr-2 text-blue-400\"    />;
                Python Example;
              </h3>;
              <div className=\"bg-gray-900 p-4 rounded-lg overflow-x-auto\"    />;
                <pre className=\"text-sm text-gray-300\"    />;}
{`import requests;}
api_key = '${apiKey || 'your_api_key_here'}';
endpoint = '${endpoint || '/api/users'}';
# Make API request with rate limiting;

headers = {;}
    'Authorization': f'Bearer {api_key}',;
    'X-RateLimit-Limit': '${rateLimit}',;
    'X-RateLimit-Window': '${timeWindow}';
print('Response:', response && response.json());
print('Rate Limit Info:', {;
    'limit': response && response.headers.get('x-ratelimit-limit'),;
    'remaining': response && response.headers.get('x-ratelimit-remaining'),    'reset': response && response.headers.get('x-ratelimit-reset')    'limit': response && response.headers.get('x-ratelimit-limit');
    'remaining': response && response.headers.get('x-ratelimit-remaining');}
    'reset': response && response.headers.get('x-ratelimit-reset');}
})`}

                </pre>
              </div>
              <Button;
onClick={() =    />}
                  copyToClipboard(`import requests;}
api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting;
headers = {}
'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https: //api.zion.tech{endpoin,}
}',
    headers=headers;
)
print('Response:', response.json())
print('Rate Limit Info:', {
'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),}
    'reset': response.headers.get('x-ratelimit-reset')}
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover: bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"><Copy className='w-4 h-4 mr-2' />
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"><Copy className="w-4 h-4 mr-2" />
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section *,}
}
<section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'    />;
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />;
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />;
          </h2>;
          <p className='text-xl text-green-100 mb-8'    />;
            Join thousands of developers and companies who trust our rate;
            limiting service to protect their APIs.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
            <Button;
              href='/contact';
              size='lg';
              className='bg-white text-green-600 hover:bg-gray-100'    />

              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2'    />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border-white text-white hover:bg-white hover:text-green-600'    />

response = requests.get(;

    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {

    'limit': response.headers.get('x-ratelimit-limit');

    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
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
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'    />;
                <pre className='text-sm text-gray-300'    />;
                  {`import requests;
            <Card className=\"p-6 bg-gray-800 border border-gray-700\"    />;
              <h3 className=\"text-xl font-bold text-white mb-4 flex items-center\"    />;
                <Code className=\"w-5 h-5 mr-2 text-blue-400\"    />;
                Python Example;
              </h3>;
              <div className=\"bg-gray-900 p-4 rounded-lg overflow-x-auto\"    />;
                <pre className=\"text-sm text-gray-300\"    />;}
{`import requests;}
api_key = '${apiKey || 'your_api_key_here'}';
endpoint = '${endpoint || '/api/users'}';
# Make API request with rate limiting;

headers = {;}
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


})`}
                </pre>;
              </div>;
              <Button


    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {


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
})`)}

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

                Copy Code;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - green - 600 to - blue - 600'>;
        <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
})`)}
          </h2>;
          <p className='text-xl text-green-100 mb-8'    />;
            Join thousands of developers and companies who trust our rate;
            limiting service to protect their APIs.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
            <Button;
              href='/contact';
              size='lg';
              className='bg-white text-green-600 hover:bg-gray-100'    />

              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2'    />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;

  );    </>;
  );

}
  );
}
    </>);    </>);
}

  );

    </>);    </>);
}

  );

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
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(

response = requests.get(;
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
response = requests.get(

response = requests.get(;
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

    </>);    </>);
}
  );
