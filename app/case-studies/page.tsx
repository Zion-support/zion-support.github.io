import React from 'react';
import Link from 'next/link';
import { Building, TrendingUp, Users, ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Real-world AI transformation success stories. See how Fortune 500 companies achieved $10M+ ROI with AI, quantum computing, and sustainable technology.',
  keywords: 'AI case studies, success stories, ROI, business transformation, Fortune 500, quantum computing',
};

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      title: "AI Sustainability Transformation 2026: $10M ROI Case Study",
      company: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing & Supply Chain",
      challenge: "Achieve carbon neutrality while maintaining business performance",
      solution: "Comprehensive green AI transformation with renewable energy integration",
      results: [
        { metric: "$10M", label: "Annual ROI" },
        { metric: "100%", label: "Carbon Neutral" },
        { metric: "80%", label: "Energy Reduction" }
      ],
      href: "/case-studies/ai-sustainability-transformation-2026",
      featured: true,
      date: "Jan 18, 2026"
    },
    {
      title: "AI Quantum Optimization 2026: 1000x Speed Improvement",
      company: "Leading Investment Bank",
      industry: "Financial Services",
      challenge: "Real-time portfolio optimization at scale",
      solution: "Quantum-enhanced AI optimization systems",
      results: [
        { metric: "1000x", label: "Speed Improvement" },
        { metric: "$12M", label: "Additional Returns" },
        { metric: "95%", label: "Solution Accuracy" }
      ],
      href: "/case-studies/ai-quantum-optimization-2026",
      featured: true,
      date: "Jan 15, 2026"
    }
  ];

  const caseStudies = [
    {
      title: "FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings",
      company: "FinTech Leader",
      industry: "Financial Technology",
      challenge: "Regulatory compliance and risk management",
      solution: "AI-powered risk assessment and automated governance",
      results: [
        { metric: "70%", label: "Risk Reduction" },
        { metric: "$2.5M", label: "Annual Savings" },
        { metric: "100%", label: "Compliance Rate" }
      ],
      href: "/case-studies/fintech-ai-risk-compliance-2025",
      date: "Jan 12, 2026"
    },
    {
      title: "TechCorp: 90% Efficiency Gain with AI",
      company: "TechCorp Inc.",
      industry: "E-commerce",
      challenge: "Manual data processing taking 40 hours/week",
      solution: "AI Data Analytics automation platform",
      results: [
        { metric: "90%", label: "Efficiency Gain" },
        { metric: "$500K", label: "Annual Savings" },
        { metric: "60%", label: "Cost Reduction" }
      ],
      href: "/case-studies/techcorp-ai-transformation",
      date: "Jan 10, 2026"
    },
    {
      title: "FinServe: GenAI Risk Mitigation & Compliance",
      company: "FinServe Corporation",
      industry: "Financial Services",
      challenge: "AI risk management and regulatory compliance",
      solution: "Advanced GenAI risk mitigation framework",
      results: [
        { metric: "70%", label: "Risk Reduction" },
        { metric: "100%", label: "Audit Ready" },
        { metric: "50%", label: "Faster Compliance" }
      ],
      href: "/case-studies/finserve-genai-risk-mitigation",
      date: "Jan 8, 2026"
    },
    {
      title: "RetailAI Corp: 150% Revenue Growth",
      company: "RetailAI Corporation",
      industry: "Retail",
      challenge: "Competitive market positioning and customer experience",
      solution: "AI-powered customer analytics and personalization",
      results: [
        { metric: "150%", label: "Revenue Growth" },
        { metric: "80%", label: "Cost Reduction" },
        { metric: "95%", label: "Customer Satisfaction" }
      ],
      href: "/case-studies/retail-ai-transformation",
      date: "Jan 5, 2026"
    },
    {
      title: "Enterprise AI Transformation: $5.2M ROI in 18 Months",
      company: "Fortune 500 Enterprise",
      industry: "Multi-Industry",
      challenge: "Digital transformation and operational efficiency",
      solution: "Comprehensive AI implementation across all business units",
      results: [
        { metric: "$5.2M", label: "ROI in 18 Months" },
        { metric: "85%", label: "Process Automation" },
        { metric: "60%", label: "Time Savings" }
      ],
      href: "/case-studies/enterprise-ai-transformation-2025",
      date: "Jan 3, 2026"
    },
    {
      title: "Healthcare AI Implementation: 40% Better Diagnostics",
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Improving patient outcomes and diagnostic accuracy",
      solution: "AI-powered diagnostic systems and patient care optimization",
      results: [
        { metric: "40%", label: "Better Diagnostics" },
        { metric: "60%", label: "Improved Outcomes" },
        { metric: "50%", label: "Cost Reduction" }
      ],
      href: "/case-studies/healthcare-ai-transformation",
      date: "Jan 1, 2026"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Success
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            {' '}Stories
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real-world AI transformation success stories. See how Fortune 500 companies and leading organizations 
          achieved remarkable results with AI, quantum computing, and sustainable technology solutions.
        </p>
      </div>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Success Stories</h2>
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study, index) => (
            <Link key={index} href={study.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                <div className="relative h-48 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Building className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                      <p className="text-green-100">{study.industry}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">{study.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h4>
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-600"><strong>Solution:</strong> {study.solution}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-green-600">{result.metric}</div>
                          <div className="text-xs text-gray-500">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-500">{study.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-2"><strong>Company:</strong> {study.company}</p>
                  <p className="text-gray-600 text-sm mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="text-gray-600 text-sm"><strong>Solution:</strong> {study.solution}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{result.metric}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">$50M+</div>
            <div className="text-green-100">Total ROI Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-green-100">Successful Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-green-100">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-green-100">Fortune 500 Clients</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the companies that have transformed their business with AI. Let's discuss how we can help 
          you achieve similar results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
          </Link>
          <Link
            href="/services"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}