import { Phone, Mail, MessageCircle, FileText, Clock, CheckCircle } from 'lucide-react';
    }
  ]
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];
  const supportFeatures = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get help quickly with our 2-hour response guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our support team consists of certified AI and IT professionals'
    },
    {
      icon: Shield,
      title: 'Secure Support',
      description: 'All support interactions are encrypted and secure'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Resolution',
      description: 'We ensure your issues are resolved to your satisfaction'
    }
  ];
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
const PagePage: React.FC = () => {
  return (
<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help when you need it. Our expert support team is here to assist you 24/7.
      <Footer />
export default SupportPage;
