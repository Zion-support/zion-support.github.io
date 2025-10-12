'use client';
import React from 'react';
import { Link } from 'react-router-dom';
const Page: React.F C = () => {
import { ArrowRight, Brain, Cloud } from 'lucide-react';

export default function A IVideo Editor() {
  const features = [
    {
      icon: <B rain class Name="w-6 h-6 t ext-cyan-400" />,
      title: 'A I-Powered Editing',
      description: 'Automatically edit videos with intelligent scene detection, color correction, and audio enhancement'
    },
    {
      icon: <S cissors class Name="w-6 h-6 t ext-purple-400" />,
      title: 'Smart Cut Detection',
      description: 'A I automatically identifies the best moments and creates seamless cuts and transitions'
    },
    {
      icon: <P lay class Name="w-6 h-6 t ext-yellow-400" />,
      title: 'Auto-Generated Content',
      description: 'Create engaging videos from text, images, and audio with A I-generated animations and effects'
    },
    {
      icon: <T rending Up class Name="w-6 h-6 t ext-green-400" />,
      title: 'Performance Analytics',
      description: 'Track video performance, engagement metrics, and optimize content for better results'
    }
  ]

  const editing Features = [
    {
      category: 'A I Editing',
      items: ['Auto Scene Detection', 'Smart Cuts', 'Color Correction', 'Audio Enhancement', 'Stabilization', 'Background Removal']
    },
    {
      category: 'Content Creation',
      items: ['Text to Video', 'Image Animation', 'Voice Synthesis', 'Music Generation', 'Template Library', 'Custom Branding']
    },
    {
      category: 'Export & Sharing',
      items: ['Multiple Formats', 'Social Media Optimization', 'Cloud Storage', 'Direct Publishing', 'Collaboration Tools', 'Version Control']
    },
    {
      category: 'Analytics',
      items: ['View Metrics', 'Engagement Tracking', 'A/B Testing', 'Performance Reports', 'Audience Insights', 'R OI Analysis']
    }
  ]

  const pricing Plans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and influencers',
      features: [
        'Up to 10 hours of video/month',
        'Basic A I features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for businesses and agencies',
      features: [
        'Up to 50 hours of video/month',
        'Advanced A I features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'A PI access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited video processing',
        'Custom A I training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      company: 'You Tube Creator',
      content: 'A I Video Editor cut my editing time by 70%. The auto-generated content is incredibly engaging.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency',
      content: 'Creating professional videos for clients is now effortless. The A I quality is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      company: 'E-learning Platform',
      content: 'The analytics help us understand what content performs best. Our engagement increased by 150%.',
      rating: 5
    }
  ]

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function Page() {
  return (

      <H elmet>
        <t itle>Professional Services - Zion Tech Group</t itle>
        <m eta name="description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <m eta name="keywords" content="A I solutions, I T services, Zion Tech Group" />
        <m eta property="og:title" content=" - Zion Tech Group" />
        <m eta property="og:description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <m eta property="og:type" content="website" />
        <m eta property="og:url" content="https://ziontechgroup.com/ai-video-editor" />
      </H elmet>
        <t itle>- Zion Tech Group</t itle>
        <m eta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <m eta name="keywords" content="A I solutions, I T services, Zion Tech Group" / / />
        <m eta property="og:title" content=" - Zion Tech Group" / / />
        <m eta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <m eta property="og:type" content="website" / / />
        <m eta property="og:url" content="https://ziontechgroup.com/ai-video-editor" / / />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </d iv>
        {/* Hero Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4 text-center">
            <h1 c lass Name="t ext-5xl md:text-6xl font-bold text-white mb-6">
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Services</s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto">
        </d iv>
            <h1 c lass Name="t ext-5 xl md:text-6 xl font-boldtext-whitemb-6" />
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"   / />
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto" />

              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.

            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4justify-centermb-12">
        </d iv>
              <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />

                Get Started

                <A rrow Right class Name="m l-2group-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/contact" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </L ink>
            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-2xlmx-auto" />

                Contact us to learn more about our solutions and how we can help your business.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </L ink>
                <L ink to="/services" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>

  );
};

export default Page;

}
}
