import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      description: 'Implemented autonomous AI systems that increased conversion rates by 45% and reduced cart abandonment by 60%.',
      results: [
        '45% increase in conversion rates',
        '60% reduction in cart abandonment',
        '3x faster page load times',
        '99.9% uptime maintained'
      ],
      category: 'E-commerce',
      image: '/api/placeholder/400/300',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Financial Services Automation',
      company: 'GlobalBank',
      description: 'Deployed intelligent automation systems that processed 10x more transactions while maintaining 100% accuracy.',
      results: [
        '10x increase in transaction processing',
        '100% accuracy maintained',
        '24/7 autonomous operation',
        '50% reduction in operational costs'
      ],
      category: 'Financial Services',
      image: '/api/placeholder/400/300',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Healthcare Data Management',
      company: 'MedTech Solutions',
      description: 'Built autonomous data processing systems that improved patient care efficiency by 35% and reduced errors by 90%.',
      results: [
        '35% improvement in care efficiency',
        '90% reduction in data errors',
        'Real-time patient monitoring',
        'HIPAA compliance automation'
      ],
      category: 'Healthcare',
      image: '/api/placeholder/400/300',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Manufacturing Process Optimization',
      company: 'AutoManufacturing Co.',
      description: 'Implemented AI-powered monitoring systems that increased production efficiency by 40% and reduced downtime by 75%.',
      results: [
        '40% increase in production efficiency',
        '75% reduction in downtime',
        'Predictive maintenance automation',
        'Real-time quality control'
      ],
      category: 'Manufacturing',
      image: '/api/placeholder/400/300',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Content Generation Platform',
      company: 'Digital Media Corp.',
      description: 'Created autonomous content generation systems that produce 1000+ articles daily with 95% accuracy and SEO optimization.',
      results: [
        '1000+ articles generated daily',
        '95% content accuracy',
        'Automatic SEO optimization',
        '24/7 content production'
      ],
      category: 'Digital Media',
      image: '/api/placeholder/400/300',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Cloud Infrastructure Scaling',
      company: 'CloudScale Tech',
      description: 'Built self-scaling cloud infrastructure that automatically handles traffic spikes and maintains 99.99% uptime.',
      results: [
        'Automatic traffic scaling',
        '99.99% uptime maintained',
        'Zero-downtime deployments',
        'Cost optimization automation'
      ],
      category: 'Cloud Infrastructure',
      image: '/api/placeholder/400/300',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const categories = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Digital Media', 'Cloud Infrastructure'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories of how our autonomous technology solutions have transformed businesses across industries." />
        <meta property="og:title" content="Case Studies" />
        <meta property="og:description" content="Real-world success stories of our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our autonomous technology solutions have transformed businesses across industries
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Study
            </h2>
            <p className="text-xl text-gray-600">
              Our most impactful transformation story
            </p>
          </div>

          {caseStudies.filter(cs => cs.featured).map(caseStudy => (
            <Card key={caseStudy.id} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl text-blue-600">{caseStudy.title}</CardTitle>
                    <p className="text-gray-600 mt-2">{caseStudy.company} • {caseStudy.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
                    <ul className="space-y-2 mb-6">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete portfolio of successful transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map(caseStudy => (
              <Card key={caseStudy.id} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{caseStudy.title}</CardTitle>
                  <p className="text-gray-600">{caseStudy.company} • {caseStudy.industry}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
