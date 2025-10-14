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
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: CpuChipIcon,
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Automated Reporting",
        "Machine Learning Models",
        "Natural Language Queries"
      ],
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting time by 80%",
        "Improve forecast accuracy by 40%"
      ],
      industries: ["Finance", "Retail", "Healthcare", "Manufacturing"],
      color: "from-purple-500 to-pink-500",
      href: "/solutions/ai-business-intelligence"
    },
    {
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Compliance Management",
        "Security Training",
        "Incident Response"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve 100% compliance",
        "Cut security costs by 50%"
      ],
      industries: ["Banking", "Government", "Healthcare", "Technology"],
      color: "from-cyan-500 to-blue-500",
      href: "/solutions/enterprise-cybersecurity"
    },
    {
      title: "Cloud Infrastructure Optimization",
      description: "Maximize performance and minimize costs with our cloud management solutions.",
      icon: CloudIcon,
      features: [
        "Multi-cloud Management",
        "Cost Optimization",
        "Auto-scaling",
        "Disaster Recovery",
        "Performance Monitoring"
      ],
      benefits: [
        "Reduce cloud costs by 35%",
        "Improve uptime to 99.9%",
        "Scale resources automatically"
      ],
      industries: ["E-commerce", "SaaS", "Media", "Gaming"],
      color: "from-green-500 to-emerald-500",
      href: "/solutions/cloud-optimization"
    },
    {
      title: "Digital Transformation Platform",
      description: "Modernize your business processes with our comprehensive digital transformation solutions.",
      icon: ChartBarIcon,
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Change Management",
        "Technology Integration",
        "Performance Analytics"
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Reduce manual errors by 85%",
        "Accelerate time-to-market by 50%"
      ],
      industries: ["Manufacturing", "Logistics", "Real Estate", "Education"],
      color: "from-yellow-500 to-orange-500",
      href: "/solutions/digital-transformation"
    },
    {
      title: "Micro SaaS Development",
      description: "Build and deploy custom micro SaaS applications tailored to your specific business needs.",
      icon: GlobeAltIcon,
      features: [
        "Rapid Prototyping",
        "Custom Development",
        "API Integration",
        "User Management",
        "Payment Processing"
      ],
      benefits: [
        "Launch products 3x faster",
        "Reduce development costs by 70%",
        "Scale with your business"
      ],
      industries: ["Startups", "SMBs", "Consulting", "Professional Services"],
      color: "from-pink-500 to-rose-500",
      href: "/solutions/micro-saas"
    },
    {
      title: "5G Technology Solutions",
      description: "Leverage next-generation 5G technology for enhanced connectivity and IoT applications.",
      icon: RocketLaunchIcon,
      features: [
        "5G Network Planning",
        "IoT Integration",
        "Edge Computing",
        "Real-time Applications",
        "Smart City Solutions"
      ],
      benefits: [
        "Enable ultra-low latency applications",
        "Support massive IoT deployments",
        "Improve network efficiency by 90%"
      ],
      industries: ["Telecommunications", "Smart Cities", "Automotive", "Agriculture"],
      color: "from-indigo-500 to-purple-500",
      href: "/solutions/5g-technology"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient management, and medical research solutions",
      icon: UserGroupIcon,
      solutions: ["AI Diagnostics", "Patient Analytics", "Medical Imaging", "Drug Discovery"]
    },
    {
      name: "Financial Services",
      description: "Advanced fraud detection, risk management, and algorithmic trading solutions",
      icon: BuildingOfficeIcon,
      solutions: ["Fraud Detection", "Risk Analytics", "Algorithmic Trading", "Compliance"]
    },
    {
      name: "Education",
      description: "Personalized learning, student analytics, and educational technology platforms",
      icon: AcademicCapIcon,
      solutions: ["Learning Analytics", "Personalized Education", "Student Management", "Assessment Tools"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: ChartBarIcon,
      solutions: ["Predictive Maintenance", "Quality Control", "Supply Chain AI", "Process Optimization"]
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Retailer",
      challenge: "Needed to optimize inventory management and reduce waste across 500+ stores",
      solution: "Implemented AI-powered demand forecasting and automated replenishment system",
      results: [
        "35% reduction in inventory costs",
        "50% decrease in stockouts",
        "25% improvement in profit margins"
      ],
      industry: "Retail"
    },
    {
      title: "Regional Healthcare System",
      challenge: "Required secure, HIPAA-compliant patient data management and analytics",
      solution: "Deployed comprehensive cybersecurity suite with AI-powered threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "90% reduction in security incidents",
        "60% faster threat response time"
      ],
      industry: "Healthcare"
    },
    {
      title: "Global Manufacturing Company",
      challenge: "Needed to modernize legacy systems and improve operational efficiency",
      solution: "Implemented digital transformation platform with process automation",
      results: [
        "40% increase in production efficiency",
        "70% reduction in manual processes",
        "50% faster time-to-market for new products"
      ],
      industry: "Manufacturing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI and IT solutions designed to transform businesses across various industries." />
        <meta name="keywords" content="AI solutions, IT solutions, business intelligence, cybersecurity, cloud computing, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our cutting-edge AI and IT solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From artificial intelligence to cybersecurity, we provide end-to-end technology 
              solutions that drive innovation, efficiency, and growth across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to address your specific business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 p-8"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, industryIndex) => (
                        <span 
                          key={industryIndex}
                          className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={solution.href}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions tailored to the unique needs of different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={industry.name}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Solutions:</h4>
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients who have transformed their businesses with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.title}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8"
              >
                <div className="mb-6">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-3 text-gray-300">
                        <StarIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our solutions can address your specific challenges and drive measurable results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Solution
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
          </div>
        </div>
      </section>
    </>
  );
}