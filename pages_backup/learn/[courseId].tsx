import { useEffect, useMemo, useState  } from 'react';
import { useRouter  } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar',
import Quiz from '../../components/learn/Quiz',
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
export default function CourseView() {
    percent: 0,
    completedLessons: [],
  });
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
origin/cursor/automate-test-improve-and-merge-code-2533
  const [finalPassed, setFinalPassed] = useState(false);
  useEffect(() => {
    if (!courseId) return;
    async function load() {
      const [courseResp, progResp] = await Promise.all([
fetch(`/api/learn/courses/${courseId}`),
        fetch(`/api/learn/progress?userId=demo-user`),
      ]);
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
const cp = (progData.progress && progData.progress[courseId]) || {
        percent: 0,
        completedLessons: [],
      };
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id |null);
    }
    load();
  }, [courseId]);
  const currentLesson = useMemo(;
    () => course?.lessons?.find((l: any) => l && l.id === currentLessonId),;
    [course, currentLessonId];
  );

  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1;
const percent = Math.round(
      (completedCount / (course?.lessons?.length || 1)) * 100
origin/cursor/automate-test-improve-and-merge-code-2533
    );
    const resp = await fetch('/api/learn/progress', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({;
        userId: 'demo-user',;
        courseId,;
        lessonId,;
        percent,;
      }),;
    });
    const data = await resp.json();
    setProgress(data.progress);
  }

  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
if (currentLessonId) markLessonComplete(currentLessonId);
  }

  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold |0;
    const passed = score >= needed;
setFinalPassed(passed);
  }

  if (!course) return <div>Loading...</div>;
  return (
<div className='grid lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-2 space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

<section className='lg:col-span-3 space-y-4'>
            {currentLesson ? (
              <div className='border rounded p-4'>
                <div className='font-medium'>{currentLesson.title}</div>
                <div className='mt-2 text-sm whitespace-pre-line'>
                  {currentLesson.content}
                </div>
                {currentLesson.quiz?.questions?.length ? (
                  <div className='mt-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <Quiz
                      questions={currentLesson && currentLesson.quiz.questions}
                      onComplete={onModuleQuizComplete}
                    />;
                  </div>;
                ) : (;
                  <button
                    className='mt-3 px-4 py-2 bg-green-600 text-white rounded'
                    onClick={() => markLessonComplete(currentLesson && currentLesson.id)}
                  >;
                    Mark Complete;
                  </button>;
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
            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
                  <div className='mt-3 text-green-700'>
                    Passed! You can download your certificate below.
                  </div>
                )}
              </div>
            ) : null}

{finalPassed && <CertificatePreview courseId={courseId} />}
origin/cursor/automate-test-improve-and-merge-code-2533
          </section>
        </div>
      </div>

<div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
