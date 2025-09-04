import Link from 'next/link';
import Head from 'next/head';

export default function SDK() {
  return (
    <>
      <Head>
        <title>SDK Documentation - Zion Tech Group</title>
        <meta name="description" content="SDK documentation for Zion Tech Group services. Official SDKs for JavaScript, Python, PHP, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/sdk" />
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
            SDK Documentation
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Official SDKs for integrating Zion Tech Group services into your applications. Choose your preferred language and get started quickly.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* JavaScript SDK */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🟨 JavaScript SDK</h2>
            
            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Installation</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`npm install @ziontechgroup/sdk

# or

yarn add @ziontechgroup/sdk`}
              </pre>
            </div>
            
            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Basic Usage</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Get all services
const services = await client.services.list();

// Request a quote
const quote = await client.quotes.create({
  service_id: 'micro-saas',
  requirements: {
    users: 100,
    features: ['analytics', 'api-access']
  },
  contact: {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Example Corp'
  }
});

// Use AI services
const aiResult = await client.ai.process({
  text: 'Analyze this business data',
  service_type: 'analysis'
});`}
              </pre>
            </div>

            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Advanced Features</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`// Webhook handling
client.webhooks.on('quote.created', (data) => {
  console.log('New quote created:', data);
});

// Batch operations
const results = await client.batch([
  { method: 'services.list' },
  { method: 'quotes.create', params: quoteData }
]);

// Error handling
try {
  const result = await client.services.get('invalid-id');
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    console.log('Service not found');
  } else if (error.code === 'RATE_LIMITED') {
    console.log('Rate limited, retrying...');
    // Implement retry logic
  }
}`}
              </pre>
            </div>
          </section>

          {/* Python SDK */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐍 Python SDK</h2>
            
            <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>Installation</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`pip install ziontechgroup-sdk

# or

pip install ziontechgroup-sdk[ai]  # with AI dependencies`}
              </pre>
            </div>
            
            <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>Basic Usage</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`from ziontechgroup import ZionTechClient

client = ZionTechClient(
    api_key='your-api-key',
    environment='production'  # or 'sandbox'
)

# Get all services
services = client.services.list()

# Request a quote
quote = client.quotes.create({
    'service_id': 'micro-saas',
    'requirements': {
        'users': 100,
        'features': ['analytics', 'api-access']
    },
    'contact': {
        'name': 'John Doe',
        'email': 'john@example.com',
        'company': 'Example Corp'
    }
})

# Use AI services
ai_result = client.ai.process({
    'text': 'Analyze this business data',
    'service_type': 'analysis'
})`}
              </pre>
            </div>

            <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>Async Support</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`import asyncio
from ziontechgroup import AsyncZionTechClient

async def main():
    client = AsyncZionTechClient(api_key='your-api-key')
    
    # Concurrent requests
    services_task = client.services.list()
    quotes_task = client.quotes.list()
    
    services, quotes = await asyncio.gather(
        services_task, quotes_task
    )
    
    print(f"Found {len(services)} services and {len(quotes)} quotes")

asyncio.run(main())`}
              </pre>
            </div>
          </section>

          {/* PHP SDK */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐘 PHP SDK</h2>
            
            <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>Installation</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`composer require ziontechgroup/sdk

# or add to composer.json
{
    "require": {
        "ziontechgroup/sdk": "^1.0"
    }
}`}
              </pre>
            </div>
            
            <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>Basic Usage</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`<?php

require_once 'vendor/autoload.php';

use ZionTechGroup\\SDK\\ZionTechClient;

$client = new ZionTechClient([
    'api_key' => 'your-api-key',
    'environment' => 'production' // or 'sandbox'
]);

// Get all services
$services = $client->services()->list();

// Request a quote
$quote = $client->quotes()->create([
    'service_id' => 'micro-saas',
    'requirements' => [
        'users' => 100,
        'features' => ['analytics', 'api-access']
    ],
    'contact' => [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'company' => 'Example Corp'
    ]
]);

// Use AI services
$aiResult = $client->ai()->process([
    'text' => 'Analyze this business data',
    'service_type' => 'analysis'
]);

?>`}
              </pre>
            </div>

            <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>Laravel Integration</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`<?php

// config/services.php
return [
    'ziontech' => [
        'api_key' => env('ZIONTECH_API_KEY'),
        'environment' => env('ZIONTECH_ENV', 'production'),
    ],
];

// app/Services/ZionTechService.php
class ZionTechService
{
    protected $client;
    
    public function __construct()
    {
        $this->client = new ZionTechClient(config('services.ziontech'));
    }
    
    public function getServices()
    {
        return $this->client->services()->list();
    }
    
    public function createQuote($data)
    {
        return $this->client->quotes()->create($data);
    }
}

// Usage in controller
$zionTech = new ZionTechService();
$services = $zionTech->getServices();`}
              </pre>
            </div>
          </section>

          {/* Go SDK */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🐹 Go SDK</h2>
            
            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Installation</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`go get github.com/ziontechgroup/go-sdk

# or

go mod init your-project
go get github.com/ziontechgroup/go-sdk`}
              </pre>
            </div>
            
            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Basic Usage</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`package main

import (
    "fmt"
    "log"
    "github.com/ziontechgroup/go-sdk"
)

func main() {
    client := ziontech.NewClient(&ziontech.Config{
        APIKey:     "your-api-key",
        Environment: "production", // or "sandbox"
    })
    
    // Get all services
    services, err := client.Services.List()
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Found %d services\\n", len(services))
    
    // Request a quote
    quote, err := client.Quotes.Create(&ziontech.QuoteRequest{
        ServiceID: "micro-saas",
        Requirements: ziontech.Requirements{
            Users: 100,
            Features: []string{"analytics", "api-access"},
        },
        Contact: ziontech.Contact{
            Name:    "John Doe",
            Email:   "john@example.com",
            Company: "Example Corp",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Quote created: %s\\n", quote.ID)
}`}
              </pre>
            </div>

            <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>Context Support</h3>
              <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`package main

import (
    "context"
    "time"
    "github.com/ziontechgroup/go-sdk"
)

func main() {
    client := ziontech.NewClient(&ziontech.Config{
        APIKey: "your-api-key",
    })
    
    // With timeout
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    
    services, err := client.Services.ListWithContext(ctx)
    if err != nil {
        log.Fatal(err)
    }
    
    // With custom headers
    ctx = context.WithValue(ctx, "custom-header", "value")
    quote, err := client.Quotes.CreateWithContext(ctx, &quoteRequest)
}`}
              </pre>
            </div>
          </section>

          {/* SDK Features */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>✨ SDK Features</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              <div style={{ background: '#e3f2fd', padding: 20, borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1976d2' }}>🔐 Authentication</h3>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li>Automatic API key management</li>
                  <li>OAuth 2.0 support</li>
                  <li>JWT token handling</li>
                  <li>Environment-based configuration</li>
                </ul>
              </div>

              <div style={{ background: '#e8f5e8', padding: 20, borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#2e7d32' }}>⚡ Performance</h3>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li>Connection pooling</li>
                  <li>Request batching</li>
                  <li>Automatic retries</li>
                  <li>Response caching</li>
                </ul>
              </div>

              <div style={{ background: '#fff3e0', padding: 20, borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#f57c00' }}>🛡️ Error Handling</h3>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li>Typed error responses</li>
                  <li>Rate limit handling</li>
                  <li>Network retry logic</li>
                  <li>Detailed error messages</li>
                </ul>
              </div>

              <div style={{ background: '#f3e5f5', padding: 20, borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#7b1fa2' }}>🔧 Developer Experience</h3>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li>TypeScript definitions</li>
                  <li>IDE autocomplete</li>
                  <li>Comprehensive documentation</li>
                  <li>Code examples</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, border: '1px solid #e9ecef' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🚀 Getting Started</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#e3f2fd', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>1️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Choose Your Language</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Select the SDK for your preferred programming language.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#e8f5e8', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>2️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Install the SDK</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Use your package manager to install the SDK.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#fff3e0', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>3️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Get Your API Key</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Contact us to get your API credentials.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#f3e5f5', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>4️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Start Building</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Follow the examples and start integrating our services.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}