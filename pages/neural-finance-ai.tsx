import Link from 'next/link';
  CheckCircle, ArrowRight, Star, Users, Award;
  Clock, Globe, BarChart3, Target, Microscope;
  Phone, Mail, MapPin, ArrowUpRight, Play;
  BarChart, PieChart, LineChart, Activity
 } from 'lucide-react';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const features = [
  {
    color: 'from-violet-500 to-purple-600'
  }
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
=======
      'Basic market analysis and insightsPortfolio tracking and monitoringRisk assessment and managementEmail supportUp to 5 trading strategiesBasic reporting and analytics'
    ];
    popular: false,
    color: 'from-gray-500 to-gray-600'
  };
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
        <meta
          name='description'
          content='Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks.'
        />;
        <meta
          name='keywords'
          content='AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group'
        />;
        <link
          rel='canonical'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
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
      {/* Features Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (;
              <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105'>;
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature && feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <feature && feature.icon className='w-8 h-8 text-white' />;
                </div>;
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed'>                  {feature && feature.description}
                </p>;
              </motion && motion.div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
      {/* Use Cases Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8'>;
                <div className='flex items-start space-x-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0'>;
                    <useCase && useCase.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-2xl font-bold text-white mb-3'>;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-400 mb-4 leading-relaxed'>;
                      {useCase && useCase.description}
                    </p>;
                    <div className='space-y-2'>;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div
                          key={benefitIndex}
                          className='flex items-center space-x-2 text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-violet-400 flex-shrink-0' />                          <span>{benefit}</span>;
                        </div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan && plan.popular
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10'                    : 'border-gray-700/50'
                }`}>;
                {plan && plan.popular && (;
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                    <div className='bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold'>                      Most Popular;
                    </div>;
                  </div>;
                )}
                    {plan.name}
                  </h3>;
                  <p className='text - gray - 400 text - sm mb - 6'>;
                    {plan.description}
                  </p>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'>;
                      /{plan.period}
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3 text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-violet-400 flex-shrink-0' />;
                      <span className='text-sm'>{feature}</span>;
                    </li>;
                  ))}
                <Link
                  href='/contact'                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan && plan.popular
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Seamless Integrations;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Connect with your existing trading platforms and tools for a;
              unified trading experience.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>            {integrations && integrations.map((integration, index) => (;
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105'>;
                <div className='text-4xl mb-3'>{integration && integration.logo}</div>;
                <h3 className='text-sm font-semibold text-white mb-1'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-xs text-gray-400'>{integration && integration.category}</p>              </motion && motion.div>;
=======
            className="text-center mb-16"
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              </p>            </div>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  ),;
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default NeuralFinanceAI;
=======
    </Layout>),
}
;
export default NeuralFinanceAI;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
