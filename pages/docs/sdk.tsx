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
      
      <div style={{ maxWidth: 1200, margin: '40px 20px', padding: '0 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SDK Documentation
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.8', lineHeight: '1.6'}}>
            Official SDKs for integrating Zion Tech Group services into your applications. Choose your preferred language and get started quickly.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 32 }}>
          {/* JavaScript SDK */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🟨 JavaScript SDK</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>Installation</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>
{`npm install @ziontechgroup/sdk

# or
yarn add @ziontechgroup/sdk`}
              </pre>
            </div>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fbbf24' }}>Basic Usage</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>`
{`import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
    environment: 'production' // or 'sandbox'
});

// Get all services
const services = await client.services.list();

// Request a quote
const quote = await client.quotes.create({
  serviceId: 'micro-saas',
  requirements: {
    users: 100,
    features: ['analytics', 'api-access']
  },
  contact: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`}
              </pre>
            </div>
          </section>

          {/* Python SDK */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🐍 Python SDK</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#10b981' }}>Installation</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>`
{`pip install ziontechgroup-sdk

# or
pipenv install ziontechgroup-sdk`}
              </pre>
            </div>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#10b981' }}>Basic Usage</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>`
{`from ziontechgroup import ZionTechClient

client = ZionTechClient(
    api_key='your-api-key'
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
        'email': 'john@example.com'
    }
})`}
              </pre>
            </div>
          </section>

          {/* PHP SDK */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🐘 PHP SDK</h2>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#8b5cf6' }}>Installation</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>`
{`composer require ziontechgroup/sdk`}
              </pre>
            </div>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20  }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#8b5cf6' }}>Basic Usage</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem' }}>`
{`<?php
require_once 'vendor/autoload.php';

use ZionTechGroup\\SDK\\ZionTechClient;
>
$client = new ZionTechClient([>
    'api_key' => 'your-api-key'
    'environment' => 'production' // or 'sandbox'
]);

// Get all services
$services = $client->services()->list();

// Request a quote
$quote = $client->quotes()->create([
    'service_id' => 'micro-saas'
    'requirements' => [
        'users' => 100,
        'features' => ['analytics' 'api-access']
    ],
    'contact' => [
        'name' => 'John Doe'
        'email' => 'john@example.com'
    ]
]);
?>`}
              </pre>
            </div>
          </section>

          {/* SDK Features */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24  }}>✨ SDK Features</h2>
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: 'rgba(34, 197, 94, 0.1)', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#86efac' }}>🔧 Easy Integration</h3>
                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Simple, intuitive APIs that make integration straightforward and fast.</p>
              </div>
              
              <div style={{ padding: 20, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>🛡️ Built-in Security</h3>
                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Automatic authentication, request signing, and secure communication.</p>
              </div>
              
              <div style={{ padding: 20, background: 'rgba(139, 92, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#c4b5fd' }}>📚 Comprehensive Documentation</h3>
                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Detailed documentation with examples for every method and feature.</p>
              </div>
              
              <div style={{ padding: 20, background: 'rgba(245, 158, 11, 0.1)', borderRadius: 8, border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#fbbf24' }}>🔄 Auto-retry & Rate Limiting</h3>
                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Automatic retry logic and rate limit handling for reliable API calls.</p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🚀 Getting Started</h2>
            <p style={{ opacity: '0.8', marginBottom: 20 }}>Ready to start using our SDKs? Follow these steps:</p>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>1️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Get Your API Key</h3>
                  <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Contact us to receive your API credentials.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>2️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Install the SDK</h3>
                  <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Use your preferred package manager to install the SDK.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>3️⃣</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Start Building</h3>
                  <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>Follow our examples and start integrating our services.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section style={{ background: '#1e293b', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'  }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16  }}>🤝 Need Help?</h2>
            <p style={{ opacity: '0.8', marginBottom: 20 }}>Our team is here to help you get the most out of our SDKs.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ 
                display: 'inline-block',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600
              }}>
                Contact Support
              </Link>
              <Link href="/docs/integration-examples" style={{ 
                display: 'inline-block',
                padding: '12px 24px',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontWeight: 600
              }}>
                View Examples
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}