import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Users, Briefcase, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Careers: NextPage = () => {
  return (
    <Layout
      title="Careers at Zion Tech Group - Join Our Team"
      description="Join Zion Tech Group and be part of a team that's transforming businesses through innovative technology solutions. Explore career opportunities and grow with us."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Be part of a team that's transforming businesses through innovative technology solutions. 
            Grow your career with us and make a real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#open-positions">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                View Open Positions
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a culture of innovation, collaboration, and continuous learning. 
              Here's what makes us special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with talented professionals who share your passion for technology and innovation. 
                Our team-first approach fosters creativity and problem-solving.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Work with the latest technologies and frameworks. We're always exploring new 
                tools and approaches to solve complex business challenges.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy work-life balance. Flexible hours, 
                remote work options, and generous time-off policies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Continuous learning and development opportunities. We invest in your growth 
                through training, certifications, and mentorship programs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Impactful Work</h3>
              <p className="text-gray-600">
                Work on projects that make a real difference. Our solutions help businesses 
                transform and grow, creating meaningful impact in various industries.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Diverse Team</h3>
              <p className="text-gray-600">
                Join a diverse team with different backgrounds, perspectives, and experiences. 
                We believe diversity drives innovation and better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Full Stack Developer</h3>
                  <p className="text-gray-600 mb-3">
                    Join our development team to build cutting-edge web applications and scalable solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-lg font-semibold text-gray-900 mb-2">Full-time</span>
                  <span className="text-gray-600 mb-4">San Francisco, CA / Remote</span>
                  <Link href="/contact">
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                      Apply Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI/ML Engineer</h3>
                  <p className="text-gray-600 mb-3">
                    Develop innovative AI solutions and machine learning models for our clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AWS SageMaker</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-lg font-semibold text-gray-900 mb-2">Full-time</span>
                  <span className="text-gray-600 mb-4">San Francisco, CA / Remote</span>
                  <Link href="/contact">
                    <span className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                      Apply Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">DevOps Engineer</h3>
                  <p className="text-gray-600 mb-3">
                    Build and maintain our cloud infrastructure and deployment pipelines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Terraform</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-lg font-semibold text-gray-900 mb-2">Full-time</span>
                  <span className="text-gray-600 mb-4">San Francisco, CA / Remote</span>
                  <Link href="/contact">
                    <span className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                      Apply Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">UI/UX Designer</h3>
                  <p className="text-gray-600 mb-3">
                    Create beautiful and intuitive user experiences for our web and mobile applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Figma</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Sketch</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Adobe Creative Suite</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Prototyping</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-lg font-semibold text-gray-900 mb-2">Full-time</span>
                  <span className="text-gray-600 mb-4">San Francisco, CA / Remote</span>
                  <Link href="/contact">
                    <span className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                      Apply Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits to support your health, well-being, and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Health & Wellness</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Comprehensive health insurance</li>
                <li>• Dental and vision coverage</li>
                <li>• Mental health support</li>
                <li>• Gym membership reimbursement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Professional Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Conference and training budgets</li>
                <li>• Certification programs</li>
                <li>• Mentorship opportunities</li>
                <li>• Career advancement paths</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Work Environment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Flexible work hours</li>
                <li>• Remote work options</li>
                <li>• Modern office spaces</li>
                <li>• Collaborative team culture</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Financial Benefits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Competitive salaries</li>
                <li>• Performance bonuses</li>
                <li>• 401(k) matching</li>
                <li>• Stock options</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Time Off</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Generous PTO policy</li>
                <li>• Paid holidays</li>
                <li>• Sick leave</li>
                <li>• Parental leave</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Team Activities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Team building events</li>
                <li>• Happy hours</li>
                <li>• Company retreats</li>
                <li>• Volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process ensures a smooth experience for all candidates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply</h3>
              <p className="text-gray-600">
                Submit your application with resume and cover letter through our portal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Review</h3>
              <p className="text-gray-600">
                Our team reviews your application and gets back to you within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Interview</h3>
              <p className="text-gray-600">
                Multiple rounds of interviews to assess skills, culture fit, and experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Offer</h3>
              <p className="text-gray-600">
                Receive your offer and join our team to start your exciting journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Submit Your Application
              </a>
            </Link>
            <a href="mailto:careers@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;