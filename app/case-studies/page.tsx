import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      challenge: 'Low conversion rates and poor customer experience due to outdated recommendation system',
      solution: 'Implemented AI-powered recommendation engine with real-time personalization and predictive analytics',
      results: [
        'Increased conversion rates by 45%',
        'Improved customer satisfaction by 60%',
        'Reduced cart abandonment by 35%',
        'Generated $2.5M additional revenue'
      ],
      technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'TensorFlow']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFlow Corp.',
      industry: 'Financial Services',
      duration: '4 months',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system reliability to 99.9%',
        'Enabled 10x faster deployment cycles',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python']
    },
    {
      id: '3',
      title: 'AI Customer Service Automation',
      client: 'ServicePro Ltd.',
      industry: 'Customer Service',
      duration: '3 months',
      challenge: 'High customer service costs and long response times affecting customer satisfaction',
      solution: 'Deployed AI-powered chatbot with natural language processing and intelligent routing',
      results: [
        'Reduced support costs by 50%',
        'Improved response time by 80%',
        'Increased customer satisfaction to 95%',
        'Handled 70% of queries automatically'
      ],
      technologies: ['NLP', 'Python', 'React', 'FastAPI', 'PostgreSQL']
    },
    {
      id: '4',
      title: 'Data Analytics Platform',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      duration: '8 months',
      challenge: 'Fragmented data sources preventing effective patient care insights and decision making',
      solution: 'Built comprehensive data analytics platform with real-time dashboards and predictive models',
      results: [
        'Improved patient outcomes by 30%',
        'Reduced operational costs by 25%',
        'Enabled data-driven decision making',
        'Achieved HIPAA compliance'
      ],
      technologies: ['Python', 'Apache Spark', 'React', 'PostgreSQL', 'Docker']
    },
    {
      id: '5',
      title: 'Mobile App Development',
      client: 'FitnessFirst',
      industry: 'Health & Fitness',
      duration: '5 months',
      challenge: 'Need for a comprehensive fitness tracking app with social features and AI coaching',
      solution: 'Developed cross-platform mobile app with AI-powered workout recommendations and social features',
      results: [
        'Achieved 100K+ downloads in first month',
        'Maintained 4.8+ app store rating',
        'Increased user engagement by 200%',
        'Generated $500K+ in subscription revenue'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS']
    },
    {
      id: '6',
      title: 'Cybersecurity Enhancement',
      client: 'SecureBank',
      industry: 'Banking',
      duration: '6 months',
      challenge: 'Increasing cyber threats and need for advanced security monitoring and threat detection',
      solution: 'Implemented comprehensive cybersecurity suite with AI-powered threat detection and automated response',
      results: [
        'Prevented 99.9% of cyber attacks',
        'Reduced security incidents by 85%',
        'Improved compliance scores',
        'Enhanced customer trust and confidence'
      ],
      technologies: ['AI/ML', 'Python', 'Elasticsearch', 'Kibana', 'Docker']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Target className="w-8 h-8" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '25+', label: 'Industries Served', icon: <Globe className="w-8 h-8" /> },
    { number: '100%', label: 'Success Rate', icon: <Shield className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our successful case studies showcasing AI solutions, cloud migrations, mobile app development, and digital transformations across various industries."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI solutions, cloud migration, mobile app development, digital transformation, client results"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Target className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable results 
              through innovative technology solutions and AI implementation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 text-sm font-medium bg-cyan-500/20 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ranks of successful businesses that have transformed with our technology solutions. 
              Let's create your next case study together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;