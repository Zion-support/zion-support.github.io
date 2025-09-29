import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Zion Tech Group Success Stories',
  description: 'Real-world case studies showing how we helped businesses transform with AI and IT solutions.',
  keywords: 'case studies, success stories, AI implementation, IT transformation, business results',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'fintech-ai-transformation',
      title: 'Fintech AI Transformation: 300% Revenue Growth',
      company: 'TechCorp Solutions',
      industry: 'Financial Technology',
      challenge: 'Manual data processing and slow decision-making processes were limiting growth potential.',
      solution: 'Implemented AI data analytics platform with predictive modeling and real-time dashboards.',
      results: [
        { metric: '300%', label: 'Faster Decision Making' },
        { metric: '40%', label: 'Revenue Growth' },
        { metric: '80%', label: 'Reduced Manual Work' },
        { metric: '6 months', label: 'ROI Achievement' }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI data analytics transformed our decision-making process completely. We now make data-driven decisions 300% faster than before, and our revenue has increased by 40% in just 6 months.",
        author: "Sarah Johnson",
        title: "CEO",
        company: "TechCorp Solutions"
      },
      image: "/images/case-studies/fintech-transformation.jpg",
      featured: true
    },
    {
      id: 'manufacturing-automation',
      title: 'Manufacturing Revolution: 95% Defect Reduction',
      company: 'Precision Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'High defect rates and inefficient production processes were impacting quality and profitability.',
      solution: 'Deployed edge AI systems for real-time quality control and predictive maintenance.',
      results: [
        { metric: '95%', label: 'Defect Reduction' },
        { metric: '300%', label: 'Efficiency Gain' },
        { metric: '$2.5M', label: 'Annual Savings' },
        { metric: '99.9%', label: 'Uptime' }
      ],
      testimonial: {
        quote: "Edge AI transformed our production lines completely. We've never seen such dramatic improvements in quality and efficiency.",
        author: "Jennifer Liu",
        title: "Operations Director",
        company: "Precision Manufacturing Corp"
      },
      image: "/images/case-studies/manufacturing-automation.jpg",
      featured: true
    },
    {
      id: 'healthcare-ai-implementation',
      title: 'Healthcare AI: 98% Patient Satisfaction',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Patient care coordination and administrative inefficiencies were affecting service quality.',
      solution: 'Implemented AI virtual assistant for patient support and workflow automation for administrative tasks.',
      results: [
        { metric: '98%', label: 'Patient Satisfaction' },
        { metric: '60%', label: 'Cost Reduction' },
        { metric: '90%', label: 'Auto-Handling' },
        { metric: '24/7', label: 'Support Coverage' }
      ],
      testimonial: {
        quote: "The AI virtual assistant handles patient inquiries with incredible accuracy. Our satisfaction scores have never been higher.",
        author: "Dr. Michael Rodriguez",
        title: "Chief Medical Officer",
        company: "MedTech Innovations"
      },
      image: "/images/case-studies/healthcare-ai.jpg",
      featured: false
    },
    {
      id: 'retail-cloud-migration',
      title: 'Retail Cloud Migration: 45% Cost Savings',
      company: 'RetailTech Solutions',
      industry: 'Retail',
      challenge: 'Legacy infrastructure was expensive to maintain and couldn't scale with business growth.',
      solution: 'Executed seamless cloud migration with zero downtime and implemented auto-scaling.',
      results: [
        { metric: '45%', label: 'Cost Reduction' },
        { metric: '0%', label: 'Downtime' },
        { metric: '500%', label: 'Scalability' },
        { metric: '99.9%', label: 'Reliability' }
      ],
      testimonial: {
        quote: "The cloud migration was flawless. We saved 45% on infrastructure costs while improving performance dramatically.",
        author: "David Chen",
        title: "CTO",
        company: "RetailTech Solutions"
      },
      image: "/images/case-studies/retail-cloud.jpg",
      featured: false
    },
    {
      id: 'startup-devops-automation',
      title: 'Startup DevOps: 500% Faster Deployments',
      company: 'Digital Dynamics',
      industry: 'Technology',
      challenge: 'Manual deployment processes were slowing down development and causing frequent errors.',
      solution: 'Built comprehensive CI/CD pipeline with automated testing and deployment.',
      results: [
        { metric: '500%', label: 'Faster Deployments' },
        { metric: '0', label: 'Deployment Errors' },
        { metric: '10x', label: 'Release Velocity' },
        { metric: '3 months', label: 'ROI Timeline' }
      ],
      testimonial: {
        quote: "DevOps automation revolutionized our development process. We deploy 10x faster with zero errors.",
        author: "Amanda Thompson",
        title: "Engineering Manager",
        company: "Digital Dynamics"
      },
      image: "/images/case-studies/devops-automation.jpg",
      featured: false
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise Security: 95% Incident Reduction',
      company: 'Financial Services Inc',
      industry: 'Financial Services',
      challenge: 'Growing cybersecurity threats and compliance requirements needed comprehensive protection.',
      solution: 'Implemented zero-trust security architecture with advanced threat detection.',
      results: [
        { metric: '95%', label: 'Incident Reduction' },
        { metric: '100%', label: 'Compliance' },
        { metric: '24/7', label: 'Monitoring' },
        { metric: '< 15s', label: 'Threat Response' }
      ],
      testimonial: {
        quote: "Our security posture is now industry-leading. We've eliminated 95% of security incidents.",
        author: "Robert Kim",
        title: "Security Director",
        company: "Financial Services Inc"
      },
      image: "/images/case-studies/enterprise-security.jpg",
      featured: false
    },
    {
      id: 'enterprise-ai-transformation-2025',
      title: 'Enterprise AI Transformation: $5.2M ROI in 18 Months',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual processes across operations, high costs, and supply chain inefficiencies were limiting growth.',
      solution: 'Comprehensive AI transformation across predictive maintenance, supply chain optimization, and customer service.',
      results: [
        { metric: '$5.2M', label: 'Total ROI' },
        { metric: '325%', label: 'Return on Investment' },
        { metric: '40%', label: 'Efficiency Improvement' },
        { metric: '95%', label: 'Customer Satisfaction' }
      ],
      testimonial: {
        quote: "The AI transformation exceeded all our expectations. We achieved $5.2M ROI in just 18 months with comprehensive operational improvements across all departments.",
        author: "Maria Rodriguez",
        title: "CEO",
        company: "Global Manufacturing Corp"
      },
      image: "/images/case-studies/enterprise-ai-transformation.jpg",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Success Stories That Inspire
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how businesses across industries have transformed their operations 
            and achieved remarkable results with our AI and IT solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-75">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-sm opacity-75">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3 months</div>
              <div className="text-sm opacity-75">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world transformations with measurable results and lasting impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <FeaturedCaseStudy key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of successful implementations across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that have transformed their operations with our proven solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCaseStudy({ caseStudy }: { caseStudy: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">{caseStudy.results[0].metric}</div>
          <div className="text-sm opacity-90">{caseStudy.results[0].label}</div>
        </div>
      </div>
      <div className="p-8">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {caseStudy.industry}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.results.map((result: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
              <div className="text-sm text-gray-600">{result.label}</div>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
          "{caseStudy.testimonial.quote}"
        </blockquote>

        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            {caseStudy.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
            <div className="text-sm text-gray-600">{caseStudy.testimonial.title}, {caseStudy.testimonial.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: any }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-2xl font-bold">{caseStudy.results[0].metric}</div>
          <div className="text-xs opacity-90">{caseStudy.results[0].label}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
            {caseStudy.industry}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{caseStudy.solution}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {caseStudy.results.slice(0, 4).map((result: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-blue-600">{result.metric}</div>
              <div className="text-xs text-gray-600">{result.label}</div>
            </div>
          ))}
        </div>

        <blockquote className="text-xs italic text-gray-700 mb-4 border-l-2 border-blue-300 pl-3">
          "{caseStudy.testimonial.quote.substring(0, 100)}..."
        </blockquote>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
            {caseStudy.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">{caseStudy.testimonial.author}</div>
            <div className="text-xs text-gray-600">{caseStudy.testimonial.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}