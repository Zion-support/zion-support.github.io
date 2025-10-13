import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy.",
      icon: CpuChipIcon,
      features: [
        "Multi-language content generation",
        "SEO-optimized articles",
        "Brand voice customization",
        "Plagiarism detection",
        "Content scheduling",
        "Analytics dashboard"
      ],
      pricing: {
        starter: { price: 29, period: "month", features: ["10,000 words/month", "5 languages", "Basic templates"] },
        pro: { price: 79, period: "month", features: ["50,000 words/month", "20 languages", "Advanced AI models", "API access"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited words", "All languages", "Custom AI training", "White-label solution"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/ai-content-generator",
      marketPrice: "$29-199/month",
      benefits: [
        "Save 80% content creation time",
        "Increase content output by 500%",
        "Improve SEO rankings",
        "Reduce content costs by 70%"
      ]
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Comprehensive business intelligence platform that provides real-time insights, predictive analytics, and automated reporting.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom report builder",
        "Data integration (50+ sources)",
        "Automated alerts",
        "Mobile app included"
      ],
      pricing: {
        starter: { price: 49, period: "month", features: ["5 data sources", "Basic reports", "Email support"] },
        pro: { price: 149, period: "month", features: ["25 data sources", "Advanced analytics", "Custom dashboards", "Priority support"] },
        enterprise: { price: 399, period: "month", features: ["Unlimited sources", "AI insights", "Custom integrations", "Dedicated support"] }
      },
      color: "from-cyan-500 to-blue-500",
      href: "/smart-analytics",
      marketPrice: "$49-399/month",
      benefits: [
        "Make data-driven decisions",
        "Identify trends 3x faster",
        "Reduce reporting time by 90%",
        "Increase revenue by 25%"
      ]
    },
    {
      title: "Automated Customer Support Bot",
      description: "AI-powered customer service solution that handles 80% of inquiries automatically with natural language processing.",
      icon: UserGroupIcon,
      features: [
        "24/7 automated responses",
        "Multi-channel support (chat, email, phone)",
        "Sentiment analysis",
        "Escalation to human agents",
        "Knowledge base integration",
        "Performance analytics"
      ],
      pricing: {
        starter: { price: 39, period: "month", features: ["100 conversations/month", "Basic chatbot", "Email support"] },
        pro: { price: 99, period: "month", features: ["1,000 conversations/month", "Advanced AI", "Multi-channel", "Analytics"] },
        enterprise: { price: 249, period: "month", features: ["Unlimited conversations", "Custom AI training", "API access", "Dedicated support"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/customer-support-bot",
      marketPrice: "$39-249/month",
      benefits: [
        "Reduce support costs by 60%",
        "Improve response time by 95%",
        "Increase customer satisfaction",
        "Scale support without hiring"
      ]
    },
    {
      title: "Social Media Management Suite",
      description: "Complete social media automation platform with AI-powered content scheduling, engagement tracking, and performance optimization.",
      icon: GlobeAltIcon,
      features: [
        "Multi-platform posting",
        "AI content suggestions",
        "Engagement tracking",
        "Hashtag optimization",
        "Competitor analysis",
        "ROI measurement"
      ],
      pricing: {
        starter: { price: 19, period: "month", features: ["3 social accounts", "Basic scheduling", "Simple analytics"] },
        pro: { price: 59, period: "month", features: ["10 social accounts", "AI optimization", "Advanced analytics", "Team collaboration"] },
        enterprise: { price: 149, period: "month", features: ["Unlimited accounts", "Custom AI training", "White-label", "API access"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/social-media-suite",
      marketPrice: "$19-149/month",
      benefits: [
        "Save 15 hours/week on social media",
        "Increase engagement by 200%",
        "Grow followers organically",
        "Track ROI effectively"
      ]
    },
    {
      title: "Email Marketing Automation",
      description: "Advanced email marketing platform with AI-driven personalization, automated workflows, and advanced segmentation.",
      icon: EnvelopeIcon,
      features: [
        "AI-powered personalization",
        "Automated email sequences",
        "Advanced segmentation",
        "A/B testing",
        "Deliverability optimization",
        "Revenue tracking"
      ],
      pricing: {
        starter: { price: 25, period: "month", features: ["1,000 contacts", "Basic automation", "Email templates"] },
        pro: { price: 75, period: "month", features: ["10,000 contacts", "Advanced automation", "AI personalization", "Analytics"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited contacts", "Custom AI models", "White-label", "Dedicated support"] }
      },
      color: "from-pink-500 to-rose-500",
      href: "/email-automation",
      marketPrice: "$25-199/month",
      benefits: [
        "Increase open rates by 40%",
        "Boost click-through rates by 60%",
        "Automate 90% of email campaigns",
        "Generate 3x more revenue"
      ]
    },
    {
      title: "Project Management AI",
      description: "Intelligent project management platform that uses AI to optimize workflows, predict delays, and automate task assignments.",
      icon: RocketLaunchIcon,
      features: [
        "AI task prioritization",
        "Automated scheduling",
        "Risk prediction",
        "Resource optimization",
        "Progress tracking",
        "Team collaboration tools"
      ],
      pricing: {
        starter: { price: 35, period: "month", features: ["5 projects", "Basic AI features", "Team of 5", "Email support"] },
        pro: { price: 89, period: "month", features: ["25 projects", "Advanced AI", "Unlimited team", "Priority support"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited projects", "Custom AI training", "API access", "Dedicated support"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/project-management-ai",
      marketPrice: "$35-199/month",
      benefits: [
        "Complete projects 30% faster",
        "Reduce project delays by 50%",
        "Improve team productivity",
        "Better resource utilization"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications." />
        <meta name="keywords" content="micro SaaS, business automation, AI tools, productivity software, business solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful, focused applications that solve specific business challenges with AI-powered automation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our micro SaaS solutions are designed to be immediately useful, highly scalable, 
              and cost-effective alternatives to expensive enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-lg font-bold text-white">${details.price}</div>
                        <div className="text-xs text-gray-400">/{details.period}</div>
                        <div className="text-xs text-gray-300 capitalize">{plan}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compared to traditional enterprise software, our micro SaaS solutions offer better value, 
              faster implementation, and more focused functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Save up to 80% compared to enterprise solutions. No hidden fees, 
                transparent pricing, and pay only for what you use.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get started in minutes, not months. Our solutions are designed 
                for immediate deployment and instant value.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security with 99.9% uptime guarantee. 
                Your data is protected with industry-standard encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose from our suite of micro SaaS solutions or let us build a custom solution for your specific needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}