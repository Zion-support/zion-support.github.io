

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
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

  Settings,;
  Code,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';

export default function CloudMonitoringPage() {
  const features = [
    {;
      icon: <Activity className='w-8 h-8 text-white' />,import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from 'lucide-react';
    {
      icon: <Activity className='w-8 h-8 text-white' />,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function CloudMonitoringPage() {
  const features = [
    {
      icon: <Activity className='w-8 h-8 text-white' />
      description:
        'Monitor your entire infrastructure in real-time with sub-second latency and instant alerting.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Advanced Analytics'
      description:
        'Deep insights into performance metrics, resource utilization, and business intelligence.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <AlertTriangle className='w-8 h-8 text-white' />
      title: 'Smart Alerting'
      description:
        'AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.'
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
      gradient: 'from-red-400 to-pink-500'
    }
    {
      icon: <Database className='w-8 h-8 text-white' />
      title: 'Multi-Cloud Support'
      description:
        'Monitor AWS, Azure, Google Cloud, and on-premises infrastructure from a single dashboard.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <Shield className='w-8 h-8 text-white' />
      title: 'Security Monitoring'
      description:
        'Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.'
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
      gradient: 'from-yellow-400 to-orange-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Auto-scaling'
      description:

import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from 'lucide-react';
=======

        'Intelligent auto-scaling based on real-time metrics and predictive analytics.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500',
    },;
  ];




export default function CloudMonitoringPage() {
  const features = [
    {

  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$49'
      period: '/month'
      description: 'Perfect for small teams and startups'
      features: [

        'Up to 10 serversBasic monitoringEmail alerts7-day data retentionCommunity supportMobile app access'
      ];
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    };
    {
=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Activity,
  BarChart3,
  AlertTriangle,
  Clock,
  Database,
  Globe,
  Lock,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Server,
  Cloud,
  Eye,
  Bell,
  Settings,
  Code,
} from 'lucide-react';
export default /**
 * CloudMonitoringPage - Function description
 */
function CloudMonitoringPage() {
  const features = [;
    {
      icon: <Activity className='w - 8 h - 8 text - white' />, import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from 'lucide-react';
export default /**
 * CloudMonitoringPage - Function description
 */
function CloudMonitoringPage() {
  const features = [;
    {
      icon: <Activity className='w - 8 h - 8 text - white' />,
      description:;
        'Monitor your entire infrastructure in real - time with sub - second latency and instant alerting.',
      color: 'bg - gradient - to - br from - green - 500 to - emerald - 600',
      gradient: 'from - green - 400 to - emerald - 500',
    },
    {
      icon: <BarChart3 className='w - 8 h - 8 text - white' />,
      title: 'Advanced Analytics',
      description:;
        'Deep insights into performance metrics, resource utilization, and business intelligence.',
      color: 'bg - gradient - to - br from - blue - 500 to - cyan - 600',
      gradient: 'from - blue - 400 to - cyan - 500',
    },
    {
      icon: <AlertTriangle className='w - 8 h - 8 text - white' />,
      title: 'Smart Alerting',
      description:;
        'AI - powered anomaly detection and intelligent alerting to prevent issues before they impact users.',
      color: 'bg - gradient - to - br from - red - 500 to - pink - 600',
      gradient: 'from - red - 400 to - pink - 500',
    },
    {
      icon: <Database className='w - 8 h - 8 text - white' />,
      title: 'Multi - Cloud Support',
      description:;
        'Monitor AWS, Azure, Google Cloud, and on - premises infrastructure from a single dashboard.',
      color: 'bg - gradient - to - br from - purple - 500 to - indigo - 600',
      gradient: 'from - purple - 400 to - indigo - 500',
    },
    {
      icon: <Shield className='w - 8 h - 8 text - white' />,
      title: 'Security Monitoring',
      description:;
        'Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.',
      color: 'bg - gradient - to - br from - yellow - 500 to - orange - 600',
      gradient: 'from - yellow - 400 to - orange - 500',
    },
    {
      icon: <Zap className='w - 8 h - 8 text - white' />,
      title: 'Auto - scaling',
      description:;
        'Intelligent auto - scaling based on real - time metrics and predictive analytics.',
      color: 'bg - gradient - to - br from - teal - 500 to - blue - 600',
      gradient: 'from - teal - 400 to - blue - 500',
    },
  ];
;
  const monitoring_capabilities = [;
    {
      category: 'Infrastructure',
      icon: <Server className='w - 6 h - 6 text - blue - 400' />,
      metrics: [;
        'CPU Usage',
        'Memory Utilization',
        'Disk I / O',
        'Network Performance',
        'Container Metrics',
      ],
    },
    {
      category: 'Applications',
      icon: <Code className='w - 6 h - 6 text - green - 400' />,
      metrics: [;
        'Response Time',
        'Error Rates',
        'Throughput',
        'User Experience',
        'API Performance',
      ],
    },
    {
      category: 'Databases',
      icon: <Database className='w - 6 h - 6 text - purple - 400' />,
      metrics: [;
        'Query Performance',
        'Connection Pool',
        'Index Usage',
        'Replication Lag',
        'Storage Growth',
      ],
    },
    {
      category: 'Security',
      icon: <Shield className='w - 6 h - 6 text - red - 400' />,
      metrics: [;
        'Threat Detection',
        'Access Logs',
        'Vulnerability Scans',
        'Compliance Status',
        'Audit Trails',
      ],
    },  ];      icon: <Shield className="w - 6 h - 6 text - red - 400" />,
      metrics: ['Threat DetectionAccess LogsVulnerability ScansCompliance StatusAudit Trails'];
    }
  ];
;
  const pricing_plans = [;
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [;
        'Up to 10 servers',
        'Basic monitoring',
        'Email alerts',
        '7 - day data retention',
        'Community support',
        'Mobile app access',
      ],
      popular: false,
      color: 'border - gray - 600',
      button_color: 'bg - gray - 600 hover:bg - gray - 700',
    },    {        'Up to 10 servers_basic monitoring_email alerts7 - day data retention_community support_mobile app access';
      ];
      popular: false,
      color: 'border - gray - 600',
      button_color: 'bg - gray - 600 hover:bg - gray - 700';
    }

      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',

    };
    {
=======
      features: [;
        'Up to 100 servers',
        'Advanced monitoring',
        'SMS & Slack alerts',
        '30 - day data retention',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Team collaboration',
      ],
      popular: true,
      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700',
    },    {        'Up to 100 servers_advanced monitoringSMS & Slack alerts30 - day data retention_priority support_custom dashboardsAPI access_team collaboration';
      ];
      popular: true,
      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700';
    }

      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',

  ];

  const integrations = [
=======
      features: [;
        'Unlimited servers',
        'Full monitoring suite',
        'Custom integrations',
        '1 - year data retention',
        'Dedicated support',
        'White - label solution',
        'SLA guarantee',
        'On - premise option',
      ],
      popular: false,
      color: 'border - purple - 600',
      button_color: 'bg - purple - 600 hover:bg - purple - 700',
    },  ];        'Unlimited servers_full monitoring suite_custom integrations1 - year data retention_dedicated support_white - label solutionSLA guarantee_on - premise option';
      ];
      popular: false,
      color: 'border - purple - 600',
      button_color: 'bg - purple - 600 hover:bg - purple - 700';
    }
  const integrations = [;

    { name: 'AWS', icon: '☁️', description: 'CloudWatch integration' },
    { name: 'Azure', icon: '🔷', description: 'Monitor integration' },
    { name: 'GCP', icon: '☁️', description: 'Stackdriver integration' },
    { name: 'Docker', icon: '🐳', description: 'Container monitoring' },
    { name: 'Kubernetes', icon: '☸️', description: 'K8s native support' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'PagerDuty', icon: '🚨', description: 'Incident management' },
    { name: 'Jira', icon: '📋', description: 'Issue tracking' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];
  const useCases = [
    {


export default function CloudMonitoringPage() {;
  const features = [;
    {;
      icon: <Activity className='w-8 h-8 text-white' />,;
      description:;
        'Monitor your entire infrastructure in real-time with sub-second latency and instant alerting.',;
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',;
      gradient: 'from-green-400 to-emerald-500',;
    },;
    {;
      icon: <BarChart3 className='w-8 h-8 text-white' />,;
      title: 'Advanced Analytics',;
      description:;
        'Deep insights into performance metrics, resource utilization, and business intelligence.',;
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',;
      gradient: 'from-blue-400 to-cyan-500',;
    },;
    {;
      icon: <AlertTriangle className='w-8 h-8 text-white' />,;
      title: 'Smart Alerting',;
      description:;
        'AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.',;
      color: 'bg-gradient-to-br from-red-500 to-pink-600',;
      gradient: 'from-red-400 to-pink-500',;
    },;
    {;
      icon: <Database className='w-8 h-8 text-white' />,;
      title: 'Multi-Cloud Support',;
      description:;
        'Monitor AWS, Azure, Google Cloud, and on-premises infrastructure from a single dashboard.',;
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',;
      gradient: 'from-purple-400 to-indigo-500',;
    },;
    {;
      icon: <Shield className='w-8 h-8 text-white' />,;
      title: 'Security Monitoring',;
      description:;
        'Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.',;
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',;
      gradient: 'from-yellow-400 to-orange-500',;
    },;
    {;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'Auto-scaling',;
      description:;
        'Intelligent auto-scaling based on real-time metrics and predictive analytics.',;
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',;
      gradient: 'from-teal-400 to-blue-500',;
    },;
  ];
  const monitoringCapabilities = [;
    {;
      category: 'Infrastructure',;
      icon: <Server className='w-6 h-6 text-blue-400' />,;
      metrics: [;
        'CPU Usage',;
        'Memory Utilization',;
        'Disk I/O',;
        'Network Performance',;
        'Container Metrics',;
      ],;
    },;
    {;
      category: 'Applications',;
      icon: <Code className='w-6 h-6 text-green-400' />,;
      metrics: [;
        'Response Time',;
        'Error Rates',;
        'Throughput',;
        'User Experience',;
        'API Performance',;
      ],;
    },;
    {;
      category: 'Databases',;
      icon: <Database className='w-6 h-6 text-purple-400' />,;
      metrics: [;
        'Query Performance',;
        'Connection Pool',;
        'Index Usage',;
        'Replication Lag',;
        'Storage Growth',;
      ],;
    },;
    {;
      category: 'Security',;
      icon: <Shield className='w-6 h-6 text-red-400' />,;
      metrics: [;
        'Threat Detection',;
        'Access Logs',;
        'Vulnerability Scans',;
        'Compliance Status',;
        'Audit Trails',;
      ],;
    },  ];      icon: <Shield className="w-6 h-6 text-red-400" />,;
      metrics: ['Threat DetectionAccess LogsVulnerability ScansCompliance StatusAudit Trails'];
    }
  ];
  const pricingPlans = [;
    {;
      name: 'Starter',;
      price: '$49',;
      period: '/month',;
      description: 'Perfect for small teams and startups',;
      features: [;
        'Up to 10 servers',;
        'Basic monitoring',;
        'Email alerts',;
        '7-day data retention',;
        'Community support',;
        'Mobile app access',;
      ],;
      popular: false,;
      color: 'border-gray-600',;
      buttonColor: 'bg-gray-600 hover:bg-gray-700',;
    },    {        'Up to 10 serversBasic monitoringEmail alerts7-day data retentionCommunity supportMobile app access';
      ];
      popular: false,;
      color: 'border-gray-600',;
      buttonColor: 'bg-gray-600 hover:bg-gray-700';
    };
      name: 'Professional',;
      price: '$199',;
      period: '/month',;
      description: 'Ideal for growing businesses',;
      features: [;
        'Up to 100 servers',;
        'Advanced monitoring',;
        'SMS & Slack alerts',;
        '30-day data retention',;
        'Priority support',;
        'Custom dashboards',;
        'API access',;
        'Team collaboration',;
      ],;
      popular: true,;
      color: 'border-blue-500',;
      buttonColor: 'bg-blue-600 hover:bg-blue-700',;
    },    {        'Up to 100 serversAdvanced monitoringSMS & Slack alerts30-day data retentionPriority supportCustom dashboardsAPI accessTeam collaboration';
      ];
      popular: true,;
      color: 'border-blue-500',;
      buttonColor: 'bg-blue-600 hover:bg-blue-700';
    };
      name: 'Enterprise',;
      price: '$599',;
      period: '/month',;
      description: 'For large organizations',;
      features: [;
        'Unlimited servers',;
        'Full monitoring suite',;
        'Custom integrations',;
        '1-year data retention',;
        'Dedicated support',;
        'White-label solution',;
        'SLA guarantee',;
        'On-premise option',;
      ],;
      popular: false,;
      color: 'border-purple-600',;
      buttonColor: 'bg-purple-600 hover:bg-purple-700',;
    },  ];        'Unlimited serversFull monitoring suiteCustom integrations1-year data retentionDedicated supportWhite-label solutionSLA guaranteeOn-premise option';
      ];
      popular: false,;
      color: 'border-purple-600',;
      buttonColor: 'bg-purple-600 hover:bg-purple-700';
    }
  const integrations = [;
    { name: 'AWS', icon: '☁️', description: 'CloudWatch integration' },;
    { name: 'Azure', icon: '🔷', description: 'Monitor integration' },;
    { name: 'GCP', icon: '☁️', description: 'Stackdriver integration' },;
    { name: 'Docker', icon: '🐳', description: 'Container monitoring' },;
    { name: 'Kubernetes', icon: '☸️', description: 'K8s native support' },;
    { name: 'Slack', icon: '💬', description: 'Team notifications' },;
    { name: 'PagerDuty', icon: '🚨', description: 'Incident management' },;
    { name: 'Jira', icon: '📋', description: 'Issue tracking' },  ];    { name: 'Jira', icon: '📋', description: 'Issue tracking' }
  ];

=======
;
  const use_cases = [;
    {
      title: 'DevOps Teams',
      description:;
        'Monitor CI / CD pipelines, deployment success rates, and infrastructure health.',
      benefits: [;
        'Faster deployments',
        'Reduced downtime',
        'Better collaboration',
        'Automated scaling',
      ],
    },
    {
      title: 'SaaS Companies',
      description:;
        'Track user experience, application performance, and business metrics.',
      icon: '💼',
      benefits: [;
        'User satisfaction',
        'Revenue optimization',
        'Competitive advantage',
        'Customer retention',
      ],
    },
    {
      title: 'E - commerce',
      description:;
        'Monitor website performance, payment processing, and inventory systems.',
      icon: '🛒',
      benefits: [;
        'Higher conversion',
        'Faster checkout',
        'Inventory optimization',
        'Revenue growth',
      ],
    },
    {
      title: 'Financial Services',
      description:;
        'Ensure compliance, security, and 24 / 7 availability of critical systems.',
      icon: '💰',
      benefits: [;
        'Regulatory compliance',
        'Fraud detection',
        'Risk management',
        'Customer trust',
      ],
    },  ];      benefits: ['Regulatory compliance_fraud detection_risk management_customer trust'];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  ];
;
  return (


              className='border-white/20 hover:border-white/40 hover:bg-white/5'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo      </Head>;

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0 && 0.1),transparent_50%)]" />;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.08),transparent_50%)]" />;
        </div>;

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">;
              <Eye className="w-4 h-4 mr-2" />;
              Real-time Infrastructure Monitoring;
            </div>;
          </div>;

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">;
            Cloud Monitoring & Analytics;
          </h1>;
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">;
            Monitor your entire infrastructure in real-time with AI-powered insights and intelligent alerting;
          </p>;

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Button
              href="#pricing"
              size="lg"
              className="bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-white/40 hover:bg-white/5"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400'>
                99.99%
              </div>
              <div className='text-gray-400'>Uptime</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400'>
                1M+
              </div>
              <div className='text-gray-400'>Metrics Tracked</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400'>
                50+
              </div>
              <div className='text-gray-400'>Integrations</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400'>
                &lt;100ms
              </div>
              <div className='text-gray-400'>Latency</div>            </div>            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">1M+</div>
              <div className="text-gray-400">Metrics Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">&lt,100ms</div>
              <div className="text-gray-400">Latency</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Powerful Monitoring Features
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Everything you need to monitor and optimize your infrastructure
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful Monitoring Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1 + 0 && 0.2}s` }}>;
                <div className='relative'>;
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed'>                  {feature && feature.description}            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0 && 0.1) + 0 && 0.2}s` }}>;
                <div className="relative">;
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">;
                  {feature && feature.title}
                </h3>;
                <p className="text-gray-400 leading-relaxed">;
                  {feature && feature.description}
                </p>;
              </Card>;

=======
              Everything you need to monitor and optimize your infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
    <>;
      <Head>;
        <title>;
          Cloud Monitoring & Analytics | Zion Tech Group - Real - time;
          Infrastructure Monitoring;
        </title>;
        <meta;
          name='description';
          content='Comprehensive cloud monitoring and analytics platform with real - time insights, AI - powered alerting, and multi - cloud support. Monitor your entire infrastructure from a single dashboard.';
        />;
        <meta;
          property='og:title';
          content='Cloud Monitoring & Analytics | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Real - time infrastructure monitoring with advanced analytics, smart alerting, and multi - cloud support.';
        />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden bg - black'>;
        <div className='absolute inset - 0'>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (34, 197, 94, 0.1), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (59, 130, 246, 0.08), transparent_50%)]' />;
        </div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 8'>;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6'>;
              <Eye className='w - 4 h - 4 mr - 2' />;
              Real - time Infrastructure Monitoring;
            </div>;
          </div>;
          <h1 className='text - 4xl sm:text - 5xl md:text - 6xl font - black mb - 8 text - white leading - tight'>;
            Cloud Monitoring & Analytics;
          </h1>;
          <p className='text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed'>;
            Monitor your entire infrastructure in real - time with AI - powered;
            insights and intelligent alerting;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 20'>;
            <Button;
              href='#pricing';
              size='lg';
              className='bg - green - 600 hover:bg - green - 700 shadow - 2xl shadow - green - 500 / 25';
            >;
              Start Free Trial;
              <ArrowRight className='w - 5 h - 5 ml - 2' />;
            </Button>;
            <Button;
              href='#demo';
              variant='outline';
              size='lg';
              className='border - white / 20 hover:border - white / 40 hover:bg - white / 5';
            >;
              <Play className='w - 5 h - 5 mr - 2' />              Watch Demo      </Head>;
      {/* Hero Section */}
      <section className="relative min - h-screen flex items - center justify - center overflow - hidden bg - black">;
        <div className="absolute inset - 0">;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (34, 197, 94, 0.1), transparent_50%)]" />;
          <div className="absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (59, 130, 246, 0.08), transparent_50%)]" />;
        </div>;
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <div className="mb - 8">;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6">;
              <Eye className="w - 4 h - 4 mr - 2" />;
              Real - time Infrastructure Monitoring;
            </div>;
          </div>;
          <h1 className="text - 4xl sm:text - 5xl md:text - 6xl font - black mb - 8 text - white leading - tight">;
            Cloud Monitoring & Analytics;
          </h1>;
          <p className="text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed">;
            Monitor your entire infrastructure in real - time with AI - powered insights and intelligent alerting;
          </p>;
          <div className="flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 20">;
            <Button;
              href="#pricing";
              size="lg";
              className="bg - green - 600 hover:bg - green - 700 shadow - 2xl shadow - green - 500 / 25";
            >;
              Start Free Trial;
              <ArrowRight className="w - 5 h - 5 ml - 2" />;
            </Button>;
            <Button;
              href="#demo";
              variant="outline";
              size="lg";
              className="border - white / 20 hover:border - white / 40 hover:bg - white / 5";
            >;
              <Play className="w - 5 h - 5 mr - 2" />;
              Watch Demo;
            </Button>;
          </div>;
          {/* Stats */}
          <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 8 max - w-5xl mx - auto'>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - green - 400'>;
                99.99%;
              </div>;
              <div className='text - gray - 400'>Uptime</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - blue - 400'>;
                1M+;
              </div>;
              <div className='text - gray - 400'>Metrics Tracked</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - purple - 400'>;
                50+;
              </div>;
              <div className='text - gray - 400'>Integrations</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold mb - 3 text - orange - 400'>;
                &lt;100ms;
              </div>;
              <div className='text - gray - 400'>Latency</div>            </div>            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - blue - 400">1M+</div>;
              <div className="text - gray - 400">Metrics Tracked</div>;
            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - purple - 400">50+</div>;
              <div className="text - gray - 400">Integrations</div>;
            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold mb - 3 text - orange - 400">&lt, 100ms</div>;
              <div className="text - gray - 400">Latency</div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className='py - 24 bg - gray - 900 relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Powerful Monitoring Features;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              Everything you need to monitor and optimize your infrastructure;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>      <section className="py - 24 bg - gray - 900 relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Powerful Monitoring Features;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            {features.map ((feature, index) => (
              <Card;
                key={index}
                className='text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1';
                style={{ animation_delay: `${index * 0.1 + 0.2}s` }}
              >;
                <div className='relative'>;
                  <div;
                    className={`w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center transition - all duration - 300 group - hover:scale - 110 group - hover:shadow - lg bg - gradient - to - br ${feature.color} shadow - xl`}
                  >;
                    {feature.icon}
                  </div>;
                </div>;
                <h3 className='text - xl font - bold mb - 4 text - white group - hover:text - green - 400 transition - colors duration - 300'>;
                  {feature.title}
                </h3>;
                <p className='text - gray - 400 leading - relaxed'>                  {feature.description}            {features.map ((feature, index) => (
              <Card;

                key={index}
                className="text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1";
                style={{ animation_delay: `${(index * 0.1) + 0.2}s` }}
              >;
                <div className="relative">;
                  <div className={`w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center transition - all duration - 300 group - hover:scale - 110 group - hover:shadow - lg bg - gradient - to - br ${feature.color} shadow - xl`}>;
                    {feature.icon}
                  </div>;
                </div>;
                <h3 className="text - xl font - bold mb - 4 text - white group - hover:text - green - 400 transition - colors duration - 300">;
                  {feature.title}
                </h3>;
                <p className="text - gray - 400 leading - relaxed">;
                  {feature.description}

                  {feature.description}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </p>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
          </div>
        </div>
      </section>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Monitoring Capabilities */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              Comprehensive Monitoring
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Monitor every aspect of your infrastructure with detailed metrics
              and insights
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {monitoringCapabilities.map((capability, index) => (
=======
          </div>;
        </div>;
      </section>;
      {/* Monitoring Capabilities */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Comprehensive Monitoring;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
                </p>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Monitoring Capabilities */}
      <section className='py - 24 bg - black relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Comprehensive Monitoring;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Monitor every aspect of your infrastructure with detailed metrics;
              and insights;
            </p>;
          </div>;

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
=======
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
=======

                  {feature.description}

                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>

              Comprehensive Monitoring

            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Monitor every aspect of your infrastructure with detailed metrics and insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringCapabilities.map((capability, index) => (
                          className='flex items-center text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {metric}              Comprehensive Monitoring;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Monitor every aspect of your infrastructure with detailed metrics and insights;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {monitoringCapabilities && monitoringCapabilities.map((capability, index) => (;
              <Card
                key={index}


                          {metric}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
          </div>
        </div>
      </section>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Use Cases Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              Use Cases
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Trusted by teams across industries for reliable infrastructure
              monitoring
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {useCases.map((useCase, index) => (
=======
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Use Cases;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            {monitoring_capabilities.map ((capability, index) => (
              <Card;
                key={index}
                className='group border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='flex - shrink - 0'>{capability.icon}</div>;
                  <div className='flex - 1'>;
                    <h3 className='text - xl font - bold mb - 3 text - white group - hover:text - green - 400 transition - colors duration - 300'>;
                      {capability.category}
                    </h3>;
                    <div className='grid grid - cols - 1 gap - 2'>;
                      {capability.metrics.map ((metric, metric_index) => (
                        <div;
                          key={metric_index}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                          {metric}              Comprehensive Monitoring;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Monitor every aspect of your infrastructure with detailed metrics and insights;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            {monitoring_capabilities.map ((capability, index) => (
              <Card;
                key={index}
                className="group border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300";
              >;
                <div className="flex items - start space - x-4">;
                  <div className="flex - shrink - 0">{capability.icon}</div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - bold mb - 3 text - white group - hover:text - green - 400 transition - colors duration - 300">;
                      {capability.category}
                    </h3>;
                    <div className="grid grid - cols - 1 gap - 2">;
                      {capability.metrics.map ((metric, metric_index) => (
                        <div key={metric_index} className="flex items - center text - sm text - gray - 300">;
                          <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                          {metric}
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 24 bg - gray - 900 relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Use Cases;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              Trusted by teams across industries for reliable infrastructure;
              monitoring;
            </p>;
          </div>;

      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
=======
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>

              Use Cases

            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Trusted by teams across industries for reliable infrastructure monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
                          className='flex items-center text-sm text-gray-300'>;
                          <TrendingUp className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {benefit}              Use Cases;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Trusted by teams across industries for reliable infrastructure monitoring;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases && useCases.map((useCase, index) => (;
              <Card
                key={index}


                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Pricing Section */}

      <section id="pricing" className="py-24 bg-black relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

              Choose the plan that fits your monitoring needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {pricingPlans.map((plan, index) => (
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section id='pricing' className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Simple, Transparent Pricing;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Choose the plan that fits your monitoring needs;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (      <section id="pricing" className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans && pricingPlans.map((plan, index) => (;
              <Card
                key={index}

          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            {use_cases.map ((use_case, index) => (
              <Card;
                key={index}
                className='group border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='text - 4xl'>{use_case.icon}</div>;
                  <div className='flex - 1'>;
                    <h3 className='text - xl font - bold mb - 3 text - white group - hover:text - green - 400 transition - colors duration - 300'>;
                      {use_case.title}
                    </h3>;
                    <p className='text - gray - 400 mb - 4 leading - relaxed'>;
                      {use_case.description}
                    </p>;
                    <div className='grid grid - cols - 2 gap - 2'>;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div;
                          key={benefit_index}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <TrendingUp className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                          {benefit}              Use Cases;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
              Trusted by teams across industries for reliable infrastructure monitoring;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            {use_cases.map ((use_case, index) => (
              <Card;
                key={index}
                className="group border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300";
              >;
                <div className="flex items - start space - x-4">;
                  <div className="text - 4xl">{use_case.icon}</div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - bold mb - 3 text - white group - hover:text - green - 400 transition - colors duration - 300">;
                      {use_case.title}
                    </h3>;
                    <p className="text - gray - 400 mb - 4 leading - relaxed">;
                      {use_case.description}
                    </p>;
                    <div className="grid grid - cols - 2 gap - 2">;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div key={benefit_index} className="flex items - center text - sm text - gray - 300">;
                          <TrendingUp className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                          {benefit}
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section id='pricing' className='py - 24 bg - black relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              Simple, Transparent Pricing;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>              Choose the plan that fits your monitoring needs;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (      <section id="pricing" className="py - 24 bg - black relative overflow - hidden">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 relative z - 10">;
          <div className="text - center mb - 20">;
            <h2 className="text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing_plans.map ((plan, index) => (
              <Card;
                key={index}
                className={`relative group ${plan.popular ? 'ring - 2 ring - green - 500 scale - 105' : ''} border ${plan.color} hover:border - green - 500 / 50 transition - all duration - 300`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - green - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold'>                      Most Popular;
                    </span>;
                  </div>)}                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <span className="bg - green - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold">;
                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 2'>;

                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    {plan.price}

                className={`relative group ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} border ${plan.color} hover:border-green-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
=======
                className={`relative group ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} border ${plan.color} hover:border-green-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>                      Most Popular
                    </span>
                  </div>
                )}                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}


                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='text-4xl font-bold text-white mb-2'>;
                    {plan && plan.price}
                    <span className='text-lg text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan && plan.description}</p>;
                </div>;


                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                      {feature}                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
=======






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className={`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}
          </div>
        </div>
      </section>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Integrations Section */}

      <section className="py-24 bg-gray-900 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Seamless Integrations;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Connect with your favorite tools and platforms;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>      <section className="py-24 bg-gray-900 relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>;
            {integrations && integrations.map((integration, index) => (;

              <Card
                key={index}
                className='text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300'>;
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>;
                  {integration && integration.icon}
                </div>;
                <h3 className='font-semibold text-white mb-2'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-sm text-gray-400'>;
                  {integration && integration.description}
                </p>              </Card>            {integrations && integrations.map((integration, index) => (;
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300">;
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;
                  {integration && integration.icon}
                </div>;
                <h3 className="font-semibold text-white mb-2">{integration && integration.name}</h3>;
                <p className="text-sm text-gray-400">{integration && integration.description}</p>;
              </Card>;

=======
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </Card>


              </Card>

            ))}
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}


      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>



            Ready to Monitor Your Infrastructure?
          </h2>
          <p className='text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of DevOps teams who trust us to monitor their
            critical infrastructure.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='#demo'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo            Ready to Monitor Your Infrastructure?;
          </h2>;
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">;
            Join thousands of DevOps teams who trust us to monitor their critical infrastructure.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;

=======
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of DevOps teams who trust us to monitor their critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl">;
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo"
              variant="outline"
              size="lg"


              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;

              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
=======
}
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
