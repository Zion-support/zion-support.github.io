import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIDocumentProcessorPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Document Processor Pro",
    "description": "Intelligent document processing solution with OCR, data extraction, and automated workflow capabilities",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Mobile",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Document Processor Pro - Intelligent Document Processing | Zion Tech Group</title>
        <meta name="description" content="Automate document processing with AI-powered OCR, data extraction, and workflow automation. Transform your document management." />
        <meta name="keywords" content="AI document processing, OCR, data extraction, document automation, workflow automation" />
        <meta property="og:title" content="Zion AI Document Processor Pro - Intelligent Document Processing" />
        <meta property="og:description" content="Automate document processing with AI-powered OCR, data extraction, and workflow automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-document-processor" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 floating">
              Zion AI Document Processor Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto floating-delayed">
              Intelligent document processing solution with OCR, data extraction, and automated workflow capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 floating-slow">
              <a href="/contact" className="neon-button">
                Get Started
              </a>
              <a href="/pricing" className="glow-border text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                View Pricing
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text-green mb-4">OCR Technology</h3>
                <p className="text-gray-300">Advanced optical character recognition that accurately extracts text from scanned documents and images.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Data Extraction</h3>
                <p className="text-gray-300">Intelligently extract structured data from unstructured documents with high accuracy.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text mb-4">Document Classification</h3>
                <p className="text-gray-300">Automatically categorize and organize documents based on content and type.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Automated Workflows</h3>
                <p className="text-gray-300">Create custom workflows to process documents automatically based on your business rules.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Multi-format Support</h3>
                <p className="text-gray-300">Process PDFs, images, Word documents, Excel files, and more in a single platform.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Batch Processing</h3>
                <p className="text-gray-300">Process thousands of documents simultaneously for maximum efficiency and throughput.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold neon-text-green mb-4">Basic</h3>
                <div className="text-4xl font-bold text-white mb-4">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Up to 1,000 documents/month</li>
                  <li>Basic OCR capabilities</li>
                  <li>5 workflow templates</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Get Started</a>
              </div>
              <div className="futuristic-card p-8 text-center glow-border">
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Pro</h3>
                <div className="text-4xl font-bold text-white mb-4">$399<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Up to 10,000 documents/month</li>
                  <li>Advanced OCR & AI extraction</li>
                  <li>Unlimited workflow templates</li>
                  <li>Priority support</li>
                  <li>API access</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Get Started</a>
              </div>
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-4">$999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Unlimited documents</li>
                  <li>Custom AI models</li>
                  <li>Custom integrations</li>
                  <li>24/7 dedicated support</li>
                  <li>On-premise deployment</li>
                  <li>Custom training</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Contact Sales</a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">Why Choose Zion AI Document Processor Pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Automated Data Entry</h3>
                <p className="text-gray-300">Eliminate manual data entry with intelligent extraction that reduces errors and saves time.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Reduced Processing Time</h3>
                <p className="text-gray-300">Process documents in seconds instead of hours, dramatically improving operational efficiency.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Improved Accuracy</h3>
                <p className="text-gray-300">AI-powered extraction ensures higher accuracy rates compared to manual processing.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text mb-4">Cost Savings</h3>
                <p className="text-gray-300">Reduce operational costs by automating document processing workflows and reducing manual labor.</p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Invoice Processing</h3>
                <p className="text-gray-300">Automatically extract data from invoices for accounting and payment processing.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Contract Analysis</h3>
                <p className="text-gray-300">Analyze contracts and extract key terms, dates, and obligations automatically.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Form Data Extraction</h3>
                <p className="text-gray-300">Extract information from forms, applications, and surveys for data analysis.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text mb-4">Document Digitization</h3>
                <p className="text-gray-300">Convert paper documents to digital format with searchable text and metadata.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Compliance Checking</h3>
                <p className="text-gray-300">Automatically check documents for compliance with regulations and standards.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Data Migration</h3>
                <p className="text-gray-300">Extract data from legacy documents for migration to new systems.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text mb-8">Ready to Automate Your Document Processing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about Zion AI Document Processor Pro and how it can transform your document management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button">
                Contact Us
              </a>
              <a href="tel:+13024640950" className="glow-border text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                Call: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIDocumentProcessorPage;