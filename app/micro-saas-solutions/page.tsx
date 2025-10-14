import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaaSProducts = [
    {
      title: "AI Content Generator",
      description: "Automated content creation tool for blogs, social media, and marketing materials.",
      icon: DocumentTextIcon,
      features: ["AI-powered writing", "Multiple content types", "SEO optimization", "Brand consistency"],
      color: "from-blue-500 to-purple-500",
      price: "$29/month",
      benefits: ["Save time", "Consistent quality", "SEO optimized", "Scalable content"],
      useCases: ["Blog writing", "Social media", "Email campaigns", "Marketing copy"],
      href: "/ai-content-generator"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting dashboard for business insights.",
      icon: ChartBarIcon,
      features: ["Real-time data", "Custom reports", "Data visualization", "Export capabilities"],
      color: "from-green-500 to-teal-500",
      price: "$49/month",
      benefits: ["Data-driven decisions", "Time savings", "Better insights", "Competitive advantage"],
      useCases: ["Business analytics", "Performance tracking", "KPI monitoring", "Reporting"],
      href: "/analytics-dashboard"
    },
    {
      title: "Customer Support Bot",
      description: "AI-powered chatbot for automated customer support and engagement.",
      icon: ChatBubbleLeftRightIcon,
      features: ["24/7 availability", "Multi-language", "Ticket management", "Analytics"],
      color: "from-pink-500 to-rose-500",
      price: "$39/month",
      benefits: ["Reduced costs", "Better response time", "Scalable support", "Customer satisfaction"],
      useCases: ["Customer service", "Lead generation", "FAQ handling", "Support tickets"],
      href: "/customer-support-bot"
    },
    {
      title: "Project Management Tool",
      description: "Streamlined project management with AI-powered insights and automation.",
      icon: CogIcon,
      features: ["Task management", "Team collaboration", "AI insights", "Progress tracking"],
      color: "from-indigo-500 to-purple-500",
      price: "$59/month",
      benefits: ["Improved productivity", "Better organization", "Team coordination", "Project success"],
      useCases: ["Project planning", "Task tracking", "Team management", "Progress monitoring"],
      href: "/project-management"
    },
    {
      title: "Email Marketing Platform",
      description: "AI-powered email marketing platform with automation and personalization.",
      icon: EnvelopeIcon,
      features: ["Email automation", "Personalization", "A/B testing", "Analytics"],
      color: "from-orange-500 to-red-500",
      price: "$79/month",
      benefits: ["Higher engagement", "Better conversions", "Time savings", "ROI optimization"],
      useCases: ["Email campaigns", "Lead nurturing", "Customer retention", "Marketing automation"],
      href: "/email-marketing"
    },
    {
      title: "Social Media Scheduler",
      description: "AI-powered social media management and scheduling platform.",
      icon: GlobeAltIcon,
      features: ["Multi-platform posting", "Content scheduling", "Analytics", "Engagement tracking"],
      color: "from-cyan-500 to-blue-500",
      price: "$34/month",
      benefits: ["Consistent posting", "Time savings", "Better engagement", "Growth tracking"],
      useCases: ["Social media management", "Content planning", "Brand building", "Audience growth"],
      href: "/social-media-scheduler"
    }
  ];

  const features = [
    "Easy to use interface",
    "Scalable architecture",
    "Regular updates",
    "24/7 support",
    "API integration",
    "Custom branding",
    "Mobile responsive",
    "Secure hosting"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and applications." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, AI applications, productivity software, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powerful, focused tools that solve specific business problems
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed to address specific business challenges with
                AI-powered tools that are easy to use, scalable, and cost-effective.
              </p>
            </div>
          </div>
        </section>

        {/* Micro SaaS Products Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to solve specific business problems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{product.price}</div>
                    <div className="text-gray-400 text-sm">Per month</div>
                  </div>
                  
                  <Link
                    to={product.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our micro SaaS solutions can solve your specific business challenges
              and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;