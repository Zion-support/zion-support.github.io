



      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id |null);
    }
    load();
  }, [courseId]);


  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold |0;


  async function onFinalQuizComplete(): any (score: number) {;
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
    setFinalPassed(passed);  }

  if (!course) return <div>Loading...</div>;

  return (


                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l && l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l && l.id)}
                  >                    {l && l.title}
                  </button>;
                </li>;



            {currentLesson ? (
              <div className="border rounded p-4">
                <div className="font-medium">{currentLesson.title}</div>
                <div className="mt-2 text-sm whitespace-pre-line">{currentLesson.content}</div>
                {currentLesson.quiz?.questions?.length ? (
                  <div className="mt-4">
                    <Quiz questions={currentLesson.quiz.questions} onComplete={onModuleQuizComplete} />
                  </div>
                ) : (
                  <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded" onClick={() => markLessonComplete(currentLesson.id)}>Mark Complete</button>




