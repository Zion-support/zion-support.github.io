import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Award, Globe, Shield, Zap, Star, CheckCircle, TrendingUp } from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Strategic partnerships with leading technology providers",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Access to cutting-edge technology", "Joint go-to-market strategies", "Technical support and training", "Co-marketing opportunities"]
    },
    {
      title: "Solution Partners",
      description: "Collaborate on integrated solutions and services",
      icon: <Handshake className="w-8 h-8" />,
      benefits: ["Solution integration", "Joint development projects", "Shared customer success", "Revenue sharing opportunities"]
    },
    {
      title: "Channel Partners",
      description: "Reseller and distribution partnerships",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Reseller programs", "Marketing support", "Sales training", "Competitive pricing"]
    },
    {
      title: "Strategic Alliances",
      description: "Long-term strategic partnerships for mutual growth",
      icon: <Award className="w-8 h-8" />,
      benefits: ["Joint ventures", "Market expansion", "Innovation collaboration", "Strategic planning"]
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Revenue Growth', description: 'Increase revenue through joint sales and marketing efforts' },
    { icon: <Globe className="w-6 h-6" />, title: 'Market Expansion', description: 'Access new markets and customer segments through partnerships' },
    { icon: <Shield className="w-6 h-6" />, title: 'Risk Mitigation', description: 'Share risks and resources with trusted partners' },
    { icon: <Star className="w-6 h-6" />, title: 'Innovation', description: 'Collaborate on innovative solutions and technologies' }
  ];

  const requirements = [
    "Proven track record in your industry",
    "Complementary technology or service offerings",
    "Strong customer relationships and market presence",
    "Commitment to quality and customer success",
    "Financial stability and growth potential"
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Partnership Opportunities</title>
        <meta
          name="description"
          content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology partnerships, solution integration, and strategic alliances available."
        />
        <meta
          name="keywords"
          content="partnerships, technology partners, solution partners, channel partners, strategic alliances, business partnerships, technology integration"
        />
      </Helmet>
    </>
  );
}