
=======

import React, { useState } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
export default function ToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0),
  const [answers, setAnswers] = useState<{ [key: string]: number }>({}),
  const [showResults, setShowResults] = useState(false),


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function ToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 'current-automation'
      question: 'What is your current level of automation?'
      options: [
        'No automation - everything is manualBasic automation - some repetitive tasks automatedModerate automation - multiple processes automatedAdvanced automation - most processes automatedFully automated - autonomous systems in place'
      ]
    }
    {
      id: 'team-expertise'
      question: 'How would you rate your team\'s AI/automation expertise?'
      options: [
        'No expertise - team needs trainingBeginner - some basic knowledgeIntermediate - can implement basic solutionsAdvanced - can build complex systemsExpert - can innovate and lead'
      ]


      options: [
        'No support - resistance to changeWeak support - some interest but no actionModerate support - willing to try pilot projectsStrong support - actively championing automationFull support - automation is strategic priority'
      ]
    }

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (showResults) {
    const result = calculateScore()
    return (
      <>

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
                <h2 className={`text-3xl font-bold mb-4 ${result.color}`}>Level: {result.level}</h2>
                <p className="text-white/90 text-lg mb-6">{result.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {questions.map((q, index) => (
                    <div key={q.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <h3 className="font-semibold text-cyan-400 mb-2">{q.question}</h3>

                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  <button

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Retake Assessment
                  </button>

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
    )
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

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

              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
            </div>


            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"

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

                <button

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

=======
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
=======
  );
};
=======
                <button
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </button>;
              </div>;
            </div>;
          </div>;
        </main>;
      </div>;
<<<<<<< HEAD
=======

    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
