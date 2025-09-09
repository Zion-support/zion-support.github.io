import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Building,
  Globe,
  Shield,
  Cloud,
  Brain,
  Zap,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Company Achieves 300% ROI with AI-Powered Digital Transformation",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Outdated legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Comprehensive AI-powered digital transformation including process automation, predictive maintenance, and real-time analytics",
      results: [
        "300% ROI within 18 months",
        "40% increase in operational efficiency",
        "60% reduction in downtime",
        "$2.5M annual cost savings"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Process Automation"],
      duration: "18 months",
      teamSize: "15 specialists",
      featured: true,
      image: "/images/case-studies/manufacturing-transformation.jpg"
    },
    {
      id: 2,
      title: "Healthcare Network Reduces Patient Wait Times by 65% Using AI-Powered Scheduling",
      client: "Metro Health Network",
      industry: "Healthcare",
      challenge: "Inefficient patient scheduling leading to 2+ hour wait times and 30% patient dissatisfaction",
      solution: "AI-driven appointment scheduling system with predictive analytics and resource optimization",
      results: [
        "65% reduction in patient wait times",
        "40% improvement in resource utilization",
        "85% increase in patient satisfaction scores",
        "25% reduction in no-show appointments"
      ],
      technologies: ["AI Scheduling", "Predictive Analytics", "Resource Optimization", "Patient Portal"],
      duration: "12 months",
      teamSize: "8 specialists",
      featured: false,
      image: "/images/case-studies/healthcare-scheduling.jpg"
    },
    {
      id: 3,
      title: "Financial Services Firm Enhances Security with AI-Powered Threat Detection",
      client: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and false positives overwhelming security team, causing 24+ hour response times",
      solution: "AI autonomous security platform with real-time threat detection and automated incident response",
      results: [
        "99.9% threat detection accuracy",
        "90% reduction in false positives",
        "95% faster incident response time",
        "Zero successful breaches in 2 years"
      ],
      technologies: ["AI Security", "Threat Detection", "Automated Response", "Zero Trust"],
      duration: "14 months",
      teamSize: "12 specialists",
      featured: false,
      image: "/images/case-studies/financial-security.jpg"
    },
    {
      id: 4,
      title: "Retail Chain Increases Sales by 45% with AI-Powered Customer Analytics",
      client: "SmartRetail Inc",
      industry: "Retail",
      challenge: "Lack of customer insights leading to poor inventory management and missed sales opportunities",
      solution: "AI-powered customer analytics platform with personalized recommendations and demand forecasting",
      results: [
        "45% increase in sales revenue",
        "35% improvement in inventory turnover",
        "60% increase in customer retention",
        "25% reduction in stockouts"
      ],
      technologies: ["Customer Analytics", "Demand Forecasting", "Personalization", "Inventory Management"],
      duration: "10 months",
      teamSize: "10 specialists",
      featured: false,
      image: "/images/case-studies/retail-analytics.jpg"
    },
    {
      id: 5,
      title: "Energy Company Reduces Operational Costs by 35% with IoT and AI Integration",
      client: "GreenEnergy Solutions",
      industry: "Energy",
      challenge: "Inefficient energy distribution and maintenance causing 25% operational waste and high costs",
      solution: "IoT sensor network with AI-powered predictive maintenance and energy optimization",
      results: [
        "35% reduction in operational costs",
        "50% improvement in energy efficiency",
        "80% reduction in unplanned downtime",
        "30% increase in renewable energy utilization"
      ],
      technologies: ["IoT Sensors", "AI Analytics", "Predictive Maintenance", "Energy Optimization"],
      duration: "16 months",
      teamSize: "18 specialists",
      featured: false,
      image: "/images/case-studies/energy-optimization.jpg"
    },
    {
      id: 6,
      title: "Logistics Company Improves Delivery Efficiency by 55% with AI Route Optimization",
      client: "FastLogistics Corp",
      industry: "Logistics",
      challenge: "Inefficient route planning causing 30% fuel waste and 2+ hour delivery delays",
      solution: "AI-powered route optimization system with real-time traffic analysis and dynamic rerouting",
      results: [
        "55% improvement in delivery efficiency",
        "40% reduction in fuel costs",
        "70% reduction in delivery delays",
        "25% increase in customer satisfaction"
      ],
      technologies: ["Route Optimization", "Real-time Analytics", "Traffic Analysis", "Mobile Apps"],
      duration: "11 months",
      teamSize: "9 specialists",
      featured: false,
      image: "/images/case-studies/logistics-optimization.jpg"
    }
  ];

  const industries = [
    { name: "All Industries", count: caseStudies.length, active: true },
    { name: "Manufacturing", count: 1, active: false },
    { name: "Healthcare", count: 1, active: false },
    { name: "Financial Services", count: 1, active: false },
    { name: "Retail", count: 1, active: false },
    { name: "Energy", count: 1, active: false },
    { name: "Logistics", count: 1, active: false }
  ];

  const technologies = [
    "AI/ML", "IoT", "Cloud Computing", "Cybersecurity", "Data Analytics", 
    "Process Automation", "Predictive Analytics", "Mobile Solutions"
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Client Success Stories - AI & Digital Transformation"
        description="Discover how we've helped organizations across industries achieve remarkable results through innovative technology solutions. Read our case studies."
        keywords="AI, digital transformation, case studies, success stories, client results, ROI, operational efficiency, cybersecurity, IoT, cloud computing"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Success Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped organizations across industries achieve 
              remarkable results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Start Your Success Story
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((industry, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                industry.active
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {industry.name} ({industry.count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Success Story
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Building className="h-8 w-8 text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {featuredCaseStudy.client}
                    </h3>
                    <p className="text-slate-400">{featuredCaseStudy.industry}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white leading-tight">
                  {featuredCaseStudy.title}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-cyan-400 font-medium mb-2">Challenge</h5>
                    <p className="text-slate-300">{featuredCaseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-cyan-400 font-medium mb-2">Solution</h5>
                    <p className="text-slate-300">{featuredCaseStudy.solution}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredCaseStudy.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {featuredCaseStudy.teamSize} specialists
                  </span>
                </div>
                
                <Link
                  to={`/case-studies/${featuredCaseStudy.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-700/30 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <Building className="h-16 w-16 mx-auto mb-4" />
                    <p>Case Study Image</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-cyan-400 font-medium mb-3">Key Results</h5>
                  <div className="space-y-2">
                    {featuredCaseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-cyan-400 font-medium mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {featuredCaseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.filter(study => !study.featured).map((study, index) => (
            <article
              key={study.id}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-slate-700/30 h-48 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Building className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Case Study Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {study.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium text-sm mb-2">Challenge</h4>
                  <p className="text-slate-300 text-sm line-clamp-2">
                    {study.challenge}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium text-sm mb-2">Key Results</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {study.teamSize} specialists
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <p className="text-slate-300">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <p className="text-slate-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-slate-300">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$100M+</div>
              <p className="text-slate-300">Client Value Generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you achieve similar results. 
            Contact us to discuss how we can transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
