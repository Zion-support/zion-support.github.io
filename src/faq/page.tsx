import { Phone, Mail } from 'lucide-react';


import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const FAQPage: React.FC = () => {
  return (
    <div>Coming Soon</div>

  );
};
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
const toggleItem = (inde)
  x: number) => {setOpenItems(prev =>})
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const faqData = [
  // TOD,
  O: Add items;
];;
    {/* TODO: Fix JSX expression */}
  O: Add content;}
};
  categor,
  y: 'General Questions',
      question,
  s: [

      questio,
  n: 'What is Zion Tech Group?',
          answe,
  r: 'Zion Tech Group is a leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. We help businesses transform their operations with cutting-edge technology.'
        },
          questio,
  n: 'What services do you offer?',
          answe,
  r: 'We offer comprehensive AI services, IT infrastructure solutions, micro SAAS applications, cloud migration, cybersecurity, quantum computing, and digital transformation consulting. Our services span from AI automation to complete enterprise solutions.'
          questio,
  n: 'How can I get started?',
          answe,
  r: 'Getting started is easy! Contact us for a free consultation at (302) 464-0950 or email kleber@ziontechgroup.com. We\'ll assess your needs and recommend the best solutions for your business.',

          questio,
  n: 'Do you offer custom solutions?',
          answe,
  r: 'Yes, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to develop solutions that perfectly fit your requirements and objectives.'
        }
      ]
      categor,
  y: 'AI Services',
          questio,
  n: 'What AI services do you provide?',
          answe,
  r: 'We provide comprehensive AI services including machine learning, natural language processing, computer vision, AI automation, AI marketing, AI healthcare solutions, AI fintech applications, and custom AI development.'
          questio,
  n: 'How much do AI services cost?',
          answe,
  r: 'Our AI services start at $1,500/month for basic packages. Pricing varies based on complexity, scope, and specific requirements. Contact us for a detailed quote tailored to your needs.'
          questio,
  n: 'Do you provide AI training for our team?',
          answe,
  r: 'Yes, we offer comprehensive AI training programs to help your team understand and effectively use AI technologies. We provide both on-site and remote training sessions.'
          questio,
  n: 'Can you integrate AI with our existing systems?',
          answe,
  r: 'Absolutely! We specialize in integrating AI solutions with existing enterprise systems, ensuring seamless operation and minimal disruption to your current workflows.'
      categor,
  y: 'IT Services',
          questio,
  n: 'What IT services do you offer?',
          answe,
  r: 'We offer comprehensive IT services including cloud migration, cybersecurity, DevOps & CI/CD, database management, network solutions, system administration, IT consulting, and 24/7 support.'
          questio,
  n: 'Do you provide 24/7 support?',
          answe,
  r: 'Yes, we offer 24/7 IT support and monitoring services to ensure your systems are always running smoothly. Our support team is available around the clock to address any issues.'
          questio,
  n: 'Can you help with cloud migration?',
          answe,
  r: 'Absolutely! We specialize in cloud migration services for AWS, Azure, and GCP. We ensure seamless migration with 99.9% uptime guarantee and minimal business disruption.'
          questio,
  n: 'What cybersecurity services do you provide?',
          answe,
  r: 'We provide comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, compliance management, and incident response.'
      categor,
  y: 'Micro SAAS Solutions',
          questio,
  n: 'What are Micro SAAS solutions?',
          answe,
  r: 'Micro SAAS solutions are ready-to-use AI-powered applications that solve specific business problems. They include AI CRM, analytics dashboards, chatbot builders, and other specialized tools.'
          questio,
  n: 'How quickly can I deploy a Micro SAAS solution?',
          answe,
  r: 'Most Micro SAAS solutions can be deployed within 24-48 hours. They are designed for quick implementation and immediate value delivery.',

          questio,
  n: 'Do I need technical expertise to use Micro SAAS?',
          answe,
  r: 'No, our Micro SAAS solutions are designed to be user-friendly and require minimal technical expertise. We provide training and support to ensure smooth adoption.'
          questio,
  n: 'Can Micro SAAS solutions be customized?',
          answe,
  r: 'Yes, while our Micro SAAS solutions are ready-to-use, they can be customized to better fit your specific business processes and requirements.'
      categor,
  y: 'Pricing & Billing',
          questio,
  n: 'What are your pricing models?',
          answe,
  r: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise contracts. Pricing depends on the scope and complexity of services required.'
          questio,
  n: 'Do you offer free consultations?',
          answe,
  r: 'Yes, we offer free initial consultations to assess your needs and recommend the best solutions. Contact us to schedule your free consultation.'
          questio,
  n: 'Are there any setup fees?',
          answe,
  r: 'Setup fees vary by service type. Some services include setup in the monthly fee, while others may have one-time setup charges. We\'ll provide clear pricing details during consultation.'
          questio,
  n: 'Do you offer discounts for long-term contracts?',
          answe,
  r: 'Yes, we offer attractive discounts for annual contracts and long-term partnerships. Contact us to discuss the best pricing options for your needs.'
      categor,
  y: 'Support & Contact',
          questio,
  n: 'How can I contact support?',
          answe,
  r: 'You can contact our support team at (302) 464-0950, email kleber@ziontechgroup.com, or use our online support portal. We also offer 24/7 emergency support for critical issues.'
          questio,
  n: 'What are your business hours?',
          answe,
  r: 'Our business hours are Monday-Friday, 9AM-6PM EST. However, our support team is available 24/7 for critical issues and emergency support.'
          questio,
  n: 'Do you offer remote support?',
          answe,
  r: 'Yes, we provide comprehensive remote support services, allowing us to assist you quickly and efficiently without the need for on-site visits.'
          questio,
  n: 'How quickly do you respond to support requests?',
          answe,
  r: 'We respond to support requests within 1 hour during business hours and within 4 hours for non-critical issues outside business hours. Critical issues receive immediate attention.'
  ];
  const filteredData = faqData.map(category => ({/* TODO: Fix JSX expression */}
  O: Add content;}
}
//     ...category,
    question,
  s: category.questions.filter(q =>)
//       q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       q.answer.toLowerCase().includes(searchTerm.toLowerCase())
//     )
  })).filter(category => category.questions.length > 0);
  return (<div>Coming Soon</div>)
  )
    
          <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""
        <div className="container mx-auto px-4 py-16 pt-24"></div>"
          {/* Header */}""
          <div className="text-center mb-12"></div>""
            <h1 className="text-4xl,""
  md:text-5xl font-bold text-white mb-6 neon-text"></h1>"
// Frequently Asked Questions;
          </h1>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>"
// Find answers to common questions about our AI and IT services, pricing, and support.
            
          
          
          
          
          
          
          
          
          </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative"></div>"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
              <input,
type="text" placeholder="Search FAQs...""

                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}""
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400,"
  focus:outline-none,
  focus:border-cyan-400,
  focus:ring-2,""
  focus:ring-cyan-400/20""
// />
            
          
          
          
          
          
          
          
          
          </div>
          {/* FAQ Content */}""
          <div className="max-w-4xl mx-auto"></div>"
            {filteredData.map((category, categoryIndex) => ()}""
          <div key={categoryIndex} className="mb-12"></div>""
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text"></h2>"
                  {category.category}
                </h2>""
                <div className="space-y-4"></div>"
                  {category.questions.map((item, itemIndex) => {}
  // TOD,
  O: Add content;
}
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                      
          
          
          
          
          
          
          
          ""
          <div key={itemIndex} className="bg-slate-800/50 rounded-lg border border-gray-700/50"></div>"
                        <button></button>
                          onClick={() => toggleItem(globalIndex)}""
                          className="w-full px-6 py-4 text-left flex items-center justify-between,""
  hover:bg-slate-700/50 transition-colors""
// >
                          
          
          
          
          
          
          
          
          ""
          <span className="text-white font-medium pr-4">{item.question}</span>"
                          {isOpen ? ()}""
          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" /></ChevronUp>"
                          ) : ()
                            ""
          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" /></ChevronDown>"
                          )}
                        </button>
                        {isOpen && ()}""
          <div className="px-6 pb-4"></div>""
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>"
                  })}
            ))}

{/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4"></h2>"
              Still Have Questions?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>"
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <a,
href="tel:+13024640950" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105""
                <Phone className="w-5 h-5 mr-2" />"
// Call (302) 464-0950;
          </a>
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""
                <Mail className="w-4 h-4 mr-2" />"
                Email Us;
                href="/contact" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""
                <MessageSquare className="w-4 h-4 mr-2" />"

                Contact Form;
      <Footer /></Footer>
    </>
export default FAQPage;




export default FaqPage;


