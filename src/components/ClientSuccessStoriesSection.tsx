import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const successStories = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    industry: 'Financial Technology',
    challenge: 'Legacy system limitations and poor customer experience',
    solution: 'Implemented AI-powered recommendation engine and modernized infrastructure',
    results: [
      { metric: 'Revenue Increase', value: '45%', icon: TrendingUp },
      { metric: 'Customer Satisfaction', value: '92%', icon: Users },
      { metric: 'Processing Time', value: '60% faster', icon: Award }
    ],
    testimonial: 'Zion Tech Group transformed our entire digital infrastructure. The results exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CTO, TechCorp Solutions',
    rating: 5,
    image: '🏦',
    color: 'from-blue-500 to-cyan-500',
    link: '/case-studies/techcorp-solutions'
  },
  {
    id: 2,
    company: 'ManufactureTech Inc.',
    industry: 'Manufacturing',
    challenge: 'On-premise infrastructure costs and deployment delays',
    solution: 'Migrated to multi-cloud with automated CI/CD pipelines',
    results: [
      { metric: 'Infrastructure Costs', value: '40% reduction', icon: TrendingUp },
      { metric: 'Deployment Speed', value: '10x faster', icon: Award },
      { metric: 'Uptime', value: '99.9%', icon: CheckCircle }
    ],
    testimonial: 'The cloud migration project was executed flawlessly. Our development team productivity increased dramatically.',
    author: 'Michael Chen',
    role: 'VP of Engineering, ManufactureTech',
    rating: 5,
    image: '🏭',
    color: 'from-green-500 to-emerald-500',
    link: '/case-studies/manufacturetech'
  },
  {
    id: 3,
    company: 'HealthTech Innovations',
    industry: 'Healthcare Technology',
    challenge: 'Data security concerns and compliance risks',
    solution: 'Deployed zero-trust architecture and AI threat detection',
    results: [
      { metric: 'Security Incidents', value: '85% reduction', icon: Award },
      { metric: 'Compliance Score', value: '98%', icon: CheckCircle },
      { metric: 'Response Time', value: '90% faster', icon: TrendingUp }
    ],
    testimonial: 'Zion\'s cybersecurity expertise helped us achieve HIPAA compliance while improving our overall security posture.',
    author: 'Dr. Emily Rodriguez',
    role: 'Chief Security Officer, HealthTech',
    rating: 5,
    image: '🏥',
    color: 'from-purple-500 to-pink-500',
    link: '/case-studies/healthtech'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
    />
  ));
};

export function ClientSuccessStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Real results from real clients. Discover how we've transformed businesses 
            across industries with innovative technology solutions.
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={story.link} className="block">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {story.image}
                    </div>
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {story.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {story.company}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light text-sm mb-3">{story.challenge}</p>
                    
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Solution:</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {story.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <span className="text-zion-slate-light text-sm">{result.metric}</span>
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-zion-cyan" />
                            <span className="text-white font-medium text-sm">{result.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mb-4 p-4 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                    <p className="text-zion-slate-light text-sm italic mb-3">
                      "{story.testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium text-sm">{story.author}</p>
                        <p className="text-zion-slate-light text-xs">{story.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(story.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zion-cyan/20">
                    <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-purple transition-colors flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Own Success Story?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join hundreds of satisfied clients who have transformed their businesses with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}