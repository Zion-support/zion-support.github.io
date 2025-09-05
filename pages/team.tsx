import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  MapPin, 
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in technology and business strategy.',
    image: '/api/placeholder/300/300',
    location: 'San Francisco, CA',
    email: 'john@ziontechgroup.com',
    linkedin: 'https://linkedin.com/in/johnsmith',
    github: 'https://github.com/johnsmith'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Technical expert specializing in AI, cloud architecture, and scalable systems.',
    image: '/api/placeholder/300/300',
    location: 'New York, NY',
    email: 'sarah@ziontechgroup.com',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson'
  },
  {
    name: 'Mike Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
    image: '/api/placeholder/300/300',
    location: 'Seattle, WA',
    email: 'mike@ziontechgroup.com',
    linkedin: 'https://linkedin.com/in/mikechen',
    github: 'https://github.com/mikechen'
  },
  {
    name: 'Lisa Wang',
    role: 'Data Scientist',
    bio: 'Machine learning expert with a passion for turning data into actionable insights.',
    image: '/api/placeholder/300/300',
    location: 'Austin, TX',
    email: 'lisa@ziontechgroup.com',
    linkedin: 'https://linkedin.com/in/lisawang',
    github: 'https://github.com/lisawang'
  }
];

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative solutions." />
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
                Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Meet the talented team behind Zion Tech Group's innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Leadership Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {member.email}
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <Github className="w-5 h-5" />
                      </a>
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
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for talented individuals to join our growing team.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}