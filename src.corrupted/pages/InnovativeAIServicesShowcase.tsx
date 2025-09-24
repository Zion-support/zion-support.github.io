import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ;
  Zap, Sparkles, TrendingUp, Route, Users, PenTool, ;
  CheckCircle, ArrowRight, ExternalLink, Phone, Mail,;
  BarChart3, Shield, Briefcase, Package, Target;
} from "lucide-react"
import SEO from "@/components/SEO"
export default function InnovativeAIServicesShowcase() {;
  const services = [;
    {;
      id: 'ai-project-manager',title: 'AI Project Manager',description: 'Transform your project management with AI-driven insights, automated planning, and intelligent resource optimization.',;
      icon: Zap,color: 'from-blue-600 to-indigo-700',features: [;
        'AI-powered project planning and schedulingAutomated resource allocation and team management'
        'Real-time progress tracking with predictive analyticsIntelligent risk assessment and mitigation'
      ],;
      benefits: ['70% faster project planning40% higher success rate', '3x ROI within 6 months'],;
      pricing: { starter: '$99/mo', professional: '$299/mo', enterprise: '$799/mo' };
      route: '/services/ai-project-manager'
    };
    {;
      id: 'ai-content-marketing-suite',title: 'AI Content Marketing Suite',description: 'Transform your content marketing with AI that writes, optimizes, and distributes content across all channels.',;
      icon: PenTool,color: 'from-purple-600 to-indigo-700',features: [;
        'AI-powered content generation for blogs, social media, and emailsMulti-language content creation and localization',;
        'SEO optimization with keyword research and content planningContent performance analytics and A/B testing'
      ],;
      benefits: ['10x more content output60% better SEO rankings', '70% cost reduction'],;
      pricing: { starter: '$79/mo', professional: '$199/mo', enterprise: '$499/mo' };
      route: '/services/ai-content-marketing-suite'
    };
    {;
      id: 'ai-financial-analytics',title: 'AI Financial Analytics Platform',description: 'Transform your financial decision-making with AI-driven insights, predictive analytics, and automated portfolio optimization.',;
      icon: TrendingUp,color: 'from-green-600 to-emerald-700',features: [;
        'AI-powered financial forecasting and trend analysisReal-time market data integration and analysis'
        'Automated financial reporting and complianceRisk assessment and portfolio optimization'
      ],;
      benefits: ['25-40% better investment returns80% faster analysis time', '85% market prediction accuracy'],;
      pricing: { starter: '$199/mo', professional: '$499/mo', enterprise: '$1,299/mo' },;
      route: '/services/ai-financial-analytics'
    };
    {;
      id: 'ai-hr-talent-platform',title: 'AI HR & Talent Platform',description: 'Transform your HR operations with AI-driven insights, automated workflows, and intelligent talent management.',;
      icon: Users,color: 'from-orange-600 to-red-700',features: [;
        'AI-powered candidate screening and matchingAutomated resume parsing and skill assessment'
        'Intelligent interview scheduling and feedbackEmployee performance analytics and insights'
      ],;
      benefits: ['60% faster time-to-hire40% better candidate quality', '30% reduced hiring costs'],;
      pricing: { starter: '$149/mo', professional: '$399/mo', enterprise: '$999/mo' };
      route: '/services/ai-hr-talent-platform'
    };
    {;
      id: 'ai-supply-chain-optimization',title: 'AI Supply Chain Optimization',description: 'Transform your supply chain with AI-driven insights, predictive analytics, and automated optimization.',;
      icon: Route,color: 'from-teal-600 to-cyan-700',features: [;
        'AI-powered demand forecasting and inventory optimizationReal-time supply chain visibility and tracking'
        'Automated route optimization and logistics planningSupplier performance analytics and risk assessment'
      ],;
      benefits: ['20-30% reduced inventory costs25% improved delivery times', '40% fewer disruptions'],;
      pricing: { starter: '$299/mo', professional: '$799/mo', enterprise: '$1,999/mo' },;
      route: '/services/ai-supply-chain-optimization'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <SEO ;
        title="Innovative AI Services Showcase - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered business solutions including project management, content marketing, financial analytics, HR talent management, and supply chain optimization."
      />;

      {/* Hero Section */};
      <section className="relative py-20 sm:py-24">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <[^>]*/>
            Innovative AI-Powered Solutions;
          </[^>]*>
          ;
          <motion.h1 ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.1 }};
            className="[^"]*"
          >;
            AI Services That;
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
              Transform Business;
            </[^>]*>
          </[^>]*>
          ;
          <motion.p ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.2 }};
            className="[^"]*"
          >;
            Discover our comprehensive suite of AI-powered micro SaaS solutions designed to revolutionize ;
            how businesses operate, scale, and succeed in the digital age.;
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="pb-20">;
        <div className="container mx-auto px-4">;
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">;
            {services.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">;
                  {service.title};
                </[^>]*>
                ;
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>
                ;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</[^>]*>
                  <ul className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-start text-xs text-slate-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                ;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Benefits:</[^>]*>
                  <ul className="space-y-1">;
                    {service.benefits.map((benefit, benefitIndex) => (;
                      <li key={benefitIndex} className="text-xs text-slate-300">;
                        • {benefit};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                ;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at:</[^>]*>
                  <div className="text-lg font-bold text-white">{service.pricing.starter}</[^>]*>
                </[^>]*>
                ;
                <Link ;
                  to={service.route};
                  className="[^"]*"
                >;
                  Learn More <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Why Choose Zion Tech Group */};
      <section className="py-16 bg-slate-900/40">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</[^>]*>
            <p className="text-xl text-slate-300">Leading the AI revolution in business solutions</[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</[^>]*>
              <p className="text-slate-300">SOC 2 compliant, end-to-end encryption, and multi-factor authentication</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</[^>]*>
              <p className="text-slate-300">Track record of delivering measurable ROI and business transformation</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</[^>]*>
              <p className="text-slate-300">Latest AI technologies and continuous innovation in all our solutions</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</[^>]*>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">;
            Join hundreds of organizations already using our AI-powered solutions to drive growth;
            efficiency, and competitive advantage.;
          </[^>]*>
          ;
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
            <a ;
              href="mailto:kleber@ziontechgroup.com"
              className="[^"]*"
            >;
              Start Free Trial;
            </[^>]*>
            <a ;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              Call Us;
            </[^>]*>
          </[^>]*>
          ;
          <div className="text-cyan-100 text-sm">;
            Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-white hover:underline">+1 302 464 0950</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact & Website Section */};
      <section className="py-16">;
        <div className="container mx-auto px-4 text-center">;
          <div className="bg-slate-900/40 rounded-2xl p-8 max-w-4xl mx-auto">;
            <h3 className="text-2xl font-bold text-white mb-6">Visit Our Website</[^>]*>
            <p className="text-slate-300 mb-6">;
              Learn more about our complete suite of AI-powered business solutions and discover ;
              how we can help transform your organization.;
            </[^>]*>
            <a ;
              href="https: //[^;]*
              target="_blank" ;
              rel="noreferrer" ;
              className="[^"]*"
            >;
              Visit ziontechgroup.com <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};