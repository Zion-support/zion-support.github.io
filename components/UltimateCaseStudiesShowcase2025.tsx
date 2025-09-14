'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateCaseStudiesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% efficiency loss and $50M annual waste",
      solution: "AI-powered digital transformation with predictive maintenance and automated quality control",
      results: {
        efficiency: "85%",
        costSavings: "$50M",
        downtime: "70%",
        quality: "95%",
        roi: "340%"
      },
      duration: "18 months",
      team: "25 experts",
      technologies: ["AI/ML", "IoT", "Cloud", "Automation"],
      testimonial: "This transformation exceeded all our expectations. We achieved ROI in just 8 months and continue to see benefits.",
      author: "Jennifer Martinez, CEO",
      image: "/images/case-study-manufacturing.jpg",
      category: "Digital Transformation",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Platform",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes causing delays and 15% misdiagnosis rate",
      solution: "AI-powered diagnostic platform with machine learning algorithms for medical imaging",
      results: {
        accuracy: "98%",
        timeReduction: "80%",
        misdiagnosis: "85%",
        patientSatisfaction: "92%",
        roi: "280%"
      },
      duration: "12 months",
      team: "18 experts",
      technologies: ["AI/ML", "Computer Vision", "Cloud", "API"],
      testimonial: "The AI diagnostic platform has revolutionized our patient care. We can now diagnose conditions 80% faster with 98% accuracy.",
      author: "Dr. Robert Chen, Chief Medical Officer",
      image: "/images/case-study-healthcare.jpg",
      category: "AI Healthcare",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services Automation Revolution",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Manual loan processing taking 5-7 days with high error rates",
      solution: "End-to-end loan processing automation with AI risk assessment and fraud detection",
      results: {
        processingTime: "90%",
        accuracy: "99.5%",
        fraudDetection: "95%",
        customerSatisfaction: "88%",
        roi: "420%"
      },
      duration: "10 months",
      team: "20 experts",
      technologies: ["AI/ML", "Blockchain", "Cloud", "Microservices"],
      testimonial: "Our loan processing is now 90% faster with 99.5% accuracy. Customer satisfaction has increased dramatically.",
      author: "Sarah Thompson, CTO",
      image: "/images/case-study-fintech.jpg",
      category: "Financial Automation",
      featured: true
    },
    {
      id: 4,
      title: "Retail Supply Chain Optimization",
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Supply chain inefficiencies causing $30M in lost sales annually",
      solution: "AI-driven supply chain optimization with demand forecasting and inventory management",
      results: {
        inventoryOptimization: "75%",
        stockouts: "90%",
        wasteReduction: "60%",
        revenueIncrease: "25%",
        roi: "380%"
      },
      duration: "14 months",
      team: "22 experts",
      technologies: ["AI/ML", "Predictive Analytics", "IoT", "Cloud"],
      testimonial: "The AI optimization system eliminated stockouts and reduced waste by 60%. Our revenue increased by 25%.",
      author: "Michael Rodriguez, Supply Chain Director",
      image: "/images/case-study-retail.jpg",
      category: "Supply Chain",
      featured: false
    },
    {
      id: 5,
      title: "Education Technology Platform",
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Personalized learning at scale with 10,000+ students",
      solution: "AI-powered learning management system with personalized content and progress tracking",
      results: {
        studentEngagement: "95%",
        learningOutcomes: "85%",
        teacherEfficiency: "70%",
        retentionRate: "90%",
        roi: "250%"
      },
      duration: "16 months",
      team: "15 experts",
      technologies: ["AI/ML", "Personalization", "Cloud", "Mobile"],
      testimonial: "Student engagement increased by 95% with personalized learning paths. Teachers can focus on teaching.",
      author: "Dr. Lisa Park, Principal",
      image: "/images/case-study-education.jpg",
      category: "EdTech",
      featured: false
    },
    {
      id: 6,
      title: "Energy Grid Optimization",
      company: "PowerGrid Systems",
      industry: "Energy",
      challenge: "Energy distribution inefficiencies causing 20% waste and frequent outages",
      solution: "Smart grid optimization with AI-powered load balancing and predictive maintenance",
      results: {
        efficiency: "90%",
        wasteReduction: "80%",
        outageReduction: "85%",
        costSavings: "$40M",
        roi: "320%"
      },
      duration: "20 months",
      team: "30 experts",
      technologies: ["AI/ML", "IoT", "Smart Grid", "Cloud"],
      testimonial: "The smart grid optimization reduced waste by 80% and outages by 85%. We saved $40M annually.",
      author: "James Wilson, Chief Engineer",
      image: "/images/case-study-energy.jpg",
      category: "Smart Infrastructure",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies', count: caseStudies.length },
    { id: 'Digital Transformation', name: 'Digital Transformation', count: caseStudies.filter(cs => cs.category === 'Digital Transformation').length },
    { id: 'AI Healthcare', name: 'AI Healthcare', count: caseStudies.filter(cs => cs.category === 'AI Healthcare').length },
    { id: 'Financial Automation', name: 'Financial Automation', count: caseStudies.filter(cs => cs.category === 'Financial Automation').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: caseStudies.filter(cs => cs.category === 'Supply Chain').length },
    { id: 'EdTech', name: 'EdTech', count: caseStudies.filter(cs => cs.category === 'EdTech').length },
    { id: 'Smart Infrastructure', name: 'Smart Infrastructure', count: caseStudies.filter(cs => cs.category === 'Smart Infrastructure').length }
  ];

  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 CASE STUDIES 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Success Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed case studies showcasing how we've helped businesses achieve extraordinary results 
            through AI, automation, and digital transformation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-slate-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {caseStudy.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{caseStudy.title}</h3>
                      <p className="text-gray-600">{caseStudy.company} • {caseStudy.industry}</p>
                    </div>
                  </div>
                  {caseStudy.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {caseStudy.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {caseStudy.duration}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {caseStudy.team} experts
                  </span>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(caseStudy.results).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-slate-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudy.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">{caseStudy.author}</div>
                      <div className="text-sm text-gray-600">{caseStudy.company}</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-800 transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and automation solutions. 
            Join the ranks of successful businesses we've transformed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateCaseStudiesShowcase2025;