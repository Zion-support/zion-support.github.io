import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [;
    {
      title: 'General Questions',;
      icon: '❓',;
      questions: [;
        {
          id: 1,;
          question: 'What services does Zion Tech Group offer?',;
          answer: 'Zion Tech Group provides comprehensive technology solutions including AI development, cloud architecture, micro SaaS applications, IT services, digital transformation, cybersecurity, and custom software development. We help businesses modernize their technology infrastructure and implement cutting-edge solutions.'},;
        {
          id: 2,;
          question: 'How long has Zion Tech Group been in business?',;
          answer: 'Zion Tech Group has been providing technology solutions for several years, helping businesses across various industries transform their digital presence. We have a proven track record of successful project deliveries and satisfied clients.'},;
        {
          id: 3,;
          question: 'What industries do you serve?',;
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, education, and startups. Our solutions are tailored to meet the specific needs and compliance requirements of each industry.'}
      ]},;
    {
      title: 'AI & Machine Learning',;
      icon: '🤖',;
      questions: [;
        {
          id: 4,;
          question: 'What AI services do you provide?',;
          answer: 'Our AI services include custom AI model development, machine learning implementation, natural language processing, computer vision, predictive analytics, AI-powered automation, and AI consulting. We help businesses integrate AI into their existing workflows and create new AI-driven solutions.'},;
        {
          id: 5,;
          question: 'How do you ensure AI model accuracy and reliability?',;
          answer: 'We follow rigorous testing and validation processes, including data quality assessment, model training with diverse datasets, cross-validation, performance monitoring, and continuous improvement. Our AI models undergo extensive testing before deployment and are monitored continuously for performance.'},;
        {
          id: 6,;
          question: 'Can you help with AI strategy and planning?',;
          answer: 'Yes, we provide comprehensive AI strategy consulting including AI readiness assessment, use case identification, technology roadmap development, ROI analysis, and implementation planning. We help businesses understand how AI can benefit their specific operations.'}
      ]},;
    {
      title: 'Cloud Services',;
      icon: '☁️',;
      questions: [;
        {
          id: 7,;
          question: 'What cloud platforms do you work with?',;
          answer: 'We work with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help businesses choose the right cloud platform based on their specific needs, budget, and technical requirements.'},;
        {
          id: 8,;
          question: 'How do you handle cloud migration?',;
          answer: 'Our cloud migration process includes assessment and planning, architecture design, data migration, application migration, testing and validation, and post-migration support. We ensure minimal downtime and maintain data integrity throughout the migration process.'},;
        {
          id: 9,;
          question: 'Do you provide cloud security services?',;
          answer: 'Yes, we provide comprehensive cloud security services including security assessment, identity and access management, data encryption, network security, compliance management, and security monitoring. We help businesses secure their cloud infrastructure and data.'}
      ]},;
    {
      title: 'Pricing & Support',;
      icon: '💰',;
      questions: [;
        {
          id: 10,;
          question: 'How do you price your services?',;
          answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. We provide detailed quotes after understanding your specific needs.'},;
        {
          id: 11,;
          question: 'Do you provide ongoing support and maintenance?',;
          answer: 'Yes, we provide comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, performance optimization, and technical support. We offer various support packages to meet different business needs.'},;
        {
          id: 12,;
          question: 'What is your typical project timeline?',;
          answer: 'Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed project timelines during the planning phase and keep you updated on progress.'}
      ]}
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => ;
      prev.includes(id) ;
        ? prev.filter(item => item !== id);
        : [...prev, id];
    )}
  const filteredCategories = faqCategories.map(category => ({;
    ...category,;
    questions: category.questions.filter(q => ;
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    )})).filter(category => category.questions.length > 0);

  return (;
    <MainLayout;
      title="Frequently Asked Questions - Zion Tech Group";
      description="Find answers to common questions about Zion Tech Group's services, pricing, support, and technology solutions.";
      keywords="FAQ, frequently asked questions, support, help, technology services, AI, cloud computing">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>;
              <p className="text-xl text-gray-200 mb-8">;
                Find answers to common questions about our services, pricing, and support.;
              </p>;

              {/* Search Bar */}
              <div className="max-w-md mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search questions...";
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400";
                  />;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Main Content */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              {filteredCategories.map((category, categoryIndex) => (;
                <div key={categoryIndex} className="mb-12">;
                  <div className="flex items-center mb-6">;
                    <span className="text-3xl mr-4">{category.icon}</span>;
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>;
                  </div>;

                  <div className="space-y-4">;
                    {category.questions.map((item) => (;
                      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">;
                        <button;
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">;
                          <span className="font-semibold text-gray-900 pr-4">{item.question}</span>;
                          {openItems.includes(item.id) ? (;
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />;
                          ) : (;
                            <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />;
                          )}
                        </button>;

                        {openItems.includes(item.id) && (;
                          <div className="px-6 pb-4">;
                            <div className="border-t border-gray-200 pt-4">;
                              <p className="text-gray-600 leading-relaxed">{item.answer}</p>;
                            </div>;
                          </div>;
                        )}
                      </div>;
                    ))}
                  </div>;
                </div>;
              ))}

              {/* No Results */}
              {filteredCategories.length === 0 && searchTerm && (;
                <div className="text-center py-12">;
                  <div className="text-6xl mb-4">🔍</div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>;
                  <p className="text-gray-600">Try searching with different keywords or browse our categories above.</p>;
                </div>;
              )}

              {/* Contact Section */}
              <div className="bg-blue-50 rounded-lg p-8 mt-12">;
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Still have questions?</h2>;
                <p className="text-gray-600 mb-6">;
                  Can't find the answer you're looking for? Our team is here to help. Contact us for personalized assistance.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4">;
                  <a;
                    href="/contact";
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Contact Us;
                  </a>;
                  <a;
                    href="mailto:support@ziontechgroup.com";
                    className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Email Support;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  )}
export default FAQ;