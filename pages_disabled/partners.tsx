import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building,
  Shield,
  Zap,
  Target,
  Star,
  Handshake,
  TrendingUp,
  Briefcase,
  Heart,
  DollarSign,
  Settings,
  BarChart3,
  Code,
  Cloud,
  Brain,
  Network,
  Lock,
  Eye,
  MessageSquare,
  Calendar,
  FileText,
  BookOpen,
  ShoppingCart,
  Home,
  Phone,
  Mail,
  MapPin;
} from 'lucide-react';
import Layout from '../components/Layout';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Leading technology companies that provide complementary solutions and platforms',
    icon: Code,
    color: 'bg-blue-100 text-blue-800',
    partners: [
      { name: 'Microsoft', logo: 'Microsoft', description: 'Cloud and AI solutions' },
      { name: 'Amazon Web Services', logo: 'AWS', description: 'Cloud infrastructure' },
      { name: 'Google Cloud', logo: 'Google', description: 'AI and analytics' },
      { name: 'IBM', logo: 'IBM', description: 'Enterprise solutions' },
      { name: 'Salesforce', logo: 'Salesforce', description: 'CRM and automation' },
      { name: 'Oracle', logo: 'Oracle', description: 'Database and enterprise software' }
    ]
  },
  {
    title: 'Industry Partners',
    description: 'Organizations across various industries that help us deliver specialized solutions',
    icon: Building,
    color: 'bg-green-100 text-green-800',
    partners: [
      { name: 'Healthcare Alliance', logo: 'Healthcare', description: 'Medical technology solutions' },
      { name: 'FinTech Consortium', logo: 'Finance', description: 'Financial technology innovations' },
      { name: 'Manufacturing Group', logo: 'Manufacturing', description: 'Industrial automation' },
      { name: 'Retail Association', logo: 'Retail', description: 'E-commerce and retail tech' },
      { name: 'Education Network', logo: 'Education', description: 'EdTech solutions' },
      { name: 'Government Partners', logo: 'Government', description: 'Public sector technology' }
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Companies that provide specialized tools and services to enhance our offerings',
    icon: Settings,
    color: 'bg-purple-100 text-purple-800',
    partners: [
      { name: 'Security Experts', logo: 'Security', description: 'Cybersecurity solutions' },
      { name: 'Data Analytics Co', logo: 'Analytics', description: 'Advanced analytics tools' },
      { name: 'AI Research Lab', logo: 'AI Lab', description: 'Machine learning research' },
      { name: 'Cloud Migration Pro', logo: 'Migration', description: 'Cloud migration services' },
      { name: 'DevOps Specialists', logo: 'DevOps', description: 'Development operations' },
      { name: 'UX Design Studio', logo: 'Design', description: 'User experience design' }
    ]
  }
];

const benefits = [
  {
    title: 'Expanded Capabilities',
    description: 'Access to cutting-edge technologies and specialized expertise',
    icon: Zap,
    features: ['Advanced AI models', 'Enterprise-grade security', 'Scalable cloud solutions']
  },
  {
    title: 'Global Reach',
    description: 'Serve clients worldwide through our international partner network',
    icon: Globe,
    features: ['Local support', 'Regional expertise', '24/7 coverage']
  },
  {
    title: 'Innovation',
    description: 'Stay ahead with access to the latest technologies and research',
    icon: Brain,
    features: ['R&D collaboration', 'Beta testing', 'Early access programs']
  },
  {
    title: 'Quality Assurance',
    description: 'Maintain the highest standards through certified partnerships',
    icon: Award,
    features: ['Certified solutions', 'Quality standards', 'Compliance assurance']
  }
];

const stats = [
  { number: '50+', label: 'Strategic Partners' },
  { number: '15+', label: 'Countries' },
  { number: '200+', label: 'Joint Projects' },
  { number: '99%', label: 'Client Satisfaction' }
];
}

export default function PartnersPage() {
  
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Building the future of technology through strategic partnerships and collaborative innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with different types of partners to deliver comprehensive solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${type.color} mr-4`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <div className="space-y-3">
                    {type.partners.map((partner, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{partner.name}</div>
                          <div className="text-sm text-gray-500">{partner.description}</div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why partner with Zion Tech Group? Discover the advantages of joining our ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
              >
                Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
