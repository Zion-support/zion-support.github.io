import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Store, Users, Zap, Target, CheckCircle, ArrowRight, DollarSign, Shield, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const SMBPage: NextPage = () => {
  const smbServices = [;
    {
      icon: <Store className="w-8 h-8" />,;
      title: 'Business Management',;
      description: 'Streamline operations with integrated business management solutions',;
      features: ['CRM Systems', 'Inventory Management', 'Financial Tracking', 'Customer Support']},;
    {
      icon: <Globe className="w-8 h-8" />,;
      title: 'Digital Presence',;
      description: 'Build a strong online presence with professional websites and marketing',;
      features: ['Website Development', 'SEO Optimization', 'Social Media', 'Online Marketing']},;
    {
      icon: <Shield className="w-8 h-8" />,;
      title: 'IT Security',;
      description: 'Protect your business with affordable cybersecurity solutions',;
      features: ['Data Backup', 'Security Monitoring', 'Employee Training', 'Compliance']},;
    {
      icon: <Zap className="w-8 h-8" />,;
      title: 'Automation',;
      description: 'Automate routine tasks to focus on growing your business',;
      features: ['Workflow Automation', 'Email Marketing', 'Scheduling', 'Reporting']}
  ];

  const benefits = [;
    {
      icon: <DollarSign className="w-8 h-8" />,;
      title: 'Cost-Effective',;
      description: 'Affordable solutions designed specifically for small and medium businesses'},;
    {
      icon: <Users className="w-8 h-8" />,;
      title: 'Personalized Support',;
      description: 'Dedicated support team that understands your business needs'},;
    {
      icon: <TrendingUp className="w-8 h-8" />,;
      title: 'Scalable Growth',;
      description: 'Solutions that grow with your business as you expand'},;
    {
      icon: <Target className="w-8 h-8" />,;
      title: 'Quick Implementation',;
      description: 'Fast deployment to get you up and running quickly'}
  ];

  const industries = [;
    {
      title: 'Retail',;
      description: 'Point-of-sale systems, inventory management, and customer analytics',;
      icon: <Store className="w-6 h-6" />},;
    {
      title: 'Professional Services',;
      description: 'Client management, project tracking, and billing automation',;
      icon: <Users className="w-6 h-6" />},;
    {
      title: 'Healthcare',;
      description: 'Patient management, appointment scheduling, and compliance',;
      icon: <Shield className="w-6 h-6" />},;
    {
      title: 'Manufacturing',;
      description: 'Production tracking, quality control, and supply chain management',;
      icon: <Target className="w-6 h-6" />}
  ];

  return (;
    <MainLayout>;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">SMB</span> Solutions;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Technology solutions designed specifically for small and medium businesses to drive growth and efficiency;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">;
              Get SMB Consultation;
            </Link>;
            <Link href="/pricing" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* SMB Services */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">SMB-Focused Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Affordable technology solutions tailored for small and medium businesses;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {smbServices.map((service, index) => (;
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">;
                <div className="text-green-500 mb-4">;
                  {service.icon}
                </div>;
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>;
                <p className="text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
                      <span className="text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Industries */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Specialized solutions for various SMB industries;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {industries.map((industry, index) => (;
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">;
                <div className="text-green-500 mb-4 flex justify-center">;
                  {industry.icon}
                </div>;
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>;
                <p className="text-gray-600 text-sm">{industry.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Benefits */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Why Choose Our SMB Solutions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Designed specifically for small and medium businesses;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">;
                <div className="text-zion-cyan mb-4 flex justify-center">;
                  {benefit.icon}
                </div>;
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your SMB?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Let our experts help you implement the right technology solutions for your business;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link href="/pricing" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default SMBPage;