import React from "react"
import { motion } from "framer-motion"
import { ;
  Brain,;
  BarChart3, ;
  TrendingUp, ;
  Shield, ;
  Zap, ;
  Users, ;
  Globe, ;
  Database,;
  Cpu,;
  Network,;
  Lock,;
  Eye,;
  Target,;
  Award,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink;
} from "lucide-react"
const AIBusinessIntelligenceElite: React.FC = () => {
  const features = [;
    {;
      icon: Brain,title: "Advanced AI Analytics Engine",description: "Powered by GPT-4 and Claude 3.5 Sonnet for intelligent data interpretation and insights generation"
    };
    {;
      icon: BarChart3,title: "Real-time Business Intelligence",description: "Live dashboards with predictive analytics and trend forecasting capabilities"
    };
    {;
      icon: Shield,title: "Enterprise-Grade Security",description: "SOC 2 Type II compliant with end-to-end encryption and role-based access control"
    };
    {;
      icon: Zap,title: "Automated Reporting",description: "AI-generated executive summaries and automated KPI tracking"
    };
    {;
      icon: Users,title: "Multi-User Collaboration",description: "Team-based analytics with real-time collaboration and sharing capabilities"
    };
    {;
      icon: Globe,title: "Global Data Integration",description: "Connect to 500+ data sources including CRM, ERP, databases, and cloud platforms"
    };
  ],;

  const pricing = [;
    {;
      name: "Starter",price: "$2,500",;
      period: "/month",description: "Perfect for small businesses and startups",features: [;
        "Up to 10 data sources"
        "Basic AI analytics",;
        "Standard reporting",;
        "Email support",;
        "5 user licenses"
      ];
    },;
    {;
      name: "Professional",price: "$5,000",;
      period: "/month",description: "Ideal for growing businesses and teams",features: [;
        "Up to 50 data sources"
        "Advanced AI analytics",;
        "Custom dashboards",;
        "Priority support",;
        "25 user licenses",;
        "API access"
      ],;
      popular: true;
    };
    {;
      name: "Enterprise",price: "$12,000",;
      period: "/month",description: "For large organizations with complex needs",features: [;
        "Unlimited data sources"
        "Full AI suite",;
        "Custom development",;
        "24/7 dedicated support",;
        "Unlimited users",;
        "White-label options"
      ];
    };
  ],;

  const useCases = [;
    {;
      title: "Financial Analytics",description: "Real-time financial reporting, budget tracking, and cash flow analysis with AI-powered forecasting"
    },;
    {;
      title: "Sales Intelligence",description: "Sales performance tracking, lead scoring, and revenue optimization using machine learning"
    },;
    {;
      title: "Customer Analytics",description: "Customer behavior analysis, segmentation, and lifetime value prediction"
    },;
    {;
      title: "Operational Efficiency",description: "Process optimization, resource allocation, and performance monitoring"
    };
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI Business Intelligence Elite;
            </[^>]*>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Transform your business data into actionable intelligence with our cutting-edge AI-powered analytics platform. ;
              Get real-time insights, predictive analytics, and automated reporting that drives growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful Features for Modern Businesses;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver ;
              business intelligence that actually drives results.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</[^>]*>
                <p className="text-zion-slate-light">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing for Every Business;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose the plan that fits your business needs. All plans include our core AI analytics engine ;
              and 24/7 customer support.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`relative bg-zion-slate-dark p-8 rounded-xl border-2 ${;
                  plan.popular ;
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/25' ;
                    : 'border-zion-slate-light'
                }`};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                    <span className="text-zion-slate-light ml-1">{plan.period}</[^>]*>
                  </[^>]*>
                  <p className="text-zion-slate-light mt-2">{plan.description}</[^>]*>
                </[^>]*>

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <[^>]*/>
                      <span className="text-white">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>

                <a;
                  href="https://ziontechgroup.com/contact"
                  className="[^"]*"
                >;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Real-World Applications;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              See how businesses across industries are using our AI Business Intelligence platform ;
              to drive growth and efficiency.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</[^>]*>
                <p className="text-zion-slate-light">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Get in touch with our team to discuss how AI Business Intelligence Elite can help ;
              your organization make data-driven decisions and achieve sustainable growth.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</[^>]*>
              <a ;
                href="tel:+13024640950" ;
                className="[^"]*"
              >;
                +1 (302) 464-0950;
              </[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com" ;
                className="[^"]*"
              >;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</[^>]*>
              <p className="text-zion-slate-light">;
                364 E Main St STE 1008<[^>]*/>
                Middletown, DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="text-center">;
            <a;
              href="https: //ziontechgroup.com/contact"
              className="[^"]*"
            >;
              Schedule a Demo;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Footer */};
      <footer className="py-12 px-4 sm: px-6 lg:px-8 border-t border-zion-slate-light">;
        <div className="max-w-7xl mx-auto text-center">;
          <p className="text-zion-slate-light mb-4">;
            © 2024 Zion Tech Group. All rights reserved.;
          </[^>]*>
          <div className="flex justify-center space-x-6">;
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Visit Website;
              <[^>]*/>
            </[^>]*>
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Privacy Policy;
            </[^>]*>
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Terms of Service;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIBusinessIntelligenceElite;