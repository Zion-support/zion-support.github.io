import React from 'react'
import { Play } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Zap, Heart } from 'lucide-react'

constAIFitnessCoachPage: React.FC= () =>{constfeatures= []
    'Personalized Plans',
    'Progress Tracking',
    'Nutrition Analysis',
    'Workout Videos',
    'Health Monitoring',
    'Goal Setting',
    'Real-time Feedback',
    'Exercise Library',
    'Meal Planning',
    'Wearable Integration'
  ]

  constbenefits= []
    'Better results',
    '2 4/7 guidance',
    'Personalized approach',
    'Health insights',
    'Motivation support',
    'Cost-effective'
  ]

  constpricingPlans= [
    {
      name: 'Basic',
      price: '$9 9',
      period: '/month',
      features: ['Basic plans', 'Progress tracking', 'Email support', 'Mobile app'],
      popular: false
   },
    {name: 'Premium',
      price: '$14 9',
      period: '/month',
      features: ['Personalized plans', 'Nutrition analysis', 'Video workouts', 'Wearable sync', 'Priority support'],
      popular: true
   },
    {name: 'Pro',
      price: '$24 9',
      period: '/month',
      features: ['Everything in Premium', '1-on-1 coaching', 'Custom programs', 'Advanced analytics', 'Dedicated support'],
      popular: false
    }
  ]

const Page = $2;
export default Page;