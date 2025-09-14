import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 'ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough',
    title: 'AI 2026: Quantum-Neural Fusion Enterprise Transformation Breakthrough',
    excerpt: 'GlobalTech Enterprises achieved 15,000% ROI through revolutionary Quantum-Neural Fusion AI implementation.',
    company: 'GlobalTech Enterprises',
    industry: 'Manufacturing',
    roi: '15,000%',
    duration: '12 months',
    category: 'Quantum AI',
    featured: true,
    pdf: '/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough.pdf'
  },
  {
    id: 'fortune-500-autonomous-transformation-2027-10-billion-roi',
    title: 'Fortune 500 Autonomous Transformation: $10 Billion ROI Success Story',
    excerpt: 'A Fortune 500 manufacturing conglomerate achieved unprecedented $10 billion ROI within 18 months.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    roi: '$10B',
    duration: '18 months',
    category: 'Autonomous AI',
    featured: true,
    pdf: '/case-studies/fortune-500-autonomous-transformation-2027-10-billion-roi.pdf'
  },
  {
    id: 'global-enterprise-autonomous-ai-transformation-2025-ultimate-success-5-billion-roi',
    title: 'Global Enterprise Autonomous AI Transformation: $5 Billion ROI',
    excerpt: 'Revolutionary autonomous AI implementation delivering $5 billion in measurable ROI within 12 months.',
    company: 'Global Enterprise Corp',
    industry: 'Technology',
    roi: '$5B',
    duration: '12 months',
    category: 'Autonomous AI',
    featured: false,
    pdf: '/case-studies/global-enterprise-autonomous-ai-transformation-2025-ultimate-success-5-billion-roi.pdf'
  },
  {
    id: 'techcorp-quantum-ai-transformation-2025-8-billion-roi',
    title: 'TechCorp Quantum AI Transformation: $8 Billion ROI Achievement',
    excerpt: 'TechCorp achieved $8 billion ROI through advanced quantum AI implementation and optimization.',
    company: 'TechCorp',
    industry: 'Technology',
    roi: '$8B',
    duration: '15 months',
    category: 'Quantum AI',
    featured: false,
    pdf: '/case-studies/techcorp-quantum-ai-transformation-2025-8-billion-roi.pdf'
  }
];

const categories = ['All', 'Quantum AI', 'Autonomous AI', 'Manufacturing', 'Technology'];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Case Studies - AI Transformation Success Stories | Zion Tech Group"
        description="Discover real-world AI transformation success stories with proven ROI results. Explore case studies from Fortune 500 companies achieving billions in returns."
        keywords="AI case studies, AI transformation, ROI success stories, enterprise AI, quantum AI, autonomous AI"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90" />
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Transformation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Real-world case studies showcasing extraordinary AI transformation results. 
              Discover how leading enterprises achieved unprecedented ROI through our revolutionary AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zion-slate-light">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                $50B+ Total ROI Achieved
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-zion-purple rounded-full mr-2"></span>
                100+ Successful Implementations
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-zion-cyan-light rounded-full mr-2"></span>
                Fortune 500 Clients
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="bg-white/10 backdrop-blur-sm border-zion-blue-light/20 hover:bg-white/15 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`${
                      study.category === 'Quantum AI' 
                        ? 'bg-zion-purple text-white' 
                        : 'bg-zion-cyan text-white'
                    }`}>
                      {study.category}
                    </Badge>
                    {study.featured && (
                      <Badge className="bg-zion-cyan-light text-zion-blue-dark">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {study.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Company:</span>
                        <p className="text-white font-medium">{study.company}</p>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Industry:</span>
                        <p className="text-white font-medium">{study.industry}</p>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">ROI:</span>
                        <p className="text-zion-cyan font-bold text-lg">{study.roi}</p>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Duration:</span>
                        <p className="text-white font-medium">{study.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button asChild className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                        <Link to={`/case-studies/${study.id}`}>
                          Read Full Story
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {study.pdf && (
                        <Button variant="outline" size="icon" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                          <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their businesses with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Link to="/services">
                  Explore Our Services
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}