import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIFormBuilderPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Form Builder",
    "description": "Create intelligent, dynamic forms with AI-powered field suggestions and validation. Build forms 5x faster with our no-code form builder.",
    "url": "https://ziontechgroup.com/zion-ai-form-builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "19",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "19",
        "priceCurrency": "USD",
        "unitText": "month"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
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
        <title>Zion AI Form Builder - Intelligent No-Code Form Creation Platform</title>
        <meta name="description" content="Create intelligent, dynamic forms with AI-powered field suggestions and validation. Build forms 5x faster with our no-code form builder." />
        <meta name="keywords" content="AI form builder, no-code forms, form creation, data collection, form validation, dynamic forms, form automation" />
        <meta property="og:title" content="Zion AI Form Builder - Intelligent No-Code Form Creation Platform" />
        <meta property="og:description" content="Create intelligent, dynamic forms with AI-powered field suggestions and validation. Build forms 5x faster." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-form-builder" />
        <meta property="og:image" content="https://ziontechgroup.com/og-form-builder.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-form-builder" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="text-8xl mb-6">📝</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Zion AI Form Builder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create intelligent, dynamic forms with AI-powered field suggestions and validation. 
              Build forms 5x faster with our no-code form builder platform.
            </p>
            
            {/* Pricing Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-8">
              <span className="text-cyan-400 font-semibold">Starting at $19/month</span>
              <span className="ml-2 text-gray-400">• Market Price: $30-150/month</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact?service=ai-form-builder" className="btn-futuristic">
                Start Free Trial
              </a>
              <a href="#demo" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Powerful Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Drag-and-Drop Builder</h3>
                  <p className="text-gray-300">
                    Intuitive drag-and-drop interface to create complex forms without any coding knowledge.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI Field Suggestions</h3>
                  <p className="text-gray-300">
                    AI-powered suggestions for form fields based on your form's purpose and industry.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Smart Validation</h3>
                  <p className="text-gray-300">
                    Intelligent validation rules that adapt to user input and provide real-time feedback.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🔀</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Conditional Logic</h3>
                  <p className="text-gray-300">
                    Create dynamic forms that show/hide fields based on user responses and conditions.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
                  <p className="text-gray-300">
                    Detailed analytics on form performance, completion rates, and user behavior.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🔗</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Multi-Step Forms</h3>
                  <p className="text-gray-300">
                    Create engaging multi-step forms with progress indicators and smooth transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Why Choose Our AI Form Builder?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Build Forms 5x Faster</h3>
                        <p className="text-gray-300">AI-powered suggestions and templates help you create professional forms in minutes.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📉</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Reduce Form Abandonment by 30%</h3>
                        <p className="text-gray-300">Smart validation and user-friendly design keep users engaged throughout the form.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Improve Data Quality</h3>
                        <p className="text-gray-300">Advanced validation rules ensure you collect accurate and complete information.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">😊</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Enhance User Experience</h3>
                        <p className="text-gray-300">Responsive design and intuitive interface provide a smooth form-filling experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="card-futuristic p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📝</div>
                      <h3 className="text-2xl font-bold text-white mb-4">Live Demo</h3>
                      <p className="text-gray-300 mb-6">Try our AI form builder with a free 14-day trial. No credit card required.</p>
                      <a href="/contact?service=ai-form-builder" className="btn-futuristic">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Perfect For Every Use Case
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lead Generation</h3>
                  <p className="text-gray-300 text-sm">Capture and qualify leads with intelligent forms.</p>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Surveys & Feedback</h3>
                  <p className="text-gray-300 text-sm">Collect customer feedback and conduct surveys.</p>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Job Applications</h3>
                  <p className="text-gray-300 text-sm">Streamline recruitment with smart application forms.</p>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold text-white mb-2">E-commerce</h3>
                  <p className="text-gray-300 text-sm">Create checkout and contact forms for online stores.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$19</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Up to 5 forms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      1,000 submissions/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Basic templates
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Email support
                    </li>
                  </ul>
                  <a href="/contact?service=ai-form-builder&plan=basic" className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Get Started
                  </a>
                </div>
                <div className="card-futuristic p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$49</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Up to 25 forms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      10,000 submissions/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Advanced templates
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Analytics dashboard
                    </li>
                  </ul>
                  <a href="/contact?service=ai-form-builder&plan=pro" className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </a>
                </div>
                <div className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$129</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Unlimited forms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Unlimited submissions
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Custom templates
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      24/7 phone support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      White-label solution
                    </li>
                  </ul>
                  <a href="/contact?service=ai-form-builder&plan=enterprise" className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Ready to Build Smart Forms?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using our AI form builder to collect better data and improve user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/contact?service=ai-form-builder" className="btn-futuristic">
                    Start Free Trial
                  </a>
                  <a href="tel:+13024640950" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                    Call: +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                  <p>🏢 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIFormBuilderPage;