import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Right, Circle, Star } from 'lucide-react';
const DemoPage: React.FC = () => {
  const features = [{
      icon: 'Analytics',';
      title: 'AI-Powered Analytics',';
      description: 'See how our AI analyzes your data in real-time',';
      demo: 'Live Demo''},
    {
      icon: 'Security',';
      title: 'Advanced Security',';
      description: 'Experience our enterprise-grade security features',';
      demo: 'Demo''},
    {
      icon: 'Intelligence',';
      title: 'Business Intelligence',';
      description: 'Explore our comprehensive BI dashboard',';
      demo: 'BI Demo''},
    {
      icon: 'Collaboration',';
      title: 'Team Collaboration',';
      description: 'See how teams work together seamlessly',';
      demo: 'Collaboration Demo''}
  ];

  const testimonials = [{
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",
      rating: 5},
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      content: "The live demonstration helped us understand the full potential of the AI solutions.",
      rating: 5},
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",
      rating: 5}
  ];

  return (
    <>
      <EnhancedSEO 
        title="Page - Zion Tech Group"
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs."
        keywords="page, business solutions, technology services, professional services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
  )})}
            </div>;
          </div>;
        </section>;
        {/* Demo Section */}
        <section className="py-20 px-4 bg-slate-800/30">;
          <div className="max-w-6xl mx-auto">;
            <h2 className="text-4xl font-bold text-white text-center mb-16">;
              Watch Our Solutions in Action;
            </h2>;
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">;
              <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">;
                <div className="text-center">;
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">;
                    <Play className="w-10 h-10 text-white ml-1" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-2">Product Demo </h3>;
                  <p className="text-gray-300 mb-4">See our AI solutions in action</p>;
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;
                    Play </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Testimonials */}
        <section className="py-20 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-4xl font-bold text-white text-center mb-16">;
              What Say About Our Demos;
            </h2>;
            <div className="grid md:grid-cols-3 gap-8">;
              {testimonials.map((testimonial, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;
                  <div className="flex items-center mb-4">;
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />))}
                  </div>;
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>;
                  <div>;
                    <p className="text-white font-semibold">{testimonial.name}</p>;
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>;
                  </div>;
                </div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our page services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )};

const page = React.lazy(() => import('./page'));
export default page;
