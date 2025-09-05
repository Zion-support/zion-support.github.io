import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import Layout from '../components/Layout',
import {,
  Server,;
  Cloud,;
  Shield,;
  Code,;
  Database,;
  Network,;
  CheckCircle,;
  ArrowRight,;
  Clock,;
  Users,;
  Zap,;
  Globe,;
  Lock,;
  Cpu,;
  Settings,;
  BarChart3,;
  Smartphone,;
  Monitor,;
  Wifi,;
  HardDrive,;
  Terminal,;
  Key,;
  Eye,;
  Bot,;
  MessageSquare,;
  Mail,
} from 'lucide-react',
,
const services = [,
  {,
    id: 1,;
    title: 'Cloud Infrastructure',;
    description: 'Scalable and secure cloud solutions for modern businesses',;
    icon: Cloud,;
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],;
    pricing: 'Starting at $2,500/month',;
    category: 'Infrastructure',
  ,},;
  {,
    id: 2,;
    title: 'DevOps & CI/CD',;
    description: 'Streamline your development workflow with automated deployment and continuous integration',;
    icon: Code,;
    features: ['Automated Deployment', 'Continuous Integration', 'Container Orchestration', 'Monitoring & Logging'],;
    pricing: 'Starting at $3,000/month',;
    category: 'DevOps',
  ,},;
  {,
    id: 3,;
    title: 'Cybersecurity',;
    description: 'Comprehensive security solutions to protect your digital assets and data',;
    icon: Shield,;
    features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],;
    pricing: 'Starting at $4,000/month',;
    category: 'Security',
  ,},;
  {,
    id: 4,;
    title: 'Database Management',;
    description: 'Optimize and maintain your databases for peak performance and reliability',;
    icon: Database,;
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],;
    pricing: 'Starting at $2,000/month',;
    category: 'Database',
  ,},;
  {,
    id: 5,;
    title: 'Network Solutions',;
    description: 'Design and implement robust network infrastructure for seamless connectivity',;
    icon: Network,;
    features: ['Network Design', 'VPN Setup', 'Load Balancing', 'Network Monitoring'],;
    pricing: 'Starting at $1,500/month',;
    category: 'Networking',
  ,},;
  {,
    id: 6,;
    title: 'IT Support & Maintenance',;
    description: '24/7 technical support and proactive maintenance for your IT infrastructure',;
    icon: Settings,;
    features: ['24/7 Support', 'Proactive Monitoring', 'System Updates', 'Troubleshooting'],;
    pricing: 'Starting at $1,000/month',;
    category: 'Support',
  ,};
],
,
const categories = [,
  { name: "All", count: services.length ,},;
  { name: "Infrastructure", count: services.filter(s => s.category === "Infrastructure").length ,},;
  { name: "DevOps", count: services.filter(s => s.category === "DevOps").length ,},;
  { name: "Security", count: services.filter(s => s.category === "Security").length ,},;
  { name: "Database", count: services.filter(s => s.category === "Database").length ,},;
  { name: "Networking", count: services.filter(s => s.category === "Networking").length ,},;
  { name: "Support", count: services.filter(s => s.category === "Support").length ,};
],
,
const technologies = [,
  { name: 'AWS', icon: Cloud ,},;
  { name: 'Azure', icon: Cloud ,},;
  { name: 'Docker', icon: Settings ,},;
  { name: 'Kubernetes', icon: Settings ,},;
  { name: 'Terraform', icon: Code ,},;
  { name: 'Jenkins', icon: Code ,},;
  { name: 'PostgreSQL', icon: Database ,},;
  { name: 'MongoDB', icon: Database ,},;
  { name: 'React', icon: Monitor ,},;
  { name: 'Node.js', icon: Terminal ,},;
  { name: 'Python', icon: Code ,},;
  { name: 'Go', icon: Code ,};
],
,
export default function ITServices() {,
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const [filteredServices, setFilteredServices] = React.useState(services),
,
  React.useEffect(() => {,
    if (selectedCategory === "All") {,
      setFilteredServices(services),
    } else {,
      setFilteredServices(services.filter(service => service.category === selectedCategory)),
    };
  }, [selectedCategory]),
,
  return (,
    <Layout,
      title="IT Services - Zion Tech Group",
      description="Comprehensive IT services including cloud infrastructure, DevOps, cybersecurity, database management, and 24/7 technical support.",
      keywords="IT services, cloud computing, DevOps, cybersecurity, database management, network solutions, technical support",
    >,
      <Head>,
        <title>IT Services - Zion Tech Group</title>,
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, DevOps, cybersecurity, database management, and 24/7 technical support." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                IT Services That Scale,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-blue-100">,
                Comprehensive IT solutions to power your business growth.,
                From cloud infrastructure to cybersecurity, we've got you covered.,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                  Get Started Today,
                </Link>,
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                  View Case Studies,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Category Filter */,};
        <section className="py-12 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="flex flex-wrap justify-center gap-4">,
              {categories.map((category) => (,
                <button,
                  key={category.name};
                  onClick={() => setSelectedCategory(category.name)};
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${,
                    selectedCategory === category.name,
                      ? 'bg-blue-600 text-white',
                      : 'bg-gray-100 text-gray-700 hover: bg-gray-200',
                  ,}`};
                >,
                  {category.name} ({category.count}),
                </button>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Services Grid */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredServices.map((service, index) => (,
                <motion.div,
                  key={service.id};
                  initial={{ opacity: 0, y: 20 ,}};
                  animate={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.5, delay: index * 0.1 ,}};
                  className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow",
                >,
                  <div className="flex items-center mb-4">,
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />,
                    <h3 className="text-xl font-bold text-gray-900">{service.title,}</h3>,
                  </div>,
                  <p className="text-gray-600 mb-6">{service.description}</p>,
                  <ul className="space-y-2 mb-6">,
                    {service.features.map((feature, idx) => (,
                      <li key={idx} className="flex items-center text-sm text-gray-600">,
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />,
                        {feature};
                      </li>,
                    ))};
                  </ul>,
                  <div className="flex items-center justify-between">,
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>,
                    <Link href="/contact" className="text-blue-600 hover: text-blue-800 font-medium">,
                      Learn More <ArrowRight className="w-4 h-4 inline ml-1" />,
                    </Link>,
                  </div>,
                </motion.div>,
              )),};
            </div>,
          </div>,
        </section>,
        {/* Technologies Section */};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Technologies We Work With,
              </h2>,
              <p className="text-lg text-gray-600">,
                Modern tools and technologies for cutting-edge solutions,
              </p>,
            </motion.div>,
            <div className="max-w-6xl mx-auto">,
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">,
                {technologies.map((tech, index) => (,
                  <motion.div,
                    key={tech.name};
                    initial={{ opacity: 0, scale: 0.9 ,}};
                    whileInView={{ opacity: 1, scale: 1 ,}};
                    transition={{ duration: 0.6, delay: index * 0.1 ,}};
                    viewport={{ once: true ,}};
                    className="bg-gray-100 rounded-lg p-4 text-center hover: bg-blue-100 transition-colors group",
                  >,
                    <tech.icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />,
                    <span className="text-gray-700 font-medium text-sm">{tech.name,}</span>,
                  </motion.div>,
                ))};
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Contact Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Contact us today to discuss your IT needs and discover how we can help you achieve your goals.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                Get Free Consultation,
              </Link>,
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                Call +1 302 464 0950,
              </a>,
            </div>,
            <div className="mt-8 text-blue-100">,
              <p>Email: kleber@ziontechgroup.com</p>,
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};