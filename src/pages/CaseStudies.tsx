import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import {
  Target;
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight;
  Star;
  CheckCircle;
  Building;
  Heart;
  Scale;
  Rocket;
  Globe;
  Leaf;
  Shield;
  Brain;
  Cloud;
  Database;
  Network;
  Zap;
  Award;
  BarChart3;
  Eye;
  Lock;
  Cpu;
  Car
} from "lucide-react";
export default function CaseStudies() {
  const caseStudies = [
  {
  id: 'techcorp-digital-transformation',title: 'TechCorp Inc. - Digital Transformation Success',subtitle: '50% Cost Reduction & 99.9% Uptime',company: 'TechCorp Inc.',industry: 'Manufacturing',challenge: 'Legacy systems causing 40% downtime and $2M annual losses',solution: 'Implemented comprehensive AI-powered automation and cloud infrastructure',results: [
  '50% reduction in operational costs99.9% system uptime achieved';
        '3x faster decision making40% improvement in productivity'
]
      technologies: ['AI AutomationCloud Migration', 'IoT IntegrationPredictive Analytics']
      duration: '6 months',teamSize: '15 engineers',featured: true,color: 'from-blue-500 to-cyan-500',icon: Building,roi: '400%'
},
  {
  id: 'healthplus-ai-revolution',title: 'HealthPlus Systems - AI Healthcare Revolution',subtitle: '30% Diagnostic Accuracy Improvement',company: 'HealthPlus Systems',industry: 'Healthcare',challenge: 'Medical device failures and inefficient patient care processes',solution: 'Developed AI-powered diagnostic tools and digital twin solutions',results: [
  '30% improvement in diagnostic accuracyZero critical device failures';
        '25% improvement in patient outcomes40% reduction in patient wait times'
]
      technologies: ['AI DiagnosticsDigital Twins', 'IoT MonitoringMachine Learning']
      duration: '8 months',teamSize: '12 engineers',featured: true,color: 'from-red-500 to-pink-500',icon: Heart,roi: '350%'
},
  {
  id: 'startupxyz-growth',title: 'StartupXYZ - Rapid Growth Acceleration',subtitle: '10x Faster Market Validation',company: 'StartupXYZ',industry: 'SaaS',challenge: 'Need for rapid scaling and market validation',solution: 'Implemented AI-powered analytics and automated growth tools',results: [
  '10x faster market validation3x increase in user engagement';
        '50% reduction in customer acquisition costsSecured Series A funding in 6 months'
]
      technologies: ['AI AnalyticsGrowth Automation', 'Cloud InfrastructureData Analytics']
      duration: '4 months',teamSize: '8 engineers',featured: true,color: 'from-purple-500 to-indigo-500',icon: Rocket,roi: '500%'
},
  {
  id: 'smartcity-metro',title: 'SmartCity Metro - Urban Infrastructure Optimization',subtitle: '30% Traffic Reduction',company: 'SmartCity Metro',industry: 'Municipal',challenge: 'Traffic congestion and inefficient public services',solution: 'Created city-wide digital twin integrating all infrastructure systems',results: [
  '30% reduction in traffic congestion20% improvement in transit efficiency';
        '15% reduction in energy consumptionImproved citizen satisfaction by 40%'
]
      technologies: ['Digital TwinsIoT Sensors', 'AI AnalyticsSmart Infrastructure']
      duration: '12 months',teamSize: '20 engineers',featured: false,color: 'from-green-500 to-emerald-500',icon: Building,roi: '250%'
},
  {
  id: 'fintech-risk-management',title: 'FinTech Solutions - AI-Powered Risk Management',subtitle: '80% Fraud Reduction',company: 'FinTech Solutions',industry: 'Financial Services',challenge: 'High fraud rates and manual risk assessment processes',solution: 'Implemented AI-powered fraud detection and automated risk assessment',results: [
  '80% reduction in fraud losses90% faster risk assessment';
        'Improved compliance by 95%25% reduction in operational costs'
]
      technologies: ['AI Fraud DetectionMachine Learning', 'BlockchainAutomation']
      duration: '7 months',teamSize: '10 engineers',featured: false,color: 'from-emerald-500 to-green-500',icon: TrendingUp,roi: '300%'
},
  {
  id: 'manufacturing-industry4',title: 'ManufacturingCorp - Industry 4.0 Transformation',subtitle: '60% Quality Improvement',company: 'ManufacturingCorp',industry: 'Manufacturing',challenge: 'Outdated manufacturing processes and quality control issues',solution: 'Implemented comprehensive Industry 4.0 solution with IoT and AI',results: [
  '60% improvement in product quality45% reduction in production time';
        '30% reduction in waste25% increase in production capacity'
]
      technologies: ['IoT SensorsAI Quality Control', 'Predictive MaintenanceAutomation']
      duration: '10 months',teamSize: '18 engineers',featured: false,color: 'from-orange-500 to-red-500',icon: Building,roi: '280%'
},
  ]
  const industries = [
  {{ name: 'Manufacturing', icon: Building, count: 15, color: 'from-blue-500 to-cyan-500' },
  },
  {{ name: 'Healthcare', icon: Heart, count: 12, color: 'from-red-500 to-pink-500' },
  },
  {{ name: 'Financial Services', icon: TrendingUp, count: 8, color: 'from-emerald-500 to-green-500' },
  },
  {{ name: 'Automotive', icon: Car, count: 6, color: 'from-purple-500 to-indigo-500' },
  },
  {{ name: 'Smart Cities', icon: Building, count: 5, color: 'from-green-500 to-emerald-500' },
  },
  {{ name: 'Energy', icon: Zap, count: 4, color: 'from-orange-500 to-red-500' },
  },
  ]
  const testimonials = [
  {
  name: 'Sarah Johnson',role: 'CTO',company: 'TechCorp Inc.',content: 'Zion Tech Group transformed our entire IT infrastructure. The AI-powered automation alone saved us $2M annually.',rating: 5
},
  {
  name: 'Dr. Emily Rodriguez',role: 'Medical Director',company: 'HealthPlus Systems',content: 'The AI diagnostic tools have improved our accuracy by 30% and reduced patient wait times significantly.',rating: 5
},
  {
  name: 'Mike Chen',role: 'Founder & CEO',company: 'StartupXYZ',content: 'Their startup solutions helped us validate our product 10x faster and secure our Series A funding.',rating: 5
},
  ]
  const metrics = [
  {{ label: 'Success Stories', value: '50+', icon: Star },
  },
  {{ label: 'Industries Served', value: '15+', icon: Building },
  },
  {{ label: 'Average ROI', value: '300%', icon: TrendingUp },
  },
  {{ label: 'Client Satisfaction', value: '98%', icon: Users },
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO ;
        title="Case Studies - Zion Tech Group";
        description="Explore real-world success stories from our clients across industries. See how our technology solutions have transformed businesses and delivered measurable results.";
      />
      ;
      {{/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success;
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our technology solutions have transformed businesses across industries;
              delivering measurable results and driving innovation.;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/request-quote";
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25";"
              >
                Start Your Success Story;
              </Link>
              <Link;
                to="/contact";
                className="className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Schedule Consultation;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {{/* Industry Overview */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From manufacturing to healthcare, we've successfully delivered solutions across diverse industries;
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
  <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{industry.name}</h3>
                <p className="text-xs text-cyan-400">{industry.count} case studies</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {{/* Featured Case Studies */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={{ opacity: 0, y: 20 },
  }
            whileInView={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8 },
  }
            viewport={{ once: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Case Studies;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most impactful success stories showcasing the transformative power ;
              of AI and technology solutions.;
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
  <motion.div;
                key={{caseStudy.id},
  }
                initial={{ opacity: 0, y: 20 },
  }
                whileInView={{ opacity: 1, y: 0 },
  }
                transition={{ duration: 0.6, delay: index * 0.1 },
  }
                viewport={{ once: true },
  }
                className="className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden";"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {{/* Left Side - Content */},
  }
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${caseStudy.color}`}>
                        <caseStudy.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{caseStudy.industry}</span>
                      {{caseStudy.featured && <Star className="w-5 h-5 text-cyan-400" />},
  }
                    </div>
                    ;
                    <h3 className="text-3xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <p className="text-xl text-cyan-400 font-semibold mb-4">{caseStudy.subtitle}</p>
                    <p className="text-gray-300 mb-6">{caseStudy.company}</p>
                    ;
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>
                    ;
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{caseStudy.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{caseStudy.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                    ;
                    <Link;
                      to="/request-quote";
                      className="className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium";"
                    >
                      Read Full Case Study;
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  ;
                  {{/* Right Side - Results & Technologies */},
  }
                  <div className="p-8 lg:p-12 bg-slate-700/20">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                    <ul className="space-y-3 mb-6">
                      {caseStudy.results.map((result, resultIndex) => (
  <li key={resultIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                    ;
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, techIndex) => (
  <span;
                          key={{techIndex},
  }
                          className="className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                        >
                          {{tech},
  }
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* Industry Solutions */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div;
            initial={{ opacity: 0, y: 20 },
  }
            whileInView={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8 },
  }
            viewport={{ once: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Across Industries;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've helped businesses in diverse industries achieve remarkable results ;
              through technology transformation.;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
  <motion.div;
                key={{industry.name},
  }
                initial={{ opacity: 0, y: 20 },
  }
                whileInView={{ opacity: 1, y: 0 },
  }
                transition={{ duration: 0.6, delay: index * 0.1 },
  }
                viewport={{ once: true },
  }
                className="className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105";"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} w-fit mb-4`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{industry.count} success stories</p>
                <Link;
                  to="/request-quote";
                  className="className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium";"
                >
                  View Stories;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* All Case Studies Grid */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={{ opacity: 0, y: 20 },
  }
            whileInView={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8 },
  }
            viewport={{ once: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Case Studies;
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of success stories and learn how we can ;
              help transform your business.;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
  <motion.div;
                key={{caseStudy.id},
  }
                initial={{ opacity: 0, y: 20 },
  }
                whileInView={{ opacity: 1, y: 0 },
  }
                transition={{ duration: 0.6, delay: index * 0.1 },
  }
                viewport={{ once: true },
  }
                className="className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:scale-105";"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${caseStudy.color}`}>
                      <caseStudy.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{caseStudy.industry}</span>
                    {{caseStudy.featured && <Star className="w-5 h-5 text-cyan-400" />},
  }
                  </div>
                  ;
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{caseStudy.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4">{caseStudy.company}</p>
                  ;
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Team:</span>
                      <span className="text-white">{caseStudy.teamSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-cyan-400 font-semibold">{caseStudy.roi}</span>
                    </div>
                  </div>
                  ;
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
  <span;
                        key={{techIndex},
  }
                        className="className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md";"
                      >
                        {{tech},
  }
                      </span>
                    ))}
                  </div>
                </div>

                <Link;
                  to="/request-quote";
                  className="className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors";"
                >
                  Learn More;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {{/* Testimonials */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Testimonials;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from our clients about their transformation journey;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
  <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {{/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 },
  }
            whileInView={{ opacity: 1, y: 0 },
  }
            transition={{ duration: 0.8 },
  }
            viewport={{ once: true },
  }
          >
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?;
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-powered technology solutions can transform your business ;
              and deliver measurable results like the success stories you've seen.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link;
                to="/request-quote";
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";"
              >
                Start Your Project;
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link;
                to="/contact";
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Schedule Consultation;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
