import { Users, Star, ArrowRight, Calendar, Award, User, Helmet } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'Complete e-commerce solution with AI recommendations, inventory management, and customer analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'AWS'],
      category: 'E-commerce',
      status: 'Completed',
      duration: '6 months',
      client: 'TechStart Inc.',
      features: ['AI Product Recommendations', 'Real-time Analytics', 'Payment Integration', 'Mobile Responsive'],
      results: ['40% increase in sales', '60% improvement in user engagement', '99.9% uptime'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Azure'],
      category: 'Healthcare',
      status: 'Completed',
      duration: '8 months',
      client: 'MediCare Solutions',
      features: ['Patient Records', 'Appointment Scheduling', 'Telemedicine', 'HIPAA Compliance'],
      results: ['50% reduction in admin time', '90% patient satisfaction', '100% HIPAA compliant'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Smart City IoT Platform',
      description: 'IoT platform for smart city management with real-time monitoring and data analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'IoT', '5G', 'Edge Computing'],
      category: 'Smart City',
      status: 'In Progress',
      duration: '12 months',
      client: 'City of Innovation',
      features: ['Real-time Monitoring', 'Data Analytics', 'Alert System', 'Mobile App'],
      results: ['30% energy savings', '25% traffic reduction', 'Real-time insights'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Financial Analytics Dashboard',
      description: 'Advanced financial analytics platform with AI-powered insights and predictive modeling.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
      category: 'FinTech',
      status: 'Completed',
      duration: '4 months',
      client: 'FinancePro Ltd.',
      features: ['AI Predictions', 'Risk Assessment', 'Portfolio Management', 'Real-time Data'],
      results: ['35% better predictions', '20% risk reduction', 'Automated reporting'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      description: 'Interactive learning platform with AI tutoring and personalized learning paths.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Video Streaming'],
      category: 'EdTech',
      status: 'Completed',
      duration: '7 months',
      client: 'EduTech Academy',
      features: ['AI Tutoring', 'Video Lessons', 'Progress Tracking', 'Gamification'],
      results: ['45% improvement in learning outcomes', '80% student engagement', 'Scalable platform'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      description: 'AI-powered supply chain management system with predictive analytics and automation.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Machine Learning', 'Blockchain', 'Cloud'],
      category: 'Supply Chain',
      status: 'Completed',
      duration: '9 months',
      client: 'Global Logistics Co.',
      features: ['Predictive Analytics', 'Inventory Optimization', 'Route Planning', 'Real-time Tracking'],
      results: ['25% cost reduction', '40% efficiency improvement', 'Automated processes'],
      link: '#',
      github: '#'
    }
  ];

const categories = ['All', 'E-commerce', 'Healthcare', 'Smart City', 'FinTech', 'EdTech', 'Supply Chain'];

const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },"
    { number: '150+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },"
    { number: '99.9%', label: 'Success Rate', icon: <Star className="w-6 h-6" /> },"
    { number: '5+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> }
  ];
  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group | Our Work & Projects</title>"
        <meta name="description" content="Explore our portfolio of successful projects including AI solutions, web applications, mobile apps, and enterprise software development." />"
        <meta name="keywords" content="portfolio, projects, web development, AI solutions, mobile apps, enterprise software, case studies" />"
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
      </Helmet>
      ""
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}"
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          ""
        <div className="max-w-7xl mx-auto text-center">
            ""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Our <span className="text-cyan-400">Portfolio</span>
            </h1>
            ""
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
            ""
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact""
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>"
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link"
                to="/services""
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
        {/* Stats Section */}"
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          ""
        <div className="max-w-7xl mx-auto">
            ""
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => ("
                <div key={index} className="text-center">
                  ""
        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  ""
        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  ""
        <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Category Filter */}"
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          ""
        <div className="max-w-7xl mx-auto">
            ""
        <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Grid */}"
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          ""
        <div className="max-w-7xl mx-auto">
            ""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}"
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  ""
        <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    ""
        <div className="absolute top-4 left-4">
                      <span className="{`px-3" py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-black'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    ""
        <div className="absolute top-4 right-4">"
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  ""
        <div className="p-6">"
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    ""
          <p className="text-gray-300 mb-4">{project.description}</p>
                    ""
        <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}"
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    ""
        <div className="space-y-2 mb-4">
                      ""
        <div className="flex items-center text-sm text-gray-400">"
                        <Users className="w-4 h-4 mr-2" />
                        <span>{project.client}</span>
                      </div>
                      ""
        <div className="flex items-center text-sm text-gray-400">"
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    ""
        <div className="flex space-x-2">
                      <Link
                        to={project.link}"
                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>View Project</span>"
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <Link
                        to={project.github}"
                        className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                      >"
                        <Github className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}"
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          ""
        <div className="max-w-4xl mx-auto text-center">
            ""
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">"
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              ""
          <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
              </p>
              ""
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link"
                  to="/contact""
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>"
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link"
                  to="/services""
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PortfolioPage;"