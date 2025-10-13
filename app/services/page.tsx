import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Cloud, Lock, BarChart3, Users, Settings, Target, TrendingUp, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Analytics Dashboard Pro",
          description: "Advanced AI-powered analytics with real-time insights and predictive modeling",
          price: "Starting at $2,999/month",
          features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
          link: "/ai-analytics-dashboard-pro"
        },
        {
          name: "AI Content Generation Pro",
          description: "Automated content creation using advanced AI models for marketing and communications",
          price: "Starting at $1,499/month",
          features: ["Multi-language support", "Brand voice training", "SEO optimization", "Content scheduling"],
          link: "/ai-content-generation-pro"
        },
        {
          name: "AI Cybersecurity Suite Pro",
          description: "Comprehensive AI-driven security monitoring and threat detection",
          price: "Starting at $3,999/month",
          features: ["Threat detection", "Automated response", "Compliance monitoring", "24/7 monitoring"],
          link: "/ai-cybersecurity-suite-pro"
        },
        {
          name: "AI Business Intelligence Pro",
          description: "Advanced business intelligence with AI-powered insights and recommendations",
          price: "Starting at $2,499/month",
          features: ["Data visualization", "Trend analysis", "Custom reports", "Integration support"],
          link: "/ai-business-intelligence-pro"
        }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions for immediate business impact",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Zion Analytics Pro",
          description: "Comprehensive analytics platform with advanced reporting and visualization",
          price: "Starting at $299/month",
          features: ["Real-time dashboards", "Custom reports", "Data export", "Team collaboration"],
          link: "/zion-analytics-pro"
        },
        {
          name: "Zion Security Shield",
          description: "Enterprise-grade security monitoring and threat protection",
          price: "Starting at $599/month",
          features: ["Firewall management", "Intrusion detection", "Vulnerability scanning", "Incident response"],
          link: "/zion-security-shield"
        },
        {
          name: "Zion Cloud Vault",
          description: "Secure cloud storage and file management solution",
          price: "Starting at $199/month",
          features: ["Unlimited storage", "File encryption", "Access controls", "Backup automation"],
          link: "/zion-cloud-vault"
        },
        {
          name: "Zion Content Studio",
          description: "AI-powered content creation and management platform",
          price: "Starting at $399/month",
          features: ["Content generation", "Brand guidelines", "Collaboration tools", "Publishing automation"],
          link: "/zion-content-studio"
        }
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive technology infrastructure and development services",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Cloud Infrastructure",
          description: "Scalable cloud solutions with AWS, Azure, and Google Cloud",
          price: "Starting at $1,999/month",
          features: ["Multi-cloud setup", "Auto-scaling", "Disaster recovery", "24/7 support"],
          link: "/cloud-infrastructure"
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive security services including penetration testing and compliance",
          price: "Starting at $2,499/month",
          features: ["Security audits", "Penetration testing", "Compliance management", "Training programs"],
          link: "/cybersecurity-solutions"
        },
        {
          name: "Web Development",
          description: "Custom web applications and e-commerce solutions",
          price: "Starting at $4,999/project",
          features: ["Custom development", "Responsive design", "SEO optimization", "Performance tuning"],
          link: "/web-development"
        },
        {
          name: "Mobile Development",
          description: "Native and cross-platform mobile applications",
          price: "Starting at $6,999/project",
          features: ["iOS & Android", "Cross-platform", "App store optimization", "Maintenance support"],
          link: "/mobile-development"
        }
      ]
    },
    {
      title: "5G & Next-Gen Solutions",
      description: "Advanced 5G implementation and next-generation connectivity services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "5G Implementation",
          description: "Complete 5G network deployment and optimization services",
          price: "Starting at $15,999/project",
          features: ["Network planning", "Infrastructure setup", "Performance optimization", "Training"],
          link: "/5g-implementation"
        },
        {
          name: "5G Edge Computing",
          description: "Edge computing solutions for ultra-low latency applications",
          price: "Starting at $8,999/month",
          features: ["Edge deployment", "Latency optimization", "Real-time processing", "Monitoring"],
          link: "/5g-edge-computing"
        },
        {
          name: "5G Smart City Solutions",
          description: "IoT and smart city infrastructure powered by 5G technology",
          price: "Starting at $25,999/project",
          features: ["IoT integration", "Data analytics", "Smart sensors", "City management"],
          link: "/5g-smart-city-solutions"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & 5G Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, micro SAAS platforms, and 5G implementation services. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, 5G implementation, cloud infrastructure, cybersecurity, web development, mobile apps"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to 5G implementation, we provide everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          Contact for custom enterprise pricing
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/contact"
                          className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized solution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-mono">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-mono">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
