

    setApiKey(key)
  }




  }

const copyToClipboard = ("text": string) => {
    }
    navigator.clipboard.writeText(text)



const getStatusIcon = ("status": string) => {
    }
    switch (status) {


    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>

          </p>
        </div>
      </section>

      {/* Rate Limiter Configuration */}



                {/* API Endpoint *
}
                <div>;

                    API Endpoint;
                  </label>;
                  <input;
                    type=text';
                    value={endpoint}</h2>;
            </h2>
      <section className="py-20 bg-gray-900>
        <div className=max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16>
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
              Configure Your Rate Limiting
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto>
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>


                  />
                </div>

                {/* Rate Limit */}
                        key={limit.value}
                        on_click={() => setRateLimit (limit.value
}
                        className={`p - 3 rounded - lg border text - left transition - all ${rate_limit === limit.value;`                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';'
                            : 'border - gray - 600 "hover":border - gray - 500 text - gray - 300 "hover":text - white';'
                        }`}`                {/* Time Window */}

                <div>

                          {limit.description}
                        </div>;
                      </button>;
                {/* Time Window */}


                    {timeWindows.map(window => (
                      <button
}
key={window.value}
                        onClick={() => setTimeWindow(window.value)}

                          {window.description}
                        </div>;
                      </button>;
                {/* API Key Generation */}
                <div>;

                      value={apiKey}
                      readOnly;
                      placeholder=Generate an API key to test rate limiting';
                      className='flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400;
                    />;
                    <Button;
                      onClick={generateApiKey}className=px-6 py-3 bg-green-600 hover:bg-green-700 text-white'                    >                    API Key;
                  </label>;
                  <div className="flex space-x-2>;
                    <input;
                      type=text";
                      value={apiKey}
                      readOnly;
                      placeholder="Generate an API key to test rate limiting;
                      className=flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400";
                    />;
                    <Button;
                      onClick={generateApiKey}className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white;
                    >;
                      Generate;
                    </Button>;
                  </div>;
                </div>;
                <Button;
                        key={limit.value}
                        onClick={() => setRateLimit(limit.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white
                        }`}
                      >
                        <div className="font-medium>{limit.label}</div>
                        <div className=text-xs text-gray-400 mt-1">{limit.description}</div>
                      </button>
                    ))}
                  </div>
                </div>


                    >
                      Generate
                    </Button>
                  </div>
                </div>
                <Button,
onClick={testRateLimitin
}
disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting;
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 "hover":from-green-700 "hover":to-blue-700 text-white py-4 text-lg font-semibold "disabled":opacity-50 "disabled":cursor-not-allowed'>'


                  )}
                      className=px-6 py-3 bg-green-600 hover:bg-green-700 text-white'                    >                    API Key
                  </label>
                  <div className=flex space-x-2">
                    <input
                      type="text
                      value={apiKey}
                      readOnly
                      placeholder=Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400
                    />
                    <Button
                      onClick={generateApiKey}
            {/* Test Results */}


                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />'
                  Test Results
origin/cursor/automate-test-improve-and-merge-code-2533
                </h3>
                {testResults.length > 0 && (
                  <Button

                  >
                    Clear Results
                  </Button>
                
}
              </div>
              {testResults.length > 0 ? (

                          {getStatusIcon(result.status)}
                          <span;
                            className={`font-medium ${getStatusColor(result.status)}`}>`
                            Request #{result.request}

                            {result.responseTime.toFixed(0)}ms
origin/cursor/automate-test-improve-and-merge-code-2533
              <div className=flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center>
                  <BarChart3 className=w-6 h-6 mr-3 text-blue-400" />
                </h3>
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
                    variant="outline
                    size=sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700
                  >
                    Clear Results
                  </Button>
                )}
              </div>
                      }`}

                    >
                      <div className=flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                </Button>
              </div>
            </Card>

            {/* Test Results */}
            <Card className=p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6>
                <h3 className=text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400 />
                  Test Results
                </h3>
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
                    variant=outline"
                    size="sm
                    className=border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Results
                  </Button>
                )}
              </div>

              {testResults.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto>
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result.status === 'success ? border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10
                      }`}
                    >
                      <div className=flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
                        <span className=text-sm text-gray-400">{result.timestamp}</span>
                      </div>
                      {result.status === 'rate_limited' && ('

<div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>'
                          <strong>Rate "Limited":</strong> Request exceeded the
}
limit of {rateLimit} requests per {timeWindow}
                        </div>

                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;

                      

                  ))}
                </div>
              ) : (


                  </p>
                </div>
              )}

      {/* Features */}

              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit: ${rateLimit}X-RateLimit-Window': '${timeWindow}
  }
});


                Copy Code
              </Button>
            </Card>


}

api_key = '${apiKey || 'your_api_key_here'}''
endpoint = '${endpoint || '/api/users'}''

# Make API request with rate limiting,
headers = {
'Authorization': f'Bearer {api_ke,'
}','
    'X-RateLimit-Limit': '${rateLimit}','
    'X-RateLimit-Window': '${timeWindow}''
response = requests.get(

    headers=headers
)
print('"Response":', response.json())'
print('Rate Limit "Info":', {'
'limit': response.headers.get('x-ratelimit-limit'),'
    'remaining': response.headers.get('x-ratelimit-remaining'),'
    'reset': response.headers.get('x-ratelimit-reset')'
                }
                variant="outline";"


})`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`import requests

api_key = '${apiKey || your_api_key_here}'
endpoint = '${endpoint || /api/users}'

# Make API request with rate limiting
headers = {
    'Authorization: fBearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window: ${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{endpoint};
    headers=headers
)

print(Response:', response.json())
print('Rate Limit Info:, {
    limit': response.headers.get('x-ratelimit-limit);
    remaining': response.headers.get('x-ratelimit-remaining);
    reset': response.headers.get('x-ratelimit-reset)
})`)}
                variant="outline
                size=sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700
              >
                <Copy className=w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>
headers = {Authorization': f'Bearer {api_key},X-RateLimit-Limit': '${rateLimit},X-RateLimit-Window': '${timeWindow};
print(Response:', response && response.json())print('Rate Limit Info:, {limit': response && response.headers.get('x-ratelimit-limit),remaining': response && response.headers.get('x-ratelimit-remaining),    reset': response && response.headers.get('x-ratelimit-reset)    limit': response && response.headers.get('x-ratelimit-limit)remaining': response && response.headers.get('x-ratelimit-remaining)reset': response && response.headers.get('x-ratelimit-reset)})`}fhttps://api.zion.tech{endpoint}';headers=headers;
)print('Response:, response.json())print(Rate Limit Info:', {onClick={() =>;
    f'https://api.zion.tech{endpoint};

    headers=headers

)
print(Response:', response.json())
print('Rate Limit Info:, {

                onClick={() =>;
headers = {Authorization': f'Bearer {api_key},X-RateLimit-Limit': '${rateLimit},X-RateLimit-Window': '${timeWindow};
print(Response:', response && response.json())print('Rate Limit Info:, {limit': response && response.headers.get('x-ratelimit-limit),remaining': response && response.headers.get('x-ratelimit-remaining),    reset': response && response.headers.get('x-ratelimit-reset)    limit': response && response.headers.get('x-ratelimit-limit)remaining': response && response.headers.get('x-ratelimit-remaining)reset': response && response.headers.get('x-ratelimit-reset)})`}fhttps://api.zion.tech{endpoint}';headers=headers;
)print('Response:, response.json())print(Rate Limit Info:', {onClick={() =>;
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests;
api_key = '${apiKey || your_api_key_here}';
endpoint = '${endpoint || /api/users}';
# Make API request with rate limiting;

              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
</>;
  )
  );
}
    </>);    </>);
}
  )

      {/* CTA Section */}
      <section className=py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
          <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Protect Your APIs?
          </h2>
          <p className="text-xl text-green-100 mb-8>
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          </p>
          <div className=flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact
              size=lg"
              className="bg-white text-green-600 hover:bg-gray-100
            >
              Get Started Today
              <ArrowRight className=w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing
              variant=outline"
              size="lg
              className=border-white text-white hover:bg-white hover:text-green-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
