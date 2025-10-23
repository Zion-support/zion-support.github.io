'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PagePage;
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react'
const AIAccountingAssistantPage: React.FC = () => {
const features = [
{ icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' },
{ icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' },
{ icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' },
{ icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' },
{ icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' },
{ icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' }
]
return (
<>
<Helmet>
<title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
<meta name="description" content="Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics." />
<meta name="keywords" content="AI accounting, financial management, bookkeeping automation, tax preparation, accounting software" />
</Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<section className="py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Accounting Assistant</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your accounting with AI-powered financial management tools.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
<feature.icon className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
<p className="text-gray-300">{feature.description}</p>
</div>
))}
</div>
</div>
</section>
</div>
</>
)
}
export default AIAccountingAssistantPage
