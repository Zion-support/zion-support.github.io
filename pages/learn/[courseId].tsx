<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react',
import { useRouter } from 'next/router',
import ProgressBar from '../../components/learn/ProgressBar',
import Quiz from '../../components/learn/Quiz',
import CertificatePreview from '../../components/learn/CertificatePreview',
import CoachWidget from '../../components/learn/CoachWidget',
export default function CourseView() {
  const router = useRouter(),
  const { courseId } = router.query as { courseId: string },
  const [course, setCourse] = useState<any>(null),
  const [progress, setProgress] = useState<any>({ percent: 0, completedLessons: [] }),
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null),
  const [finalPassed, setFinalPassed] = useState(false),

  useEffect(() => {
    if (!courseId) return,
=======
import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';

export default function CourseView() {_const _router = useRouter();
  const { courseId} = router.query as {_courseId: string};
  const [course, setCourse] = useState<any>(null);
  const [progress, setProgress] = useState<any>({_percent: 0, _completedLessons: []});
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [finalPassed, setFinalPassed] = useState(false);

  useEffect__(() => {_if (!courseId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    async function load() {
      const [courseResp, _progResp] = await Promise.all([
        fetch(`/api/learn/courses/${courseId}`),
        fetch(`/api/learn/progress?userId=demo-user`)
<<<<<<< HEAD
      ]),
      const courseData = await courseResp.json(),
      const progData = await progResp.json(),
      setCourse(courseData.course),
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },
      setProgress(cp),
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null)
=======
      ]);
      const _courseData = await courseResp.json();
      const _progData = await progResp.json();
      setCourse(courseData.course);
      const _cp = (progData.progress && progData.progress[courseId]) || {_percent: 0, _completedLessons: []};
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    load()
  }, [courseId]),

<<<<<<< HEAD
  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]),
=======
  const _currentLesson = useMemo__(() => course?.lessons?.find(_(l: unknown) => l.id === currentLessonId), [course, currentLessonId]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  async function markLessonComplete(_lessonId: string) {_const _completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
<<<<<<< HEAD
      : (progress.completedLessons || []).length + 1,
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100),
    const resp = await fetch('/api/learn/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent })
    }),
    const data = await resp.json(),
    setProgress(data.progress)
  }

  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
    if (currentLessonId) markLessonComplete(currentLessonId)
  }

  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold || 0,
    const passed = score >= needed,
    setFinalPassed(passed)
  }
=======
      : (progress.completedLessons || []).length + 1;
    const _percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
    const _resp = await fetch('/api/learn/progress', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId: 'demo-user', _courseId, _lessonId, _percent})
    });
    const _data = await resp.json();
    setProgress(data.progress);
  }

  function onModuleQuizComplete(_score: number) {_// For demo, _simply mark as completed when quiz attempted
    if (currentLessonId) markLessonComplete(currentLessonId);}

  async function onFinalQuizComplete(_score: number) {_const _needed = course?.finalQuiz?.passThreshold || 0;
    const _passed = score >= needed;
    setFinalPassed(passed);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!course) return <div>Loading...</div>,

<<<<<<< HEAD
  return (
    <div className=&quot;grid lg:grid-cols-3 gap-6&quot;>
      <div className=&quot;lg:col-span-2 space-y-4&quot;>
        <div>
          <h1 className=&quot;text-2xl font-semibold&quot;>{course.title}</h1>
          <div className=&quot;text-gray-500 text-sm&quot;>{course.category} • {course.level}</div>
          <div className=&quot;mt-3&quot;>
            <ProgressBar value={progress.percent || 0} />
            <div className=&quot;text-xs text-gray-500 mt-1&quot;>Progress: {progress.percent || 0}%</div>
          </div>
        </div>

        <div className=&quot;grid lg:grid-cols-5 gap-4&quot;>
          <aside className=&quot;lg:col-span-2 border rounded p-3 h-max&quot;>
            <div className=&quot;font-medium mb-2&quot;>Lessons</div>
            <ul className=&quot;space-y-2&quot;>
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
                    {l.title}
=======
  return (_<div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">{_course.title}</h1>
          <div className="text-gray-500 text-sm">{_course.category} • {_course.level}</div>
          <div className="mt-3">
            <ProgressBar value={_progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {_progress.percent || 0}%</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">
              {_course.lessons?.map((l: unknown) => (_<li key={l.id}>
                  <button className={_`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={_() => setCurrentLessonId(l.id)}>
                    {_l.title}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                </li>
              ))}
            </ul>
          </aside>

<<<<<<< HEAD
          <section className=&quot;lg:col-span-3 space-y-4&quot;>
            {currentLesson ? (
              <div className=&quot;border rounded p-4&quot;>
                <div className=&quot;font-medium&quot;>{currentLesson.title}</div>
                <div className=&quot;mt-2 text-sm whitespace-pre-line&quot;>{currentLesson.content}</div>
                {currentLesson.quiz?.questions?.length ? (
                  <div className=&quot;mt-4&quot;>
                    <Quiz questions={currentLesson.quiz.questions} onComplete={onModuleQuizComplete} />
                  </div>
                ) : (
                  <button className=&quot;mt-3 px-4 py-2 bg-green-600 text-white rounded&quot; onClick={() => markLessonComplete(currentLesson.id)}>Mark Complete</button>
=======
          <section className="lg:col-span-3 space-y-4">
            {_currentLesson ? (
              <div className="border rounded p-4">
                <div className="font-medium">{currentLesson.title}</div>
                <div className="mt-2 text-sm whitespace-pre-line">{_currentLesson.content}</div>
                {_currentLesson.quiz?.questions?.length ? (
                  <div className="mt-4">
                    <Quiz questions={currentLesson.quiz.questions} onComplete={_onModuleQuizComplete} />
                  </div>
                ) : (_<button className="mt-3 px-4 py-2 bg-green-600 text-white rounded" onClick={_() => markLessonComplete(currentLesson.id)}>Mark Complete</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            ) : (
              <div className=&quot;text-sm text-gray-500&quot;>Select a lesson</div>
            )}

<<<<<<< HEAD
            {course.finalQuiz?.questions?.length ? (
              <div className=&quot;border rounded p-4&quot;>
                <div className=&quot;font-medium mb-2&quot;>Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
                  <div className=&quot;mt-3 text-green-700&quot;>Passed! You can download your certificate below.</div>
=======
            {_course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={_onFinalQuizComplete} />
                {_finalPassed && (
                  <div className="mt-3 text-green-700">Passed! You can download your certificate below.</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            ) : null}

            {_finalPassed && (
              <CertificatePreview courseId={courseId} />
            )}
          </section>
        </div>
      </div>

      <div className=&quot;space-y-4&quot;>
        <CoachWidget />
<<<<<<< HEAD
        <div className=&quot;border rounded p-3&quot;>
          <div className=&quot;font-medium&quot;>Profile Boost</div>
          <div className=&quot;text-sm text-gray-600 mt-1&quot;>Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className=&quot;mt-2 px-3 py-2 bg-indigo-600 text-white rounded&quot; onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
=======
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={_() => alert('Preference saved (demo)')}>Enable Boost</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
}