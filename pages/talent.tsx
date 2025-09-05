import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Briefcase,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "AI Services",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI and machine learning solutions."
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Build beautiful and responsive user interfaces using React and Next.js."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage and scale our cloud infrastructure and deployment pipelines."
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive product strategy and work with cross-functional teams to deliver great products."
  },
  {
    id: 5,
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create intuitive and engaging user experiences for our products."
  },
  {
    id: 6,
    title: "Sales Engineer",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "4+ years",
    description: "Help customers understand and implement our technology solutions."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Comprehensive health insurance",
  "Flexible work arrangements",
  "Professional development budget",
  "401(k) with company matching",
  "Unlimited PTO",
  "Home office stipend",
  "Team building events"
];

export default function Talent() {
  return (
    <Layout>
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
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
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our team of talented professionals and help us build the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Open Positions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Work With Us?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h3>
                  <p className="text-gray-600 mb-4">
                    We believe in creating an inclusive and collaborative environment where everyone can thrive. 
                    Our team is made up of passionate individuals who are committed to making a difference.
                  </p>
                  <p className="text-gray-600">
                    We value diversity, innovation, and continuous learning. Join us and be part of something amazing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Send Your Resume
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}