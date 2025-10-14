import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor, Video, FileText, Brain, Mail, Eye, TrendingUp, Target, Settings, Package, Receipt, Calculator, DollarSign, Phone } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Multi-source data integration"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-analytics-pro",
      price: "$99/month",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution for small to medium businesses",
      features: [
        "24/7 threat monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Security compliance reporting",
        "Employee training modules"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-security-shield",
      price: "$149/month",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Team collaboration",
        "Cross-platform sync"
      ],
      icon: <Cloud className="w-8 h-8" />,
      href: "/zion-cloud-vault",
      price: "$79/month",
      featured: true
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator",
      description: "Create professional videos from text prompts using advanced AI models",
      features: [
        "Text-to-video generation",
        "Multiple video styles and templates",
        "Custom branding integration",
        "HD and 4K output quality",
        "Multi-platform export"
      ],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      price: "$29/month",
      featured: true
    },
    {
      id: "zion-ai-invoice-generator",
      name: "Zion AI Invoice Generator",
      description: "Generate professional invoices automatically with AI-powered optimization",
      features: [
        "Automatic invoice generation",
        "Smart payment tracking",
        "Multi-currency support",
        "Tax calculation automation",
        "Payment reminders"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      price: "$19/month",
      featured: true
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics with AI-powered insights and sentiment analysis",
      features: [
        "Behavioral pattern analysis",
        "Real-time sentiment analysis",
        "Predictive customer intelligence",
        "Customer segmentation",
        "Churn prediction"
      ],
      icon: <Brain className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      price: "$99/month",
      featured: true
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "Analyze, optimize, and secure emails with AI-powered insights",
      features: [
        "AI-powered email analysis",
        "Smart email optimization",
        "Advanced security scanning",
        "Sentiment analysis",
        "Phishing detection"
      ],
      icon: <Mail className="w-8 h-8" />,
      href: "/zion-ai-email-analyzer",
      price: "$29/month",
      featured: false
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered automation",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer segmentation",
        "Integration capabilities"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      price: "$129/month",
      featured: false
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "Complete marketing automation platform with AI-driven campaign optimization",
      features: [
        "Email marketing automation",
        "Social media scheduling",
        "Lead nurturing workflows",
        "A/B testing",
        "Performance analytics"
      ],
      icon: <Globe className="w-8 h-8" />,
      href: "/zion-ai-marketing-automation-pro",
      price: "$199/month",
      featured: false
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "Smart project management tool with AI-powered resource allocation and timeline optimization",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Timeline forecasting",
        "Team collaboration",
        "Progress tracking"
      ],
      icon: <Award className="w-8 h-8" />,
      href: "/zion-ai-project-manager-pro",
      price: "$159/month",
      featured: false
    }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our suite of micro SAAS solutions designed to streamline your business operations. From analytics to security, we have the tools you need to succeed."
        keywords="micro SAAS, business tools, analytics, security, cloud storage, CRM, project management, AI-powered solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven business tools designed to streamline your operations and accelerate growth. 
              Choose from our suite of specialized micro SAAS solutions.
            </p>
            <FuturisticButton
              href="#products"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully crafted suite of business tools designed for modern enterprises
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <FuturisticCard key={product.id} className="p-6 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">
                    {product.icon}
                  </div>
                  {product.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                </div>
                
                <Link
                  to={product.href}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our micro SAAS solutions.
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey with our micro SAAS solutions today. Choose the perfect tools for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Schedule a Demo
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;