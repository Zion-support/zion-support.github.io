import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Calendar, 
  FileText, 
  Video, 
  Globe, 
  Shield, 
  Zap,
  Star,
  Target,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Get access to exclusive white papers, case studies, and industry insights.',
    icon: FileText
  },
  {
    title: 'Early Access',
    description: 'Be the first to know about new features, products, and services.',
    icon: Star
  },
  {
    title: 'Expert Insights',
    description: 'Receive expert analysis and commentary on industry trends and developments.',
    icon: Target
  },
  {
    title: 'Community Access',
    description: 'Join our exclusive community of developers and technology professionals.',
    icon: Users
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'The newsletter has been invaluable for staying up-to-date with the latest in AI and cloud computing.',
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    content: 'Great insights and practical advice. I look forward to every issue.',
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    content: 'The exclusive content and early access features make this newsletter a must-read.',
    avatar: '/images/testimonials/emily.jpg'
  }
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Newsletter - Zion Tech Group</title>
        <meta name="description" content="Subscribe to our newsletter for exclusive content, early access, and expert insights." />
        <meta name="keywords" content="newsletter, subscribe, updates, technology, AI, cloud" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stay{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Updated
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Subscribe to our newsletter and never miss out on the latest technology insights, 
                exclusive content, and industry updates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Subscribe?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get exclusive access to content that helps you stay ahead in the technology landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Subscription Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of professionals who trust us for their technology insights.
              </p>
            </motion.div>

            {!isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="sm:pt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      We respect your privacy. Unsubscribe at any time. No spam, ever.
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to our newsletter!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing. You'll receive your first newsletter within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Subscribe another email
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Subscribers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied subscribers who rely on our newsletter for insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe now and join our community of technology professionals.
              </p>
              <button
                onClick={() => document.getElementById('email')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}