import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Award, Clock, Target } from 'lucide-react';

const AIDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Process PDFs, Word docs, images, and scanned documents with 99.9% accuracy.'
    },
    {
      icon: Brain,
      title: 'Intelligent Extraction',
      description: 'AI-powered data extraction from complex documents and forms automatically.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process thousands of documents in seconds with our high-performance AI engine.'
    },
    {
      icon: Shield,
      title: 'Secure Processing',
      description: 'Enterprise-grade security with encryption and compliance standards.'
    },
    {
      icon: Target,
      title: 'Smart Classification',
      description: 'Automatically categorize and route documents based on content and context.'
    },
    {
      icon: Clock,
      title: '24/7 Automation',
      description: 'Continuous document processing without manual intervention or downtime.'
    }
  ];

  const benefits = [
    '95% reduction in manual document processing time',
    '99.9% accuracy in data extraction',
    'Support for 50+ document formats',
    'Real-time processing and validation',
    'Automated workflow integration',
    'Compliance with industry standards'
  ];

  const documentTypes = [
    'Invoices & Receipts',
    'Contracts & Agreements',
    'Forms & Applications',
    'Medical Records',
    'Legal Documents',
    'Financial Statements',
    'Insurance Claims',
    'Tax Documents',
    'HR Documents',
    'Technical Manuals'
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>AI Document Processing | Zion Tech Group - Intelligent Document Analysis</title>
        <meta name="description" content="Automate document processing with AI-powered solutions. Extract data, classify documents, and streamline workflows with 99.9% accuracy." />
        <meta name="keywords" content="AI document processing, document automation, data extraction, OCR, document analysis, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services/document-processing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}</div>
        <section className="pt-24 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <FileText className="w-4 h-4" />
                <span>AI Document Processing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text"></h1>
                Intelligent Document </h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Analysis</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
                Transform your document workflows with AI-powered processing that extracts, classifies, and analyzes ;
                documents with unprecedented accuracy and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"></button>
                  <span>Start Processing</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"></button>
                  View Demo;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our AI document processing platform handles complex documents with ease;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-16 px-4 bg-slate-800/30"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Supported Document Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Process virtually any document format with our comprehensive AI solution;
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"></div>
              {documentTypes.map((type, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-4 border border-slate-700/50 hover:border-purple-400/50 transition-all text-center"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the power of intelligent document processing;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="space-y-6"></div>
                {benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg p-8 border border-purple-500/30"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                <div className="space-y-4"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-cyan-400 font-bold">1000+ docs/min</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-blue-400 font-bold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-purple-400 font-bold">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-500/30"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Ready to Automate Your Document Processing?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Join thousands of businesses already using our AI document processing solutions ;
                to streamline their workflows and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"></button>
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"></button>
                  Schedule Demo;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDocumentProcessingPage;