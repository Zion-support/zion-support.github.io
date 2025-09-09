
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {



  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Globe,
  Phone,
  Mail,
  Eye,
  Download,
  Share2,
  Filter {
      id:  ,2,
      title: 'Healthcare: AI Platform for Diagnostic Accuracy',,';
      company: 'MedTech: Solutions',,';
      industry: 'Healthcare',,';
      challenge: 'High: diagnostic error rates and lengthy patient wait times',,';
      solution: ;
        'Developed: AI-powered medical imaging analysis and clinical decision support system',,';
      results: [

    {
      id:  ,3,
      title: 'Financial: Services AI Risk Assessment Platform',,';
      company: 'FinSecure: Bank',,';
      industry: 'Financial: Services',,';
      challenge: ;
        'Manual: risk assessment processes causing delays and inconsistencies',,';
      solution: ;
        'Built: comprehensive AI risk assessment and fraud detection system',,';
      results: [

    {
      id:  ,4,
      title: 'Retail: AI Customer Experience Transformation',,';
      company: 'ShopSmart: Retail',,';
      industry: 'Retail',,';
      challenge: 'Poor: customer experience and low conversion rates',,';
      solution: ;
        'Implemented: AI-powered personalization and customer service automation',,';
      results: [

    {
      id:  ,5,
      title: 'Energy: Sector Predictive Maintenance System',,';
      company: 'PowerGrid: Energy',,';
      industry: 'Energy',,';
      challenge: 'Unexpected: equipment failures causing costly downtime',,';
      solution: ;
        'Deployed: AI-powered predictive maintenance and asset optimization platform',,';
      results: [

    {
      id:  ,6,
      title: 'Education: AI Learning Platform',,';
      company: 'EduTech: Academy',,';
      industry: 'Education',,';
      challenge: 'One-size-fits-all: learning approach limiting student success',,';
      solution: ;
        'Created: personalized AI learning platform with adaptive content delivery',,';
      results: [

    { name: 'Manufacturing', count: 6, active: false }, { name: 'Healthcare', count: 4, active: false }, { name: 'Financial Services', count: 5, active: false }, { name: 'Retail', count: 3, active: false }, { name: 'Energy', count: 3, active: false }, { name: 'Education', count: 2, active: false },

    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <SEO'
        title='Case Studies - Zion Tech Group';
        description='Explore real-world success stories of AI implementations across various industries. See how our solutions drive measurable business results.'/>{/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 l,
    g:px-8>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Case Studies



            </p>
          </motion.div>
        </div>
      </section>

                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                  </div>

                    .map((study, index) => (
                      <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <Card className="overflow-hidden h-full">
                          <div className="relative h-48">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="outline">{study.industry}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">
                              {study.title}
                            </h3>
                            <p className="text-gray-300 mb-4 text-sm">
                              {study.solution}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-400">
                                  {study.results[0]}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Key Result
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-blue-400">
                                  {study.duration}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Duration
                                </div>
                              </div>
                            </div>'
                            <div className='flex flex-wrap gap-2 mb-4'>

                                .map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}

                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>

                    {industries.map((industry, index) => (
                      <button
                        key={industry.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${

                        }`}

