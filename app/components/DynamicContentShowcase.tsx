'use client';

import React,{ useState, useEffect } from 'react';
import { Play, ArrowRight, Star, Users, ChevronLeft, Pause, ChevronRight, CheckCircle, Zap  } from 'lucide-react';

interfaceFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stats?:{
    value: string;
    label: string;
  }[];
}

interfaceTestimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrent Index] = useState(0);
  const [isPlaying, setIs Playing] = useState(true);

  const features: Feature[] =[
    {
      icon: Brain,
      title:'AI-Powered Intelligence',
      description:'Advanced AI algorithms that learn and adapt to your business needs in real-time',
      stats:[
        { value:'95%', label:'Accuracy' },{ value:'10 x', label:'Faster' },{ value:'24/7', label:'Learning' }]
    },{
      icon: Zap,
      title:'Lightning Fast Performance',
      description:'Optimized for speed with sub-second response times and seamless user experience',
      stats:[
        { value:'<100 ms', label:'Response' },{ value:'99.9%', label:'Uptime' },{ value:'10 M+', label:'Requests' }]
    },{
      icon: Shield,
      title:'Enterprise Security',
      description:'Bank-level security with end-to-end encryption and compliance standards',
      stats:[
        { value:'256-bit', label:'Encryption' },{ value:'SOC 2', label:'Compliance' },{ value:'Zero', label:'Breaches' }]
    },{
      icon: Globe,
      title:'Global Scalability',
      description:'Scale effortlessly across multiple regions with automatic load balancing',
      stats:[
        { value:'50+', label:'Countries' },{ value:'15+', label:'Languages' },{ value:'24/7', label:'Support' }]
    }
  ];

  const benefits =[
    'Advanced AI technology integration','Real-time processing and analytics','Enterprise-grade security and compliance','Scalable and flexible solutions','24/7 technical support','Easy integration with existing systems','Cost-effective pricing plans','Proven track record of success'
  ];

  const testimonials: Testimonial[] =[
    {
      name:'Sarah Johnson',
      company:'Tech Corp Inc.',
      role:'CTO',
      content:'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.',
      rating: 5
    },{
      name:'Michael Chen',
      company:'Data Flow Systems',
      role:'CEO',
      content:'Outstanding performance and reliability. Our team productivity increased by 300% and we\'ve seen a 50% reduction in operational costs.',
      rating: 5
    },{
      name:'Emily Rodriguez',
      company:'Innovate Lab',
      role:'Product Manager',
      content:'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating: 5
    },{
      name:'David Kim',
      company:'Cloud First Solutions',
      role:'VP Engineering',
      content:'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent Index((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(timer);
  },[isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrent Index((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent Index((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlay Pause = () => {
    setIs Playing(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xlmx-auto text-center">
          <h1 className="text-4 xlmd:text-6 xl font-bold text-white mb-6">
            Dynamic <span className="text-transparentbg-clip-textbg-gradient-to-r from-blue-400 to-purple-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto mb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flexflex-colsm:flex-row gap-4 justify-center">
            <button ton className="inline-flex items-centergap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Demo
            </butn>
            <button ton className="inline-flex items-centergap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </butn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xlfont-bold text-white mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <divke y ={index} className="bg-white/10 backdrop-blur-lgrounded-2 xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-centerjustify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                  <feature.icon className="w-8 h-8text-white" />
                </div>
                <h3 className="text-xl font-boldtext-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, statIndex) => (
                      <divke y ={statIndex} className="text-center">
                        <div className="text-lgfont-boldtext-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lgrounded-2 xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flexjustify-centermb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Starke y ={i} className="w-6 h-6text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>
                
                <div className="flex items-centerjustify-center gap-4">
                  <div className="w-16 h-16bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lgfont-semiboldtext-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-centerjustify-center gap-4 mt-8">
              <button tononClick ={prevTestimonial}
                className="p-3 bg-white/10hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              </butn>
              
              <button tononClick ={togglePlay Pause}
                className="p-3 bg-white/10hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </butn>
              
              <button tononClick ={nextTestimonial}
                className="p-3 bg-white/10hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
              </butn>
            </div>

            {/* Dots Indicator */}
            <div className="flexjustify-centermt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button tonkey={index}
                  onClic k ={() => setCurrent Index(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    inde x === currentIndex ? 'bg-purple-400' :'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xlfont-bold text-white mb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lgrounded-2 xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <divke y ={index} className="flexitems-startspace-x-3">
                  <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4 xlmx-auto text-center">
          <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xl p-12">
            <h2 className="text-3 xlfont-bold text-white mb-6">
              Ready toExperience theFuture?
            </h2>
            <p className="text-xltext-white/90 mb-8 max-w-2 xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">
              <button ton className="bg-whitetext-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </butn>
              <button ton className="border-2 border-whitetext-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              </butn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;