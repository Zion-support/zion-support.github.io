import { ArrowRight, Video, Mic, Calendar, Users, CheckCircle, Star, Brain, Clock, Zap, FileText, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIMeetingAssistant() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Transcription",
      description: "Real-time speech-to-text with 99% accuracy in 50+ languages"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Smart Video Recording",
      description: "Automatic recording with speaker identification and screen sharing capture"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Analysis",
      description: "Sentiment analysis, speaking time tracking, and engagement metrics"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Auto-Generated Summaries",
      description: "AI creates meeting summaries, action items, and key decisions"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling with conflict resolution and time zone management"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Meeting Analytics",
      description: "Detailed insights on meeting effectiveness and participant engagement"
    }
  ];

  const capabilities = [
    "Real-time transcription in 50+ languages",
    "Automatic action item extraction",
    "Meeting sentiment analysis",
    "Speaker identification and diarization",
    "Integration with Zoom, Teams, Google Meet",
    "Custom meeting templates",
    "AI-powered follow-up suggestions",
    "Meeting effectiveness scoring",
    "Participant engagement tracking",
    "Automated meeting summaries",
    "Calendar integration",
    "Custom branding and white-labeling"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 hours of recording/month",
        "Basic transcription",
        "Meeting summaries",
        "Email support",
        "5 team members",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 50 hours of recording/month",
        "Advanced AI features",
        "Sentiment analysis",
        "Action item tracking",
        "Priority support",
        "Unlimited team members",
        "Advanced integrations",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited recording",
        "All AI features",
        "Custom AI training",
        "24/7 dedicated support",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Tech Innovations Inc.",
      role: "VP of Operations",
      content: "Zion AI Meeting Assistant has transformed our meeting culture. We've reduced meeting time by 30% and improved follow-through on action items by 80%.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Global Consulting",
      role: "Managing Director",
      content: "The AI transcription is incredibly accurate, even with multiple speakers and technical jargon. The automatic summaries save us hours every week.",
      rating: 5
    },
    {
      name: "Emily Watson",
      company: "Startup Accelerator",
      role: "Program Manager",
      content: "The meeting analytics help us identify which meetings are most effective. We've optimized our meeting structure and improved team productivity significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Meeting Assistant - Intelligent Meeting Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your meetings with Zion AI Meeting Assistant. Real-time transcription, AI summaries, sentiment analysis, and meeting analytics for modern teams."
        />
        <meta
          name="keywords"
          content="AI meeting assistant, meeting transcription, meeting analytics, video conferencing, meeting summaries, team collaboration, productivity tools"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Brain className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">AI-Powered Meeting Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Zion AI Meeting Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your meetings with AI-powered transcription, real-time analysis, and intelligent summaries. 
              Make every meeting more productive and actionable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">99%</div>
                <div className="text-gray-300">Transcription Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Meeting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make your meetings more productive and actionable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform pulse-glow-enhanced">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Meeting Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to optimize your meeting experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center glass-enhanced rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-8 border transition-all duration-500 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what teams say about Zion AI Meeting Assistant
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using Zion AI Meeting Assistant to make their meetings more productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}