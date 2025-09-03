import: React { useState } from;
  'react' import: { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from;';
  '../data/revolutionaryServices2025' import: { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain } from;';
  'lucide-react'  interface: Service {';
   id: string;
   name: string;
   category: string;
   pricing: string;
   description: string;
   price: number;
   pricingModel: string;
   features: string[];
   benefits: string[];
   targetAudience: string[];
   tags: string[];
   contactInfo: {
   phone: string;
   email: string;

  'itServices': return revolutionaryITServices2025.length case
  'aiServices: return revolutionaryAIServices2025.length default: return revolutionaryMicroSaasServices2025.length + revolutionaryITServices2025.length + revolutionaryAIServices2025.length } }  const getCategoryIcon = (category: string) => { if (category.includes(
  'AI') || category.includes(
  'Analytics')) return <Brain className='w-5 h-5' />' if (category.includes(
  'Security') || category.includes(
  'Cybersecurity')) return <Shield className='w-5 h-5' />' if (category.includes(
  'Cloud') || category.includes(
  'Infrastructure')) return <Cloud className='w-5 h-5' />' return <Zap className='w-5 h-5' /> } ' return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>' {}'' <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>'' <div className='container mx-auto px-4 text-center'>'' <h1 className='text-5xl font-bold mb-6'> Revolutionary Services 2025' </h1>'' <p className='text-xl mb-8 max-w-3xl mx-auto'> Discover the future of technology with our cutting-edge AI-powered micro SAAS, IT, and AI services. Transform your business with intelligent automation and innovative solutions.' </p>'' <div className='flex flex-wrap justify-center gap-4 text-sm'>'' <div className='flex items-center gap-2'>'' <Users className='w-5 h-5' /> <span>16 Revolutionary Services</span>' </div>'' <div className='flex items-center gap-2'>'' <TrendingUp className='w-5 h-5' /> <span>Industry-Leading Innovation</span>' </div>'' <div className='flex items-center gap-2'>'' <Zap className='w-5 h-5' /> <span>AI-Powered Solutions</span> </div> </div> </div> </div>' {}'' <div className='bg-white shadow-lg'>'' <div className='container mx-auto px-4 py-6'>'' <div className='flex flex-col md: flex-row items-center justify-between gap-4'>'' <div className='text-center md: text-left'>'' <h3 className='text-xl font-semibold text-gray-900 mb-2'> Ready to Transform Your Business?' </h3>'' <p className='text-gray-600'> Contact our experts to learn how our revolutionary services can drive your success </p>' </div>'' <div className='flex flex-col sm: flex-row gap-3'>' <a'' href='tel: +13024640950'' className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'' >'' <Phone className='w-4 h-4' /> Call +1 302 464 0950 </a>' <a'' href='mailto: kleber@ziontechgroup.com'' className='inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover: bg-gray-200 transition-colors'' >'' <Mail className='w-4 h-4' /> Email Us </a> </div> </div> </div> </div>' {}'' <div className='container mx-auto px-4 py-16'>' {}'' <div className='flex flex-wrap justify-center gap-2 mb-12'> {[ { id: 'placeholder',

  all', label: 'All Services, count: getTabCount(,
  all') }, { id: 'microSaas, label:,
  Micro SAAS', count: getTabCount('
  'microSaas) }, { id: 'placeholder',
  itServices', label: 'IT Services, count: getTabCount(,
  itServices') }, { id: 'aiServices, label:,



