import React from "react";

const tutorialCategories = [
  { name: 'AI & Machine Learning', count: 15, color: 'bg-blue-100 text-blue-800' },
  { name: 'Web Development', count: 12, color: 'bg-green-100 text-green-800' },
  { name: 'Cloud Computing', count: 8, color: 'bg-purple-100 text-purple-800' },
  { name: 'Cybersecurity', count: 10, color: 'bg-red-100 text-red-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Mobile Development', count: 6, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredTutorials = [
  {
    id: 1,
    title: 'Getting Started with AI: A Complete Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of artificial intelligence, from basic concepts to practical implementation.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    duration: '2 hours',
    difficulty: 'Beginner',
    rating: 4.8,
    students: 1250,
    featured: true,
    tags: ['AI', 'Machine Learning', 'Beginner', 'Fundamentals'],
    videoUrl: '/tutorials/ai-beginners-guide'
  },
  {
    id: 2,
    title: 'Building Secure Web Applications: Best Practices',
    excerpt: 'Comprehensive guide to implementing security best practices in modern web applications.',
    category: 'Web Development',
    author: 'Michael Rodriguez',
    duration: '3 hours',
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 980,
    featured: true,
    tags: ['Security', 'Web Development', 'Best Practices'],
    videoUrl: '/tutorials/secure-web-apps'
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies: AWS, Azure, and GCP',
    excerpt: 'Step-by-step guide to migrating your applications to the cloud using major cloud providers.',
    category: 'Cloud Computing',
    author: 'Lisa Wang',
    duration: '4 hours',
    difficulty: 'Advanced',
    rating: 4.7,
    students: 2100,
    featured: true,
    tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP'],
    videoUrl: '/tutorials/cloud-migration'
  }
];

const recentTutorials = [
  {
    id: 4,
    title: 'Introduction to React: Building Your First App',
    excerpt: 'Learn React fundamentals by building a complete web application from scratch.',
    category: 'Web Development',
    author: 'David Kim',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    rating: 4.6,
    students: 750,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 5,
    title: 'Data Visualization with Python and Matplotlib',
    excerpt: 'Create stunning data visualizations using Python and popular visualization libraries.',
    category: 'Data Analytics',
    author: 'Maria Garcia',
    duration: '1.5 hours',
    difficulty: 'Intermediate',
    rating: 4.5,
    students: 890,
    tags: ['Python', 'Data Visualization', 'Matplotlib']
  },
  {
    id: 6,
    title: 'Mobile App Development with React Native',
    excerpt: 'Build cross-platform mobile applications using React Native framework.',
    category: 'Mobile Development',
    author: 'James Wilson',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    rating: 4.8,
    students: 1100,
    tags: ['React Native', 'Mobile Development', 'Cross-platform']
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals: Protecting Your Data',
    excerpt: 'Essential cybersecurity concepts and practices to protect your digital assets.',
    category: 'Cybersecurity',
    author: 'Emily Johnson',
    duration: '2 hours',
    difficulty: 'Beginner',
    rating: 4.7,
    students: 650,
    tags: ['Cybersecurity', 'Data Protection', 'Security']
  }
];

const stats = [
  { number: '50+', label: 'Tutorials' },
  { number: '10K+', label: 'Students' },
  { number: '100+', label: 'Hours of Content' },
  { number: '4.8', label: 'Average Rating' }
];

export default function TutorialsPage() {
  return (
<div className={className || ""}>
      <h1>Tutorials</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tutorials;
