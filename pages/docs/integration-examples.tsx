import Link from 'next/link';
import Head from 'next/head';

export default function IntegrationExamples() {
  return (
    <>
      <Head>
        <title>Integration Examples - Documentation - Zion Tech Group</title>
        <meta name="description" content="Code examples and integration guides for connecting with our APIs and services." />
        <meta name="keywords" content="integration examples, code examples, API integration, documentation" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/integration-examples" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Integration Examples</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Code examples and integration guides for our APIs and services
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">JavaScript/Node.js</h2>
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <pre className="text-slate-300">
{`const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.ziontechgroup.com/v1',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// Get data
async function getData() {
  try {
    const response = await apiClient.get('/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-green-400">Python</h2>
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <pre className="text-slate-300">
{`import requests

class ZionTechAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.ziontechgroup.com/v1'
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_data(self):
        response = requests.get(f'{self.base_url}/data', headers=self.headers)
        return response.json()

# Usage
api = ZionTechAPI('YOUR_API_KEY')
data = api.get_data()
print(data)`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-purple-400">PHP</h2>
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <pre className="text-slate-300">
{`<?php
class ZionTechAPI {
    private $apiKey;
    private $baseUrl = 'https://api.ziontechgroup.com/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function getData() {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl . '/data');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);
        curl_close($ch);
        
        return json_decode($response, true);
    }
}

// Usage
$api = new ZionTechAPI('YOUR_API_KEY');
$data = $api->getData();
print_r($data);
?>`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-orange-400">Webhook Integration</h2>
            <p className="text-slate-300 mb-4">
              Set up webhooks to receive real-time notifications:
            </p>
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <pre className="text-slate-300">
{`// Webhook endpoint example
app.post('/webhook', (req, res) => {
  const { event, data } = req.body;
  
  switch (event) {
    case 'data.updated':
      console.log('Data updated:', data);
      break;
    case 'user.created':
      console.log('User created:', data);
      break;
    default:
      console.log('Unknown event:', event);
  }
  
  res.status(200).send('OK');
});`}
              </pre>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/docs" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4">
              Back to Documentation
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
              Get Help
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}