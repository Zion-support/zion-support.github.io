import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  User, 
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const tutorials = [
  {
    id: 1,
    title: 'Building a Full-Stack Web Application with Next.js',
    description: 'Learn how to build a complete web application using Next.js, React, and Node.js',
    duration: '2 hours',
    difficulty: 'Intermediate',
    instructor: 'John Doe',
    rating: 4.8,
    students: 1250,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning with Python',
    description: 'Get started with machine learning using Python and popular libraries like scikit-learn',
    duration: '3 hours',
    difficulty: 'Beginner',
    instructor: 'Jane Smith',
    rating: 4.9,
    students: 2100,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and secure cloud architectures',
    duration: '1.5 hours',
    difficulty: 'Advanced',
    instructor: 'Mike Johnson',
    rating: 4.7,
    students: 890,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'DevOps with Docker and Kubernetes',
    description: 'Master containerization and orchestration with Docker and Kubernetes',
    duration: '4 hours',
    difficulty: 'Intermediate',
    instructor: 'Sarah Wilson',
    rating: 4.8,
    students: 1650,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile apps with React Native',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    instructor: 'David Brown',
    rating: 4.6,
    students: 980,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Data Science with R and Python',
    description: 'Comprehensive guide to data science using R and Python',
    duration: '5 hours',
    difficulty: 'Advanced',
    instructor: 'Lisa Davis',
    rating: 4.9,
    students: 1450,
    thumbnail: '/api/placeholder/300/200'
  }
];

const categories = [
  'Web Development',
  'Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Mobile Development',
  'Data Science'
];

export default function Tutorials() {
  return (
    <Layout>
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn new skills with our comprehensive tutorials and courses." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tutorials
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn new skills with our comprehensive tutorials and courses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                      <p className="text-gray-600 mb-4">{tutorial.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.instructor}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tutorial.difficulty}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm text-gray-600">{tutorial.rating}</span>
                          <span className="text-sm text-gray-500 ml-2">({tutorial.students} students)</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        Start Tutorial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students who are already learning with our tutorials.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}