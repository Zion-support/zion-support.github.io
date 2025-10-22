<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Professional support solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional support solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
=======
'use client'
;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
;
  const faqs = [
    {;
    },
    {;
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We offer 24/7 technical support for all our services, including AI solutions, cloud infrastructure, and custom software. Our support includes phone, email, and live chat options.'
    },
    {;
      category: 'Billing',
      question: 'How does your pricing work?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer both project-based and subscription models. Contact us for a custom quote tailored to your requirements.'
    },
    {;
      category: 'Technical',
      question: 'Do you provide training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training for all our AI solutions, including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {;
      category: 'General',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI and IT solutions are adaptable to various business needs.'
    },
    {;
      category: 'Technical',
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures, comply with industry standards, and provide regular security audits and updates.'
    }
  ]
;
  const supportChannels = [
    {title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com',},
    {title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',},
    {title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',}]
  const filteredFaqs = faqs.filter(faq =>);
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
  );
;
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                />;
              </div>
            </div>
                />;
              </div>
            </div>
                </div>
              ))}
            </div>
                    <p className="text-gray-300">{faq.answer</p>}</p>
                  </div>
                ))}
              </div>
            </h2>
                  Contact Support;
                  <MessageCircle className="w-5 h-5" />
                </button>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
              </button>
            </div>
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with support?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
;
export default SupportPage;
;
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
