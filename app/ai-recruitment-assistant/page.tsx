import { Users, Search, Brain, Target, CheckCircle, ArrowRight, Zap, Shield, BarChart } from 'lucide-react';

const AIRecruitmentAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Candidate Matching',
      description: 'AI-powered matching algorithm that finds the best candidates based on skills, experience, and cultural fit.'
    },
    {
      icon: Brain,
      title: 'Resume Analysis',
      description: 'Automated resume screening and analysis to identify top talent quickly and efficiently.',
    },
    {
      icon: Target,
      title: 'Job Description Optimization',
      description: 'AI-generated job descriptions that attract the right candidates and improve application quality.',
    },
    {
      icon: Users,
      title: 'Interview Scheduling',
      description: 'Automated interview scheduling and coordination to streamline the hiring process.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on hiring metrics, candidate pipeline, and recruitment performance.'
    },
    {
      icon: Zap,
      title: 'Automated Screening',
      description: 'AI-powered initial screening questions and assessments to filter candidates effectively.',
    }
  ];

export default function GDataAnalyticsZionTechGroupPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ai Recruitment Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Recruitment Assistant solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Recruitment Assistant</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai recruitment assistant solutions designed to meet your business needs.
          </p>
            </div></div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </div>
    </React.Fragment>
  );
}
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AirecruitmentassistantPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Recruitment Assistant - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Recruitment Assistant</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai recruitment assistant services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AirecruitmentassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Recruitment Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai recruitment assistant services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Recruitment Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai recruitment assistant services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
