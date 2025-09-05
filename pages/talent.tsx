import { motion } from 'framer-motion';
import Head from 'next/head';
import { Briefcase, MapPin, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "AI Services",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years of experience in AI/ML',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      '401(k) with company matching'
    ]
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud solutions for enterprise clients.",
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years of cloud architecture experience',
      'Certifications in AWS, Azure, or GCP',
      'Experience with DevOps and CI/CD',
      'Strong leadership and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      '401(k) with company matching'
    ]
  },
  {
    id: 3,
    title: "Product Manager - Micro SaaS",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive product strategy and development for our micro SaaS solutions.",
    requirements: [
      'Bachelor\'s degree in Business or related field',
      '4+ years of product management experience',
      'Experience with SaaS products',
      'Strong analytical and communication skills',
      'Experience with agile development'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      '401(k) with company matching'
    ]
  }
];

export default function Talent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our innovative team and help shape the future of technology" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of our innovative team and help shape the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  {job.experience}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{job.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}