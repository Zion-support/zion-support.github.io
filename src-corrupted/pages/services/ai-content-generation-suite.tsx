import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Brain, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const AIContentGenerationSuite = (props: any) => {
  const features = [
    'AI-powered blog post generation',
    'Social media content creation',
    'Email marketing campaigns',
    'SEO-optimized content',
    'Multi-language support',
    'Brand voice consistency',
    'Content calendar management',
    'Performance analytics'
  ];

  const benefits = [
    'Save 80% content creation time',
    'Consistent brand voice across all channels',
    'Multi-language content generation',
    'SEO-optimized output for better rankings',
    'Scalable content production',
    'Cost-effective solution',
    '24/7 content generation capability',
    'Integration with popular platforms'
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$199/month',
      features: ['Up to 50 articles/month', '3 social media accounts', 'Basic SEO optimization', 'Email support'],
      marketPrice: '$299/month'
    },
    professional: {
      name: 'Professional',
      price: '$399/month',
      features: ['Up to 200 articles/month', '10 social media accounts', 'Advanced SEO optimization', 'Priority support', 'Multi-language support'],
      marketPrice: '$599/month',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: '$799/month',
      features: ['Unlimited articles', 'Unlimited social accounts', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solution'],
      marketPrice: '$1,299/month'
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              AI Content Generation Suite
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your content marketing with AI-powered content creation that saves time, maintains brand consistency, and drives engagement across all channels.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Content Features</h2>
          <p className="text-xl text-gray-600">Everything you need to create engaging content at scale</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Suite?</h2>
            <p className="text-xl text-gray-600">Measurable results that drive business growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your content needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(pricing).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                <p className="text-gray-500 line-through">{plan.marketPrice}</p>
                <p className="text-green-600 font-semibold">Save up to 40%</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-xl text-gray-300">Contact us today for a free consultation and demo</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Professional AI content generation services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIContentGenerationSuite;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>