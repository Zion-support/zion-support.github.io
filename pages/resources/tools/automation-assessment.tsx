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
        <Head>
          <title>Automation Readiness Assessment - Results | Zion Tech Group</title>
          <meta name="description" content="View your automation readiness assessment results and get personalized recommendations." />
        </Head>
        
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <nav className="mb-8">
                <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Resources
                </Link>
              </nav>

              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Assessment Results</h1>
                <p className="text-white/80 text-lg">Your automation readiness evaluation is complete</p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {_result.level}</h2>
                <p className="text-white/90 text-lg mb-6">{_result.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {_questions.map((q, _index) => (
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <h3 className="font-semibold text-cyan-400 mb-2">{_q.question}</h3>
                      <p className="text-white/80 text-sm">Score: {_answers[q.id] || 0}/5</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={_resetAssessment}
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Retake Assessment
                  </button>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    Get Personalized Recommendations
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  const _currentQ = questions[currentQuestion];

  return (_<>
      <Head>
        <title>Automation Readiness Assessment | Zion Tech Group</title>
        <meta name="description" content="Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

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
                  </label>
                ))}
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={_() => setCurrentQuestion(Math.max(0, _currentQuestion - 1))}
                  disabled={_currentQuestion === 0}
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <button 
                  onClick={_nextQuestion}
                  disabled={_!answers[currentQ.id]}
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {_currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}