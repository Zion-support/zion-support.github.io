import React from 'react';
import Link from 'next/link';

const CaseStudiesShowcase = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Retail Chain: 450% ROI with AI Automation",
      company: "Fortune 500 Retailer",
      industry: "Retail",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and chatbot customer service",
      results: {
        roi: "450%",
        timeSaved: "60%",
        costReduction: "35%",
        customerSatisfaction: "95%"
      },
      image: "/images/case-studies/retail-automation.jpg",
      testimonial: "The AI automation system transformed our operations completely. We've seen unprecedented efficiency gains and cost savings."
    },
    {
      id: 2,
      title: "Healthcare Provider: 300% Efficiency Boost",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient data management and appointment scheduling inefficiencies",
      solution: "AI-driven patient management system and intelligent scheduling",
      results: {
        roi: "300%",
        timeSaved: "70%",
        costReduction: "40%",
        patientSatisfaction: "98%"
      },
      image: "/images/case-studies/healthcare-ai.jpg",
      testimonial: "Our patient care has improved dramatically while reducing administrative overhead significantly."
    },
    {
      id: 3,
      title: "Manufacturing Giant: 500% Productivity Increase",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production line optimization and predictive maintenance",
      solution: "AI-powered predictive maintenance and production optimization",
      results: {
        roi: "500%",
        timeSaved: "80%",
        costReduction: "50%",
        uptime: "99.5%"
      },
      image: "/images/case-studies/manufacturing-ai.jpg",
      testimonial: "The predictive maintenance system has revolutionized our production efficiency and reduced downtime to near zero."
    },
    {
      id: 4,
      title: "Financial Services: 250% Revenue Growth",
      company: "Leading FinTech Company",
      industry: "Financial Services",
      challenge: "Fraud detection and customer onboarding processes",
      solution: "Advanced AI fraud detection and automated onboarding systems",
      results: {
        roi: "250%",
        timeSaved: "65%",
        costReduction: "30%",
        fraudReduction: "95%"
      },
      image: "/images/case-studies/fintech-ai.jpg",
      testimonial: "Our fraud detection capabilities are now industry-leadingand customer onboarding is seamless and fast."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies achieved remarkable ROI and operational excellence with our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{study.results.timeSaved}</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{study.results.costReduction}</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {study.results.customerSatisfaction || study.results.patientSatisfaction || study.results.uptime || study.results.fraudReduction}
                    </div>
                    <div className="text-sm text-gray-600">
                      {study.results.customerSatisfaction ? 'Customer Satisfaction' : 
                       study.results.patientSatisfaction ? 'Patient Satisfaction' :
                       study.results.uptime ? 'Uptime' : 'Fraud Reduction'}
                    </div>
                  </div>
                </div>

                <blockquote className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 italic">"{study.testimonial}"</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Case Studies
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesShowcase;