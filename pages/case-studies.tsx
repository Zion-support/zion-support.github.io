import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

  const caseStudies = [
    {
      id: 'fintech-ai-fraud-detection',
      title: 'FinTech Revolution: AI-Powered Fraud Detection System',
      company: 'SecureBank Corp',
      industry: 'Financial Services',
      service: 'AI & Machine Learning',
      challenge: 'High fraud rates and false positives in transaction monitoring',
      solution: 'Implemented advanced AI fraud detection system with real-time analysis',
      results: {
        fraudReduction: '89%',
        falsePositives: '76%',
        processingSpeed: '95%',
        costSavings: '$2.4M',
        timeframe: '6 months'
      },
      description: 'SecureBank Corp was experiencing significant losses due to fraudulent transactions and customer dissatisfaction from false positive alerts. Our AI-powered fraud detection system revolutionized their security infrastructure.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Pattern Recognition'],
      metrics: [
        { label: 'Fraud Detection Rate', value: '99.2%', improvement: '+89%' },
        { label: 'False Positives', value: '2.1%', improvement: '-76%' },
        { label: 'Processing Speed', value: '<100ms', improvement: '+95%' },
        { label: 'Annual Savings', value: '$2.4M', improvement: 'New' }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI solution has transformed our fraud detection capabilities. We've seen an 89% reduction in fraud while dramatically improving customer experience.",
        author: 'Sarah Mitchell',
        role: 'Chief Risk Officer',
        avatar: 'SM'
      },
      image: '🛡️',
      featured: true,
      duration: '6 months',
      teamSize: '8 experts'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'Healthcare Innovation: AI-Powered Medical Diagnostics Platform',
      company: 'MediCore Health System',
      industry: 'Healthcare',
      service: 'AI & Machine Learning',
      challenge: 'Slow diagnostic processes and inconsistent accuracy across different specialists',
      solution: 'Developed AI diagnostic platform with computer vision and predictive analytics',
      results: {
        diagnosticAccuracy: '94%',
        processingTime: '78%',
        patientThroughput: '65%',
        costReduction: '$1.8M',
        timeframe: '8 months'
      },
      description: 'MediCore Health System needed to improve diagnostic accuracy and speed while reducing costs. Our AI-powered medical diagnostics platform delivered exceptional results.',
      technologies: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '96.7%', improvement: '+94%' },
        { label: 'Processing Time', value: '15 min', improvement: '-78%' },
        { label: 'Patient Throughput', value: '+65%', improvement: '+65%' },
        { label: 'Cost Reduction', value: '$1.8M', improvement: 'Annual' }
      ],
      testimonial: {
        quote: "The AI diagnostics platform has revolutionized our patient care. We're seeing faster, more accurate diagnoses that are saving lives.",
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        avatar: 'MC'
      },
      image: '🏥',
      featured: true,
      duration: '8 months',
      teamSize: '12 experts'
    },
    {
      id: 'ecommerce-cloud-migration',
      title: 'E-commerce Transformation: Cloud Migration & Optimization',
      company: 'RetailMax Global',
      industry: 'E-commerce',
      service: 'Cloud & Infrastructure',
      challenge: 'Legacy infrastructure causing downtime and limiting scalability',
      solution: 'Complete cloud migration with auto-scaling and performance optimization',
      results: {
        uptime: '99.9%',
        loadTimes: '68%',
        scalability: '10x',
        costOptimization: '45%',
        timeframe: '4 months'
      },
      description: 'RetailMax Global was struggling with frequent downtime and slow performance during peak shopping seasons. Our cloud migration strategy delivered remarkable improvements.',
      technologies: ['AWS', 'Kubernetes', 'Auto-scaling', 'Load Balancing', 'CDN'],
      metrics: [
        { label: 'Uptime', value: '99.97%', improvement: '+99.9%' },
        { label: 'Page Load Time', value: '1.2s', improvement: '-68%' },
        { label: 'Scalability', value: '10x', improvement: '1000%' },
        { label: 'Infrastructure Costs', value: '-45%', improvement: '-45%' }
      ],
      testimonial: {
        quote: "Our Black Friday traffic increased 300% with zero downtime. The cloud migration has been transformational for our business.",
        author: 'Jennifer Walsh',
        role: 'CTO',
        avatar: 'JW'
      },
      image: '☁️',
      featured: false,
      duration: '4 months',
      teamSize: '6 experts'
    },
    {
      id: 'manufacturing-iot-automation',
      title: 'Smart Manufacturing: IoT-Powered Production Optimization',
      company: 'TechManufacture Inc',
      industry: 'Manufacturing',
      service: 'IoT & Automation',
      challenge: 'Inefficient production processes and lack of real-time visibility',
      solution: 'Implemented IoT sensors and automation systems for smart manufacturing',
      results: {
        efficiency: '42%',
        downtime: '67%',
        qualityImprovement: '35%',
        energySavings: '28%',
        timeframe: '10 months'
      },
      description: 'TechManufacture Inc needed to modernize their production facilities to compete in the digital age. Our IoT and automation solution transformed their operations.',
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Maintenance', 'Real-time Analytics'],
      metrics: [
        { label: 'Production Efficiency', value: '+42%', improvement: '+42%' },
        { label: 'Unplanned Downtime', value: '-67%', improvement: '-67%' },
        { label: 'Quality Score', value: '98.5%', improvement: '+35%' },
        { label: 'Energy Consumption', value: '-28%', improvement: '-28%' }
      ],
      testimonial: {
        quote: "The smart manufacturing solution has given us unprecedented visibility and control over our production processes.",
        author: 'David Rodriguez',
        role: 'Operations Director',
        avatar: 'DR'
      },
      image: '🏭',
      featured: false,
      duration: '10 months',
      teamSize: '10 experts'
    },
    {
      id: 'startup-devops-platform',
      title: 'Startup Success: Autonomous DevOps Platform Implementation',
      company: 'InnovateTech Startup',
      industry: 'Technology',
      service: 'DevOps & Infrastructure',
      challenge: 'Manual deployment processes causing delays and errors',
      solution: 'Implemented autonomous DevOps platform with CI/CD and self-healing infrastructure',
      results: {
        deploymentSpeed: '85%',
        errorReduction: '92%',
        teamProductivity: '60%',
        timeToMarket: '70%',
        timeframe: '3 months'
      },
      description: 'InnovateTech Startup was struggling with slow, error-prone deployments that were hampering their growth. Our autonomous DevOps platform accelerated their success.',
      technologies: ['CI/CD Pipeline', 'Docker', 'Kubernetes', 'Monitoring', 'Infrastructure as Code'],
      metrics: [
        { label: 'Deployment Speed', value: '< 5 min', improvement: '+85%' },
        { label: 'Deployment Errors', value: '-92%', improvement: '-92%' },
        { label: 'Team Productivity', value: '+60%', improvement: '+60%' },
        { label: 'Time to Market', value: '-70%', improvement: '-70%' }
      ],
      testimonial: {
        quote: "The DevOps platform has been a game-changer. We can now deploy features multiple times per day with complete confidence.",
        author: 'Alex Thompson',
        role: 'Founder & CEO',
        avatar: 'AT'
      },
      image: '🚀',
      featured: false,
      duration: '3 months',
      teamSize: '5 experts'
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology'];
  const services = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'DevOps & Infrastructure', 'IoT & Automation', 'Cybersecurity'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

<<<<<<< HEAD
=======

const CaseStudies: NextPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');

  const caseStudies = [
    {
      id: 'fintech-ai-fraud-detection',
      title: 'FinTech Revolution: AI-Powered Fraud Detection System',
      company: 'SecureBank Corp',
      industry: 'Financial Services',
      service: 'AI & Machine Learning',
      challenge: 'High fraud rates and false positives in transaction monitoring',
      solution: 'Implemented advanced AI fraud detection system with real-time analysis',
      results: {
        fraudReduction: '89%',
        falsePositives: '76%',
        processingSpeed: '95%',
        costSavings: '$2.4M',
        timeframe: '6 months'
      },
      description: 'SecureBank Corp was experiencing significant losses due to fraudulent transactions and customer dissatisfaction from false positive alerts. Our AI-powered fraud detection system revolutionized their security infrastructure.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Pattern Recognition'],
      metrics: [
        { label: 'Fraud Detection Rate', value: '99.2%', improvement: '+89%' },
        { label: 'False Positives', value: '2.1%', improvement: '-76%' },
        { label: 'Processing Speed', value: '<100ms', improvement: '+95%' },
        { label: 'Annual Savings', value: '$2.4M', improvement: 'New' }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI solution has transformed our fraud detection capabilities. We've seen an 89% reduction in fraud while dramatically improving customer experience.",
        author: 'Sarah Mitchell',
        role: 'Chief Risk Officer',
        avatar: 'SM'
      },
      image: '🛡️',
      featured: true,
      duration: '6 months',
      teamSize: '8 experts'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'Healthcare Innovation: AI-Powered Medical Diagnostics Platform',
      company: 'MediCore Health System',
      industry: 'Healthcare',
      service: 'AI & Machine Learning',
      challenge: 'Slow diagnostic processes and inconsistent accuracy across different specialists',
      solution: 'Developed AI diagnostic platform with computer vision and predictive analytics',
      results: {
        diagnosticAccuracy: '94%',
        processingTime: '78%',
        patientThroughput: '65%',
        costReduction: '$1.8M',
        timeframe: '8 months'
      },
      description: 'MediCore Health System needed to improve diagnostic accuracy and speed while reducing costs. Our AI-powered medical diagnostics platform delivered exceptional results.',
      technologies: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '96.7%', improvement: '+94%' },
        { label: 'Processing Time', value: '15 min', improvement: '-78%' },
        { label: 'Patient Throughput', value: '+65%', improvement: '+65%' },
        { label: 'Cost Reduction', value: '$1.8M', improvement: 'Annual' }
      ],
      testimonial: {
        quote: "The AI diagnostics platform has revolutionized our patient care. We're seeing faster, more accurate diagnoses that are saving lives.",
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        avatar: 'MC'
      },
      image: '🏥',
      featured: true,
      duration: '8 months',
      teamSize: '12 experts'
    },
    {
      id: 'ecommerce-cloud-migration',
      title: 'E-commerce Transformation: Cloud Migration & Optimization',
      company: 'RetailMax Global',
      industry: 'E-commerce',
      service: 'Cloud & Infrastructure',
      challenge: 'Legacy infrastructure causing downtime and limiting scalability',
      solution: 'Complete cloud migration with auto-scaling and performance optimization',
      results: {
        uptime: '99.9%',
        loadTimes: '68%',
        scalability: '10x',
        costOptimization: '45%',
        timeframe: '4 months'
      },
      description: 'RetailMax Global was struggling with frequent downtime and slow performance during peak shopping seasons. Our cloud migration strategy delivered remarkable improvements.',
      technologies: ['AWS', 'Kubernetes', 'Auto-scaling', 'Load Balancing', 'CDN'],
      metrics: [
        { label: 'Uptime', value: '99.97%', improvement: '+99.9%' },
        { label: 'Page Load Time', value: '1.2s', improvement: '-68%' },
        { label: 'Scalability', value: '10x', improvement: '1000%' },
        { label: 'Infrastructure Costs', value: '-45%', improvement: '-45%' }
      ],
      testimonial: {
        quote: "Our Black Friday traffic increased 300% with zero downtime. The cloud migration has been transformational for our business.",
        author: 'Jennifer Walsh',
        role: 'CTO',
        avatar: 'JW'
      },
      image: '☁️',
      featured: false,
      duration: '4 months',
      teamSize: '6 experts'
    },
    {
      id: 'manufacturing-iot-automation',
      title: 'Smart Manufacturing: IoT-Powered Production Optimization',
      company: 'TechManufacture Inc',
      industry: 'Manufacturing',
      service: 'IoT & Automation',
      challenge: 'Inefficient production processes and lack of real-time visibility',
      solution: 'Implemented IoT sensors and automation systems for smart manufacturing',
      results: {
        efficiency: '42%',
        downtime: '67%',
        qualityImprovement: '35%',
        energySavings: '28%',
        timeframe: '10 months'
      },
      description: 'TechManufacture Inc needed to modernize their production facilities to compete in the digital age. Our IoT and automation solution transformed their operations.',
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Maintenance', 'Real-time Analytics'],
      metrics: [
        { label: 'Production Efficiency', value: '+42%', improvement: '+42%' },
        { label: 'Unplanned Downtime', value: '-67%', improvement: '-67%' },
        { label: 'Quality Score', value: '98.5%', improvement: '+35%' },
        { label: 'Energy Consumption', value: '-28%', improvement: '-28%' }
      ],
      testimonial: {
        quote: "The smart manufacturing solution has given us unprecedented visibility and control over our production processes.",
        author: 'David Rodriguez',
        role: 'Operations Director',
        avatar: 'DR'
      },
      image: '🏭',
      featured: false,
      duration: '10 months',
      teamSize: '10 experts'
    },
    {
      id: 'startup-devops-platform',
      title: 'Startup Success: Autonomous DevOps Platform Implementation',
      company: 'InnovateTech Startup',
      industry: 'Technology',
      service: 'DevOps & Infrastructure',
      challenge: 'Manual deployment processes causing delays and errors',
      solution: 'Implemented autonomous DevOps platform with CI/CD and self-healing infrastructure',
      results: {
        deploymentSpeed: '85%',
        errorReduction: '92%',
        teamProductivity: '60%',
        timeToMarket: '70%',
        timeframe: '3 months'
      },
      description: 'InnovateTech Startup was struggling with slow, error-prone deployments that were hampering their growth. Our autonomous DevOps platform accelerated their success.',
      technologies: ['CI/CD Pipeline', 'Docker', 'Kubernetes', 'Monitoring', 'Infrastructure as Code'],
      metrics: [
        { label: 'Deployment Speed', value: '< 5 min', improvement: '+85%' },
        { label: 'Deployment Errors', value: '-92%', improvement: '-92%' },
        { label: 'Team Productivity', value: '+60%', improvement: '+60%' },
        { label: 'Time to Market', value: '-70%', improvement: '-70%' }
      ],
      testimonial: {
        quote: "The DevOps platform has been a game-changer. We can now deploy features multiple times per day with complete confidence.",
        author: 'Alex Thompson',
        role: 'Founder & CEO',
        avatar: 'AT'
      },
      image: '🚀',
      featured: false,
      duration: '3 months',
      teamSize: '5 experts'
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology'];
  const services = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'DevOps & Infrastructure', 'IoT & Automation', 'Cybersecurity'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
};

<<<<<<< HEAD
export default CaseStudies;
=======
export default function CaseStudiesPage() {
	return (
  {/* Empty JSX fragment */}
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Case Studies
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Real results from real clients. See how we've transformed businesses across industries.
						</p>
					</div>
				</div>
			</section>

			{/* Industry Filter */}
			<section className="py-12 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{industries.map((industry) => (
							<button
								key={industry}
								className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
							>
								{industry}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Success Story</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we transformed TechCorp's operations with AI automation
						</p>
					</div>
					<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
						<div className="grid gap-8 lg:grid-cols-2">
							<div>
								<div className="flex items-center gap-2 mb-4">
									<Building className="h-5 w-5 text-blue-600" />
									<span className="text-sm text-gray-500">{caseStudies[0].industry}</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h3>
								<p className="text-gray-600 mb-6">{caseStudies[0].challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{caseStudies[0].duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{caseStudies[0].team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
							<div>
								<h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
								<div className="space-y-3">
									{caseStudies[0].results.map((result, index) => (
										<div key={index} className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											<span className="text-gray-700">{result}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">More Success Stories</h2>
						<p className="mt-6 text-lg text-gray-600">
							Explore how we've helped businesses across different industries achieve their goals
						</p>
					</div>
					<div className="grid gap-8 lg: anygrid-cols-2">
						{caseStudies.slice(1).map((study)  => (
							<div key={study.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-2">
										<Building className="h-5 w-5 text-blue-600" />
										<span className="text-sm text-gray-500">{study.industry}</span>
									</div>
									<div className="flex items-center gap-1">
										{Array.from({ length: anystudy.rating }).map((_, i)  => (
											<Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
										))}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
								<p className="text-gray-600 mb-4">{study.challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{study.duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{study.team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									View Details <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Track Record<string, any>
						<p className="mt-6 text-lg text-gray-600">
							Consistent results across all our client engagements
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
							<p className="text-gray-600">Client Satisfaction Rate</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
							<p className="text-gray-600">Total Client Savings</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
							<p className="text-gray-600">Projects Completed</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
							<p className="text-gray-600">Support Available</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we deliver consistent results for our clients
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<TrendingUp className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
							<p className="text-gray-600">
								We analyze your current state and identify opportunities for improvement.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Zap className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
							<p className="text-gray-600">
								We develop a comprehensive plan tailored to your specific needs and goals.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
							<p className="text-gray-600">
								Our expert team executes the solution with precision and attention to detail.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<Award className="h-8 w-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
							<p className="text-gray-600">
								We continuously monitor and optimize to ensure maximum performance and ROI.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Ready to Write Your Success Story?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss how our expertise can help your business achieve similar results.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get Started Today
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Explore Our Services →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}