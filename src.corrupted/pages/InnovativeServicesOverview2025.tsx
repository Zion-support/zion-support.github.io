import React from "react"
import { motion } from "framer-motion"
import { ;
  Brain,;
  Shield, ;
  Cloud, ;
  Rocket, ;
  Users, ;
  BarChart3, ;
  Building, ;
  ArrowRight, ;
  CheckCircle, ;
  Phone, ;
  Mail, ;
  MapPin, ;
  Award, ;
  Sparkles,;
  Heart,;
  Truck,;
  FileText,;
  Activity,;
  TrendingUp,;
  Target,;
  Zap,;
  Globe;
} from "lucide-react"
const InnovativeServicesOverview2025 = () => {;
  const serviceCategories = [;
    {;
      id: 'ai-customer-success',title: 'AI Customer Success Platform',icon: Users,color: 'from-blue-500 to-purple-600',description: 'Transform customer success with AI-powered insights and automation',price: 'From $1,200/month',;
      features: ['AI-powered insightsPredictive analytics', 'Automated workflows'],;
      path: '/services/ai-customer-success-platform',benefits: ['Reduce churn by 40%Increase CLV by 35%', 'Automate 70% of tasks']
    },;
    {;
      id: 'ai-supply-chain',title: 'AI Supply Chain Optimization',icon: Truck,color: 'from-green-500 to-blue-600',description: 'Revolutionize supply chain operations with AI intelligence',price: 'From $1,800/month',;
      features: ['Demand forecastingRoute optimization', 'Risk management'],;
      path: '/services/ai-supply-chain-optimization',benefits: ['Reduce costs by 35%Improve delivery by 40%', 'Minimize disruptions']
    },;
    {;
      id: 'ai-financial-compliance',title: 'AI Financial Compliance Platform',icon: Shield,color: 'from-purple-500 to-indigo-600',description: 'Automate financial compliance with AI-powered risk assessment',price: 'From $2,200/month',;
      features: ['AI risk assessmentAutomated monitoring', 'Real-time alerts'],;
      path: '/services/ai-financial-compliance-platform',benefits: ['Reduce costs by 60%Improve accuracy by 95%', '24/7 monitoring']
    },;
    {;
      id: 'ai-healthcare-analytics',title: 'AI Healthcare Analytics Platform',icon: Heart,color: 'from-pink-500 to-red-600',description: 'Transform healthcare with AI-powered patient analytics',price: 'From $2,800/month',;
      features: ['Patient analyticsClinical decision support', 'HIPAA compliance'],;
      path: '/services/ai-healthcare-analytics-platform',benefits: ['Improve outcomes by 35%Reduce readmissions by 40%', 'Lower costs by 30%']
    };
  ],;

  const additionalServices = [;
    {;
      name: 'AI-Powered SEO Platform',description: 'Advanced SEO optimization with machine learning',price: '$1,500/month',;
      path: '/services/ai-powered-seo'
    };
    {;
      name: 'AI Interview Assessment',description: 'Intelligent candidate evaluation and screening',price: '$800/month',path: '/services/interview-assessment-ai'
    };
    {;
      name: 'Zero Trust Network Access',description: 'Enterprise-grade security with zero trust principles',price: '$2,000/month',;
      path: '/services/zero-trust-network-access'
    };
    {;
      name: 'AI Workflow Orchestrator',description: 'Intelligent business process automation',price: '$1,800/month',;
      path: '/services/ai-workflow-orchestrator'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">;
              <[^>]*/>
              Innovative Services 2025;
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Cutting-Edge AI Solutions for;
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                {' '}Modern Businesses;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Discover our comprehensive suite of AI-powered micro SAAS services designed to ;
              transform your business operations and drive sustainable growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Explore Services;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Services */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Featured AI Services;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Our most innovative and impactful AI-powered solutions;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {serviceCategories.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</[^>]*>
                <p className="text-zion-slate-light mb-6">{service.description}</[^>]*>
                ;
                <div className="mb-6">;
                  <div className="text-3xl font-bold text-white mb-2">{service.price}</[^>]*>
                  <div className="text-zion-slate-light">Starting price</[^>]*>
                </[^>]*>
                ;
                <div className="mb-6">;
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</[^>]*>
                  <ul className="space-y-2">;
                    {service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center space-x-2">;
                        <[^>]*/>
                        <span className="text-zion-slate-light">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                ;
                <div className="mb-6">;
                  <h4 className="text-lg font-semibold text-white mb-3">Business Impact:</[^>]*>
                  <ul className="space-y-2">;
                    {service.benefits.map((benefit, benefitIndex) => (;
                      <li key={benefitIndex} className="flex items-center space-x-2">;
                        <[^>]*/>
                        <span className="text-zion-slate-light">{benefit}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                ;
                <a;
                  href={service.path};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Learn More;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Additional Services */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Additional AI Services;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Explore our complete portfolio of AI-powered solutions;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {additionalServices.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.8 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</[^>]*>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</[^>]*>
                <div className="text-xl font-bold text-white mb-4">{service.price}</[^>]*>
                <a;
                  href={service.path};
                  className="[^"]*"
                >;
                  View Details;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8">;
              Let's discuss how our AI services can drive your business forward;
            </[^>]*>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <span className="text-zion-slate-light">+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex items-center justify-center space-x-3">;
                <[^>]*/>
                <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Us;
              </[^>]*>
              <a;
                href="https://ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Visit Website;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default InnovativeServicesOverview2025;