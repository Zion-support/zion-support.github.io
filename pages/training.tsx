


import React from 'react';

export default function Training() {
  return (
    <Layout
      title="Training & Education - Zion Tech Group"
      description="Professional training and education services for technology professionals."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training & Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional training and education services for technology professionals.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>

import React from 'react';
import Layout from '../components/Layout';

export default function Training() {


=======
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, Clock, Award, BookOpen, Video, 
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingCategories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'AI Consciousness Developer Certification',
      description: 'Master the fundamentals of AI consciousness development and earn industry-recognized certification.',
      category: 'ai-consciousness',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '1,247',
    featured: true,
      icon: <Brain className="w-12 h-12" />,
      highlights: [
        'Hands-on AI consciousness platform developmentReal-world project implementationExpert mentorship and supportIndustry-recognized certificationLifetime access to course materials'
      ]
    };
    {
      id: 2,
      title: 'Quantum Computing Implementation Specialist',
      description: 'Learn to implement quantum computing solutions in enterprise environments with practical applications.',
      category: 'quantum-computing',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$3,499',
    rating: 4.8,
      students: '892',
      featured: true,
      icon: <Atom className="w-12 h-12" />,
      highlights: [
        'Quantum algorithm developmentEnterprise integration strategiesPerformance optimization techniquesSecurity and compliance considerationsHands-on quantum simulator access'
      ]
    };
    {
      id: 3,
      title: 'Autonomous Business Operations Master',
      description: 'Transform your organization with fully autonomous business operations and AI-driven automation.',
      category: 'autonomous-ops',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
    rating: 4.9,
      students: '1,156',
    featured: true,
      icon: <Rocket className="w-12 h-12" />,
      highlights: [
        'Business process automation designAI-powered decision making systemsChange management strategiesROI measurement and optimizationIndustry best practices and case studies'
      ]
    }
  ];

  const allPrograms = [
    // AI Consciousness Programs
    {
      id: 4,
      title: 'AI Consciousness Fundamentals',
      description: 'Introduction to artificial consciousness concepts and basic implementation.',
      category: 'ai-consciousness',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$1,299',
    rating: 4.7,
      students: '2,341',
    icon: <Brain className="w-8 h-8" />
    };
    {
      id: 5,
      title: 'Advanced AI Consciousness Architecture',
      description: 'Deep dive into complex AI consciousness system design and optimization.',
      category: 'ai-consciousness',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$3,999',
    rating: 4.9,
      students: '567',
      icon: <Brain className="w-8 h-8" />
    };
    {
      id: 6,
      title: 'AI Ethics and Governance',
      description: 'Learn responsible AI development practices and governance frameworks.',
      category: 'ai-consciousness',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
    rating: 4.8,
      students: '1,023',
    icon: <Shield className="w-8 h-8" />
    };
    {
      id: 7,
      title: 'AI Consciousness API Development',
      description: 'Build robust APIs for AI consciousness applications and services.',
      category: 'ai-consciousness',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,199',
    rating: 4.7,
      students: '789',
      icon: <Code className="w-8 h-8" />
    };

    // Quantum Computing Programs
    {
      id: 8,
      title: 'Quantum Computing Basics',
      description: 'Foundation course covering quantum mechanics and computing principles.',
      category: 'quantum-computing',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$1,599',
    rating: 4.6,
      students: '1,456',
    icon: <Atom className="w-8 h-8" />
    };
    {
      id: 9,
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with machine learning for breakthrough applications.',
      category: 'quantum-computing',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$3,299',
    rating: 4.8,
      students: '423',
      icon: <Atom className="w-8 h-8" />
    };
    {
      id: 10,
      title: 'Quantum Security and Cryptography',
      description: 'Implement quantum-resistant security solutions and cryptographic protocols.',
      category: 'quantum-computing',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,399',
    rating: 4.7,
      students: '678',
      icon: <Shield className="w-8 h-8" />
    };

    // Autonomous Operations Programs
    {
      id: 11,
      title: 'Business Process Automation',
      description: 'Learn to automate complex business processes with AI and robotics.',
      category: 'autonomous-ops',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,999',
    rating: 4.8,
      students: '945',
      icon: <Zap className="w-8 h-8" />
    };
    {
      id: 12,
      title: 'Autonomous Decision Systems',
      description: 'Design and implement AI-powered autonomous decision-making systems.',
      category: 'autonomous-ops',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '567',
      icon: <Target className="w-8 h-8" />
    };

    // Enterprise IT Programs
    {
      id: 13,
      title: 'Enterprise AI Integration',
      description: 'Integrate AI solutions into existing enterprise infrastructure and systems.',
      category: 'enterprise-it',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,299',
    rating: 4.7,
      students: '823',
      icon: <Building className="w-8 h-8" />
    };
    {
      id: 14,
      title: 'Cloud-Native AI Development',
      description: 'Build and deploy AI applications using cloud-native technologies and practices.',
      category: 'enterprise-it',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
    rating: 4.6,
      students: '1,134',
    icon: <Server className="w-8 h-8" />
    };
    {
      id: 15,
      title: 'DevOps for AI Systems',
      description: 'Implement DevOps practices specifically for AI and machine learning systems.',
      category: 'enterprise-it',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$1,599',
    rating: 4.8,
      students: '756',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const filteredPrograms = allPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />;
      'quantum-computing': <Atom className="w-6 h-6" />;
      'autonomous-ops': <Rocket className="w-6 h-6" />;
      'enterprise-it': <Building className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <GraduationCap className="w-6 h-6" />
  };

  const getCategoryColor = (category: string) => {
    const colors = {



      'ai-consciousness': 'cyanquantum-computing': 'purpleautonomous-ops': 'greenenterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray'
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id)

  },
  return (

    <Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Training & Certification
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the future of technology with our comprehensive training programs in AI consciousness, quantum computing, and autonomous operations.
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
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>;
  );
}
};
  )
};

      </div>
    </Layout>


}

  )

=======
=======

=======



  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" > Training & Certification </h1> </p> <div className="flex flex-wrap justify-center gap-4 text-gray-400" > <div className="flex items-center gap-2" > <GraduationCap className="w-5 h-5" /> <span>Expert-Led Training</span> </div> <div className="flex items-center gap-2" > <Award className="w-5 h-5" /> <span>Industry Certifications</span> </div> <div className="flex items-center gap-2" > <Users className="w-5 h-5" /> <span>Global Community</span> </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Featured Programs </h2> <p className="text-xl text-gray-400" > Our most popular and comprehensive training programs </p> </motion.div> </div>) ) 
}</div> <a href="#" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > All Training Programs </h2> <p className="text-xl text-gray-400" > Comprehensive collection of training programs across all technology domains </p> </motion.div> </div> </div> </div>) : (<ChevronDown className="w-5 h-5" />) 
}</button> </div> </div> {
  expandedProgram === program.id && (<motion.div > <div className="grid md:grid-cols-2 gap-6" > <div> <h4 className="text-white font-semibold mb-3" >What You'll Learn</h4> <ul className="space-y-2 text-sm text-gray-300" > <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Core concepts and principles</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Hands-on practical exercises</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Real-world project implementation</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Industry best practices</span> </li> </ul> </div> <div> <h4 className="text-white font-semibold mb-3" >Program Details</h4> <div className="space-y-2 text-sm text-gray-300" > <div className="flex justify-between" > <span>Duration:</span> </div> <div className="flex justify-between" > <span>Level:</span> </div> <div className="flex justify-between" > <span>Format:</span> <span className="text-white" >Online + Live Sessions</span> </div> <div className="flex justify-between" > <span>Support:</span> <span className="text-white" >24/7 Community + Mentors</span> </div> </div> </div> </div> <div className="mt-6 flex gap-3" > <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Learn More </Link> </div> </motion.div>) 
}</div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Learning Paths </h2> <p className="text-xl text-gray-400" > Structured learning journeys to master complete technology domains </p> </motion.div> </div> </div> </div> </div>) ) 
}</div> <a > Start Learning Path <ArrowRight className="w-4 h-4" /> </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Career? </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications. </p> <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Get Personalized Guidance </Link> <a href="/resources" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Explore Free Resources </Link> </div> </motion.div> </div> </section> </div> </Layout>) 
};
}
origin/main
  )
}
export default Training;
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
};export default Training;
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
};export default Training;

origin/main
  )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};

export default Training;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

}  )
ursor/fix-lint-push-and-merge-to-main-ae4e
};

export default Training;
};export default Training;
},
export default Training,
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Career?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105";
                >;
                  Get Personalized Guidance;
                </a>;
                <a;
                  href="/resources";
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300";
                >;
                  Explore Free Resources;
                </a>;
              </div>;
            </motion.div>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">Training page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
}
  );
}
;
export default Training;
}export default Training;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
