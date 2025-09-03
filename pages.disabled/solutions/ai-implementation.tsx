import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield, Brain, Target } from 'lucide-react';
import Link from 'next/link';

const AIImplementationPage: NextPage = () => {
  const benefits = [;
    {
      icon: <Brain className="w-8 h-8" />,;
      title: 'AI Strategy Development',;
      description: 'Comprehensive AI strategy tailored to your business objectives and industry requirements.'},;
    {
      icon: <Target className="w-8 h-8" />,;
      title: 'Custom AI Solutions',;
      description: 'Bespoke AI implementations designed to solve your specific business challenges.'},;
    {
      icon: <Zap className="w-8 h-8" />,;
      title: 'Rapid Deployment',;
      description: 'Fast-track AI implementation with proven methodologies and best practices.'},;
    {
      icon: <Shield className="w-8 h-8" />,;
      title: 'Enterprise Security',;
      description: 'Secure AI implementations with enterprise-grade security and compliance.'}
  ];

  const services = [;
    {
      title: 'AI Strategy Consulting',;
      description: 'Strategic planning and roadmap development for AI adoption',;
      price: 'From $5,000',;
      features: ['AI readiness assessment', 'ROI analysis', 'Implementation roadmap', 'Technology selection']},;
    {
      title: 'Custom AI Development',;
      description: 'Bespoke AI solutions tailored to your specific needs',;
      price: 'From $15,000',;
      features: ['Custom model development', 'Data pipeline setup', 'API integration', 'Performance optimization']},;
    {
      title: 'AI Integration Services',;
      description: 'Seamless integration of AI capabilities into existing systems',;
      price: 'From $10,000',;
      features: ['System integration', 'Data migration', 'API development', 'Testing & validation']},;
    {
      title: 'AI Training & Support',;
      description: 'Comprehensive training and ongoing support for your team',;
      price: 'From $3,000',;
      features: ['Team training', 'Documentation', '24/7 support', 'Performance monitoring']}
  ];

  return (;
    <MainLayout;
      title="AI Implementation Solutions - Zion Tech Group";
      description="Comprehensive AI implementation services including strategy development, custom solutions, and seamless integration for enterprise organizations.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">;
              AI Implementation Solutions;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">;
              Transform your business with strategic AI implementation. From strategy development to custom solutions, ;
              we help you harness the power of artificial intelligence to drive innovation and growth.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                Get Started Today;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link href="/services/ai-services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                View AI Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Implementation Services?</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We combine deep AI expertise with business acumen to deliver implementations that drive real results.;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center group">;
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">;
                  <div className="text-blue-600">{benefit.icon}</div>;
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Services Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Implementation Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive AI implementation services designed to accelerate your digital transformation.;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">;
                <div className="flex justify-between items-start mb-4">;
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>;
                  <span className="text-blue-600 font-semibold">{service.price}</span>;
                </div>;
                <p className="text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-600">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Implement AI in Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
            Let's discuss how AI can transform your business operations and drive measurable results.;
          </p>;
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
            Start Your AI Journey;
            <ArrowRight className="w-5 h-5 ml-2" />;
          </Link>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default AIImplementationPage;