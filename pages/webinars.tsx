import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Play,
  ChevronUp
} from 'lucide-react';
import Layout from '../components/Layout';

const webinars = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise',
    description: 'Join us for an in-depth discussion about how AI is transforming enterprise operations.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '1 hour',
    speaker: 'Dr. Sarah Johnson',
    attendees: 1250,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    description: 'Learn about the latest security practices for cloud environments.',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Mike Chen',
    attendees: 890,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Building Scalable Microservices',
    description: 'Discover how to design and implement scalable microservices architectures.',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '1.5 hours',
    speaker: 'Alex Rodriguez',
    attendees: 2100,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Data Science in Production',
    description: 'Learn how to deploy and maintain data science models in production environments.',
    date: '2024-03-01',
    time: '4:00 PM EST',
    duration: '1 hour',
    speaker: 'Dr. Lisa Wang',
    attendees: 1650,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'DevOps Culture and Practices',
    description: 'Explore the cultural and technical aspects of successful DevOps implementation.',
    date: '2024-03-05',
    time: '2:30 PM EST',
    duration: '1 hour',
    speaker: 'David Kim',
    attendees: 980,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Mobile App Performance Optimization',
    description: 'Best practices for optimizing mobile app performance and user experience.',
    date: '2024-03-10',
    time: '3:30 PM EST',
    duration: '45 minutes',
    speaker: 'Maria Garcia',
    attendees: 1450,
    thumbnail: '/api/placeholder/300/200'
  }
];

const categories = [
  'AI & Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Data Science',
  'Mobile Development',
  'Web Development'
];

export default function Webinars() {
  return (
    <Layout>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars and learn from industry professionals." />
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
                Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our expert-led webinars and learn from industry professionals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Upcoming Webinars
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
                {webinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {webinar.time} ({webinar.duration})
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {webinar.speaker}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">
                          {webinar.attendees} attendees
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Register Now
                        </button>
                      </div>
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
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to get notified about upcoming webinars and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}