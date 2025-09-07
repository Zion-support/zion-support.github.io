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
  headers: {
  'Authorization': \`Bearer \$ {
  apiKey 
}\`
}
})
limit: response.headers['x-ratelimit-limit']
remaining: response.headers['x-ratelimit-remaining']
reset: response.headers['x-ratelimit-reset'] 
}), ` 
}</pre> </div> <Button onClick= {
  () => copyToClipboard (`const axios = require ('axios')
const apiKey = '$ {
  apiKey || 'your api key here' 
}'
const endpoint = '$ {
  endpoint || '/api/users' 
}'
endpoint 
}\`, {
  headers: {
  'Authorization': \`Bearer \$ {
  apiKey 
}\`
}
})
w-4 h-4 mr-2" /> Copy Code </Button> </Card> <Card className="p-6 bg-gray-800 border border-gray-700" > <h3 className="text-xl font-bold text-white mb-4 flex items-center" > <Code className="w-5 h-5 mr-2 text-blue-400" /> Python Example </h3> api key = '$ {
  apiKey || 'your api key here' 
}' endpoint = '$ {
  endpoint || '/api/users' 
}' # Make API request with rate limiting 
}response = requests.get (f'https://api.zion.tech {
  endpoint 
}'
headers=headers) print ('Response:', response.json () ) print ('Rate Limit Info:', {
  'limit': response.headers.get ('x-ratelimit-limit'), 'remaining': response.headers.get ('x-ratelimit-remaining'), 'reset': response.headers.get ('x-ratelimit-reset') 
}) ` 
}</pre> </div> <Button onClick= {
  () => copyToClipboard (`import requests api key = '$ {
  apiKey || 'your api key here' 
}' endpoint = '$ {
  endpoint || '/api/users' 
}' # Make API request with rate limiting 
}response = requests.get (f'https://api.zion.tech {
  endpoint 
}'
headers=headers) print ('Response:', response.json () ) > <Copy className="w-4 h-4 mr-2" /> Copy Code </Button> </Card> </div> </div> </section> <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> text-xl text-green-100 mb-8"> Join thousands of developers and companies who trust our rate limiting service to protect their APIs. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-green-600 hover:bg-gray-100"> Get Started Today <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /pricing"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-green-600" > View Pricing </Button> </div> </div> </section> </>) 
}