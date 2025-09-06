<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
export default function ToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0),
  const [answers, setAnswers] = useState<{ [key: string]: number }>({}),
  const [showResults, setShowResults] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const questions = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function ToolPage() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [showResults, setShowResults] = useState(false)
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const questions = [
    {
      id: 'current-automation'
      question: 'What is your current level of automation?'
      options: [
<<<<<<< HEAD
        'No automation - everything is manualBasic automation - some repetitive tasks automatedModerate automation - multiple processes automatedAdvanced automation - most processes automatedFully automated - autonomous systems in place'
      ]
    }
    {
      id: 'team-expertise'
      question: 'How would you rate your team\'s AI/automation expertise?'
      options: [
        'No expertise - team needs trainingBeginner - some basic knowledgeIntermediate - can implement basic solutionsAdvanced - can build complex systemsExpert - can innovate and lead'
      ]
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'No automation - everything is manual',
        'Basic automation - some repetitive tasks automated',
        'Moderate automation - multiple processes automated',
        'Advanced automation - most processes automated',
        'Fully automated - autonomous systems in place',
      ],
    },
    {
      id: 'team-expertise',
      question: "How would you rate your team's AI/automation expertise?",
      options: [
<<<<<<< HEAD
        'No expertise - team needs trainingBeginner - some basic knowledgeIntermediate - can implement basic solutionsAdvanced - can build complex systemsExpert - can innovate and lead'
      ]
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      options: [
        'No support - resistance to changeWeak support - some interest but no actionModerate support - willing to try pilot projectsStrong support - actively championing automationFull support - automation is strategic priority'
      ]
    }
<<<<<<< HEAD
<<<<<<< HEAD

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }
  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 5
    const percentage = (totalScore / maxScore) * 100
    if (percentage >= 80) return { level: 'Advanced', color: 'text-green-400', description: 'Your organization is well-positioned for advanced automation initiatives.' }
    if (percentage >= 60) return { level: 'Intermediate', color: 'text-yellow-400', description: 'You have a solid foundation and can move forward with strategic automation.' }
    if (percentage >= 40) return { level: 'Beginner', color: 'text-orange-400', description: 'You have some groundwork to do before major automation projects.' }
    return { level: 'Foundation', color: 'text-red-400', description: 'Focus on building fundamentals before automation projects.' }
  }
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function ToolPage(req, res) {
  try {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
]
=======
  ]
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react',
import Head from 'next / head',
import Link from 'next / link',
export default /**
 * ToolPage - Function description
 */
function ToolPage() {
  const [current_question, setCurrentQuestion] = useState (0),
  const [answers, set_answers] = useState<{ [key: string]: number }>({}),
  const [show_results, setShowResults] = useState (false),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const questions = [;
    {
      id: 'current - automation',
      question: 'What is your current level of automation?',
      options: [;
        'No automation - everything is manual_basic automation - some repetitive tasks automated_moderate automation - multiple processes automated_advanced automation - most processes automated_fully automated - autonomous systems in place';
      ];
    },
    {
      id: 'team - expertise',
      question: 'How would you rate your team's AI / automation expertise?',
      options: [;
        'No expertise - team needs training_beginner - some basic knowledge_intermediate - can implement basic solutions_advanced - can build complex systems_expert - can innovate and lead';
      ];
    },
    {
      id: 'data - quality',
      question: 'How would you assess your data quality and accessibility?',
      options: [;
        'Poor - data is scattered and unreliable_fair - some data available but needs cleaning_good - most data is accessible and clean_very good - comprehensive data with good structure_excellent - real - time, high - quality data streams';
      ];
    },
    {
      id: 'budget - commitment',
      question: 'What is your budget commitment for automation initiatives?',
      options: [;
        'No budget allocated_limited budget - under $50KModerate budget - $50K to $200KSignificant budget - $200K to $1MUnlimited budget - whatever it takes';
      ];
    },
    {
      id: 'executive - support',
      question: 'How strong is executive support for automation?',
      options: [;
        'No support - resistance to change_weak support - some interest but no action_moderate support - willing to try pilot projects_strong support - actively championing automation_full support - automation is strategic priority';
      ];

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
=======
        'No expertise - team needs training',
        'Beginner - some basic knowledge',
        'Intermediate - can implement basic solutions',
        'Advanced - can build complex systems',
        'Expert - can innovate and lead',
      ],
    },
    {
      id: 'data-quality'
      question: 'How would you assess your data quality and accessibility?'
      options: [
'Poor - data is scattered and unreliable',
        'Fair - some data available but needs cleaning',
        'Good - most data is accessible and clean',
        'Very good - comprehensive data with good structure',
        'Excellent - real-time, high-quality data streams',
      ],
    },
    {
      id: 'budget-commitment'
      question: 'What is your budget commitment for automation initiatives?'
      options: [
'No budget allocated',
        'Limited budget - under $50K',
        'Moderate budget - $50K to $200K',
        'Significant budget - $200K to $1M',
        'Unlimited budget - whatever it takes',
      ],
    },
    {
      id: 'executive-support'
      question: 'How strong is executive support for automation?'
      options: [
'No support - resistance to change',
        'Weak support - some interest but no action',
        'Moderate support - willing to try pilot projects',
        'Strong support - actively championing automation',
        'Full support - automation is strategic priority',
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0
    );
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80)
      return {
        level: 'Advanced',
        color: 'text-green-400',
        description:
          'Your organization is well-positioned for advanced automation initiatives.',
      };
    if (percentage >= 60)
      return {
        level: 'Intermediate',
        color: 'text-yellow-400',
        description:
          'You have a solid foundation and can move forward with strategic automation.',
      };
    if (percentage >= 40)
      return {
        level: 'Beginner',
        color: 'text-orange-400',
        description:
          'You have some groundwork to do before major automation projects.',
      };
    return {
      level: 'Foundation',
      color: 'text-red-400',
      description: 'Focus on building fundamentals before automation projects.',
    };
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}
  ],;
  const handleAnswer = (questionId: string, value: number) => {;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  },;
  const calculateScore = () => {;
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0),;
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    if (percentage >= 80) return { level: 'Advanced', color: 'text-green-400', description: 'Your organization is well-positioned for advanced automation initiatives.' },;
    if (percentage >= 60) return { level: 'Intermediate', color: 'text-yellow-400', description: 'You have a solid foundation and can move forward with strategic automation.' },;
    if (percentage >= 40) return { level: 'Beginner', color: 'text-orange-400', description: 'You have some groundwork to do before major automation projects.' },;
    return { level: 'Foundation', color: 'text-red-400', description: 'Focus on building fundamentals before automation projects.'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const nextQuestion = () => {;
    if (currentQuestion < questions.length - 1) {;
      setCurrentQuestion(currentQuestion + 1);
    } else {;
      setShowResults(true);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
  },
  const resetAssessment = () => {
=======
  },
  const resetAssessment = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }
  },
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  },
  const calculate_score = () =>: any {
    const total_score = Object.values (answers).reduce ((sum, score) => sum + score, 0),
    const max_score = questions.length * 5,
    const percentage = (total_score / max_score) * 100,
    // Check condition
if (return { level: 'Advanced', color: 'text - green - 400', description: 'Your organization is well - positioned for advanced automation initiatives.' }, ) {
  $2
}
    // Check condition
if (return { level: 'Intermediate', color: 'text - yellow - 400', description: 'You have a solid foundation and can move forward with strategic automation.' }, ) {
  $2
}
    // Check condition
if (return { level: 'Beginner', color: 'text - orange - 400', description: 'You have some groundwork to do before major automation projects.' }, ) {
  $2
}
    return { level: 'Foundation', color: 'text - red - 400', description: 'Focus on building fundamentals before automation projects.' }
  },
  const next_question = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentQuestion (current_question + 1);
    } else {
      setShowResults (true);
    }

    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false)
  };


=======

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    setCurrentQuestion(0);
    setAnswers({});
setShowResults(false);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (showResults) {
    const result = calculateScore()
    return (
      <>
<<<<<<< HEAD

          <title>Automation Readiness Assessment - Results | Zion Tech Group</title>
          <meta name="description" content="View your automation readiness assessment results and get personalized recommendations." />
        </Head>
=======
        <Head>
<title>
            Automation Readiness Assessment - Results | Zion Tech Group
          </title>
          <meta
            name='description'
            content='View your automation readiness assessment results and get personalized recommendations.'
          />
        </Head>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
          <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <nav className="mb-8">
                <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Assessment Results</h1>
                <p className="text-white/80 text-lg">Your automation readiness evaluation is complete</p>
=======

        <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
          <main className='container mx-auto px-6 py-12'>
            <div className='max-w-4xl mx-auto'>
              <nav className='mb-8'>
                <Link
                  href='/resources'
                  className='text-cyan-400 hover:text-cyan-300 transition-colors'
                >
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  ← Back to Resources
                </Link>
              </nav>

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Assessment Results</h1>
                <p className="text-white/80 text-lg">Your automation readiness evaluation is complete</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {result.level}</h2>
                <p className="text-white/90 text-lg mb-6">{result.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {questions.map((q, index) => (
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <h3 className="font-semibold text-cyan-400 mb-2">{q.question}</h3>
<<<<<<< HEAD

                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 

                    onClick={resetAssessment}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-white mb-4'>
                  Assessment Results
                </h1>
                <p className='text-white/80 text-lg'>
                  Your automation readiness evaluation is complete
                </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              </div>

              <div className='bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8'>
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>
                  Level: {result.level}
                </h2>
                <p className='text-white/90 text-lg mb-6'>
                  {result.description}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  {questions.map((q, index) => (
<<<<<<< HEAD
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <h3 className="font-semibold text-cyan-400 mb-2">{q.question}</h3>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <button
                    onClick={resetAssessment}
                    onClick={resetAssessment  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======


                      <p className="text-white/80 text-sm">Score: {answers[q.id] || 0}/5</p>


                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

                      <p className="text-white/80 text-sm">Score: {answers[q.id] || 0}/5</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <button 

                    onClick={resetAssessment}
<<<<<<< HEAD
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
=======

                      <p className="text-white/80 text-sm">Score: {answers[q.id] || 0}/5</p>
=======
                    <div
                      key={q.id}
                      className='bg-white/10 rounded-lg p-4 border border-white/20'
                    >
                      <h3 className='font-semibold text-cyan-400 mb-2'>
                        {q.question}
                      </h3>
                      <p className='text-white/80 text-sm'>
                        Score: {answers[q.id] || 0}/5
                      </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    </div>
                  ))}
                </div>

<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <button 

=======
<div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    onClick={resetAssessment}
                    className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >
                    Retake Assessment
                  </button>
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link
                  <Link 
                  <Link
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"

=======
                    href="/contact"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
=======
                  <Link
                    href='/contact'
                    className='px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >
                    Get Personalized Recommendations
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
<<<<<<< HEAD
    )
<<<<<<< HEAD
=======
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
    )
              </div>
            </div>


            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              <div className="space-y-4 mb-8">
=======
);
  }
  const currentQ = questions[currentQuestion]
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <>
      <Head>
        <title>Automation Readiness Assessment | Zion Tech Group</title>
<<<<<<< HEAD
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

              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"

=======


}
  const currentQ = questions[currentQuestion],


            <div className=&quot;text-center mb-12&quot;>
              <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>Automation Readiness Assessment</h1>
              <p className=&quot;text-white/80 text-lg&quot;>Evaluate your organization's readiness for AI automation</p>
              <div className=&quot;mt-4 text-cyan-400&quot;>
=======
<meta
          name='description'
          content="Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool."
        />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <div className='max-w-4xl mx-auto'>
            <nav className='mb-8'>
              <Link
                href='/resources'
                className='text-cyan-400 hover:text-cyan-300 transition-colors'
              >
                ← Back to Resources
              </Link>
            </nav>

<div className='text-center mb-12'>
              <h1 className='text-4xl font-bold text-white mb-4'>
                Automation Readiness Assessment
              </h1>
              <p className='text-white/80 text-lg'>
                Evaluate your organization's readiness for AI automation
              </p>
              <div className='mt-4 text-cyan-400'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

<<<<<<< HEAD
            <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
              <h2 className=&quot;text-2xl font-bold mb-6 text-white&quot;>{currentQ.question}</h2>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                {currentQ.options.map((option, index) => (
                  <label key={index} className=&quot;flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer&quot;>
                    <input
                      type=&quot;radio&quot;

=======
<<<<<<< HEAD
  const currentQ = questions[currentQuestion]

=======
}
  const currentQ = questions[currentQuestion],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <>
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


                Question {currentQuestion + 1} of {questions.length  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
            </div>


            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<div className='bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20'>
              <h2 className='text-2xl font-bold mb-6 text-white'>
                {currentQ.question}
              </h2>

              <div className='space-y-4 mb-8'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                {currentQ.options.map((option, index) => (
                  <label
                    key={index}
                    className='flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer'
                  >
                    <input
<<<<<<< HEAD
                      type="radio"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },;
  const resetAssessment = () => {;
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };
  if (showResults) {;
    const result = calculateScore();
    return (;
      <>;
        <Head>;
          <title>Automation Readiness Assessment - Results | Zion Tech Group</title>;
          <meta name="description" content="View your automation readiness assessment results and get personalized recommendations." />;
        </Head>;
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
          <main className="container mx-auto px-6 py-12">;
            <div className="max-w-4xl mx-auto">;
              <nav className="mb-8">;
                <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                  ← Back to Resources;
                </Link>;
              </nav>;
              <div className="text-center mb-12">;
                <h1 className="text-4xl font-bold text-white mb-4">Assessment Results</h1>;
                <p className="text-white/80 text-lg">Your automation readiness evaluation is complete</p>;
              </div>;
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-8">;
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {result.level}</h2>;
                <p className="text-white/90 text-lg mb-6">{result.description}</p>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">;
                  {questions.map((q, index) => (;
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">;
                      <h3 className="font-semibold text-cyan-400 mb-2">{q.question}</h3>;
                      <p className="text-white/80 text-sm">Score: {answers[q.id] || 0}/5</p>;
                    </div>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <button;
                    onClick={resetAssessment  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300";
                  >;
                    Retake Assessment;
                  </button>;
                  <Link;
                    href="/contact";
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300";
                  >;
                    Get Personalized Recommendations;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </main>;
        </div>;
      </>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const currentQ = questions[currentQuestion];
  return (;
    <>;
      <Head>;
        <title>Automation Readiness Assessment | Zion Tech Group</title>;
        <meta name="description" content="Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool." />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <div className="max-w-4xl mx-auto">;
            <nav className="mb-8">;
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                ← Back to Resources;
              </Link>;
            </nav>;
            <div className="text-center mb-12">;
              <h1 className="text-4xl font-bold text-white mb-4">Automation Readiness Assessment</h1>;
              <p className="text-white/80 text-lg">Evaluate your organization's readiness for AI automation</p>;
              <div className="mt-4 text-cyan-400">;
                Question {currentQuestion + 1} of {questions.length  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">;
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>;
              <div className="space-y-4 mb-8">;
                {currentQ.options.map((option, index) => (;
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">;
                    <input;
                      type="radio";
                      name={currentQ.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      value={index + 1  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      checked={answers[currentQ.id] === index + 1  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onChange={() => handleAnswer(currentQ.id, index + 1)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"

                    />
                    <span className="text-white/90">{option}</span>
=======
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"
=======
                      type='radio'
                      name={currentQ.id}
                      value={index + 1}
                      checked={answers[currentQ.id] === index + 1}
                      onChange={() => handleAnswer(currentQ.id, index + 1)}
className='mr-3 text-cyan-400 focus:ring-cyan-400'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    />
                    <span className='text-white/90'>{option}</span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </label>
                ))}
              </div>

<<<<<<< HEAD
<<<<<<< HEAD

              <div className="flex justify-between">
                <button 
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
=======
=======
<div className='flex justify-between'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                <button
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  disabled={currentQuestion === 0  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    />
                    <span className="text-white/90">{option}</span>
                  </label>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>


              <div className="flex justify-between">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
<<<<<<< HEAD
<<<<<<< HEAD
                <button
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <button 
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
=======
                <button 
=======
                  className='px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  Previous
                </button>

                <button
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
                  className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {currentQuestion === questions.length - 1
                    ? 'Get Results'
                    : 'Next'}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
};
                <button
                  onClick={nextQuestion  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  const reset_assessment = () =>: any {
    setCurrentQuestion (0),
    set_answers ({}),
    setShowResults (false);
  },
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const result = calculate_score (),
    return (
      <>;
        <Head>;
          <title > Automation Readiness Assessment - Results | Zion Tech Group</title>;
          <meta name="description" content="View your automation readiness assessment results and get personalized recommendations." />;
        </Head>;
        <div className="min - h-screen bg - gradient - to - br from - indigo - 950 via - purple - 950 to - slate - 950 text - white">;
          <main className="container mx - auto px - 6 py - 12">;
            <div className="max - w-4xl mx - auto">;
              <nav className="mb - 8">;
                <Link href="/resources" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
                  ← Back to Resources;
                </Link>;
              </nav>;
              <div className="text - center mb - 12">;
                <h1 className="text - 4xl font - bold text - white mb - 4">Assessment Results</h1>;
                <p className="text - white / 80 text - lg">Your automation readiness evaluation is complete</p>;
              </div>;
              <div className="bg - gradient - to - r from - cyan - 500 / 10 to - fuchsia - 500 / 10 rounded - 2xl p - 8 border border - cyan - 500 / 20 mb - 8">;
                <h2 className={`text - 3xl font - bold mb - 4 ${result.color}`}>Level: {result.level}</h2>;
                <p className="text - white / 90 text - lg mb - 6">{result.description}</p>;
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb - 8">;
                  {questions.map ((q, index) => (
                    <div key={q.id} className="bg - white / 10 rounded - lg p - 4 border border - white / 20">;
                      <h3 className="font - semibold text - cyan - 400 mb - 2">{q.question}</h3>;
                      <p className="text - white / 80 text - sm">Score: {answers[q.id] || 0}/5</p>;
                    </div>))}
                </div>;
                <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <button;
                    on_click={reset_assessment}
                    className="bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 text - white px - 8 py - 4 rounded - lg font - semibold hover: from - cyan - 500 hover:to - fuchsia - 500 transition - all duration - 300";
                  >;
                    Retake Assessment;
                  </button>;
                  <Link;
                    href="/contact";
                    className="px - 8 py - 4 border border - white / 20 rounded - lg text - white hover:border - cyan - 400 / 50 transition - all duration - 300";
                  >;
                    Get Personalized Recommendations;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </main>;
        </div>;
      </>);
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
  const current_q = questions[current_question],
  return (
    <>;
      <Head>;
        <title > Automation Readiness Assessment | Zion Tech Group</title>;
        <meta name="description" content="Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool." />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - indigo - 950 via - purple - 950 to - slate - 950 text - white">;
        <main className="container mx - auto px - 6 py - 12">;
          <div className="max - w-4xl mx - auto">;
            <nav className="mb - 8">;
              <Link href="/resources" className="text - cyan - 400 hover:text - cyan - 300 transition - colors">;
                ← Back to Resources;
              </Link>;
            </nav>;
            <div className="text - center mb - 12">;
              <h1 className="text - 4xl font - bold text - white mb - 4">Automation Readiness Assessment</h1>;
              <p className="text - white / 80 text - lg">Evaluate your organization's readiness for AI automation</p>;
              <div className="mt - 4 text - cyan - 400">;
                Question {current_question + 1} of {questions.length}
              </div>;
            </div>;
            <div className="bg - gradient - to - r from - cyan - 500 / 10 to - fuchsia - 500 / 10 rounded - 2xl p - 8 border border - cyan - 500 / 20">;
              <h2 className="text - 2xl font - bold mb - 6 text - white">{current_q.question}</h2>;
              <div className="space - y-4 mb - 8">;
                {current_q.options.map ((option, index) => (
                  <label key={index} className="flex items - center p - 4 bg - white / 10 rounded - lg border border - white / 20 hover:border - cyan - 400 / 50 transition - all duration - 300 cursor - pointer">;
                    <input;
                      type="radio";
                      name={current_q.id}
                      value={index + 1}
                      checked={answers[current_q.id] === index + 1}
                      on_change={() => handle_answer (current_q.id, index + 1)}
                      className="mr - 3 text - cyan - 400 focus:ring - cyan - 400";
                    />;
                    <span className="text - white / 90">{option}</span>;
                  </label>))}
              </div>;
              <div className="flex justify - between">;
                <button;
                  on_click={() => setCurrentQuestion (Math.max (0, current_question - 1))}
                  disabled={current_question === 0}
                  className="px - 6 py - 3 border border - white / 20 rounded - lg text - white hover:border - cyan - 400 / 50 transition - all duration - 300 disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  Previous;
                </button>;
                <button;
                  on_click={next_question}
                  disabled={!answers[current_q.id]}
                  className="bg - gradient - to - r from - cyan - 400 to - fuchsia - 400 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 500 hover:to - fuchsia - 500 transition - all duration - 300 disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  {current_question === questions.length - 1 ? 'Get Results' : 'Next'}
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
  );
};
=======
                <button
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  onClick={nextQuestion  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  disabled={!answers[currentQ.id]  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </button>;
              </div>;
            </div>;
          </div>;
        </main>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
