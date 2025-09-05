import React from 'react';
import Layout from '../../components/Layout';
import { BookOpen, Users, Award, Clock, CheckCircle, Zap } from 'lucide-react';

const trainingPrograms = [
  {
    title: "AI & Machine Learning",
    description: "Comprehensive training in artificial intelligence and machine learning technologies",
    icon: BookOpen,
    duration: "8 weeks",
    level: "Intermediate",
    features: ["Python Programming", "TensorFlow", "Deep Learning", "Model Deployment"]
  },
  {
    title: "Cloud Architecture",
    description: "Master cloud computing platforms and architecture patterns",
    icon: Users,
    duration: "6 weeks",
    level: "Advanced",
    features: ["AWS Services", "Azure Platform", "DevOps Practices", "Microservices"]
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts and best practices",
    icon: Award,
    duration: "4 weeks",
    level: "Beginner",
    features: ["Threat Analysis", "Security Protocols", "Incident Response", "Compliance"]
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable business insights",
    icon: Clock,
    duration: "5 weeks",
    level: "Intermediate",
    features: ["Data Visualization", "Statistical Analysis", "Business Intelligence", "Predictive Modeling"]
  }
];

const trainingFeatures = [
  "Expert Instructors",
  "Hands-on Projects",
  "Industry Certifications",
  "Flexible Scheduling",
  "Career Support",
  "Lifetime Access"
];

export default function TrainingPage() {
  return (
    <Layout
      title="Training Programs - Zion Tech Group"
      description="Professional training programs in AI, cloud computing, cybersecurity, and data analytics. Advance your career with expert-led courses."
      keywords="training programs, professional development, AI training, cloud training, cybersecurity training, data analytics training"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional
                <span className="block text-indigo-400">Training</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Advance your career with expert-led training programs in cutting-edge technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Browse Programs
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Training Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive training programs designed by industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Training?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive training that prepares you for real-world challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have advanced their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                View All Programs
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
                Get Career Advice
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}