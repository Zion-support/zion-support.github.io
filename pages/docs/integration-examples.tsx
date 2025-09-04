import Link from 'next/link';
import Head from 'next/head';

export default function IntegrationExamples() {
  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group services. Learn how to integrate our APIs into your applications." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/integration-examples" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Integration Examples
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Real-world examples showing how to integrate Zion Tech Group services into your applications. Choose your preferred language and framework.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 32 }}>
          {/* JavaScript/Node.js */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🟨 JavaScript/Node.js</h2>
            
            <div style={{ background: '#0f172a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>Basic Service Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`const axios = require('axios');

class ZionTechClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.ziontechgroup.com/v1';
  }

  async getServices() {
    try {
      const response = await axios.get(\`\${this.baseURL}/services\`, {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error.response?.data || error.message);
      throw error;
    }
  }

  async requestQuote(serviceData) {
    try {
      const response = await axios.post(\`\${this.baseURL}/quotes\`, serviceData, {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error requesting quote:', error.response?.data || error.message);
      throw error;
    }
  }
}

// Usage
const client = new ZionTechClient('YOUR_API_KEY');
client.getServices().then(services => {
  console.log('Available services:', services);
});`}
              </pre>
            </div>
          </section>

          {/* Python */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐍 Python</h2>
            
            <div style={{ background: '#0f172a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#10b981' }}>AI Services Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import requests
import json

class ZionTechAI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.ziontechgroup.com/v1'
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def process_text(self, text, service_type='analysis'):
        """Process text using AI services"""
        payload = {
            'text': text,
            'service_type': service_type,
            'options': {
                'language': 'en',
                'format': 'json'
            }
        }
        try:
            response = requests.post(
                f'{self.base_url}/ai/process',
                headers=self.headers,
                json=payload
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error processing text: {e}')
            return None
    
    def generate_content(self, prompt, model='gpt-4'):
        """Generate content using AI models"""
        payload = {
            'prompt': prompt,
            'model': model,
            'max_tokens': 1000,
            'temperature': 0.7
        }
        
        try:
            response = requests.post(
                f'{self.base_url}/ai/generate',
                headers=self.headers,
                json=payload
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error generating content: {e}')
            return None

# Usage
ai_client = ZionTechAI('YOUR_API_KEY')
result = ai_client.process_text('Analyze this business data...')
print(result)
`}
              </pre>
            </div>
          </section>

          {/* React/Next.js */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚛️ React/Next.js</h2>
            
            <div style={{ background: '#0f172a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#61dafb' }}>Service Catalog Component</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import { useState, useEffect } from 'react';

const useZionTech = (apiKey) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/ziontech/services', {
          headers: {
            'Authorization': \`Bearer \${process.env.NEXT_PUBLIC_ZIONTECH_API_KEY}\`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        
        const data = await response.json();
        setServices(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const requestQuote = async (serviceData) => {
    try {
      const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceData)
      });
      
      return await response.json();
    } catch (err) {
      throw new Error(\`Quote request failed: \${err.message}\`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service: any) => (
        <div key={service.id} className="bg-slate-800 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-300 mb-4">{service.description}</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">
              Learn More
            </button>
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              Get Quote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCatalog;`}
              </pre>
            </div>
          </section>

          {/* PHP */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐘 PHP</h2>
            
            <div style={{ background: '#0f172a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#8b5cf6' }}>WordPress Plugin Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`<?php
class ZionTechWordPress {
    private $api_key;
    private $base_url = 'https://api.ziontechgroup.com/v1';
    
    public function __construct($api_key) {
        $this->api_key = $api_key;
    }
    
    public function get_services() {
        $url = $this->base_url . '/services';
        
        $args = array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            )
        );
        
        $response = wp_remote_get($url, $args);
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $body = wp_remote_retrieve_body($response);
        return json_decode($body, true);
    }
    
    public function submit_quote_request($data) {
        $url = $this->base_url . '/quotes';
        
        $args = array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            ),
            'body' => json_encode($data)
        );
        
        $response = wp_remote_post($url, $args);
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $body = wp_remote_retrieve_body($response);
        return json_decode($body, true);
    }
}

// Usage in WordPress
$ziontech = new ZionTechWordPress(get_option('ziontech_api_key'));
$services = $ziontech->get_services();

class ZionTechMicroSaaS {
    private $apiKey;
    private $baseUrl = 'https://api.ziontechgroup.com/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
}
?>`}
              </pre>
            </div>
          </section>

          {/* Best Practices */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>✨ Best Practices</h2>
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: '#0f172a', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#86efac' }}>🔒 Security</h3>
                <ul style={{ opacity: 0.8, fontSize: '0.9rem', paddingLeft: 20 }}>
                  <li>Never expose API keys in client-side code</li>
                  <li>Use environment variables for sensitive data</li>
                  <li>Implement proper error handling</li>
                  <li>Validate all input data</li>
                </ul>
              </div>
              
              <div style={{ padding: 20, background: '#0f172a', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>⚡ Performance</h3>
                <ul style={{ opacity: 0.8, fontSize: '0.9rem', paddingLeft: 20 }}>
                  <li>Implement caching for frequently accessed data</li>
                  <li>Use pagination for large datasets</li>
                  <li>Handle rate limits gracefully</li>
                  <li>Optimize API calls with batch requests</li>
                </ul>
              </div>
              
              <div style={{ padding: 20, background: '#0f172a', borderRadius: 8, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#c4b5fd' }}>🛠️ Development</h3>
                <ul style={{ opacity: 0.8, fontSize: '0.9rem', paddingLeft: 20 }}>
                  <li>Use TypeScript for better type safety</li>
                  <li>Implement proper logging and monitoring</li>
                  <li>Write comprehensive tests</li>
                  <li>Follow RESTful API conventions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🤝 Need Help?</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Our team is here to help you integrate our services successfully.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ 
                display: 'inline-block',
                padding: '12px 24px',
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600
              }}>
                Contact Support
              </Link>
              <Link href="/docs/api-reference" style={{ 
                display: 'inline-block',
                padding: '12px 24px',
                background: '#6b7280',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600
              }}>
                API Reference
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}