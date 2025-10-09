import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: "Real-Time Data Processing",
      description: "Process and analyze data in real-time for instant insights and decision-making.",
      icon: "⚡"
    },
    {
      title: "Predictive Analytics",
      description: "Use machine learning to predict future trends and outcomes with high accuracy.",
      icon: "🔮"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with customizable dashboards.",
      icon: "📊"
    },
    {
      title: "Natural Language Queries",
      description: "Ask questions in plain English and get instant answers from your data.",
      icon: "💬"
    },
    {
      title: "Anomaly Detection",
      description: "Automatically identify unusual patterns and potential issues in your data.",
      icon: "🚨"
    },
    {
      title: "Data Visualization",
      description: "Create stunning visualizations that make complex data easy to understand.",
      icon: "📈"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize inventory management, predict customer behavior, and increase sales with AI-powered analytics.",
      benefits: ["30% increase in sales", "25% reduction in inventory costs", "40% improvement in customer satisfaction"]
    },
    {
      industry: "Healthcare",
      description: "Analyze patient data to improve treatment outcomes and reduce costs.",
      benefits: ["20% reduction in readmissions", "15% cost savings", "Improved patient outcomes"]
    },
    {
      industry: "Finance",
      description: "Detect fraud, assess risk, and optimize investment strategies with advanced analytics.",
      benefits: ["95% fraud detection accuracy", "30% risk reduction", "25% ROI improvement"]
    },
    {
      industry: "Manufacturing",
      description: "Optimize production processes, predict maintenance needs, and improve quality control.",
      benefits: ["35% reduction in downtime", "20% increase in efficiency", "50% reduction in defects"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Analytics Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make smarter decisions faster with real-time analysis and predictive intelligence.
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="cyber-card hologram-card text-center">
              <div className="text-6xl mb-6">📊</div>
              <h2 className="text-3xl font-bold text-white mb-4">Intelligent Data Analysis</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                Our AI analytics platform processes vast amounts of data to uncover hidden patterns, 
                predict future trends, and provide actionable insights that drive business growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Real-time Analysis</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Applications</h2>
            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-3">{useCase.industry}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Benefits:</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <div className="cyber-card hologram-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Technology Stack</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                  <p className="text-gray-300 text-sm">Advanced ML algorithms for pattern recognition and prediction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Computing</h3>
                  <p className="text-gray-300 text-sm">Scalable cloud infrastructure for processing large datasets</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Mining</h3>
                  <p className="text-gray-300 text-sm">Extract valuable insights from complex data structures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visualization</h3>
                  <p className="text-gray-300 text-sm">Interactive dashboards and real-time data visualization</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="cyber-card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$999/month</div>
                  <p className="text-gray-300">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Up to 1M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Basic analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Standard reports
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>

              <div className="cyber-card hologram-card border-2 border-cyan-500">
                <div className="text-center mb-6">
                  <div className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$2,499/month</div>
                  <p className="text-gray-300">Ideal for growing companies</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Up to 10M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Custom reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    API access
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>

              <div className="cyber-card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">Custom</div>
                  <p className="text-gray-300">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Unlimited data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    Custom analytics platform
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    On-premise deployment
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with AI analytics today and transform your data into competitive advantage. 
              Schedule a free consultation to see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?subject=AI Analytics Inquiry"
                className="cyber-button"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;