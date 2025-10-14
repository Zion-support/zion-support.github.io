import { Helmet   } from "react-helmet-async"
import { ArrowRight, CheckCircle, Star, Brain, Zap, Award, DollarSign, Globe, TrendingUp, Monitor, MessageSquare, Eye, Award as AwardIcon, Rocket, Phone, Star as StarIcon } from lucide-react
import { Link } from react-router-dom
import SEOOptimizer from "../components/SEOOptimizer"
export default function AiPoweredDevops() {
  const features = [
    AI-powered automated testing and quality assurance,Intelligent deployment orchestration and rollback,Predictive infrastructure scaling and optimization,Automated security vulnerability detection and patching,AI-driven performance monitoring and alerting,Intelligent log analysis and anomaly detection,Automated code review and optimization suggestions,Smart resource allocation and cost optimization,AI-powered incident response and resolution,Automated compliance checking and reporting,Intelligent capacity planning and forecasting,AI-driven continuous integration and deployment
  ]
  const benefits = [
    Reduce deployment time by 80%,Eliminate 95% of manual DevOps tasks,Improve system reliability by 99.9%,Cut infrastructure costs by 40%
  ]
  //   Cut infrastructure costs by 40%
  // ]
const pricingPlans = [
    {
      name: Startup,
      price: $499,
      period: /month,
      description: Perfect for small development teams and startups,
      features: [
        Up to 10 applications,Basic AI automation,Standard monitoring,Email support,Basic reporting,5 team members,Cloud deployment only
      ],
      popular: false
    },
    {
      name: Enterprise,
      price: $1,999,
      period: /month,
      description: Ideal for growing companies and development teams,
      features: [
        Up to 100 applications,Advanced AI automation,Comprehensive monitoring,Priority support,Advanced analytics,25 team members,Multi-cloud deployment,API access,Custom integrations,24/7 monitoring
      ],
      popular: true
    },
    {
      name: Enterprise Plus,
      price: $4,999,
      period: /month,
      description: For large organizations with complex DevOps needs,
      features: [
        Unlimited applications,Full AI automation suite,Enterprise monitoring,24/7 dedicated support,Custom analytics,Unlimited team members,Hybrid cloud deployment,Advanced API access,Custom AI model training,Dedicated DevOps engineers,White-label solution,On-premise deployment
      ],"
      popular: false"}
  ]
const testimonials = [
    {
      name: Jennifer Martinez,
      company: Tech Startup,
      role: CTO,
      content: AI-powered DevOps has transformed our development process. We've reduced deployment time by 85% and our system uptime is now 99.9%. The AI predictions are incredibly accurate.,
      rating: 5,
      avatar: JM
    },
    {
      name: David Kim,
      company: E-commerce Platform,
      role: Head of Engineering,
      content: The automated testing and deployment features are game-changing. We can now deploy multiple times per day with confidence, and our bug rate has dropped by 90%.,
      rating: 5,
      avatar: DK
    },
    {
      name: Lisa Thompson,
      company: Financial Services,
      role: DevOps Director,'
      content: The AI-driven security monitoring and compliance checking have been invaluable. We've achieved 100% compliance and our security incidents have dropped to zero.,
      rating: 5,
      avatar: LT
    }
  ]
const capabilities = [
    {
      title: Automated Testing,
      description: AI generates and executes comprehensive test suites automatically,
      icon: <CheckCircle className="w-8" h-8 />,
      color: from-blue-500 to-cyan-500
    },
    {
      title: Smart Deployment,
      description: Intelligent deployment strategies with automatic rollback capabilities,
      icon: <Rocket className="w-8" h-8 />,
      color: from-green-500 to-emerald-500
    },
    {
      title: Predictive Scaling,
      description: AI predicts traffic patterns and scales infrastructure proactively,
      icon: <TrendingUp className="w-8" h-8 />,
      color: from-purple-500 to-pink-500
    },
    {
      title: Intelligent Monitoring,
      description: AI-powered monitoring with anomaly detection and alerting,
      icon: <Eye className="w-8" h-8 />,
      color: from-orange-500 to-red-500
    }
  ]
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home" - Zion Tech Group />
      </Helmet>

      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>

      </div>)
    </div>)
  )}
export default HomePage

'
