import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  FileText, 
  Download, 
  Play, 
  Pause, 
  RotateCcw, 
  Share2, 
  Settings, 
  Users, 
  Clock, 
  CheckCircle, 
  Zap,
  Brain,
  ArrowRight,
  Star,
  Award,
  Shield,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

const ZionAIMeetingTranscriberPage = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Real-time Transcription",
      description: "Convert speech to text instantly with 99.9% accuracy using advanced AI models"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Summarization",
      description: "AI-powered meeting summaries with key points, action items, and decisions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Speaker Identification",
      description: "Automatically identify and label different speakers in multi-participant meetings"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Multiple Export Formats",
      description: "Export transcripts in PDF, Word, TXT, or SRT formats for easy sharing"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Audio Playback",
      description: "Synchronized audio playback with transcript for easy review and verification"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share transcripts with team members and collaborate on meeting notes"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 hours of transcription",
        "Basic AI summarization",
        "PDF export",
        "Email support",
        "5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 hours of transcription",
        "Advanced AI summarization",
        "All export formats",
        "Speaker identification",
        "Priority support",
        "25 team members",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transcription",
        "Custom AI models",
        "Advanced analytics",
        "White-label solution",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Meeting Transcriber - Real-time Meeting Transcription & AI Summarization</title>
        <meta name="description" content="Transform your meetings with Zion AI Meeting Transcriber. Real-time transcription, AI-powered summarization, speaker identification, and seamless collaboration tools. Start your free trial today!" />
        <meta name="keywords" content="meeting transcription, AI transcription, meeting notes, voice to text, meeting summarization, team collaboration, business productivity" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-meeting-transcriber" />
      </Helmet>

      <EnhancedSEO 
        title="Zion AI Meeting Transcriber - Real-time Meeting Transcription & AI Summarization"
        description="Transform your meetings with Zion AI Meeting Transcriber. Real-time transcription, AI-powered summarization, speaker identification, and seamless collaboration tools."
        keywords="meeting transcription, AI transcription, meeting notes, voice to text, meeting summarization, team collaboration, business productivity"
        canonical="https://ziontechgroup.com/zion-ai-meeting-transcriber"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="Zion AI Meeting Transcriber"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your meetings with AI-powered real-time transcription, 
              intelligent summarization, and seamless collaboration tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to capture, understand, and act on your meeting content
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Start Recording</h3>
              <p className="text-gray-300">
                Begin your meeting and our AI starts transcribing in real-time with 99.9% accuracy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Processing</h3>
              <p className="text-gray-300">
                Our advanced AI analyzes the content, identifies speakers, and creates intelligent summaries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Share & Collaborate</h3>
              <p className="text-gray-300">
                Export, share, and collaborate on transcripts with your team instantly
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team's needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton 
                  className="w-full py-3"
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  Start Free Trial
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Zion AI Meeting Transcriber 
              to make their meetings more productive and actionable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                Call +1 (302) 464-0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAIMeetingTranscriberPage;