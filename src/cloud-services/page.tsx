import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

constCloudServicesPage: React.FC= () =>{constservices= [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to leading cloud platforms',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Zero Downtime']
   },
    {icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
   },
    {icon: Zap,
      title: 'Auto Scaling',
      description: 'Dynamic resource allocation based on demand',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
   },
    {icon: BarChart,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring for cloud resources',
      features: ['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Predictive Insights']
    }
  ]
  const benefits = [
    '99.9% Uptime Guarantee',
    '24/7 Expert Support',
    'Cost Optimization',
    'Scalable Infrastructure',
    'Enhanced Security',
    'Global CDN'
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation  />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Cloud Services
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Transform your business with our comprehensive cloud solutions.
            From migration to optimization, we provide end-to-end cloud services.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all&quot;
            >
              Get Started Today
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all&quot;
            >
              Learn More
            </a>
          </div>
        </section>
        {/* Services Grid */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Our Cloud Services</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {services.map((service, index) => (
              <div key={index} className=&quot;bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20&quot;></div>
                <service.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot;  />
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot;  />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Why Choose Our Cloud Services?</h2>
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;></div>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-white&quot;  />
                </div>
                <p className=&quot;text-white font-medium&quot;>{benefit}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
            Ready to Transform Your Infrastructure?
          </h2>
          <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all&quot;
            >
              Call (302) 464-0950
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all&quot;
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer  />
    </div>
  )
}
export default CloudServicesPage
