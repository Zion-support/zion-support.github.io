<<<<<<< HEAD

import React, { useState } from 'react';
import { motion } from 'framer-motion';


export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1);

  const onboardingSteps = [
    {
      step: 1
      title: 'Choose Your Path'
      description: 'Select the technology area that best fits your needs'
      icon: <Target className='w-8 h-8 text-cyan-400' />
    },    {
      step: 2
      title: 'Define Requirements'
      description: 'Tell us about your project goals and constraints'
      icon: <FileText className='w-8 h-8 text-purple-400' />
    },    {
      step: 3
      title: 'Get Your Proposal'
      description: 'Receive a detailed proposal and implementation plan'
      icon: <Star className='w-8 h-8 text-yellow-400' />
    },    {
      step: 4
      title: 'Begin Implementation'
      description: 'Start your journey with our expert team'
      icon: <Rocket className='w-8 h-8 text-green-400' />
    },  ];
  const technologyPaths = [
    {
      id: 'ai-consciousness'
      name: 'AI Consciousness & Emotional Intelligence'
      description:
        'Develop AI systems with genuine self-awareness and emotional intelligence'
      icon: <Brain className='w-8 h-8 text-cyan-400' />
      features: [
        'AI consciousness development'
        'Emotional intelligence training'
        'Self-aware neural networks'
        'Autonomous decision making'
      ]
      useCases: [
        'Customer Success'
        'HR Analytics'
        'Mental Health'
        'Education'
      ]
      timeline: '6-12 months'
      complexity: 'Advanced'
    }
    {
      id: 'quantum-computing'
      name: 'Quantum Computing Solutions'
      description:
        'Leverage quantum computing for cryptography, optimization, and simulation'
      icon: <Atom className='w-8 h-8 text-purple-400' />
      features: [
        'Quantum algorithms'
        'Post-quantum cryptography'
        'Quantum machine learning'
        'Quantum simulation'
      ]
      useCases: [
        'Financial Services'
        'Healthcare'
        'Research'
        'Cybersecurity'
      ]
      timeline: '8-18 months'
      complexity: 'Expert'
    }
    {
      id: 'autonomous-systems'
      name: 'Autonomous Business Systems'
      description:
        'Build self-managing and self-optimizing business operations'
      icon: <Rocket className='w-8 h-8 text-green-400' />
      features: [
        'Process automation'
        'Self-healing infrastructure'
        'Predictive maintenance'
        'Autonomous operations'
      ]
      useCases: ['Manufacturing', 'DevOps', 'Customer Service', 'Supply Chain']
      timeline: '3-9 months'
      complexity: 'Intermediate'
    }
    {
      id: 'enterprise-solutions'
      name: 'Enterprise Technology Platform'
      description:
        'Modernize your infrastructure with cloud-native and AI-powered solutions'
      icon: <Building className='w-8 h-8 text-blue-400' />
      features: [
        'Cloud migration'
        'Microservices architecture'
        'AI-powered analytics'
        'Security automation'
      ]
      useCases: [
        'Digital Transformation'
        'Legacy Modernization'
        'Data Analytics'
        'Security'
      ]
      timeline: '4-12 months'
      complexity: 'Intermediate'
    },  ];
  const quickStartOptions = [
    {
      title: 'Free Consultation'
      description: '30-minute session to discuss your needs'
      duration: '30 min'
      icon: <Users className='w-6 h-6' />
      action: 'Schedule Call'
      color: 'from-cyan-500 to-blue-600'
    },    {
      title: 'Demo Session'
      description: 'See our technology in action'
      duration: '45 min'
      icon: <Video className='w-6 h-6' />
      action: 'Book Demo'
      color: 'from-purple-500 to-pink-600'
    },    {
      title: 'Technical Assessment'
      description: 'Evaluate your current technology stack'
      duration: '2 hours'
      icon: <Code className='w-6 h-6' />
      action: 'Start Assessment'
      color: 'from-green-500 to-emerald-600'
    },    {
      title: 'Pilot Project'
      description: 'Small-scale implementation to prove value'
      duration: '4-8 weeks'
      icon: <Rocket className='w-6 h-6' />
      action: 'Discuss Pilot'
      color: 'from-orange-500 to-red-600'
    },  ];
  const handlePathSelection = (pathId: string) => {
    setSelectedPath(pathId);
    setCurrentStep(2);  }
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);    }
  }
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);    }
  }
import {
  Rocket,
  CheckCircle,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Zap,
  Users,
  Clock,
  Target,
  Star,
  FileText,
  Video,
  Code,
  Globe,;
  Building,;} from 'lucide-react';

export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);


import React, { useState } from 'react',
import { motion } from 'framer-motion',
import {
  Rocket, CheckCircle, ArrowRight, Brain, Atom,
  Shield, Zap, Users, Clock, Target, Star,
  FileText, Video, Code, Globe, Building
} from 'lucide-react',
export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1),



  const onboardingSteps = [
    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: 2,
      title: 'Define Requirements',
      description: 'Tell us about your project goals and constraints',
      icon: <FileText className="w-8 h-8 text-purple-400" />
    },
    {
      step: 3,
      title: 'Get Your Proposal',
      description: 'Receive a detailed proposal and implementation plan',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      step: 4,
      title: 'Begin Implementation',
      description: 'Start your journey with our expert team',
      icon: <Rocket className="w-8 h-8 text-green-400" />
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const technologyPaths = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness & Emotional Intelligence',
      description: 'Develop AI systems with genuine self-awareness and emotional intelligence',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: [
        'AI consciousness developmentEmotional intelligence trainingSelf-aware neural networksAutonomous decision making'
      ],
      useCases: ['Customer SuccessHR AnalyticsMental HealthEducation'],
      timeline: '6-12 months',
      complexity: 'Advanced'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Leverage quantum computing for cryptography, optimization, and simulation',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      features: [
        'Quantum algorithmsPost-quantum cryptographyQuantum machine learningQuantum simulation'
      ],
      useCases: ['Financial ServicesHealthcareResearchCybersecurity'],
      timeline: '8-18 months',
      complexity: 'Expert'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Business Systems',
      description: 'Build self-managing and self-optimizing business operations',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      features: [
        'Process automationSelf-healing infrastructurePredictive maintenanceAutonomous operations'
      ],
      useCases: ['ManufacturingDevOpsCustomer ServiceSupply Chain'],
      timeline: '3-9 months',
      complexity: 'Intermediate'
    },
    {
      id: 'enterprise-solutions',
      name: 'Enterprise Technology Platform',
      description: 'Modernize your infrastructure with cloud-native and AI-powered solutions',
      icon: <Building className="w-8 h-8 text-blue-400" />,
      features: [
        'Cloud migrationMicroservices architectureAI-powered analyticsSecurity automation'
      ],
      useCases: ['Digital TransformationLegacy ModernizationData AnalyticsSecurity'],
      timeline: '4-12 months',
      complexity: 'Intermediate'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const quickStartOptions = [
    {
      title: 'Free Consultation',
      description: '30-minute session to discuss your needs',
      duration: '30 min',
      icon: <Users className="w-6 h-6" />,
      action: 'Schedule Call',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Demo Session',
      description: 'See our technology in action',
      duration: '45 min',
      icon: <Video className="w-6 h-6" />,
      action: 'Book Demo',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Technical Assessment',
      description: 'Evaluate your current technology stack',
      duration: '2 hours',
      icon: <Code className="w-6 h-6" />,
      action: 'Start Assessment',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Pilot Project',
      description: 'Small-scale implementation to prove value',
      duration: '4-8 weeks',
      icon: <Rocket className="w-6 h-6" />,
      action: 'Discuss Pilot',


  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);  };

  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);    }
  ];

  const quickStartOptions = [
      description:;
        'Develop AI systems with genuine self - awareness and emotional intelligence',
      icon: <Brain className='w - 8 h - 8 text - cyan - 400' />,
      features: [;
        'AI consciousness development',
        'Emotional intelligence training',
        'Self - aware neural networks',
        'Autonomous decision making',
      ],
      use_cases: [;
        'Customer Success',
        'HR Analytics',
        'Mental Health',
        'Education',
      ],
      timeline: '6 - 12 months',
      complexity: 'Advanced',
    },
    {
      id: 'quantum - computing',
      name: 'Quantum Computing Solutions',
      description:;
        'Leverage quantum computing for cryptography, optimization, and simulation',
      icon: <Atom className='w - 8 h - 8 text - purple - 400' />,
      features: [;
        'Quantum algorithms',
        'Post - quantum cryptography',
        'Quantum machine learning',
        'Quantum simulation',
      ],
      use_cases: [;
        'Financial Services',
        'Healthcare',
        'Research',
        'Cybersecurity',
      ],
      timeline: '8 - 18 months',
      complexity: 'Expert',
    },
    {
      id: 'autonomous - systems',
      name: 'Autonomous Business Systems',
      description:;
        'Build self - managing and self - optimizing business operations',
      icon: <Rocket className='w - 8 h - 8 text - green - 400' />,
      features: [;
        'Process automation',
        'Self - healing infrastructure',
        'Predictive maintenance',
        'Autonomous operations',
      ],
      use_cases: ['Manufacturing', 'DevOps', 'Customer Service', 'Supply Chain'],
      timeline: '3 - 9 months',
      complexity: 'Intermediate',
    },
    {
      id: 'enterprise - solutions',
      name: 'Enterprise Technology Platform',
      description:;
        'Modernize your infrastructure with cloud - native and AI - powered solutions',
      icon: <Building className='w - 8 h - 8 text - blue - 400' />,
      features: [;
        'Cloud migration',
        'Microservices architecture',
        'AI - powered analytics',
        'Security automation',
      ],
      use_cases: [;
        'Digital Transformation',
        'Legacy Modernization',
        'Data Analytics',
        'Security',
      ],
      timeline: '4 - 12 months',
      complexity: 'Intermediate',
    },  ];
;
  const quickStartOptions = [;
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',

    setCurrentStep(2)
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }

  };


      color: 'from-orange-500 to-red-600'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);
  };
  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const handlePreviousStep = () => {;
    if (currentStep > 1) {;

      setCurrentStep(currentStep - 1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },



=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>get-started | Zion Tech Group</title>
        <meta name="description" content="get-started - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">get-started</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default get-started;
