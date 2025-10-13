import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const AIEducationPlatformPage: React.FC = () => {
  const educationServices = [
    {
      title: 'AI Personalized Learning Platform',
      description: 'Adaptive learning system that personalizes education for each student based on their learning style and progress.',
      icon: '🎓',
      price: '$299/month',
      features: [
        'Adaptive Learning Paths',
        'Personalized Content',
        'Progress Tracking',
        'Learning Style Analysis',
        'Difficulty Adjustment',
        'Performance Analytics',
        'Gamification',
        'Multi-language Support'
      ],
      benefits: [
        'Improve learning outcomes by 40%',
        'Reduce learning time by 30%',
        'Increase engagement by 60%',
        'Personalize education for each student',
        'Enable self-paced learning'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Personalized Learning',
      technologies: ['Machine Learning', 'Adaptive Algorithms', 'Learning Analytics', 'Content Management', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Tutoring Assistant',
      description: 'Intelligent tutoring system that provides 24/7 personalized help and guidance to students across all subjects.',
      icon: '🤖',
      price: '$199/month',
      features: [
        '24/7 Tutoring Support',
        'Subject Expertise',
        'Step-by-step Solutions',
        'Practice Problems',
        'Progress Monitoring',
        'Parent Notifications',
        'Multi-language Support',
        'Voice Interaction'
      ],
      benefits: [
        'Provide 24/7 tutoring support',
        'Improve student performance by 35%',
        'Reduce tutoring costs by 70%',
        'Enable personalized help',
        'Support all subjects'
      ],
      marketPrice: '$500-1,800/month',
      category: 'AI Tutoring',
      technologies: ['NLP', 'Machine Learning', 'Knowledge Graphs', 'Voice Recognition', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Content Generation for Education',
      description: 'Automated creation of educational content including lessons, quizzes, and assessments tailored to curriculum standards.',
      icon: '📚',
      price: '$399/month',
      features: [
        'Lesson Plan Generation',
        'Quiz Creation',
        'Assessment Development',
        'Curriculum Alignment',
        'Content Personalization',
        'Multimedia Integration',
        'Standards Compliance',
        'Quality Assurance'
      ],
      benefits: [
        'Reduce content creation time by 80%',
        'Ensure curriculum compliance',
        'Generate unlimited content',
        'Maintain consistent quality',
        'Support multiple subjects'
      ],
      marketPrice: '$1,200-4,000/month',
      category: 'Content Generation',
      technologies: ['NLP', 'Content Generation', 'Curriculum APIs', 'Multimedia Tools', 'Quality Assurance'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Student Assessment Platform',
      description: 'Intelligent assessment system that provides real-time feedback and identifies learning gaps automatically.',
      icon: '📊',
      price: '$249/month',
      features: [
        'Automated Grading',
        'Real-time Feedback',
        'Learning Gap Analysis',
        'Performance Analytics',
        'Adaptive Testing',
        'Plagiarism Detection',
        'Rubric Generation',
        'Progress Reports'
      ],
      benefits: [
        'Reduce grading time by 90%',
        'Provide instant feedback',
        'Identify learning gaps',
        'Improve assessment accuracy',
        'Enable data-driven teaching'
      ],
      marketPrice: '$600-2,000/month',
      category: 'Assessment',
      technologies: ['Machine Learning', 'NLP', 'Automated Grading', 'Analytics', 'Plagiarism Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Language Learning Platform',
      description: 'Advanced language learning system with speech recognition, pronunciation analysis, and cultural context.',
      icon: '🗣️',
      price: '$179/month',
      features: [
        'Speech Recognition',
        'Pronunciation Analysis',
        'Conversation Practice',
        'Cultural Context',
        'Progress Tracking',
        'Adaptive Learning',
        'Mobile Integration',
        'Multi-language Support'
      ],
      benefits: [
        'Improve pronunciation by 50%',
        'Accelerate language learning',
        'Provide cultural context',
        'Enable conversation practice',
        'Support 50+ languages'
      ],
      marketPrice: '$400-1,500/month',
      category: 'Language Learning',
      technologies: ['Speech Recognition', 'NLP', 'Cultural AI', 'Mobile Apps', 'Voice Synthesis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Career Guidance System',
      description: 'Intelligent career guidance platform that matches students with career paths based on skills and interests.',
      icon: '🎯',
      price: '$149/month',
      features: [
        'Career Matching',
        'Skill Assessment',
        'Interest Analysis',
        'Pathway Recommendations',
        'Industry Insights',
        'Mentor Matching',
        'Progress Tracking',
        'Goal Setting'
      ],
      benefits: [
        'Improve career decision-making',
        'Match students with ideal careers',
        'Provide industry insights',
        'Enable goal-oriented learning',
        'Connect with mentors'
      ],
      marketPrice: '$300-1,200/month',
      category: 'Career Guidance',
      technologies: ['Machine Learning', 'Career APIs', 'Skill Assessment', 'Matching Algorithms', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Special Needs Education',
      description: 'Specialized AI platform for students with learning disabilities, providing personalized support and accommodations.',
      icon: '♿',
      price: '$499/month',
      features: [
        'Accessibility Features',
        'Personalized Accommodations',
        'Progress Monitoring',
        'Parent Communication',
        'Therapist Integration',
        'Adaptive Tools',
        'Multi-sensory Learning',
        'IEP Support'
      ],
      benefits: [
        'Improve accessibility',
        'Personalize accommodations',
        'Support diverse learning needs',
        'Enable inclusive education',
        'Track progress effectively'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Special Education',
      technologies: ['Accessibility AI', 'Adaptive Learning', 'Multi-sensory Tools', 'Progress Tracking', 'Therapy Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Teacher Assistant Platform',
      description: 'Comprehensive AI assistant for teachers that automates administrative tasks and provides teaching insights.',
      icon: '👩‍🏫',
      price: '$199/month',
      features: [
        'Administrative Automation',
        'Teaching Insights',
        'Student Progress Tracking',
        'Parent Communication',
        'Lesson Planning',
        'Resource Recommendations',
        'Performance Analytics',
        'Professional Development'
      ],
      benefits: [
        'Reduce administrative workload by 60%',
        'Improve teaching effectiveness',
        'Enhance student engagement',
        'Streamline communication',
        'Enable data-driven teaching'
      ],
      marketPrice: '$500-2,000/month',
      category: 'Teacher Tools',
      technologies: ['NLP', 'Administrative Automation', 'Analytics', 'Communication Tools', 'Resource Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Education Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI education solutions including personalized learning, tutoring, and assessment platforms. Starting at $149/month." />
        <meta name="keywords" content="ai education, personalized learning, ai tutoring, assessment platform, language learning, career guidance" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Education Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform education with AI-powered solutions that personalize learning, enhance teaching, and improve student outcomes.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Education Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$149</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Learning Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Tutoring</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Education AI Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Education with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI education solutions today and revolutionize learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEducationPlatformPage;