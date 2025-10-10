'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search,
  Clock,
  FileText,
  Video,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'billing', label: 'Billing & Plans', count: 5 },
    { name: 'technical', label: 'Technical Issues', count: 7 },
    { name: 'api', label: 'API & Integration', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our team will help you set up your first AI project within 24 hours.',
      category: 'getting-started',
      helpful: 95
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise clients can also set up invoicing and payment terms.',
      category: 'billing',
      helpful: 88
    },
    {
      id: 3,
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is never shared with third parties without your explicit consent.',
      category: 'technical',
      helpful: 92
    },
    {
      id: 4,
      question: 'Can I integrate your AI services with my existing systems?',
      answer: 'Yes! We provide comprehensive APIs and SDKs for all major programming languages. Our integration team can help you connect with your existing CRM, ERP, or custom systems.',
      category: 'api',
      helpful: 90
    },
    {
      id: 5,
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 support via chat, email, and phone. Enterprise clients get dedicated account managers and priority support. We also provide extensive documentation and video tutorials.',
      category: 'getting-started',
      helpful: 87
    },
    {
      id: 6,
      question: 'How do I upgrade or downgrade my plan?',
      answer: 'You can change your plan anytime from your account dashboard. Upgrades take effect immediately, while downgrades take effect at the end of your current billing period.',
      category: 'billing',
      helpful: 85
    },
    {
      id: 7,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! Our AI research team can develop custom models tailored to your specific needs. We work with you to understand your requirements and deliver solutions that fit your business perfectly.',
      category: 'technical',
      helpful: 93
    },
    {
      id: 8,
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fall below this threshold, you\'ll receive service credits. Our infrastructure is designed for high availability and redundancy.',
      category: 'technical',
      helpful: 89
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex issues',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and live demonstrations',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '/community',
      type: 'Community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {)
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
   </ 2 minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex issues',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and live demonstrations',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '/community',
      type: 'Community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => </ 2 minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex issues',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and live demonstrations',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '/community',
      type: 'Community'
    }
  ];

  const filteredFaqs = faqs.filter(faq =><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Support Cen</h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">t</h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">e</h1>r</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get help when you need it. Our support team is here 24/7 to assist you with any questions or issue</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
          
          {/* Search Bar */}
         <//p> <//p><div className="max-w-2xl mx-auto mb-8">
           </div className="max-w-2xl mx-auto mb-8"> </div className="max-w-2xl mx-auto mb-8"><div className="relative">
            </div className="relative"> </div className="relative"> </div><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
             </Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> </Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /><input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) =>setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/2</input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) =>0</input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) =>"</input>
              <//input>/<//input>></input>
          <//input> <//input> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Support Channels */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center">Get Help No</h2 className="text-3xl font-bold text-white mb-8 text-center">w</h2 className="text-3xl font-bold text-white mb-8 text-center"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{supportChannels.map((channel, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
               </div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform"> </div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform"><div className={`w-16 h-16 ${channel.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                </div className={`w-16 h-16 ${channel.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}> </div className={`w-16 h-16 ${channel.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}> </div><channel.icon className={`w-8 h-8 ${channel.color}`} />
               </channel.icon className={`w-8 h-8 ${channel.color}`} /> </channel.icon className={`w-8 h-8 ${channel.color}`} /><h3 className="text-xl font-bold text-white mb-2">{channel.title</h3 className="text-xl font-bold text-white mb-2">}</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 mb-4">{channel.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>
               <//p> <//p><div className="space-y-2 text-sm">
                 </div className="space-y-2 text-sm"> </div className="space-y-2 text-sm"><div className="flex justify-between">
                  </div className="flex justify-between"> </div className="flex justify-between"> </div><span className="text-gray-400">Availabilit</span className="text-gray-400">y</span className="text-gray-400">:</span><span className="text-cyan-400">{channel.availabili</span className="text-cyan-400">t</span className="text-cyan-400">y</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex justify-between">
                  </div className="flex justify-between"> </div className="flex justify-between"> </div><span className="text-gray-400">Respons</span className="text-gray-400">e</span className="text-gray-400">:</span><span className="text-cyan-400">{channel.responseTi</span className="text-cyan-400">m</span className="text-cyan-400">e</span>}</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* FAQ Section */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="text-center mb-8">
          </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Question</h2 className="text-3xl font-bold text-white mb-4">s</h2 className="text-3xl font-bold text-white mb-4"><p className="text-gray-300 mb-6">Find answers to common questio</p className="text-gray-300 mb-6">n</p className="text-gray-300 mb-6">s</p>
            
            {/* Category Filter */}
           <//p> <//p><div className="flex flex-wrap justify-center gap-2 mb-8">{categories.map((category) =></div className="flex flex-wrap justify-center gap-2 mb-8"> </div className="flex flex-wrap justify-center gap-2 mb-8">(</div><button
                  key={category.name}
                  onClick={() =>setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
               </button
                  key={category.name}
                  onClick={() => </button
                  key={category.name}
                  onClick={() =>></button>
                  {category.label} ({category.count<//button>}<//button>)</button>
              <//button> <//button> </button>
              ))}
           <//button> <//button><div className="max-w-4xl mx-auto space-y-4">{filteredFaqs.map((faq) =</div className="max-w-4xl mx-auto space-y-4">></div className="max-w-4xl mx-auto space-y-4"> </div>(</div>
             <//div> <//div><div key={faq.id} className="cyber-card p-6">
               </div key={faq.id} className="cyber-card p-6"> </div key={faq.id} className="cyber-card p-6"><div className="flex items-start justify-between">
                 </div className="flex items-start justify-between"> </div className="flex items-start justify-between"><div className="flex-1">
                  </div className="flex-1"> </div className="flex-1"> </div><h3 className="text-xl font-bold text-white mb-3">{faq.question</h3 className="text-xl font-bold text-white mb-3">}</h3 className="text-xl font-bold text-white mb-3"><p className="text-gray-300 leading-relaxed">{faq.answe</p className="text-gray-300 leading-relaxed">r</p className="text-gray-300 leading-relaxed">}</p>
                <//p> <//p> </div>
                 <//div> <//div><div className="ml-4 flex items-center space-x-2">
                   </div className="ml-4 flex items-center space-x-2"> </div className="ml-4 flex items-center space-x-2"><div className="flex items-center text-sm text-gray-400">
                    </div className="flex items-center text-sm text-gray-400"> </div className="flex items-center text-sm text-gray-400"> </div><Star className="w-4 h-4 text-yellow-400 mr-1" >{faq.helpful</Star className="w-4 h-4 text-yellow-400 mr-1" >}</Star className="w-4 h-4 text-yellow-400 mr-1" >%</Star>
                  <//Star> <//Star> </Star>
                <//Star> <//Star> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Resources */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center">Helpful Resource</h2 className="text-3xl font-bold text-white mb-8 text-center">s</h2 className="text-3xl font-bold text-white mb-8 text-center"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{resources.map((resource, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><Link
                key={index}
                to={resource.link}
                className="cyber-card p-6 text-center group hover:scale-105 transition-transform"
              >
               </Link
                key={index}
                to={resource.link}
                className="cyber-card p-6 text-center group hover:scale-105 transition-transform"
              > </Link
                key={index}
                to={resource.link}
                className="cyber-card p-6 text-center group hover:scale-105 transition-transform"
              ><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"> </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"> </div><resource.icon className="w-8 h-8 text-white" />
               </resource.icon className="w-8 h-8 text-white" /> </resource.icon className="w-8 h-8 text-white" /><h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{resource.title</h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">}</h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"><p className="text-gray-300 mb-4">{resource.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>
               <//p> <//p><div className="flex items-center justify-center text-cyan-400 text-sm">
                </div className="flex items-center justify-center text-cyan-400 text-sm"> </div className="flex items-center justify-center text-cyan-400 text-sm"> </div><span>{resource.ty</span>p</span>e</span>}</span>
                 <//span> <//span><ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </div>
            <//div> <//div> </Link>
            ))}
        <//Link> <//Link> </div>
      <//div> <//div> </section>

        {/* Contact CTA */}
       <//section> <//section><section className="text-center">
         </section className="text-center"> </section className="text-center"><div className="cyber-card p-8 max-w-4xl mx-auto">
          </div className="cyber-card p-8 max-w-4xl mx-auto"> </div className="cyber-card p-8 max-w-4xl mx-auto"> </div><h2 className="text-3xl font-bold text-white mb-4">Still Need Hel</h2 className="text-3xl font-bold text-white mb-4">p</h2 className="text-3xl font-bold text-white mb-4">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Our support team is standing by to help you succeed. Get in touch with us toda</p className="text-xl text-gray-300 mb-8">y</p className="text-xl text-gray-300 mb-8">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              >
               </Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              > </Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"
              ><MessageCircle className="w-5 h-5 mr-2" >Contact Suppo</MessageCircle className="w-5 h-5 mr-2" >r</MessageCircle className="w-5 h-5 mr-2" >t</MessageCircle>
            <//MessageCircle> <//MessageCircle> </MessageCircle>
             <//MessageCircle> <//MessageCircle><a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
               </a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              > </a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-09</Phone className="w-5 h-5 mr-2" >5</Phone className="w-5 h-5 mr-2" >0</Phone>
            <//Phone> <//Phone> </Phone>
          <//Phone> <//Phone> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default SupportPage;<//div>
<//div>