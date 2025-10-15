<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Tutorials: React.FC = () => {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Shield } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      description: 'Learn how to build and deploy your first AI chatbot in 30 minutes',
      duration: '30 min',
      difficulty: 'Beginner',
      author: 'Sarah Chen',
      category: 'AI & Machine Learning',
      icon: <Code className="w-6 h-6" />,
      link: '/tutorials/ai-chatbots'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your applications to the cloud',
      duration: '45 min',
      difficulty: 'Intermediate',
      author: 'Michael Rodriguez',
      category: 'Cloud Computing',
      icon: <Database className="w-6 h-6" />,
      link: '/tutorials/cloud-migration'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices to protect your digital assets',
      duration: '60 min',
      difficulty: 'Beginner',
      author: 'Emily Johnson',
      category: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      link: '/tutorials/cybersecurity'
    },
    {
      id: 4,
      title: 'Data Analytics with Python',
      description: 'Analyze and visualize data using Python and popular libraries',
      duration: '90 min',
      difficulty: 'Advanced',
      author: 'David Kim',
      category: 'Data Analytics',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/tutorials/data-analytics'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'];

>>>>>>> main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Tutorials solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later for updates.
=======
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials. Step-by-step guides for all skill levels." />
        <meta name="keywords" content="tutorials, AI learning, IT guides, programming, cloud computing, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how to implement AI and IT solutions with our comprehensive step-by-step guides. 
              From beginner to advanced, we have tutorials for every skill level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Browse Categories
              </button>
            </div>
          </div>
>>>>>>> main
=======
<<<<<<< HEAD
import React from 'react;'
import { Helmet , Right,  Play,  User,  Star,  Circle,  Clock   } from 'lucide-react;'
const TutorialsPage: React.FC = () => {
  const tutorials = [{
      id: 1,
      title: "Getting Started with AI Development",""
      description: "Learn the fundamentals of AI development and machine learning concepts.",""
      duration: "2 hours",""
      level: "Beginner",""
      instructor: "Dr. Sarah Johnson",""
      rating: 4.8,
      students: 1250,
      thumbnail: "🤖"},""
    {
      id: 2,
      title: "Infrastructure Setup",""
      description: "Complete guide to setting up cloud infrastructure on AWS and Azure.",""
      duration: "3 hours",""
      level: "Intermediate",""
      instructor: "Michael Chen",""
      rating: 4.9,
      students: 980,
      thumbnail: "☁️"},""
    {
      id: 3,
      title: "Cybersecurity Fundamentals",""
      description: "Essential cybersecurity practices and threat protection strategies.",""
      duration: "4 hours",""
      level: "Beginner",""
      instructor: "Emily Rodriguez",""
      rating: 4.7,
      students: 2100,
      thumbnail: "🔒"},""
    {
      id: 4,
      title: "Advanced Machine Learning",""
      description: "Deep dive into advanced ML algorithms and neural networks.",""
      duration: "6 hours",""
      level: "Advanced",""
      instructor: "Dr. David Kim",""
      rating: 4.9,
      students: 750,
      thumbnail: "🧠"},""
    {
      id: 5,
      title: "DevOps Best Practices",""
      description: "Learn modern DevOps practices and CI/CD pipeline implementation.",""
      duration: "5 hours",""
      level: "Intermediate",""
      instructor: "Lisa Wang",""
      rating: 4.8,
      students: 1100,
      thumbnail: "⚙️"},""
    {
      id: 6,
      title: "Data Analytics with Python",""
      description: "Master data analysis and visualization using Python and popular libraries.",""
      duration: "4 hours",""
      level: "Intermediate",""
      instructor: "James Wilson",""
      rating: 4.6,
      students: 1650,
      thumbnail: "📊"}""
  ];
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">;""
          <div className="max-w-7xl mx-auto text-center">;""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
              Learn;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                Tutorials;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
              Master AI and IT skills with our comprehensive tutorials.;
              Learn from experts with hands-on projects and real-world examples.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                <Play className="w-5 h-5 mr-2 inline" />;""
                Start Learning;
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                Browse All;
              </button>
            </div>
          </div>
        </section>
        {/* Categories */}
        <section className="py-10 px-4">;""
          <div className="max-w-7xl mx-auto">;""
            <div className="flex flex-wrap justify-center gap-4">;""
              {categories.map((category, _index) => (
                <button>
                  key={_index}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300";""
                >;
                  {category.name} ({category.count});
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Tutorials Grid */}
        <section className="py-20 px-4">;""
          <div className="max-w-7xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              Featured Tutorials;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;""
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;""
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>""
                  <div className="flex items-center justify-between mb-3">;""
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">;""
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-yellow-400">;""
                      <Star className="w-4 h-4 fill-current" />;""
                      <span className="ml-1 text-sm">{tutorial.rating}</span>;""
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">;""
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>;""
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;""
                    <span className="flex items-center">;""
                      <Clock className="w-4 h-4 mr-1" />;""
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center">;""
                      <User className="w-4 h-4 mr-1" />;""
                      {tutorial.students} students;
                    </span>
                  </div>
                  <div className="flex items-center justify-between">;""
                    <span className="text-cyan-400 text-sm font-medium">{tutorial.instructor}</span>;""
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">;""
                      Start Tutorial;
                      <Right className="w-4 h-4 ml-1" />;""
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">;""
          <div className="max-w-4xl mx-auto text-center">;""
            <h2 className="text-4xl font-bold text-white mb-6">;""
              Ready to Start Learning?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">;""
              Join thousands of students already learning with our comprehensive tutorials.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                Get Started Free;
                <Right className="w-5 h-5 ml-2 inline" />;""
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                View All Tutorials;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
        <div className="text-center"></div>
          <h1>Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
>>>>>>> main
          </p>
>>>>>>> main
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    {tutorial.icon}
                  </div>
                  <div>
                    <span className="text-purple-400 text-sm font-medium">{tutorial.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{tutorial.author}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <Link
                  to={tutorial.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers and IT professionals who are already learning with our tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

<<<<<<< HEAD
export default Tutorials;
=======
export default TutorialsPage;
>>>>>>> main
=======
  )};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import SEOHead from '../components/SEOHead';

const PagePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="page - Zion Tech Group"
        description="Zion Tech Group page service page"

const TutorialsPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="tutorials - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group tutorials service page"";

      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">tutorials - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>

  )
    },
    {}
export default PagePage;

  ),
};

>>>>>>> main
>>>>>>> main
