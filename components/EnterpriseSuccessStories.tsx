import React from 'react';
import Link from 'next/link';

const EnterpriseSuccessStories = () => {
  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      logo: "🏢",
      challenge: "Manual data processing consuming 200+ hours weekly",
      solution: "AI Data Analytics & Workflow Automation",
      results: {
        timeSaved: "95%",
        costReduction: "60%",
        annualSavings: "$2.5M",
        roi: "400%"
      },
      testimonial: "Zion Tech Group's AI solutions transformed our operations. We achieved 95% time savings and $2.5M in annual cost reductions within 6 months.",
      author: "Sarah Johnson, CTO",
      link: "/case-studies/techcorp-ai-transformation"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      logo: "🏥",
      challenge: "Overwhelmed customer support with 10,000+ daily queries",
      solution: "AI Virtual Assistant & Predictive Analytics",
      results: {
        timeSaved: "80%",
        costReduction: "70%",
        annualSavings: "$1.8M",
        roi: "350%"
      },
      testimonial: "Our AI virtual assistant handles 80% of customer queries automatically, improving response times and reducing costs by $1.8M annually.",
      author: "Dr. Michael Chen, CEO",
      link: "/case-studies/healthtech-ai-customer-service"
    },
    {
      company: "FinanceFlow Ltd",
      industry: "FinTech",
      logo: "💳",
      challenge: "Complex financial processes requiring 50+ manual steps",
      solution: "AI Finance Automation & Risk Management",
      results: {
        timeSaved: "90%",
        costReduction: "75%",
        annualSavings: "$3.2M",
        roi: "500%"
      },
      testimonial: "The AI finance automation reduced our processing time by 90% and saved us $3.2M annually. ROI was achieved in just 4 months.",
      author: "Jennifer Martinez, CFO",
      link: "/case-studies/financeflow-ai-automation"
    },
    {
      company: "ManufacturingMax",
      industry: "Manufacturing",
      logo: "🏭",
      challenge: "Supply chain inefficiencies causing 30% production delays",
      solution: "AI Supply Chain Optimization & Edge Computing",
      results: {
        timeSaved: "85%",
        costReduction: "65%",
        annualSavings: "$4.1M",
        roi: "450%"
      },
      testimonial: "AI-powered supply chain optimization eliminated 85% of delays and saved us $4.1M in the first year alone.",
      author: "Robert Kim, Operations Director",
      link: "/case-studies/manufacturingmax-supply-chain-ai"
    },
    {
      company: "RetailAI Corp",
      industry: "Retail",
      logo: "🛍️",
      challenge: "Inventory management leading to 25% stockouts",
      solution: "AI Predictive Analytics & Demand Forecasting",
      results: {
        timeSaved: "70%",
        costReduction: "55%",
        annualSavings: "$2.8M",
        roi: "380%"
      },
      testimonial: "Our AI demand forecasting reduced stockouts by 95% and increased revenue by $2.8M through better inventory management.",
      author: "Lisa Thompson, VP of Operations",
      link: "/case-studies/retailai-demand-forecasting"
    },
    {
      company: "CyberShield Inc",
      industry: "Cybersecurity",
      logo: "🔒",
      challenge: "Advanced threats requiring 24/7 monitoring",
      solution: "AI Cybersecurity & Autonomous Threat Response",
      results: {
        timeSaved: "95%",
        costReduction: "80%",
        annualSavings: "$1.5M",
        roi: "600%"
      },
      testimonial: "AI cybersecurity reduced our threat response time by 95% and prevented $1.5M in potential losses annually.",
      author: "David Park, CISO",
      link: "/case-studies/cybershield-ai-security"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">Proven Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Real Companies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See how leading enterprises achieved remarkable transformations with our AI solutions. 
            Average ROI: 400%+ within 6 months.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-sm text-gray-500">{story.industry}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{story.results.timeSaved}</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{story.results.costReduction}</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{story.results.annualSavings}</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{story.results.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                <blockquote className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm italic mb-2">"{story.testimonial}"</p>
                  <cite className="text-xs text-gray-500">— {story.author}</cite>
                </blockquote>

                <Link 
                  href={story.link}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your business with the same AI solutions that helped these companies 
              achieve 400%+ ROI and millions in savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Our Solutions
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSuccessStories;