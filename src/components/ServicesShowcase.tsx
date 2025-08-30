import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  ShoppingCart, 
  MessageCircle, 
  BookOpen, 
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  ChevronDown,
  ChevronUp
 } from 'lucide-react';
import { innovativeMicroSaasServices2025 as INNOVATIVE_MICRO_SAAS_SERVICES_2025  } from '@/data/innovativeMicroSaasServices2025';

<<<<<<< HEAD
interface ServiceShowcaseProps extends React.PropsWithChildren<{}> {

  className?: string}

export function ServicesShowcase(...args[]):  {
  const [expandedCategories, setExpandedCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025];
  
  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {;
    const category = service.category;
    if (!acc[category]) {
      acc[category] = []}
    acc[category].push(service);
    return acc}, {} as Record<string, any>);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: allServices.length },
    { id: 'AI', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: servicesByCategory['AI & Analytics']?.length || 0 },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan', count: servicesByCategory['Quantum Computing']?.length || 0 },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue', count: servicesByCategory['Blockchain']?.length || 0 },
    { id: 'IoT', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan', count: servicesByCategory['IoT & Edge']?.length || 0 },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: servicesByCategory['Cybersecurity']?.length || 0 },
    { id: 'Healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple', count: servicesByCategory['Healthcare']?.length || 0 },
    { id: 'Finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue', count: servicesByCategory['Finance']?.length || 0 },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple', count: servicesByCategory['Manufacturing']?.length || 0 },;
    { id: 'Sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-orange to-zion-green', count: servicesByCategory['Sustainability']?.length || 0 };
  ];

  const toggleCategory = (category: string)  => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category);
        [...prev, category];
    )};

  const getCategoryIcon = (category: string)  => {;
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap};

  const getCategoryColor = (category: string)  => {;
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-zion-cyan to-zion-blue'};

  const filteredServices = selectedCategory === 'all' 
    ? allServices: allServices.filter(service  => ;
        service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      );
=======
export function ServicesShowcase() {
  const services = [
    {
      icon: Brain,
      title: "AI & Analytics",
      description: "Machine Learning & Data Science solutions",
      href: "/services/ai-business-intelligence",
      category: "AI",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure & Automation",
      href: "/services/cloud-devops",
      category: "Infrastructure",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "AI-Powered Security solutions",
      href: "/services",
      category: "Security",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Cpu,
      title: "IoT & Edge",
      description: "Smart Devices & Networks",
      href: "/services",
      category: "IoT",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Lock,
      title: "Blockchain",
      description: "DeFi & Smart Contracts",
      href: "/services",
      category: "Blockchain",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Healthcare Tech",
      description: "AI Medicine & Diagnostics",
      href: "/services",
      category: "Healthcare",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Green IT Solutions",
      href: "/services",
      category: "Green IT",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ShoppingCart,
      title: "Micro SaaS",
      description: "Productized SaaS for niches",
      href: "/services/micro-saas-solutions",
      category: "SaaS",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "AI Auto Email",
      description: "Faster replies, CRM logging",
      href: "/services/ai-auto-email-responder",
      category: "Automation",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Mobile Surveys",
      description: "NPS/CSAT with AI insights",
      href: "/services/mobile-survey",
      category: "Analytics",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Compliance Copilot",
      description: "SOC2/ISO evidence automation",
      href: "/services/ai-compliance-copilot",
      category: "Compliance",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: BookOpen,
      title: "LLM Content Studio",
      description: "On-brand AI content",
      href: "/services/llm-content-studio",
      category: "Content",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "FinOps Advisor",
      description: "Cloud cost optimization",
      href: "/services/finops-advisor",
      category: "Finance",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Returns Management",
      description: "E-commerce RMA automation",
      href: "/services/returns-management",
      category: "E-commerce",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Email Sequencer",
      description: "Automated follow-ups",
      href: "/services/email-sequencer",
      category: "Marketing",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Podcast Transcription",
      description: "Transcripts & show notes",
      href: "/services/podcast-transcription",
      category: "Media",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Micro CRM",
      description: "Local business CRM",
      href: "/services/micro-crm",
      category: "CRM",
      color: "from-cyan-500 to-teal-600"
    },
    {
      icon: Gauge,
      title: "Website Analytics",
      description: "Privacy-first SMB analytics",
      href: "/services/website-analytics",
      category: "Analytics",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: HelpCircle,
      title: "IT Helpdesk",
      description: "Tickets, SLAs, portals",
      href: "/services/it-helpdesk",
      category: "Support",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: ShoppingCart,;
      title: "Affiliate Tracking",;
      description: "Partner revenue platform",;
      href: "/services/affiliate-tracking",;
      category: "Marketing",;
      color: "from-green-500 to-emerald-600";
    };
  ];

  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0,
  y: 20 






},
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
      };
    };
  };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  return (
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered solutions to enterprise infrastructure, we provide end-to-end technology services that drive business transformation
          </p>
        </motion.div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index)  => (
=======
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport = {
  { once: true,
  margin: "-50px" 






}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover = {
  { y: -8,
  scale: 1.02 






}}
              className="group relative"
            >
              <Link to={service.href}>
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 30 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.8,
  delay: 0.2 






}}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
<<<<<<< HEAD
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )};
=======;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
