import React from 'react';
import Layout from '../components/layout/MainLayout';
import {
  Users,
  Building,
  Globe,
  Award,
  Clock,
  BarChart3,
  Cloud,
  Shield
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service volume and response times",
    solution: "Implemented AI chatbot and automated response system",
    results: "50% reduction in response time, 30% increase in customer satisfaction"
  },
  {
    id: 2,
    title: "Cloud Migration and Optimization",
    client: "Financial Services Company",
    industry: "Finance",
    challenge: "Legacy system migration and performance optimization",
    solution: "Complete cloud migration with microservices architecture",
    results: "40% cost reduction, 60% performance improvement"
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Real-world examples of our successful technology implementations."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our successful technology implementations.
            </p>
          </div>
          
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    <span>{study.client}</span>
                    <span className="mx-2">•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}