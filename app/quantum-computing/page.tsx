'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumComputingPage: React.FC = () => {
  return (

  const services = [{
      title: 'Quantum Algorithm Development', description: 'Custom quantum algorithms for complex optimization problems', features: ['Optimization Problems', 'Cryptography', 'Machine Learning'],
      price: 'Custom Pricing',
      icon: '⚛️'
    
  );
},
    {
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research and development',
      features: ['Molecular Simulation', 'Material Science', 'Drug Discovery'],
      price: 'Starting at $5,000/month',
      icon: '🔬'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      features: ['Quantum Key Distribution', 'Secure Communication', 'Data Protection'],
      price: 'Starting at $3,000/month',
      icon: '🔐'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Next-generation AI powered by quantum computing',
      features: ['Quantum Neural Networks', 'Pattern Recognition', 'Data Analysis'],
      price: 'Starting at $4,000/month',
      icon: '🧠'
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance for quantum computing adoption',
      features: ['Technology Assessment', 'Implementation Strategy', 'Training'],
      price: 'Custom Pricing',
      icon: '💡'
    },
    {
      title: 'Quantum Cloud Access',
      description: 'Access to quantum computing resources via cloud',
      features: ['IBM Quantum', 'Google Quantum', 'Rigetti Computing'],
      price: 'Starting at $1,000/month',
      icon: '☁️'
    const features = [{
      icon: Brain, title: 'AI-Powered Solutions', description: 'Advanced AI technology to transform your business operations and improve efficiency', }, {icon: Zap, title: 'High Performance', description: 'Lightning-fast processing and real-time analytics for optimal results', }, {icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with encryption and compliance standards', }, {icon: Globe, title: 'Global Reach', description: 'Worldwide deployment and support for international businesses', }}]
    }
  ];];];
const benefits = []
  const benefits = ['Advanced AI technology integration', 'Real-time processing and analytics', 'Enterprise-grade security and compliance', 'Scalable and flexible solutions', const applications = [
    { title: 'Financial Modeling', description: 'Portfolio optimization and risk analysis' }, { title: 'Drug Discovery', description: 'Molecular simulation for pharmaceutical research' }, { title: 'Cryptography', description: 'Quantum-resistant encryption systems' }, { title: 'Machine Learning', description: 'Quantum-enhanced AI algorithms' }, { title: 'Supply Chain', description: 'Logistics optimization and routing' }, { title: 'Climate Modeling', description: 'Complex climate system simulation' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            Quantum Computing Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing to solve complex problems that are 
            impossible for classical computers. Experience the future of computation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Explore Quantum Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Quantum Case Studies
            </Link>
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quantum Applications</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quantum Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-purple-400 hover: text-purple-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Quantum Section */}
        <section className="mb-16">
          <div className="grid md: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Quantum Computing?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Exponential Speedup</h3>
                    <p className="text-gray-300">Solve problems exponentially faster than classical computers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Quantum Advantage</h3>
                    <p className="text-gray-300">Tackle problems that are intractable for classical systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Future-Proof</h3>
                    <p className="text-gray-300">Stay ahead with next-generation computing technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Ready for Quantum?</h3>
              <p className="text-gray-300 mb-6">
                Discover how quantum computing can revolutionize your industry and 
                solve your most complex challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Free quantum readiness assessment
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Custom quantum strategy
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Expert quantum consulting
                </div>
              </div>
              <Link to="/contact" className="cyber-button mt-6 inline-block"></Link>
                Get Quantum Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Enter the Quantum Era
          </h2>
          <p className="text-gray-300 mb-6">
            Be among the first to leverage quantum computing for competitive advantage.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Quantum Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet /></Helmet>
        <title>Page | Zion Tech Group</title>
    'Proven track record of success'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet ></Helmet>
        </Helmet><title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Page?,</h2>
            </h2>
            <p>Our page solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet ></Helmet>
        <title>Page | Zion Tech Group
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
                <p className="text-gray-300">{feature.description}
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our page solutions for your business.,</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                <CheckCircle /></CheckCircle>
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
              </div>
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" /></CheckCircle>
                <p className="text-gray-300 text-lg">{benefit}</p>
              ))
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your page needs and get a customized solution.</p>
              Ready to Get Started?
            </h2>
            <p></p>
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
                <Phone ></Phone>
                Call Now;
              </button>
              <button>
                <Mail ></Mail>
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
  ),
}
export default PagePage
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" /></Phone>
                Call Now
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" /></Mail>
                Email Us
  )
}
export default PagePage</div></div></div></div></div></div></div></div></div></div></div></div></div></button></button></p></p></p></p></p></h2></h2></h2></h3></section></section></section>
