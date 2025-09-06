import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Code,
  CheckCircle,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Lock,
  Eye,
  BarChart3,
  Globe,
  Award,;

} from 'lucide-react';

const AICodeReviewSecurityScanner = () => {
  return (
    <>
      <SEO
        title='AI-Powered Code Review & Security Scanner | Zion Tech Group'
        description='Advanced AI-powered platform that automatically reviews code, detects security vulnerabilities, suggests improvements, and ensures code quality across multiple programming languages.'
        keywords={[
          'AI code review',
          'security scanner',
          'vulnerability detection',
          'code quality',
          'automated code analysis',
          'security testing',
          'DevOps security',
        ]}
        ogImage='https://ziontechgroup.com/og-ai-code-review.jpg'
        canonical='https://ziontechgroup.com/ai-code-review-security-scanner'
      />

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20' />
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

                >
                  Schedule Demo
                </motion.button>
              </div>

                  SOC2 & ISO27001 compliant

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-white/5'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

                </motion.div>

              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (

                        Most Popular
                      </span>
                    </div>
                  )}

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-white/5'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

                    </div>
                  </motion.div>
                ))}
              </div>

                    </div>

                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

                </motion.div>

              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div

            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>

                Ready to Secure Your Code?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Join thousands of development teams who trust our AI-powered
                platform to protect their applications and improve code quality.
                Start your free trial today.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center'
                >
                  Start Free Trial
                  <ArrowRight className='ml-2 w-5 h-5' />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300'                >
                  Contact Sales
                </motion.button>
              </div>

                >
                  Contact Sales
                </motion.button>
              </div>

              </div>

            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='py-16 bg-white/5'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div

            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <div className='grid md:grid-cols-3 gap-8 text-gray-300'>

                <div>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4'>
                    <Users className='w-6 h-6' />
                  </div>
                  <h4 className='text-white font-semibold mb-2'>Contact Us</h4>
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                </div>

                <div>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4'>
                    <Globe className='w-6 h-6' />
                  </div>
                  <h4 className='text-white font-semibold mb-2'>
                    Visit Our Website
                  </h4>
                  <p>https://ziontechgroup.com</p>
                </div>

                <div>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4'>
                    <Award className='w-6 h-6' />
                  </div>
                  <h4 className='text-white font-semibold mb-2'>Address</h4>                  <p>364 E Main St STE 1008</p>

                  <p>364 E Main St STE 1008</p>

                  <p>Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeReviewSecurityScanner;