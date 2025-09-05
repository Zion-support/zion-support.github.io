console.log(data.response);`
  },
  {
    language: 'Python',
    code: `# Predictive Analytics
import requests

response = requests.post(
    'https://api.ziontechgroup.com/ai/predictive-analytics',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'data': historical_data,
        'period': '30_days'
    }
)

predictions = response.json()
print(predictions['predictions'])`
  },
  {
    language: 'cURL',
    code: `# Content Generation
curl -X POST https://api.ziontechgroup.com/ai/content-generation \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog_post"
  }'`
  }
];

export default function APIDocumentationPage() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Complete API documentation for Zion Tech Group services. Learn how to integrate with our APIs, view endpoints, and access code examples."
      keywords="API documentation, REST API, integration, developer docs, endpoints, Zion Tech Group API"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                API <span className="text-blue-600">Documentation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Integrate our AI services into your applications with our comprehensive REST API. 
                Get started with our easy-to-use endpoints and code examples.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get API Key
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
        {/* API Endpoints Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
        {/* Code Examples */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Examples</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started quickly with our code examples in multiple programming languages.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </motion.div>
              ))}
    <Layout title="API Docs">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">Reference content will return after fixes. Basic page added to restore build.</p>
      </div>
    </Layout>
