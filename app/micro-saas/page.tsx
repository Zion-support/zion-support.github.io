import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: "AI-Powered Project Management",
      description: "Streamline your projects with intelligent task management, automated scheduling, and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      features: ["Smart task prioritization", "Automated reporting", "Team collaboration", "AI insights"],
      link: "/project-management"
    },
    {
      title: "Customer Relationship Manager",
      description: "Build stronger relationships with AI-driven customer insights and automated follow-ups.",
      icon: <Users className="w-8 h-8" />,
      price: "From $39/month",
      features: ["Contact management", "Sales pipeline", "Email automation", "Analytics dashboard"],
      link: "/customer-relationship"
    },
    {
      title: "Smart Inventory Optimizer",
      description: "Optimize your inventory with predictive analytics and automated reordering.",
      icon: <Database className="w-8 h-8" />,
      price: "From $49/month",
      features: ["Demand forecasting", "Auto reordering", "Cost optimization", "Real-time tracking"],
      link: "/inventory-management"
    },
    {
      title: "Financial Management Suite",
      description: "Complete financial management with AI-powered insights and automated bookkeeping.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $59/month",
      features: ["Expense tracking", "Invoice generation", "Tax preparation", "Financial reports"],
      link: "/financial-management"
    },
    {
      title: "Employee Management System",
      description: "Streamline HR processes with automated workflows and employee self-service portal.",
      icon: <Users className="w-8 h-8" />,
      price: "From $35/month",
      features: ["Time tracking", "Payroll management", "Performance reviews", "Benefits administration"],
      link: "/employee-management"
    },
    {
      title: "Social Media Manager",
      description: "Manage all your social media accounts with AI-powered content creation and scheduling.",
      icon: <Globe className="w-8 h-8" />,
      price: "From $25/month",
      features: ["Content calendar", "Auto posting", "Analytics", "Engagement tracking"],
      link: "/social-media-management"
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks and make data-driven decisions.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Cloud-Based Solutions",
      description: "Access your tools from anywhere with secure, scalable cloud infrastructure.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Real-Time Analytics",
      description: "Get instant insights into your business performance with comprehensive dashboards.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and data protection.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase productivity by 40%",
    "Automate 80% of routine tasks",
    "Scale your business without scaling your team",
    "Access from anywhere, anytime",
    "24/7 customer support"
  ];

  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Businesses Served", value: "2,500+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Customer Satisfaction", value: "98%" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for small and medium businesses. AI-powered tools for project management, CRM, inventory, and more." />
        <meta name="keywords" content="micro saas, business software, project management, CRM, inventory management, small business tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, affordable software solutions designed specifically for small and medium businesses. 
                Streamline your operations with AI-powered tools that grow with your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed to be powerful yet simple, 
                giving you enterprise-level capabilities without the complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business tools designed to streamline 
                your operations and boost productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{product.price}</div>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={product.link}>
                    <FuturisticButton className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our micro SAAS solutions help you automate processes, reduce costs, 
                  and focus on what matters most - growing your business.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Free Trial</h4>
                      <p className="text-gray-300">Try any of our products free for 14 days with full access to all features.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">No Setup Fees</h4>
                      <p className="text-gray-300">Get started immediately with no upfront costs or hidden fees.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                      <p className="text-gray-300">Get help from our team of experts whenever you need it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and experience the power of our micro SAAS solutions. 
                No credit card required, no long-term commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/case-studies">
                  <FuturisticButton variant="outline" size="lg">
                    View Success Stories
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;