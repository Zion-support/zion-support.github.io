
import { motion } from 'framer-motion';
import {;
  Shield, Lock, Eye, AlertTriangle, Cpu, Globe, Cloud,;
  CheckCircle, ArrowRight, Star, Clock, Target,;
  Zap, Users, BarChart3, Settings, Database;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};

const serviceHighlights = [;
  {;
    title: 'Zero Trust Security',;
    description:;
      'Never trust, always verify - Advanced zero trust implementation',;
    icon: Shield,;
    color: 'from-red-500 to-pink-600',;
    features: [;
      'Continuous verification',;
      'Micro-segmentation',;
      'Adaptive controls',;
      'Real-time monitoring',;
    ],;
  },  {;
    title: 'AI Threat Intelligence',;
    description: 'Predict and prevent cyber threats with AI intelligence',;
    icon: Eye,;
    color: 'from-indigo-500 to-purple-600',;
    features: [;
      'Real-time detection',;
      'Predictive analytics',;
      'Automated response',;
      'Global intelligence',;
    ],;
  },;
  {;
    title: 'Cloud Security Posture',;
    description:;
      'Secure your cloud infrastructure with comprehensive posture management',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600',;
    features: [;
      'Multi-cloud monitoring',;
      'Compliance automation',;
      'Risk management',;
      'Security analytics',;
    ],;
  },  {;
    title: 'DevSecOps Security',;
    description: 'Integrate security into your DevOps pipeline seamlessly',;
    icon: Cpu,;
    color: 'from-green-500 to-emerald-600',;
    features: [;
      'Automated testing',;
      'Vulnerability scanning',;
      'Compliance automation',;
      'Security metrics',;
    ],;
  },  {;
    title: 'IoT Security Platform',;
    description: 'Secure your IoT ecosystem with comprehensive protection',;
    icon: Globe,;
    color: 'from-purple-500 to-violet-600',;
    features: [;
      'Device authentication',;
      'Network monitoring',;
      'Threat detection',;
      'Automated response',;
    ],;
  },];

const benefits = [;
  {;
    title: '99 && 99.99% Threat Detection',;
    description:;
      'Advanced AI algorithms detect threats before they become incidents',;
    icon: Shield,;
    color: 'text-red-400',;
  },;
  {;
    title: 'Zero False Positives',;
    description:;
      'AI-powered analysis eliminates false alarms and alert fatigue',;
    icon: CheckCircle,;
    color: 'text-green-400',;
  },  {;
    title: '24/7 Security Monitoring',;
    description: 'Round-the-clock protection with automated incident response',;
    icon: Clock,;
    color: 'text-blue-400',;
  },  {;
    title: 'Compliance Automation',;
    description: 'Automated compliance reporting and audit preparation',;
    icon: BarChart3,;
    color: 'text-purple-400';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],

export default function CybersecurityServices() {
  return (
    <Layout>
      <Head>

          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Cybersecurity Services</span>
            </div>

                Next-Generation
              </span>
              <br />
              <span className="text-white">Cybersecurity</span>
            </h1>

            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='#services' className='group'>
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with cutting-edge cybersecurity solutions. From zero trust security to AI threat intelligence,
              we provide comprehensive protection that adapts to evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">

                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

                  <span>Get Protected</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </section>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Comprehensive security solutions that protect your digital assets
              and ensure business continuity
            </p>
          </motion.div>

              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Security</span> Portfolio
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover our comprehensive range of cybersecurity services
              designed for modern enterprises
            </p>
          </motion.div>

              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>

                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>

                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    </Link>
                  </div>
                </div>
              </motion.div>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Our Security</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Advanced protection that keeps your business safe and compliant
            </p>
          </motion.div>

              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>

          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Protect your business today with our advanced cybersecurity solutions 
              and stay one step ahead of evolving threats.
            </p>

                  <span>Start Your Security Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">450%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  )
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Secure</span> Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - red - 900 / 20 via - pink - 900 / 20 to - purple - 900 / 20'>;
        <div className='container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max - w-4xl mx - auto';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - red - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Secure;
              </span>{' '}
              Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;

              Don't wait for a breach to happen. Protect your business today;
              with our advanced cybersecurity solutions and stay one step ahead;
              of evolving threats.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <Link href='/contact' className='group'>;
                <button className='bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>;
                  <span>Start Your Security Journey</span>;
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
                </button>;
              </Link>;

  )
}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Link href='/contact' className='group'>;
                <button className='bg - gradient - to - r from - red - 500 to - pink - 600 hover:from - red - 600 hover:to - pink - 700 text - white px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center space - x-2'>;
                  <span > Start Your Security Journey</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
              <Link;
                href='/comprehensive - services - showcase - 2025';
                className='group';
              >;
                <button className='border - 2 border - red - 500 / 50 hover:border - red - 400 text - red - 400 hover:text - red - 300 px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 hover:bg - red - 500 / 10 flex items - center space - x-2'>;
                  <span > View All Services</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
            </div>;
            <div className='mt - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center'>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>24 / 7</div>;
                <div className='text - gray - 300'>Security Monitoring</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>;
                  99.99%;
                </div>;
                <div className='text - gray - 300'>Threat Detection</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - red - 400 mb - 2'>450%</div>;
                <div className='text - gray - 300'>ROI Improvement</div>              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

