import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const AIDocumentProcessorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Document Processor Pro - Zion Tech Group"
        description="Intelligent document processing solution with OCR, data extraction, and automated workflow capabilities. Automate document processing with AI."
        keywords="document processing, OCR, data extraction, form processing, invoice automation, AI document analysis"
        canonicalUrl="https://ziontechgroup.com/ai-document-processor"
      />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="futuristic-heading gradient-text mb-6">
              AI Document Processor Pro
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Automate document processing with our intelligent AI solution that extracts, 
              classifies, and processes documents with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="futuristic-btn">
                Get Started
              </Link>
              <Link to="/pricing" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Key Features</h2>
            <div className="futuristic-grid">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">OCR Technology</h3>
                <p className="futuristic-text">
                  Advanced optical character recognition that extracts text from any document format with 99%+ accuracy.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Data Extraction</h3>
                <p className="futuristic-text">
                  Automatically extract structured data from unstructured documents using AI-powered algorithms.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Document Classification</h3>
                <p className="futuristic-text">
                  Intelligently categorize documents by type, content, and purpose for better organization.
                </p>
              </div>
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-green mb-4">Form Processing</h3>
                <p className="futuristic-text">
                  Extract data from forms, applications, and surveys with high accuracy and validation.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-cyan mb-4">Invoice Automation</h3>
                <p className="futuristic-text">
                  Automatically process invoices, extract line items, and integrate with accounting systems.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-orange mb-4">Workflow Automation</h3>
                <p className="futuristic-text">
                  Create automated workflows for document processing, approval, and distribution.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Use Cases</h2>
            <div className="futuristic-grid-2">
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Invoice Processing</h3>
                <p className="futuristic-text">
                  Automate invoice data extraction, validation, and entry into accounting systems.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Contract Management</h3>
                <p className="futuristic-text">
                  Extract key terms, dates, and clauses from contracts for better management.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Form Digitization</h3>
                <p className="futuristic-text">
                  Convert paper forms to digital data with automated processing and validation.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-green mb-4">Compliance Monitoring</h3>
                <p className="futuristic-text">
                  Monitor documents for compliance requirements and flag potential issues.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Pricing</h2>
            <div className="futuristic-grid-3">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Basic</h3>
                <div className="text-3xl font-bold text-white mb-4">$99<span className="text-lg">/month</span></div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• 1,000 documents/month</li>
                  <li>• Basic OCR</li>
                  <li>• 5 form templates</li>
                  <li>• Email support</li>
                  <li>• API access</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Pro</h3>
                <div className="text-3xl font-bold text-white mb-4">$299<span className="text-lg">/month</span></div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• 10,000 documents/month</li>
                  <li>• Advanced OCR</li>
                  <li>• 25 form templates</li>
                  <li>• Workflow automation</li>
                  <li>• Priority support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-4">$899<span className="text-lg">/month</span></div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Unlimited documents</li>
                  <li>• Custom AI models</li>
                  <li>• Unlimited templates</li>
                  <li>• On-premise deployment</li>
                  <li>• 24/7 support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="futuristic-heading mb-8">Ready to Automate Document Processing?</h2>
            <p className="futuristic-text text-xl mb-8">
              Contact us today to discuss your document processing needs and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="futuristic-btn">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDocumentProcessorPage;