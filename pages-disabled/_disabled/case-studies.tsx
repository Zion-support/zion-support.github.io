import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  User,
  Star,
  Users,
  Globe,
  Shield,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';

const caseStudyCategories = [
  { name: "All", count: 25, active: true },
  { name: "AI Solutions", count: 8, active: false },
  { name: "IT Services", count: 6, active: false },
  { name: "Micro SaaS", count: 5, active: false },
  { name: "Enterprise", count: 4, active: false },
  { name: "Startup", count: 2, active: false }
];

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    client: "Global E-commerce Retailer",
    industry: "E-commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI chatbot system with natural language processing",
    results: "Reduced support costs by 60% and improved customer satisfaction by 40%",
    roi: "300%"
  }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations across various industries."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real results from real clients
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses transform their operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.client} • {study.industry}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-sm text-gray-600">{study.results}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">ROI:</span>
                    <span className="text-sm font-medium text-green-600">
                      {study.roi}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}