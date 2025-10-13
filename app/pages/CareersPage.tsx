import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of AI and IT solutions. 
              We're looking for passionate professionals to join our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Engineer</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Develop and implement machine learning models and AI solutions for our clients.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 3+ years ML/AI experience</li>
                <li>• Python, TensorFlow, PyTorch</li>
                <li>• Cloud platforms (AWS/Azure/GCP)</li>
                <li>• Strong problem-solving skills</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Solutions Architect</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Design and implement cloud infrastructure solutions for enterprise clients.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 5+ years cloud experience</li>
                <li>• AWS/Azure/GCP certifications</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps practices</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Full Stack Developer</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Build scalable web applications and APIs using modern technologies.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 4+ years full-stack experience</li>
                <li>• React, Node.js, TypeScript</li>
                <li>• Database design (SQL/NoSQL)</li>
                <li>• API development</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cybersecurity Specialist</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Protect our clients' systems and data with advanced security solutions.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 3+ years security experience</li>
                <li>• Security certifications (CISSP, CISM)</li>
                <li>• Penetration testing</li>
                <li>• Incident response</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Data Scientist</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Extract insights from data and build predictive models for business intelligence.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 3+ years data science experience</li>
                <li>• Python, R, SQL</li>
                <li>• Statistical modeling</li>
                <li>• Data visualization</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">DevOps Engineer</h3>
              <p className="text-gray-300 mb-4">Full-time • Remote/Hybrid</p>
              <p className="text-gray-300 mb-6">
                Streamline development and deployment processes with automation and CI/CD.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• 3+ years DevOps experience</li>
                <li>• Docker, Kubernetes</li>
                <li>• CI/CD pipelines</li>
                <li>• Infrastructure automation</li>
              </ul>
              <a href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                Apply Now
              </a>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge AI and IT projects that shape the future.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Flexibility</h3>
                <p className="text-gray-300">Remote work options and flexible schedules for work-life balance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-300">Continuous learning opportunities and career development programs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <p className="text-gray-300">Collaborate with talented professionals from around the world.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Send Resume
              </a>
              <a href="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}