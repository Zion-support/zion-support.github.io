import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { Badge } from '../components/ui/Badge';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  BarChart3 
} from 'lucide-react';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      client: 'TechCorp Inc.',
      industry: 'E-commerce',
      challenge: 'Improve conversion rates and user experience',
      solution: 'Implemented AI-powered recommendations and streamlined checkout',
      results: {
        conversion: '+45%',
        revenue: '+$2.3M',
        users: '+120K'
      }
    }
  ];

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses achieve their goals."
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Case Studies
          </h1>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                  <Badge variant="secondary">{study.industry}</Badge>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{study.results.conversion}</p>
                    <p className="text-gray-600">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">{study.results.revenue}</p>
                    <p className="text-gray-600">Revenue Increase</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">{study.results.users}</p>
                    <p className="text-gray-600">New Users</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;