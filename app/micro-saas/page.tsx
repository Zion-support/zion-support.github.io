import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Users, Award, Clock, DollarSign, Sparkles, Brain, Code, Database, Mail, Phone, Globe, Lock, Cpu, Layers, FileText, Search, Bot, Target, TrendingUp, Heart, Package, Receipt } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "Real-time data visualization",
        "Predictive analytics & forecasting",
        "Automated report generation",
        "Custom dashboard creation",
        "Multi-source data integration",
        "Advanced filtering & segmentation",
        "Export to multiple formats",
        "API access & webhooks"
      ],
      benefits: [
        "Make data-driven decisions",
        "Reduce reporting time by 80%",
        "Identify growth opportunities",
        "Improve operational efficiency",
        "Scale with your business"
      ],
      link: "/zion-analytics-pro",
      featured: true,
      category: "Analytics"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI-powered threat detection",
        "Real-time security monitoring",
        "Automated incident response",
        "Compliance reporting",
        "Vulnerability scanning",
        "Security awareness training",
        "24/7 security operations center",
        "Custom security policies"
      ],
      benefits: [
        "Protect against cyber threats",
        "Ensure compliance requirements",
        "Reduce security incidents by 90%",
        "Minimize downtime and losses",
        "Maintain customer trust"
      ],
      link: "/zion-security-shield",
      featured: true,
      category: "Security"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "End-to-end encryption",
        "Unlimited storage capacity",
        "Advanced file sharing",
        "Version control & history",
        "Collaborative editing",
        "Mobile app access",
        "API integration",
        "Automated backups"
      ],
      benefits: [
        "Secure file storage",
        "Improve team collaboration",
        "Reduce storage costs",
        "Ensure data availability",
        "Scale with your needs"
      ],
      link: "/zion-cloud-vault",
      featured: true,
      category: "Storage"
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive insights",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI-powered lead scoring",
        "Automated follow-up sequences",
        "Predictive customer insights",
        "Sales pipeline management",
        "Email marketing automation",
        "Customer segmentation",
        "Performance analytics",
        "Integration capabilities"
      ],
      benefits: [
        "Increase sales conversion by 40%",
        "Automate repetitive tasks",
        "Improve customer relationships",
        "Gain valuable insights",
        "Scale your sales process"
      ],
      link: "/zion-ai-crm-pro",
      featured: true,
      category: "CRM"
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI content generation",
        "Multi-channel campaigns",
        "Behavioral targeting",
        "A/B testing automation",
        "Lead nurturing sequences",
        "Social media management",
        "Email personalization",
        "Performance optimization"
      ],
      benefits: [
        "Increase marketing ROI by 60%",
        "Personalize customer experiences",
        "Automate campaign management",
        "Improve conversion rates",
        "Scale marketing efforts"
      ],
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      category: "Marketing"
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting",
      price: "From $99/month",
      icon: <Layers className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Risk prediction & mitigation",
        "Automated reporting",
        "Team collaboration tools",
        "Time tracking & billing",
        "Integration with popular tools",
        "Custom workflow creation"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Improve resource utilization",
        "Reduce project risks",
        "Enhance team productivity",
        "Deliver on time and budget"
      ],
      link: "/zion-ai-project-manager-pro",
      featured: true,
      category: "Project Management"
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: microSaasProducts.length },
    { id: "Analytics", name: "Analytics", count: microSaasProducts.filter(p => p.category === "Analytics").length },
    { id: "Security", name: "Security", count: microSaasProducts.filter(p => p.category === "Security").length },
    { id: "Storage", name: "Storage", count: microSaasProducts.filter(p => p.category === "Storage").length },
    { id: "CRM", name: "CRM", count: microSaasProducts.filter(p => p.category === "CRM").length },
    { id: "Marketing", name: "Marketing", count: microSaasProducts.filter(p => p.category === "Marketing").length },
    { id: "Project Management", name: "Project Management", count: microSaasProducts.filter(p => p.category === "Project Management").length }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis process. We can now make informed decisions in real-time and our productivity has increased by 60%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group's micro SAAS solutions are our trusted partners for all business needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Ready-to-Use Business Software | Zion Tech Group"
        description="Comprehensive collection of micro SAAS solutions including analytics, security, CRM, marketing automation, and project management tools. Deploy instantly and scale your business."
        keywords="micro SAAS, business software, analytics, CRM, marketing automation, project management, cloud solutions, business tools"
        canonical="https://ziontechgroup.com/micro-saas"
        author="Zion Tech Group"
        section="Micro SAAS"
        tags={["Micro SAAS", "Business Software", "Analytics", "CRM", "Marketing", "Project Management"]}
        readingTime={6}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Deploy powerful business software instantly. Our micro SAAS solutions are ready-to-use, 
            fully integrated, and designed to scale with your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular micro SAAS solutions designed to solve common business challenges 
              and accelerate your growth with minimal setup time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <FuturisticCard key={product.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  {product.featured && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <FuturisticButton
                      href={product.link}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full"
                    >
                      Learn More
                    </FuturisticButton>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about using our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
            Deploy instantly and start seeing results today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
