import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Heart
} from 'lucide-react';

const successStories = [
  {
    id: 1,
    client: "TechCorp Solutions",
    industry: "Technology",
    challenge: "Legacy systems causing 40% productivity loss",
    solution: "Modernized infrastructure with AI-powered automation",
    results: [
      "Increased productivity by 60%",
      "Reduced operational costs by 35%",
      "Improved customer satisfaction by 45%"
    ],
    testimonial: "Zion Tech Group transformed our entire operation. The results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
  },
  {
    id: 2,
    client: "Global Finance Ltd",
    industry: "Financial Services",
    challenge: "Security vulnerabilities and compliance issues",
    solution: "Comprehensive cybersecurity and compliance platform",
    results: [
      "100% compliance achievement",
      "Zero security breaches",
      "Reduced audit time by 70%"
    ],
    testimonial: "Their security solutions are world-class. We feel completely protected now.",
    author: "Michael Chen",
    position: "CISO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400"
  },
  {
    id: 3,
    client: "HealthTech Innovations",
    industry: "Healthcare",
    challenge: "Patient data management inefficiencies",
    solution: "AI-powered healthcare analytics platform",
    results: [
      "Improved patient outcomes by 30%",
      "Reduced administrative overhead by 50%",
      "Enhanced data accuracy by 95%"
    ],
    testimonial: "The AI platform revolutionized how we handle patient data and make decisions.",
    author: "Dr. Emily Rodriguez",
    position: "Chief Medical Officer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  }
];

export function ClientSuccessStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Discover how we've helped businesses
            across industries achieve remarkable transformations and measurable success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.client}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-slate-800/80 text-white text-xs font-semibold rounded-full">
                    {story.industry}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {story.client}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm">{story.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-slate-700 pt-4">
                  <blockquote className="text-gray-300 text-sm italic mb-3">
                    "{story.testimonial}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {story.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{story.author}</div>
                      <div className="text-gray-400 text-xs">{story.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Success by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-green-600 rounded-lg font-medium transition-colors duration-200">
                View All Case Studies
                <Award className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}