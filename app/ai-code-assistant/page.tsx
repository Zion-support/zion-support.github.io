import React from 'react'
import { Code, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICodeAssistantPage: React.FC = () => {
  const features = [
    'Intelligent code completion',
    'Bug detection and fixing',
    'Code optimization suggestions',
    'Multi-language support',
    'Code documentation generation',
    'Refactoring assistance',
    'Security vulnerability detection',
    'Integration with popular IDEs'
  ]

  const benefits = [
    {
      title: 'Faster Development',
      description: 'Write code 3x faster with intelligent autocomplete and suggestions',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Code Quality',
      description: 'Generate cleaner, more maintainable code with AI assistance',
      icon: <Star className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Bug Prevention',
      description: 'Catch and fix bugs before they become problems',
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Learning Enhancement',
      description: 'Learn best practices and improve coding skills',
      icon: <Target className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Code Completion',
      description: 'Get intelligent code suggestions as you type',
      icon: '⌨️'
    },
    {
      title: 'Bug Fixing',
      description: 'Automatically detect and suggest fixes for bugs',
      icon: '🐛'
    },
    {
      title: 'Code Review',
      description: 'Get AI-powered code review and improvement suggestions',
      icon: '👀'
    },
    {
      title: 'Documentation',
      description: 'Generate comprehensive code documentation automatically',
      icon: '📚'
    },
    {
      title: 'Refactoring',
      description: 'Get suggestions for code refactoring and optimization',
      icon: '🔧'
    },
    {
      title: 'Security Audit',
      description: 'Identify security vulnerabilities in your code',
      icon: '🔒'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Developers Using' },
    { number: '3x', label: 'Faster Development' },
    { number: '90%', label: 'Bug Reduction' },
    { number: '24/7', label: 'AI Assistance' }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Senior Developer',
      content: 'My productivity has increased dramatically. The AI suggestions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'Full Stack Developer',
      content: 'Code quality has improved significantly. The AI catches issues I would have missed.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Tech Lead',
      content: 'Our team\'s development speed has increased 3x. The AI is like having a senior developer on call.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Code Assistant"
      description="Enhance your coding experience with AI-powered assistance. Get intelligent code completion, bug detection, optimization suggestions, and automated documentation generation."
      icon={<Code className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $49/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Development"
      popular={true}
    />
  )
}

export default AICodeAssistantPage