import Head from 'next/head'
import { motion } from 'framer-motion'
import { Clock, User, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const trainingPrograms = [
  {
    id: 1, title: 'AI & Machine Learning Fundamentals', description: 'Learn the basics of AI and machine learning with hands-on projects.', duration: '8 weeks', level: 'Beginner', instructor: 'Dr. Sarah Johnson', price: '$1,999', ;
    features: ['Live sessions', 'Hands-on projects', 'Certificate', 'Lifetime access'] },;
  {
    id: 2, title: 'Cloud Architecture & DevOps', description: 'Master cloud technologies and DevOps practices for scalable applications.', duration: '6 weeks', level: 'Intermediate', instructor: 'Mike Chen', price: '$1,499', ;
    features: ['AWS/Azure labs', 'CI/CD pipelines', 'Containerization', 'Monitoring'] },;
  {
    id: 3, title: 'Full-Stack Web Development', description: 'Build modern web applications with React, Node.js, and databases.', ;
    duration: '10 weeks', level: 'Beginner', instructor: 'Alex Rodriguez', price: '$1,499', ;
    features: ['React & Next.js', 'Node.js & Express', 'Database design', 'Deployment'] },;
  {
    id: 4, title: 'Data Science & Analytics', description: 'Transform data into insights with Python, R, and advanced analytics.', ;
    duration: '12 weeks', level: 'Intermediate', instructor: 'Dr. Lisa Wang', price: '$1,999', ;
    features: ['Python & R', 'Statistical analysis', 'Data visualization', 'ML algorithms'] }]

export default function Training() {
  return(<Layout>
      <Head>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Professional training programs to advance your technical skills."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Training Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Professional training programs to advance your technical skills.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Available Programs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                { trainingPrograms.map((program, index) => (;
                  <motion.div;
                    key={program.id }
                    className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                    initial={{opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    viewport={{once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{ program.title }</h3>
                      <p className="text-gray-600 mb-4">{ program.description }</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2"  />
                        { program.duration }
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2"  />
                        { program.instructor }
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2"  />
                        { program.level }
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included: </h4>
                      <ul className="space-y-2">
                        { program.features.map((feature, featureIndex) => (;
                          <li key={featureIndex } className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />
                            { feature }
                          </li>))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-blue-600">{ program.price }</div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover: bg-blue-700 transition-colors duration-300 flex items-center">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2"  />
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
                Ready to Start Learning?;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of professionals who have advanced their careers with our training programs.;
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover: bg-blue-700 transition-colors duration-300">
                View All Programs
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}}