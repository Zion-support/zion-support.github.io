'use client';
import React, { memo } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';

const AIInvoiceGeneratorPage: React.FC = memo(() => {
          return (
    <>
      <SEOOptimizer
        title="AI Invoice Generator - Automated Invoice Creation | Zion Tech Group"
        description="Generate professional invoices instantly with AI-powered automation. Save time, reduce errors, and improve cash flow with our intelligent invoice generation platform."
        keywords={['AI invoice generator', 'automated invoicing', 'invoice automation', 'AI billing', 'smart invoicing', 'invoice management', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      
      <div>
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div>
              <div>
                <Receipt className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">AI Invoice Generator</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Generate Professional Invoices with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Intelligence</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Transform your invoicing process with AI-powered automation. Create, send, and track invoices
                effortlessly while gaining valuable insights into your business performance.
              </p>
              
              <div>
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />Start Free Trial</a>
                <a
                  href="#demo"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" />Watch Demo</a>
              </div>
              {/* Key Stats */}
              <div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                  <div className="text-gray-300">Invoices Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Faster Payments</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-slate-800/30">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI invoice generator combines cutting-edge technology with user-friendly design
                  to revolutionize your billing process.
                </p>
              </div>
              <div>
                {features.map((feature, index) => (
                  <div>
                    <div>
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-16">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect for Every Business</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Whether you're a freelancer or a large enterprise, our AI invoice generator
                  adapts to your specific needs and industry requirements.
                </p>
              </div>
              <div>
                {useCases.map((useCase, index) => (
                  <div>
                    <div>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2 text-left">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-16 bg-slate-800/30">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your business needs. All plans include our core AI features
                  with no hidden fees or setup costs.
                </p>
              </div>
              <div>
                {pricingPlans.map((plan, index) => (
                  <div>
                    {plan.popular && (
                      <div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div>
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Businesses Worldwide</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how our AI invoice generator is transforming businesses across industries.
                </p>
              </div>
              <div>
                {testimonials.map((testimonial, index) => (
                  <div>
                    <div>
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                    <div>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI to streamline their invoicing process. 
                Start your free trial today and experience the difference.
              </p>
              <div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />Get Free Consultation</a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>);
});

AIInvoiceGeneratorPage.displayName = 'AIInvoiceGeneratorPage';
export default AIInvoiceGeneratorPage