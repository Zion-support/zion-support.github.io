


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import Layout from '../components/layout/Layout';

import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};



const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const serviceHighlights = [
  {


    title: 'AI Code Generation',
    description: 'Generate production-ready code across multiple languages with AI intelligence',
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Multi-language supportSecurity scanningPerformance optimizationTeam collaboration']
  };
  {
    title: 'DevOps Automation',
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    features: ['CI/CD optimizationSelf-healing infrastructureCost optimizationMulti-cloud support']
  };
  {
    title: 'Customer Support AI',
    description: 'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    features: ['Intelligent chatbotsMulti-language supportPredictive resolution24/7 availability']
  };
  {
    title: 'Marketing Automation',
    description: 'AI-powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-600',
    features: ['Campaign optimizationCustomer personalizationROI trackingMulti-channel automation']
  };
  {
    title: 'Sales Intelligence',
    description: 'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    features: ['Lead scoringSales forecastingCustomer insightsPerformance optimization']
  }
];

const benefits = [



          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">AI Automation Services</span>
            </div>





                AI Automation
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>


            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. From code generation to customer support,
              automate everything with intelligent AI that learns and adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">







                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>



              <Link href="/contact" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">



                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>


              </Link>
            </div>
          </motion.div>
        </div>

        />;
        <meta name='contact:website' content='https://ziontechgroup && ziontechgroup.com' />;
      </Head>;
      <main className="max-w-7xl mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold mb-4">AI Automation Services</h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Transform your business with our advanced AI automation solutions designed to streamline operations and boost productivity.;
          </p>;
        </div>;

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>;
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>;

        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'>;
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8'>;
              <Zap className='w-5 h-5 text-emerald-400' />;
              <span className='text-emerald-400 font-medium'>;
                AI Automation Services;
              </span>;
            </div>;


            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>;
              <span className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>;
                AI Automation;
              </span>;
              <br />;
              <span className='text-white'>Revolution</span>;
            </h1>;

            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>;
              Transform your business operations with cutting-edge AI;



              automation. From code generation to customer support, automate;
              everything with intelligent AI that learns and adapts to your;
              needs.;
            </p>;



        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>;
          <div className='w-4 h-4 bg-emerald-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute top-40 right-20 opacity-30 animate-float'
          style={{ animationDelay: '1s' }}>;
          <div className='w-6 h-6 bg-teal-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute bottom-40 left-20 opacity-25 animate-float'



        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </section>



          style={{ animationDelay: '2s' }}>;
          <div className='w-3 h-3 bg-cyan-400 rounded-full'></div>        </div>;
      </section>;



      {/* Service Highlights */}


            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}




          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions that transform every aspect of your business operations
            </p>
          </motion.div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (


              <motion.div

              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                Services;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Comprehensive AI automation solutions that transform every aspect;
              of your business operations;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {serviceHighlights && serviceHighlights.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}


                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>




                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">






                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>




                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </ul>;
              </motion && motion.div>;
            ))}


      {/* Detailed Services */}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}




          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span> Portfolio
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI automation services designed for modern enterprises
            </p>
          </motion.div>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedAIAutomationServices2025.map((service, index) => (


              <motion.div


              Portfolio;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover our comprehensive range of AI automation services;
              designed for modern enterprises;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedAIAutomationServices2025 && advancedAIAutomationServices2025.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}




                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-emerald-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">

                        Popular
                      </span>


                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>



                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>


                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />


                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.customers}+</div>
                      <div className="text-gray-400 text-sm">Customers</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.trialDays}</div>
                      <div className="text-gray-400 text-sm">Trial Days</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">


              <motion.div

              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                AI Automation;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Transform your business with intelligent automation that delivers;
              measurable results;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits && benefits.map((benefit, index) => (;
              <motion&& motion.div
                key={benefit && benefit.title}



                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>


                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <benefit && benefit.icon className={`w-full h-full ${benefit && benefit.color}`} />;
                </div>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  {benefit && benefit.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {benefit && benefit.description}
                </p>              </motion && motion.div>;
            ))}

                  <span>Start Your Automation Journey</span>
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>

            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">

              Join thousands of companies already transforming their operations with AI automation. 
              Get started today and see the difference intelligent automation can make.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">

                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>



            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">




              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div>

                <div className="text-3xl font-bold text-emerald-400 mb-2">350%</div>
                <div className="text-gray-300">Average ROI</div>

              </div>


            </div>
          </motion.div>
        </div>
      </section>



              Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - emerald - 900 / 20 via - teal - 900 / 20 to - cyan - 900 / 20'>;
        <div className='container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max - w-4xl mx - auto';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - emerald - 400 to - teal - 400 bg - clip - text text - transparent'>;
                Automate;
              </span>{' '}
              Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;

              Join thousands of companies already transforming their operations;
              with AI automation. Get started today and see the difference;
              intelligent automation can make.;
            </p>;




            </div>;
          </motion.div>;
        </div>;
      </section>;



