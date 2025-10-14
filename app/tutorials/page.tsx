import React from 'react';
import { Helmet } from 'react-helmet-async';
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

  return (
    <>
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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-colors group">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-400">{tutorial.difficulty}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{tutorial.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{tutorial.students} students</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">by {tutorial.instructor}</span>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Start Tutorial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Learn?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of students who are already advancing their careers 
                with our comprehensive tutorials and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Browse All Tutorials
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Request Custom Tutorial
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;