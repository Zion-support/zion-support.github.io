import React from 'react''
import { Helmet, Right, Wifi, Circle, Zap, Globe, Smartphone, CheckCircle, Shield } from 'lucide-react;

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,'
      title: 'Advanced Features','
      description: 'Cutting-edge technology for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,'
      title: 'Secure & Reliable','
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: Smartphone,'
      title: 'Mobile Optimization','
      description: 'Optimized 5G solutions for mobile devices and applications','
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']
    },
    {
      icon: Wifi,'
      title: 'Network Infrastructure','
      description: 'Robust 5G network infrastructure for reliable connectivity','
      benefits: ['High-speed connectivity', 'Low latency', 'Massive device support', 'Edge computing']
    }
  ];

  const solutions = [
    {
'
      description: 'Complete 5G network setup and optimization','
      price: 'Starting at $50,000','
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']

    },'
    {''
      title: '5G Mobile Applications'''
      description: 'Custom mobile apps optimized for 5G networks'''
      price: 'Starting at $25,000'''
      features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']}
    },'
    {''
      title: '5G IoT Solutions'''
      description: 'IoT device connectivity and management platform'''
      price: 'Starting at $35,000'''
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']
    }
  ];

  return (
    <></>
      <EnhancedSEO 
        title="Page - Zion Tech Group"
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs."
        keywords="page, business solutions, technology services, professional services"
      /></EnhancedSEO>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              ></Link>
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              ></Link>
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>'
              Let's discuss how our page services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              ></Link>
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              ></Link>
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <div className="py-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Cutting-edge technology meets enterprise-grade reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" /></feature>
                </div>
              )})}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 bg-slate-800/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive 5G services tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8"></div>
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{solution.price}</div>
                <ul className="space-y-3 mb-8"></ul>
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300"></li>
                      <Right className="w-5 h-5 text-green-400 mr-3" /></Right>
                      {feature}
                    </li>
))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"></button>
                  Get Started
                </button>
              </div>
))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Business with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Contact our experts to discuss your 5G implementation strategy

          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-white p-6 rounded-lg shadow-md"></div>
              <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
              <p>Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md"></div>
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md"></div>
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p>Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};
'
const page = React.lazy(() => import('./page'));
export default page;

'