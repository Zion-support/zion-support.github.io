class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import MainLayout from '../components/layout/MainLayout';
const jobOpenings = [{
    "id": 1,
    "title": "Senior AI/ML Engineer"
    "department": "AI Services"
    "location": "Remote"
    "type": "Full-time"
    "experience": "5+ years"
    "description": "Lead the development of cutting-edge AI solutions and machine learning models for our clients."
    "requirements": [
      "Master's degree in Computer Science or related field"
      "5+ years experience in AI/ML development"
      "Proficiency in Python, TensorFlow, PyTorch"
      "Experience with cloud platforms (AWS, Azure, GCP)"
import Layout from '../components/Layout';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    "id": 2,
    "title": "Full-Stack Developer"
    "department": "Micro SaaS"
    "location": "New York, NY"
    "type": "Full-time"
    "experience": "3+ years"
    "description": "Build scalable web applications and microservices for our SaaS solutions."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "3+ years experience in full-stack development"
      "Proficiency in React, Node.js, TypeScript"
      "Experience with databases (PostgreSQL, MongoDB)"
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",

    "id": 4,
    "title": "Cybersecurity Specialist"
    "department": "Security"
    "location": "San Francisco, CA"
    "type": "Full-time"
    "experience": "4+ years"
    "description": "Protect our clients' digital assets and implement security best practices."
    "requirements": ["Bachelor's degree in Cybersecurity or related field"
      "4+ years experience in cybersecurity"
      "Certifications (CISSP, CISM, CEH) preferred"
      "Experience with security tools and frameworks"
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets and implement security best practices.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH) preferred",
      "Experience with security tools and frameworks",

    "id": 6,
    "title": "UX/UI Designer"
    "department": "Design"
    "location": "Remote"
    "type": "Full-time"
    "experience": "2+ years"
    "description": "Create intuitive and beautiful user experiences for our digital products."
    "requirements": ["Bachelor's degree in Design or related field"
      "2+ years experience in UX/UI design"
      "Proficiency in Figma, Sketch, Adobe Creative Suite"
      "Experience with user research and testing"
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: [
      "Bachelor's degree in Design or related field",
      "2+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",

    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>
    <div className="min-h-screen bg-gray-50">;
      <Head>;
        <title>Join Our Team - Zion Tech Group</title>;
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />;
      </Head>;
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>
      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
    <Layout 
      title="Careers - Zion Tech Group"

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI engineer, developer, cloud architect"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,


        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">

<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
            <motion.div,
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Join Our Team;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8">;
                Be part of a team that's shaping the future of technology and helping businesses transform digitally;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="#openings" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  View Open Positions;
                </Link>;
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  Get In Touch;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,
    className="text-center mb-16"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.8 }}
              viewport={{ "once": true }}
            <motion && motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,

<<<<<<< HEAD
            <motion.div,
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,
=======    className="text-center mb-16"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8 }}
              viewport={{ "once": true }}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {job && job.title}
                  </h3>;
                  <p className="text-gray-600 mb-4">;
                    {job && job.department} • {job && job.location} • {job && job.type}
                  </p>;
                  <p className="text-gray-700 mb-4">;
                    {job && job.description}
                  </p>;
                  <div className="mb-4">;
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>;
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">;
                      {job && job.requirements.map((req, reqIndex) => (;
                        <li key={reqIndex}>{req}</li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="mb-4">;
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>;
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">;
                      {job && job.benefits.map((benefit, benefitIndex) => (;
                        <li key={benefitIndex}>{benefit}</li>;
                      ))}
                    </ul>;
                  </div>;
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">;
                    Apply Now;
                  </button>;
                  <div className="flex items-center">;
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />;
                    <span className="text-gray-900 font-medium">{value}</span>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">;
        <div className="container mx-auto px-4">;
          <div className="max-w-6xl mx-auto">;
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">;
              Why Work With Us;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={index}
        </section>;
        {/* Job Openings Section */}
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div,
=======
        <section id="openings" className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore current job openings and find the perfect role for your skills and career goals
              </p>
            </motion.div>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <motion.div,
    key={job.id}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Open Positions;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                Explore current job openings and find the perfect role for your skills and career goals;
              </p>;
            </motion && motion.div>;
            <div className="space-y-8">;
              {jobOpenings && jobOpenings.map((job, index) => (;
                <motion&& motion.div,
    key={job && job.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center">;
                  <benefit && benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit && benefit.description}
                  </p>;
                >;
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">;
                        {job && job.title}
                      </h3>;
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">;
                        <div className="flex items-center">;
                          <MapPin className="w-4 h-4 mr-1" />;
                          {job && job.location}
                        </div>;
                        <div className="flex items-center">;
                          <Clock className="w-4 h-4 mr-1" />;
                          {job && job.type}
                        </div>;
                        <div className="flex items-center">;
                          <Users className="w-4 h-4 mr-1" />;
                          {job && job.experience}
                        </div>;
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">;
                          {job && job.department}
                        </span>;
                      </div>;
                    </div>;
                    <Link,
    href={`/talent/${job && job.id}`}
                      className="mt-4 lg:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center">;
                      Apply Now;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                  <p className="text-gray-600 mb-6">;
                    {job && job.description}
                  </p>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div>;
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>;
                      <ul className="space-y-1">;
                        {job && job.requirements.slice(0, 3).map((req, reqIndex) => (;
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">;
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0 && 0.5 flex-shrink-0" />;
                            {req}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
                    <div>;
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>;
                      <ul className="space-y-1">;
                        {job && job.benefits.map((benefit, benefitIndex) => (;
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">;
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0 && 0.5 flex-shrink-0" />;
                            {benefit}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl font-bold mb-4">;
              Don't See Your Role?;
            </h2>;
            <p className="text-xl mb-8">;
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.;
            </p>;
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
              Send Resume;
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div,

<<<<<<< HEAD
            <motion.div,
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div,
=======    initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.8 }}
              viewport={{ "once": true }}
            <motion && motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Send Your Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md: text-4xl font-bold mb-6">;
                Don't See the Right Role?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.;
              </p>;
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                Send Your Resume;
              </Link>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  ),;
}