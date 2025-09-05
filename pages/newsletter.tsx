<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Mail, ArrowRight, Users, Calendar, FileText, Video, Globe, Shield, Zap } from 'lucide-react';
=======
  ArrowRight,
  Users,
  Calendar,
  FileText,
  Video,
  Globe,
  Shield,
  Zap,
>>>>>>> main

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Get access to exclusive white papers, case studies, and industry insights.',
    icon: FileText
  },
<<<<<<< HEAD
  {
    title: 'Webinar Invitations',
    description: 'Receive invitations to our expert-led webinars and virtual events.',
    icon: Video
  },
  {
    title: 'Industry Updates',
    description: 'Stay informed about the latest trends and developments in technology.',
    icon: Globe
  }
];

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Newsletter - Zion Tech Group</title>
        <meta name="description" content="Subscribe to our newsletter for the latest updates and insights" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Newsletter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and exclusive content from Zion Tech Group.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
=======
  {}
    title: 'Webinar Invitations,',
    description: 'Receive invitations to our expert-led webinars and virtual events.,',
    icon: Video;
  },
>>>>>>> main
}