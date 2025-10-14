'use client';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Built modern React-based platform with AI-powered recommendations',
      results: [
        '60% reduction in cart abandonment',
        '200% increase in conversion rate',
        '50% improvement in page load speed'
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'AWS'],
      duration: '6 months',
      teamSize: '8 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Integrated data platform with predictive analytics',
      results: [
        '30% improvement in patient outcomes',
        '40% reduction in operational costs',
        '99.9% data accuracy achieved'
      ],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
      duration: '8 months',
      teamSize: '12 developers'
    },
    {
      id: 3,
      title: 'Financial Services Cloud Migration',
      client: 'FinanceFlow',
      industry: 'FinTech',
      challenge: 'On-premises infrastructure limiting scalability',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '300% increase in processing capacity',
        '70% reduction in infrastructure costs',
        'Zero downtime during migration'
      ],
      technologies: ['AWS', 'Kubernetes', 'Microservices', 'Terraform'],
      duration: '10 months',
      teamSize: '15 developers'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'SmartManufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing production delays',
      solution: 'IoT sensors with real-time monitoring and predictive maintenance',
      results: [
        '25% increase in production efficiency',
        '50% reduction in equipment downtime',
        '35% improvement in quality control'
      ],
      technologies: ['IoT', 'Python', 'Machine Learning', 'Azure'],
      duration: '7 months',
      teamSize: '10 developers'
    },
    {
      id: 5,
      title: 'Educational Platform Modernization',
      client: 'EduTech Global',
      industry: 'Education',
      challenge: 'Outdated learning management system',
      solution: 'Modern, mobile-first platform with AI tutoring',
      results: [
        '80% increase in student engagement',
        '45% improvement in learning outcomes',
        '90% user satisfaction rate'
      ],
      technologies: ['React Native', 'Node.js', 'AI/ML', 'MongoDB'],
      duration: '9 months',
      teamSize: '14 developers'
    },
    {
      id: 6,
      title: 'Cybersecurity Enhancement',
      client: 'SecureBank',
      industry: 'Banking',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security platform with AI threat detection',
      results: [
        '95% reduction in security incidents',
        '100% compliance with regulations',
        '24/7 automated threat monitoring'
      ],
      technologies: ['Cybersecurity', 'AI/ML', 'Blockchain', 'AWS'],
      duration: '5 months',
      teamSize: '6 developers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations. See how we've helped businesses across industries achieve their goals with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, client projects, success stories, technology solutions, AI implementation, cloud migration, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results with our technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across different industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{study.client} • {study.industry}</p>
                    </div>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                      {study.duration}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Team: {study.teamSize}</span>
                    <span>Duration: {study.duration}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you transform your business with cutting-edge technology solutions. 
              Contact us today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
