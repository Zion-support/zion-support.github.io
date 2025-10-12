import React from 'react';
import { Helmet } from 'react-helmet-async';
import GenericServicePage from '../components/GenericServicePage';

const ConsultationPage: React.FC = () => {
  const pageData = {
    title: "Free Consultation",
    subtitle: "Get expert advice on your AI and IT transformation journey",
    description: "Schedule a free consultation with our experts to discuss your technology needs and get personalized recommendations.",
    features: [
      {
        title: "Technology Assessment",
        description: "Comprehensive evaluation of your current technology stack and infrastructure",
        icon: "🔍"
      },
      {
        title: "Strategic Planning",
        description: "Custom roadmap for your digital transformation and AI adoption",
        icon: "📋"
      },
      {
        title: "Solution Recommendations",
        description: "Tailored recommendations for AI and IT solutions that fit your needs",
        icon: "💡"
      },
      {
        title: "Cost Analysis",
        description: "Detailed cost-benefit analysis for proposed solutions and implementations",
        icon: "💰"
      },
      {
        title: "Implementation Timeline",
        description: "Realistic timeline and milestones for your technology projects",
        icon: "⏰"
      },
      {
        title: "Ongoing Support",
        description: "Continuous support and guidance throughout your technology journey",
        icon: "🤝"
      }
    ],
    benefits: [
      "Free initial consultation",
      "Expert technology assessment",
      "Customized recommendations",
      "No-obligation consultation",
      "Industry best practices",
      "Long-term partnership"
    ],
    cta: {
      title: "Schedule Your Free Consultation",
      subtitle: "Get expert advice tailored to your business needs",
      buttonText: "Book Consultation",
      buttonLink: "/contact"
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert advice on your AI and IT transformation journey with our free consultation service." />
        <meta name="keywords" content="free consultation, technology assessment, AI strategy, IT consulting, digital transformation" />
      </Helmet>
      <GenericServicePage {...pageData} />
    </>
  );
};

export default ConsultationPage;