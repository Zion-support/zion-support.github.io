
import { motion } from 'framer-motion';
import {;
  Brain, DollarSign, TrendingUp, Shield, Zap,;
  CheckCircle, ArrowRight, Star, Users, Award,;
  Clock, Globe, BarChart3, Target, Microscope,;
  Phone, Mail, MapPin, ArrowUpRight, Play,;
  BarChart, PieChart, LineChart, Activity;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const features = [;
  {;
    title: 'Real-time Market Sentiment Analysis';
    description: 'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.';
    icon: Brain;
    color: 'from-violet-500 to-purple-600';
  };
  {;
    title: 'AI-Powered Risk Assessment',;
    description: 'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-600';
  },;
  {;
    title: 'Predictive Market Analysis',;
    description: 'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-600';
  },;
  {;
    title: 'Automated Trading Strategies',;
    description: 'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',;
    icon: Zap,;
    color: 'from-orange-500 to-red-600';
  },;
  {;
    title: 'Portfolio Performance Monitoring',;
    description: 'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',;
    icon: BarChart3,;
    color: 'from-pink-500 to-purple-600';
  },;
  {;
    title: 'Multi-Asset Class Support',;
    description: 'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',;
    icon: Globe,;
    color: 'from-cyan-500 to-blue-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const pricingPlans = [;
  {;
    name: 'Starter';
    price: 199;
    period: 'month';
    description: 'Perfect for individual traders and small investment firms';
    features: [;
      'Basic market analysis and insightsPortfolio tracking and monitoringRisk assessment and managementEmail supportUp to 5 trading strategiesBasic reporting and analytics';
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600';
  },;
  {;
    name: 'Professional',;
    price: 499,;
    period: 'month',;
    description: 'Ideal for professional traders and growing investment firms',;
    features: [;
      'Advanced AI models and algorithmsAutomated trading with backtestingCustom strategy developmentPriority support and API accessAdvanced risk management toolsMulti-portfolio managementReal-time market alertsCustom reporting and dashboards';
    ],;
    popular: true,;
    color: 'from-cyan-500 to-purple-600';
  },;
  {;
    name: 'Enterprise',;
    price: 1499,;
    period: 'month',;
    description: 'For large investment firms and institutional investors',;
    features: [;
      'Custom AI model training and developmentWhite-label solution with brandingDedicated account manager and supportAdvanced compliance automation24/7 monitoring and supportCustom integrations and APIsAdvanced security and audit trailsMulti-user access and permissions';
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const useCases = [;
  {;
    title: 'Algorithmic Trading Strategy Development';
    description: 'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',;
    icon: BarChart,;
    benefits: ['Increased trading efficiencyReduced emotional bias24/7 market monitoring'];
  },;
  {;
    title: 'Portfolio Risk Management & Optimization',;
    description: 'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',;
    icon: PieChart,;
    benefits: ['Risk-adjusted returnsPortfolio diversificationReal-time risk monitoring'];
  },;
  {;
    title: 'Market Trend Prediction & Analysis',;
    description: 'Predict market movements and identify trading opportunities with AI-powered analytics.',;
    icon: LineChart,;
    benefits: ['Early trend detectionImproved timingHigher success rates'];
  },;
  {;
    title: 'Automated Financial Reporting',;
    description: 'Generate comprehensive financial reports and compliance documentation automatically.',;
    icon: Activity,;
    benefits: ['Time savingsRegulatory complianceAccurate reporting'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const integrations = [;
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },;
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },;
  { name: 'TradingView', logo: '📊', category: 'Charting' },;
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },;
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },;
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],

const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>
      <Head>

            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Financial Intelligence</span>
              </div>

                  Neural Finance AI
                </span>
                <br />
                <span className="text-white">Revolutionary Trading Intelligence</span>
              </h1>

                <Link
                  href="#pricing"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

                  <span>94% Market Prediction Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time Risk Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Multi-Asset Support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-violet-400">$89.5B</div>
                      <div className="text-sm text-gray-400">Market Size</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-purple-400">94%</div>
                      <div className="text-sm text-gray-400">Prediction Accuracy</div>
                    </div>
                  </div>

                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Risk Management</span>
                      <span className="text-purple-400 font-semibold">Real-time</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Trading Automation</span>
                      <span className="text-pink-400 font-semibold">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI and neural network technology to gain unprecedented insights into financial markets.
            </p>
          </motion.div>

              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {feature.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </h3>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Neural Finance AI transforms various aspects of financial trading and investment management.
            </p>
          </motion.div>

              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {useCase.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>

          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs. All plans include our core AI-powered features.
            </p>
          </motion.div>

              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>

                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'

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

              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading investment firms using Neural Finance AI to gain competitive advantages
              in today's dynamic financial markets.
            </p>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>

  )

export default NeuralFinanceAI;

