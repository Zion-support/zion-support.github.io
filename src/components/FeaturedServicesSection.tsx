import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Brain, 
  ArrowRight, 
  Star,
  Zap,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

interface FeaturedService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  badge: string;
  badgeColor: string;
  features: string[];
  price: string;
  rating: number;
  reviews: number;
  color: string;
  stats: {
    value: string;
    label: string;
  };
}

const FeaturedServicesSection: React.FC = () => {
  const featuredServices: FeaturedService[] = [
    {
      id: 'ai-customer-success',
      title: 'AI-Powered Customer Success Platform',
      description: 'Reduce churn by 40% with predictive analytics, automated onboarding, and intelligent customer insights.',
      icon: Users,
      href: '/services/ai-powered-customer-success-platform',
      badge: 'NEW',
      badgeColor: 'from-green-400 to-emerald-500',
      features: [
        '95% churn prediction accuracy',
        'Automated intervention triggers',
        'Real-time success metrics',
        'Personalized onboarding flows'
      ],
      price: 'Starting at $199/month',
      rating: 4.9,
      reviews: 127,
      color: 'from-green-400 to-emerald-500',
      stats: {
        value: '40%',
        label: 'Churn Reduction'
      }
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      description: 'Boost conversions by 85% with intelligent targeting, multi-channel campaigns, and automated personalization.',
      icon: Target,
      href: '/services/ai-powered-marketing-automation',
      badge: 'POPULAR',
      badgeColor: 'from-purple-400 to-pink-500',
      features: [
        'AI-powered audience targeting',
        'Multi-channel campaign automation',
        'Advanced analytics & insights',
        'Personalized content generation'
      ],
      price: 'Starting at $299/month',
      rating: 4.8,
      reviews: 89,
      color: 'from-purple-400 to-pink-500',
      stats: {
        value: '85%',
        label: 'Conversion Increase'
      }
    },
    {
      id: 'ai-business-intelligence',
      title: 'Advanced AI Business Intelligence',
      description: 'Transform data into actionable insights with 95% prediction accuracy and real-time analytics dashboards.',
      icon: TrendingUp,
      href: '/services/ai-business-intelligence',
      badge: 'FEATURED',
      badgeColor: 'from-cyan-400 to-blue-500',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Custom ML models',
        'Automated reporting'
      ],
      price: 'Starting at $499/month',
      rating: 4.9,
      reviews: 156,
      color: 'from-cyan-400 to-blue-500',
      stats: {
        value: '95%',
        label: 'Prediction Accuracy'
      }
    }
  ];

  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-6"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular AI-powered services that are transforming businesses worldwide
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-slate-800/70 rounded-2xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${service.badgeColor} shadow-lg`}>
                  {service.badge}
                </span>
              </div>

              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <ul className="space-y-3 mb-6">
                {service.features.slice(0, 2).map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{service.stats.value}</div>
                  <div className="text-sm text-gray-400">{service.stats.label}</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold ml-1">{service.rating}</span>
                  </div>
                  <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-lg font-bold text-white">{service.price}</div>
              </div>

              {/* CTA Button */}
              <Link
                to={service.href}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-2xl p-8 border border-zion-cyan/20">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-zion-cyan mr-3" />
              <h3 className="text-2xl font-bold text-white">Trusted by 500+ Companies</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who are already transforming their business with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-futuristic inline-flex items-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic-outline inline-flex items-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedServicesSection;