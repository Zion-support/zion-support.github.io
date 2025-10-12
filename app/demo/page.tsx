import React from 'react';
import { Helmet } from 'react-helmet-async';
import GenericServicePage from '../components/GenericServicePage';

const DemoPage: React.FC = () => {
  const pageData = {
    title: "Live Demo",
    subtitle: "Experience our AI and IT solutions in action",
    description: "See our cutting-edge AI and IT solutions in action with interactive demos and live examples.",
    features: [
      {
        title: "AI Chatbot Demo",
        description: "Experience our advanced conversational AI with natural language processing",
        icon: "💬"
      },
      {
        title: "Analytics Dashboard",
        description: "Explore real-time data visualization and business intelligence tools",
        icon: "📈"
      },
      {
        title: "Security Monitoring",
        description: "See our AI-powered cybersecurity solutions in action",
        icon: "🛡️"
      },
      {
        title: "Cloud Infrastructure",
        description: "Experience our scalable cloud solutions and deployment tools",
        icon: "☁️"
      },
      {
        title: "Automation Tools",
        description: "Watch our workflow automation and process optimization tools",
        icon: "⚡"
      },
      {
        title: "Mobile Applications",
        description: "Test our cross-platform mobile solutions and user interfaces",
        icon: "📱"
      }
    ],
    benefits: [
      "Interactive live demonstrations",
      "Real-time solution testing",
      "Expert-guided walkthroughs",
      "Custom demo requests",
      "Technical Q&A sessions",
      "Implementation planning"
    ],
    cta: {
      title: "Schedule Your Demo",
      subtitle: "Get a personalized demonstration of our solutions",
      buttonText: "Request Demo",
      buttonLink: "/contact"
    }
  };

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions in action with interactive demos and live examples." />
        <meta name="keywords" content="AI demo, IT solutions demo, live demonstration, interactive demo, technology showcase" />
      </Helmet>
      <GenericServicePage {...pageData} />
    </>
  );
};

export default DemoPage;