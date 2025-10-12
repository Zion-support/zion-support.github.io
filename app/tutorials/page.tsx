import React from 'react';
import { Helmet } from 'react-helmet-async';
import GenericServicePage from '../components/GenericServicePage';

const TutorialsPage: React.FC = () => {
  const pageData = {
    title: "AI & IT Tutorials",
    subtitle: "Master cutting-edge technologies with our comprehensive tutorials",
    description: "Learn AI, machine learning, cloud computing, cybersecurity, and more with our expert-led tutorials and hands-on projects.",
    features: [
      {
        title: "AI & Machine Learning",
        description: "Comprehensive tutorials on AI algorithms, neural networks, and machine learning frameworks",
        icon: "🤖"
      },
      {
        title: "Cloud Computing",
        description: "Master AWS, Azure, and Google Cloud with practical tutorials and real-world projects",
        icon: "☁️"
      },
      {
        title: "Cybersecurity",
        description: "Learn ethical hacking, penetration testing, and security best practices",
        icon: "🔒"
      },
      {
        title: "Web Development",
        description: "Modern web development with React, Node.js, and full-stack technologies",
        icon: "💻"
      },
      {
        title: "Data Science",
        description: "Data analysis, visualization, and big data processing tutorials",
        icon: "📊"
      },
      {
        title: "DevOps & CI/CD",
        description: "Containerization, automation, and deployment strategies",
        icon: "🚀"
      }
    ],
    benefits: [
      "Step-by-step guided tutorials",
      "Hands-on projects and exercises",
      "Expert instructor support",
      "Industry-relevant curriculum",
      "Certification preparation",
      "Lifetime access to materials"
    ],
    cta: {
      title: "Start Learning Today",
      subtitle: "Join thousands of students mastering cutting-edge technologies",
      buttonText: "Browse Tutorials",
      buttonLink: "/contact"
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Master AI, cloud computing, cybersecurity, and more with our comprehensive tutorials and hands-on projects." />
        <meta name="keywords" content="AI tutorials, machine learning, cloud computing, cybersecurity, web development, data science, DevOps" />
      </Helmet>
      <GenericServicePage {...pageData} />
    </>
  );
};

export default TutorialsPage;