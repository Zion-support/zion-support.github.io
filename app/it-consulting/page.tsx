'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Cloud, Shield, BarChart, Users, Settings, Target, TrendingUp, Globe, Zap } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Digital Transformation Strategy",
      description: "Comprehensive assessment and roadmap for modernizing your IT infrastructure and business processes."
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Cloud Migration & Optimization",
      description: "Seamless migration to cloud platforms with cost optimization and performance enhancement."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Cybersecurity Assessment",
      description: "Complete security audit and implementation of enterprise-grade security solutions."
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence."
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "IT Infrastructure Design",
      description: "Design and implement scalable, secure, and efficient IT infrastructure solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Team Training & Support",
      description: "Comprehensive training programs and ongoing support for your IT team."
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.",
      icon: "🏥"
    },
    {
      name: "Financial Services",
      description: "Secure, compliant IT solutions for banks, credit unions, and financial institutions.",
      icon: "🏦"
    },
    {
      name: "Manufacturing",
      description: "IoT integration and automation solutions for smart manufacturing operations.",
      icon: "🏭"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel solutions and customer experience optimization.",
      icon: "🛍️"
    },
    {
      name: "Education",
      description: "Digital learning platforms and campus-wide IT infrastructure.",
      icon: "🎓"
    },
    {
      name: "Government",
      description: "Secure, compliant solutions for government agencies and public sector.",
      icon: "🏛️"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current IT environment, identify pain points, and assess your business requirements."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive IT strategy aligned with your business goals and budget constraints."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed implementation plans with timelines, resources, and risk mitigation strategies."
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "Implement solutions with minimal disruption and provide ongoing support and optimization."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechCorp Inc.",
      content: "Zion Tech Group transformed our IT infrastructure completely. Their expertise in cloud migration saved us 40% in operational costs while improving performance.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "IT Director, HealthFirst",
      content: "The cybersecurity assessment revealed critical vulnerabilities we didn't know existed. Their implementation was flawless and our security posture is now enterprise-grade.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "VP Operations, RetailMax",
      content: "Their digital transformation strategy helped us modernize our entire operation. We've seen 60% improvement in efficiency and customer satisfaction.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-cyan-400">IT Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with expert IT consulting services. We help organizations 
              modernize their technology stack, optimize operations, and achieve digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#services"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT consulting services to help your organization 
              leverage technology for competitive advantage and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT consulting expertise spans across multiple industries, 
              helping organizations navigate complex technology challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and maximum value for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about our IT consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert consultants help you modernize your technology infrastructure 
            and achieve your digital transformation goals. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultingPage;