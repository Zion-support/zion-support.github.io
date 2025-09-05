import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  MessageSquare,
  Search,
  Eye,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions to transform your business operations.',
    icon: Bot,
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Automated Decision Making'],
    price: 'Starting at $5,000/month'
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure for modern applications.',
    icon: Server,
    features: ['AWS/Azure/GCP Migration', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'],
    price: 'Starting at $3,000/month'
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with latest technologies.',
    icon: Code,
    features: ['React/Next.js Development', 'Progressive Web Apps', 'API Integration', 'Performance Optimization'],
    price: 'Starting at $2,500/month'
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    features: ['iOS/Android Apps', 'React Native', 'Flutter', 'App Store Optimization'],
    price: 'Starting at $4,000/month'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
    price: 'Starting at $3,500/month'
  },
  {
    id: 6,
    title: 'Data Analytics',
    description: 'Transform your data into actionable business insights.',
    icon: Search,
    features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards'],
    price: 'Starting at $2,000/month'
  }
];

const industries = [
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Government'
];

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud solutions, web development, mobile apps, cybersecurity, and data analytics." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions to accelerate your digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                What We Offer
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="text-blue-600 font-semibold">{service.price}</div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We have experience working with clients across various industries.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white rounded-full shadow-md font-medium text-gray-700 hover:shadow-lg transition-shadow duration-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our services can help your business grow.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}