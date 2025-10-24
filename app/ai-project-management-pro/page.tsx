<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0458
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Brain, Clock, Target, BarChart3 } from 'lucide-react';
export default function AIProjectManagementPro() {
  return null;
};

  return null;
};

export default function AiProjectManagementProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Project Management Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Project Management Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai project management pro solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
  return null;
=======


'use client';
export default function AIProjectManagementPro() {export default Page;
'use client';
const Page: React.FC = () => {
  const pricingPlans = [{
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 projects',
        'Basic task management',
        'Email support',
        'Basic analytics']},
    {name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing teams',
      features: ['Up to 50 projects',
        'Advanced project management',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools']},
    {name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited projects',
        'Custom workflows',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'],
      popular: false
  ]

  const testimonials = [name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'AI Project Management Pro helped us increase productivity by 40% and reduce project delays by 60%.',
      rating: 5},
      name: 'Michael Chen',
      company: 'Consulting Firm',
      content: 'The AI-powered insights and automated scheduling have transformed how we manage our projects.',
      rating: 5
    },
      name: 'Emily Rodriguez',
      company: 'Software Company',
      content: 'Our team collaboration and project visibility have improved dramatically since using this platform.',
      rating: 5]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

export default function AiprojectmanagementproPage() {
  return (
<<<<<<< HEAD
    <title>AI Project Management Pro - Zion Tech Group</title>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai project management pro services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Project Management Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project management pro services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
