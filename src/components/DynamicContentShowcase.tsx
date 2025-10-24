'use client';
:all-pages-backup/components/DynamicContentShowcase.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../../../../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

interface Testimonial {


  id: number
  name: string
  company: string
  content: string
  rating: number
  avatar?: string}
}
;
const DynamicContentShowcase: React.FC = () => {;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [;
    {
:all-pages-backup/components/DynamicContentShowcase.tsx
      i
  d: 1
  name: name
  company: company
  content: content
  rating: 5
    }
    {
      id: 2
  name: name
  company: company
  content: content
  rating: 5
    }
    {
      id: 3
  name: name
  company: company
  content: content
  rating: 5
      id: 1
      nam
  e: "Sarah Johnson",
    company: "TechCorp"
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%."
      rating: 5
    }
    {
      id: 2
      nam
  e: "Michael Chen",
    company: "InnovateLab"
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services."
      rating: 5
    }
    {
      id: 3
      nam
  e: "Emily Rodriguez",
    company: "StartupXYZ"
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible."
      rating: 5
    }
  ]

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {;
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval);
  }, [testimonials.length])

  const features = [
    {
:all-pages-backup/components/DynamicContentShowcase.tsx
      icon: <Brain className="h-8 w-8" />
      titl
  e: title
  description: description
  color: "from-blue-500 to-cyan-500"
    }
  {</Brain>
    icon: <Shield className="h-8 w-8" />
      titl
  e: title
  description: description
  color: "from-green-500 to-emerald-500"
    }
  {</Shield>
    icon: <Zap className="h-8 w-8" />
      titl
  e: title
  description: description
  color: "from-purple-500 to-pink-500"
    };
  ];
;</Zap>
      icon: <Brain className="h-8w-8" />
      titl
  e: "AI-Powered Solutions",
    description: "Advanced artificial intelligence to transform your business operations"
      color: "from-blue-500 to-cyan-500"
    }
  {</Brain>
    icon: <Shield className="h-8w-8" />
      titl
  e: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets"
      color: "from-green-500 to-emerald-500"
    }
  {</Shield>
    icon: <Zap className="h-8w-8" />
      titl
  e: "Automation",
    description: "Streamline processes and increase efficiency with smart automation"
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (;</Zap>
        <section className=&quot;py-20 px-4&quot;></section>
          <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6&quot;></h1>
            Transform Your Business with <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>AI Solutions</span>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto mb-8&quot;></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Solutions</h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Discover how our cutting-edge AI and IT solutions can transform your business</p>p>
            <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;></button>
              <Play className=&quot;w-5 h-5&quot; />
              Start Demo</Play>
            <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hove
  r:bg-white/20 transition-all duration-300&quot;></button>
              <ArrowRight className=&quot;w-5 h-5&quot; />
{/* Features Grid */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 l
            <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: border-cyan-400/50 transition-all duration-300&quot;>
                <feature.icon className=&quot;w-6 h-6 text-white&quot; /></feature>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
              <p className=&quot;text-gray-300&quot;>{feature.description}</p>
          ))}
        {/* Benefits Section */}
          <h3 className=&quot;text-2xl font-bold text-white mb-6 text-center&quot;>Why Choose Us?</h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l
                <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; /></CheckCircle>
                <span className=&quot;text-gray-300&quot;>{benefit}</span>
            ))}
        {/* Testimonials */}
          <h3 className=&quot;text-2xl font-bold text-white mb-8&quot;>What Our Clients Say</h3>
              <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-blue-400&quot; /></stat>
      {/* Features Section */}
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6&quot;></h2>
              Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Solutions</span>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Comprehensive AI and IT solutions designed to transform your business operations.</p>p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l
              <div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300&quot;>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; /></feature>
                <h3 className=&quot;text-xl font-bold text-white mb-4 group-hove
  r:text-purple-400 transition-colors&quot;>$3</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{feature.description}</p>
                {feature.stats && (
                      <div key={statIndex} className=&quot;text-center&quot;>
                    ))}
                )}
            ))}
      {/* Testimonials Section */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-6xl mx-auto&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>What Our Customers Say</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Don&apos;t just take our word for it. Here's what our satisfied customers have to say about their experience.</p>p>
          <div className=&quot;relative&quot;>
        <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20&quot;>
                <Quote className=&quot;w-12 h-12 text-blue-400 mx-auto mb-6&quot; /></Quote>
                <p className=&quot;text-xl text-gray-300 mb-8 italic&quot;>&quot;{testimonials[currentTestimonial].content}&quot;</p>p>
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}</Star>
                <blockquote className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                  &quot;{currentTestimonial.content}&quot</blockquote>
                <div className=&quot;flex items-center justify-center gap-4&quot;>
                    <span className=&quot;text-white font-semibold text-lg&quot;>{testimonials[currentTestimonial].name.charAt(0)}</span>span>
                    <h4 className=&quot;text-lg font-semibold text-white&quot;>{testimonials[currentTestimonial].name}</h4>
                    <p className=&quot;text-gray-400&quot;>{testimonials[currentTestimonial].role}</p>
                    <p className=&quot;text-blue-400&quot;>{testimonials[currentTestimonial].company}</p>
            {/* Navigation Controls */}
              <button onClick = {prevTestimonial};></button>
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                <ChevronLeft className=&quot;w-6 h-6&quot; /></ChevronLeft>
              <button ,>
                onClick = {togglePlayPause}</button>
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                {isPlaying ? <Pause className=&quot;w-6 h-6&quot; /> : <Play className=&quot;w-6 h-6&quot; />}</Play>
              <button onClick = {nextTestimonial};></button>
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;></button>
                <ChevronRight className=&quot;w-6 h-6&quot; /></ChevronRight>
            {/* Dots Indicator */}
                <button key = {index}></button>
                  onClick={() =></button> setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
      {/* Benefits Section */}
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Benefits</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>p>
          <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 l
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0 mt-1&quot; /></CheckCircle>
                  <span className=&quot;text-gray-300&quot;>{benefit}</span>
              ))}
      {/* CTA Section */}
      <section className=&quot;py-20 px-4&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join thousands of satisfied customers and start your transformation journey today.</p>p>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started</button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More</button>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations</p>
            <div className=&quot;grid md: grid-cols-2 l
              {features.map((feature, index) => (
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; /></feature>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;></li>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}</CheckCircle>
                    ))}
              ))}

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology</p>
            <div className=&quot;grid md: grid-cols-2 l
              {benefits.map((benefit, index) => (
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /></CheckCircle>
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              ))}

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions</p>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Zap className=&quot;w-5 h-5&quot; />
                Get Started Today</Zap>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove
  r:scale-105&quot;></button>
                Schedule Demo
  )
}

export default DynamicContentShowcase;)))