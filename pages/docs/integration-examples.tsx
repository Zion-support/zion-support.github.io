import Link from 'next/link';
import Head from 'next/head';

export default function IntegrationExamples() {
  return (
    <>
      <Head>
        <title>Integration Examples - Zion Tech Group Documentation</title>
        <meta name="description" content="Real-world integration examples for Zion Tech Group services. Learn how to integrate our micro SaaS products, AI services, and IT solutions into your applications." />
        <meta name="keywords" content="integration examples, code samples, micro SaaS, AI services, IT solutions, tutorials" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/integration-examples" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1a2e 50%, #16213e 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: 32, fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none' }}>Documentation</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <span style={{ color: '#64748b' }}>Integration Examples</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 40, alignItems: 'start' }}>
            {/* Sidebar */}
            <aside style={{ 
              background: 'rgba(15, 23, 42, 0.8)', 
              borderRadius: 12, 
              padding: 24, 
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'sticky',
              top: 20
            }}>
              <h3 style={{ marginBottom: 16, fontSize: '1.1rem', fontWeight: 600 }}>Documentation</h3>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Overview</Link>
                <Link href="/docs/getting-started" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Getting Started</Link>
                <Link href="/docs/api-quick-start" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>API Quick Start</Link>
                <Link href="/docs/integration-examples" style={{ color: 'white', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>Integration Examples</Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Integration Examples
              </h1>
              
              <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: 32, lineHeight: 1.6 }}>
                Real-world examples showing how to integrate Zion Tech Group services into your applications. Choose your technology stack and get started quickly.
              </p>

              <div style={{ display: 'grid', gap: 24 }}>
                {/* AI Services Integration */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#8b5cf6' }}>AI Services Integration</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Integrate our AI services for text analysis, image processing, and automation:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>React Component Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`import React, { useState } from 'react';

const AITextAnalyzer = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${process.env.ZION_API_KEY}\`
        },
        body: JSON.stringify({
          text: text,
          type: 'sentiment'
        })
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze..."
      />
      <button onClick={analyzeText} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Text'}
      </button>
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
};`}</pre>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Node.js Express Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/api/ai/analyze', async (req, res) => {
  try {
    const { text, type } = req.body;
    
    const response = await axios.post('https://api.ziontechgroup.com/v1/ai/analyze', {
      text,
      type
    }, {
      headers: {
        'Authorization': \`Bearer \${process.env.ZION_API_KEY}\`,
        'Content-Type': 'application/json'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Analysis failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}</pre>
                  </div>
                </section>

                {/* Micro SaaS Integration */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#3b82f6' }}>Micro SaaS Integration</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Integrate our micro SaaS products into your existing applications:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Python Flask Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/email-validator', methods=['POST'])
def validate_email():
    data = request.get_json()
    email = data.get('email')
    
    # Call Zion Tech Group Email Validator API
    response = requests.post('https://api.ziontechgroup.com/v1/email/validate', 
        json={'email': email},
        headers={'Authorization': f'Bearer {os.getenv("ZION_API_KEY")}'}
    )
    
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Validation failed'}), 400

@app.route('/api/url-shortener', methods=['POST'])
def shorten_url():
    data = request.get_json()
    url = data.get('url')
    
    response = requests.post('https://api.ziontechgroup.com/v1/url/shorten',
        json={'url': url},
        headers={'Authorization': f'Bearer {os.getenv("ZION_API_KEY")}'}
    )
    
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)`}</pre>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Vue.js Component Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`<template>
  <div class="url-shortener">
    <input v-model="longUrl" placeholder="Enter URL to shorten" />
    <button @click="shortenUrl" :disabled="loading">
      {{ loading ? 'Shortening...' : 'Shorten URL' }}
    </button>
    <div v-if="shortUrl" class="result">
      <p>Short URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: '',
      shortUrl: '',
      loading: false
    }
  },
  methods: {
    async shortenUrl() {
      this.loading = true;
      try {
        const response = await fetch('/api/url-shortener', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: this.longUrl })
        });
        
        const data = await response.json();
        this.shortUrl = data.shortUrl;
      } catch (error) {
        console.error('URL shortening failed:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>`}</pre>
                  </div>
                </section>

                {/* IT Services Integration */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#22c55e' }}>IT Services Integration</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Integrate our IT services for monitoring, automation, and infrastructure management:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Docker Integration Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Install Zion Tech Group monitoring agent
RUN curl -sSL https://agents.ziontechgroup.com/install.sh | sh

EXPOSE 3000
CMD ["npm", "start"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - ZION_API_KEY=your_api_key_here
      - ZION_MONITORING_ENABLED=true
    volumes:
      - ./logs:/app/logs`}</pre>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Kubernetes Deployment Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: zion-integrated-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: zion-integrated-app
  template:
    metadata:
      labels:
        app: zion-integrated-app
    spec:
      containers:
      - name: app
        image: your-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: ZION_API_KEY
          valueFrom:
            secretKeyRef:
              name: zion-secrets
              key: api-key
        - name: ZION_MONITORING_ENABLED
          value: "true"
---
apiVersion: v1
kind: Service
metadata:
  name: zion-integrated-service
spec:
  selector:
    app: zion-integrated-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer`}</pre>
                  </div>
                </section>

                {/* Webhook Integration */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#ef4444' }}>Webhook Integration</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Set up webhooks to receive real-time notifications from our services:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Webhook Handler Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.raw({ type: 'application/json' }));

app.post('/webhook/zion', (req, res) => {
  const signature = req.headers['x-zion-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.ZION_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(400).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Handle different event types
  switch (event.type) {
    case 'ai.analysis.completed':
      handleAnalysisCompleted(event.data);
      break;
    case 'service.status.changed':
      handleServiceStatusChanged(event.data);
      break;
    default:
      console.log('Unknown event type:', event.type);
  }
  
  res.status(200).send('OK');
});

function handleAnalysisCompleted(data) {
  console.log('Analysis completed:', data);
  // Update your database, send notifications, etc.
}

function handleServiceStatusChanged(data) {
  console.log('Service status changed:', data);
  // Update service status in your system
}

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}</pre>
                  </div>
                </section>

                {/* Next Steps */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#22c55e' }}>Need More Help?</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    These examples should get you started, but we're here to help with more complex integrations:
                  </p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      fontWeight: 600
                    }}>Contact Support</Link>
                    <Link href="/docs/api-quick-start" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'rgba(15, 23, 42, 0.8)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontWeight: 600
                    }}>API Reference</Link>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}