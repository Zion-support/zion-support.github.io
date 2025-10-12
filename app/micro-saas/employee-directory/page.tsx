
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Users, Search, Shield, Phone, CheckCircle, ArrowRight, BarChart3, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
export default EmployeeDirectoryPage;
const EmployeeDirectoryPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-5h-5ml-2" />,
      title: 'Advanced Search',
      description: 'Find employees instantly with powerful search filters and smart suggestions.'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Team Organization',
      description: 'Organize employees by department, role, location, and custom categories.'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Privacy Controls',
      description: 'Granular privacy settings to control what information is visible to whom.'
    },
    {
      icon: <Phone className="w-5h-5ml-2" />,
      title: 'Contact Integration',
      description: 'Seamless integration with phone systems and communication platforms.'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Track directory usage and employee engagement with detailed analytics.'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Real-time Updates',
      description: 'Automatic updates when employee information changes across all systems.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic search',
        'Contact integration',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 employees',
        'Advanced search',
        'Team organization',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Dedicated support'
      ],
      popular: false;
    }
  ]

  return (

        <>
      <title>EmployeeDirectory - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">EmployeeDirectory</h1>
            <p className="text-lg text-gray-300 mb-8">Professional employeedirectory services coming soon.</p>

      </>
  );
}

