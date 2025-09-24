import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Rocket,;
  Cpu,;
  Database,;
  Cloud,;
  Shield,;
  Users,;
  BarChart3,;
  Zap,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Globe,;
  Target,;
  Lightbulb,;
  TrendingUp,;
  Settings,;
  Workflow,;
  FileText,;
  Monitor,;
  Smartphone;
} from "lucide-react"
export default function DigitalTransformation() {;
  const features = [;
    {;
      icon: Rocket,title: 'Strategic Planning',description: 'Comprehensive digital transformation roadmap and strategy'
    };
    {;
      icon: Globe,title: 'Technology Integration',description: 'Seamless integration of modern technologies and systems'
    };
    {;
      icon: Building,title: 'Process Optimization',description: 'Streamline and automate business processes for efficiency'
    };
    {;
      icon: Users,title: 'Change Management',description: 'Guide organizations through digital transformation journey'
    };
    {;
      icon: Clock,title: 'Agile Implementation',description: 'Rapid deployment with iterative improvement cycles'
    };
    {;
      icon: Search,title: 'Performance Monitoring',description: 'Track transformation progress and measure ROI'
    };
  ];
  const benefits = [;
    'Increase operational efficiency by 40%Reduce costs by 30% through automation',;
    'Improve customer experience and satisfactionEnable data-driven decision making',;
    'Accelerate time to marketEnhance competitive advantage'
  ],;

  const services = [;
    {;
      icon: Strategy,title: 'Digital Strategy',description: 'Comprehensive digital transformation strategy development'
    };
    {;
      icon: Workflow,title: 'Process Automation',description: 'Automate manual processes and workflows'
    };
    {;
      icon: Cloud,title: 'Cloud Migration',description: 'Migrate legacy systems to modern cloud platforms'
    };
    {;
      icon: Data,title: 'Data Analytics',description: 'Implement advanced analytics and business intelligence'
    };
  ];
  const useCases = [;
    {;
      industry: 'Manufacturing',description: 'Smart factory and Industry 4.0 transformation'
    };
    {;
      industry: 'Healthcare',description: 'Digital health records and telemedicine solutions'
    };
    {;
      industry: 'Financial Services',description: 'Digital banking and fintech innovation'
    };
    {;
      industry: 'Retail',description: 'E-commerce and omnichannel retail transformation'
    };
  ];
  const contactInfo = {;
    phone: "+1 302 464 0950",email: "kleber@ziontechgroup.com",address: "364 E Main St STE 1008, Middletown DE 19709"
  },;
  const industries = [;
    'HealthcareFinance',;
    'ManufacturingRetail',;
    'EducationGovernment',;
    'TechnologyTransportation'
  ],;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">;
      <[^>]*/>
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></[^>]*>
        <div className="relative z-10 container mx-auto px-4 text-center">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">;
              <[^>]*/>
              Digital Transformation Solutions;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Digital;
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Transformation</[^>]*>
            </[^>]*>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">;
              Transform your business for the digital age with comprehensive technology solutions that drive innovation;
              efficiency, and growth. Our expert team guides you through every step of your digital journey.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Start Your Transformation;
              </[^>]*>
              <Link;
                to="/solutions"
                className="[^"]*"
              >;
                View Solutions;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Services Grid */};
      <section className="py-20 px-4">;
        <div className="container mx-auto">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Digital Transformation Features;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Comprehensive digital transformation services designed to modernize your business operations;
              and position you for future success.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Core Transformation Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              From strategy to implementation, we provide ;
              end-to-end digital transformation solutions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</[^>]*>
                    <p className="text-gray-300">{service.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transformation Benefits;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Experience measurable improvements in efficiency, innovation, and business performance.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                initial={{ opacity: 0, y: 30 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</[^>]*>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Industries Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our digital transformation expertise spans across multiple industries;
              each with unique challenges and opportunities.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {industries.map((industry, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="text-zion-cyan font-semibold">{industry}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Process Section */};
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Our Transformation Process;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              A proven methodology that ensures successful digital transformation outcomes.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
            {[;
              { step: '01', title: 'Assessment', description: 'Evaluate current state and identify transformation opportunities' };
              { step: '02', title: 'Strategy', description: 'Develop comprehensive digital transformation roadmap' };
              { step: '03', title: 'Implementation', description: 'Execute transformation plan with expert guidance' };
              { step: '04', title: 'Optimization', description: 'Continuously improve and scale digital capabilities' };
            ].map((phase, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                initial={{ opacity: 0, y: 30 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;
                  {phase.step};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</[^>]*>
                <p className="text-gray-300 text-sm">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Start Your Digital Transformation Today;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Let our digital transformation experts guide you through your journey to digital excellence.;
              Get started with a free consultation today.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Schedule Consultation;
              </[^>]*>
              <Link;
                to="/solutions"
                className="[^"]*"
              >;
                Explore Solutions;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};