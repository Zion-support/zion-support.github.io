import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const AIServices: React.FC = () => {
 ;
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and data patterns.'
   ,
},
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and intelligent decision making.'
   ,
}
  ];

  return (
    <>
      <SEO
        title="AI Services - Zion Tech Group"
        description="Transform your business with our cutting-edge AI services including machine learning, NLP, computer vision, and more."
        keywords="AI services, machine learning, NLP, computer vision, artificial intelligence, automation"
        url="/services/ai-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Transform your business with cutting-edge artificial intelligence solutions 
                    that drive innovation and efficiency.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="scale"
                    delay={index * 0.1}
                  >
                    <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover: bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">
                      <div className="text-cyan-400 mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">
                        {service.description}
                      </p>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};


export default AIServices;