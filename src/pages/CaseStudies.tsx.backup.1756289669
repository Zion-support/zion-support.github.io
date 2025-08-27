import { ArrowRight, Users, TrendingUp, Clock, DollarSign, Globe } from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'Global Retail Corp',
      industry: 'Retail',
      challenge: 'High customer service costs and long response times affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbots and intelligent routing system',
      results: [
        '40% reduction in customer service costs',
        '85% improvement in response time',
        '92% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '6 months',
      investment: '$250,000',
      roi: '320%',
      technologies: ['AI/ML', 'NLP', 'Cloud Computing', 'API Integration']
    },
    {
      id: 2,
      title: 'Cybersecurity Infrastructure Overhaul',
      company: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Outdated security systems vulnerable to modern cyber threats',
      solution: 'Implemented zero-trust architecture with advanced threat detection',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches in 18 months',
        '50% reduction in security incidents',
        'Full compliance with industry regulations'
      ],
      duration: '8 months',
      investment: '$500,000',
      roi: '280%',
      technologies: ['Zero Trust', 'SIEM', 'EDR', 'Threat Intelligence']
    },
    {
      id: 3,
      title: 'Cloud Migration and DevOps Transformation',
      company: 'Tech Startup XYZ',
      industry: 'Technology',
      challenge: 'Legacy infrastructure limiting scalability and deployment speed',
      solution: 'Migrated to cloud-native architecture with CI/CD pipelines',
      results: [
        '90% faster deployment cycles',
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Unlimited scalability for growth'
      ],
      duration: '4 months',
      investment: '$180,000',
      roi: '450%',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform']
    },
    {
      id: 4,
      title: 'Digital Transformation for Manufacturing',
      company: 'Industrial Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing inefficiencies and quality issues',
      solution: 'Implemented IoT sensors and predictive analytics platform',
      results: [
        '25% increase in production efficiency',
        '30% reduction in quality defects',
        'Predictive maintenance preventing 80% of breakdowns',
        'Real-time monitoring and analytics'
      ],
      duration: '10 months',
      investment: '$750,000',
      roi: '180%',
      technologies: ['IoT', 'Big Data', 'Machine Learning', 'Cloud Platform']
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence',
      company: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Fragmented data preventing insights and operational optimization',
      solution: 'Built centralized data warehouse with advanced analytics',
      results: [
        '360-degree patient view achieved',
        '20% improvement in treatment outcomes',
        '15% reduction in operational costs',
        'Real-time reporting and dashboards'
      ],
      duration: '7 months',
      investment: '$400,000',
      roi: '220%',
      technologies: ['Data Warehouse', 'ETL', 'Business Intelligence', 'Data Governance']
    },
    {
      id: 6,
      title: 'Legacy System Modernization',
      company: 'Government Agency',
      industry: 'Government',
      challenge: 'Outdated systems causing service delays and security risks',
      solution: 'Modernized applications with microservices architecture',
      results: [
        '70% faster service delivery',
        'Enhanced security and compliance',
        'Improved citizen experience',
        'Reduced maintenance costs'
      ],
      duration: '12 months',
      investment: '$1,200,000',
      roi: '150%',
      technologies: ['Microservices', 'API Gateway', 'Cloud Native', 'DevOps']
    }
  ];
  const industries = [
    { name: 'Retail', count: 15, icon: TrendingUp },
    { name: 'Finance', count: 12, icon: DollarSign },
    { name: 'Healthcare', count: 8, icon: Users },
    { name: 'Manufacturing', count: 10, icon: TrendingUp },
    { name: 'Technology', count: 20, icon: Globe },
    { name: 'Government', count: 6, icon: Users }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Real-world examples of how we've helped organizations transform their business through innovative technology solutions
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">71+</div>
              <div className="text-zion-slate-dark">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">$2.5M+</div>
              <div className="text-zion-slate-dark">Total Investment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">280%</div>
              <div className="text-zion-slate-dark">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">6</div>
              <div className="text-zion-slate-dark">Industries Served</div>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Filter */}
      <section className="py-16 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light">
              Explore case studies from your industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="text-lg font-semibold text-zion-slate-dark mb-1">
                  {industry.name}
                </div>
                <div className="text-sm text-zion-slate-light">
                  {industry.count} projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how our solutions have delivered measurable results across different industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-zion-slate-light/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center space-x-2 text-zion-slate-light">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{study.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zion-slate-dark mb-2">
                  {study.title}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-zion-slate-light" />
                  <span className="text-zion-slate-light">{study.company}</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2">Solution:</h4>
                    <p className="text-zion-slate-light">{study.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-zion-slate-light/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan">{study.roi}</div>
                    <div className="text-sm text-zion-slate-light">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-zion-slate-light/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-purple">${study.investment}</div>
                    <div className="text-sm text-zion-slate-light">Investment</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology solutions can transform your business and deliver similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
