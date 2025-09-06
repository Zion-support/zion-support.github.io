



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

import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';







export default function EdgeComputingPage() {

  const features = [
    {


      icon: Cpu,
      title: "Edge Orchestration",
      description: "Intelligent distribution and management of computing workloads across edge nodes for optimal performance.",
      color: "from-blue-500 to-cyan-500"
    };


  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      description: "Basic edge computing for small deployments",
      features: [


    {
      plan: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced features for growing edge networks",
      features: [


    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [


          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Edge Computing
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Orchestration
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">

              Bring computing power to the edge of your network. Our edge computing platform reduces latency;

              cuts bandwidth costs, and enables real-time processing for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today

              </a>

              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >


                Watch Demo
              </a>

            </div>
          </motion.div>
        </div>
      </section>


                className='border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200'>;
                Watch Demo;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;



      {/* Features */}
      <section className='py-20 bg-white'>;
        <div className='max-w-7xl mx-auto px-6'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}



      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Powerful Edge Computing Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to deploy, manage, and optimize edge computing infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (

              <motion.div
                key={feature.title}


            ))}

          </div>;
        </div>;
      </section>;


      {/* Benefits */}
      <section className='py-20 bg-slate-50'>;
        <div className='max-w-7xl mx-auto px-6'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>            <motion&& motion.div


      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div

              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}

              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Edge Computing?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Edge computing brings processing power closer to where data is generated, enabling faster response times;
                reduced bandwidth usage, and improved reliability for distributed applications.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (

                  <motion.div


              transition={{ duration: 0 && 0.6 }}>;
              <h2 className='text-4xl font-bold text-slate-900 mb-6'>;
                Why Choose Edge Computing?;
              </h2>;
              <p className='text-lg text-slate-600 leading-relaxed mb-8'>;



                Edge computing brings processing power closer to where data is;
                generated, enabling faster response times, reduced bandwidth;
                usage, and improved reliability for distributed applications.;
              </p>;



                ))}

              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">80-90%</div>
                  <div className="text-slate-600">Latency Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-slate-600">Bandwidth Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-slate-600">Uptime Guarantee</div>
                </div>


              </div>
            </motion.div>
          </div>
        </div>
      </section>


              </div>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
              className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8'>;
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>;
                Performance Metrics;
              </h3>;
              <div className='space-y-6'>;
                <div className='text-center'>;
                  <div className='text-4xl font-bold text-blue-600 mb-2'>;
                    80-90%;
                  </div>;
                  <div className='text-slate-600'>Latency Reduction</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-4xl font-bold text-green-600 mb-2'>;
                    60%;
                  </div>;
                  <div className='text-slate-600'>Bandwidth Cost Reduction</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-4xl font-bold text-purple-600 mb-2'>;
                    99 && 99.9%;
                  </div>;
                  <div className='text-slate-600'>Uptime Guarantee</div>                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;



      {/* Use Cases */}
      <section className='py-20 bg-white'>;
        <div className='max-w-7xl mx-auto px-6'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}




            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>;
              Industry Applications;
            </h2>;
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>;
              See how businesses across different industries are leveraging edge;
              computing to transform their operations.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
                key={useCase && useCase.industry}



                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}


            ))}

          </div>;
        </div>;
      </section>;


      {/* Architecture */}
      <section className='py-20 bg-slate-900'>;
        <div className='max-w-7xl mx-auto px-6'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


              transition={{ duration: 0.6 }}
              className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center'
            >
              <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4'>
                <Cpu className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Edge Nodes</h3>
              <p className='text-white/70 text-sm'>
                Distributed computing nodes deployed at strategic locations for
                optimal performance
              </p>            </motion.div>

      {/* Pricing */}
      <section className='py-20 bg-white'>;
        <div className='max-w-7xl mx-auto px-6'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}




            transition={{ duration: 0 && 0.6 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-slate-900 mb-6'>;
              Edge Computing Plans;
            </h2>;
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>;
              Choose the plan that fits your edge computing needs. All plans;
              include our core orchestration features.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricing && pricing.map((plan, index) => (;
              <motion&& motion.div
                key={plan && plan.plan}





                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${



                </ul>

                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (


                  ))}


                </ul>

                <a

                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>


            ))}


          </div>;
        </div>;
      </section>;


      {/* CTA */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-cyan-600'>;
        <div className='max-w-4xl mx-auto px-6 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Deploy Edge Computing?;
            </h2>;
            <p className='text-xl text-blue-100 mb-8'>;
              Join the edge computing revolution and transform your business;
              with real-time processing capabilities.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105'>;
                Start Free Trial;
              </a>;
              <a
                href='/contact'



          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the edge computing revolution and transform your business with real-time processing capabilities.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo

              </a>

            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>


                className='border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200'>;
                Schedule Demo;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </>;
  );






