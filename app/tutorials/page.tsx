import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Right, Play, User, Star, Circle, Clock } from 'lucide-react';

const TutorialsPage: React.FC = () => {
=======
import { ArrowRight, Play, User, Star, Circle, Clock } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      duration: '2 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      instructor: 'Sarah Johnson',
      category: 'AI & Machine Learning'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS and Azure.',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 980,
      instructor: 'Mike Chen',
      category: 'Cloud Computing'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and best practices for developers.',
      duration: '2.5 hours',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 1100,
      instructor: 'Alex Rodriguez',
      category: 'Cybersecurity'
    },
    {
      id: 4,
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns and optimization techniques.',
      duration: '4 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 750,
      instructor: 'Sarah Johnson',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Learn data analysis and visualization using Python and popular libraries.',
      duration: '3.5 hours',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      instructor: 'Mike Chen',
      category: 'Data Science'
    },
    {
      id: 6,
      title: 'DevOps Best Practices',
      description: 'Implement DevOps practices for continuous integration and deployment.',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 650,
      instructor: 'Alex Rodriguez',
      category: 'DevOps'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Data Science',
    'DevOps'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTutorials = selectedCategory === 'All' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>

        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and web development." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud tutorials, cybersecurity tutorials, web development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Tutorials
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Master the latest technologies with our comprehensive tutorials. 
                Learn from industry experts and advance your career.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">

      </div>
    </div>
  );
};


export default TutorialsPage;

