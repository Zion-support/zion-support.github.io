import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function CourseView() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string },
  const [course, setCourse] = useState<any>(null);
<<<<<<< HEAD
  const [progress, setProgress] = useState<any>({
    percent: 0,
    completedLessons: [],
  });
=======
export default function CourseView() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string },
  const [course, setCourse] = useState<any>(null);
  const [progress, setProgress] = useState<any>({ percent: 0, completedLessons: [] }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [progress, setProgress] = useState<any>({ percent: 0, completedLessons: [] }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [finalPassed, setFinalPassed] = useState(false);

  useEffect(() => {
    if (!courseId) return;
    async function load() {
      const [courseResp, progResp] = await Promise.all([
<<<<<<< HEAD
<<<<<<< HEAD
        fetch(`/api/learn/courses/${courseId}`),
        fetch(`/api/learn/progress?userId=demo-user`),
=======
        fetch(`/api/learn/courses/${courseId}`);
        fetch(`/api/learn/progress?userId=demo-user`)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        fetch(`/api/learn/courses/${courseId}`);
        fetch(`/api/learn/progress?userId=demo-user`)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ]);
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
<<<<<<< HEAD
<<<<<<< HEAD
      const cp = (progData.progress && progData.progress[courseId]) || {
        percent: 0,
        completedLessons: [],
      };
=======
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null)
    }
    load()
  }, [courseId]);

<<<<<<< HEAD
  const currentLesson = useMemo(
    () => course?.lessons?.find((l: any) => l.id === currentLessonId),
    [course, currentLessonId]
  );
=======
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null)
    }
    load()
  }, [courseId]);

  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1;
<<<<<<< HEAD
<<<<<<< HEAD
    const percent = Math.round(
      (completedCount / (course?.lessons?.length || 1)) * 100
    );
=======
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const resp = await fetch('/api/learn/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent })
    });
    const data = await resp.json();
<<<<<<< HEAD
    setProgress(data.progress);
=======
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
    const resp = await fetch('/api/learn/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent })
    });
    const data = await resp.json();
    setProgress(data.progress)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setProgress(data.progress)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
<<<<<<< HEAD
<<<<<<< HEAD
    if (currentLessonId) markLessonComplete(currentLessonId);
=======
    if (currentLessonId) markLessonComplete(currentLessonId)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    if (currentLessonId) markLessonComplete(currentLessonId)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
<<<<<<< HEAD
<<<<<<< HEAD
    setFinalPassed(passed);
=======
    setFinalPassed(passed)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setFinalPassed(passed)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (!course) return <div>Loading...</div>;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='grid lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-2 space-y-4'>
=======
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div>
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
<<<<<<< HEAD
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >
=======
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

<<<<<<< HEAD
<<<<<<< HEAD
          <section className='lg:col-span-3 space-y-4'>
=======
          <section className="lg:col-span-3 space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
                )}
              </div>
            ) : (
              <div className="text-sm text-gray-500">Select a lesson</div>
            )}

            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
<<<<<<< HEAD
                  <div className='mt-3 text-green-700'>
                    Passed! You can download your certificate below.
                  </div>
=======
          <section className="lg:col-span-3 space-y-4">
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
                )}
              </div>
            ) : (
              <div className="text-sm text-gray-500">Select a lesson</div>
            )}

            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
                  <div className="mt-3 text-green-700">Passed! You can download your certificate below.</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="mt-3 text-green-700">Passed! You can download your certificate below.</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                )}
              </div>
            ) : null}

<<<<<<< HEAD
<<<<<<< HEAD
            {finalPassed && <CertificatePreview courseId={courseId} />}
=======
            {finalPassed && (
              <CertificatePreview courseId={courseId} />
            )}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            {finalPassed && (
              <CertificatePreview courseId={courseId} />
            )}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </section>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className='space-y-4'>
=======
      <div className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
      <div className="space-y-4">
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
