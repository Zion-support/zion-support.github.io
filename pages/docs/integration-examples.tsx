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
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            marginBottom: 16, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Integration Examples
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Real-world examples showing how to integrate Zion Tech Group services into your applications. Choose your preferred language and framework.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* JavaScript/Node.js */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🟨 JavaScript/Node.js</h2>
            
            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Basic Service Integration</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
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
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐍 Python</h2>
            
            <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>AI Services Integration</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
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
print(result)`}
              </pre>
            </div>
          </section>

          {/* React/Next.js */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚛️ React/Next.js</h2>
            
            <div style={{ background: '#f3e5f5', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#7b1fa2' }}>React Hook Integration</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import { useState, useEffect } from 'react';

const useZionTech = (apiKey) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.ziontechgroup.com/v1/services', {
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      setServices(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    if (apiKey) {
      fetchServices();
    }
  }, [apiKey]);

  return { services, loading, error, fetchServices, requestQuote };
};

export default useZionTech;`}
              </pre>
            </div>
          </section>

          {/* PHP */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐘 PHP</h2>
            
            <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>Micro SaaS Integration</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`<?php

class ZionTechMicroSaaS {
    private $apiKey;
    private $baseUrl = 'https://api.ziontechgroup.com/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function getMicroSaaSProducts() {
        $url = $this->baseUrl . '/micro-saas';
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            return json_decode($response, true);
        } else {
            throw new Exception('API request failed with code: ' . $httpCode);
        }
    }
    
    public function subscribeToService($serviceId, $subscriptionData) {
        $url = $this->baseUrl . '/micro-saas/' . $serviceId . '/subscribe';
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($subscriptionData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 201) {
            return json_decode($response, true);
        } else {
            throw new Exception('Subscription failed with code: ' . $httpCode);
        }
    }
}

// Usage
$client = new ZionTechMicroSaaS('YOUR_API_KEY');
$products = $client->getMicroSaaSProducts();
echo "Available products: " . count($products['data']) . "\\n";

?>`}
              </pre>
            </div>
          </section>

          {/* cURL Examples */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🌐 cURL Examples</h2>
            
            <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>Get All Services</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>

            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Request Quote</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service_id": "micro-saas",
    "requirements": {
      "users": 100,
      "features": ["analytics", "api-access"]
    },
    "contact": {
      "name": "John Doe",
      "email": "john@example.com",
      "company": "Example Corp"
    }
  }'`}
              </pre>
            </div>

            <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>AI Service Request</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`curl -X POST "https://api.ziontechgroup.com/v1/ai/process" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Analyze this business data for insights",
    "service_type": "analysis",
    "options": {
      "language": "en",
      "format": "json"
    }
  }'`}
              </pre>
            </div>
          </section>

          {/* Error Handling */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚠️ Error Handling</h2>
            
            <div style={{ background: '#ffebee', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#d32f2f' }}>Common Error Responses</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": "Please check your API key and try again"
  },
  "timestamp": "2025-01-26T10:30:00Z"
}`}
              </pre>
            </div>

            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Best Practices</h3>
              <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                <li>Always check HTTP status codes before processing responses</li>
                <li>Implement retry logic for temporary failures (5xx errors)</li>
                <li>Handle rate limiting (429 status) with exponential backoff</li>
                <li>Log errors for debugging and monitoring</li>
                <li>Validate API responses before using data</li>
                <li>Use proper timeout values for requests</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🎯 Next Steps</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#e3f2fd', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>📖</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Read the API Reference</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Explore detailed documentation for all endpoints and parameters.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#e8f5e8', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>🔧</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Try the Examples</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Copy and modify these examples to fit your specific use case.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#fff3e0', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>🤝</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Get Support</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Contact our team if you need help with integration or have questions.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}