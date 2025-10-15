import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

const [searchTerm, setSearchTerm] = useState('');

const toggleItem = () => {
  return;
};

const faqData = [
    // ... features
  ];

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI services, IT solutions, micro SAAS, and 5G technology. Get help and support information." />
        <meta name="keywords" content="FAQ, frequently asked questions, support, help, AI services, IT solutions, micro SAAS, 5G technology" />
        <meta property="og:title" content="FAQ - Zion Tech Group" />
        <meta property="og:description" content="Frequently asked questions about our technology solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, solutions, and support.
              </p>
              
        <div className="relative max-w-2xl mx-auto mb-12">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              {filteredData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <HelpCircle className="w-8 h-8 text-cyan-400 mr-3" />
                  </h2>
                  
        <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;

const isOpen = openItems.includes(globalIndex);
  
  );
};
export default FAQPage;
</number>
</input>
}}}
    </>
  );
}