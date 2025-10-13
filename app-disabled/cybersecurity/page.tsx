<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
=======

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
>>>>>>> origin/main
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
    'Cost-effective pricing plans',
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Page?,</h2>
=======

    'Proven track record of success'
  ]
<Helmet />
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
              <p className="text-xl text-gray-300">Section description
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Why Choose Our Page?,
            <p>Our page solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature />
                <p className="text-gray-300">{feature.description}
              ))
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
              <p className="text-xl text-gray-300">Section description
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Key Benefits;
            <p>Experience the power of our page solutions for your business.,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3">
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
              <p className="text-xl text-gray-300">Section description
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?
            <p>Contact our experts to discuss your page needs and get a customized solution.
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
                <Phone>
                Call Now;
              <button>
                <Mail>
                Email Us;
export default PagePage;
>>>>>>> origin/main
