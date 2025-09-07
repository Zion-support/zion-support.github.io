import React from "react";

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    duration: '2 hours',
    difficulty: 'Beginner',
    icon: Code,
    features: ['HTML Basics', 'CSS Styling', 'JavaScript Fundamentals', 'React Introduction'],
    link: '/guides/web-development'
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    description: 'Learn the basics of AI, machine learning, and how to implement them in your projects',
    category: 'AI/ML',
    duration: '3 hours',
    difficulty: 'Intermediate',
    icon: BookOpen,
    features: ['Machine Learning Concepts', 'Python for AI', 'Data Preprocessing', 'Model Training'],
    link: '/guides/ai-ml-fundamentals'
  },
  {
    title: 'Cloud Infrastructure Setup',
    description: 'Step-by-step guide to setting up and managing cloud infrastructure',
    category: 'Cloud Computing',
    duration: '1.5 hours',
    difficulty: 'Intermediate',
    icon: Cloud,
    features: ['AWS Setup', 'Azure Configuration', 'Google Cloud Platform', 'Security Best Practices'],
    link: '/guides/cloud-infrastructure'
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your applications and data',
    category: 'Security',
    duration: '2.5 hours',
    difficulty: 'Advanced',
    icon: Shield,
    features: ['Threat Assessment', 'Security Implementation', 'Monitoring', 'Incident Response'],
    link: '/guides/cybersecurity'
  },
  {
    title: 'Database Design and Optimization',
    description: 'Learn how to design efficient databases and optimize performance',
    category: 'Database',
    duration: '2 hours',
    difficulty: 'Intermediate',
    icon: Database,
    features: ['Database Design', 'Query Optimization', 'Indexing', 'Performance Tuning'],
    link: '/guides/database-design'
  },
  {
    title: 'DevOps and CI/CD Pipeline',
    description: 'Complete guide to implementing DevOps practices and CI/CD pipelines',
    category: 'DevOps',
    duration: '3 hours',
    difficulty: 'Advanced',
    icon: FileText,
    features: ['Docker Containers', 'Kubernetes', 'CI/CD Setup', 'Monitoring'],
    link: '/guides/devops-cicd'
  }
];

const categories = [
  { name: 'All', count: guides.length },
  { name: 'Web Development', count: guides.filter(g => g.category === 'Web Development').length },
  { name: 'AI/ML', count: guides.filter(g => g.category === 'AI/ML').length },
  { name: 'Cloud Computing', count: guides.filter(g => g.category === 'Cloud Computing').length },
  { name: 'Security', count: guides.filter(g => g.category === 'Security').length },
  { name: 'Database', count: guides.filter(g => g.category === 'Database').length },
  { name: 'DevOps', count: guides.filter(g => g.category === 'DevOps').length }
];

export default function GuidesPage() {
  return (
<div className={className || ""}>
      <h1>Guides</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Guides;
