

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

      icon: Cpu,
      title: "Edge Orchestration",
      description: "Intelligent distribution and management of computing workloads across edge nodes for optimal window.window.window.performance.",
      color: "from-blue-500 to-cyan-500"
    },

    {
      icon: Network,
      title: "IoT Management",
      description: "Comprehensive management of IoT devices with real-time monitoring and automated control systems.",
      color: "from-purple-500 to-pink-500"

    },

    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-low latency data processing at the network edge for mission-critical applications.",
      color: "from-green-500 to-emerald-500"

    },

    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols designed specifically for distributed edge computing environments.",
      color: "from-red-500 to-orange-500"

    },

    {
      icon: Database,
      title: "Data Synchronization",
      description: "Seamless data synchronization between edge nodes and central systems with conflict resolution.",
      color: "from-indigo-500 to-purple-500"

export default function EdgeComputingPage() {;
  const features = [;
    {;
      icon: Cpu,;
      title: 'Edge Orchestration',;
      description:;
        'Intelligent distribution and management of computing workloads across edge nodes for optimal performance.',;
      color: 'from-blue-500 to-cyan-500',;
    },;
  ];

      title: "Global Distribution",
      description: "Worldwide edge network deployment with intelligent traffic routing and load balancing.",
      color: "from-yellow-500 to-orange-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const benefits = [
    "Reduce latency by 80-90% with edge processing",
    "Cut bandwidth costs by 60% through local data processing",
    "Improve reliability with distributed computing architecture",
    "Scale seamlessly across global edge networks",
    "Enable real-time AI and machine learning at the edge",
    "Reduce central server load and improve overall performance"
  ],
  const useCases = [
    {
      industry: "Manufacturing",
      description: "Real-time quality control, predictive maintenance, and production optimization",
      results: "30% reduction in downtime, 25% improvement in product quality"
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and telemedicine support",
      results: "40% faster response times, improved patient outcomes"
    },
    {
      industry: "Transportation",
      description: "Autonomous vehicle support, traffic management, and fleet optimization",
      results: "50% reduction in accidents, 35% improvement in efficiency"
    },
    {
      industry: "Retail",
      description: "Inventory management, customer analytics, and supply chain optimization",
      results: "45% reduction in stockouts, 30% improvement in customer satisfaction"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
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
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
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
</a>
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



}

  )
}

                    </span>;
                  </div>;
                  <p className='text - slate - 600'>{plan.description}</p>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map (feature => (
                    <li key={feature} className='flex items - center space - x-3'>;
                      <CheckCircle className='w - 5 h - 5 text - green - 500 flex - shrink - 0' />;
                      <span className='text - slate - 700'>{feature}</span>                    </li>))}
                </ul>;
                <a;
                  href='/contact';
                  className='block w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 text - white text - center py - 3 rounded - xl font - medium transition - all duration - 200 transform hover:scale - 105'                >;
                  Get Started;
                </a>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA */}
      <section className='py - 20 bg - gradient - to - r from - blue - 600 to - cyan - 600'>;
        <div className='max - w-4xl mx - auto px - 6 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Deploy Edge Computing?;
            </h2>;
            <p className='text - xl text - blue - 100 mb - 8'>;
              Join the edge computing revolution and transform your business;
              with real - time processing capabilities.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='/contact';
                className='bg - white text - blue - 600 hover:bg - blue - 50 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200 transform hover:scale - 105'              >;
                Start Free Trial;
              </a>;
              <a;
                href='/contact';
                className='border border - white / 20 text - white hover:bg - white / 10 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200'              >;
                Schedule Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </>);
;



