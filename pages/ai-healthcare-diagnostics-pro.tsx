<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
=======

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
<<<<<<< HEAD
import Head from 'next/head';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
import {motion} from 'framer-motion';
import {Stethoscope, Brain, Eye, Heart, Microscope, Shield, BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight, Cpu, Network, Database, Lock, Clock, DollarSign, PieChart, Activity, Zap, Pill, Syringe, Hospital, Ambulance,} from 'lucide-react';
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Stethoscope, Brain, Eye, Heart;
  Microscope, Shield, BarChart3;
  TrendingUp, Target, Users, CheckCircle;
  ArrowRight, Cpu, Network, Database;
=======
import { 
  Stethoscope, Brain, Eye, Heart, 
  Microscope, Shield, BarChart3, 
  TrendingUp, Target, Users, CheckCircle, 
  ArrowRight, Cpu, Network, Database, 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  Lock, Clock, DollarSign, PieChart;
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
 } from 'lucide-react';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD

const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [
    {
      icon: Brain
      title: 'Advanced AI Diagnostics'
      description:
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.'
      color: 'from-blue-500 to-cyan-500'
    }
    {
      icon: Eye
      title: 'Multi-Modal Imaging'
      description:
        'Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.'
      color: 'from-purple-500 to-pink-500'
    }
    {
      icon: Heart
      title: 'Predictive Analytics'
      description:
        'AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.'
      color: 'from-red-500 to-orange-500'
    }
    {
      icon: Shield
      title: 'HIPAA Compliant'
      description:
        'Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.'
      color: 'from-green-500 to-emerald-500'
    }
    {
      icon: BarChart3
      title: 'Real-time Monitoring'
      description:
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.'
      color: 'from-indigo-500 to-blue-500'
    }
    {
      icon: Zap
      title: 'Automated Workflows'
      description:
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.'
      color: 'from-yellow-500 to-orange-500'
    },  ];
  const useCases = [
    {
      icon: Microscope
      title: 'Radiology & Imaging'
      description:
        'AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.'
      benefits: [
        '95% accuracy rate'
        '80% faster diagnosis'
        'Reduced radiologist workload'
      ]
    }
    {
      icon: Heart
      title: 'Cardiology'
      description:
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.'
      benefits: [
        'Early disease detection'
        'Risk stratification'
        'Preventive care'
      ]
    }
    {
      icon: Brain
      title: 'Neurology'
      description:
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data."
      benefits: [
        'Early intervention'
        'Treatment planning'
        'Outcome prediction'
      ]
    }
    {
      icon: Microscope
      title: 'Pathology'
      description:
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.'
      benefits: [
        'Precision medicine'
        'Faster results'
        'Standardized analysis'
      ]
    },  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$4,999'
      period: '/month'
      description: 'Perfect for small clinics and practices'
      features: [
        'Up to 1,000 diagnostic scans/month'
        'Basic AI diagnostic models'
        'Standard reporting dashboard'
        'Email support'
        'HIPAA compliance'
        'API access (5,000 calls/month)'
      ]
      color: 'from-blue-500 to-cyan-500'
      popular: false
    }
    {
      name: 'Professional'
      price: '$12,999'
      period: '/month'
      description: 'Ideal for hospitals and medical centers'
      features: [
        'Up to 10,000 diagnostic scans/month'
        'Advanced AI diagnostic models'
        'Multi-modal imaging support'
        'Real-time monitoring & alerts'
        'Priority support'
        'API access (50,000 calls/month)'
        'Custom integrations'
        'Training & certification'
      ]
      color: 'from-purple-500 to-pink-500'
      popular: true
    }
    {
      name: 'Enterprise'
      price: '$29,999'
      period: '/month'
      description: 'For large healthcare networks'
      features: [
        'Unlimited diagnostic scans'
        'Custom AI model development'
        'Full multi-modal support'
        'Dedicated account manager'
        '24/7 phone support'
        'Unlimited API access'
        'White-label solutions'
        'On-premise deployment'
        'Custom compliance features'
      ]
      color: 'from-green-500 to-emerald-500'
      popular: false
    },  ];
  const integrations = [
    {
      name: 'PACS Systems'
      icon: Database
      description: 'DICOM integration with major PACS vendors'
      color: 'from-blue-500 to-cyan-500'
    }
    {
      name: 'EHR Platforms'
      icon: Database
      description: 'Epic, Cerner, Allscripts, athenahealth'
      color: 'from-green-500 to-emerald-500'
    }
    {
      name: 'LIS Systems'
      icon: Microscope
      description: 'Lab information systems integration'
      color: 'from-purple-500 to-pink-500'
    }
    {
      name: 'RIS Systems'
      icon: BarChart3
      description: 'Radiology information systems'
      color: 'from-orange-500 to-red-500'
    }
    {
      name: 'Medical Devices'
      icon: Stethoscope
      description: 'CT, MRI, X-ray, ultrasound machines'
      color: 'from-indigo-500 to-blue-500'
    }
    {
      name: 'Cloud Platforms'
      icon: Cpu
      description: 'AWS, Azure, Google Cloud, IBM Cloud'
      color: 'from-yellow-500 to-orange-500'
    },  ];
  const specialties = [
    {
      icon: Heart
      name: 'Cardiology'
      description:
        'Heart disease detection, ECG analysis, cardiovascular risk assessment'
      accuracy: '99.1%'
    }
    {
      icon: Brain
      name: 'Neurology'
      description:
        'Brain tumor detection, stroke diagnosis, neurological disorder analysis'
      accuracy: '98.9%'
    }
    {
      icon: Activity
      name: 'Pulmonology'
      description:
        'Lung cancer screening, pneumonia detection, respiratory disease analysis'
      accuracy: '99.3%'
    }
    {
      icon: Eye
      name: 'Ophthalmology'
      description:
        'Retinal disease detection, glaucoma screening, diabetic retinopathy'
      accuracy: '98.7%'
    }
    {
      icon: Shield
      name: 'Hepatology'
      description:
        'Liver disease detection, cirrhosis assessment, tumor identification'
      accuracy: '99.0%'
    }
    {
      icon: Microscope
      name: 'Nephrology'
      description:
        'Kidney disease detection, renal function analysis, transplant assessment'
      accuracy: '98.8%'
=======
const AIHealthcareDiagnosticsPro: React.FC = () => {;
  const features = [;
    {;
      icon: Brain,;
      title: 'Advanced AI Diagnostics',;
      description:;
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99 && 99.2% accuracy for early disease detection.',;
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;
      icon: Eye,;
      title: 'Multi-Modal Imaging',;
      description:;
        'Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',;
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      icon: Heart,;
      title: 'Predictive Analytics',;
      description:;
        'AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',;
      color: 'from-red-500 to-orange-500',;
    },;
    {;
      icon: Shield,;
      title: 'HIPAA Compliant',;
      description:;
        'Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.',;
      color: 'from-green-500 to-emerald-500',;
    },;
    {;
      icon: BarChart3,;
      title: 'Real-time Monitoring',;
      description:;
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',;
      color: 'from-indigo-500 to-blue-500',;
    },;
    {;
      icon: Zap,;
      title: 'Automated Workflows',;
      description:;
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',;
      color: 'from-yellow-500 to-orange-500',;
    },  ];
=======
=======
import Head from 'next / head';
import Layout from '../components / layout / Layout';
import {motion} from 'framer-motion';
import {Stethoscope, Brain, Eye, Heart, Microscope, Shield, BarChart3, TrendingUp, Target, Users, CheckCircle, ArrowRight, Cpu, Network, Database, Lock, Clock, DollarSign, PieChart, Activity, Zap, Pill, Syringe, Hospital, Ambulance, } from 'lucide-react';
import Link from 'next / link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [;
    {
      icon: Brain,
<<<<<<< HEAD
      title: "Advanced AI Diagnostics",
      description: "Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.";
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Eye,
      title: "Multi-Modal Imaging",
      description: "Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.";
      color: "from-purple-500 to-pink-500"
    };
    {
      icon: Heart,
      title: "Predictive Analytics",
      description: "AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.";
      color: "from-red-500 to-orange-500"
    };
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.";
      color: "from-green-500 to-emerald-500"
    };
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.",
      color: "from-indigo-500 to-blue-500"
    };
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.";
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      icon: Microscope,
      title: "Radiology & Imaging",
      description: "AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.";
      benefits: ["95% accuracy rate", "80% faster diagnosis", "Reduced radiologist workload"]
    };
    {
      icon: Heart,
      title: "Cardiology",
      description: "Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.";
      benefits: ["Early disease detection", "Risk stratification", "Preventive care"]
    };
    {
      icon: Brain,
      title: "Neurology",
      description: "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.";
      benefits: ["Early intervention", "Treatment planning", "Outcome prediction"]
    };
    {
      icon: Microscope,
      title: "Pathology",
      description: "Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.";
      benefits: ["Precision medicine", "Faster results", "Standardized analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,999";
      period: "/month",
      description: "Perfect for small clinics and practices",
      features: [
        "Up to 1,000 diagnostic scans/month";
        "Basic AI diagnostic models";
        "Standard reporting dashboard";
        "Email support";
        "HIPAA compliance";
        "API access (5,000 calls/month)"
      ];
      color: "from-blue-500 to-cyan-500",
      popular: false
    };
    {
      name: "Professional",
      price: "$12,999";
      period: "/month",
      description: "Ideal for hospitals and medical centers",
      features: [
        "Up to 10,000 diagnostic scans/month";
        "Advanced AI diagnostic models";
        "Multi-modal imaging support";
        "Real-time monitoring & alerts";
        "Priority support";
        "API access (50,000 calls/month)";
        "Custom integrations";
        "Training & certification"
      ];
      color: "from-purple-500 to-pink-500",
      popular: true
    };
    {
      name: "Enterprise",
      price: "$29,999";
      period: "/month",
      description: "For large healthcare networks",
      features: [
        "Unlimited diagnostic scans";
        "Custom AI model development";
        "Full multi-modal support";
        "Dedicated account manager";
        "24/7 phone support";
        "Unlimited API access";
        "White-label solutions";
        "On-premise deployment";
        "Custom compliance features"
      ];
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const integrations = [
=======
      title: 'Advanced AI Diagnostics',
      description:;
        'Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.',
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      icon: Eye,
      title: 'Multi - Modal Imaging',
      description:;
        'Process X - rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.',
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      icon: Heart,
      title: 'Predictive Analytics',
      description:;
        'AI - powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.',
      color: 'from - red - 500 to - orange - 500',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description:;
        'Enterprise - grade security with end - to - end encryption, audit trails, and compliance with healthcare data regulations.',
      color: 'from - green - 500 to - emerald - 500',
    },
    {
      icon: BarChart3,
      title: 'Real - time Monitoring',
      description:;
        'Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.',
      color: 'from - indigo - 500 to - blue - 500',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description:;
        'Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.',
      color: 'from - yellow - 500 to - orange - 500',
    },  ];
;
  const use_cases = [;
    {
      icon: Microscope,
      title: 'Radiology & Imaging',
      description:;
        'AI - powered analysis of X - rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.',
      benefits: [;
        '95% accuracy rate',
        '80% faster diagnosis',
        'Reduced radiologist workload',
      ],
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description:;
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.',
      benefits: [;
        'Early disease detection',
        'Risk stratification',
        'Preventive care',
      ],
    },
    {
      icon: Brain,
      title: 'Neurology',
      description:;
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: [;
        'Early intervention',
        'Treatment planning',
        'Outcome prediction',
      ],
    },
    {
      icon: Microscope,
      title: 'Pathology',
      description:;
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.',
      benefits: [;
        'Precision medicine',
        'Faster results',
        'Standardized analysis',
      ],
    },  ];
;
  const pricing_plans = [;
    {
      name: 'Starter',
      price: '$4, 999',
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features: [;
        'Up to 1, 000 diagnostic scans / month',
        'Basic AI diagnostic models',
        'Standard reporting dashboard',
        'Email support',
        'HIPAA compliance',
        'API access (5, 000 calls / month)',
      ],
      color: 'from - blue - 500 to - cyan - 500',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$12, 999',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [;
        'Up to 10, 000 diagnostic scans / month',
        'Advanced AI diagnostic models',
        'Multi - modal imaging support',
        'Real - time monitoring & alerts',
        'Priority support',
        'API access (50, 000 calls / month)',
        'Custom integrations',
        'Training & certification',
      ],
      color: 'from - purple - 500 to - pink - 500',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$29, 999',
      period: '/month',
      description: 'For large healthcare networks',
      features: [;
        'Unlimited diagnostic scans',
        'Custom AI model development',
        'Full multi - modal support',
        'Dedicated account manager',
        '24 / 7 phone support',
        'Unlimited API access',
        'White - label solutions',
        'On - premise deployment',
        'Custom compliance features',
      ],
      color: 'from - green - 500 to - emerald - 500',
      popular: false,
    },  ];
;
  const integrations = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "PACS Systems",
      icon: Database,
<<<<<<< HEAD
      description: "DICOM integration with major PACS vendors",
      color: "from-blue-500 to-cyan-500"
    };
=======
      description: 'DICOM integration with major PACS vendors',
      color: 'from - blue - 500 to - cyan - 500',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "EHR Platforms",
      icon: Database,
<<<<<<< HEAD
      description: "Epic, Cerner, Allscripts, athenahealth";
      color: "from-green-500 to-emerald-500"
    };
=======
      description: 'Epic, Cerner, Allscripts, athenahealth',
      color: 'from - green - 500 to - emerald - 500',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "LIS Systems",
      icon: Microscope,
<<<<<<< HEAD
      description: "Lab information systems integration",
      color: "from-purple-500 to-pink-500"
    };
=======
      description: 'Lab information systems integration',
      color: 'from - purple - 500 to - pink - 500',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "RIS Systems",
      icon: BarChart3,
<<<<<<< HEAD
      description: "Radiology information systems",
      color: "from-orange-500 to-red-500"
    };
=======
      description: 'Radiology information systems',
      color: 'from - orange - 500 to - red - 500',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "Medical Devices",
      icon: Stethoscope,
<<<<<<< HEAD
      description: "CT, MRI, X-ray, ultrasound machines";
      color: "from-indigo-500 to-blue-500"
    };
=======
      description: 'CT, MRI, X - ray, ultrasound machines',
      color: 'from - indigo - 500 to - blue - 500',
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: "Cloud Platforms",
      icon: Cpu,
<<<<<<< HEAD
      description: "AWS, Azure, Google Cloud, IBM Cloud";
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const specialties = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Heart disease detection, ECG analysis, cardiovascular risk assessment";
      accuracy: "99.1%"
    };
    {
      icon: Brain,
      name: "Neurology",
      description: "Brain tumor detection, stroke diagnosis, neurological disorder analysis";
      accuracy: "98.9%"
    };
    {
      icon: Activity,
      name: "Pulmonology",
      description: "Lung cancer screening, pneumonia detection, respiratory disease analysis";
      accuracy: "99.3%"
    };
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Retinal disease detection, glaucoma screening, diabetic retinopathy";
      accuracy: "98.7%"
    };
    {
      icon: Shield,
      name: "Hepatology",
      description: "Liver disease detection, cirrhosis assessment, tumor identification";
      accuracy: "99.0%"
    };
    {
      icon: Microscope,
      name: "Nephrology",
      description: "Kidney disease detection, renal function analysis, transplant assessment";
      accuracy: "98.8%"
    }
  ];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  const useCases = [;
    {;
      icon: Microscope,;
      title: 'Radiology & Imaging',;
      description:;
        'AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.',;
      benefits: [;
        '95% accuracy rate',;
        '80% faster diagnosis',;
        'Reduced radiologist workload',;
      ],;
    },;
    {;
      icon: Heart,;
      title: 'Cardiology',;
      description:;
        'Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.',;
      benefits: [;
        'Early disease detection',;
        'Risk stratification',;
        'Preventive care',;
      ],;
    },;
    {;
      icon: Brain,;
      title: 'Neurology',;
      description:;
        "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",;
      benefits: [;
        'Early intervention',;
        'Treatment planning',;
        'Outcome prediction',;
      ],;
    },;
    {;
      icon: Microscope,;
      title: 'Pathology',;
      description:;
        'Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.',;
      benefits: [;
        'Precision medicine',;
        'Faster results',;
        'Standardized analysis',;
      ],;
    },  ];

  const pricingPlans = [;
    {;
      name: 'Starter',;
      price: '$4,999',;
      period: '/month',;
      description: 'Perfect for small clinics and practices',;
      features: [;
        'Up to 1,000 diagnostic scans/month',;
        'Basic AI diagnostic models',;
        'Standard reporting dashboard',;
        'Email support',;
        'HIPAA compliance',;
        'API access (5,000 calls/month)',;
      ],;
      color: 'from-blue-500 to-cyan-500',;
      popular: false,;
    },;
    {;
      name: 'Professional',;
      price: '$12,999',;
      period: '/month',;
      description: 'Ideal for hospitals and medical centers',;
      features: [;
        'Up to 10,000 diagnostic scans/month',;
        'Advanced AI diagnostic models',;
        'Multi-modal imaging support',;
        'Real-time monitoring & alerts',;
        'Priority support',;
        'API access (50,000 calls/month)',;
        'Custom integrations',;
        'Training & certification',;
      ],;
      color: 'from-purple-500 to-pink-500',;
      popular: true,;
    },;
    {;
      name: 'Enterprise',;
      price: '$29,999',;
      period: '/month',;
      description: 'For large healthcare networks',;
      features: [;
        'Unlimited diagnostic scans',;
        'Custom AI model development',;
        'Full multi-modal support',;
        'Dedicated account manager',;
        '24/7 phone support',;
        'Unlimited API access',;
        'White-label solutions',;
        'On-premise deployment',;
        'Custom compliance features',;
      ],;
      color: 'from-green-500 to-emerald-500',;
      popular: false,;
    },  ];

  const integrations = [;
    {;
      name: 'PACS Systems',;
      icon: Database,;
      description: 'DICOM integration with major PACS vendors',;
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;
      name: 'EHR Platforms',;
      icon: Database,;
      description: 'Epic, Cerner, Allscripts, athenahealth',;
      color: 'from-green-500 to-emerald-500',;
    },;
    {;
      name: 'LIS Systems',;
      icon: Microscope,;
      description: 'Lab information systems integration',;
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      name: 'RIS Systems',;
      icon: BarChart3,;
      description: 'Radiology information systems',;
      color: 'from-orange-500 to-red-500',;
    },;
    {;
      name: 'Medical Devices',;
      icon: Stethoscope,;
      description: 'CT, MRI, X-ray, ultrasound machines',;
      color: 'from-indigo-500 to-blue-500',;
    },;
    {;
      name: 'Cloud Platforms',;
      icon: Cpu,;
      description: 'AWS, Azure, Google Cloud, IBM Cloud',;
      color: 'from-yellow-500 to-orange-500',;
    },  ];

  const specialties = [;
    {;
      icon: Heart,;
      name: 'Cardiology',;
      description:;
        'Heart disease detection, ECG analysis, cardiovascular risk assessment',;
      accuracy: '99 && 99.1%',;
    },;
    {;
      icon: Brain,;
      name: 'Neurology',;
      description:;
        'Brain tumor detection, stroke diagnosis, neurological disorder analysis',;
      accuracy: '98 && 98.9%',;
    },;
    {;
      icon: Activity,;
      name: 'Pulmonology',;
      description:;
        'Lung cancer screening, pneumonia detection, respiratory disease analysis',;
      accuracy: '99 && 99.3%',;
    },;
    {;
      icon: Eye,;
      name: 'Ophthalmology',;
      description:;
        'Retinal disease detection, glaucoma screening, diabetic retinopathy',;
      accuracy: '98 && 98.7%',;
    },;
    {;
      icon: Shield,;
      name: 'Hepatology',;
      description:;
        'Liver disease detection, cirrhosis assessment, tumor identification',;
      accuracy: '99 && 99.0%',;
    },;
    {;
      icon: Microscope,;
      name: 'Nephrology',;
      description:;
        'Kidney disease detection, renal function analysis, transplant assessment',;
      accuracy: '98 && 98.8%',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    },  ];
  return (
<<<<<<< HEAD
    <Layout>;
      <Head>;
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>;
        <meta
          name='description'
          content='Revolutionize healthcare with AI-powered diagnostics. Achieve 99 && 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform.'
        />;
        <meta
          name='keywords'
          content='AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy'
        />;
        <meta
          property='og:title'
          content='AI Healthcare Diagnostics Pro - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Revolutionize healthcare with AI-powered diagnostics. Achieve 99 && 99.2% accuracy in disease detection and reduce diagnosis time by 80%.'
        />;
        <meta property='og:type' content='website' />;
        <meta
          property='og:url'
          content='https://ziontechgroup && ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />;
        <link
          rel='canonical'
<<<<<<< HEAD
          href='https://ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />
      </Head>
=======
          href='https://ziontechgroup && ziontechgroup.com/ai-healthcare-diagnostics-pro'
        />;
      </Head>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>;
        {/* Background Effects */}
<<<<<<< HEAD
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]'></div>
        {/* Floating Elements */}
        <div className='absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse'></div>
        <div className='absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <div className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6'>
              <Brain className='w-4 h-4' />
              <span>AI-Powered Healthcare</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                AI Healthcare
              </span>
              <br />
              <span className='text-white'>Diagnostics Pro</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Transform healthcare delivery with the world's most advanced AI
              diagnostic platform. Achieve 99.2% accuracy in disease detection
              reduce diagnosis time by 80%, and save countless lives through
              early intervention.
            </p>
=======
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'></div>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0 && 0.15),transparent_50%)]'></div>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.1),transparent_50%)]'></div>;

        {/* Floating Elements */}
        <div className='absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse'></div>;
        <div className='absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000'></div>;
        <div className='absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500'></div>;

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <div className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6'>;
              <Brain className='w-4 h-4' />;
              <span>AI-Powered Healthcare</span>;
            </div>;
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>;
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>;
                AI Healthcare;
              </span>;
              <br />;
              <span className='text-white'>Diagnostics Pro</span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Transform healthcare delivery with the world's most advanced AI;
              diagnostic platform. Achieve 99 && 99.2% accuracy in disease detection,;
              reduce diagnosis time by 80%, and save countless lives through;
              early intervention.;
            </p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* Key Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm'>;
                <div className='text-3xl font-bold text-green-400 mb-2'>;
                  99 && 99.2%;
                </div>;
                <div className='text-gray-300'>Diagnostic Accuracy</div>              </motion && motion.div>;
              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
                className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm'>;
                <div className='text-3xl font-bold text-cyan-400 mb-2'>80%</div>;
                <div className='text-gray-300'>Faster Diagnosis</div>              </motion && motion.div>;
              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
<<<<<<< HEAD
                animate={{ opacity: 1, scale: 1 }}
=======
=======
      description: 'AWS, Azure, Google Cloud, IBM Cloud',
      color: 'from - yellow - 500 to - orange - 500',
    },  ];
;
  const specialties = [;
    {
      icon: Heart,
      name: 'Cardiology',
      description:;
        'Heart disease detection, ECG analysis, cardiovascular risk assessment',
      accuracy: '99.1%',
    },
    {
      icon: Brain,
      name: 'Neurology',
      description:;
        'Brain tumor detection, stroke diagnosis, neurological disorder analysis',
      accuracy: '98.9%',
    },
    {
      icon: Activity,
      name: 'Pulmonology',
      description:;
        'Lung cancer screening, pneumonia detection, respiratory disease analysis',
      accuracy: '99.3%',
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description:;
        'Retinal disease detection, glaucoma screening, diabetic retinopathy',
      accuracy: '98.7%',
    },
    {
      icon: Shield,
      name: 'Hepatology',
      description:;
        'Liver disease detection, cirrhosis assessment, tumor identification',
      accuracy: '99.0%',
    },
    {
      icon: Microscope,
      name: 'Nephrology',
      description:;
        'Kidney disease detection, renal function analysis, transplant assessment',
      accuracy: '98.8%',
    },  ];
;
  return (
    <Layout>;
      <Head>;
        <title > AI Healthcare Diagnostics Pro - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Revolutionize healthcare with AI - powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform.';
        />;
        <meta;
          name='keywords';
          content='AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy';
        />;
        <meta;
          property='og:title';
          content='AI Healthcare Diagnostics Pro - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Revolutionize healthcare with AI - powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%.';
        />;
        <meta property='og:type' content='website' />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / ai - healthcare - diagnostics - pro';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ai - healthcare - diagnostics - pro';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden bg - black'>;
        {/* Background Effects */}
        <div className='absolute inset - 0 bg - gradient - to - br from - gray - 900 via - black to - gray - 900'></div>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (56, 189, 248, 0.15), transparent_50%)]'></div>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (139, 92, 246, 0.1), transparent_50%)]'></div>;
        {/* Floating Elements */}
        <div className='absolute top - 20 left - 20 w - 2 h - 2 bg - cyan - 400 rounded - full opacity - 60 animate - pulse'></div>;
        <div className='absolute bottom - 32 right - 16 w - 3 h - 3 bg - purple - 400 rounded - full opacity - 60 animate - pulse delay - 1000'></div>;
        <div className='absolute top - 1/2 left - 1/4 w - 1 h - 1 bg - green - 400 rounded - full opacity - 80 animate - pulse delay - 500'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <div className='inline - flex items - center space - x-2 px - 4 py - 2 bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 border border - green - 500 / 30 rounded - full text - green - 400 text - sm font - medium mb - 6'>;
              <Brain className='w - 4 h - 4' />;
              <span > AI - Powered Healthcare</span>;
            </div>;
            <h1 className='text - 5xl md:text - 7xl font - bold text - white mb - 6 leading - tight'>;
              <span className='bg - gradient - to - r from - green - 400 via - emerald - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                AI Healthcare;
              </span>;
              <br />;
              <span className='text - white'>Diagnostics Pro</span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;
              Transform healthcare delivery with the world's most advanced AI;
              diagnostic platform. Achieve 99.2% accuracy in disease detection,
              reduce diagnosis time by 80%, and save countless lives through;
              early intervention.;
            </p>;
            {/* Key Metrics */}
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 12 max - w-4xl mx - auto'>              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 border border - green - 500 / 30 rounded - 2xl p - 6 backdrop - blur - sm';
              >;
                <div className='text - 3xl font - bold text - green - 400 mb - 2'>;
                  99.2%;
                </div>;
                <div className='text - gray - 300'>Diagnostic Accuracy</div>              </motion.div>;
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 border border - cyan - 500 / 30 rounded - 2xl p - 6 backdrop - blur - sm';
              >;
                <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>80%</div>;
                <div className='text - gray - 300'>Faster Diagnosis</div>              </motion.div>;
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
                transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
                className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm'
              >
                <div className='text-3xl font-bold text-purple-400 mb-2'>
                  24/7
                </div>
                <div className='text-gray-300'>Continuous Monitoring</div>              </motion.div>
=======
    <Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy" />
        <meta property="og:title" content="AI Healthcare Diagnostics Pro - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Healthcare
              </span>
              <br />
              <span className="text-white">Diagnostics Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
                className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm'>;
                <div className='text-3xl font-bold text-purple-400 mb-2'>;
                  24/7;
                </div>;
                <div className='text-gray-300'>Continuous Monitoring</div>              </motion && motion.div>;
            </div>;

<<<<<<< HEAD
            {/* CTA Buttons */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* CTA Buttons */}
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>              <motion&& motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.8 }}
                className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>;
                Schedule Demo;
              </motion && motion.button>;
              <motion&& motion.button
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
=======
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Schedule Demo
              </motion.button>
              <motion.button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.6, delay: 1.0 }}
<<<<<<< HEAD
                className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'              >
=======
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                transition={{ duration: 0 && 0.6, delay: 1 && 1.0 }}
                className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>;
                Contact Sales;
              </motion && motion.button>;
            </div>;
          </motion && motion.div>;
        </div>;
<<<<<<< HEAD

      {/* Features Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.05),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
=======
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Features Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.05),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Powered by{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                Advanced AI
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform combines cutting-edge artificial intelligence with
              deep medical expertise to deliver unprecedented diagnostic
              accuracy and speed.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features.map((feature, index) => (
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with deep medical expertise to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div
=======
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Advanced AI;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our platform combines cutting-edge artificial intelligence with;
              deep medical expertise to deliver unprecedented diagnostic;
              accuracy and speed.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (;
              <motion&& motion.div
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group'>;
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature && feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <feature && feature.icon className='w-8 h-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-4'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {feature && feature.description}
                </p>              </motion && motion.div>;
<<<<<<< HEAD
            ))}
          </div>;
        </div>;

      {/* Medical Specialties Section */}
      <section className='py-20 bg-black relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
=======
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
<<<<<<< HEAD
          </div>
        </div>
<<<<<<< HEAD
=======
          </div>;
        </div>;
=======
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Medical Specialties Section */}
<<<<<<< HEAD
      <section className='py-20 bg-black relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Medical{' '}
=======
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Medical{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Specialties
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our AI platform covers all major medical specialties with
              specialized models trained on millions of cases for maximum
              accuracy.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• X-ray analysis</li>
              <li>• CT scan interpretation</li>
              <li>• MRI diagnostics</li>
              <li>• Ultrasound imaging</li>
            </ul>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {specialties.map((specialty, index) => (
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Specialties;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
<<<<<<< HEAD
=======
=======
                className='bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 border border - purple - 500 / 30 rounded - 2xl p - 6 backdrop - blur - sm';
              >;
                <div className='text - 3xl font - bold text - purple - 400 mb - 2'>;
                  24 / 7;
                </div>;
                <div className='text - gray - 300'>Continuous Monitoring</div>              </motion.div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>              <motion.button;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 text - white font - semibold rounded - xl hover:from - green - 600 hover:to - emerald - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - green - 500 / 25'              >;
                Schedule Demo;
              </motion.button>;
              <motion.button;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='px - 8 py - 4 border border - green - 500 / 50 text - green - 400 font - semibold rounded - xl hover:bg - green - 500 / 10 transition - all duration - 300'              >;
                Contact Sales;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      {/* Features Section */}
      <section className='py - 20 bg - gray - 900 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (56, 189, 248, 0.05), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Powered by{' '}
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Advanced AI;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Our platform combines cutting - edge artificial intelligence with;
              deep medical expertise to deliver unprecedented diagnostic;
              accuracy and speed.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 8 backdrop - blur - sm hover:border - green - 500 / 30 transition - all duration - 300 group';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - r ${feature.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <feature.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 4'>;
                  {feature.title}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {feature.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      {/* Medical Specialties Section */}
      <section className='py - 20 bg - black relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (139, 92, 246, 0.08), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Medical{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Specialties;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Our AI platform covers all major medical specialties with;
              specialized models trained on millions of cases for maximum;
              accuracy.;
            </p>;
<<<<<<< HEAD
            <ul className="text-sm text-gray-500 space-y-2">;
              <li>• X-ray analysis</li>;
=======
<<<<<<< HEAD
            <ul className="text-sm text-gray-500 space-y-2">;
              <li>• X-ray analysis</li>;
=======
            <ul className="text - sm text - gray - 500 space - y-2">;
              <li>• X - ray analysis</li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <li>• CT scan interpretation</li>;
              <li>• MRI diagnostics</li>;
              <li>• Ultrasound imaging</li>;
            </ul>;
          </div>;
<<<<<<< HEAD

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {specialties && specialties.map((specialty, index) => (;
              <motion&& motion.div
=======
<<<<<<< HEAD

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {specialties && specialties.map((specialty, index) => (;
              <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300'>;
                <div className='flex items-center justify-between mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center'>;
                    <specialty && specialty.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <div className='text-right'>;
                    <div className='text-2xl font-bold text-green-400'>;
                      {specialty && specialty.accuracy}
                    </div>;
                    <div className='text-sm text-gray-400'>Accuracy</div>;
                  </div>;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-3'>;
                  {specialty && specialty.name}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {specialty && specialty.description}
                </p>              </motion && motion.div>;
<<<<<<< HEAD
            ))}
          </div>;
        </div>;

      {/* Use Cases Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0 && 0.06),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
=======
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{specialty.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{specialty.name}</h3>
                <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
<<<<<<< HEAD
          </div>
        </div>
<<<<<<< HEAD
=======
          </div>;
        </div>;
=======
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0 && 0.06),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
=======
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Transform Your{' '}
=======
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Transform Your{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                Practice
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From radiology to pathology, our AI platform adapts to your
              specific medical specialty and workflow requirements.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases.map((useCase, index) => (
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Practice;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From radiology to pathology, our AI platform adapts to your;
              specific medical specialty and workflow requirements.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm'>;
                <div className='flex items-start space-x-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0'>;
                    <useCase && useCase.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <div className='flex-1'>;
                    <h3 className='text-2xl font-semibold text-white mb-3'>;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-300 mb-4 leading-relaxed'>;
                      {useCase && useCase.description}
                    </p>;
                    <div className='space-y-2'>;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div
                          key={benefitIndex}
                          className='flex items-center space-x-2 text-sm'>;
                          <CheckCircle className='w-4 h-4 text-green-400' />;
                          <span className='text-gray-300'>{benefit}</span>                        </div>;
<<<<<<< HEAD
=======
=======
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      ))}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Pricing Section */}
      <section className='py-20 bg-black relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.05),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
<<<<<<< HEAD
=======
=======

      {/* Pricing Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Choose Your{' '}
=======
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Choose Your{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
                Plan
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed to scale with your healthcare
              practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Plan;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed to scale with your healthcare;
              practice. Start with our Starter plan and upgrade as you grow.;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  plan && plan.popular
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25'                    : 'border-gray-700/50'
                }`}>;
                {plan && plan.popular && (;
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                    <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium'>                      Most Popular;
                    </div>;
                  </div>;
                )}
<<<<<<< HEAD
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
=======
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {specialties.map ((specialty, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 8 backdrop - blur - sm hover:border - purple - 500 / 30 transition - all duration - 300';
              >;
                <div className='flex items - center justify - between mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - 2xl flex items - center justify - center'>;
                    <specialty.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <div className='text - right'>;
                    <div className='text - 2xl font - bold text - green - 400'>;
                      {specialty.accuracy}
                    </div>;
                    <div className='text - sm text - gray - 400'>Accuracy</div>;
                  </div>;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 3'>;
                  {specialty.name}
                </h3>;
                <p className='text - gray - 300 leading - relaxed'>;
                  {specialty.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      {/* Use Cases Section */}
      <section className='py - 20 bg - gray - 900 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (236, 73, 153, 0.06), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Transform Your{' '}
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Practice;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              From radiology to pathology, our AI platform adapts to your;
              specific medical specialty and workflow requirements.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>            {use_cases.map ((use_case, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 8 backdrop - blur - sm';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - 2xl flex items - center justify - center flex - shrink - 0'>;
                    <use_case.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <div className='flex - 1'>;
                    <h3 className='text - 2xl font - semibold text - white mb - 3'>;
                      {use_case.title}
                    </h3>;
                    <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                      {use_case.description}
                    </p>;
                    <div className='space - y-2'>;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div;
                          key={benefit_index}
                          className='flex items - center space - x-2 text - sm';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - green - 400' />;
                          <span className='text - gray - 300'>{benefit}</span>                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className='py - 20 bg - black relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (56, 189, 248, 0.05), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Choose Your{' '}
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Plan;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Flexible pricing options designed to scale with your healthcare;
              practice. Start with our Starter plan and upgrade as you grow.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border rounded - 2xl p - 8 backdrop - blur - sm ${
                  plan.popular;
                    ? 'border - green - 500 / 50 shadow - lg shadow - green - 500 / 25'                    : 'border - gray - 700 / 50';
                }`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <div className='bg - gradient - to - r from - green - 500 to - emerald - 600 text - white px - 4 py - 2 rounded - full text - sm font - medium'>                      Most Popular;
                    </div>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {plan.name}
                  </h3>;
                  <div className='flex items - baseline justify - center space - x-1 mb - 2'>;
                    <span className='text - 4xl font - bold text - white'>;
                      {plan.price}
<<<<<<< HEAD
                    </span>
                    <span className='text-gray-400'>{plan.period}</span>
                  </div>
                  <p className='text-gray-300'>{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
=======

                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='flex items-baseline justify-center space-x-1 mb-2'>;
                    <span className='text-4xl font-bold text-white'>;
                      {plan && plan.price}
                    </span>;
                    <span className='text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-300'>{plan && plan.description}</p>;
                </div>;

                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3'>;
                      <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />;
                      <span className='text-gray-300'>{feature}</span>                    </li>;
<<<<<<< HEAD
=======
                  ))}
<<<<<<< HEAD
                </ul>
=======
                </ul>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan && plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>                  Get Started;
                </button>;
              </motion && motion.div>;
=======
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}
                </ul>

<<<<<<< HEAD
                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan && plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>                  Get Started;
                </button>;
              </motion && motion.div>;
=======
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Integrations Section */}
      <section className='py-20 bg-gray-900 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0 && 0.08),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div
<<<<<<< HEAD
=======
=======

      {/* Integrations Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Seamless{' '}
=======
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Seamless{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Integrations
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Connect with your existing healthcare systems and workflows. Our
              platform integrates with all major EHR, PACS, and medical device
              platforms.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {integrations.map((integration, index) => (
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing healthcare systems and workflows. Our platform integrates with all major EHR, PACS, and medical device platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>;
                Integrations;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
<<<<<<< HEAD
=======
=======
                    </span>;
                    <span className='text - gray - 400'>{plan.period}</span>;
                  </div>;
                  <p className='text - gray - 300'>{plan.description}</p>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center space - x-3';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - green - 400 flex - shrink - 0' />;
                      <span className='text - gray - 300'>{feature}</span>                    </li>))}
                </ul>;
                <button;
                  className={`w - full py - 3 px - 6 bg - gradient - to - r ${plan.color} text - white font - semibold rounded - xl hover:opacity - 90 transition - all duration - 300 transform hover:scale - 105`}
                >                  Get Started;
                </button>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py - 20 bg - gray - 900 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (139, 92, 246, 0.08), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Seamless{' '}
              <span className='bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                Integrations;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Connect with your existing healthcare systems and workflows. Our;
              platform integrates with all major EHR, PACS, and medical device;
              platforms.;
            </p>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {integrations && integrations.map((integration, index) => (;
              <motion&& motion.div
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300'>;
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${integration && integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>;
                  <integration && integration.icon className='w-8 h-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  {integration && integration.description}
                </p>              </motion && motion.div>;
<<<<<<< HEAD
=======
=======
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0 && 0.1),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to{' '}
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Transform;
              </span>{' '}
<<<<<<< HEAD
              Healthcare?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join leading healthcare institutions worldwide who have already
              revolutionized patient care with AI-powered diagnostics.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>
                Schedule Demo
              </button>
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>
                Contact Sales
              </button>
            </div>
            <div className='mt-8 text-sm text-gray-400'>
              <p>
=======
              Healthcare?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join leading healthcare institutions worldwide who have already;
              revolutionized patient care with AI-powered diagnostics.;
            </p>;

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>;
                Schedule Demo;
              </button>;
              <button className='px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300'>;
                Contact Sales;
              </button>;
            </div>;

            <div className='mt-8 text-sm text-gray-400'>;
              <p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                Questions? Call us at{' '}
                <a
                  href='tel:+13024640950'
                  className='text-green-400 hover:text-green-300'>;
                  +1 302 464 0950;
                </a>{' '}
                or email{' '}
                <a
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  href='mailto: kleber@ziontechgroup.com'
                  className='text-green-400 hover:text-green-300'
                >
                  kleber@ziontechgroup.com
                </a>
              </p>            </div>
=======

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  href='mailto: kleber@ziontechgroup && ziontechgroup.com'
                  className='text-green-400 hover:text-green-300'>;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
  ),;
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default AIHealthcareDiagnosticsPro;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {integrations.map ((integration, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - gray - 700 / 50 rounded - 2xl p - 6 backdrop - blur - sm text - center hover:border - green - 500 / 30 transition - all duration - 300';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - r ${integration.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4`}
                >;
                  <integration.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  {integration.name}
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  {integration.description}
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - green - 900 / 20 via - emerald - 900 / 20 to - cyan - 900 / 20 relative overflow - hidden'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (56, 189, 248, 0.1), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Transform;
              </span>{' '}
              Healthcare?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Join leading healthcare institutions worldwide who have already;
              revolutionized patient care with AI - powered diagnostics.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 text - white font - semibold rounded - xl hover:from - green - 600 hover:to - emerald - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - green - 500 / 25'>;
                Schedule Demo;
              </button>;
              <button className='px - 8 py - 4 border border - green - 500 / 50 text - green - 400 font - semibold rounded - xl hover:bg - green - 500 / 10 transition - all duration - 300'>;
                Contact Sales;
              </button>;
            </div>;
            <div className='mt - 8 text - sm text - gray - 400'>;
              <p>;
                Questions? Call us at{' '}
                <a;
                  href='tel:+13024640950';
                  className='text - green - 400 hover:text - green - 300';
                >;
                  +1 302 464 0950;
                </a>{' '}
                or email{' '}
                <a;
                  href='mailto: kleber@ziontechgroup.com';
                  className='text - green - 400 hover:text - green - 300';
                >;
                  kleber@ziontechgroup.com;
                </a>;
              </p>            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>),
}
;
export default AIHealthcareDiagnosticsPro;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
