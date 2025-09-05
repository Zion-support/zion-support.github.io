<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
export default function ToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0),
  const [answers, setAnswers] = useState<{ [key: string]: number }>({}),
  const [showResults, setShowResults] = useState(false),

  const questions = [
    {
      id: 'current-automation',
      question: 'What is your current level of automation?',
      options: [
        'No automation - everything is manualBasic automation - some repetitive tasks automatedModerate automation - multiple processes automatedAdvanced automation - most processes automatedFully automated - autonomous systems in place'
      ]
    },
    {
      id: 'team-expertise',
      question: 'How would you rate your team\'s AI/automation expertise?',
      options: [
        'No expertise - team needs trainingBeginner - some basic knowledgeIntermediate - can implement basic solutionsAdvanced - can build complex systemsExpert - can innovate and lead'
      ]
    },
    {
      id: 'data-quality',
      question: 'How would you assess your data quality and accessibility?',
      options: [
        'Poor - data is scattered and unreliableFair - some data available but needs cleaningGood - most data is accessible and cleanVery good - comprehensive data with good structureExcellent - real-time, high-quality data streams'
      ]
    },
    {
      id: 'budget-commitment',
      question: 'What is your budget commitment for automation initiatives?',
      options: [
        'No budget allocatedLimited budget - under $50KModerate budget - $50K to $200KSignificant budget - $200K to $1MUnlimited budget - whatever it takes'
      ]
    },
    {
      id: 'executive-support',
      question: 'How strong is executive support for automation?',
      options: [
        'No support - resistance to changeWeak support - some interest but no actionModerate support - willing to try pilot projectsStrong support - actively championing automationFull support - automation is strategic priority'
      ]
    }
  ],

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  },

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0),
    const maxScore = questions.length * 5,
    const percentage = (totalScore / maxScore) * 100,
    
    if (percentage >= 80) return { level: 'Advanced', color: 'text-green-400', description: 'Your organization is well-positioned for advanced automation initiatives.' },
    if (percentage >= 60) return { level: 'Intermediate', color: 'text-yellow-400', description: 'You have a solid foundation and can move forward with strategic automation.' },
    if (percentage >= 40) return { level: 'Beginner', color: 'text-orange-400', description: 'You have some groundwork to do before major automation projects.' },
    return { level: 'Foundation', color: 'text-red-400', description: 'Focus on building fundamentals before automation projects.' }
  },

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  },

  const resetAssessment = () => {
    setCurrentQuestion(0),
    setAnswers({}),
    setShowResults(false)
  },

  if (showResults) {
    const result = calculateScore(),
    return (
      <>
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ToolPage() {_const [currentQuestion, _setCurrentQuestion] = useState(0);
  const [answers, _setAnswers] = useState<{ [key: string]: number}>({});
  const [showResults, setShowResults] = useState(false);

  const _questions = [
    {_id: 'current-automation', _question: 'What is your current level of automation?', _options: [
        'No automation - everything is manual', _'Basic automation - some repetitive tasks automated', _'Moderate automation - multiple processes automated', _'Advanced automation - most processes automated', _'Fully automated - autonomous systems in place'
      ]},
    {_id: 'team-expertise', _question: 'How would you rate your team\'s AI/automation expertise?', _options: [
        'No expertise - team needs training', _'Beginner - some basic knowledge', _'Intermediate - can implement basic solutions', _'Advanced - can build complex systems', _'Expert - can innovate and lead'
      ]},
    {_id: 'data-quality', _question: 'How would you assess your data quality and accessibility?', _options: [
        'Poor - data is scattered and unreliable', _'Fair - some data available but needs cleaning', _'Good - most data is accessible and clean', _'Very good - comprehensive data with good structure', _'Excellent - real-time, _high-quality data streams'
      ]},
    {_id: 'budget-commitment', _question: 'What is your budget commitment for automation initiatives?', _options: [
        'No budget allocated', _'Limited budget - under $50K', _'Moderate budget - $50K to $200K', _'Significant budget - $200K to $1M', _'Unlimited budget - whatever it takes'
      ]},
    {_id: 'executive-support', _question: 'How strong is executive support for automation?', _options: [
        'No support - resistance to change', _'Weak support - some interest but no action', _'Moderate support - willing to try pilot projects', _'Strong support - actively championing automation', _'Full support - automation is strategic priority'
      ]}
  ];

  const _handleAnswer = (_questionId: string, _value: number) => {_setAnswers(prev => ({ ...prev, _[questionId]: value}));
  };

  const _calculateScore = () => {_const _totalScore = Object.values(answers).reduce(_(sum, _score) => sum + score, _0);
    const _maxScore = questions.length * 5;
    const _percentage = (totalScore / maxScore) * 100;
    
    if (percentage >= 80) return { level: 'Advanced', _color: 'text-green-400', _description: 'Your organization is well-positioned for advanced automation initiatives.'};
    if (percentage >= 60) return {_level: 'Intermediate', _color: 'text-yellow-400', _description: 'You have a solid foundation and can move forward with strategic automation.'};
    if (percentage >= 40) return {_level: 'Beginner', _color: 'text-orange-400', _description: 'You have some groundwork to do before major automation projects.'};
    return {_level: 'Foundation', _color: 'text-red-400', _description: 'Focus on building fundamentals before automation projects.'};
  };

  const _nextQuestion = () => {_if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);} else {_setShowResults(true);}
  };

  const _resetAssessment = () => {_setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {_const _result = calculateScore();
    return (_<>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Head>
          <title>Automation Readiness Assessment - Results | Zion Tech Group</title>
          <meta name=&quot;description&quot; content=&quot;View your automation readiness assessment results and get personalized recommendations.&quot; />
        </Head>
        
        <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
          <main className=&quot;container mx-auto px-6 py-12&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <nav className=&quot;mb-8&quot;>
                <Link href=&quot;/resources&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                  ← Back to Resources
                </Link>
              </nav>

              <div className=&quot;text-center mb-12&quot;>
                <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>Assessment Results</h1>
                <p className=&quot;text-white/80 text-lg&quot;>Your automation readiness evaluation is complete</p>
              </div>

<<<<<<< HEAD
              <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8&quot;>
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {result.level}</h2>
                <p className=&quot;text-white/90 text-lg mb-6&quot;>{result.description}</p>
                
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 mb-8&quot;>
                  {questions.map((q, index) => (
                    <div key={q.id} className=&quot;bg-white/10 rounded-lg p-4 border border-white/20&quot;>
                      <h3 className=&quot;font-semibold text-cyan-400 mb-2&quot;>{q.question}</h3>
                      <p className=&quot;text-white/80 text-sm&quot;>Score: {answers[q.id] || 0}/5</p>
=======
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {_result.level}</h2>
                <p className="text-white/90 text-lg mb-6">{_result.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {_questions.map((q, _index) => (
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <h3 className="font-semibold text-cyan-400 mb-2">{_q.question}</h3>
                      <p className="text-white/80 text-sm">Score: {_answers[q.id] || 0}/5</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>

                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <button 
<<<<<<< HEAD
                    onClick={resetAssessment}
<<<<<<< HEAD
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
=======
                    className=&quot;bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                    onClick={_resetAssessment}
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Retake Assessment
                  </button>
                  <Link 
                    href=&quot;/contact&quot;
                    className=&quot;px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300&quot;
                  >
                    Get Personalized Recommendations
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    )
  }

<<<<<<< HEAD
  const currentQ = questions[currentQuestion],
=======
  const _currentQ = questions[currentQuestion];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>Automation Readiness Assessment | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool.&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/resources&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                ← Back to Resources
              </Link>
            </nav>

<<<<<<< HEAD
            <div className=&quot;text-center mb-12&quot;>
              <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>Automation Readiness Assessment</h1>
              <p className=&quot;text-white/80 text-lg&quot;>Evaluate your organization's readiness for AI automation</p>
              <div className=&quot;mt-4 text-cyan-400&quot;>
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
              <h2 className=&quot;text-2xl font-bold mb-6 text-white&quot;>{currentQ.question}</h2>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                {currentQ.options.map((option, index) => (
                  <label key={index} className=&quot;flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer&quot;>
                    <input
                      type=&quot;radio&quot;
                      name={currentQ.id}
                      value={index + 1}
                      checked={answers[currentQ.id] === index + 1}
                      onChange={() => handleAnswer(currentQ.id, index + 1)}
                      className=&quot;mr-3 text-cyan-400 focus:ring-cyan-400&quot;
                    />
                    <span className=&quot;text-white/90&quot;>{option}</span>
=======
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Automation Readiness Assessment</h1>
              <p className="text-white/80 text-lg">Evaluate your organization's readiness for AI automation</p>
              <div className="mt-4 text-cyan-400">
                Question {_currentQuestion + 1} of {_questions.length}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{_currentQ.question}</h2>
              
              <div className="space-y-4 mb-8">
                {_currentQ.options.map((option, _index) => (_<label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"
                      name={_currentQ.id}
                      value={_index + 1}
                      checked={_answers[currentQ.id] === index + 1}
                      onChange={_() => handleAnswer(currentQ.id, _index + 1)}
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"
                    />
                    <span className="text-white/90">{_option}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </label>
                ))}
              </div>

              <div className=&quot;flex justify-between&quot;>
                <button 
<<<<<<< HEAD
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className=&quot;px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed&quot;
=======
                  onClick={_() => setCurrentQuestion(Math.max(0, _currentQuestion - 1))}
                  disabled={_currentQuestion === 0}
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Previous
                </button>
                
                <button 
<<<<<<< HEAD
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
                  className=&quot;bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed&quot;
=======
                  onClick={_nextQuestion}
                  disabled={_!answers[currentQ.id]}
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}