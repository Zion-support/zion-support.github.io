import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  TrendingUp
  Brain
  Shield
  Zap
  Target
  BarChart3
  Cpu
  Globe
  Users
  Award
  CheckCircle
  ArrowRight
  Star
  Phone
  Mail
  MapPin;
  BarChart3, Cpu, Globe, Users, Award;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin
 } from 'lucide-react';
import Layout from '../components/layout/Layout';

  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const features = [
  'Multi-chain DeFi aggregation'
  'Automated yield optimization'
  'Liquidity pool management'
  'Cross-chain bridge services'
  'Smart contract auditing'
  'DeFi analytics dashboard'
  'Mobile app integration'
  'Staking and governance',];  website: 'https://ziontechgroup.com'
}
const features = [
  'Multi-chain DeFi aggregationAutomated yield optimizationLiquidity pool managementCross-chain bridge servicesSmart contract auditingDeFi analytics dashboardMobile app integrationStaking and governance'
const pricingPlans = [
  {
    name: 'Starter'
    price: 29
    period: 'month'
    features: [
      'Basic DeFi tools'
      '3 blockchain networks'
      'Yield tracking'
      'Standard support'
    ]
    popular: false
  },  {
    name: 'Professional'
    price: 99
    period: 'month',    features: ['Basic DeFi tools3 blockchain networksYield trackingStandard support']
    popular: false
  }
  {
    name: 'Professional'
    price: 99
    period: 'month'
    features: [
      'Advanced DeFi tools'
      'All major networks'
      'Automated strategies'
      'Analytics'
      'Priority support'
    ]
    popular: true
  },  {
    name: 'Enterprise'
    price: 299
    period: 'month',    features: ['Advanced DeFi toolsAll major networksAutomated strategiesAnalyticsPriority support']
    popular: true
  }
  {
    name: 'Enterprise'
    price: 299
    period: 'month'
    features: [
      'Custom DeFi solutions'
      'White-label platform'
      'API access'
      'Priority support'
      'Custom integrations'
    ]
    popular: false
  },];    features: ['Custom DeFi solutionsWhite-label platformAPI accessPriority supportCustom integrations']
    popular: false
          >
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6'>
              <TrendingUp className='w-4 h-4 mr-2' />
              DeFi & Blockchain
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                DeFi Nexus
              </span>
              <br />
              <span className='text-white'>Platform</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Comprehensive decentralized finance platform providing yield
              farming, liquidity provision, and cross-chain DeFi services.            </p>          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              DeFi & Blockchain
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                DeFi Nexus
              </span>
              <br />
              <span className="text-white">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.
            </p>
          </motion.div>
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6'>;
              <TrendingUp className='w-4 h-4 mr-2' />;
              DeFi & Blockchain;
            </div>;
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>;
                DeFi Nexus;
              </span>;
              <br />;
              <span className='text-white'>Platform</span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
              Comprehensive decentralized finance platform providing yield;
              farming, liquidity provision, and cross-chain DeFi services.            </p>          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">;
              <TrendingUp className="w-4 h-4 mr-2" />;
              DeFi & Blockchain;
            </div>;
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">;
                DeFi Nexus;
              </span>;
              <br />;
              <span className="text-white">Platform</span>;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.;
            </p>;
          </motion && motion.div>;

            <a
              href='#pricing'
              className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105'>;
              <Target className='w-5 h-5 mr-2' />;
              Get Started;
            </a>;
            <a
              href='#contact'
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">;
              <Target className="w-5 h-5 mr-2" />;
              Get Started;
            </a>;
            <a
              href="#contact"
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Revolutionary DeFi Technology
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience the future of decentralized finance with multi-chain
              support, automated yield optimization, and comprehensive DeFi
              analytics.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {features.map((feature, index) => (          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary DeFi Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of decentralized finance with multi-chain support, automated yield optimization, and comprehensive DeFi analytics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Revolutionary DeFi Technology;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Experience the future of decentralized finance with multi-chain;
              support, automated yield optimization, and comprehensive DeFi;
              analytics.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {features && features.map((feature, index) => (          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary DeFi Technology;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience the future of decentralized finance with multi-chain support, automated yield optimization, and comprehensive DeFi analytics.;
            </p>;
          </motion && motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features && features.map((feature, index) => (;
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4'>
                  <CheckCircle className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>


            ))}

          </div>;
        </div>;
      </section>;



            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Choose Your Plan
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed for DeFi users of all levels
              from beginners to institutional investors.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Choose Your Plan;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed for DeFi users of all levels,;
              from beginners to institutional investors.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Choose Your Plan;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.;
            </p>;
          </motion && motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 ${
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'>;
                      /{plan.period}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}

                    </li>
                  ))}
                </ul>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
                <button className='w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300'>                  Get Started                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300">;
                  Get Started;
                </button>;
              </motion && motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform DeFi?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Contact our team to learn more about how DeFi Nexus Platform can
              revolutionize your decentralized finance experience.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform DeFi?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform DeFi?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Contact our team to learn more about how DeFi Nexus Platform can;
              revolutionize your decentralized finance experience.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion && motion.div          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform DeFi?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.;
            </p>;
          </motion && motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion&& motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
              viewport={{ once: true }}

            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>
            <motion.div
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.mobile}</p>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}

            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>
            <motion.div
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Mail className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.email}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.email}</p>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
              viewport={{ once: true }}

            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>

  );

}

    </Layout>
  );
}
