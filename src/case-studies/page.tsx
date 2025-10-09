import React from 'react';
import { TrendingUp, DollarSign, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high customer acquisition costs",
      solution: "AI-driven personalization and dynamic pricing strategies",
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.',
      results: {
        roi: "+85%",
        costReduction: "+$2.3M",
        conversionRate: "+45%",
        customerSatisfaction: "+92%"
      },
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: "FinTech Solutions",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and errors in loan processing",
      solution: "Automated loan processing with AI risk assessment",
      description: 'Implemented AI-powered loan processing system that reduced processing time by 80% and improved accuracy.',
      results: {
        roi: "+120%",
        processingTime: "-80%",
        accuracy: "+95%",
        customerSatisfaction: "+88%"
      },
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: "HealthTech Corp",
      industry: "Healthcare",
      challenge: "Inefficient patient data management and diagnosis delays",
      solution: "AI-powered diagnostic assistance and patient management system",
      description: 'Developed AI system for faster and more accurate medical diagnoses, improving patient outcomes.',
      results: {
        roi: "+95%",
        diagnosisTime: "-60%",
        accuracy: "+90%",
        patientSatisfaction: "+94%"
      },
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: "Manufacturing Plus",
      industry: "Manufacturing",
      challenge: "Production inefficiencies and quality control issues",
      solution: "IoT sensors and AI-powered predictive maintenance",
      description: 'Implemented smart manufacturing solutions with predictive maintenance and quality optimization.',
      results: {
        roi: "+75%",
        downtime: "-70%",
        quality: "+85%",
        efficiency: "+60%"
      },
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with AI and technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                  
                  <button className="w-full bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors inline-block"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="bg-transparent border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors inline-block"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;