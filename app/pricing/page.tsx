import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Brain, Users, Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingPlans = [
    {
      category: "Micro SAAS Solutions",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      plans: [
        {
          name: "Zion Analytics Pro",
          price: "$299",
          period: "/month",
          description: "Comprehensive analytics platform with advanced reporting",
          features: [
            "Real-time dashboards",
            "Custom reports",
            "Data export capabilities",
            "Team collaboration tools",
            "API integration",
            "Email support"
          ],
          popular: false,
          link: "/zion-analytics-pro"
        },
        {
          name: "Zion Security Shield",
          price: "$599",
          period: "/month",
          description: "Enterprise-grade security monitoring and protection",
          features: [
            "Firewall management",
            "Intrusion detection",
            "Vulnerability scanning",
            "Incident response",
            "24/7 monitoring",
            "Priority support"
          ],
          popular: true,
          link: "/zion-security-shield"
        },
        {
          name: "Zion Cloud Vault",
          price: "$199",
          period: "/month",
          description: "Secure cloud storage and file management",
          features: [
            "Unlimited storage",
            "File encryption",
            "Access controls",
            "Backup automation",
            "Version control",
            "Standard support"
          ],
          popular: false,
          link: "/zion-cloud-vault"
        }
      ]
    },
    {
      category: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      plans: [
        {
          name: "AI Analytics Dashboard Pro",
          price: "$2,999",
          period: "/month",
          description: "Advanced AI-powered analytics with predictive modeling",
          features: [
            "Real-time analytics",
            "Predictive modeling",
            "Custom dashboards",
            "API integration",
            "Machine learning insights",
            "Dedicated support"
          ],
          popular: false,
          link: "/ai-analytics-dashboard-pro"
        },
        {
          name: "AI Content Generation Pro",
          price: "$1,499",
          period: "/month",
          description: "Automated content creation using advanced AI models",
          features: [
            "Multi-language support",
            "Brand voice training",
            "SEO optimization",
            "Content scheduling",
            "Quality assurance",
            "Expert support"
          ],
          popular: true,
          link: "/ai-content-generation-pro"
        },
        {
          name: "AI Cybersecurity Suite Pro",
          price: "$3,999",
          period: "/month",
          description: "Comprehensive AI-driven security monitoring",
          features: [
            "Threat detection",
            "Automated response",
            "Compliance monitoring",
            "24/7 monitoring",
            "Incident management",
            "Premium support"
          ],
          popular: false,
          link: "/ai-cybersecurity-suite-pro"
        }
      ]
    },
    {
      category: "IT Services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      plans: [
        {
          name: "Cloud Infrastructure",
          price: "$1,999",
          period: "/month",
          description: "Scalable cloud solutions with AWS, Azure, and Google Cloud",
          features: [
            "Multi-cloud setup",
            "Auto-scaling",
            "Disaster recovery",
            "24/7 support",
            "Performance monitoring",
            "Security compliance"
          ],
          popular: false,
          link: "/cloud-infrastructure"
        },
        {
          name: "Cybersecurity Solutions",
          price: "$2,499",
          period: "/month",
          description: "Comprehensive security services and compliance",
          features: [
            "Security audits",
            "Penetration testing",
            "Compliance management",
            "Training programs",
            "Incident response",
            "Expert consultation"
          ],
          popular: true,
          link: "/cybersecurity-solutions"
        },
        {
          name: "Web Development",
          price: "$4,999",
          period: "/project",
          description: "Custom web applications and e-commerce solutions",
          features: [
            "Custom development",
            "Responsive design",
            "SEO optimization",
            "Performance tuning",
            "Maintenance support",
            "Training included"
          ],
          popular: false,
          link: "/web-development"
        }
      ]
    },
    {
      category: "5G Solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      plans: [
        {
          name: "5G Implementation",
          price: "$15,999",
          period: "/project",
          description: "Complete 5G network deployment and optimization",
          features: [
            "Network planning",
            "Infrastructure setup",
            "Performance optimization",
            "Training programs",
            "Ongoing support",
            "Compliance certification"
          ],
          popular: false,
          link: "/5g-implementation"
        },
        {
          name: "5G Edge Computing",
          price: "$8,999",
          period: "/month",
          description: "Edge computing solutions for ultra-low latency",
          features: [
            "Edge deployment",
            "Latency optimization",
            "Real-time processing",
            "Monitoring systems",
            "Performance analytics",
            "Expert support"
          ],
          popular: true,
          link: "/5g-edge-computing"
        },
        {
          name: "5G Smart City Solutions",
          price: "$25,999",
          period: "/project",
          description: "IoT and smart city infrastructure powered by 5G",
          features: [
            "IoT integration",
            "Data analytics",
            "Smart sensors",
            "City management",
            "Scalable architecture",
            "Long-term support"
          ],
          popular: false,
          link: "/5g-smart-city-solutions"
        }
      ]
    }
  ];

  const enterpriseFeatures = [
    "Custom pricing based on requirements",
    "Dedicated account manager",
    "24/7 priority support",
    "Custom integrations",
    "SLA guarantees",
    "On-site training and support",
    "Compliance and security audits",
    "Scalable architecture design"
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI, IT & 5G Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, micro SAAS platforms, and 5G implementation. Choose the perfect plan for your business needs."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT solutions cost, micro SAAS pricing, 5G implementation cost, enterprise pricing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All our services come with transparent pricing, 
              no hidden fees, and flexible options to scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
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

        {/* Pricing Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {pricingPlans.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.plans.map((plan, planIndex) => (
                    <div
                      key={planIndex}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 group relative ${
                        plan.popular 
                          ? 'border-cyan-400 ring-2 ring-cyan-400/20 scale-105' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </div>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {plan.description}
                        </p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-cyan-400">
                            {plan.price}
                          </span>
                          <span className="text-gray-400 ml-1">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Link
                          to={plan.link}
                          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                            plan.popular
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/contact"
                          className="w-full py-3 px-6 rounded-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
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

        {/* Enterprise Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Need something custom? We offer tailored enterprise solutions with dedicated support, 
              custom integrations, and flexible pricing based on your specific requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Features</h3>
                <ul className="space-y-2 text-left">
                  {enterpriseFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Additional Benefits</h3>
                <ul className="space-y-2 text-left">
                  {enterpriseFeatures.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you choose the right solution for your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-mono">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-mono">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
