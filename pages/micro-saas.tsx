import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import Layout from '../components/Layout',
import {,
  Cloud,;
  Zap,;
  BarChart3,;
  Shield,;
  Users,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Clock,;
  Globe,;
  Database,;
  Brain,;
  Video,;
  Smartphone,;
  Building,;
  Settings,;
  Lock,;
  Cpu,;
  Network,;
  Target,;
  Rocket,;
  Code,;
  Monitor,;
  Mail,
} from 'lucide-react',
,
const microSaaSServices = [,
  {,
    id: 1,;
    title: 'Project Management Tools',;
    description: 'Streamline your workflow with powerful project management and collaboration tools',;
    icon: Target,;
    features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Time Tracking'],;
    pricing: 'Starting at $29/month',;
    category: 'Productivity',
  ,},;
  {,
    id: 2,;
    title: 'Analytics Dashboard',;
    description: 'Comprehensive analytics and reporting tools for data-driven decision making',;
    icon: BarChart3,;
    features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'Export Options'],;
    pricing: 'Starting at $49/month',;
    category: 'Analytics',
  ,},;
  {,
    id: 3,;
    title: 'Customer Support System',;
    description: 'Efficient customer support and ticketing system with AI-powered features',;
    icon: Users,;
    features: ['Ticket Management', 'Live Chat', 'Knowledge Base', 'AI Chatbot'],;
    pricing: 'Starting at $39/month',;
    category: 'Support',
  ,},;
  {,
    id: 4,;
    title: 'Content Management',;
    description: 'Easy-to-use content management system for blogs, websites, and digital content',;
    icon: Globe,;
    features: ['Content Editor', 'SEO Tools', 'Media Library', 'Publishing Workflow'],;
    pricing: 'Starting at $19/month',;
    category: 'Content',
  ,},;
  {,
    id: 5,;
    title: 'Email Marketing Platform',;
    description: 'Powerful email marketing tools with automation and personalization features',;
    icon: Mail,;
    features: ['Email Templates', 'Automation', 'A/B Testing', 'Analytics'],;
    pricing: 'Starting at $25/month',;
    category: 'Marketing',
  ,},;
  {,
    id: 6,;
    title: 'Inventory Management',;
    description: 'Complete inventory tracking and management system for e-commerce and retail',;
    icon: Database,;
    features: ['Stock Tracking', 'Order Management', 'Supplier Management', 'Reporting'],;
    pricing: 'Starting at $35/month',;
    category: 'E-commerce',
  ,};
],
,
const categories = [,
  { name: "All", count: microSaaSServices.length ,},;
  { name: "Productivity", count: microSaaSServices.filter(s => s.category === "Productivity").length ,},;
  { name: "Analytics", count: microSaaSServices.filter(s => s.category === "Analytics").length ,},;
  { name: "Support", count: microSaaSServices.filter(s => s.category === "Support").length ,},;
  { name: "Content", count: microSaaSServices.filter(s => s.category === "Content").length ,},;
  { name: "Marketing", count: microSaaSServices.filter(s => s.category === "Marketing").length ,},;
  { name: "E-commerce", count: microSaaSServices.filter(s => s.category === "E-commerce").length ,};
],
,
const features = [,
  {,
    icon: Cloud,;
    title: 'Cloud-Based',;
    description: 'Access your tools from anywhere with our secure cloud infrastructure',
  ,},;
  {,
    icon: Zap,;
    title: 'Lightning Fast',;
    description: 'Optimized performance with sub-second response times',
  ,},;
  {,
    icon: Shield,;
    title: 'Secure & Reliable',;
    description: 'Enterprise-grade security with 99.9% uptime guarantee',
  ,},;
  {,
    icon: Users,;
    title: 'Scalable',;
    description: 'Grow with your business with flexible pricing and features',
  ,};
],
,
export default function MicroSAAS() {,
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const [filteredServices, setFilteredServices] = React.useState(microSaaSServices),
,
  React.useEffect(() => {,
    if (selectedCategory === "All") {,
      setFilteredServices(microSaaSServices),
    } else {,
      setFilteredServices(microSaaSServices.filter(service => service.category === selectedCategory)),
    };
  }, [selectedCategory]),
,
  return (,
    <Layout,
      title="Micro SaaS Solutions - Zion Tech Group",
      description="Powerful micro SaaS solutions for modern businesses. Streamline operations with our suite of productivity, analytics, and management tools.",
      keywords="micro SaaS, productivity tools, business software, analytics, project management, customer support, content management",
    >,
      <Head>,
        <title>Micro SaaS Solutions - Zion Tech Group</title>,
        <meta name="description" content="Powerful micro SaaS solutions for modern businesses. Streamline operations with our suite of productivity, analytics, and management tools." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                Micro SaaS Solutions,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-purple-100">,
                Powerful, focused tools that solve specific business problems.,
                Streamline your operations with our suite of micro SaaS applications.,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">,
                  Get Started Today,
                </Link>,
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">,
                  View Case Studies,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Features Section */,};
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
                Why Choose Our Micro SaaS Solutions?,
              </h2>,
              <p className="text-lg text-gray-600">,
                Built for modern businesses that need focused, powerful tools,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {features.map((feature, index) => (,
                <motion.div,
                  key={feature.title};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="text-center",
                >,
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">,
                    <feature.icon className="w-8 h-8 text-purple-600" />,
                  </div>,
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>,
                  <p className="text-gray-600">{feature.description}</p>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Category Filter */};
        <section className="py-12 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <div className="flex flex-wrap justify-center gap-4">,
              {categories.map((category) => (,
                <button,
                  key={category.name};
                  onClick={() => setSelectedCategory(category.name)};
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${,
                    selectedCategory === category.name,
                      ? 'bg-purple-600 text-white',
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
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredServices.map((service, index) => (,
                <motion.div,
                  key={service.id};
                  initial={{ opacity: 0, y: 20 ,}};
                  animate={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.5, delay: index * 0.1 ,}};
                  className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow border border-gray-200",
                >,
                  <div className="flex items-center mb-4">,
                    <service.icon className="w-8 h-8 text-purple-600 mr-3" />,
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
                    <span className="text-lg font-bold text-purple-600">{service.pricing}</span>,
                    <Link href="/contact" className="text-purple-600 hover: text-purple-800 font-medium">,
                      Learn More <ArrowRight className="w-4 h-4 inline ml-1" />,
                    </Link>,
                  </div>,
                </motion.div>,
              )),};
            </div>,
          </div>,
        </section>,
        {/* Contact Section */};
        <section className="py-16 bg-purple-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Business?</h2>,
            <p className="text-xl mb-8 text-purple-100">,
              Contact us today to discuss your micro SaaS needs and discover how we can help you achieve your goals.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">,
                Get Free Consultation,
              </Link>,
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">,
                Call +1 302 464 0950,
              </a>,
            </div>,
            <div className="mt-8 text-purple-100">,
              <p>Email: kleber@ziontechgroup.com</p>,
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};