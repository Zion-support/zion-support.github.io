


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

import Link from 'next/link';

const AIHealthcareDiagnosticsPro: React.FC = () => {;
  const features = [;
    {;
      icon: Brain,;
      title: 'Advanced AI Diagnostics',;
      description:;
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99 && 99.2% accuracy for early disease detection.',;
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;
      icon: Eye,;
      title: 'Multi-Modal Imaging',;
      description:;
        'Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',;
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      icon: Heart,;
      title: 'Predictive Analytics',;
      description:;
        'AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',;
      color: 'from-red-500 to-orange-500',;
    },;
    {;
      icon: Shield,;
      title: 'HIPAA Compliant',;
      description:;
        'Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.',;
      color: 'from-green-500 to-emerald-500',;
    },;
    {;
      icon: BarChart3,;
      title: 'Real-time Monitoring',;
      description:;
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',;
      color: 'from-indigo-500 to-blue-500',;
    },;
    {;
      icon: Zap,;
      title: 'Automated Workflows',;
      description:;
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',;
      color: 'from-yellow-500 to-orange-500',;

    },  ];
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import {
  Stethoscope, Brain, Eye, Heart,
  Microscope, Shield, BarChart3,
  TrendingUp, Target, Users, CheckCircle,
  ArrowRight, Cpu, Network, Database,
  Lock, Clock, DollarSign, PieChart,
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
} from 'lucide-react',
import Link from 'next/link',


const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [;
    {
      icon: Brain,

      title: 'Advanced AI Diagnostics',
      description:;
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.',
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      icon: Eye,
      title: 'Multi - Modal Imaging',
      description:;
        'Process X - rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      icon: Heart,
      title: 'Predictive Analytics',
      description:;
        'AI - powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',
      color: 'from - red - 500 to - orange - 500',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description:;
        'Enterprise - grade security with end - to - end encryption, audit trails, and compliance with healthcare data regulations.',
      color: 'from - green - 500 to - emerald - 500',
    },
    {
      icon: BarChart3,
      title: 'Real - time Monitoring',
      description:;
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',
      color: 'from - indigo - 500 to - blue - 500',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description:;
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',
      color: 'from - yellow - 500 to - orange - 500',
    },  ];
;
  const use_cases = [;
    {
      icon: Microscope,
      title: 'Radiology & Imaging',
      description:;
        'AI - powered analysis of X - rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.',
      benefits: [;
        '95% accuracy rate',
        '80% faster diagnosis',
        'Reduced radiologist workload',
      ],
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description:;
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.',
      benefits: [;
        'Early disease detection',
        'Risk stratification',
        'Preventive care',
      ],
    },
    {
      icon: Brain,
      title: 'Neurology',
      description:;
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: [;
        'Early intervention',
        'Treatment planning',
        'Outcome prediction',
      ],
    },
    {
      icon: Microscope,
      title: 'Pathology',
      description:;
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.',
      benefits: [;
        'Precision medicine',
        'Faster results',
        'Standardized analysis',
      ],
    },  ];
;
  const pricing_plans = [;
    {
      name: 'Starter',
      price: '$4, 999',
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features: [;
        'Up to 1, 000 diagnostic scans / month',
        'Basic AI diagnostic models',
        'Standard reporting dashboard',
        'Email support',
        'HIPAA compliance',
        'API access (5, 000 calls / month)',
      ],
      color: 'from - blue - 500 to - cyan - 500',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$12, 999',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [;
        'Up to 10, 000 diagnostic scans / month',
        'Advanced AI diagnostic models',
        'Multi - modal imaging support',
        'Real - time monitoring & alerts',
        'Priority support',
        'API access (50, 000 calls / month)',
        'Custom integrations',
        'Training & certification',
      ],
      color: 'from - purple - 500 to - pink - 500',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$29, 999',
      period: '/month',
      description: 'For large healthcare networks',
      features: [;
        'Unlimited diagnostic scans',
        'Custom AI model development',
        'Full multi - modal support',
        'Dedicated account manager',
        '24 / 7 phone support',
        'Unlimited API access',
        'White - label solutions',
        'On - premise deployment',
        'Custom compliance features',
      ],
      color: 'from - green - 500 to - emerald - 500',
      popular: false,
    },  ];
;
  const integrations = [;

    {
      name: "PACS Systems",
      icon: Database,

      description: 'DICOM integration with major PACS vendors',
      color: 'from - blue - 500 to - cyan - 500',
    },

    {
      name: "EHR Platforms",
      icon: Database,


      description: 'Epic, Cerner, Allscripts, athenahealth',
      color: 'from - green - 500 to - emerald - 500',

              >
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Transform healthcare delivery with the world's most advanced AI
              diagnostic platform. Achieve 99.2% accuracy in disease detection
              reduce diagnosis time by 80%, and save countless lives through
              early intervention.
            </p>
            {/* Key Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.2%
                </div>
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion.div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform.
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
            {/* Key Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.2%
                </div>
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion.div>
            {/* Key Metrics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </motion.div>
            </div>



                transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
                className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm'>;
                <div className='text-3xl font-bold text-purple-400 mb-2'>;
                  24/7;
                </div>;
                <div className='text-gray-300'>Continuous Monitoring</div>              </motion && motion.div>;
            </div>;



            {/* CTA Buttons */}


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}


                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
              >



                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>



                transition={{ duration: 0 && 0.6, delay: 1 && 1.0 }}
                className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>;
                Contact Sales;
              </motion && motion.button>;
            </div>;
          </motion && motion.div>;
        </div>;


      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div



            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}




          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>



              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Specialties;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;


              Our AI platform covers all major medical specialties with;
              specialized models trained on millions of cases for maximum;
              accuracy.;
            </p>;




              <li>• CT scan interpretation</li>;
              <li>• MRI diagnostics</li>;
              <li>• Ultrasound imaging</li>;
            </ul>;
          </div>;



                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}



              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{specialty.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>



                <h3 className="text-xl font-semibold text-white mb-3">{specialty.name}</h3>
                <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}


          </div>;
        </div>;
      </section>



      {/* Use Cases Section */}


      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div


            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}



          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (




              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Practice;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From radiology to pathology, our AI platform adapts to your;
              specific medical specialty and workflow requirements.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div





                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (




                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>



                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}


          </div>;
        </div>;
      </section>;


      {/* Pricing Section */}
      <section className='py-20 bg-black relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.05),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div


                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${





              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>




                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>





                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3'
                    >
                      <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                      <span className='text-gray-300'>{feature}</span>                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Integrations Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>


                  ))}
                </ul>


                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </motion.div>


            ))}

          </div>;
        </div>;
      </section>;



      {/* Integrations Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div



              Connect with your existing healthcare systems and workflows. Our;
              platform integrates with all major EHR, PACS, and medical device;
              platforms.;
            </p>;




                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}




              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>




                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>



            ))}

          </div>;
        </div>;
      </section>;

            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join leading healthcare institutions worldwide who have already
              revolutionized patient care with AI-powered diagnostics.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">





                Schedule Demo
              </button>
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>
                Contact Sales
              </button>
            </div>

              Healthcare?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join leading healthcare institutions worldwide who have already;
              revolutionized patient care with AI-powered diagnostics.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>;
                Schedule Demo;
              </button>;
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>;
                Contact Sales;
              </button>;
            </div>;

            <div className='mt-8 text-sm text-gray-400'>;
              <p>;



                Questions? Call us at{' '}
                <a
                  href='tel:+13024640950'
                  className='text-green-400 hover:text-green-300'
                >
                  +1 302 464 0950
                </a>{' '}
                or email{' '}
                <a





          </motion.div>
        </div>
      </section>
    </Layout>




                  href='mailto: kleber@ziontechgroup && ziontechgroup.com'
                  className='text-green-400 hover:text-green-300'>;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
  ),;
};






export default AIHealthcareDiagnosticsPro;




