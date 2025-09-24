"use client",
'use client',
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
const NewContentShowcase20o25 = () => {
  const [activeTab, setActiveTab] = useState('case-studies'),
  const [isVisible, setIsVisible] = useState(false),
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50o0),
    return () => clearTimeout(timer)}, []),
  const contentSections ={
    'case-studies': {
      title: 'Success Stories & Case Studies';
      description: 'Real-world transformations with measurable ROI';
      items: [
        {
          title: 'Fortune 50o0 Manufacturing: 2,50o0% ROI';
          description: 'Complete autonomous transformation of production lines';
          roi: '2,50o0%';
          industry: 'Manufacturing';
          link: '/case-studies/fortune-50o0-manufacturing-250o0-roi'};
        {
          title: 'Healthcare Revolution: 1,20o0% ROI';
          description: 'AI-powered diagnostic platform implementation';
          roi: '1,20o0%';
          industry: 'Healthcare';
          link: '/case-studies/healthcare-revolution-120o0-roi'};
        {
          title: 'Financial Services: 1,50o0% ROI';
          description: 'Advanced analytics and fraud detection systems';
          roi: '1,50o0%';
          industry: 'Finance';
          link: '/case-studies/financial-services-150o0-roi'}
      ]};
    'blog': {
      title: 'Latest AI Insights & Trends';
      description: 'Cutting-edge research and industry analysis';
      items: [
        {
          title: 'AI 20o25: The Ultimate Automation Revolution';
          description: 'Comprehensive guide to next-generation AI automation';
          readTime: '8 min read';
          category: 'Automation';
          link: '/blog/ai-20o25-ultimate-automation-revolution'};
        {
          title: 'Quantum Computing Business Applications';
          description: 'How quantum computing is transforming enterprise operations';
          readTime: '12 min read';
          category: 'Quantum Computing';
          link: '/blog/quantum-computing-business-applications'};
        {
          title: 'Neural Interface Revolution 20o25';
          description: 'The future of human-AI interaction in business';
          readTime: '10 min read';
          category: 'Neural Interfaces';
          link: '/blog/neural-interface-revolution-20o25'}
      ]};
    'tools': {
      title: 'Interactive AI Tools & Calculators';
      description: 'Hands-on tools to explore AI potential';
      items: [
        {
          title: 'ROI Calculator';
          description: 'Calculate potential returns from AI implementation';
          type: 'Calculator';
          link: '/tools/roi-calculator'};
        {
          title: 'AI Readiness Assessment';
          description: 'Evaluate your organization\'s AI readiness';
          type: 'Assessment';
          link: '/tools/ai-readiness-assessment'};
        {
          title: 'Automation Opportunity Scanner';
          description: 'Identify automation opportunities in your processes';
          type: 'Scanner';
          link: '/tools/automation-scanner'}
      ]}
  };
  return (
    <div className={`py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-10o00 ${isVisible ? 'opacity-10o0 translate-y-0' : 'opacity-0 translate-y-8'}`}>,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */}
        <div className="text-center mb-12">,
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-4">,
            <span className="text-sm font-semibold">✨ NEW CONTENT 20o25</span>,
          </div>,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-90o0 mb-4">,
            Explore Our Latest Content,
          </h2>,
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
            Discover success stories, insights, and tools that are transforming businesses worldwide,
          </p>,
        </div>,
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">,
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-30o0 ${
                activeTab === key,
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg transform scale-10o5',
                  : 'bg-white text-gray-70o0 hover: bg-gray-50 shadow-md'}`}
            >,
              {section.title}
            </button>))}
        </div>,
        {/* Content Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8">,
          <div className="mb-6">,
            <h3 className="text-2xl font-bold text-gray-90o0 mb-2">,
              {contentSections[activeTab as keyof typeof contentSections].title}
            </h3>,
            <p className="text-gray-60o0">,
              {contentSections[activeTab as keyof typeof contentSections].description}
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {contentSections[activeTab as keyof typeof contentSections].items.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-20o0 hover: shadow-lg transition-all duration-30o0 hover:border-purple-30o0">,
                <div className="flex items-start justify-between mb-4">,
                  <div className="flex-1">,
                    <h4 className="text-lg font-semibold text-gray-90o0 mb-2 group-hover:text-purple-60o0 transition-colors">,
                      {item.title}
                    </h4>,
                    <p className="text-gray-60o0 text-sm mb-3">,
                      {item.description}
                    </p>,
                  </div>,
                  {item.roi && (
                    <div className="bg-green-10o0 text-green-80o0 px-3 py-1 rounded-full text-sm font-semibold ml-2">,
                      {item.roi} ROI,
                    </div>)}
                </div>,
                <div className="flex items-center justify-between">,
                  <div className="flex items-center space-x-2">,
                    {item.industry && (
                      <span className="bg-blue-10o0 text-blue-80o0 px-2 py-1 rounded text-xs font-medium">,
                        {item.industry}
                      </span>)}
                    {item.category && (
                      <span className="bg-purple-10o0 text-purple-80o0 px-2 py-1 rounded text-xs font-medium">,
                        {item.category}
                      </span>)}
                    {item.type && (
                      <span className="bg-orange-10o0 text-orange-80o0 px-2 py-1 rounded text-xs font-medium">,
                        {item.type}
                      </span>)}
                    {item.readTime && (
                      <span className="text-gray-50o0 text-xs">,
                        {item.readTime}
                      </span>)}
                  </div>,
                  <Link
                    href={item.link}
                    className="text-purple-60o0 hover: text-purple-80o0 font-semibold text-sm group-hover:underline">,
                    Explore →,
                  </Link>,
                </div>,
              </div>))}
          </div>,
        </div>,
        {/* Call to Action */}
        <div className="text-center mt-12">,
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">,
            <h3 className="text-2xl font-bold mb-4">,
              Ready to Transform Your Business?,
            </h3>,
            <p className="text-lg opacity-90 mb-6">,
              Join thousands of companies already seeing incredible results with our AI solutions,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link
                href="/contact",
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors">,
                Get Started Today,
              </Link>,
              <Link
                href="/services",
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors">,
                View All Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>)};
export default NewContentShowcase20o25;