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
      
      <div style={{ maxWidth: 1200, margin: '40px 20px', padding: '0 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Integration Examples
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.6'}}>
            Real-world examples showing how to integrate Zion Tech Group services into your applications. Choose your preferred language and framework.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 32 }}>
          {/* JavaScript/Node.js */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🟨 JavaScript/Node.js</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
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

  async getServiceById(serviceId) {
    try {
      const response = await axios.get(\`\${this.baseURL}/services/\${serviceId}\`, {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching service:', error.response?.data || error.message);
      throw error;
    }
  }

  async requestQuote(quoteData) {
    try {
      const response = await axios.post(\`\${this.baseURL}/quotes\`, quoteData, {
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

// Usage example
const client = new ZionTechClient('your-api-key-here');

// Get all services
client.getServices()
  .then(services => console.log('Services:', services))
  .catch(error => console.error('Error:', error));

// Get specific service
client.getServiceById('micro-saas')
  .then(service => console.log('Service:', service))
  .catch(error => console.error('Error:', error));

// Request a quote
const quoteData = {
  service_id: 'micro-saas',
  requirements: {
    users: 100,
    features: ['analytics', 'api-access'],
    timeline: '3 months'
  },
  contact: {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Example Corp',
    phone: '+1-555-0123'
  },
  budget_range: '1000-5000',
  additional_notes: 'Looking for a custom solution...'
};

client.requestQuote(quoteData)
  .then(quote => console.log('Quote:', quote))
  .catch(error => console.error('Error:', error));`}
              </pre>
            </div>
          </section>

          {/* Python */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🐍 Python</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>Python Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import requests
import json

class ZionTechClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.ziontechgroup.com/v1'
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_services(self):
        """Get all available services"""
        try:
            response = requests.get(f'{self.base_url}/services', headers=self.headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error fetching services: {e}')
            raise
    
    def get_service_by_id(self, service_id):
        """Get specific service by ID"""
        try:
            response = requests.get(f'{self.base_url}/services/{service_id}', headers=self.headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error fetching service: {e}')
            raise
    
    def request_quote(self, quote_data):
        """Request a quote for a service"""
        try:
            response = requests.post(f'{self.base_url}/quotes', 
                                  headers=self.headers, 
                                  data=json.dumps(quote_data))
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'Error requesting quote: {e}')
            raise

# Usage example
if __name__ == '__main__':
    client = ZionTechClient('your-api-key-here')
    
    # Get all services
    try:
        services = client.get_services()
        print('Services:', json.dumps(services, indent=2))
    except Exception as e:
        print(f'Error: {e}')
    
    # Get specific service
    try:
        service = client.get_service_by_id('micro-saas')
        print('Service:', json.dumps(service, indent=2))
    except Exception as e:
        print(f'Error: {e}')
    
    # Request a quote
    quote_data = {
        'service_id': 'micro-saas',
        'requirements': {
            'users': 100,
            'features': ['analytics', 'api-access'],
            'timeline': '3 months'
        },
        'contact': {
            'name': 'John Doe',
            'email': 'john@example.com',
            'company': 'Example Corp',
            'phone': '+1-555-0123'
        },
        'budget_range': '1000-5000',
        'additional_notes': 'Looking for a custom solution...'
    }
    
    try:
        quote = client.request_quote(quote_data)
        print('Quote:', json.dumps(quote, indent=2))
    except Exception as e:
        print(f'Error: {e}')`}
              </pre>
            </div>
          </section>

          {/* React/Next.js */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>⚛️ React/Next.js</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>React Hook for API Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import { useState, useEffect } from 'react';

// Custom hook for Zion Tech Group API
export function useZionTechAPI(apiKey) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'https://api.ziontechgroup.com/v1';

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(\`\${baseURL}/services\`, {
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

  const requestQuote = async (quoteData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(\`\${baseURL}/quotes\`, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(quoteData)
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) {
      fetchServices();
    }
  }, [apiKey]);

  return {
    services,
    loading,
    error,
    fetchServices,
    requestQuote
  };
}

// React component using the hook
export function ServicesList({ apiKey }) {
  const { services, loading, error, requestQuote } = useZionTechAPI(apiKey);

  const handleQuoteRequest = async (serviceId) => {
    const quoteData = {
      service_id: serviceId,
      requirements: {
        users: 100,
        features: ['analytics', 'api-access'],
        timeline: '3 months'
      },
      contact: {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Example Corp',
        phone: '+1-555-0123'
      },
      budget_range: '1000-5000',
      additional_notes: 'Looking for a custom solution...'
    };

    try {
      const quote = await requestQuote(quoteData);
      console.log('Quote requested:', quote);
      alert('Quote requested successfully!');
    } catch (error) {
      console.error('Error requesting quote:', error);
      alert('Error requesting quote. Please try again.');
    }
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <button 
              onClick={() => handleQuoteRequest(service.id)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Request Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* PHP */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🐘 PHP</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>PHP Integration</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`<?php

class ZionTechClient {
    private $apiKey;
    private $baseURL;
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
        $this->baseURL = 'https://api.ziontechgroup.com/v1';
    }
    
    private function makeRequest($endpoint, $method = 'GET', $data = null) {
        $url = $this->baseURL . $endpoint;
        
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_POST, true);
            if ($data) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            }
        }
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        if (curl_errno($ch)) {
            throw new Exception('Curl error: ' . curl_error($ch));
        }
        
        curl_close($ch);
        
        if ($httpCode >= 400) {
            throw new Exception('HTTP error: ' . $httpCode);
        }
        
        return json_decode($response, true);
    }
    
    public function getServices() {
        return $this->makeRequest('/services');
    }
    
    public function getServiceById($serviceId) {
        return $this->makeRequest('/services/' . $serviceId);
    }
    
    public function requestQuote($quoteData) {
        return $this->makeRequest('/quotes', 'POST', $quoteData);
    }
}

// Usage example
try {
    $client = new ZionTechClient('your-api-key-here');
    
    // Get all services
    $services = $client->getServices();
    echo "Services: " . json_encode($services, JSON_PRETTY_PRINT) . "\\n";
    
    // Get specific service
    $service = $client->getServiceById('micro-saas');
    echo "Service: " . json_encode($service, JSON_PRETTY_PRINT) . "\\n";
    
    // Request a quote
    $quoteData = [
        'service_id' => 'micro-saas',
        'requirements' => [
            'users' => 100,
            'features' => ['analytics', 'api-access'],
            'timeline' => '3 months'
        ],
        'contact' => [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'company' => 'Example Corp',
            'phone' => '+1-555-0123'
        ],
        'budget_range' => '1000-5000',
        'additional_notes' => 'Looking for a custom solution...'
    ];
    
    $quote = $client->requestQuote($quoteData);
    echo "Quote: " . json_encode($quote, JSON_PRETTY_PRINT) . "\\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`}
              </pre>
            </div>
          </section>
        </div>

        {/* Additional Resources */}
        <div style={{ marginTop: 40, background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>📚 Additional Resources</h2>
          <p style={{ opacity: '0.8', marginBottom: 20 }}>
            Need more help? Check out these additional resources to get the most out of our services.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>API Reference</h3>
              <p style={{ opacity: '0.8', fontSize: '0.9rem', marginBottom: 12 }}>
                Complete API documentation with all endpoints, parameters, and response formats.
              </p>
              <Link href="/docs/api-reference" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                View API Reference →
              </Link>
            </div>
            
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>Authentication</h3>
              <p style={{ opacity: '0.8', fontSize: '0.9rem', marginBottom: 12 }}>
                Learn about API keys, OAuth 2.0, and JWT token authentication methods.
              </p>
              <Link href="/docs/authentication" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                Authentication Guide →
              </Link>
            </div>
            
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>Quick Start</h3>
              <p style={{ opacity: '0.8', fontSize: '0.9rem', marginBottom: 12 }}>
                Get up and running quickly with our step-by-step quick start guide.
              </p>
              <Link href="/docs/api-quick-start" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                Quick Start Guide →
              </Link>
            </div>
            
            <div>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>Support</h3>
              <p style={{ opacity: '0.8', fontSize: '0.9rem', marginBottom: 12 }}>
                Get help from our technical team for integration questions and issues.
              </p>
              <Link href="/contact" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}