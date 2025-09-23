import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const EnhancedTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      avatar: 'SJ',
      rating: 5,
      content: 'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our operational efficiency by 300% and reduced costs by 40%. The team\'s expertise and dedication are unmatched.',
      results: ['300% Efficiency Increase', '40% Cost Reduction', '99.9% Uptime']
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Global Enterprises',
      avatar: 'MC',
      rating: 5,
      content: 'Working with Zion Tech Group was a game-changer for our organization. Their cloud solutions scaled seamlessly with our growth, and their 24/7 support gave us complete peace of mind.',
      results: ['Seamless Scaling', '24/7 Support', 'Zero Downtime']
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'InnovateCorp',
      avatar: 'ER',
      rating: 5,
      content: 'The cybersecurity solutions provided by Zion Tech Group helped us achieve full compliance while improving our security posture. Their proactive approach prevented multiple potential breaches.',
      results: ['Full Compliance', 'Enhanced Security', 'Proactive Protection']
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'StartupX',
      avatar: 'DT',
      rating: 5,
      content: 'From day one, Zion Tech Group understood our vision and delivered beyond expectations. Their web development team created a platform that our users absolutely love.',
      results: ['Beyond Expectations', 'User Satisfaction', 'Rapid Delivery']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by TechCrunch',
      highlight: '2024'
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: '98% client retention rate with 5-star average rating',
      highlight: '98%'
    },
    {
      icon: TrendingUp,
      title: 'Growth Impact',
      description: 'Average 250% ROI improvement for our clients',
      highlight: '250%'
    }
  ];

  const companies = [
    'TechStart Inc.',
    'Global Enterprises',
    'InnovateCorp',
    'StartupX',
    'Enterprise Solutions',
    'Digital Dynamics',
    'Future Tech',
    'Innovation Labs'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 500+ Companies</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with Zion Tech Group.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.highlight}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                <div className="flex flex-wrap gap-2">
                  {testimonial.results.map((result, resultIndex) => (
                    <span
                      key={resultIndex}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>{result}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto">
                  <span className="text-xs font-medium text-gray-500">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create your success story together. Schedule a free consultation 
            and discover how we can transform your business.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Start Your Success Story</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialsSection;