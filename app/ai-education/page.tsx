import React from 'react'
import { GraduationCap, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIEducationPage: React.FC = () => {
  const features = [
    'Personalized learning paths',
    'Adaptive content delivery',
    'Intelligent tutoring systems',
    'Automated assessment and grading',
    'Learning analytics and insights',
    'Multi-language support',
    'Interactive learning modules',
    'Progress tracking and reporting'
  ]

  const benefits = [
    {
      title: 'Personalized Learning',
      description: 'Adapt content and pace to each student\'s learning style',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Improved Outcomes',
      description: 'Increase learning effectiveness by up to 40%',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Reduce teaching preparation time by 60%',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce education costs while improving quality',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Online Learning',
      description: 'Create engaging online courses with AI assistance',
      icon: '💻'
    },
    {
      title: 'Student Assessment',
      description: 'Automatically grade assignments and provide feedback',
      icon: '📝'
    },
    {
      title: 'Tutoring Systems',
      description: 'Provide personalized tutoring and support',
      icon: '👨‍🏫'
    },
    {
      title: 'Language Learning',
      description: 'Help students learn new languages with AI assistance',
      icon: '🌍'
    },
    {
      title: 'Skill Development',
      description: 'Develop specific skills through targeted learning paths',
      icon: '🎯'
    },
    {
      title: 'Learning Analytics',
      description: 'Track student progress and identify areas for improvement',
      icon: '📊'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Students Served' },
    { number: '40%', label: 'Learning Improvement' },
    { number: '60%', label: 'Time Saved' },
    { number: '24/7', label: 'Learning Support' }
  ]

  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      company: 'Education Director',
      content: 'Student engagement has increased dramatically. The personalized learning paths are game-changing.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Online Learning Manager',
      content: 'Course creation is now 5x faster. The AI helps us create engaging content automatically.',
      rating: 5
    },
    {
      name: 'Sarah Lee',
      company: 'Language Teacher',
      content: 'Language learning has never been more effective. Students progress much faster with AI assistance.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Education"
      description="Transform education with AI-powered learning solutions. Create personalized learning experiences, automate assessments, and enhance student outcomes with intelligent educational technology."
      icon={<GraduationCap className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $149/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Education"
      popular={false}
    />
  )
}

export default AIEducationPage