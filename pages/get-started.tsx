<<<<<<< HEAD
<<<<<<< HEAD
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
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, CheckCircle, ArrowRight, Brain, Atom, 
  Shield, Zap, Users, Clock, Target, Star;
  FileText, Video, Code, Globe, Building
} from 'lucide-react';
export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1);
  const onboardingSteps = [
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Rocket
  CheckCircle
  ArrowRight
  Brain
  Atom
  Shield
  Zap
  Users
  Clock
  Target
  Star
  FileText
  Video
  Code
  Globe
  Building;} from 'lucide-react';


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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Globe,;
  Building,;} from 'lucide-react';

export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

  const onboardingSteps = [;
    {;
      step: 1,;
      title: 'Choose Your Path',;
      description: 'Select the technology area that best fits your needs',;
      icon: <Target className='w-8 h-8 text-cyan-400' />,;
    },    {;
      step: 2,;
      title: 'Define Requirements',;
      description: 'Tell us about your project goals and constraints',;
      icon: <FileText className='w-8 h-8 text-purple-400' />,;
    },    {;
      step: 3,;
      title: 'Get Your Proposal',;
      description: 'Receive a detailed proposal and implementation plan',;
      icon: <Star className='w-8 h-8 text-yellow-400' />,;
    },    {;
      step: 4,;
      title: 'Begin Implementation',;
      description: 'Start your journey with our expert team',;
      icon: <Rocket className='w-8 h-8 text-green-400' />,;
    },  ];
  const technologyPaths = [;
    {;
      id: 'ai-consciousness',;
      name: 'AI Consciousness & Emotional Intelligence',;
      description:;
        'Develop AI systems with genuine self-awareness and emotional intelligence',;
      icon: <Brain className='w-8 h-8 text-cyan-400' />,;
      features: [;
        'AI consciousness development',;
        'Emotional intelligence training',;
        'Self-aware neural networks',;
        'Autonomous decision making',;
      ],;
      useCases: [;
        'Customer Success',;
        'HR Analytics',;
        'Mental Health',;
        'Education',;
      ],;
      timeline: '6-12 months',;
      complexity: 'Advanced',;
    },;
    {;
      id: 'quantum-computing',;
      name: 'Quantum Computing Solutions',;
      description:;
        'Leverage quantum computing for cryptography, optimization, and simulation',;
      icon: <Atom className='w-8 h-8 text-purple-400' />,;
      features: [;
        'Quantum algorithms',;
        'Post-quantum cryptography',;
        'Quantum machine learning',;
        'Quantum simulation',;
      ],;
      useCases: [;
        'Financial Services',;
        'Healthcare',;
        'Research',;
        'Cybersecurity',;
      ],;
      timeline: '8-18 months',;
      complexity: 'Expert',;
    },;
    {;
      id: 'autonomous-systems',;
      name: 'Autonomous Business Systems',;
      description:;
        'Build self-managing and self-optimizing business operations',;
      icon: <Rocket className='w-8 h-8 text-green-400' />,;
      features: [;
        'Process automation',;
        'Self-healing infrastructure',;
        'Predictive maintenance',;
        'Autonomous operations',;
      ],;
      useCases: ['Manufacturing', 'DevOps', 'Customer Service', 'Supply Chain'],;
      timeline: '3-9 months',;
      complexity: 'Intermediate',;
    },;
    {;
      id: 'enterprise-solutions',;
      name: 'Enterprise Technology Platform',;
      description:;
        'Modernize your infrastructure with cloud-native and AI-powered solutions',;
      icon: <Building className='w-8 h-8 text-blue-400' />,;
      features: [;
        'Cloud migration',;
        'Microservices architecture',;
        'AI-powered analytics',;
        'Security automation',;
      ],;
      useCases: [;
        'Digital Transformation',;
        'Legacy Modernization',;
        'Data Analytics',;
        'Security',;
      ],;
      timeline: '4-12 months',;
      complexity: 'Intermediate',;
    },  ];
  const quickStartOptions = [;
    {;
      title: 'Free Consultation',;
      description: '30-minute session to discuss your needs',;
      duration: '30 min',;
      icon: <Users className='w-6 h-6' />,;
      action: 'Schedule Call',;
      color: 'from-cyan-500 to-blue-600',;
    },    {;
      title: 'Demo Session',;
      description: 'See our technology in action',;
      duration: '45 min',;
      icon: <Video className='w-6 h-6' />,;
      action: 'Book Demo',;
      color: 'from-purple-500 to-pink-600',;
    },    {;
      title: 'Technical Assessment',;
      description: 'Evaluate your current technology stack',;
      duration: '2 hours',;
      icon: <Code className='w-6 h-6' />,;
      action: 'Start Assessment',;
      color: 'from-green-500 to-emerald-600',;
    },    {;
      title: 'Pilot Project',;
      description: 'Small-scale implementation to prove value',;
      duration: '4-8 weeks',;
      icon: <Rocket className='w-6 h-6' />,;
      action: 'Discuss Pilot',;
      color: 'from-orange-500 to-red-600',;
    },  ];
=======

      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',

  Globe,;
  Building,;} from 'lucide-react';
export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);




=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',
<<<<<<< HEAD
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      color: 'from-orange-500 to-red-600',
    },  ];

  const handlePathSelection = (pathId: string) => {
    setSelectedPath(pathId);
    setCurrentStep(2);  };
=======

    setCurrentStep(2)
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);    }
=======
=======


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

      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',

  Globe,;
  Building,;} from 'lucide-react';

export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);




=======

  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);  };

  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);    }
=======
  ];

  const quickStartOptions = [
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
<<<<<<< HEAD
<<<<<<< HEAD
      setCurrentStep(currentStep - 1);    }
=======
      setCurrentStep(currentStep - 1)
    }

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
=======
      setCurrentStep(currentStep - 1)
    }

  };

  const handlePreviousStep = () => {;
    if (currentStep > 1) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




  return (
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setCurrentStep(currentStep - 1);    }
  }
  return (


<<<<<<< HEAD
<<<<<<< HEAD
      setCurrentStep(currentStep - 1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get Started Today
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
              Begin your journey into the future of AI consciousness, quantum
              computing, and autonomous systems. Our expert team will guide you
              every step of the way.

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Begin your journey into the future of AI consciousness, quantum computing,
              and autonomous systems. Our expert team will guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Rocket className="w-6 h-6" />
                <span>Quick Start</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-6 h-6" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Proven Results</span>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

            transition={{ duration: 0 && 0.8 }}
transition={{ duration: 0 && 0.8 }}
=======


            transition={{ duration: 0 && 0.8 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='text-center max-w-4xl mx-auto'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>;
              Get Started Today;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Users className='w - 6 h - 6' />,
      action: 'Schedule Call',
      color: 'from - cyan - 500 to - blue - 600',
    },    {
      title: 'Demo Session',
      description: 'See our technology in action',
      duration: '45 min',
      icon: <Video className='w - 6 h - 6' />,
      action: 'Book Demo',
      color: 'from - purple - 500 to - pink - 600',
    },    {
      title: 'Technical Assessment',
      description: 'Evaluate your current technology stack',
      duration: '2 hours',
      icon: <Code className='w - 6 h - 6' />,
      action: 'Start Assessment',
      color: 'from - green - 500 to - emerald - 600',
    },    {
      title: 'Pilot Project',
      description: 'Small - scale implementation to prove value',
      duration: '4 - 8 weeks',
      icon: <Rocket className='w - 6 h - 6' />,
      action: 'Discuss Pilot',
      color: 'from - orange - 500 to - red - 600',
    },  ];
;
  const handlePathSelection = (path_id: string) =>: any {
    setSelectedPath (path_id);
    setCurrentStep (2);  }
;
  const handleNextStep = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step + 1);    }
  }
;
  const handlePreviousStep = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step - 1);    }
  }
;
  return (
    <div className='min - h-screen bg - black text - white'>;
      {/* Hero Section */}
      <section className='relative pt - 32 pb - 20 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20' />;
        <div className='relative z - 10 container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center max - w-4xl mx - auto';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6'>;
              Get Started Today;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 leading - relaxed'>;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Begin your journey into the future of AI consciousness, quantum;
              computing, and autonomous systems. Our expert team will guide you;
              every step of the way.;
            </p>;
<<<<<<< HEAD
      {/* Onboarding Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className="text-center mb-16"
      {/* Onboarding Steps */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
      {/* Onboarding Steps */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Onboarding Steps */}
      <section className='py-20'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-400">From initial consultation to full implementation</p>
          </motion.div>
<<<<<<< HEAD


<<<<<<< HEAD
                key={step.step}
=======

          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
              <motion.div


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                  currentStep === step.step
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50'
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
                }`}
          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0 && 0.8 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Simple 4-Step Process;
            </h2>;
            <p className='text-xl text-gray-400'>;
              From initial consultation to full implementation;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps && onboardingSteps.map((step, index) => (;
              <motion&& motion.div
                key={step && step.step}
<<<<<<< HEAD
          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps && onboardingSteps.map((step, index) => (;
              <motion&& motion.div
                key={step && step.step}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                  currentStep === step && step.step
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50'
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
<<<<<<< HEAD
<<<<<<< HEAD
                }`}
          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${;
                  currentStep === step.step;
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50';
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
<<<<<<< HEAD
<<<<<<< HEAD
                  {step.step}
                </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
<<<<<<< HEAD
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technology Paths */}
      {currentStep === 1 && (;
        <section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>;
          <div className='container mx-auto px-4'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                  {step.step  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
=======
                  {step.step}
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='flex justify-center mb-4'>{step.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {step.description}
                </p>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Paths */}
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
<<<<<<< HEAD
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Technology Paths */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}

          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {currentStep === 1 && (
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Choose Your Technology Path
              </h2>
              <p className="text-xl text-gray-400">Select the area that best aligns with your business goals</p>
            </motion.div>
<<<<<<< HEAD


<<<<<<< HEAD
            <div className="grid lg:grid-cols-2 gap-8">
              {technologyPaths.map((path, index) => (
                <motion.div

            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths.map((path, index) => (
                <motion.div
                  key={path.id}
=======

=======
            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='group cursor-pointer'
                  onClick={() => handlePathSelection(path.id)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid lg:grid-cols-2 gap-8">
              {technologyPaths.map((path, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Choose Your Technology Path;
              </h2>;
              <p className='text-xl text-gray-400'>;
                Select the area that best aligns with your business goals;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD
            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths && technologyPaths.map((path, index) => (;
                <motion&& motion.div
                  key={path && path.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
=======
=======

            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths && technologyPaths.map((path, index) => (;
                <motion&& motion.div
                  key={path && path.id}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex - wrap justify - center gap - 6'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Rocket className='w - 6 h - 6' />;
                <span > Quick Start</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Users className='w - 6 h - 6' />;
                <span > Expert Guidance</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <CheckCircle className='w - 6 h - 6' />                <span > Proven Results</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Onboarding Steps */}
      <section className='py - 20'>;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Simple 4 - Step Process;
            </h2>;
            <p className='text - xl text - gray - 400'>;
              From initial consultation to full implementation;
            </p>;
          </motion.div>;
          <div className='grid md:grid - cols - 4 gap - 8'>            {onboarding_steps.map ((step, index) => (
              <motion.div;
                key={step.step}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`text - center p - 6 rounded - 2xl border transition - all duration - 300 ${
                  current_step === step.step;
                    ? 'bg - gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 border - cyan - 500 / 50';
                    : 'bg - gradient - to - br from - gray - 900 / 30 to - black / 30 border - gray - 800 / 50';
                }`}
              >;
                <div className='w - 16 h - 16 mx - auto mb - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - full flex items - center justify - center text - white text - 2xl font - bold'>;
                  {step.step}
                </div>;
                <div className='flex justify - center mb - 4'>{step.icon}</div>;
                <h3 className='text - xl font - bold text - white mb - 3'>;
                  {step.title}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {step.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Technology Paths */}
      {current_step === 1 && (
        <section className='py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black'>;
          <div className='container mx - auto px - 4'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Choose Your Technology Path;
              </h2>;
              <p className='text - xl text - gray - 400'>;
                Select the area that best aligns with your business goals;
              </p>;
            </motion.div>;
            <div className='grid lg:grid - cols - 2 gap - 8'>              {technology_paths.map ((path, index) => (
                <motion.div;
                  key={path.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='group cursor - pointer';
                  on_click={() => handlePathSelection (path.id)}
                >;
                  <div className='p - 8 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300'>;
                    <div className='flex items - start gap - 4 mb - 6'>;
                      <div className='flex - shrink - 0'>{path.icon}</div>;
                      <div>;
                        <h3 className='text - 2xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {path.name}
                        </h3>;
                        <p className='text - gray - 300 leading - relaxed'>;
                          {path.description}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => handlePathSelection(path && path.id)}
                >;
                  <div className='p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300'>;
                    <div className='flex items-start gap-4 mb-6'>;
                      <div className='flex-shrink-0'>{path && path.icon}</div>;
                      <div>;
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {path && path.name}
                        </h3>;
                        <p className='text-gray-300 leading-relaxed'>;
                          {path && path.description}
                        </p>;
                      </div>;
                    </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className='grid md:grid-cols-2 gap-6 mb-6'>;
                      <div>;
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>;
                          Key Features;
                        </h4>;
                        <ul className='space-y-2'>;
                          {path && path.features.map(feature => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <li
                              key={feature}
                              className='flex items-center gap-2 text-gray-300'>;
                              <CheckCircle className='w-4 h-4 text-cyan-400' />;
                              <span className='text-sm'>{feature}</span>                            </li>;
<<<<<<< HEAD
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handlePathSelection(path.id)}
                  className='group cursor-pointer'
                  onClick={() => handlePathSelection(path.id)}
            <div className="grid lg:grid-cols-2 gap-8">
              {technologyPaths.map((path, index) => (
                <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handlePathSelection(path.id)}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={path.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="group cursor-pointer"
                  onClick={() => handlePathSelection(path.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">{path.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
<<<<<<< HEAD
                          {path.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                          {path.name}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{path.description}</p>
                      </div>
                    </div>
<<<<<<< HEAD

<<<<<<< HEAD
                    <div className="grid md:grid-cols-2 gap-6 mb-6">


                    <div className='grid md:grid-cols-2 gap-6 mb-6'>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
=======

                    <div className="grid md:grid-cols-2 gap-6 mb-6">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <div className='grid md:grid-cols-2 gap-6 mb-6'>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {path.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm">{feature}</span>
                            </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                          ))}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </ul>;
                      </div>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                          ))}


                        </ul>;
                      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div>;
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>;
                          Use Cases;
                        </h4>;
                        <div className='flex flex-wrap gap-2'>;
                          {path && path.useCases.map(useCase => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <span
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </ul>
                      </div>
=======


                            <span
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>;
=======
                      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.useCases.map((useCase) => (
                            <span
<<<<<<< HEAD
<<<<<<< HEAD
=======

                        </p>;
                      </div>;
                    </div>;
                    <div className='grid md:grid - cols - 2 gap - 6 mb - 6'>;
                      <div>;
                        <h4 className='text - sm font - semibold text - gray - 400 uppercase tracking - wide mb - 3'>;
                          Key Features;
                        </h4>;
                        <ul className='space - y-2'>;
                          {path.features.map (feature => (
                            <li;
                              key={feature}
                              className='flex items - center gap - 2 text - gray - 300';
                            >;
                              <CheckCircle className='w - 4 h - 4 text - cyan - 400' />;
                              <span className='text - sm'>{feature}</span>                            </li>))}
                        </ul>;
                      </div>;
                      <div>;
                        <h4 className='text - sm font - semibold text - gray - 400 uppercase tracking - wide mb - 3'>;
                          Use Cases;
                        </h4>;
                        <div className='flex flex - wrap gap - 2'>;
                          {path.use_cases.map (use_case => (
                            <span;
                              key={use_case}
                              className='px - 3 py - 1 bg - gray - 800 / 50 text - gray - 300 rounded - full text - sm'                            >;
                              {use_case}
                            </span>))}
                        </div>;
                      </div>;
                    </div>;
                    <div className='flex items - center justify - between pt - 6 border - t border - gray - 800 / 50'>;
                      <div className='flex gap - 4 text - sm text - gray - 400'>;
                        <span className='flex items - center gap - 1'>;
                          <Clock className='w - 4 h - 4' />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          {path.timeline}
                        </span>;
                        <span className='flex items - center gap - 1'>;
                          <Target className='w - 4 h - 4' />;
                          {path.complexity}
<<<<<<< HEAD
=======


                              key={useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                            >
                              {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </span>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>

                      </div>
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>
                        <span className='font-medium'>Select Path</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>
                    </div>
                  </div>
                </motion.div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </div>;
                      </div>;
                    </div>;
                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>;
                      <div className='flex gap-4 text-sm text-gray-400'>;
                        <span className='flex items-center gap-1'>;
                          <Clock className='w-4 h-4' />;
                          {path && path.timeline}
                        </span>;
                        <span className='flex items-center gap-1'>;
                          <Target className='w-4 h-4' />;
                          {path && path.complexity}
                        </span>;
                      </div>;
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>;
                        <span className='font-medium'>Select Path</span>;
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              ))}
            </div>;
          </div>;
        </section>;
      )}
      {/* Requirements Definition */}
      {currentStep === 2 && (;
        <section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>;
          <div className='container mx-auto px-4'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>
                      <div className='flex gap-4 text-sm text-gray-400'>
                        <span className='flex items-center gap-1'>
                          <Clock className='w-4 h-4' />
                          {path.timeline}
                              key={useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                            >
                              {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </span>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
<<<<<<< HEAD
                      </div>
                    </div>
=======

                    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                      </div>
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>
                        <span className='font-medium'>Select Path</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>
                    </div>
                  </div>
                </motion.div>
=======
                        </div>;
                      </div>;
                    </div>;

                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>;
                      <div className='flex gap-4 text-sm text-gray-400'>;
                        <span className='flex items-center gap-1'>;
                          <Clock className='w-4 h-4' />;
                          {path && path.timeline}
                        </span>;
                        <span className='flex items-center gap-1'>;
                          <Target className='w-4 h-4' />;
                          {path && path.complexity}
                        </span>;
                      </div>;
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>;
                        <span className='font-medium'>Select Path</span>;
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;


              ))}
            </div>;
          </div>;
        </section>;
      )}
      {/* Requirements Definition */}
      {currentStep === 2 && (;
        <section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>;
          <div className='container mx-auto px-4'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

                    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          {path.timeline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="font-medium">Select Path</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Requirements Definition */}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Requirements Definition */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {currentStep === 2 && (
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center mb-16"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Define Your Requirements
              </h2>
              <p className="text-xl text-gray-400">Help us understand your project goals and constraints</p>
            </motion.div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='max-w-4xl mx-auto'>
              <div className='bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50'>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    Selected Path:{' '}
                    {technologyPaths.find(p => p.id === selectedPath)?.name}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Selected Path: {technologyPaths.find(p => p.id === selectedPath)?.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </h3>
                  <p className="text-gray-300">
                    Now let's gather more details about your specific needs
                  </p>
                </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline</label>
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Immediate (1-2 weeks)</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Under $50K</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Define Your Requirements;
              </h2>;
              <p className='text-xl text-gray-400'>;
                Help us understand your project goals and constraints;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='max-w-4xl mx-auto'>;
              <div className='bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50'>;
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    Selected Path:{' '}
                    {technologyPaths && technologyPaths.find(p => p && p.id === selectedPath)?.name}
                  </h3>;
                  <p className='text-gray-300'>;
                    Now let's gather more details about your specific needs;
                  </p>;
                </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='space-y-6'>;
                  <div className='grid md:grid-cols-2 gap-6'>;
                    <div>;
                      <label className='block text-sm font-medium text-gray-300 mb-2'>;
                        Project Timeline;
                      </label>;
                      <select className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'>                        <option>Immediate (1-2 weeks)</option>;
                        <option>1-3 months</option>;
                        <option>3-6 months</option>;
                        <option>6+ months</option>;
                      </select>;
                    </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div>;
                      <label className='block text-sm font-medium text-gray-300 mb-2'>;
                        Budget Range;
                      </label>;
                      <select className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'>                        <option>Under $50K</option>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </span>;
                      </div>;
                      <div className='flex items - center gap - 2 text - cyan - 400 group - hover:text - cyan - 300 transition - colors duration - 300'>;
                        <span className='font - medium'>Select Path</span>;
                        <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform duration - 300' />                      </div>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>)}
      {/* Requirements Definition */}
      {current_step === 2 && (
        <section className='py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black'>;
          <div className='container mx - auto px - 4'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Define Your Requirements;
              </h2>;
              <p className='text - xl text - gray - 400'>;
                Help us understand your project goals and constraints;
              </p>;
            </motion.div>;
            <div className='max - w-4xl mx - auto'>;
              <div className='bg - gradient - to - br from - gray - 900 / 30 to - black / 30 rounded - 2xl p - 8 border border - gray - 800 / 50'>;
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 4'>;
                    Selected Path:{' '}
                    {technology_paths.find (p => p.id === selected_path)?.name}
                  </h3>;
                  <p className='text - gray - 300'>;
                    Now let's gather more details about your specific needs;
                  </p>;
                </div>;
                <div className='space - y-6'>;
                  <div className='grid md:grid - cols - 2 gap - 6'>;
                    <div>;
                      <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                        Project Timeline;
                      </label>;
                      <select className='w - full px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300'>                        <option > Immediate (1 - 2 weeks)</option>;
                        <option > 1-3 months</option>;
                        <option > 3-6 months</option>;
                        <option > 6+ months</option>;
                      </select>;
                    </div>;
                    <div>;
                      <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                        Budget Range;
                      </label>;
                      <select className='w - full px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300'>                        <option > Under $50K</option>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <option>$50K - $100K</option>;
                        <option>$100K - $500K</option>;
                        <option>$500K+</option>;
                      </select>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    />;
                  </div>;
                  <div className='flex justify-between pt-6'>;
=======

                    />;
                  </div>;
                  <div className='flex justify-between pt-6'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    />;
                  </div>;

                  <div className='flex justify-between pt-6'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <button
                      onClick={handlePreviousStep}
                      className='px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300'>;
                      Previous;
                    </button>;
                    <button
                      onClick={handleNextStep}
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>;
                    <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                      Project Description;
                    </label>;
                    <textarea;
                      rows={6}
                      className='w - full px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300';
                      placeholder='Describe your project goals, challenges, and specific requirements...';
                    />;
                  </div>;
                  <div className='flex justify - between pt - 6'>;
                    <button;
                      on_click={handlePreviousStep}
                      className='px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition - all duration - 300'                    >;
                      Previous;
                    </button>;
                    <button;
                      on_click={handleNextStep}
                      className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - xl hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300'                    >;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      Next Step;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea
                      rows={6}
<<<<<<< HEAD
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea
                      rows={6  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Describe your project goals, challenges, and specific requirements..."
                    />
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    <button
                      onClick={handlePreviousStep}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className='flex justify-between pt-6'>
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                    <button
                      onClick={handlePreviousStep}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
                    >
                      Previous
                    </button>
                    <button
<<<<<<< HEAD
<<<<<<< HEAD
className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                      onClick={handleNextStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
                      onClick={handleNextStep}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      onClick={handleNextStep}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Quick Start Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
      )}
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className="text-center mb-16"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Quick Start Options */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Quick Start Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
=======
=======

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Start Options
            </h2>
            <p className="text-xl text-gray-400">Get started immediately with these quick options</p>
          </motion.div>
<<<<<<< HEAD


<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartOptions.map((option, index) => (
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>            {quickStartOptions.map((option, index) => (
              <motion.div

=======

=======
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>            {quickStartOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='group cursor-pointer'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartOptions.map((option, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div

        </section>)}
      {/* Quick Start Options */}
      <section className='py - 20'>;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Quick Start Options;
            </h2>;
            <p className='text - xl text - gray - 400'>;
              Get started immediately with these quick options;
            </p>;
          </motion.div>;
          <div className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {quickStartOptions.map ((option, index) => (
              <motion.div;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={option.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='group cursor - pointer';
              >;
                <div className='p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300'>;
                  <div className='flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                    {option.icon}
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 3 text - center'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {option.title}
                  </h3>;
                  <p className='text - gray - 300 mb - 4 text - center leading - relaxed'>;
                    {option.description}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0 && 0.8 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Quick Start Options;
            </h2>;
            <p className='text-xl text-gray-400'>;
              Get started immediately with these quick options;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>            {quickStartOptions && quickStartOptions.map((option, index) => (;
              <motion&& motion.div
                key={option && option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className='group cursor-pointer'>;
                <div className='p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300'>;
                  <div className='flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>;
                    {option && option.icon}
                  </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>;
                    {option && option.title}
                  </h3>;
                  <p className='text-gray-300 mb-4 text-center leading-relaxed'>;
                    {option && option.description}
                  </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='text-center mb-4'>;
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>;
                      <Clock className='w-4 h-4' />;
                      {option && option.duration}
                    </span>;
                  </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <button
                    className={`w-full py-3 px-4 bg-gradient-to-r ${option && option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>                    {option && option.action}
                  </button>;
                </div>;
              </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={option.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="group cursor-pointer"


              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{option.description}</p>
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {option.duration}
                    </span>
                  </div>
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {option.action}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='group cursor-pointer'
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartOptions.map((option, index) => (
              <motion.div
                key={option.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>
                    {option.title}
                  </h3>
                  <p className='text-gray-300 mb-4 text-center leading-relaxed'>
                    {option.description}
                  </p>
                  <div className='text-center mb-4'>
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>
                      <Clock className='w-4 h-4' />
                      {option.duration}
                    </span>
                  </div>
                  <button
                    className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}
                  >                    {option.action}
                  </button>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
=======
=======
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>
        <div className='container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{option.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {option.duration}
                    </span>
                  </div>
                  
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {option.action}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </button>
                </div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}

          </div>;
        </div>;
      </section>;


      {/* Contact CTA */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Ready to Begin Your Journey?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Our team of experts is ready to help you navigate the future of;
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href='/contact'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                Contact Our Team;
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a
                href='/quote'


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>
        <div className='container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{option.description}</p>
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {option.duration  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>;
                  </div>;
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>;
                    {option.action  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </button>;
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<a
              Our team of experts is ready to help you navigate the future of technology.
=======
              Our team of experts is ready to help you navigate the future of technology. 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              Our team of experts is ready to help you navigate the future of technology. 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Let's discuss your project and create a roadmap to success.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
<<<<<<< HEAD
<<<<<<< HEAD
              </Link>
=======
              </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href="/quote"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
<<<<<<< HEAD
<<<<<<< HEAD
                Get a Quote
              </Link>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                Get a Quote
              </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                Get a Quote
              </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </motion.div>
        </div>
      </section>
    </div>


),



<<<<<<< HEAD
<<<<<<< HEAD
className='inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300'>;
                Get a Quote;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </div>;
  ),;
}whileInView= {;
  {;
  opacity: 1, y: 0 ;
}transition= {;
  {;
  duration: 0 && 0.8, delay: index * 0 && 0.1 ;
}className= {;
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {;
  currentStep === step && step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50' ;
}` ;
}> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion && motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) ) ;
}</ul> </div> <div> <spankey= {
  useCase 
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"> {;
  useCase ;
}</span>) ) ;
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion && motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion && motion.div> </span> </div> <buttonclassName= {
)
),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8, delay: index * 0.1
}className= {
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {
  currentStep === step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
}`
}> </motion.div>) )
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) )
}</ul> </div> <div> <span key= {
  useCase
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm" > {
  useCase
}</span>) )
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion.div>) )
}</div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion.div> </span> </div> <button className= {
  `w-full py-3 px-4 bg-gradient-to-r $ {
<<<<<<< HEAD
=======
  option.color
}text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`
}> {
  option.action
}</button> </div> </motion.div>) )
}</div> </div> </section> <motion.div initial= {
=======
                className='inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300'>;
                Get a Quote;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </div>;
  ),;

}whileInView= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  duration: 0 && 0.8, delay: index * 0 && 0.1 ;

}className= {;
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {;
  currentStep === step && step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50' ;
}` ;
}> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion && motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) ) ;
}</ul> </div> <div> <spankey= {
  useCase 
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"> {;
  useCase ;
}</span>) ) ;
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion && motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion && motion.div> </span> </div> <buttonclassName= {
  `w-full py-3 px-4 bg-gradient-to-r $ {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  option && option.color 
}text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300` 
}> {;
  option && option.action ;
}</button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
  opacity: 0, y: 20
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD

  duration: 0 && 0.8 
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion && motion.div> </div> </section> </div>) ;
<<<<<<< HEAD
  )
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </p>;
                  <div className='text - center mb - 4'>;
                    <span className='inline - flex items - center gap - 1 px - 3 py - 1 bg - gray - 800 / 50 text - gray - 300 rounded - full text - sm'>;
                      <Clock className='w - 4 h - 4' />;
                      {option.duration}
                    </span>;
                  </div>;
                  <button;
                    className={`w - full py - 3 px - 4 bg - gradient - to - r ${option.color} text - white rounded - xl font - semibold hover:shadow - 2xl transition - all duration - 300`}
                  >                    {option.action}
                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className='py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20'>;
        <div className='container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className='text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Ready to Begin Your Journey?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Our team of experts is ready to help you navigate the future of;
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='/contact';
                className='inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                Contact Our Team;
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;
                href='/quote';
                className='inline - flex items - center gap - 2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - 2xl font - semibold hover:bg - cyan - 500 / 10 transition - all duration - 300'              >;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  duration: 0.8
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
  )
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
              Ready to Begin Your Journey?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our team of experts is ready to help you navigate the future of technology.;
              Let's discuss your project and create a roadmap to success.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300";
              >;
                Contact Our Team;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href="/quote";
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300";
              >;
=======
            <h2 className='text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Ready to Begin Your Journey?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Our team of experts is ready to help you navigate the future of;
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='/contact';
                className='inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                Contact Our Team;
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;
                href='/quote';
                className='inline - flex items - center gap - 2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - 2xl font - semibold hover:bg - cyan - 500 / 10 transition - all duration - 300'              >;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Get a Quote;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
