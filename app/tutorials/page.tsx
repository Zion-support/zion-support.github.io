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
      description: 'Essential cybersecurity practices and threat protection strategies.',
      duration: '2.5 hours',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 1100,
      instructor: 'Alex Rodriguez',
      category: 'Cybersecurity'
    },
    {
      id: 4,
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced ML algorithms and neural networks.',
      duration: '4 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 750,
      instructor: 'Dr. Lisa Park',
      category: 'AI & Machine Learning'
    },
    {
      id: 5,
      title: 'DevOps Best Practices',
      description: 'Learn modern DevOps practices and CI/CD pipeline implementation.',
      duration: '3.5 hours',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      instructor: 'David Kim',
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'Data Analytics with Python',
      description: 'Comprehensive guide to data analysis and visualization using Python.',
      duration: '2.5 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 1400,
      instructor: 'Emma Wilson',
      category: 'Data Science'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', count: tutorials.length },
    { id: 'ai', name: 'AI & Machine Learning', count: tutorials.filter(t => t.category === 'AI & Machine Learning').length },
    { id: 'cloud', name: 'Cloud Computing', count: tutorials.filter(t => t.category === 'Cloud Computing').length },
    { id: 'security', name: 'Cybersecurity', count: tutorials.filter(t => t.category === 'Cybersecurity').length },
    { id: 'devops', name: 'DevOps', count: tutorials.filter(t => t.category === 'DevOps').length },
    { id: 'data', name: 'Data Science', count: tutorials.filter(t => t.category === 'Data Science').length }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>"""
        <title>Tutorials - Zion Tech Group</title>""""
        <meta name="description" content="Learn AI, cloud computing, cybersecurity, and more with our comprehensive tutorials and courses." />""""
        <meta name="keywords" content="tutorials, courses, AI learning, cloud computing, cybersecurity, data science, DevOps" />"
      </Helmet>""
"""
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>""""
        <div className="container mx-auto px-4 relative z-10">""""
          <div className="text-center">""""
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">""
              Tutorials & Courses"""
            </h1>""""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and hands-on courses.
            </p>
          </div>
        </div>"
      </section>""
"""
      {/* Categories */}""""
      <section className="py-12">""""
        <div className="container mx-auto px-4">""""
          <div className="flex flex-wrap justify-center gap-4">"
            {categories.map((category) => (""
              <button"""
                key={category.id}"""">
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 text-white hover:bg-white/20 transition-colors">
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* Tutorials Grid */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"""
            {tutorials.map((tutorial) => (""""
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-colors group">""""
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">""""
                  <Play className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />""""
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>"
                  </div>"
                "
                """"
                <div className="p-6">""""
                  <div className="flex items-center justify-between mb-3">""""
                    <span className="text-blue-400 text-sm font-medium">{tutorial.category}</span>""""
                    <div className="flex items-center text-yellow-400">""""
                      <Star className="w-4 h-4 fill-current" />""""
                      <span className="ml-1 text-sm font-medium">{tutorial.rating}</span>"
                    </div>"
                  "
                  """"
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">"
                    {tutorial.title"
                  </h2>""""
                  <p className="text-gray-300 mb-4 line-clamp-2">"
                    {tutorial.description}""
                  </p>"""
                  """"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">""""
                    <div className="flex items-center">""""
                      <Clock className="w-4 h-4 mr-1" />"
                      {tutorial.duration"
                    </div>""""
                    <div className="flex items-center">""""
                      <User className="w-4 h-4 mr-1" />
                      {tutorial.students.toLocaleString()}"
                    </div>"
                  "
                  """"
                  <div className="flex items-center justify-between">""""
                    <div className="flex items-center text-sm text-gray-400">""""
                      <User className="w-4 h-4 mr-1" />"
                      {tutorial.instructor"
                    </div>""""
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">"""
                      Start Learning""""
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* CTA Section */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">""""
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">""
              Join thousands of professionals who are advancing their careers with our expert-led tutorials."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""""
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">""
                Browse All Tutorials"""
              </button>""""
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Request Custom Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>"
  );""
};"""
"""
export default TutorialsPage;"""
