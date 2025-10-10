'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
=======
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';
import Navigation from '../components
import Footer from '../components
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const DemoPage: React.FC = () => {
};
  const demos = [
<<<<<<< HEAD
    {
=======
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
    },
<<<<<<< HEAD
    {
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent customer support automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']
=======
        {
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.',
      features: [
        'Natural language understanding',
        'Multi-language support',
        '24
        'Seamless handoff to humans'
      ],
      icon: Users,
      duration: '3 min demo',
      category: 'AI Solutions'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
        {
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']
<<<<<<< HEAD
    }
  ]

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                See Our <span className="text-cyan-400">Solutions</span> in Action
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
              </p>
            </div>

            {/* Demo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {demos.map((demo, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                    <span className="text-cyan-400 text-sm font-semibold">{demo.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to See More?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Schedule a personalized demo with our experts to see how our solutions can work for your specific business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default DemoPage
=======
    };
  ];
  const testimonials = [
[
        {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      quote: 'The AI analytics demo showed us exactly how we could transform our data insights. The implementation was seamless.',
      rating: 5
    },
        {
      name: 'Michael Chen',
      company: 'RetailMax',
      role: 'Head of Operations',
      quote: 'The chatbot demo exceeded our expectations. It handled complex queries better than we imagined.',
      rating: 5
    },
        {
      name: 'Emily Rodriguez',
      company: 'FinanceFlow',
      role: 'IT Director',
      quote: 'The cloud migration demo convinced us to move forward. The automation saved us months of work.',
      rating: 5
    };
  ];
  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <title>Live Demos - Zion Tech Group | See Our Solutions in Action<
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with real-time demonstrations." 
        <meta name="keywords" content="AI demos, technology demos, live demonstrations, AI solutions, cloud services, cybersecurity demos" 
      <
      <Navigation 
      {/* Hero Section *
      <section className="relative py-20 px-4 overflow-hidden">)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }};
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            <
          <
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. 
            See exactly how our technology can transform your business.
          <
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Schedule Live Demo
            <
          <
        <
      <
      {/* Demo Selection *
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo<
            <p className="text-xl text-gray-300">Select a solution to see it in action<
          <
          <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6">
            {demos.map((demo) => (<button
                key = { demo.id };)
                onClick = { () => setSelectedDemo(demo.id) };
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-purple-500
                    : 'border-white/10 bg-white/5 hover:bg-white
                }`};
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <demo.icon className="w-6 h-6 text-white" 
                <
                <h3 className="text-lg font-semibold text-white mb-2">{demo.title}<
                <p className="text-gray-300 text-sm mb-3">{demo.description}<
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{demo.category}<
                  <span className="text-xs text-cyan-400">{demo.duration}<
                <
              <
            ))};
          <
        <
      <
      {/* Selected Demo Details *
      {selectedDemoData && (<section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                      <selectedDemoData .icon className="w-8 h-8 text-white" 
                    <
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}<
                      <p className="text-gray-400">{selectedDemoData.duration}<
                    <
                  <
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}<
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features<
                    <ul className="space-y-2">)
                      {selectedDemoData.features.map((feature, index) => (<li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" 
                          <span className="text-gray-300">{feature}<
                        <)
                      ))};
                    <
                  <
                  <div className="flex flex-col sm: flex-row gap-4">
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hove,
    r:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                      Schedule Live Demo
                    <div className="w-24 h-24 bg-white
                      <Play className="w-12 h-12 text-white" 
                    <
                    <h4 className="text-xl font-semibold text-white mb-2">Interactive Demo<
                    <p className="text-gray-300">Click play to experience this solution in action<
                  <
                <
              <
            <
          <
        <
      )};
      {/* Testimonials *
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say<
            <p className="text-xl text-gray-300">See how our demos led to successful implementations<
          <
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {testimonials.map((testimonial), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white
                <div className="flex items-center mb-4">)
                  {[...Array(testimonial.rating)].map((_, i) => (
                  "{testimonial.quote}"
                <
                <div>
                  <div className="font-semibold text-white">{testimonial.name}<
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}<
                <
              <
            ))};
          <
        <
      <
      {/* CTA Section *
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See More?
          <
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo with our experts. We'll show you exactly 
            how our solutions can address your specific business needs.
          <
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Live Demo
            <
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            <
          <
        <
      <
      <Footer 
    <
  );
};
export default DemoPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
