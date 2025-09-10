
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {



  Calendar,
  Clock,
  Users,
  Play,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Eye,
  Share2,
  Video,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Globe,
  Phone,
  Mail,
  Award,
  Star,
  CheckCircle,
  Download,
  Bookmark,


const Webinars: React.FC = () => {
  const webinars = [
    {
      id: 1,
      title: 'AI Revolution in Business: Strategies for 2025',
      description:
        'Join our experts as they discuss the latest AI trends and how businesses can leverage these technologies for competitive advantage.',
      speaker: 'Dr. Sarah Johnson',
      speakerTitle: 'Chief AI Officer',
      speakerCompany: 'Zion Tech Group',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      category: 'AI Strategy',
      attendees: 1250,
      rating: 4.9,
      image: '/api/placeholder/600/400',
      tags: [
        'AI Strategy',
        'Business Innovation',
        'Future Trends',
        'Leadership' ],
      featured: true,
      status: 'upcoming',
      registrationUrl: '/webinars/ai-revolution-2025' }, {
      id: 2,
      title: 'Cybersecurity in the AI Era: Protecting Your Digital Assets',
      description:
        'Learn about the latest cybersecurity threats and how AI is being used both to attack and defend digital infrastructure.',
      speaker: 'Michael Chen',
      speakerTitle: 'Cybersecurity Expert',
      speakerCompany: 'Zion Tech Group',
      date: '2025-02-12',
      time: '3:00 PM EST',
      duration: '45 minutes',
      category: 'Security',
      attendees: 980,
      rating: 4.8,
      image: '/api/placeholder/600/400',
      tags: [
        'Cybersecurity',
        'AI Security',
        'Threat Protection',
        'Risk Management' ],
      featured: false,
      status: 'upcoming',
      registrationUrl: '/webinars/cybersecurity-ai-era' }, {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      description:
        'Comprehensive guide to planning and executing successful cloud migration projects with minimal business disruption.',
      speaker: 'Emily Rodriguez',
      speakerTitle: 'Cloud Solutions Architect',
      speakerCompany: 'Zion Tech Group',
      date: '2025-02-10',
      time: '1:00 PM EST',
      duration: '50 minutes',
      category: 'Cloud Computing',
      attendees: 1150,
      rating: 4.7,
      image: '/api/placeholder/600/400',
      tags: [
        'Cloud Migration',
        'Strategy',
        'Best Practices',
        'Digital Transformation' ],
      featured: false,
      status: 'upcoming',
      registrationUrl: '/webinars/cloud-migration-guide' }, {
      id: 4,
      title:
        'Data Analytics and Machine Learning: Driving Business Intelligence',
      description:
        'Discover how advanced analytics and machine learning are transforming business intelligence and decision-making processes.',
      speaker: 'David Kim',
      speakerTitle: 'Data Science Director',
      speakerCompany: 'Zion Tech Group',
      date: '2025-01-28',
      time: '2:30 PM EST',
      duration: '55 minutes',
      category: 'Analytics',
      attendees: 890,
      rating: 4.6,
      image: '/api/placeholder/600/400',
      tags: [
        'Data Analytics',
        'Machine Learning',
        'Business Intelligence',
        'Decision Making' ],
      featured: false,
      status: 'recorded',
      recordingUrl: '/webinars/data-analytics-ml-recording' }, {
      id: 5,
      title: 'AI-Powered Customer Experience: The New Competitive Advantage',
      description:
        'Explore how AI is revolutionizing customer service and experience, with real-world examples and implementation strategies.',
      speaker: 'Lisa Wang',
      speakerTitle: 'Customer Experience Lead',
      speakerCompany: 'Zion Tech Group',
      date: '2025-01-25',
      time: '3:30 PM EST',
      duration: '40 minutes',
      category: 'Customer Experience',
      attendees: 1100,
      rating: 4.8,
      image: '/api/placeholder/600/400',
      tags: [
        'Customer Experience',
        'AI',
        'Automation',
        'Competitive Advantage' ],
      featured: false,
      status: 'recorded',
      recordingUrl: '/webinars/ai-customer-experience-recording' }, {
      id: 6,
      title: 'Digital Transformation: A Roadmap for Modern Organizations',
      description:
        'Complete roadmap for organizations looking to embrace digital transformation and leverage emerging technologies.',
      speaker: 'James Wilson',
      speakerTitle: 'Digital Transformation Consultant',
      speakerCompany: 'Zion Tech Group',
      date: '2025-01-22',
      time: '1:30 PM EST',
      duration: '65 minutes',
      category: 'Digital Transformation',
      attendees: 1350,
      rating: 4.9,
      image: '/api/placeholder/600/400',
      tags: ['Digital Transformation', 'Strategy', 'Technology', 'Innovation'],
      featured: false,
      status: 'recorded',
      recordingUrl: '/webinars/digital-transformation-roadmap-recording' } ];

  const categories = [
    { name: 'All Categories', count: 24, active: true }, { name: 'AI Strategy', count: 6, active: false }, { name: 'Security', count: 4, active: false }, { name: 'Cloud Computing', count: 5, active: false }, { name: 'Analytics', count: 3, active: false }, { name: 'Customer Experience', count: 3, active: false }, { name: 'Digital Transformation', count: 2, active: false }, { name: 'Other', count: 1, active: false } ];

  const featuredWebinar = webinars.find(webinar => webinar.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group" 
        description="Join our expert-led webinars on AI, technology trends, and business innovation. Learn from industry leaders and get actionable insights."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Video className="w-4 h-4 mr-2" />
              Live & Recorded Sessions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Webinars
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our expert-led webinars and learn from industry leaders about the latest technology trends and business strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Webinar */}, {featuredWebinar && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Webinar</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredWebinar.image} 
                      alt={featuredWebinar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {featuredWebinar.duration}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Play className="w-6 h-6 mr-2" />


                      </Button>
                    </div>

                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredWebinar.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredWebinar.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center text-gray-300 mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{featuredWebinar.speaker}</span>
                      </div>
                      <div className="text-sm text-gray-400 ml-6">
                        {featuredWebinar.speakerTitle} at{' '}, {featuredWebinar.speakerCompany}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{featuredWebinar.attendees.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Attendees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{featuredWebinar.rating}/5</div>
                        <div className="text-sm text-gray-400">Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredWebinar.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {featuredWebinar.time}
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">

                          : 'Recorded'}
                      </Badge>
                    </div>'
                    <h3 className='text-2xl font-bold text-white mb-4'>{featuredWebinar.title}</h3>'
                    <p className='text-gray-300 mb-6'>{featuredWebinar.description}</p>'
                    <div className='mb-6>
                      <div className='flex items-center text-gray-300 mb-2>
                        <Users className='w-4 h-4 mr-2' />
                        <span className='font-semibold'>{featuredWebinar.speaker}</span>
                      </div>'
                      <div className='text-sm text-gray-400 ml-6'>
                        {featuredWebinar.speakerTitle} at {featuredWebinar.speakerCompany}
                      </div>
                    </div>'
                    <div className='grid grid-cols-2 gap-4 mb-6>
                      <div className='text-center>
                        <div className='text-2xl font-bold text-green-400'>{featuredWebinar.attendees.toLocaleString()}</div>'
                        <div className='text-sm text-gray-400'>Attendees</div>
                      </div>'
                      <div className='text-center>
                        <div className='text-2xl font-bold text-blue-400'>{featuredWebinar.rating}/5</div>'
                        <div className='text-sm text-gray-400'>Rating</div>
                      </div>
                    </div>'
                    <div className='flex items-center justify-between>
                      <div className='flex items-center text-gray-400 text-sm>
                        <Calendar className='w-4 h-4 mr-2' />
                        {new Date(featuredWebinar.date).toLocaleDateString()}
                        <Clock className='w-4 h-4 ml-4 mr-2' />
                        {featuredWebinar.time}
                      </div>'
                      <Button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
:pages.disabled_auto/webinars.tsx{featuredWebinar.status ===,
  upcoming' ?;
  'Register Now': 'Watch Recording}

                          : 'Watch Recording'}



                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                              </Button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">
                              {webinar.title}
                            </h3>
                            <p className="text-gray-300 mb-4 text-sm">
                              {webinar.description}
                            </p>

                            <div className="flex items-center mb-4 text-sm text-gray-400">
                              <Users className="w-4 h-4 mr-2" />
                              {webinar.speaker}
                              <Calendar className="w-4 h-4 ml-4 mr-2" />
                              {new Date(webinar.date).toLocaleDateString()}
                              <Clock className="w-4 h-4 ml-4 mr-2" />
                              {webinar.time}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-400">
                                  {webinar.attendees.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Attendees
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-blue-400">
                                  {webinar.rating}/5
                                </div>
                                <div className="text-xs text-gray-400">
                                  Rating
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {webinar.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                                >
                                  {webinar.status === 'upcoming'
                                    ? 'Register'
                                    : 'Watch'}
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}

                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ),)}

                </div>
              </motion.div>
            </div>
            {/* Sidebar */}, {categories.map((category, index) => (
                      <button: key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${

                        }`}
  );
};