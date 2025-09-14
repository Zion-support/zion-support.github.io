'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, TrendingUp, Brain, Zap, Shield, Users } from 'lucide-react';

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
    technology: number;
    strategy: number;
    people: number;
    processes: number;
  };
  recommendations: string[];
  nextSteps: string[];
}

const assessmentQuestions: AssessmentQuestion[] = [
  // Technology Readiness
  {
    id: 'tech-infrastructure',
    category: 'technology',
    question: 'How would you rate your current AI infrastructure and data capabilities?',
    options: [
      { value: 1, label: 'Basic', description: 'Limited AI tools, basic data collection' },
      { value: 2, label: 'Developing', description: 'Some AI tools, structured data systems' },
      { value: 3, label: 'Advanced', description: 'Comprehensive AI platform, integrated data' },
      { value: 4, label: 'Cutting-edge', description: 'AI-first architecture, real-time analytics' },
      { value: 5, label: 'Future-ready', description: 'Quantum-ready, autonomous systems' }
    ]
  },
  {
    id: 'data-quality',
    category: 'technology',
    question: 'How would you describe your data quality and governance?',
    options: [
      { value: 1, label: 'Poor', description: 'Inconsistent, unreliable data' },
      { value: 2, label: 'Fair', description: 'Some data issues, basic governance' },
      { value: 3, label: 'Good', description: 'Quality data, established governance' },
      { value: 4, label: 'Excellent', description: 'High-quality data, comprehensive governance' },
      { value: 5, label: 'World-class', description: 'Perfect data quality, autonomous governance' }
    ]
  },
  {
    id: 'ai-tools',
    category: 'technology',
    question: 'What is your current level of AI tool adoption?',
    options: [
      { value: 1, label: 'Minimal', description: 'Basic automation tools only' },
      { value: 2, label: 'Limited', description: 'Some AI tools in specific areas' },
      { value: 3, label: 'Moderate', description: 'AI tools across multiple functions' },
      { value: 4, label: 'Extensive', description: 'AI integrated across most operations' },
      { value: 5, label: 'Comprehensive', description: 'AI-first organization with autonomous systems' }
    ]
  },

  // Strategy Readiness
  {
    id: 'ai-strategy',
    category: 'strategy',
    question: 'How well-defined is your AI strategy and roadmap?',
    options: [
      { value: 1, label: 'None', description: 'No formal AI strategy' },
      { value: 2, label: 'Basic', description: 'Informal AI initiatives' },
      { value: 3, label: 'Developing', description: 'Formal AI strategy in development' },
      { value: 4, label: 'Mature', description: 'Comprehensive AI strategy with clear roadmap' },
      { value: 5, label: 'Advanced', description: 'AI strategy integrated with business transformation' }
    ]
  },
  {
    id: 'leadership-support',
    category: 'strategy',
    question: 'How strong is leadership support for AI initiatives?',
    options: [
      { value: 1, label: 'Weak', description: 'Limited leadership understanding or support' },
      { value: 2, label: 'Moderate', description: 'Some leadership interest' },
      { value: 3, label: 'Good', description: 'Clear leadership support' },
      { value: 4, label: 'Strong', description: 'Strong leadership championing AI' },
      { value: 5, label: 'Exceptional', description: 'AI is a top leadership priority with full commitment' }
    ]
  },
  {
    id: 'investment-level',
    category: 'strategy',
    question: 'What is your current investment level in AI technologies?',
    options: [
      { value: 1, label: 'Minimal', description: 'Less than 1% of IT budget' },
      { value: 2, label: 'Low', description: '1-3% of IT budget' },
      { value: 3, label: 'Moderate', description: '3-5% of IT budget' },
      { value: 4, label: 'High', description: '5-10% of IT budget' },
      { value: 5, label: 'Significant', description: 'More than 10% of IT budget' }
    ]
  },

  // People Readiness
  {
    id: 'ai-skills',
    category: 'people',
    question: 'How would you rate your team\'s AI skills and capabilities?',
    options: [
      { value: 1, label: 'Limited', description: 'Very few team members have AI skills' },
      { value: 2, label: 'Basic', description: 'Some team members have basic AI knowledge' },
      { value: 3, label: 'Developing', description: 'Growing AI expertise across teams' },
      { value: 4, label: 'Strong', description: 'Strong AI capabilities across organization' },
      { value: 5, label: 'World-class', description: 'Industry-leading AI talent and expertise' }
    ]
  },
  {
    id: 'change-management',
    category: 'people',
    question: 'How prepared is your organization for AI-driven change?',
    options: [
      { value: 1, label: 'Unprepared', description: 'Resistance to change, no change management' },
      { value: 2, label: 'Basic', description: 'Some change management awareness' },
      { value: 3, label: 'Developing', description: 'Formal change management processes' },
      { value: 4, label: 'Mature', description: 'Comprehensive change management strategy' },
      { value: 5, label: 'Advanced', description: 'Change-ready culture with continuous adaptation' }
    ]
  },
  {
    id: 'training-programs',
    category: 'people',
    question: 'What is your current level of AI training and development?',
    options: [
      { value: 1, label: 'None', description: 'No formal AI training programs' },
      { value: 2, label: 'Basic', description: 'Occasional AI training sessions' },
      { value: 3, label: 'Regular', description: 'Regular AI training and development' },
      { value: 4, label: 'Comprehensive', description: 'Comprehensive AI upskilling programs' },
      { value: 5, label: 'Continuous', description: 'Continuous AI learning and development culture' }
    ]
  },

  // Process Readiness
  {
    id: 'ai-integration',
    category: 'processes',
    question: 'How well are AI systems integrated into your business processes?',
    options: [
      { value: 1, label: 'Isolated', description: 'AI systems operate in isolation' },
      { value: 2, label: 'Limited', description: 'Some AI integration in specific processes' },
      { value: 3, label: 'Moderate', description: 'AI integrated into key business processes' },
      { value: 4, label: 'Extensive', description: 'AI deeply integrated across most processes' },
      { value: 5, label: 'Seamless', description: 'AI seamlessly integrated into all processes' }
    ]
  },
  {
    id: 'governance-framework',
    category: 'processes',
    question: 'How mature is your AI governance and ethics framework?',
    options: [
      { value: 1, label: 'None', description: 'No AI governance framework' },
      { value: 2, label: 'Basic', description: 'Basic AI policies and guidelines' },
      { value: 3, label: 'Developing', description: 'Formal AI governance structure' },
      { value: 4, label: 'Mature', description: 'Comprehensive AI governance and ethics' },
      { value: 5, label: 'Advanced', description: 'Industry-leading AI governance and ethics' }
    ]
  },
  {
    id: 'performance-measurement',
    category: 'processes',
    question: 'How do you measure and monitor AI performance and ROI?',
    options: [
      { value: 1, label: 'Ad-hoc', description: 'No systematic measurement of AI performance' },
      { value: 2, label: 'Basic', description: 'Basic metrics and reporting' },
      { value: 3, label: 'Developing', description: 'Formal AI performance measurement' },
      { value: 4, label: 'Comprehensive', description: 'Comprehensive AI metrics and analytics' },
      { value: 5, label: 'Advanced', description: 'Real-time AI performance optimization' }
    ]
  }
];

export default function AI2030ReadinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const categoryScores = {
      technology: 0,
      strategy: 0,
      people: 0,
      processes: 0
    };

    let totalScore = 0;
    let questionCount = 0;

    assessmentQuestions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        categoryScores[question.category as keyof typeof categoryScores] += answer;
        totalScore += answer;
        questionCount++;
      }
    });

    // Calculate average scores
    const overallScore = Math.round((totalScore / questionCount) * 20); // Convert to percentage
    Object.keys(categoryScores).forEach(category => {
      const categoryQuestions = assessmentQuestions.filter(q => q.category === category);
      const categoryTotal = categoryQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      categoryScores[category as keyof typeof categoryScores] = Math.round((categoryTotal / categoryQuestions.length) * 20);
    });

    // Generate recommendations based on scores
    const recommendations = generateRecommendations(categoryScores, overallScore);
    const nextSteps = generateNextSteps(categoryScores, overallScore);

    setResult({
      overallScore,
      categoryScores,
      recommendations,
      nextSteps
    });
    setShowResults(true);
  };

  const generateRecommendations = (scores: any, overall: number) => {
    const recommendations = [];

    if (scores.technology < 60) {
      recommendations.push('Invest in AI infrastructure and data quality improvements');
      recommendations.push('Implement comprehensive data governance framework');
    }
    if (scores.strategy < 60) {
      recommendations.push('Develop a comprehensive AI strategy and roadmap');
      recommendations.push('Secure stronger leadership commitment and support');
    }
    if (scores.people < 60) {
      recommendations.push('Launch comprehensive AI training and upskilling programs');
      recommendations.push('Build change management capabilities for AI transformation');
    }
    if (scores.processes < 60) {
      recommendations.push('Integrate AI systems into core business processes');
      recommendations.push('Establish AI governance and ethics framework');
    }

    if (overall >= 80) {
      recommendations.push('Consider leading industry AI transformation initiatives');
      recommendations.push('Explore advanced AI technologies like quantum computing');
    }

    return recommendations;
  };

  const generateNextSteps = (scores: any, overall: number) => {
    const steps = [];

    if (overall < 40) {
      steps.push('Start with basic AI education and awareness programs');
      steps.push('Identify quick wins and pilot AI projects');
      steps.push('Build foundational AI infrastructure');
    } else if (overall < 60) {
      steps.push('Develop comprehensive AI strategy');
      steps.push('Invest in AI talent and training');
      steps.push('Implement AI governance framework');
    } else if (overall < 80) {
      steps.push('Scale AI initiatives across the organization');
      steps.push('Optimize AI performance and ROI');
      steps.push('Develop advanced AI capabilities');
    } else {
      steps.push('Lead industry AI transformation');
      steps.push('Explore cutting-edge AI technologies');
      steps.push('Share best practices with the industry');
    }

    return steps;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 90) return 'AI Pioneer';
    if (score >= 80) return 'AI Leader';
    if (score >= 70) return 'AI Advanced';
    if (score >= 60) return 'AI Developing';
    if (score >= 40) return 'AI Beginner';
    return 'AI Starter';
  };

  if (showResults && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI 2030 Readiness Assessment Results
            </h1>
            <p className="text-xl text-gray-600">
              Your organization's readiness for the AI-driven future
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Brain className="h-6 w-6 text-purple-600" />
                Overall AI Readiness Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-6xl font-bold mb-4 ${getScoreColor(result.overallScore)}`}>
                  {result.overallScore}%
                </div>
                <Badge className={`text-lg px-4 py-2 ${getScoreBadge(result.overallScore)}`}>
                  {getReadinessLevel(result.overallScore)}
                </Badge>
                <p className="text-gray-600 mt-4">
                  Based on your responses, your organization is {getReadinessLevel(result.overallScore).toLowerCase()} for AI transformation by 2030.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Category Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  Technology Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Infrastructure & Tools</span>
                    <span className={`font-bold ${getScoreColor(result.categoryScores.technology)}`}>
                      {result.categoryScores.technology}%
                    </span>
                  </div>
                  <Progress value={result.categoryScores.technology} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Strategy Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Leadership & Planning</span>
                    <span className={`font-bold ${getScoreColor(result.categoryScores.strategy)}`}>
                      {result.categoryScores.strategy}%
                    </span>
                  </div>
                  <Progress value={result.categoryScores.strategy} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  People Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Skills & Culture</span>
                    <span className={`font-bold ${getScoreColor(result.categoryScores.people)}`}>
                      {result.categoryScores.people}%
                    </span>
                  </div>
                  <Progress value={result.categoryScores.people} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  Process Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Integration & Governance</span>
                    <span className={`font-bold ${getScoreColor(result.categoryScores.processes)}`}>
                      {result.categoryScores.processes}%
                    </span>
                  </div>
                  <Progress value={result.categoryScores.processes} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Recommendations</CardTitle>
              <CardDescription>
                Based on your assessment, here are our recommendations for improving your AI readiness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
              <CardDescription>
                Immediate actions to accelerate your AI transformation journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Accelerate Your AI Transformation?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let Zion Tech Group help you build the AI-powered future of your organization
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Schedule Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Full Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
                setResult(null);
              }}
            >
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = assessmentQuestions[currentQuestion];
  const currentAnswer = answers[currentQ.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2030 Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Evaluate your organization's readiness for the AI-driven future
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{currentQ.question}</CardTitle>
            <CardDescription>
              Select the option that best describes your current situation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option) => (
                <div
                  key={option.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    currentAnswer === option.value
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      currentAnswer === option.value
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`} />
                    <div>
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <Button
                onClick={nextQuestion}
                disabled={!currentAnswer}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>This assessment will help you understand your organization's readiness for AI transformation by 2030.</p>
        </div>
      </div>
    </div>
  );
}