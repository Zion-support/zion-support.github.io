import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaasSolutions = [
    {
      title: "AI Content Generator",
      description: "Automated content creation tool for blogs, social media, and marketing materials.",
      icon: CpuChipIcon,
      features: [
        "AI-powered writing",
        "Multiple content types",
        "SEO optimization",
        "Brand voice customization"
      ],
      pricing: "$29/month",
      setupFee: "$500",
      benefits: ["Save 80% time", "Consistent quality", "SEO optimized"],
      useCases: ["Blog writing", "Social media", "Marketing copy"],
      href: "/ai-content-generator"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting solution for small to medium businesses.",
      icon: ChartBarIcon,
      features: [
        "Real-time analytics",
        "Custom reports",
        "Data visualization",
        "Automated insights"
      ],
      pricing: "$49/month",
      setupFee: "$800",
      benefits: ["Data-driven decisions", "Time savings", "Better insights"],
      useCases: ["E-commerce", "Marketing", "Operations"],
      href: "/analytics-dashboard"
    },
    {
      title: "Customer Support Bot",
      description: "AI-powered chatbot for automated customer support and lead qualification.",
      icon: ShieldCheckIcon,
      features: [
        "24/7 availability",
        "Natural language processing",
        "Lead qualification",
        "Integration capabilities"
      ],
      pricing: "$39/month",
      setupFee: "$600",
      benefits: ["Instant responses", "Cost reduction", "Better customer experience"],
      useCases: ["E-commerce", "SaaS", "Service businesses"],
      href: "/customer-support-bot"
    },
    {
      title: "Project Management Tool",
      description: "Streamlined project management with AI-powered task prioritization and team collaboration.",
      icon: GlobeAltIcon,
      features: [
        "Task management",
        "Team collaboration",
        "AI prioritization",
        "Progress tracking"
      ],
      pricing: "$19/month",
      setupFee: "$300",
      benefits: ["Better organization", "Team efficiency", "Project visibility"],
      useCases: ["Remote teams", "Agencies", "Startups"],
      href: "/project-management"
    },
    {
      title: "Email Marketing Automation",
      description: "Advanced email marketing platform with AI-driven personalization and automation.",
      icon: RocketLaunchIcon,
      features: [
        "Email automation",
        "AI personalization",
        "A/B testing",
        "Analytics & reporting"
      ],
      pricing: "$59/month",
      setupFee: "$900",
      benefits: ["Higher open rates", "Better engagement", "Automated workflows"],
      useCases: ["E-commerce", "SaaS", "Digital marketing"],
      href: "/email-marketing"
    },
    {
      title: "Event Management System",
      description: "Complete event management solution with AI-powered attendee insights and optimization.",
      icon: CloudIcon,
      features: [
        "Event planning",
        "Attendee management",
        "AI insights",
        "Integration tools"
      ],
      pricing: "$79/month",
      setupFee: "$1,200",
      benefits: ["Better engagement", "Optimized planning", "Success metrics"],
      useCases: ["Conferences", "Webinars", "Corporate events"],
      href: "/ai-event-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business automation, AI tools, productivity software, custom applications" />
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
                Powerful, focused applications that solve specific business challenges
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed to be lightweight, cost-effective, 
                and highly specialized tools that deliver immediate value to your business.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {microSaasSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div 
                    key={solution.title}
                    className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-green-400">{solution.pricing}</span>
                        <span className="text-sm text-gray-400">Setup: {solution.setupFee}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={solution.href}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                      >
                        Learn More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-semibold px-4 py-2 rounded-lg transition-all"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                We can build a custom micro SaaS solution tailored to your specific business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Discuss Your Project
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}