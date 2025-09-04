import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function IntegrationExamples() {
  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group APIs. Learn how to implement our services in your applications." />
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
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Integration Examples
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Real-world examples of how to integrate our services into your applications.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>💻 JavaScript Example</h2>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`// Fetch available services
async function getServices() {
  try {
    const response = await fetch('https://api.ziontechgroup.com/v1/services', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    console.log('Available services:', data);
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
}

// Request a quote
async function requestQuote(quoteData) {
  try {
    const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    });
    
    const data = await response.json();
    console.log('Quote response:', data);
    return data;
  } catch (error) {
    console.error('Error requesting quote:', error);
  }
}`}
              </pre>
            </div>
          </section>

          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐍 Python Example</h2>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`import requests
import json

class ZionTechAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.ziontechgroup.com/v1"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def get_services(self):
        response = requests.get(f"{self.base_url}/services", headers=self.headers)
        return response.json()
    
    def request_quote(self, quote_data):
        response = requests.post(
            f"{self.base_url}/quotes", 
            headers=self.headers, 
            data=json.dumps(quote_data)
        )
        return response.json()

# Usage
api = ZionTechAPI("YOUR_API_KEY")
services = api.get_services()
print("Available services:", services)`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}