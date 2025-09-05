import React, {_useState} from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import {_GraduationCap, _Users, _Clock, _Award, _BookOpen, _Video, _Headphones, _Code, _Brain, _Atom, _Rocket, _Shield, _Zap, _Star, _CheckCircle, _ArrowRight, _ChevronDown, _ChevronUp, _Play, _Download, _ExternalLink, _Calendar, _MapPin, _DollarSign, _TrendingUp, _Target, _Lightbulb, _Building, _Globe, _Server} from 'lucide-react';

export default function TrainingPage() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [expandedProgram, _setExpandedProgram] = useState<number | null>(null);

  const _trainingCategories = [
    { id: 'all', _name: 'All Programs', _count: 24},
    {_id: 'ai-consciousness', _name: 'AI Consciousness', _count: 8},
    {_id: 'quantum-computing', _name: 'Quantum Computing', _count: 6},
    {_id: 'autonomous-ops', _name: 'Autonomous Operations', _count: 5},
    {_id: 'enterprise-it', _name: 'Enterprise IT', _count: 5}
  ];

  const _featuredPrograms = [
    {_id: 1, _title: 'AI Consciousness Developer Certification', _description: 'Master the fundamentals of AI consciousness development and earn industry-recognized certification.', _category: 'ai-consciousness', _duration: '12 weeks', _level: 'Intermediate to Advanced', _price: '$2, _999', _rating: 4.9, _students: '1, _247', _featured: true, _icon: <Brain className="w-12 h-12" />, _highlights: [
        'Hands-on AI consciousness platform development', _'Real-world project implementation', _'Expert mentorship and support', _'Industry-recognized certification', _'Lifetime access to course materials'
      ]},
    {_id: 2, _title: 'Quantum Computing Implementation Specialist', _description: 'Learn to implement quantum computing solutions in enterprise environments with practical applications.', _category: 'quantum-computing', _duration: '16 weeks', _level: 'Advanced', _price: '$3, _499', _rating: 4.8, _students: '892', _featured: true, _icon: <Atom className="w-12 h-12" />, _highlights: [
        'Quantum algorithm development', _'Enterprise integration strategies', _'Performance optimization techniques', _'Security and compliance considerations', _'Hands-on quantum simulator access'
      ]},
    {_id: 3, _title: 'Autonomous Business Operations Master', _description: 'Transform your organization with fully autonomous business operations and AI-driven automation.', _category: 'autonomous-ops', _duration: '10 weeks', _level: 'Intermediate', _price: '$2, _499', _rating: 4.9, _students: '1, _156', _featured: true, _icon: <Rocket className="w-12 h-12" />, _highlights: [
        'Business process automation design', _'AI-powered decision making systems', _'Change management strategies', _'ROI measurement and optimization', _'Industry best practices and case studies'
      ]}
  ];

  const _allPrograms = [
    // AI Consciousness Programs
    {_id: 4, _title: 'AI Consciousness Fundamentals', _description: 'Introduction to artificial consciousness concepts and basic implementation.', _category: 'ai-consciousness', _duration: '6 weeks', _level: 'Beginner', _price: '$1, _299', _rating: 4.7, _students: '2, _341', _icon: <Brain className="w-8 h-8" />},
    {_id: 5, _title: 'Advanced AI Consciousness Architecture', _description: 'Deep dive into complex AI consciousness system design and optimization.', _category: 'ai-consciousness', _duration: '14 weeks', _level: 'Advanced', _price: '$3, _999', _rating: 4.9, _students: '567', _icon: <Brain className="w-8 h-8" />},
    {_id: 6, _title: 'AI Ethics and Governance', _description: 'Learn responsible AI development practices and governance frameworks.', _category: 'ai-consciousness', _duration: '8 weeks', _level: 'Intermediate', _price: '$1, _899', _rating: 4.8, _students: '1, _023', _icon: <Shield className="w-8 h-8" />},
    {_id: 7, _title: 'AI Consciousness API Development', _description: 'Build robust APIs for AI consciousness applications and services.', _category: 'ai-consciousness', _duration: '10 weeks', _level: 'Intermediate', _price: '$2, _199', _rating: 4.7, _students: '789', _icon: <Code className="w-8 h-8" />},

    // Quantum Computing Programs
    {_id: 8, _title: 'Quantum Computing Basics', _description: 'Foundation course covering quantum mechanics and computing principles.', _category: 'quantum-computing', _duration: '8 weeks', _level: 'Beginner', _price: '$1, _599', _rating: 4.6, _students: '1, _456', _icon: <Atom className="w-8 h-8" />},
    {_id: 9, _title: 'Quantum Machine Learning', _description: 'Combine quantum computing with machine learning for breakthrough applications.', _category: 'quantum-computing', _duration: '12 weeks', _level: 'Advanced', _price: '$3, _299', _rating: 4.8, _students: '423', _icon: <Atom className="w-8 h-8" />},
    {_id: 10, _title: 'Quantum Security and Cryptography', _description: 'Implement quantum-resistant security solutions and cryptographic protocols.', _category: 'quantum-computing', _duration: '10 weeks', _level: 'Intermediate', _price: '$2, _399', _rating: 4.7, _students: '678', _icon: <Shield className="w-8 h-8" />},

    // Autonomous Operations Programs
    {_id: 11, _title: 'Business Process Automation', _description: 'Learn to automate complex business processes with AI and robotics.', _category: 'autonomous-ops', _duration: '8 weeks', _level: 'Intermediate', _price: '$1, _999', _rating: 4.8, _students: '945', _icon: <Zap className="w-8 h-8" />},
    {_id: 12, _title: 'Autonomous Decision Systems', _description: 'Design and implement AI-powered autonomous decision-making systems.', _category: 'autonomous-ops', _duration: '12 weeks', _level: 'Advanced', _price: '$2, _999', _rating: 4.9, _students: '567', _icon: <Target className="w-8 h-8" />},

    // Enterprise IT Programs
    {_id: 13, _title: 'Enterprise AI Integration', _description: 'Integrate AI solutions into existing enterprise infrastructure and systems.', _category: 'enterprise-it', _duration: '10 weeks', _level: 'Intermediate', _price: '$2, _299', _rating: 4.7, _students: '823', _icon: <Building className="w-8 h-8" />},
    {_id: 14, _title: 'Cloud-Native AI Development', _description: 'Build and deploy AI applications using cloud-native technologies and practices.', _category: 'enterprise-it', _duration: '8 weeks', _level: 'Intermediate', _price: '$1, _899', _rating: 4.6, _students: '1, _134', _icon: <Server className="w-8 h-8" />},
    {_id: 15, _title: 'DevOps for AI Systems', _description: 'Implement DevOps practices specifically for AI and machine learning systems.', _category: 'enterprise-it', _duration: '6 weeks', _level: 'Intermediate', _price: '$1, _599', _rating: 4.8, _students: '756', _icon: <Zap className="w-8 h-8" />}
  ];

  const _filteredPrograms = allPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const _getCategoryIcon = (_category: string) => {_const _icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />, _'quantum-computing': <Atom className="w-6 h-6" />, _'autonomous-ops': <Rocket className="w-6 h-6" />, _'enterprise-it': <Building className="w-6 h-6" />};
    return icons[category as keyof typeof icons] || <GraduationCap className="w-6 h-6" />;
  };

  const _getCategoryColor = (_category: string) => {_const _colors = {
      'ai-consciousness': 'cyan', _'quantum-computing': 'purple', _'autonomous-ops': 'green', _'enterprise-it': 'blue'};
    return colors[category as keyof typeof colors] || 'gray';
  };

  const _toggleProgram = (_id: number) => {_setExpandedProgram(expandedProgram === id ? null : id);};

  return (_<Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, _quantum computing, _and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
      
      <div className="min-h-screen">
        {_/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Training & Certification
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the future of technology with our comprehensive training programs in AI consciousness, _quantum computing, _and autonomous operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Expert-Led Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Industry Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Category Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {_trainingCategories.map((category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                  {_category.name} ({_category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {_/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Programs
              </h2>
              <p className="text-xl text-gray-400">
                Our most popular and comprehensive training programs
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {_featuredPrograms.map(_(program, _index) => (
                <motion.div
                  key={program.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {_program.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={_`px-3 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${_getCategoryColor(program.category)}-400 rounded-full text-sm border border-${_getCategoryColor(program.category)}-500/30`}>
                        {_program.category.replace('-', _' ')}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {_program.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {_program.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {_program.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{_program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{_program.students} students</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{_program.rating}</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{_program.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {_program.highlights.slice(0, _3).map(_(highlight, _highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{_highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="#"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* All Programs */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Training Programs
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive collection of training programs across all technology domains
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {_filteredPrograms.map(_(program, _index) => (
                <motion.div
                  key={program.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {_program.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={_`px-2 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${_getCategoryColor(program.category)}-400 rounded text-xs border border-${_getCategoryColor(program.category)}-500/30`}>
                            {_program.category.replace('-', _' ')}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {_program.level}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {_program.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {_program.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{_program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{_program.students} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{_program.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {_program.price}
                        </div>
                        <button
                          onClick={_() => toggleProgram(program.id)}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {_expandedProgram === program.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {_expandedProgram === program.id && (
                      <motion.div
                        initial={{ opacity: 0, _height: 0}}
                        animate={_{ opacity: 1, _height: 'auto'}}
                        exit={_{ opacity: 0, _height: 0}}
                        transition={_{ duration: 0.3}}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">What You'll Learn</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Core concepts and principles</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Hands-on practical exercises</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Real-world project implementation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Industry best practices</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-3">Program Details</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div className="flex justify-between">
                                <span>Duration:</span>
                                <span className="text-white">{_program.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Level:</span>
                                <span className="text-white">{_program.level}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Format:</span>
                                <span className="text-white">Online + Live Sessions</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Support:</span>
                                <span className="text-white">24/7 Community + Mentors</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex gap-3">
                          <a
                            href="#"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Enroll Now
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                          >
                            Learn More
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Learning Paths */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-400">
                Structured learning journeys to master complete technology domains
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {_[
                {
                  title: 'AI Consciousness Expert', _description: 'Complete path from fundamentals to advanced AI consciousness development.', _duration: '6-12 months', _courses: 8, _level: 'Beginner to Expert', _icon: <Brain className="w-12 h-12" />, _color: 'cyan', _path: [
                    'AI Consciousness Fundamentals', _'Consciousness Architecture Design', _'Advanced Implementation', _'Ethics and Governance', _'API Development', _'System Optimization', _'Real-world Applications', _'Expert Certification'
                  ]},
                {_title: 'Quantum Computing Specialist', _description: 'Master quantum computing from basic principles to enterprise implementation.', _duration: '8-16 months', _courses: 6, _level: 'Intermediate to Expert', _icon: <Atom className="w-12 h-12" />, _color: 'purple', _path: [
                    'Quantum Computing Basics', _'Quantum Algorithms', _'Machine Learning Integration', _'Security Implementation', _'Enterprise Solutions', _'Advanced Applications'
                  ]},
                {_title: 'Autonomous Operations Leader', _description: 'Lead the transformation to fully autonomous business operations.', _duration: '6-10 months', _courses: 5, _level: 'Intermediate to Advanced', _icon: <Rocket className="w-12 h-12" />, _color: 'green', _path: [
                    'Business Process Analysis', _'Automation Strategy', _'System Implementation', _'Change Management', _'Performance Optimization'
                  ]}
              ].map(_(path, _index) => (_<motion.div
                  key={_path.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={_`w-20 h-20 bg-${path.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {_path.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {_path.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {_path.description}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{_path.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{_path.courses} courses</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {_path.path.map((step, _stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">
                          {_stepIndex + 1}
                        </div>
                        <span className="text-gray-300">{_step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className={_`w-full inline-flex items-center justify-center gap-2 bg-${path.color}-500/20 text-${_path.color}-400 font-bold py-3 px-6 rounded-xl border border-${_path.color}-500/30 hover:bg-${_path.color}-500 hover:text-white transition-all duration-300`}
                  >
                    Start Learning Path
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Personalized Guidance
                </a>
                <a
                  href="/resources"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Free Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Training;
