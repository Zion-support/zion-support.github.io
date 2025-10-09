import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const FAQPage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const faqData = [
  // TODO: Add items;
];;
    {
  // TODO: Add content;
};
  category: 'General Questions',
      questions: [,

      question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. We help businesses transform their operations with cutting-edge technology.'
        },







        }
      ]














































  ];
  const filteredData = faqData.map(category => ({
  // TODO: Add content;
}
//     ...category,

//       q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       q.answer.toLowerCase().includes(searchTerm.toLowerCase())
//     )
  })).filter(category => category.questions.length > 0);
    
          
          
          
          
          
          
          
  )
    
          {/* Header */}
// Frequently Asked Questions
            
          
          
          
          
          
          
          
          ;
// Find answers to common questions about our AI and IT services, pricing, and support.
            
          
          
          
          
          
          
          
          
            {/* Search Bar */}
type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
// />
            
          
          
          
          
          
          
          
          
          {/* FAQ Content */}
            {filteredData.map((category, categoryIndex) => ()
              
                  {category.category}
                  {category.questions.map((item, itemIndex) => {
  // TODO: Add content;
}
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                      
          
          
          
          
          
          
          
          
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
// >
                          
          
          
          
          
          
          
          
          
                          {isOpen ? ()
                            
                          ) : ()
                            
                          )}
                        {isOpen && ()
                          
                  })}
            ))}
{/* Contact CTA */}
              Still Have Questions?
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
// Call (302) 464-0950
              
          
          
          
          
          
          
          
          ;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hove,text-slate-900 transition-all duration-300 inline-flex items-center"
                Email Us;
                href="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover: bg-purple-400 hove,text-slate-900 transition-all duration-300 inline-flex items-center"
                Contact Form;
  );
};

export default AiAnalyticsDashboardPage;