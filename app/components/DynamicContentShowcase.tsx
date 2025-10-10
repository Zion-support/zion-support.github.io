'use client';
import { CheckCircle ArrowRight Zap Shield Brain Globe Star Users Clock Award Play Pause ChevronLeft ChevronRight } from "lucide-react";
interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
import { CheckCircle ArrowRight Star Quote ChevronLeft ChevronRight Zap Shield Brain Globe Users TrendingUp } from "lucide-react";
import React from 'react';
import { CheckCircle Star ArrowRight Zap Shield Brain Globe } from "lucide-react";
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
interface Feature {</any>
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented have increased our efficiency by 300% and reduced costs significantly.',
      rating: 5,
      avatar: '/images/avatars/sarah.jpg'
      id: 2,
      name: 'Michael Chen',
      company: 'Global Finance Inc.',
      role: 'VP of Technology',
      content: 'Their cloud migration services were exceptional. Zero downtime, seamless transition, and the team was incredibly professional throughout the process.',
      rating: 5,
      avatar: '/images/avatars/michael.jpg'
      id: 3,
      name: 'Emily Rodriguez',
      company: 'HealthTech Systems',
      role: 'CEO',
      content: 'The cybersecurity solutions provided by Zion Tech Group gave us peace of mind. Our data is now more secure than ever, and compliance is no longer a concern.',
      rating: 5,
      avatar: '/images/avatars/emily.jpg'
  ];

  const features: Feature[] = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to automate and optimize your business processes',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  const features = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
      description: 'Lightning-fast processing and real-time analytics for optimal results'
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
      description: 'Bank-level security with encryption and compliance standards'
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
      description: 'Worldwide deployment and support for international businesses'
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5;
      name: 'Michael Chen',
      role: 'CEO',
content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      company: 'DataFlow Inc',
      content: 'Outstanding service and support. The team delivered exactly what we needed on time and within budget.',
      rating: 5;
      name: 'Emily Rodriguez',
company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating: 5;
      name: 'David Kim',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The best technology partner we\'ve ever worked with. Highly recommend their services.',
      rating: 5;
  ];
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    return () => clearInterval(timer);

  const stats = [
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  return (</any>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Discover how our cutting-edge AI and IT solutions can transform your business;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
              <Play className="w-5 h-5" />
              Start Demo;
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
              <Zap className="w-5 h-5" />
              Get Started Today;
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"></button>
              <ArrowRight className="w-5 h-5" />
              Learn More;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-lg, rounded-xl, p-6, border borde, r-whit, e/10, hover:borde, r-cya, n-40, 0/50, transition-all, duration-30, 0"></di, v>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                <feature.icon className="w-6 h-6 text-white" />
              <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
              <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
          ))}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16"></div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
              <div, key={inde, x} classNam, e="flex, items-cente, r"></di, v>
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
        <div className="text-center"></div>
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-lg, rounded-xl, p-6, border borde, r-whit, e/1, 0"></di, v>

      <section className="py-16 px-4"></section>
        <div className="max-w-6xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                  <stat.icon className="w-8 h-8 text-blue-400" />
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive AI and IT solutions designed to transform your business operations.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-6, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors"></h3>
                <p, className="tex, t-gra, y-300, mb-6">{featur, e.descriptio, n}</p>
                  <div className="grid grid-cols-3 gap-4"></div>
                      <div, key={statInde, x} classNam, e="tex, t-cente, r"></di, v>
                        <div, className="tex, t-lg, font-bold, text-whit, e">{sta, t.valu, e}</di, v>
                        <div, className="tex, t-gra, y-400, text-x, s">{sta, t.labe, l}</di, v>
                    ))}
                )}
                <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-300, mb-4">{featur, e.descriptio, n}</p>
                <ul className="space-y-2"></ul>
                    <li, key={benefitInde, x} classNam, e="flex, items-center, text-gra, y-300, text-s, m"></l, i>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <spa, n>{benefi, t}</spa, n>
                  ))}
            ))}
      <section className="py-16 px-4"></section>
        <div className="max-w-6xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          <div className="relative"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
              <div className="text-center"></div>
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <p className="text-xl text-gray-300 mb-8 italic"></p>
                  "{testimonial, s[currentTestimonia, l].conten, t}"
                <div className="flex justify-center mb-4"></div>
                    <Star, key={i} classNam, e="w-5, h-5, text-yello, w-400, fill-curren, t" />
                  ))}
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  "{currentTestimonia, l.conten, t}"</blockquot, e>
                <div className="flex items-center justify-center gap-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"></div>
                    <span className="text-white font-semibold text-lg"></span>
                  <div className="text-left"></div>
                    <h4, className="tex, t-lg, font-semibold, text-whit, e">{testimonial, s[currentTestimonia, l].nam, e}</h, 4>
                    <p, className="tex, t-gra, y-40, 0">{testimonial, s[currentTestimonia, l].rol, e}</p>
                    <p, className="tex, t-blu, e-40, 0">{testimonial, s[currentTestimonia, l].compan, y}</p>
            <div className="flex items-center justify-center gap-4 mt-8"></div>
              <button;
                onClic, k={prevTestimonia, l}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              <button;
                onClic, k={togglePlayPaus, e}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
              <button;
                onClic, k={nextTestimonia, l}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
            <div className="flex justify-center mt-6 space-x-2"></div>
                <button;
                  ke, y={inde, x}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                />
              ))}

            <button;
              onClic, k={prevTestimonia, l}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
              <ChevronLeft className="w-6 h-6" />
            <button;
              onClic, k={nextTestimonia, l}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
              <ChevronRight className="w-6 h-6" />

          <div className="flex justify-center mt-8 space-x-2"></div>
              <button;
                ke, y={inde, x}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-white/30'
              />
            ))}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Key Benefits;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Discover the advantages that make our solutions the preferred choice for businesses worldwide.
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
              ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, gap-3, bg-whit, e/5, backdrop-blu, r-lg, rounded-lg, p-4, border borde, r-whit, e/1, 0"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of satisfied customers and start your transformation journey today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
                <Zap className="w-5 h-5" />
                Get Started Today;
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"></button>
                Schedule Demo;
  );
export default DynamicContentShowcase;
  );

export default DynamicContentShowcase;
