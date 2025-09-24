import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "@/components/SEO"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Zap, ;
  Shield, ;
  Cloud, ;
  Database, ;
  Network, ;
  Cpu,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Users,;
  Globe,;
  Rocket,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  Atom,;
  Code,;
  BarChart3,;
  Workflow,;
  Target,;
  Lock,;
  Eye,;
  Search,;
  Filter,;
  ExternalLink,;
  Server;
} from "lucide-react"
import { innovativeServices2029, serviceCategories, pricingTiers, Service } from "../data/innovativeServices2029"
export default function ComprehensiveServicesShowcase2029() {;
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const categories = {;
    'all': { name: 'All Services', icon: <Rocket className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' };
    'ai-ml': { name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' };
    'quantum': { name: 'Quantum Computing', icon: <Atom className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' };
    'devops': { name: 'DevOps & Automation', icon: <Workflow className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' };
    'cybersecurity': { name: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' };
    'analytics': { name: 'Analytics & BI', icon: <BarChart3 className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' };
    'cloud': { name: 'Cloud & Infrastructure', icon: <Cloud className="w-6 h-6" />, color: 'from-sky-500 to-blue-500' };
    'micro-saas': { name: 'Micro SAAS', icon: <Code className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' };
  };
  const services = [;
    //[^;]*
    {;
      id: 'ai-quantum-hybrid',title: 'AI Quantum Hybrid Platform',description: 'Revolutionary AI-Quantum hybrid platform combining artificial intelligence with quantum computing for unprecedented computational power.',category: 'quantum',price: '$49,999 - $199,999',;
      features: ['Quantum-AI IntegrationHybrid Processing', 'Advanced MLReal-time Optimization'],;
      icon: <Atom className="w-8 h-8" />,color: 'from-purple-500 to-pink-500',link: '/services/ai-quantum-hybrid-platform',featured: true;
    };
    {;
      id: 'ai-devops-automation',title: 'AI DevOps Automation Platform',description: 'AI-powered DevOps automation platform that transforms software development, deployment, and operations with intelligent automation.',;
      category: 'devops',price: '$29,999 - $119,999',;
      features: ['AI Code ReviewSmart CI/CD', 'Predictive MonitoringAuto-scaling'],;
      icon: <Workflow className="w-8 h-8" />,color: 'from-blue-500 to-cyan-500',link: '/services/ai-devops-automation-platform',featured: true;
    };
    {;
      id: 'ai-business-intelligence',title: 'AI Business Intelligence Analytics',description: 'Revolutionary AI-powered business intelligence and analytics platform that transforms data into actionable insights.',category: 'analytics',price: '$19,999 - $79,999',;
      features: ['Predictive AnalyticsReal-time Insights', 'AI-powered ReportsCustom Dashboards'],;
      icon: <BarChart3 className="w-8 h-8" />,color: 'from-green-500 to-emerald-500',link: '/services/ai-business-intelligence-analytics',featured: true;
    };
    {;
      id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that orchestrates complex business processes with AI-driven decision making.',category: 'ai-ml',price: '$24,999 - $99,999',;
      features: ['Process AutomationAI Decision Making', 'Workflow OptimizationReal-time Monitoring'],;
      icon: <Brain className="w-8 h-8" />,color: 'from-purple-500 to-indigo-500',link: '/services/ai-workflow-orchestrator',featured: false;
    };
    {;
      id: 'ai-data-governance',title: 'AI Data Governance Platform',description: 'Comprehensive AI-powered data governance platform ensuring data quality, compliance, and security.',;
      category: 'ai-ml',price: '$34,999 - $129,999',;
      features: ['Data QualityCompliance Management', 'AI MonitoringSecurity Controls'],;
      icon: <Shield className="w-8 h-8" />,color: 'from-indigo-500 to-purple-500',link: '/services/ai-data-governance-platform',featured: false;
    };
    {;
      id: 'ai-customer-experience',title: 'AI Customer Experience Analytics',description: 'Advanced AI-powered customer experience analytics platform for deep customer insights and optimization.',category: 'analytics',price: '$22,999 - $89,999',;
      features: ['Customer InsightsBehavior Analysis', 'Predictive ModelingExperience Optimization'],;
      icon: <Users className="w-8 h-8" />,color: 'from-pink-500 to-rose-500',link: '/services/ai-customer-experience-analytics',featured: false;
    };
    {;
      id: 'ai-financial-risk',title: 'AI Financial Risk Management',description: 'Intelligent financial risk management platform using AI to predict and mitigate financial risks.',category: 'ai-ml',price: '$39,999 - $149,999',;
      features: ['Risk AssessmentPredictive Modeling', 'Real-time MonitoringCompliance Reporting'],;
      icon: <TrendingUp className="w-8 h-8" />,color: 'from-emerald-500 to-teal-500',link: '/services/ai-financial-risk-management',featured: false;
    };
    {;
      id: 'ai-code-review-security',title: 'AI Code Review Security Scanner',description: 'Advanced AI-powered code review and security scanning platform for automated vulnerability detection.',category: 'cybersecurity',price: '$27,999 - $109,999',;
      features: ['Code AnalysisSecurity Scanning', 'Vulnerability DetectionAutomated Reviews'],;
      icon: <Code className="w-8 h-8" />,color: 'from-red-500 to-pink-500',link: '/services/ai-code-review-security-scanner',featured: false;
    };
    {;
      id: 'zero-trust-network',title: 'Zero Trust Network Access',description: 'Modern zero-trust security architecture providing secure access to network resources.',category: 'cybersecurity',price: '$32,999 - $119,999',;
      features: ['Zero TrustIdentity Management', 'Secure AccessNetwork Security'],;
      icon: <Lock className="w-8 h-8" />,color: 'from-orange-500 to-red-500',link: '/services/zero-trust-network-access',featured: false;
    };
    {;
      id: 'cloud-devops',title: 'Cloud DevOps Solutions',description: 'Comprehensive cloud DevOps solutions for modern application development and deployment.',category: 'cloud',price: '$18,999 - $79,999',;
      features: ['Cloud MigrationCI/CD Pipelines', 'Infrastructure as CodeMonitoring'],;
      icon: <Cloud className="w-8 h-8" />,color: 'from-sky-500 to-blue-500',link: '/services/cloud-devops',featured: false;
    };
    {;
      id: 'it-infrastructure',title: 'IT Infrastructure Solutions',description: 'Enterprise-grade IT infrastructure solutions for modern business operations.',category: 'cloud',price: '$25,999 - $99,999',;
      features: ['Infrastructure DesignNetwork Solutions', 'Security Implementation24/7 Support'],;
      icon: <Server className="w-8 h-8" />,color: 'from-slate-500 to-gray-500',link: '/services/it-infrastructure',featured: false;
    };
    {;
      id: 'micro-crm',title: 'Micro CRM Platform',description: 'Lightweight, scalable CRM solution designed for growing businesses and startups.',;
      category: 'micro-saas',price: '$9,999 - $39,999',;
      features: ['Customer ManagementSales Tracking', 'AutomationAnalytics'],;
      icon: <Users className="w-8 h-8" />,color: 'from-blue-500 to-indigo-500',link: '/services/micro-crm',featured: false;
    };
  ];
  const filteredServices = services.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const contactInfo = {;
    phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008, Middletown DE 19709',;
    website: 'https://ziontechgroup.com'
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">;
      <SEO ;
        title="Comprehensive Services Showcase 2029 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group, 2029 services"
      />;

      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-8 border border-cyan-400/30">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">;
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">;
                Comprehensive Services;
              </[^>]*>
              <[^>]*/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Showcase 2029;
              </[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">;
              Experience the future of technology with our revolutionary AI-powered, quantum-secure, ;
              and autonomous business solutions designed to transform industries and drive unprecedented growth.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Started Today;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Us;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filter Section */};
      <section className="py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
            {/* Search */};
            <div className="relative flex-1 max-w-md">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filter */};
            <div className="flex flex-wrap gap-2">;
              {Object.entries(categories).map(([key, category]) => (;
                <button;
                  key={key};
                  onClick={() => setSelectedCategory(key)};
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${;
                    selectedCategory === key;
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 text-gray-300 hover:bg-white/10 hover:border-cyan-400/40'
                  }`};
                >;
                  <div className="flex items-center space-x-2">;
                    {category.icon};
                    <span>{category.name}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary Technology Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose from our comprehensive portfolio of cutting-edge services;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`group cursor-pointer ${;
                  service.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`};
              >;
                <Link to={service.link}>;
                  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 h-full hover-lift">;
                    {service.featured && (;&& (; (
                      <div className="text-center mb-4">;
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">;
                          Featured;
                        </[^>]*>
                      </[^>]*>
                    )};
                    ;
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                      {service.icon};
                    </[^>]*>
                    ;
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">;
                      {service.title};
                    </[^>]*>
                    ;
                    <p className="text-gray-300 mb-6 leading-relaxed">;
                      {service.description};
                    </[^>]*>
                    ;
                    <div className="mb-6">;
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</[^>]*>
                    </[^>]*>
                    ;
                    <ul className="space-y-2 mb-6">;
                      {service.features.slice(0, 3).map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">;
                          <[^>]*/>
                          {feature};
                        </[^>]*>
                      ))};
                    </[^>]*>
                    ;
                    <div className="flex items-center text-cyan-400 group-hover: text-cyan-300 transition-colors duration-300">;
                      <span className="font-semibold">Learn More</[^>]*>
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {filteredServices.length === 0 && (;&& (; (
            <motion.div
              initial={{ opacity: 0 }};
              animate={{ opacity: 1 }};
              className="[^"]*"
            >;
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</[^>]*>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</[^>]*>
              <button;
                onClick={() => {;
                  setSearchTerm('')
                  setSelectedCategory('all'),;
                }};
                className="[^"]*"
              >;
                Clear Filters;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Contact us today to learn how our innovative solutions can drive growth and efficiency;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: 0.1 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Phone</[^>]*>
              <p className="text-gray-300 mb-4">+1 302 464 0950</[^>]*>
              <a ;
                href="tel:+13024640950" ;
                className="[^"]*"
              >;
                Call Now;
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: 0.2 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Email</[^>]*>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com" ;
                className="[^"]*"
              >;
                Send Email;
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: 0.3 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-bold text-white mb-2">Address</[^>]*>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008, Middletown DE 19709</[^>]*>
              <a ;
                href="https: //[^;]*
                target="_blank" ;
                rel="noopener noreferrer" ;
                className="[^"]*"
              >;
                View on Map;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ComprehensiveServicesShowcase2029;