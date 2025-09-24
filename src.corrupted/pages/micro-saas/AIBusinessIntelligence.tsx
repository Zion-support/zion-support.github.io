import React from "react"
import { motion } from "framer-motion"
import { Brain, BarChart3, Zap, Eye, ArrowRight, Shield, Cloud, Database, Cpu, Users, TrendingUp, Target } from "lucide-react"
export default function AIBusinessIntelligence() {;
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Insights',description: 'Intelligent analysis and predictive modeling'
    };
    {;
      icon: BarChart3,title: 'Real-time Analytics',description: 'Live data visualization and reporting'
    };
    {;
      icon: Zap,title: 'Automated Intelligence',description: 'Smart automation of business processes'
    };
    {;
      icon: Eye,title: 'Predictive Analytics',description: 'Forecast trends and identify opportunities'
    };
  ];
  const capabilities = [;
    {;
      title: 'Business Intelligence Dashboard',description: 'Comprehensive view of all business metrics and KPIs',icon: BarChart3;
    };
    {;
      title: 'Predictive Modeling',description: 'AI algorithms to forecast business outcomes',icon: TrendingUp;
    };
    {;
      title: 'Natural Language Query',description: 'Ask questions in plain English and get instant answers',icon: Database;
    };
    {;
      title: 'Automated Reporting',description: 'Generate reports automatically with AI insights',icon: Target;
    };
  ];
  return (
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900"></[^>]*>
        <div className="container-responsive relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">;
              <[^>]*/>
              <span className="text-violet-400 font-medium">AI Business Intelligence</[^>]*>
            </[^>]*>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Intelligence at Your;
              <span className="text-gradient"> Fingertips</[^>]*>
            </[^>]*>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Transform your business data into actionable intelligence with our AI-powered;
              business intelligence platform. Make smarter decisions faster.;
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="btn-futuristic px-8 py-4 text-lg">;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <button className="btn-outline px-8 py-4 text-lg">;
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose AI Business Intelligence?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Powerful insights that drive business growth and efficiency;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-zion-slate-light">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Capabilities Section */};
      <section className="py-20 bg-white/5">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Platform Capabilities;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Everything you need to transform data into business intelligence;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {capabilities.map((capability, index) => (;
              <motion.div
                key={capability.title};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-2xl font-semibold text-white mb-3">{capability.title}</[^>]*>
                    <p className="text-zion-slate-light leading-relaxed">{capability.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Simple, Transparent Pricing;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Choose the plan that fits your business needs;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">;
            {/* Starter Plan */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.1 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h3 className="text-2xl font-bold text-white mb-4">Starter</[^>]*>
              <div className="text-4xl font-bold text-zion-cyan mb-6">$29<span className="text-lg text-zion-slate-light">/month</span></[^>]*>
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Up to 5 users;
                </[^>]*>
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Basic AI insights;
                </[^>]*>
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Standard reports;
                </[^>]*>
              </[^>]*>
              <button className="w-full btn-outline py-3">Get Started</[^>]*>
            </[^>]*>

            {/* Pro Plan */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">;
                Most Popular;
              </[^>]*>
              <h3 className="text-2xl font-bold text-white mb-4">Pro</[^>]*>
              <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg text-violet-200">/month</span></[^>]*>
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-violet-100">;
                  <[^>]*/>
                  Up to 25 users;
                </[^>]*>
                <li className="flex items-center text-violet-100">;
                  <[^>]*/>
                  Advanced AI analytics;
                </[^>]*>
                <li className="flex items-center text-violet-100">;
                  <[^>]*/>
                  Custom dashboards;
                </[^>]*>
                <li className="flex items-center text-violet-100">;
                  <[^>]*/>
                  Priority support;
                </[^>]*>
              </[^>]*>
              <button className="w-full bg-white text-violet-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">;
                Get Started;
              </[^>]*>
            </[^>]*>

            {/* Enterprise Plan */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.3 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</[^>]*>
              <div className="text-4xl font-bold text-zion-cyan mb-6">Custom</[^>]*>
              <ul className="space-y-3 mb-8">;
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Unlimited users;
                </[^>]*>
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Custom AI models;
                </[^>]*>
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  White-label solution;
                </[^>]*>
                <li className="flex items-center text-zion-slate-light">;
                  <[^>]*/>
                  Dedicated support;
                </[^>]*>
              </[^>]*>
              <button className="w-full btn-outline py-3">Contact Sales</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <div className="absolute inset-0 bg-black/20"></[^>]*>
            <div className="relative z-10">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Get Started?;
              </[^>]*>
              <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">;
                Join thousands of businesses using AI to make smarter decisions.;
              </[^>]*>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">;
                  Start Free Trial;
                </[^>]*>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-violet-600 transition-colors duration-300">;
                  Schedule Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

//[^;]*
const CheckCircle = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
);