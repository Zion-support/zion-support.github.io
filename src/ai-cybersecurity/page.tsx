const AICybersecurityPage: React.FC = () => {
  const features = [
=======
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
import {Lock, CheckCircle, Phone, Mail} from 'lucide-react';;
constAICybersecurityPage: React.FC= () =>{constfeatures= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '9 9.9% accuracy']
   },
    {icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal do wntime']
   },
    {icon: Eye,
      title: 'Continuous Monitoring',
      description: '2 4/7 monitoring of your entire infrastructure with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['2 4/7 surveillance', 'Behavioral analysis', 'Anomaly detection']
   },
    {icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with threat intelligence, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence', 'Risk scoring', 'Compliance reports']
   },
    {icon: Zap,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning', 'Risk prioritization', 'Patch management']
   },
    {icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with identity verification, device trust, and least privilege access controls.',
      benefits: ['Identity verification', 'Device trust', 'Least privilege']
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50endpoints',
        'Basic threat detection',
        'Email security',
        '2 4/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$1,99 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500endpoints',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$4,99 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Full security suite',
        'Dedicated SOC team',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'Penetration testing',
        'SLA guarantee'
      ],
      popular: false
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
   },
    {title: 'Phishing Detection',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
   },
    {title: 'Insider Threat Detection',
      description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.',
      icon: Users
   },
    {title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
  return (
  <><SEOOptimizertitle="AI Cybersecurity Solutions - ZionTechGroup"
        description="Advanced AI-powered cybersecurity with99.9% threat detection,24/7 monitoring, and automated response. Protect your business from evolvingcyberthreats."
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AIsecurity']}
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity"
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">Most Popular
                    </spa></di>)}
                <divclassName="text-centermb-6"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-400mb-4">{plan.description}</p><divclassName="flexitems-baselinejustify-center"><spanclassName="text-4 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-400ml-1">{plan.period}</spa></di></di><ulclassName="space-y-3mb-8">{plan.features.map((featureidx) => (
                   <likey={idx}className="flexitems-centerspace-x-3"><CheckCircleclassName="w-5 h-5 text-cyan-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></l>))}
                </u><ahref="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular
