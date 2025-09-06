<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';


=======

<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1);

  const onboardingSteps = [
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, ArrowRight, Brain, Atom;
  Shield, Zap, Users, Clock, Target, Star;
  FileText, Video, Code, Globe, Building
 } from 'lucide-react';
export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1);
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',
icon: <Target className='w-8 h-8 text-cyan-400' />,
    },
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      step: 2,
      title: 'Define Requirements',
      description: 'Tell us about your project goals and constraints',
icon: <FileText className='w-8 h-8 text-purple-400' />,
    },
    {
      step: 3,
      title: 'Get Your Proposal',
      description: 'Receive a detailed proposal and implementation plan',
icon: <Star className='w-8 h-8 text-yellow-400' />,
    },
    {
      step: 4,
      title: 'Begin Implementation',
      description: 'Start your journey with our expert team',
icon: <Rocket className='w-8 h-8 text-green-400' />,
    },
  ];

  const technologyPaths = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness & Emotional Intelligence',
description:
        'Develop AI systems with genuine self-awareness and emotional intelligence',
      icon: <Brain className='w-8 h-8 text-cyan-400' />,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      features: [
        'AI consciousness development'
        'Emotional intelligence training'
        'Self-aware neural networks'
        'Autonomous decision making'
      ]
      useCases: [
<<<<<<< HEAD
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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

      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
      color: 'from-orange-500 to-red-600',
    },  ];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
      color: 'from-orange-500 to-red-600',
    },  ];



<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  const onboardingSteps = [

    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',

<<<<<<< HEAD
=======
  Globe,;
  Building,;} from 'lucide-react';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);




<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);  };
<<<<<<< HEAD

  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);    }
  ];
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',
=======
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Customer Success',
        'HR Analytics',
        'Mental Health',
        'Education',
      ],
<<<<<<< HEAD
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
=======
      timeline: '6-12 months',
      complexity: 'Advanced',
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description:
        'Leverage quantum computing for cryptography, optimization, and simulation',
      icon: <Atom className='w-8 h-8 text-purple-400' />,
      features: [
        'Quantum algorithms',
        'Post-quantum cryptography',
        'Quantum machine learning',
        'Quantum simulation',
      ],
      useCases: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Financial Services',
        'Healthcare',
        'Research',
        'Cybersecurity',
      ],
<<<<<<< HEAD
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
=======
      timeline: '8-18 months',
      complexity: 'Expert',
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Business Systems',
      description:
        'Build self-managing and self-optimizing business operations',
      icon: <Rocket className='w-8 h-8 text-green-400' />,
      features: [
        'Process automation',
        'Self-healing infrastructure',
        'Predictive maintenance',
        'Autonomous operations',
      ],
      useCases: ['Manufacturing', 'DevOps', 'Customer Service', 'Supply Chain'],
      timeline: '3-9 months',
      complexity: 'Intermediate',
    },
    {
      id: 'enterprise-solutions',
      name: 'Enterprise Technology Platform',
      description:
        'Modernize your infrastructure with cloud-native and AI-powered solutions',
      icon: <Building className='w-8 h-8 text-blue-400' />,
      features: [
        'Cloud migration',
        'Microservices architecture',
        'AI-powered analytics',
        'Security automation',
      ],
      useCases: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        'Digital Transformation',
        'Legacy Modernization',
        'Data Analytics',
        'Security',
      ],
<<<<<<< HEAD
      timeline: '4 - 12 months',
      complexity: 'Intermediate',
    },  ];
;
  const quickStartOptions = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',

    setCurrentStep(2)
=======
      timeline: '4-12 months',
      complexity: 'Intermediate',
    },
  ];

  const quickStartOptions = [
    {
      title: 'Free Consultation',
      description: '30-minute session to discuss your needs',
      duration: '30 min',
icon: <Users className='w-6 h-6' />,
      action: 'Schedule Call',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Demo Session',
      description: 'See our technology in action',
      duration: '45 min',
icon: <Video className='w-6 h-6' />,
      action: 'Book Demo',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Technical Assessment',
      description: 'Evaluate your current technology stack',
      duration: '2 hours',
icon: <Code className='w-6 h-6' />,
      action: 'Start Assessment',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Pilot Project',
      description: 'Small-scale implementation to prove value',
      duration: '4-8 weeks',
icon: <Rocket className='w-6 h-6' />,
      action: 'Discuss Pilot',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const handlePathSelection = (pathId: string) => {
    setSelectedPath(pathId);
setCurrentStep(2);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
<<<<<<< HEAD
      setCurrentStep(currentStep + 1);    }
=======
setCurrentStep(currentStep + 1);
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
      setCurrentStep(currentStep - 1)
    }

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  };

=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
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
      color: 'from-orange-500 to-red-600',
    },  ];




=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx

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
<<<<<<< HEAD:pages_backup/get-started.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx

      step: 1,
      title: 'Choose Your Path','
      description: 'Select the technology area that best fits your needs',

  Globe,;'
  Building,;} from 'lucide-react';

<<<<<<< HEAD:pages_backup/get-started.tsx
export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);





  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);  };

  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);    }
  ];
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',
  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export default function GetStarted() { return null; }
    setCurrentStep(2);  };

    {'
      title: 'Free Consultation','
      description: '30 - minute session to discuss your needs','
      duration: '30 min',

    setCurrentStep(2)
  };

  const handleNextStep = () => {}
    if (currentStep < 4) {}
      setCurrentStep(currentStep + 1);    }
  };

  const handlePreviousStep = () => {}
    if (currentStep > 1) {}
      setCurrentStep(currentStep - 1)
    }



  };


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
      color: 'from-orange-500 to-red-600'
      } catch (error) {}
    console.error("Error:", error);"
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
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const handlePreviousStep = () => {;
    if (currentStep > 1) {;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      setCurrentStep(currentStep - 1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
<<<<<<< HEAD

          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get Started Today
            </h1>
<<<<<<< HEAD

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
=======
            <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
              Begin your journey into the future of AI consciousness, quantum
              computing, and autonomous systems. Our expert team will guide you
              every step of the way.
  const handlePreviousStep = () => {;
    if (currentStep > 1) {;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx




  return (
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
      setCurrentStep(currentStep - 1);    }
  }
  return (

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx

              Begin your journey into the future of AI consciousness, quantum;
              computing, and autonomous systems. Our expert team will guide you;
              every step of the way.;
            </p>;


<<<<<<< HEAD:pages_backup/get-started.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Onboarding Steps */}
      <section className='py-20'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
=======
            animate={{ opacity: 1, y: 0 }  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
            className="text-center mb-16"
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            className="text-center max-w-4xl mx-auto"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
setCurrentStep(currentStep - 1);
    }
  };

  return (
<div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20' />
        <div className='relative z-10 container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-center max-w-4xl mx-auto'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get Started Today
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
              Begin your journey into the future of AI consciousness, quantum
              computing, and autonomous systems. Our expert team will guide you
              every step of the way.
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <div className='flex items-center gap-2 text-cyan-400'>
                <Rocket className='w-6 h-6' />
                <span>Quick Start</span>
              </div>
              <div className='flex items-center gap-2 text-purple-400'>
                <Users className='w-6 h-6' />
                <span>Expert Guidance</span>
              </div>
              <div className='flex items-center gap-2 text-green-400'>
                <CheckCircle className='w-6 h-6' />
                <span>Proven Results</span>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Onboarding Steps */}
<section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-center mb-16'
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
          >
=======

      {/* Onboarding Steps */}'
      <section className='py-20'>;'
        <div className='container mx-auto px-4'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Simple 4-Step Process;
            </h2>"
            <p className="text-xl text-gray-400">From initial consultation to full implementation</p>
          </motion.div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <motion.div
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx

          <div className='grid md:grid-cols-4 gap-8'>
            {onboardingSteps.map((step, index) => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


            transition={{ duration: 0 && 0.8 }}
            className='text-center mb-16'>;
=======

              <motion.div;
            transition={{ duration: 0 && 0.8 }}'
            className='text-center mb-16'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Simple 4-Step Process;
            </h2>;'
            <p className='text-xl text-gray-400'>;
              From initial consultation to full implementation;
            </p>;
          </motion && motion.div>;
'
          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps && onboardingSteps.map((step, index) => (;
              <motion&& motion.div;
                key={step && step.step}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${}
                  currentStep === step && step.step'
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50''
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
<<<<<<< HEAD
                }`}

              >"
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
<<<<<<< HEAD

      {/* Technology Paths */}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  {step.step}
                </div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
=======


              >
<div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {step.step}
                </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <div className='flex justify-center mb-4'>{step.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {step.description}
<<<<<<< HEAD
                </p>              </motion.div>
=======
                </p>
              </motion.div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))}
          </div>
        </div>
      </section>
      {/* Technology Paths */}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
                <div className="flex justify-center mb-4">{step.icon}</div>"
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>"
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            ))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      {currentStep === 1 && ("
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">"
          <div className="container mx-auto px-4">
<<<<<<< HEAD:pages_backup/get-started.tsx
            <motion.div
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center mb-16"
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      {currentStep === 1 && (
<section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className='text-center mb-16'
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
            >
=======
            <motion.div;
            >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Choose Your Technology Path;
              </h2>"
              <p className="text-xl text-gray-400">Select the area that best aligns with your business goals</p>
            </motion.div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



            <div className="grid lg:grid-cols-2 gap-8">
              {technologyPaths.map((path, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <motion.div

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
=======


                <motion.div;
              transition={{ duration: 0 && 0.8 }}'
              className='text-center mb-16'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Choose Your Technology Path;
              </h2>;'
              <p className='text-xl text-gray-400'>;
                Select the area that best aligns with your business goals;
              </p>;
            </motion && motion.div>;
'
            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths && technologyPaths.map((path, index) => (;
                <motion&& motion.div;
                  key={path && path.id}

<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
                  className='group cursor - pointer';
                  on_click={() => handlePathSelection (path.id)}
                >;
                  <div className='p - 8 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300'>;
                    <div className='flex items - start gap - 4 mb - 6'>;
                      <div className='flex - shrink - 0'>{path.icon}</div>;
                      <div>;
                        <h3 className='text - 2xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;

                          {path.name}
                        </h3>;
                        <p className='text - gray - 300 leading - relaxed'>;
                          {path.description}

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
                    <div className='grid md:grid-cols-2 gap-6 mb-6'>;
                      <div>;
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>;
                          Key Features;
                        </h4>;
                        <ul className='space-y-2'>;
                          {path && path.features.map(feature => (;

                            <li
                              key={feature}
                              className='flex items-center gap-2 text-gray-300'>;
                              <CheckCircle className='w-4 h-4 text-cyan-400' />;
                              <span className='text-sm'>{feature}</span>                            </li>;

=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handlePathSelection(path.id)}
=======
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx

            <div className='grid lg:grid-cols-2 gap-8'>
              {technologyPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
className='group cursor-pointer'
                  onClick={() => handlePathSelection(path.id)}
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                >
                  <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
=======


                >"
                  <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">"
                    <div className="flex items-start gap-4 mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                      <div className="flex-shrink-0">{path.icon}</div>
                      <div>"
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                          {path.name}
=======
                          {path.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        </h3>
=======


                        </h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        <p className="text-gray-300 leading-relaxed">{path.description}</p>
                      </div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD:pages_backup/get-started.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      <div>
=======


                      <div>
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
=======
                      <div>"
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        <ul className="space-y-2">
                          {path.features.map((feature) => ("
                            <li key={feature} className="flex items-center gap-2 text-gray-300">"
                              <CheckCircle className="w-4 h-4 text-cyan-400" />"
                              <span className="text-sm">{feature}</span>
                            </li>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                          ))}


                        </ul>;
                      </div>;

                      <div>;'
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>;
                          Use Cases;
                        </h4>;'
                        <div className='flex flex-wrap gap-2'>;
                          {path && path.useCases.map(useCase => (;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


                            <span
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>;
=======
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </ul>
                      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.useCases.map((useCase) => (
                            <span
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


                      <div>"
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Use Cases</h4>"
                        <div className="flex flex-wrap gap-2">
                          {path.useCases.map((useCase) => (
                            <span;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        </div>;
                      </div>;
                    </div>;

<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
                          {path.timeline}
                        </span>;
                        <span className='flex items - center gap - 1'>;
                          <Target className='w - 4 h - 4' />;
                          {path.complexity}


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                        </div>;
                      </div>;
                    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>;
                      <div className='flex gap-4 text-sm text-gray-400'>;
                        <span className='flex items-center gap-1'>;
=======

                        </div>;
                      </div>;
                    </div>;
'
                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>;'
                      <div className='flex gap-4 text-sm text-gray-400'>;'
                        <span className='flex items-center gap-1'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                          <Clock className='w-4 h-4' />;
                          {path && path.timeline}
                        </span>;'
                        <span className='flex items-center gap-1'>;'
                          <Target className='w-4 h-4' />;
                          {path && path.complexity}
                        </span>;
                      </div>;'
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>;'
                        <span className='font-medium'>Select Path</span>;'
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
      {currentStep === 2 && (;'
        <section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>;'
          <div className='container mx-auto px-4'>            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

                    "
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">"
                      <div className="flex gap-4 text-sm text-gray-400">"
                        <span className="flex items-center gap-1">"
                          <Clock className="w-4 h-4" />
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          {path.timeline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                          Key Features
                        </h4>
                        <ul className='space-y-2'>
                          {path.features.map(feature => (
                            <li
                              key={feature}
                              className='flex items-center gap-2 text-gray-300'
                            >
                              <CheckCircle className='w-4 h-4 text-cyan-400' />
                              <span className='text-sm'>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
<div>
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                          Use Cases
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {path.useCases.map(useCase => (
                            <span
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'
                            >
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
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

                          {path.timeline  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}




                        </span>"
                        <span className="flex items-center gap-1">"
                          <Target className="w-4 h-4" />
                          {path.complexity  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        </span>
                      </div>"
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">"
                        <span className="font-medium">Select Path</span>"
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
=======
                        </span>
                      </div>
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>
                        <span className='font-medium'>Select Path</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                      </div>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              ))  } catch (error) {
    console.error("Error:", error);
=======

              ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
      )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Requirements Definition */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {currentStep === 2 && (
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======


      {currentStep === 2 && ("
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">"
          <div className="container mx-auto px-4">
            <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
className="text-center mb-16"

              initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
              className="text-center mb-16"
<<<<<<< HEAD:pages_backup/get-started.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {currentStep === 2 && (
<section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>
          <div className='container mx-auto px-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className='text-center mb-16'
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
            >
=======

            >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Define Your Requirements;
              </h2>"
              <p className="text-xl text-gray-400">Help us understand your project goals and constraints</p>
            </motion.div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    Selected Path: {technologyPaths.find(p => p.id === selectedPath)?.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </h3>
                  <p className="text-gray-300">
                    Now let's gather more details about your specific needs
                  </p>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline</label>
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Immediate (1-2 weeks)</option>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Project Timeline
                      </label>
                      <select className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
                        <option>Immediate (1-2 weeks)</option>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
            <div className="max-w-4xl mx-auto">"
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50">"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-4">

                    Selected Path: {technologyPaths.find(p => p.id === selectedPath)?.name  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  </h3>"
                  <p className="text-gray-300">'
                    Now let's gather more details about your specific needs;
                  </p>
                </div>


                    <div>"
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline</label>"
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Immediate (1-2 weeks)</option>


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    
                    <div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Under $50K</option>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
<div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Budget Range
                      </label>
                      <select className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'>
                        <option>Under $50K</option>
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
=======
"
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>"
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Under $50K</option>


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                  </div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Define Your Requirements;
              </h2>;
              <p className='text-xl text-gray-400'>;
                Help us understand your project goals and constraints;
              </p>;
            </motion && motion.div>;
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
                    <div>;
                      <label className='block text-sm font-medium text-gray-300 mb-2'>;
                        Budget Range;
                      </label>;
                      <select className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'>                        <option>Under $50K</option>;
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                        <option>$50K - $100K</option>;
                        <option>$100K - $500K</option>;
                        <option>$500K+</option>;
                      </select>;
                    </div>;
                  </div>;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    />;
                  </div>;
                  <div className='flex justify-between pt-6'>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <button
                      onClick={handlePreviousStep}
=======

                    <button;
                      onClick={handlePreviousStep}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                      className='px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300'>;
                      Previous;
                    </button>;
                    <button;
                      onClick={handleNextStep}'
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                  <div>;'
                    <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                      Project Description;
                    </label>;
                    <textarea;
                      rows={6}'
                      className='w - full px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300';'
                      placeholder='Describe your project goals, challenges, and specific requirements...';
                    />;
                  </div>;'
                  <div className='flex justify - between pt - 6'>;
                    <button;
                      on_click={handlePreviousStep}'
                      className='px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition - all duration - 300'                    >;
                      Previous;
                    </button>;
                    <button;
                      on_click={handleNextStep}'
                      className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - xl hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300'                    >;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      Next Step;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <div>
=======

                  <div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea;
                      rows={6}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea
                      rows={6  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
=======

"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                      placeholder="Describe your project goals, challenges, and specific requirements..."
                    />
                  </div>

<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <button
                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
                  <div className='flex justify-between pt-6'>
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={handlePreviousStep}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                    <button
<<<<<<< HEAD
=======
                      onClick={handlePreviousStep}
=======
<<<<<<< HEAD
                  <div className='flex justify-between pt-6'>
=======
                  <div className="flex justify-between pt-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    <button;
                    <button;
                      onClick={handlePreviousStep  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
=======
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
<div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Project Description
                    </label>
                    <textarea
                      rows={6}
                      className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'
                      placeholder='Describe your project goals, challenges, and specific requirements...'
                    />
                  </div>
                  <div className='flex justify-between pt-6'>
                    <button
                      onClick={handlePreviousStep}
                      className='px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300'
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                    >
                      Previous;
                    </button>
<<<<<<< HEAD:pages_backup/get-started.tsx
                    <button
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                      onClick={handleNextStep}
className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                      onClick={handleNextStep}
className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
=======
                    <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                    >
                      Next Step;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      )  } catch (error) {
    console.error("Error:", error);
=======

      )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Quick Start Options */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className="text-center mb-16"
=======
      {/* Quick Start Options */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
=======
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
      )}
      {/* Quick Start Options */}
<section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-center mb-16'
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
          >
=======


          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Start Options;
            </h2>"
            <p className="text-xl text-gray-400">Get started immediately with these quick options</p>
          </motion.div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartOptions.map((option, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {quickStartOptions.map((option, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {quickStartOptions.map((option, index) => (
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
              <motion.div

=======


              <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
        </section>)}
      {/* Quick Start Options */}'
      <section className='py - 20'>;'
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}'
            className='text - center mb - 16';
          >;'
            <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Quick Start Options;
            </h2>;'
            <p className='text - xl text - gray - 400'>;
              Get started immediately with these quick options;
            </p>;
          </motion.div>;'
          <div className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {quickStartOptions.map ((option, index) => (
              <motion.div;

                key={option.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

                className='group cursor - pointer';
              >;
                <div className='p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300'>;
                  <div className='flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                    {option.icon}
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 3 text - center'>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
className='group cursor-pointer'
              >
                <div className='p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300'>
                  <div className='flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {option.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                    {option.title}
                  </h3>;'
                  <p className='text - gray - 300 mb - 4 text - center leading - relaxed'>;
                    {option.description}
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

            transition={{ duration: 0 && 0.8 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Quick Start Options;
            </h2>;
            <p className='text-xl text-gray-400'>;
              Get started immediately with these quick options;
            </p>;
          </motion && motion.div>;
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>            {quickStartOptions && quickStartOptions.map((option, index) => (;
              <motion&& motion.div
                key={option && option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className='group cursor-pointer'>;
                <div className='p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300'>;
                  <div className='flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>;
                    {option && option.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>;
                    {option && option.title}
                  </h3>;
                  <p className='text-gray-300 mb-4 text-center leading-relaxed'>;
                    {option && option.description}
                  </p>;
                  <div className='text-center mb-4'>;
                    <span className='inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'>;
                      <Clock className='w-4 h-4' />;
                      {option && option.duration}
                    </span>;
                  </div>;


                  <button
                    className={`w-full py-3 px-4 bg-gradient-to-r ${option && option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>                    {option && option.action}
                  </button>;
                </div>;
              </motion && motion.div>;

<<<<<<< HEAD
=======
=======
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  
=======
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon  } catch (error) {
    console.error("Error:", error);
=======

              >"
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">"
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
=======

"
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{option.description}</p>
                  "
                  <div className="text-center mb-4">"
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">"
                      <Clock className="w-4 h-4" />
                      {option.duration}
                    </span>
                  </div>
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                  <button
                    className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}
                  >
                    {option.action}
<<<<<<< HEAD:pages/get-started.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
=======
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {option.action}
                  </button>
                </div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            ))}

          </div>;
        </div>;
      </section>;


      {/* Contact CTA */}'
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;'
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;'
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Ready to Begin Your Journey?;
            </h2>;'
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Our team of experts is ready to help you navigate the future of;'
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a'
                href='/contact''
                className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                Contact Our Team;'
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a'
                href='/quote'


      {/* Contact CTA */}"
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">"
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD:pages_backup/get-started.tsx
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
=======
          <motion.div;
          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
              Our team of experts is ready to help you navigate the future of technology. 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD

          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
<section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
              Let's discuss your project and create a roadmap to success.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD:pages_backup/get-started.tsx
              <a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                href="/contact"
=======
              <a"
                href="/contact""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Our Team"
                <ArrowRight className="w-5 h-5" />
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
              </a>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <a
                href="/quote"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
<<<<<<< HEAD
                Get a Quote
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                Get a Quote
<<<<<<< HEAD

=======
              </a>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <a
                href='/quote'
                className='inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Get a Quote
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              <a"
                href="/quote""
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >

                Get a Quote;
              </a>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            </div>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
)
),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


),



<<<<<<< HEAD:pages_backup/get-started.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


),


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
);
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8, delay: index * 0.1
}className= {
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {
  currentStep === step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
=======
}whileInView= {}
  {}
  opacity: 1, y: 0;
}transition= {}
  {}
  duration: 0.8, delay: index * 0.1;
}className= {}`
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {'
  currentStep === step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
}`
}> </motion.div>) )"
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) )
}</ul> </div> <div> <span key= {}
  useCase"
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm" > {}
  useCase;
}</span>) )"
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion.div>) )
<<<<<<< HEAD:pages_backup/get-started.tsx
}</div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion.div> </span> </div> <button className= {
<<<<<<< HEAD
<<<<<<< HEAD

  `w-full py-3 px-4 bg-gradient-to-r $ {
  option && option.color
}text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  `w-full py-3 px-4 bg-gradient-to-r $ {
  option && option.color 
=======
}</div> </div> </section>)'"
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>)"
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion.div> </span> </div> <button className= {}`
  `w-full py-3 px-4 bg-gradient-to-r $ {}
  option && option.color;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
}text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300` 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}> {;
  option && option.action ;
}</button> </div> </motion && motion.div>) ) ;
<<<<<<< HEAD:pages_backup/get-started.tsx
}</div> </div> </section> <motion&& motion.div initial= {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
  opacity: 0, y: 20
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD:pages/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

  duration: 0 && 0.8 
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion && motion.div> </div> </section> </div>) ;

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >;
=======
}</div> </div> </section> <motion&& motion.div initial= {}
  {}
  opacity: 0, y: 20;
}whileInView= {}
  {}
  opacity: 1, y: 0;
}transition= {}
  {}
          >;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
            <h2 className='text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Ready to Begin Your Journey?;
            </h2>;'
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Our team of experts is ready to help you navigate the future of;'
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;'
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;'
                href='/contact';'
                className='inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                Contact Our Team;'
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;'
                href='/quote';'
                className='inline - flex items - center gap - 2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - 2xl font - semibold hover:bg - cyan - 500 / 10 transition - all duration - 300'              >;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  duration: 0.8
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
                Get a Quote;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
<<<<<<< HEAD:pages_backup/get-started.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  duration: 0.8 

}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  duration: 0.8 

}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/get-started.tsx
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/get-started.tsx
