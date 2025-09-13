import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Target, 
  ArrowRight, 
  BarChart3,
  Brain,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Cpu,
  Network
} from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Enterprise AI Transformation: $2.3B Revenue Impact Case Study',
  description: 'How a Fortune 500 company achieved unprecedented ROI with our quantum-AI solutions. Real results from real implementation.',
  keywords: 'enterprise AI, case study, ROI, Fortune 500, quantum AI, business transformation, revenue impact',
  openGraph: {
    title: 'Enterprise AI Transformation: $2.3B Revenue Impact',
    description: 'How a Fortune 500 company achieved unprecedented ROI with our quantum-AI solutions.',
    type: 'article',
    publishedTime: '2026-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Enterprise AI', 'ROI', 'Business Transformation'],
  },
};

const EnterpriseTransformationCaseStudy = () => {
  const keyResults = [
    {
      metric: '$2.3B',
      label: 'Revenue Increase',
      description: 'Total revenue impact over 18 months',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: '450%',
      label: 'ROI Achievement',
      description: 'Return on investment within first year',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: '78%',
      label: 'Cost Reduction',
      description: 'Operational cost savings across departments',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: '12x',
      label: 'Efficiency Gain',
      description: 'Process automation and optimization',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const challenges = [
    {
      title: 'Legacy System Integration',
      description: 'Complex integration with 15+ legacy systems across multiple departments',
      solution: 'Quantum-AI fusion architecture with seamless API connectivity',
      icon: <Network className="w-5 h-5" />
    },
    {
      title: 'Data Silos and Fragmentation',
      description: 'Disparate data sources across 50+ global offices',
      solution: 'Unified data lake with real-time processing and analytics',
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: 'Manual Process Bottlenecks',
      description: 'Thousands of manual processes causing delays and errors',
      solution: 'Autonomous business systems with self-healing capabilities',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: 'Scalability Limitations',
      description: 'Inability to scale operations across global markets',
      solution: 'Cloud-native quantum-AI platform with unlimited scalability',
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1',
      title: 'Assessment & Planning',
      duration: '8 weeks',
      description: 'Comprehensive analysis of existing systems and AI readiness assessment',
      results: ['AI maturity evaluation', 'System architecture mapping', 'Implementation roadmap'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Implementation',
      duration: '12 weeks',
      description: 'Quantum-AI fusion deployment in select departments',
      results: ['40% efficiency improvement', '60% error reduction', 'Positive ROI validation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Rollout',
      duration: '24 weeks',
      description: 'Full-scale deployment across all global operations',
      results: ['$2.3B revenue impact', '450% ROI achievement', '78% cost reduction'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Scaling',
      duration: 'Ongoing',
      description: 'Continuous optimization and expansion to new markets',
      results: ['12x efficiency gain', 'Global market expansion', 'Innovation pipeline'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      quote: "The quantum-AI transformation exceeded our wildest expectations. We've achieved results that were previously unimaginable.",
      author: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "Global Fortune 500 Corporation",
      avatar: "SC"
    },
    {
      quote: "This implementation has fundamentally changed how we operate. The ROI speaks for itself - this is the future of business.",
      author: "Michael Rodriguez",
      position: "Chief Executive Officer",
      company: "Global Fortune 500 Corporation",
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2">
              💰 CASE STUDY
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">
              FORTUNE 500
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">
              $2.3B IMPACT
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight">
            Enterprise AI Transformation Success Story
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How a Fortune 500 corporation achieved unprecedented business transformation 
            with our quantum-AI fusion solutions, delivering $2.3B in revenue impact 
            and 450% ROI within the first year.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Fortune 500 Corporation</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>50+ Global Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>18-Month Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>450% ROI Achieved</span>
            </div>
          </div>
        </motion.div>

        {/* Key Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Transformation Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyResults.map((result, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {result.icon}
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {result.metric}
                  </CardTitle>
                  <CardDescription className="text-xl font-semibold text-white">
                    {result.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                      {challenge.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{challenge.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-lg mb-4">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-cyan-500">
                    <h4 className="text-cyan-400 font-semibold mb-2">Our Solution:</h4>
                    <p className="text-gray-300">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Implementation Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Implementation Timeline</h2>
          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className={`p-4 bg-gradient-to-r ${phase.color} rounded-xl mb-4`}>
                        <div className="text-white font-bold text-lg">{phase.phase}</div>
                        <div className="text-white/90 text-sm">{phase.duration}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                    <div className="lg:w-2/3">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Results:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-cyan-400">{testimonial.position}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border-cyan-500/30">
            <CardContent className="py-16 text-center">
              <div className="mb-8">
                <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the ranks of Fortune 500 companies achieving unprecedented results 
                  with our quantum-AI fusion solutions. Let's discuss your transformation journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 text-lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Schedule ROI Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-800 px-8 py-4 text-lg">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Download Case Study PDF
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Custom ROI analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Related Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg text-white">Healthcare AI Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  95% faster diagnosis with quantum-AI medical imaging
                </CardDescription>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg text-white">Financial Services Revolution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  300% increase in trading efficiency with autonomous systems
                </CardDescription>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg text-white">Manufacturing Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Zero-defect production with predictive maintenance AI
                </CardDescription>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EnterpriseTransformationCaseStudy;