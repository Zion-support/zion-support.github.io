import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SDK Documentation - Zion Tech Group Developer Tools',
  description: 'Comprehensive SDK documentation for Zion Tech Group AI services. Learn how to use our official SDKs in your applications.',
  keywords: 'SDK documentation, developer tools, software development kit, AI SDK, Zion Tech Group, integration',
  openGraph: {
    title: 'SDK Documentation - Zion Tech Group Developer Tools',
    description: 'Comprehensive SDK documentation for Zion Tech Group AI services.',
    type: 'website',
  },
};

export default function SDKDocumentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              SDK Documentation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Official software development kits for integrating Zion Tech Group AI services into your applications.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8 space-y-2">
                <h3 className="text-lg font-semibold text-white mb-4">SDK Reference</h3>
                <a href="#python" className="block text-gray-300 hover:text-purple-400 py-2">Python SDK</a>
                <a href="#javascript" className="block text-gray-300 hover:text-purple-400 py-2">JavaScript SDK</a>
                <a href="#java" className="block text-gray-300 hover:text-purple-400 py-2">Java SDK</a>
                <a href="#go" className="block text-gray-300 hover:text-purple-400 py-2">Go SDK</a>
                <a href="#php" className="block text-gray-300 hover:text-purple-400 py-2">PHP SDK</a>
                <a href="#ruby" className="block text-gray-300 hover:text-purple-400 py-2">Ruby SDK</a>
                <a href="#csharp" className="block text-gray-300 hover:text-purple-400 py-2">C# SDK</a>
                <a href="#examples" className="block text-gray-300 hover:text-purple-400 py-2">Code Examples</a>
                <a href="#best-practices" className="block text-gray-300 hover:text-purple-400 py-2">Best Practices</a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <section id="python" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Python SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our Python SDK provides a simple and intuitive interface for integrating AI services into Python applications.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`pip install zion-ai-sdk

# Or with conda
conda install -c ziontechgroup zion-ai-sdk`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`from zion_ai import Client

# Initialize the client
client = Client(api_key="your-api-key")

# Analyze text sentiment
result = client.text_analysis.analyze_sentiment(
    text="I love using Zion Tech Group's AI services!"
)

print(f"Sentiment: {result.sentiment}")
print(f"Confidence: {result.confidence}")`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Available Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <code className="bg-gray-700 px-2 py-1 rounded">text_analysis</code> - Text processing and analysis</li>
                  <li>• <code className="bg-gray-700 px-2 py-1 rounded">computer_vision</code> - Image and video analysis</li>
                  <li>• <code className="bg-gray-700 px-2 py-1 rounded">machine_learning</code> - Custom model training and prediction</li>
                  <li>• <code className="bg-gray-700 px-2 py-1 rounded">automation</code> - Workflow automation and orchestration</li>
                </ul>
              </section>

              <section id="javascript" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">JavaScript SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our JavaScript SDK works in both Node.js and browser environments, providing seamless integration for web applications.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`npm install @ziontechgroup/ai-sdk

# Or with yarn
yarn add @ziontechgroup/ai-sdk`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`const { Client } = require('@ziontechgroup/ai-sdk');

// Initialize the client
const client = new Client('your-api-key');

// Analyze text sentiment
async function analyzeText() {
  const result = await client.textAnalysis.analyzeSentiment(
    'I love using Zion Tech Group\'s AI services!'
  );
  
  console.log('Sentiment:', result.sentiment);
  console.log('Confidence:', result.confidence);
}

analyzeText();`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Browser Usage</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`<script src="https://cdn.ziontechgroup.com/sdk/v1/zion-ai-sdk.min.js"></script>
<script>
  const client = new ZionAI.Client('your-api-key');
  
  client.textAnalysis.analyzeSentiment('Hello world!')
    .then(result => console.log(result));
</script>`}
                  </pre>
                </div>
              </section>

              <section id="java" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Java SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our Java SDK provides enterprise-grade integration for Java applications with full type safety and comprehensive error handling.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`<dependency>
  <groupId>com.ziontechgroup</groupId>
  <artifactId>ai-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`import com.ziontechgroup.ai.Client;
import com.ziontechgroup.ai.models.SentimentResult;

public class Example {
    public static void main(String[] args) {
        Client client = new Client("your-api-key");
        
        SentimentResult result = client.textAnalysis()
            .analyzeSentiment("I love using Zion Tech Group's AI services!");
        
        System.out.println("Sentiment: " + result.getSentiment());
        System.out.println("Confidence: " + result.getConfidence());
    }
}`}
                  </pre>
                </div>
              </section>

              <section id="go" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Go SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our Go SDK provides high-performance integration for Go applications with minimal dependencies and excellent concurrency support.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`go get github.com/ziontechgroup/ai-sdk-go`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`package main

import (
    "fmt"
    "log"
    "github.com/ziontechgroup/ai-sdk-go"
)

func main() {
    client := zion.NewClient("your-api-key")
    
    result, err := client.TextAnalysis.AnalyzeSentiment(
        "I love using Zion Tech Group's AI services!"
    )
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Sentiment: %s\n", result.Sentiment)
    fmt.Printf("Confidence: %f\n", result.Confidence)
}`}
                  </pre>
                </div>
              </section>

              <section id="php" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">PHP SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our PHP SDK provides easy integration for PHP applications with Composer support and PSR-4 autoloading.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`composer require ziontechgroup/ai-sdk`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`<?php
require_once 'vendor/autoload.php';

use ZionTechGroup\AI\Client;

$client = new Client('your-api-key');

$result = $client->textAnalysis()->analyzeSentiment(
    'I love using Zion Tech Group\'s AI services!'
);

echo "Sentiment: " . $result->sentiment . "\n";
echo "Confidence: " . $result->confidence . "\n";
?>`}
                  </pre>
                </div>
              </section>

              <section id="ruby" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Ruby SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our Ruby SDK provides elegant integration for Ruby applications with full support for Ruby conventions and idioms.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`gem install zion-ai-sdk

# Or add to Gemfile
gem 'zion-ai-sdk'`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`require 'zion-ai-sdk'

client = ZionAI::Client.new('your-api-key')

result = client.text_analysis.analyze_sentiment(
  'I love using Zion Tech Group\'s AI services!'
)

puts "Sentiment: #{result.sentiment}"
puts "Confidence: #{result.confidence}"`}
                  </pre>
                </div>
              </section>

              <section id="csharp" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">C# SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our C# SDK provides robust integration for .NET applications with full async/await support and comprehensive error handling.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`dotnet add package ZionTechGroup.AI.SDK

# Or via Package Manager Console
Install-Package ZionTechGroup.AI.SDK`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`using ZionTechGroup.AI;

class Program
{
    static async Task Main(string[] args)
    {
        var client = new Client("your-api-key");
        
        var result = await client.TextAnalysis.AnalyzeSentimentAsync(
            "I love using Zion Tech Group's AI services!"
        );
        
        Console.WriteLine($"Sentiment: {result.Sentiment}");
        Console.WriteLine($"Confidence: {result.Confidence}");
    }
}`}
                  </pre>
                </div>
              </section>

              <section id="examples" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
                <p className="text-gray-300 mb-6">
                  Explore comprehensive code examples for common use cases and integration patterns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Text Analysis</h3>
                    <p className="text-gray-300 text-sm mb-3">Sentiment analysis, language detection, and entity extraction</p>
                    <Link href="/docs/api" className="text-purple-400 hover:text-purple-300 text-sm">
                      View Examples →
                    </Link>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Computer Vision</h3>
                    <p className="text-gray-300 text-sm mb-3">Object detection, image classification, and OCR</p>
                    <Link href="/docs/api" className="text-purple-400 hover:text-purple-300 text-sm">
                      View Examples →
                    </Link>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Machine Learning</h3>
                    <p className="text-gray-300 text-sm mb-3">Model training, prediction, and evaluation</p>
                    <Link href="/docs/api" className="text-purple-400 hover:text-purple-300 text-sm">
                      View Examples →
                    </Link>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">AI Automation</h3>
                    <p className="text-gray-300 text-sm mb-3">Workflow automation and process orchestration</p>
                    <Link href="/docs/api" className="text-purple-400 hover:text-purple-300 text-sm">
                      View Examples →
                    </Link>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Best Practices</h2>
                <p className="text-gray-300 mb-6">
                  Follow these best practices to ensure optimal performance and reliability when using our SDKs.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Error Handling</h3>
                    <p className="text-gray-300 mb-3">Always implement proper error handling for API calls:</p>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`try {
    const result = await client.textAnalysis.analyzeSentiment(text);
    // Handle success
} catch (error) {
    if (error.code === 'RATE_LIMIT_EXCEEDED') {
        // Handle rate limiting
    } else if (error.code === 'INVALID_REQUEST') {
        // Handle invalid input
    } else {
        // Handle other errors
    }
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connection Pooling</h3>
                    <p className="text-gray-300 mb-3">Use connection pooling for high-throughput applications:</p>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`// Configure connection pooling
const client = new Client('your-api-key', {
    maxConnections: 10,
    timeout: 30000,
    retryAttempts: 3
});`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Caching</h3>
                    <p className="text-gray-300 mb-3">Implement caching for frequently accessed data:</p>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`// Cache results for repeated requests
const cache = new Map();

async function getCachedResult(key, fetchFunction) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    
    const result = await fetchFunction();
    cache.set(key, result);
    return result;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Need Help with SDK Integration?</h2>
                <p className="text-gray-200 mb-6">
                  Our developer support team is here to help you integrate our SDKs successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Developer Support
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}