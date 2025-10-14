'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Shield, Globe, Users, CheckCircle, Zap, ArrowRight, ChevronLeft, ChevronRight  } from 'lucide-react';

interfaceSlide {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  stats?:{
    value: string;
    label: string;
  }[];
}

const,
  ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrent Slide] = useState(0);

  const,
  slides: Slide[] =[
    {
      icon: Brain,
      title:'AI-Powered Solutions',
      description:'Advanced AI technology to transform your business operations and improve efficiency',
      features:['Machine Learning','Natural Language Processing','Computer Vision','Predictive Analytics'],
      stats:[
        { value:'95%', label:'Accuracy Rate' },{ value:'10 x', label:'Faster Processing' },{ value:'24/7', label:'Automation' }]
    },{
      icon: Shield,
      title:'Cybersecurity Excellence',
      description:'Comprehensive security solutions to protect your digital assets and ensure compliance',
      features:['Threat Detection','Data Encryption','Compliance Management','Incident Response'],
      stats:[
        { value:'99.9%', label:'Uptime' },{ value:'Zero', label:'Data Breaches' },{ value:'24/7', label:'Monitoring' }
      ]
    },{
      icon: Globe,
      title:'Cloud Infrastructure',
      description:'Scalable cloud solutions to support your business growth and digital transformation',
      features:['Cloud Migration','DevOps Automation','Container Orchestration','Multi-Cloud Strategy'],
      stats:[
        { value:'50%', label:'Cost Reduction' },{ value:'99.9%', label:'Reliability' },{ value:'Global', label:'Reach' }
      ]
    },{
      icon: Users,
      title:'Team Augmentation',
      description:'Expert talent to complement your team and accelerate project delivery',
      features:['Expert Developers','Project Management','Quality Assurance','Technical Consulting'],
      stats:[
        { value:'100+', label:'Experts' },{ value:'5+', label:'Years Experience' },{ value:'24/7', label:'Support' }
      ]
    }
  ];

  const currentSlideData = slides[currentSlide];

  useEffect(()  => {
    const timer = setInterval(()  => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  },[slides.length]);

  const nextSlide = ()  => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = ()  => {
    setCurrent Slide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl,
  md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lgrounded-2 xl p-8,
  md:p-12 border border-white/20 overflow-hidden">
            <div className="gridgrid-cols-1,
  lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="flexitems-centergap-4">
                  <div className="w-16 h-16bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <currentSl ideData.icon className="w-8 h-8text-white" />
                  </div>
                  <div>
                    <h3 className="text-2,
  xlmd:text-3 xl font-bold text-white mb-2">
                      {currentSlide Data.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {currentSlide Data.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lgfont-semiboldtext-white mb-4">Key,
  Features:</h4>
                  <div className="gridgrid-cols-1,
  sm:grid-cols-2 gap-3">
                    {currentSlide Data.features.map((feature, index) => (
                      <divke y ={index} classNam e ="flexitems-centerspace-x-3">
                        <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {currentSlide Data.stats && (
                  <div className="gridgrid-cols-3 gap-6">
                    {currentSlide Data.stats.map((stat, index) => (
                      <divke y ={index} classNam e ="text-center">
                        <div className="text-2 xlfont-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flexflex-colsm:flex-row gap-4">
                  <button ton className="inline-flexitems-centergap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold,
  hover:from-purple-600,
  hover:to-blue-600 transition-all duration-300 transform,
  hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started;
                  </butn>
                  <button ton className="inline-flexitems-centergap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20,
  hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More;
                  </butn>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <currentSlideData.icon className="w-32 h-32 text-white/50 mx-auto mb-4" />
                    <div className="text-white/70 text-lg">Interactive Demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button onClick ={prevSlide}
            classNam e ="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white,
  hover:bg-white/20 transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick ={nextSlide}
            classNam e ="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white,
  hover:bg-white/20 transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button key ={index}
              onClic k ={() => setCurrentSlide(index)}
              classNam e ={`w-3 h-3 rounded-full transition-all duration-300 ${
                inde x === currentSlide;
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                  :'bg-white/30,
  hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;