'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, TrendingUp, Zap, ArrowRight } from 'lucide-react';

interface AssessmentQuestion {
  id: string;
  category: string;
  question: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

interface AssessmentResult {
  overallScore: number;
  categoryScores: {
    [key: string]: number;
  };
  recommendations: string[];
  nextSteps: string[];
  priorityLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

const assessmentQuestions: AssessmentQuestion[] = [
  // Data Infrastructure
  {
    id: 'data-quality',
    category: 'Data Infrastructure',
    question: 'How would you rate your current data quality and availability?',
    options: [
      { value: 1, label: 'Poor', description: 'Data is scattered, inconsistent, and unreliable' },
      { value: 2, label: 'Fair', description: 'Some data is available but quality varies significantly' },
      { value: 3, label: 'Good', description: 'Most data is clean and accessible with minor issues' },
      { value: 4, label: 'Excellent', description: 'High-quality data is consistently available across all systems' },
      { value: 5, label: 'Outstanding', description: 'Data is pristine, real-time, and perfectly structured' }
    ]
  },
  {
    id: 'data-integration',
    category: 'Data Infrastructure',
    question: 'How well integrated are your data systems?',
    options: [
      { value: 1, label: 'Siloed', description: 'Data exists in completely separate systems' },
      { value: 2, label: 'Partially Integrated', description: 'Some systems share data but many remain isolated' },
      { value: 3, label: 'Mostly Integrated', description: 'Most systems are connected with some gaps' },
      { value: 4, label: 'Well Integrated', description: 'Systems are well connected with minimal silos' },
      { value: 5, label: 'Fully Integrated', description: 'Complete data integration across all systems' }
    ]
  },
  {
    id: 'data-security',
    category: 'Data Infrastructure',
    question: 'How robust is your data security and privacy protection?',
    options: [
      { value: 1, label: 'Basic', description: 'Minimal security measures in place' },
      { value: 2, label: 'Standard', description: 'Basic security protocols implemented' },
      { value: 3, label: 'Good', description: 'Comprehensive security with regular updates' },
      { value: 4, label: 'Advanced', description: 'Enterprise-grade security with monitoring' },
      { value: 5, label: 'Military-Grade', description: 'Highest level of security and privacy protection' }
    ]
  },

  // Technical Capabilities
  {
    id: 'ai-expertise',
    category: 'Technical Capabilities',
    question: 'What is your current level of AI/ML expertise?',
    options: [
      { value: 1, label: 'None', description: 'No AI/ML expertise or experience' },
      { value: 2, label: 'Basic', description: 'Limited AI/ML knowledge and experience' },
      { value: 3, label: 'Intermediate', description: 'Some AI/ML projects completed successfully' },
      { value: 4, label: 'Advanced', description: 'Strong AI/ML capabilities with proven results' },
      { value: 5, label: 'Expert', description: 'Leading AI/ML expertise with industry recognition' }
    ]
  },
  {
    id: 'cloud-infrastructure',
    category: 'Technical Capabilities',
    question: 'How mature is your cloud infrastructure?',
    options: [
      { value: 1, label: 'On-Premise Only', description: 'No cloud infrastructure' },
      { value: 2, label: 'Hybrid Basic', description: 'Limited cloud usage with basic setup' },
      { value: 3, label: 'Hybrid Advanced', description: 'Good mix of cloud and on-premise' },
      { value: 4, label: 'Cloud-First', description: 'Primarily cloud-based with some on-premise' },
      { value: 5, label: 'Cloud-Native', description: 'Fully cloud-native architecture' }
    ]
  },
  {
    id: 'automation-level',
    category: 'Technical Capabilities',
    question: 'What is your current level of process automation?',
    options: [
      { value: 1, label: 'Manual', description: 'Most processes are manual' },
      { value: 2, label: 'Basic Automation', description: 'Some simple processes automated' },
      { value: 3, label: 'Moderate Automation', description: 'Many processes automated with some manual steps' },
      { value: 4, label: 'Advanced Automation', description: 'Most processes automated with AI integration' },
      { value: 5, label: 'Fully Autonomous', description: 'Complete automation with minimal human intervention' }
    ]
  },

  // Business Readiness
  {
    id: 'leadership-support',
    category: 'Business Readiness',
    question: 'How strong is executive leadership support for AI initiatives?',
    options: [
      { value: 1, label: 'No Support', description: 'Leadership is not interested in AI' },
      { value: 2, label: 'Limited Support', description: 'Some interest but limited commitment' },
      { value: 3, label: 'Moderate Support', description: 'Good support with some reservations' },
      { value: 4, label: 'Strong Support', description: 'Clear commitment and active support' },
      { value: 5, label: 'Champion', description: 'Leadership is driving AI transformation' }
    ]
  },
  {
    id: 'change-management',
    category: 'Business Readiness',
    question: 'How prepared is your organization for change?',
    options: [
      { value: 1, label: 'Resistant', description: 'Strong resistance to change' },
      { value: 2, label: 'Cautious', description: 'Some willingness but significant concerns' },
      { value: 3, label: 'Open', description: 'Generally open to change with proper planning' },
      { value: 4, label: 'Adaptive', description: 'Good at adapting to new technologies and processes' },
      { value: 5, label: 'Innovation-Driven', description: 'Constantly seeking and implementing new innovations' }
    ]
  },
  {
    id: 'budget-allocation',
    category: 'Business Readiness',
    question: 'What is your budget allocation for AI initiatives?',
    options: [
      { value: 1, label: 'No Budget', description: 'No dedicated budget for AI' },
      { value: 2, label: 'Limited Budget', description: 'Small budget for pilot projects' },
      { value: 3, label: 'Moderate Budget', description: 'Reasonable budget for AI initiatives' },
      { value: 4, label: 'Significant Budget', description: 'Substantial investment in AI' },
      { value: 5, label: 'Unlimited Budget', description: 'Full support with unlimited resources' }
    ]
  },

  // Use Case Readiness
  {
    id: 'use-case-clarity',
    category: 'Use Case Readiness',
    question: 'How clear are your AI use cases and objectives?',
    options: [
      { value: 1, label: 'Unclear', description: 'No clear AI use cases identified' },
      { value: 2, label: 'Vague', description: 'Some ideas but not well defined' },
      { value: 3, label: 'Partially Clear', description: 'Some use cases well defined, others unclear' },
      { value: 4, label: 'Clear', description: 'Most use cases are well defined with clear objectives' },
      { value: 5, label: 'Crystal Clear', description: 'All use cases are perfectly defined with measurable outcomes' }
    ]
  },
  {
    id: 'success-metrics',
    category: 'Use Case Readiness',
    question: 'How well defined are your success metrics?',
    options: [
      { value: 1, label: 'No Metrics', description: 'No success metrics defined' },
      { value: 2, label: 'Basic Metrics', description: 'Some basic metrics identified' },
      { value: 3, label: 'Good Metrics', description: 'Most success metrics are defined' },
      { value: 4, label: 'Comprehensive Metrics', description: 'Detailed metrics with clear measurement methods' },
      { value: 5, label: 'Perfect Metrics', description: 'Complete metrics framework with real-time monitoring' }
    ]
  },
  {
    id: 'roi-expectations',
    category: 'Use Case Readiness',
    question: 'What are your ROI expectations for AI initiatives?',
    options: [
      { value: 1, label: 'Unrealistic', description: 'Expecting immediate, massive returns' },
      { value: 2, label: 'High Expectations', description: 'Expecting high returns quickly' },
      { value: 3, label: 'Moderate Expectations', description: 'Reasonable expectations for returns' },
      { value: 4, label: 'Realistic', description: 'Well-informed expectations based on industry data' },
      { value: 5, label: 'Strategic', description: 'Long-term strategic view with measured expectations' }
    ]
  }
];

const categoryDescriptions = {
  'Data Infrastructure': 'Foundation for AI success - data quality, integration, and security',
  'Technical Capabilities': 'Your current AI/ML expertise and technical infrastructure',
  'Business Readiness': 'Organizational readiness for AI transformation',
  'Use Case Readiness': 'Clarity and definition of AI use cases and success metrics'
};

export default function AI2025ReadinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const categoryScores: { [key: string]: number } = {};
    const categories = [...new Set(assessmentQuestions.map(q => q.category))];
    
    categories.forEach(category => {
      const categoryQuestions = assessmentQuestions.filter(q => q.category === category);
      const categoryAnswers = categoryQuestions.map(q => answers[q.id] || 0);
      const categoryScore = categoryAnswers.reduce((sum, score) => sum + score, 0) / categoryAnswers.length;
      categoryScores[category] = Math.round(categoryScore * 20); // Convert to percentage
    });

    const overallScore = Math.round(
      Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / categories.length
    );

    let priorityLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    if (overallScore >= 80) priorityLevel = 'Low';
    else if (overallScore >= 60) priorityLevel = 'Medium';
    else if (overallScore >= 40) priorityLevel = 'High';
    else priorityLevel = 'Critical';

    const recommendations = generateRecommendations(categoryScores, overallScore);
    const nextSteps = generateNextSteps(priorityLevel, categoryScores);

    setResult({
      overallScore,
      categoryScores,
      recommendations,
      nextSteps,
      priorityLevel
    });
    setIsComplete(true);
  };

  const generateRecommendations = (categoryScores: { [key: string]: number }, overallScore: number): string[] => {
    const recommendations: string[] = [];
    
    if (categoryScores['Data Infrastructure'] < 60) {
      recommendations.push('Invest in data quality improvement and integration platforms');
      recommendations.push('Implement comprehensive data security and privacy protection measures');
    }
    
    if (categoryScores['Technical Capabilities'] < 60) {
      recommendations.push('Build AI/ML expertise through training and hiring');
      recommendations.push('Modernize cloud infrastructure for AI workloads');
    }
    
    if (categoryScores['Business Readiness'] < 60) {
      recommendations.push('Secure executive sponsorship and create AI transformation roadmap');
      recommendations.push('Implement change management program for AI adoption');
    }
    
    if (categoryScores['Use Case Readiness'] < 60) {
      recommendations.push('Define clear AI use cases with measurable success metrics');
      recommendations.push('Develop ROI framework and set realistic expectations');
    }

    if (overallScore < 40) {
      recommendations.push('Consider partnering with AI consulting firm for comprehensive transformation');
    }

    return recommendations;
  };

  const generateNextSteps = (priorityLevel: string, categoryScores: { [key: string]: number }): string[] => {
    const nextSteps: string[] = [];
    
    if (priorityLevel === 'Critical') {
      nextSteps.push('Immediate executive briefing on AI readiness assessment results');
      nextSteps.push('Engage AI transformation consulting partner within 30 days');
      nextSteps.push('Develop 90-day AI readiness improvement plan');
    } else if (priorityLevel === 'High') {
      nextSteps.push('Create AI transformation task force with executive sponsorship');
      nextSteps.push('Develop 6-month AI implementation roadmap');
      nextSteps.push('Begin pilot AI projects in highest-impact areas');
    } else if (priorityLevel === 'Medium') {
      nextSteps.push('Refine AI strategy based on assessment results');
      nextSteps.push('Scale successful pilot projects across organization');
      nextSteps.push('Invest in advanced AI capabilities and infrastructure');
    } else {
      nextSteps.push('Optimize existing AI implementations for maximum ROI');
      nextSteps.push('Explore advanced AI technologies and emerging trends');
      nextSteps.push('Share best practices and become AI transformation leader');
    }

    return nextSteps;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Low': return <CheckCircle className="w-5 h-5" />;
      case 'Medium': return <AlertCircle className="w-5 h-5" />;
      case 'High': return <TrendingUp className="w-5 h-5" />;
      case 'Critical': return <XCircle className="w-5 h-5" />;
      default: return <ArrowRight className="w-5 h-5" />;
    }
  };

  if (isComplete && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI 2025 Readiness Assessment Results
            </h1>
            <p className="text-xl text-gray-600">
              Your comprehensive AI transformation readiness analysis
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Overall AI Readiness Score</span>
                <Badge className={`${getPriorityColor(result.priorityLevel)} flex items-center gap-2`}>
                  {getPriorityIcon(result.priorityLevel)}
                  {result.priorityLevel} Priority
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-6xl font-bold mb-4 ${getScoreColor(result.overallScore)}`}>
                  {result.overallScore}%
                </div>
                <Progress value={result.overallScore} className="h-4 mb-4" />
                <p className="text-gray-600">
                  {result.overallScore >= 80 
                    ? "Excellent! You're well-prepared for AI transformation."
                    : result.overallScore >= 60
                    ? "Good progress! Some areas need attention for optimal AI success."
                    : result.overallScore >= 40
                    ? "Significant improvement needed. Focus on key areas for AI readiness."
                    : "Critical attention required. Immediate action needed for AI transformation."
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Category Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.entries(result.categoryScores).map(([category, score]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{category}</span>
                    <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={score} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommendations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Key Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="w-6 h-6" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center">
            <Button 
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setIsComplete(false);
                setResult(null);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold mr-4"
            >
              Retake Assessment
            </Button>
            <Button 
              onClick={() => window.print()}
              variant="outline"
              className="px-8 py-3 rounded-lg font-semibold"
            >
              Download Report
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2025 Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive evaluation of your organization's AI transformation readiness
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {assessmentQuestions.length}
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentQ.question}
            </CardTitle>
            <CardDescription>
              {categoryDescriptions[currentQ.category as keyof typeof categoryDescriptions]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    answers[currentQ.id] === option.value
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-lg">{option.label}</span>
                    <span className="text-sm text-gray-500">Score: {option.value}/5</span>
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            variant="outline"
            className="px-6 py-2"
          >
            Previous
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={!answers[currentQ.id]}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
          >
            {currentQuestion === assessmentQuestions.length - 1 ? 'Complete Assessment' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}