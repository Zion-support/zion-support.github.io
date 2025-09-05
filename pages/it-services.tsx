<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Settings, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Brain, 
  Cpu, 
  Wifi, 
  Monitor, 
  AlertTriangle, 
  TrendingUp, 
  Lock, 
  Globe, 
  HardDrive, 
  Smartphone, 
  Building, 
  BarChart3,
  Package,
  GraduationCap,
  Atom,
  Leaf,
  Link as LinkIcon,
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap,
  Search, 
  ShoppingCart, 
  BookOpen, 
  Rocket,
  Laptop
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring'],
    marketPrice: '$5,000/month',
    link: '/contact'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats',
    icon: Shield,
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection'],
    marketPrice: '$4,000/month',
    link: '/contact'
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Database',
    popular: false,
    benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Scalability'],
    marketPrice: '$2,500/month',
    link: '/contact'
  }
];

const industries = [
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' },
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail technology solutions' },
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }
];

export default function ITServices() {
  return (
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud computing, cybersecurity, database management, and more. Professional IT solutions for your business." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional IT services to keep your business running smoothly. From cloud computing to cybersecurity, 
                we provide comprehensive technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to enhance your business operations and security.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                    {service.marketPrice && (
                      <span className="text-gray-500 ml-2">(Market: {service.marketPrice})</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
=======
 const filteredServices = selectedCategory === 'all' ? services : services.filter (service => service.category === selectedCategory);
return (<> <Head> <title>IT Services - Zion Tech Group</title> <h1 className= {
  `text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> IT Services </h1> <p className= {
  `text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> 100+ Comprehensive IT Solutions </p> <p className= {
  `text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> Transform your business with our enterprise-grade IT services. From cloud infrastructure to quantum computing, we provide cutting-edge technology solutions that scale with your business and drive innovation. </p> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg font-semibold transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> <div key= {
  service.id 
}className= {
  `p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}style= {
  {
  transitionDelay: `$ {
  index * 100 
}ms` 
}
}> Popular </div>) 
}</li>) ) 
}</ul> </div> </span>) ) 
}</div> </div> w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"> Learn More </button> </div>) ) 
}</div> </div> </section> </svg> </div> <h3 className=" text-xl font-bold mb-2">Cloud Platforms</h3> <p className=" text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">Security</h3> <p className=" text-slate-400">Zero-trust architecture and advanced threat protection</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">DevOps</h3> <p className=" text-slate-400">CI/CD pipelines and infrastructure automation</p> </div> </svg> </div> <h3 className=" text-xl font-bold mb-2">Blockchain</h3> <p className=" text-slate-400">Smart contracts and decentralized applications</p> </div> </div> </div> </section> Ready to Transform Your IT Infrastructure? </h2> <p className=" text-lg text-slate-300 mb-8"> Contact our IT experts to discuss how our comprehensive technology solutions can modernize your infrastructure and accelerate your digital transformation. </p> <div className=" flex flex-col sm:flex-row items-center justify-center gap-4"> <Link href=" /contact"className=" px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors" > Get IT Consultation </Link> <a 
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
}