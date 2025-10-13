import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    improvement: string;
    timeframe: string;
    roi: string;
  };
  image: string;
  category: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        'Reduced response time by 75%',
        'Decreased operational costs by 60%',
        'Improved customer satisfaction scores by 40%',
        'Handled 300% more inquiries with same staff'
      ],
      metrics: {
        improvement: '75%',
        timeframe: '3 months',
        roi: '340%'
      },
      image: '/api/placeholder/600/400',
      category: 'AI & Automation'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Modernization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated to cloud-native architecture with microservices and automated scaling.',
      results: [
        'Achieved 99.9% uptime',
        'Reduced infrastructure costs by 45%',
        'Improved scalability by 500%',
        'Enhanced security compliance'
      ],
      metrics: {
        improvement: '99.9%',
        timeframe: '6 months',
        roi: '280%'
      },
      image: '/api/placeholder/600/400',
      category: 'Cloud & Infrastructure'
    },
    {
      id: '3',
      title: 'Data Analytics Platform Implementation',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into customer behavior and inventory management.',
      solution: 'Built comprehensive data analytics platform with real-time dashboards and predictive analytics.',
      results: [
        'Increased sales by 35%',
        'Reduced inventory costs by 25%',
        'Improved customer targeting accuracy by 80%',
        'Enabled data-driven decision making'
      ],
      metrics: {
        improvement: '35%',
        timeframe: '4 months',
        roi: '420%'
      },
      image: '/api/placeholder/600/400',
      category: 'Data & Analytics'
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement Program',
      client: 'Financial Services Ltd.',
      industry: 'Finance',
      challenge: 'Increasing cyber threats and compliance requirements for financial data protection.',
      solution: 'Implemented comprehensive cybersecurity suite with AI-powered threat detection and automated response.',
      results: [
        'Prevented 99.8% of cyber attacks',
        'Reduced security incidents by 90%',
        'Achieved full compliance certification',
        'Improved incident response time by 85%'
      ],
      metrics: {
        improvement: '99.8%',
        timeframe: '5 months',
        roi: '310%'
      },
      image: '/api/placeholder/600/400',
      category: 'Security & Compliance'
    },
    {
      id: '5',
      title: 'Mobile App Development & Optimization',
      client: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Need for a patient management mobile app with telemedicine capabilities.',
      solution: 'Developed cross-platform mobile app with video consultation, appointment scheduling, and health tracking features.',
      results: [
        'Increased patient engagement by 200%',
        'Reduced no-show rates by 40%',
        'Improved patient satisfaction by 65%',
        'Streamlined administrative processes'
      ],
      metrics: {
        improvement: '200%',
        timeframe: '8 months',
        roi: '380%'
      },
      image: '/api/placeholder/600/400',
      category: 'Mobile & Web Development'
    },
    {
      id: '6',
      title: 'IoT Integration for Smart Manufacturing',
      client: 'Industrial Solutions Co.',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring of production equipment leading to unexpected downtime and inefficiencies.',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system for real-time monitoring.',
      results: [
        'Reduced unplanned downtime by 70%',
        'Increased production efficiency by 30%',
        'Lowered maintenance costs by 50%',
        'Improved product quality by 25%'
      ],
      metrics: {
        improvement: '70%',
        timeframe: '7 months',
        roi: '290%'
      },
      image: '/api/placeholder/600/400',
      category: 'IoT & Smart Solutions'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud & Infrastructure', 'Data & Analytics', 'Security & Compliance', 'Mobile & Web Development', 'IoT & Smart Solutions'];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful client case studies and see how Zion Tech Group has helped businesses achieve remarkable results through innovative technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, client success stories, technology solutions, business transformation, AI implementation, cloud migration, data analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable results through 
              innovative technology solutions and digital transformation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">340%</div>
                <div className="text-gray-300 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <div className="w-full h-48 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                      <Award className="w-12 h-12 text-white/50" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {study.category}
                      </span>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        <span className="font-medium text-white">Challenge:</span> {study.challenge}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="font-medium text-white">Solution:</span> {study.solution}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{study.metrics.improvement}</div>
                        <div className="text-xs text-gray-400">Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{study.metrics.timeframe}</div>
                        <div className="text-xs text-gray-400">Timeframe</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions. 
              Join our growing list of successful clients.
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