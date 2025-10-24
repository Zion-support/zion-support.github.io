'use client'
import { BarChart } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, BarChart } from 'lucide-react'
import { Bot, Cpu } from 'lucide-react'

const AutonomousSystemsPage: React.FC = () => {constautonomousServices= [
    {
      id: 'self-healing-infrastructure',
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered systems that automatically detect, diagnose, and resolve infrastructure issues without human intervention.',
      features: ['Automated problem detection', 'Self-recovery mechanisms', 'Predictive maintenance', 'Zero-do wntime operations'],
      benefits: ['9 9.9% uptime', 'Reduced manual intervention', 'Lower operational costs', 'Improved reliability'],
      marketPrice: '$2,00 0-5,00 0/month',
      category: 'Infrastructure Automation',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Auto-remediation', 'Monitoring Systems']
   },
    {id: 'process-automation',
      title: 'Intelligent Process Automation',
      description: 'End-to-end automation of complex business processes using AI and machine learning.',
      features: ['Workflow automation', 'Decision-making AI', 'Process optimization', 'Exception handling'],
      benefits: ['8 0% process efficiency', 'Reduced errors', 'Faster execution', 'Cost savings'],
      marketPrice: '$1,50 0-4,00 0/month',
      category: 'Business Process Automation',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'Integration APIs']
   },
    {id: 'autonomous-monitoring',
      title: 'Autonomous Monitoring Systems',
      description: '2 4/7 intelligent monitoring and alerting systems that learn and adapt to your environment.',
      features: ['Real-time monitoring', 'Predictive alerts', 'Adaptive thresholds', 'Automated responses'],
      benefits: ['Proactive issue detection', 'Reduced false positives', 'Improved system health', 'Better resource utilization'],
      marketPrice: '$80 0-2,50 0/month',
      category: 'Monitoring & Alerting',
      technologies: ['AI Analytics', 'Time Series DB', 'Alert Systems', 'Machine Learning']
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-green-50&quot;></div>
      {/* Hero Section */}
      <section className=&quot;relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white&quot;></section>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              Autonomous Systems Services
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto&quot;>
              Transform your operations with intelligent autonomous systems that work 24/7
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors&quot;>
                Explore Autonomous Solutions
              </button>
              <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors&quot;>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Why Choose Autonomous Systems?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Our autonomous systems deliver unprecedented efficiency, reliability, and cost savings
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Bot className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>24/7 Operation</h3>
              <p className=&quot;text-gray-600&quot;>Systems that never sleep, continuously monitoring and optimizing your operations</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Cpu className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Self-Healing</h3>
              <p className=&quot;text-gray-600&quot;>Automatically detect and resolve issues before they impact your business</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <BarChart className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Continuous Learning</h3>
              <p className=&quot;text-gray-600&quot;>AI systems that improve performance over time through machine learning</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className=&quot;py-16 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Our Autonomous Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Comprehensive autonomous systems designed to transform your business operations
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;></div>
            {autonomousServices.map((service) => (
              <div key={service.id} className=&quot;bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow&quot;></div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Key Features:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-2&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Benefits:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <Star className=&quot;w-5 h-5 text-yellow-500 mr-2&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;border-t pt-4&quot;></div>
                  <div className=&quot;flex justify-between items-center&quot;></div>
                    <span className=&quot;text-2xl font-bold text-green-600&quot;>{service.marketPrice}</span>
                    <span className=&quot;text-sm text-gray-500&quot;>{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 bg-green-600 text-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Ready to Automate Your Operations?
          </h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let our autonomous systems transform your business with intelligent automation
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors&quot;>
              Get Started Today
            </button>
            <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors&quot;>
              Learn More
            </button>
          </div>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
        </div>
      </div>
    </div>
  )
}
export default AutonomousSystemsPage;
   }
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-green-50">{/* HeroSection */}
    <sectionclassName="relative py-20bg-gradient-to-rfrom-green-600to-emerald-700text-white"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Autonomous Systems Services</h><spanclassName="text-xlmd:text-2 xl mb-8 text-green-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-green-100max-w-3xlmx-auto">Transform your operations with intelligent autonomous systems that work24/7</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors"></className="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors">Explore Autonomous Solutions</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors">Schedule Demo</butto></di></di></di></sectio>{/* KeyBenefits */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Autonomous Systems?
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Our autonomous systems deliver unprecedented efficiency, reliability, and cost savings</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><BotclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">24/7Operation</h><pclassName="text-gray-600">Systems that never sleep, continuously monitoring and optimizingyouroperations</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><CpuclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Self-Healing</h><pclassName="text-gray-600">Automatically detect and resolve issues before they impactyourbusiness</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><BarChartclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ContinuousLearning</h><pclassName="text-gray-600">AI systems that improve performance over time throughmachinelearning</p></di></di></di></sectio>{/* Services */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Autonomous Solutions</h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Comprehensive autonomous systems designed to transform your business operations</p></di><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{autonomousServices.map((service) => (
           <divkey={service.id}className="bg-white rounded-lg shado w-lg p-8 hover:shado w-xltransition-shadow"><h3className="text-2 xl font-bold text-gray-900mb-4">{service.title}</h><pclassName="text-gray-600mb-6">{service.description}</p><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">KeyFeatures:</h><ulclassName="space-y-2">{service.features.map((featureindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><CheckCircleclassName="w-5 h-5 text-green-500mr-2" />{feature}
                    </l>))}
                </u></di><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">Benefits:</h><ulclassName="space-y-2">{service.benefits.map((benefitindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><StarclassName="w-5 h-5 text-yellow-500mr-2" />{benefit}
                    </l>))}
                </u></di><divclassName="border-tpt-4"><divclassName="flexjustify-betweenitems-center"><spanclassName="text-2 xl font-boldtext-green-600">{service.marketPrice}</spa><spanclassName="text-smtext-gray-500">{service.category}</spa></di></di></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-green-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Automate Your Operations?
        </h><spanclassName="text-xl mb-8 max-w-3xlmx-auto"></spa></className="text-xl mb-8 max-w-3xlmx-auto">Let our autonomous systems transform your business with intelligent automation</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors"></spa></className="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors">Get Started Today</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors"></spa></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors">Learn More</butto></di></di></sectio></di>
  );
};
export default AutonomousSystemsPage;
