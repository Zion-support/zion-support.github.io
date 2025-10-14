
import { Cloud, Shield, TrendingUp, Server, Zap, BarChart3, } from "lucide-react
import Layout from "../layout
import { Link } from "react-router-dom
import { Cloud, Shield, TrendingUp, Server, Zap, BarChart3, ArrowRight, CheckCircle } from "lucide-react
import Layout from '../layout'
import { Helmet }    from "react-helmet-async"
const HomePage = () => {"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      <Helmet><title>Home - Zion Tech Group</title><meta name="description" content="Home - Zion Tech Group"
      </Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg"
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>)
  );
};

  const managementFeatures = [
    {
      category: 'Infrastructure Management'
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery'
    },
    {
      category: 'Security & Compliance'
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring'
    },
    {
      category: 'Cost Management'
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations'
    },
    {
      category: 'Support & Maintenance'
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter'
      price: '$299'
      period: '/month'
      description: 'Perfect for small businesses'
      features: [
        'Up to 10 servers'
        'Basic monitoring'
        'Email support'
        'Standard security'
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional'
      price: '$599'
      period: '/month'
      description: 'Ideal for growing companies'
      features: [
        'Up to 50 servers'
        'Advanced monitoring'
        '24/7 phone support'
        'Enhanced security'
        'Weekly reports'
        'Auto-scaling'
      ],
      popular: true
    },
    {
      name: 'Enterprise'
      price: '$1,299'
      period: '/month'
      description: 'For large organizations'
      features: [
        'Unlimited servers'
        'Real-time monitoring'
        'Dedicated support'
        'Enterprise security'
        'Daily reports'
        'Custom integrations'
        'SLA guarantee'
      ],
      popular: false
    }
  ];