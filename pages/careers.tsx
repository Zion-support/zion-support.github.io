import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Award, Globe } from 'lucide-react';

const Careers: NextPage = () => {
  const jobOpenings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced Full-Stack Developer to join our engineering team and help build scalable web applications.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      id: 'senior-fullstack-dev'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data Science',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $200k',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Docker'],
      id: 'ai-ml-engineer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Help us build and maintain robust cloud infrastructure and CI/CD pipelines for our technology platforms.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      id: 'devops-engineer'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Create beautiful and intuitive user experiences for our technology products and platforms.',
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      id: 'ux-ui-designer'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $170k',
      description: 'Lead product strategy and development for our technology platforms and solutions.',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research', 'Roadmapping'],
      id: 'product-manager'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'London, UK',
      type: 'Full-time',
      experience: '4+ years',
      salary: '£80k - £120k',
      description: 'Help secure our platforms and protect our clients from emerging cybersecurity threats.',
      skills: ['Penetration Testing', 'Security Auditing', 'Compliance', 'Incident Response', 'SIEM'],
      id: 'cybersecurity-specialist'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.',
      icon: Heart
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance support.',
      icon: Clock
    },
    {
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and training programs.',
      icon: Award
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities, social events, and company retreats.',
      icon: Users
    },
    {
      title: 'Technology',
      description: 'Latest tools and equipment to help you do your best work.',
      icon: Zap
    },
    {
      title: 'Global Team',
      description: 'Work with talented professionals from around the world.',
      icon: Globe
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve great results.'
    },
    {
      title: 'Excellence',
      description: 'We maintain high standards in everything we do, from code quality to client service.'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and provide opportunities for continuous learning and development.'
    }
  ];

  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of passionate technologists and help shape the future of technology. Explore career opportunities at Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Help us build the future of technology. Join a team of passionate 
              innovators working on cutting-edge solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a culture where innovation thrives, collaboration is valued, 
              and every team member can make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and perks that 
              support your health, growth, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your 
              skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we foster a culture of innovation, collaboration, 
                and continuous learning. Our team members are passionate about technology 
                and committed to delivering exceptional results for our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in creating an inclusive environment where diverse perspectives 
                are valued and everyone has the opportunity to grow and succeed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
                  <div className="text-gray-600">Glassdoor Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Team Says</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    "Working at Zion Tech Group has been an incredible experience. 
                    The team is talented, the projects are challenging, and the 
                    culture is supportive and inclusive."
                  </p>
                  <div className="font-semibold text-gray-900">- Sarah Johnson, Senior Developer</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    "The opportunities for growth and learning are endless. 
                    I've been able to work on cutting-edge technologies and 
                    develop my skills in ways I never imagined."
                  </p>
                  <div className="font-semibold text-gray-900">- Michael Chen, AI Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If you're passionate about technology and want to work on innovative 
            solutions that make a difference, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="mailto:careers@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Send Resume
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Careers;