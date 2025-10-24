'use client'


const Page: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {};
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const apiEndpoints = []

      example: `curl -X POST &quot;https://api.ziontechgroup.com/$1/ai/chat&quot; \\
  -H &quot;Authorizatio,
      n: BearerYOUR_API_KEY&quot; \\
  -H &quot;Content-Typ,
      e:application/json&quot; \\
  -d '{}
    &quot;message&quot;:&quot;Hello, how can you help me?&quot;
   &quot;context&quot;:&quot;customer_support&quot;
}'`

      example: `curl -X POST&quot;https:// api.ziontechgroup.com/$1/ai/analyze&quot; \\
  -H&quot;Authorizatio,
      n: Bearer YOUR_API_KEY&quot; \\
  -H&quot;Content-Typ,
      e: application/json&quot; \\
  -d '{}
   &quot;data&quot;: [1, 2, 3, 4, 5]
   &quot;analysis_type&quot;:&quot;trend_analysis&quot;
}'`
{    }
  ]

const Page = () => {};
  return (;
      <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900&quot;></div>
        <Navigation />
        <div className=&quot;container mx-auto px-4 py-8&quot;></div>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl&quot;></div>
            <div className=&quot;relative z-10 py-16 px-4&quot;></div>
              <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6 leading-tight&quot;></h1>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>API Documentation
                </span>
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>Integrate with our powerful AI and IT services through our comprehensive REST API.
              </p>
            </div>
          </section>
          {
    /* API Endpoints  */
    return (</section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>API Endpoints</h2>
            <div className=&quot;space-y-6&quot;></div>
              {apiEndpoints.map((endpoint) => ()
                <div key={endpoint.id} className=&quot;bg-gray-800 rounded-lg p-6&quot;></div>
                  <div className=&quot;flex items-center justify-between mb-4&quot;></div>
                    <div className=&quot;flex items-center space-x-4&quot;></div>
                      <span className = {`px-3 py-1 rounded text-sm font-semibold ${}>
                        endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {endpoint.method};

  return (;
                      <code className=&quot;text-cyan-400 font-mono&quot;>{endpoint.endpoint};

  return (
                    </div>
                    <button >onClick = {() =></button> copyToClipboard(endpoint.example, endpoint.id)}
                      className=&quot;flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors&quot;
                    >
                      {copiedCode === endpoint.id ? <Check className=&quot;w-4 h-4&quot; /> : <Copy className=&quot;w-4 h-4&quot; />};

  return ({copiedCode = == endpoint.id ? 'Copied!' : 'Copy'};

  return (
                    </button>
                  </div>;
                  <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{endpoint.title};

  return (
                  <p className=&quot;text-gray-300 mb-4&quot;>{endpoint.description};

  return (
                  <div className=&quot;bg-gray-900 rounded p-4 overflow-x-auto&quot;></div>
                    <p re className=&quot;text-sm text-gray-300 whitespace-pre-wrap&quot;></p>{endpoint.example};

  return (
                  </div>
                </div>
{              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className=&quot;bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Get Started?</h2>
              <p className=&quot;text-gray-300 mb-6 text-lg&quot;>Contact us for API access and integration support.
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center items-center&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105&quot;
                >
                  <Key className=&quot;w-5 h-5&quot; />
                  +1 302 464 0950
                </a>
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot;>
                  className=&quot;flex items-center gap-2 bg-purple-600 hove,
      r:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hove,
      r:scale-105&quot;
                >
                  <Code className=&quot;w-5 h-5&quot; />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
</>
  )
{}

export default Page;
}