import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, BookOpen, Play, Copy, Check,
  Brain, Atom, Shield, Rocket, Globe,
  Search, Download, ExternalLink, ChevronRight,
  Zap, Settings, Database, Server, Wifi,
  Users, Lock, BarChart3, Lightbulb, Terminal
} from 'lucide-react';

export default function ApiDocs() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/consciousness',
      description: 'Create and manage AI consciousness instances',
      category: 'AI Services',
      auth: 'Bearer Token',
      rateLimit: '1000/hour',
      parameters: [
        { name: 'model', type: 'string', required: true, description: 'AI model to use' },
        { name: 'consciousness_level', type: 'integer', required: false, description: 'Level of consciousness (1-10)' },
        { name: 'personality_traits', type: 'object', required: false, description: 'Personality configuration' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "id": "ai_123", "status": "active" }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid model" }' },
        { code: 401, description: 'Unauthorized', example: '{ "error": "Invalid token" }' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/quantum/status',
      description: 'Get quantum computing system status',
      category: 'Quantum Services',
      auth: 'Bearer Token',
      rateLimit: '10000/hour',
      parameters: [
        { name: 'system_id', type: 'string', required: false, description: 'Specific system to check' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "status": "operational", "qubits": 1000 }' },
        { code: 404, description: 'Not Found', example: '{ "error": "System not found" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/business/automate',
      description: 'Automate business processes with AI',
      category: 'Business Operations',
      auth: 'Bearer Token',
      rateLimit: '500/hour',
      parameters: [
        { name: 'process_type', type: 'string', required: true, description: 'Type of process to automate' },
        { name: 'workflow', type: 'object', required: true, description: 'Workflow configuration' },
        { name: 'triggers', type: 'array', required: false, description: 'Automation triggers' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "automation_id": "auto_456", "status": "running" }' },
        { code: 422, description: 'Validation Error', example: '{ "error": "Invalid workflow" }' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/it/assets',
      description: 'Retrieve IT asset information',
      category: 'IT Services',
      auth: 'Bearer Token',
      rateLimit: '2000/hour',
      parameters: [
        { name: 'asset_type', type: 'string', required: false, description: 'Filter by asset type' },
        { name: 'status', type: 'string', required: false, description: 'Filter by status' },
        { name: 'limit', type: 'integer', required: false, description: 'Number of results (max 100)' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "assets": [...], "total": 150 }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/quantum/neural-network',
      description: 'Create quantum neural network',
      category: 'Quantum Services',
      auth: 'Bearer Token',
      rateLimit: '100/hour',
      parameters: [
        { name: 'architecture', type: 'string', required: true, description: 'Network architecture' },
        { name: 'qubits', type: 'integer', required: true, description: 'Number of qubits' },
        { name: 'training_data', type: 'object', required: false, description: 'Training configuration' }
      ],
      responses: [
        { code: 200, description: 'Success', example: '{ "network_id": "qnn_789", "qubits": 64 }' },
        { code: 413, description: 'Payload Too Large', example: '{ "error": "Data exceeds limit" }' }
      ]
    }
  ];

  const categories = [
    { name: 'All APIs', count: endpoints.length, active: true },
    { name: 'AI Services', count: 1, active: false },
    { name: 'Quantum Services', count: 2, active: false },
    { name: 'Business Operations', count: 1, active: false },
    { name: 'IT Services', count: 1, active: false }
  ];

  const codeExamples = {
    authentication: `// JavaScript/Node.js
const response = await fetch('https://api.ziontechgroup.com/api/v1/ai/consciousness', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'consciousness-v2',
    consciousness_level: 8,
    personality_traits: {
      empathy: 0.9,
      creativity: 0.8,
      logic: 0.7
    }
  })
});

const data = await response.json();
console.log(data);`,

    python: `# Python
import requests

url = "https://api.ziontechgroup.com/api/v1/ai/consciousness"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model": "consciousness-v2",
    "consciousness_level": 8,
    "personality_traits": {
        "empathy": 0.9,
        "creativity": 0.8,
        "logic": 0.7
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,

    curl: `# cURL
curl -X POST https://api.ziontechgroup.com/api/v1/ai/consciousness \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "consciousness-v2",
    "consciousness_level": 8,
    "personality_traits": {
      "empathy": 0.9,
      "creativity": 0.8,
      "logic": 0.7
    }
  }'`
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's AI, quantum computing, and technology platforms. Authentication, endpoints, and code examples." />
        <meta name="keywords" content="API documentation, API reference, REST API, AI API, quantum computing API, authentication" />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
    </>
  );
}