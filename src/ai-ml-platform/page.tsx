'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMLPlatformPage: React.FC = () => {
        return (
    <>
      <Helmet>
        <title>AI Machine Learning Platform - Complete ML Solution | Zion Tech Group</title>
        <meta name="description" content="Complete machine learning platform with model development, training, and deployment. Achieve 95% model accuracy and 70% faster development." />
        <meta name="keywords" content="machine learning platform, ML platform, AI development, model training, data science" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-ml-platform" />
      </Helmet>
      
      <div>
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Machine Learning Platform</h1>
              <p className="text-xl text-cyan-400 mb-8">Complete ML platform for model development, training, and deployment</p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Build, train, and deploy machine learning models with our comprehensive platform. 
                Achieve 95% model accuracy, 70% faster development, and enterprise-grade security.
              </p>
              
              <div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Get Started Today</a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />+1 302 464 0950</a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div>
              {stats.map((stat, index) => (
                <div>
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Comprehensive ML Features</h2>
            
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    <div>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Choose Your Plan</h2>
            
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div>Most Popular</div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >Get Started</a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Build Your ML Models?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of data scientists already using our ML platform to build and deploy cutting-edge models.
              </p>
              <div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Start Free Trial</a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />Call (302) 464-0950</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);
}
export default AIMLPlatformPage