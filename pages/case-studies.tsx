import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Building,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    challenge: 'High customer service costs and response times',
    solution: 'Implemented AI chatbots and automated ticket routing',
    results: '60% reduction in response time, 40% cost savings',
    duration: '3 months',
    team: '5 AI engineers'
  },
  {
    title: 'Cloud Infrastructure Migration',
    client: 'FinanceFlow Ltd.',
    industry: 'Financial Services',
    challenge: 'Legacy system limitations and scalability issues',
    solution: 'Migrated to AWS with microservices architecture',
    results: '99.9% uptime, 50% performance improvement',
    duration: '6 months',
    team: '8 cloud architects'
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout title="Case Studies - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100">
                Real results from our technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <p className="text-gray-600"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600"><strong>Industry:</strong> {study.industry}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}