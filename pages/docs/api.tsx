import Head from 'next/head';
import Layout from '../../components/Layout';

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Authentication',
    code: `// Get API token
const response = await fetch('https://api.ziontechgroup.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data.token);`
  },
  {
    language: 'Python',
    title: 'Predictive Analytics',
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
        'model': 'time_series',
        'forecast_period': 30
    }
)

result = response.json()
print(result.predictions)`
  },
  {
    language: 'cURL',
    title: 'Cloud Migration',
    code: `# Start cloud migration
curl -X POST https://api.ziontechgroup.com/cloud/migrate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "source": "on-premises",
    "target": "aws",
    "resources": ["database", "storage", "compute"]
  }'`
  }
];

export default function ApiDocs() {
  return (
    <Layout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation with code examples and integration guides." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with our services using our comprehensive REST API
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Code Examples
              </h2>
              
              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b">
                      <h3 className="text-xl font-semibold text-gray-900">{example.title}</h3>
                      <span className="text-sm text-gray-600">{example.language}</span>
                    </div>
                    <div className="p-6">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}