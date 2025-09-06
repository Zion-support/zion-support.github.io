import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const features = [
  {
const pricingPlans = [
  {
    name: 'Starter'
    price: 199
    period: 'month'
    description: 'Perfect for individual traders and small investment firms'
    features: [
  },  {
    name: 'Professional'
    price: 499
    period: 'month'
    description: 'Ideal for professional traders and growing investment firms'
    features: [
      'Advanced AI models and algorithms'
      'Automated trading with backtesting'
      'Custom strategy development'
      'Priority support and API access'
      'Advanced risk management tools'
      'Multi-portfolio management'
      'Real-time market alerts'
      'Custom reporting and dashboards'
    ]
    popular: true
    color: 'from-cyan-500 to-purple-600'
  },  {
    name: 'Enterprise'
    price: 1499
    period: 'month'
    description: 'For large investment firms and institutional investors'
    features: [
      'Custom AI model training and development'
      'White-label solution with branding'
      'Dedicated account manager and support'
      'Advanced compliance automation'
      '24/7 monitoring and support'
      'Custom integrations and APIs'
      'Advanced security and audit trails'
      'Multi-user access and permissions'
    ]
    popular: false
    color: 'from-purple-500 to-pink-600'
  },];
const useCases = [
  {
    title: 'Algorithmic Trading Strategy Development'
    description:
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.'
    icon: BarChart
    benefits: [
      'Increased trading efficiency'
      'Reduced emotional bias'
      '24/7 market monitoring'
    ]
  }
  {
    title: 'Portfolio Risk Management & Optimization'
    description:
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.'
    icon: PieChart
    benefits: [
      'Risk-adjusted returns'
      'Portfolio diversification'
      'Real-time risk monitoring'
    ]
  }
  {
    title: 'Market Trend Prediction & Analysis'
    description:
      'Predict market movements and identify trading opportunities with AI-powered analytics.'
    icon: LineChart
    benefits: [
      'Early trend detection'
      'Improved timing'
      'Higher success rates'
    ]
  }
  {
    title: 'Automated Financial Reporting'
    description:
      'Generate comprehensive financial reports and compliance documentation automatically.'
    icon: Activity
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting']
  },];
const integrations = [
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' }
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' }
  { name: 'TradingView', logo: '📊', category: 'Charting' }
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' }
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' }
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' },];
  {
    name: 'Professional',
    price: 499,
    period: 'month',
    description: 'Ideal for professional traders and growing investment firms',
    name: 'Enterprise',
    price: 1499,
    period: 'month',
    description: 'For large investment firms and institutional investors',
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },
  { name: 'TradingView', logo: '📊', category: 'Charting' },
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },
const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>
      <Head>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
                        Prediction Accuracy;
                      </div>;
                    </div>;
                  </div>;
                        Enabled;
                      </span>                    </div>;
                  </div>;
                </div>;
              </div>;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent'>;
                Advanced Features;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Leverage cutting-edge AI and neural network technology to gain;
              unprecedented insights into financial markets.;
            </p>;
          </motion && motion.div>;
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
            ))}
      {/* Use Cases Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Use Cases;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover how Neural Finance AI transforms various aspects of;
              financial trading and investment management.;
            </p>;
          </motion && motion.div>;
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                Pricing Plans;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Choose the perfect plan for your trading needs. All plans include;
              our core AI-powered features.;
            </p>;
          </motion && motion.div>;
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'
                  }`}>;
                  Get Started;
                </Link>;
              </motion && motion.div>;
            ))}
      {/* Integrations Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing trading platforms and tools for a unified trading experience.
            </p>
          </motion.div>
                    </span>;
                  </div>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center space - x-3 text - gray - 300';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - violet - 400 flex - shrink - 0' />;
                      <span className='text - sm'>{feature}</span>;
                    </li>))}
                </ul>;
                <Link;
                  href='/contact'                  className={`w - full py - 3 px - 6 rounded - xl font - semibold text - center transition - all duration - 200 transform hover:scale - 105 ${
                    plan.popular;
                      ? 'bg - gradient - to - r from - violet - 500 to - purple - 600 text - white hover:from - violet - 600 hover:to - purple - 700';
                      : 'bg - gray - 800 / 50 text - white border border - gray - 600 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  Get Started;
                </Link>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 900 / 30'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Seamless Integrations;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Connect with your existing trading platforms and tools for a;
              unified trading experience.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 6'>            {integrations.map ((integration, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            ))}
              <Link
                href='/contact'
                className='bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                Start Free Trial;
              </Link>;
              <Link
                href='/contact'
          </div>
        </div>
      </section>
    </Layout>
                className='border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200'>;
                Schedule Demo;
              </Link>;
            </div>;
            <div className='text-sm text-gray-400'>;
              <p>;
                ✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant;
                Setup;
              </p>;
              <p className='mt-2'>;
                ✓ 24/7 Support • ✓ 99 && 99.9% Uptime SLA • ✓ Global Infrastructure;
              </p>            </div>;
          </div>;
        </div>;
      </section>;
export default NeuralFinanceAI;
    </Layout>),
}
;
export default NeuralFinanceAI;
;
