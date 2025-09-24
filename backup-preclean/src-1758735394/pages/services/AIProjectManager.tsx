import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Users, TrendingUp, Shield, Zap, BarChart3, Target, Globe, Smartphone } from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AIProjectManager() {;
  const features = [;
    {;
      title: "AI-Powered Task Prioritization",description: "Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity",;
      icon: Target,color: "from-blue-500 to-cyan-500"
    };
    {;
      title: "Real-time Resource Optimization",description: "Dynamic resource allocation using machine learning to maximize team productivity and efficiency",icon: Users,color: "from-purple-500 to-pink-500"
    };
    {;
      title: "Predictive Risk Assessment",description: "AI analyzes project patterns to identify potential risks before they become issues",icon: Shield,color: "from-orange-500 to-red-500"
    };
    {;
      title: "Automated Progress Tracking",description: "Smart dashboards that automatically track progress and generate insights without manual input",icon: BarChart3,color: "from-green-500 to-emerald-500"
    };
    {;
      title: "Intelligent Communication",description: "AI-powered notifications and updates ensure stakeholders are always informed at the right time",icon: Zap,color: "from-indigo-500 to-blue-500"
    };
    {;
      title: "Cross-Platform Integration",description: "Seamlessly integrates with existing tools like Jira, Asana, Slack, and Microsoft Teams",;
      icon: Globe,color: "from-teal-500 to-cyan-500"
    };
  ];
  const pricingPlans = [;
    {;
      name: "Starter",price: "$29",period: "/month",description: "Perfect for small teams and startups",features: [;
        "Up to 5 team members"
        "Basic AI task prioritization",;
        "Project templates",;
        "Email support",;
        "Mobile app access"
      ],;
      cta: "Start Free Trial",popular: false;
    };
    {;
      name: "Professional",price: "$79",period: "/month",description: "Ideal for growing businesses",features: [;
        "Up to 25 team members"
        "Advanced AI analytics",;
        "Custom workflows",;
        "Priority support",;
        "API access",;
        "Advanced reporting"
      ],;
      cta: "Start Free Trial",popular: true;
    };
    {;
      name: "Enterprise",price: "$199",period: "/month",description: "For large organizations",features: [;
        "Unlimited team members"
        "Custom AI models",;
        "White-label solution",;
        "Dedicated support",;
        "Advanced security",;
        "Custom integrations"
      ],;
      cta: "Contact Sales",popular: false;
    };
  ];
  const benefits = [;
    {;
      title: "30% Faster Project Delivery",description: "AI optimization reduces project timelines and improves efficiency",icon: Clock,metric: "30%"
    };
    {;
      title: "50% Better Resource Utilization",description: "Smart resource allocation maximizes team productivity",icon: TrendingUp,metric: "50%"
    };
    {;
      title: "90% Risk Reduction",description: "Predictive analytics prevent issues before they occur",icon: Shield,metric: "90%"
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI Project Manager - Intelligent Project Management Solution | Zion Tech Group"
        description="Transform your project management with AI-powered task prioritization, resource optimization, and predictive analytics. Start free trial today."
        keywords="AI project management, project management software, AI task prioritization, resource optimization, project analytics"
      />;

      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>
        ;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              AI Project Manager;
            </[^>]*>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              The future of project management is here. AI-powered insights, automated workflows, and intelligent resource optimization.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Powered by Advanced AI;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our AI engine learns from your team's patterns and continuously optimizes your project workflows;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                whileHover={{ y: -5, scale: 1.02 }};
              >;
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-zion-slate-light">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Proven Results;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Join thousands of teams who have transformed their project management with AI;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                className="[^"]*"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.2 }};
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">;
                  <[^>]*/>
                </[^>]*>
                <div className="text-5xl font-bold text-white mb-4">{benefit.metric}</[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</[^>]*>
                <p className="text-zion-slate-light">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Simple, Transparent Pricing;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose the plan that fits your team size and needs. All plans include a 14-day free trial.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans.map((plan, index) => (;
              <motion.div
                key={index};
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/10'
                }`};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                whileHover={{ y: -5, scale: 1.02 }};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                  <div className="flex items-baseline justify-center mb-2">;
                    <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                    <span className="text-zion-slate-light ml-1">{plan.period}</[^>]*>
                  </[^>]*>
                  <p className="text-zion-slate-light">{plan.description}</[^>]*>
                </[^>]*>

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <[^>]*/>
                      <span className="text-white">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${;
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>;
                  {plan.cta};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative">;
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Project Management?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8">;
              Join thousands of teams who have already revolutionized their workflow with AI;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};