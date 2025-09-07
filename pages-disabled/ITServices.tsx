import { Star } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import {
  // TODO: Implement
}
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Lock, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  FileText,
  Cpu;
} from 'lucide-react';
const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,]
    features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
    price: '$2,500/month',
    benefits: ['Scalable infrastructure', 'Reduced operational costs', 'Enhanced security', 'Improved performance']
  },
    title: 'Network Security Solutions',
    description: 'Advanced cybersecurity measures to protect your business from threats.',
    icon: Shield,
    features: ['Firewall management', 'Intrusion detection', 'Vulnerability assessments', 'Security audits'],
    price: '$1,800/month',
    benefits: ['Threat protection', 'Compliance assurance', 'Risk mitigation', 'Peace of mind']
    title: 'Database Administration',
    description: 'Expert database management and optimization services.',
    icon: Database,
    features: ['Performance tuning', 'Backup strategies', 'Data migration', 'Monitoring'],
    price: '$1,200/month',
    benefits: ['Optimized performance', 'Data protection', 'Reduced downtime', 'Expert support']
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support for all your IT needs.',
    icon: Monitor,
    features: ['Remote assistance', 'Hardware support', 'Software installation', 'User training'],
    price: '$800/month',
    benefits: ['Quick response times', 'Expert technicians', 'Reduced downtime', 'User satisfaction']
    title: 'Network Design & Implementation',
    description: 'Custom network solutions tailored to your business requirements.',
    icon: Network,
    features: ['Network planning', 'Hardware selection', 'Installation', 'Testing'],
    price: '$3,000/project',
    benefits: ['Reliable connectivity', 'Scalable design', 'Future-proof architecture', 'Expert implementation']
    title: 'Server Management',
    description: 'Complete server administration and maintenance services.',
    icon: Server,
    features: ['Server setup', 'Performance monitoring', 'Updates & patches', 'Backup management'],
    price: '$1,500/month',
    benefits: ['$1', '$2', '$3', '$4']
];
const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },""
  { number: "24/7", label: "Support Available" },""
  { number: "500+", label: "Systems Managed" },""
  { number: "15min", label: "Average Response Time" }"]
export default function ITServicesPage() {
  return (
    <MainLayout;"
      title="IT Services - Zion Tech Group"""
      description="Comprehensive IT services including cloud management, network security, database administration, and 24/7 support."""
      keywords="IT services, cloud management, network security, database administration, IT support, infrastructure""
    >
"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <div className="container mx-auto px-4 py-16">"
</div>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16""
</motion>"
            <h1 className="text-5xl font-bold text-white mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">"
                key={index}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="text-center""
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>""
                <div className="text-gray-300">{stat.label}</div>"
              </motion.div>)
            ))}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20""
                <div className="flex items-center mb-4">"
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />"
</service>"
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>"
                <p className="text-gray-300 mb-6">{service.description}</p>""
                <div className="mb-6">"
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>""
                  <ul className="space-y-2">"
</ul>"
                      <li key={idx} className="flex items-center text-gray-300">"
</li>"
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"

                      </li>
                  </ul>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>""
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />"

                <div className="flex items-center justify-between">"
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>"
                  <Link;"
                    href="/contact"""
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center""
                    <ArrowRight className="h-4 w-4 ml-2" />"

                  

            transition={{ duration: 0.6, delay: 0.8 }}"
            className="bg-blue-600 rounded-xl p-8 text-center""
            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
            </p>"
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"

                <span>+1 302 464 0950</span>
                <Mail className="h-5 w-5 mr-2" />"

                <span>kleber@ziontechgroup.com</span>
                <MapPin className="h-5 w-5 mr-2" />"

                <span>364 E Main St STE 1008 Middletown DE 19709</span>