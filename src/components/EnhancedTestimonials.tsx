import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  position: string;
  rating: number;
  image: string;
  industry: string;
  results: string[];
  verified: boolean;
}

const EnhancedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and reduced operational costs by 40%. The ROI was visible within the first month.",
      author: "Sarah Johnson",
      company: "TechCorp",
      position: "CEO",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "Technology",
      results: ["300% efficiency increase", "40% cost reduction", "ROI in 30 days"],
      verified: true,
    },
    {
      id: 2,
      quote: "Outstanding team and exceptional results. They delivered our mobile app ahead of schedule and under budget. The AI-powered features they implemented are game-changing for our business.",
      author: "Michael Chen",
      company: "InnovateLab",
      position: "CTO",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "Innovation",
      results: ["Delivered ahead of schedule", "Under budget", "Game-changing features"],
      verified: true,
    },
    {
      id: 3,
      quote: "The security solutions they implemented gave us complete peace of mind. Their AI-powered threat detection system has prevented multiple potential breaches. Highly recommended!",
      author: "Emily Rodriguez",
      company: "FinanceFirst",
      position: "Security Director",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "Finance",
      results: ["Zero security breaches", "24/7 threat monitoring", "Complete peace of mind"],
      verified: true,
    },
    {
      id: 4,
      quote: "Working with Zion Tech Group was a game-changer for our e-commerce platform. Their AI recommendation engine increased our sales by 45% and customer satisfaction by 60%.",
      author: "David Kim",
      company: "ShopSmart",
      position: "VP of Technology",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "E-commerce",
      results: ["45% sales increase", "60% satisfaction boost", "AI recommendations"],
      verified: true,
    },
    {
      id: 5,
      quote: "Their cloud migration strategy was flawless. We achieved 99.9% uptime and reduced infrastructure costs by 35%. The team's expertise is unmatched in the industry.",
      author: "Lisa Wang",
      company: "GlobalTech",
      position: "Infrastructure Manager",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "Cloud Services",
      results: ["99.9% uptime", "35% cost reduction", "Flawless migration"],
      verified: true,
    },
    {
      id: 6,
      quote: "The AI data analytics platform they built for us revealed insights we never knew existed. It's transformed how we make business decisions and increased our accuracy by 80%.",
      author: "Dr. James Wilson",
      company: "HealthTech Solutions",
      position: "Chief Data Officer",
      rating: 5,
      image: "/api/placeholder/100/100",
      industry: "Healthcare",
      results: ["80% decision accuracy", "Hidden insights revealed", "Transformed operations"],
      verified: true,
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "99%", label: "Success Rate" },
    { icon: TrendingUp, value: "250%", label: "Average ROI" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Client Success Stories
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us 
            and the transformative results they've achieved.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-zion-cyan/30" />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                  {currentTestimonial.verified && (
                    <div className="ml-3 flex items-center px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>

                <blockquote className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{currentTestimonial.author}</div>
                    <div className="text-zion-slate-light">{currentTestimonial.position}</div>
                    <div className="text-zion-cyan font-medium">{currentTestimonial.company}</div>
                    <div className="text-sm text-zion-slate">{currentTestimonial.industry} Industry</div>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-white">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-zion-cyan scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {testimonial.verified && (
                  <CheckCircle className="w-4 h-4 text-green-400 ml-2" />
                )}
              </div>

              <p className="text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-zion-slate text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Let's discuss how we can transform your business and help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Success Story
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;