<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import { useRouter  } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar',
import Quiz from '../../components/learn/Quiz',
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
export default function CourseView() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
export default function CourseView() {;
  const router = useRouter();
  const { courseId } = router.query as { courseId: string }
  const [course, setCourse] = useState<any>(null);
  const [progress, setProgress] = useState<any>({
    percent: 0
    completedLessons: []
  });  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
<<<<<<< HEAD
=======
=======
    percent: 0,
    completedLessons: [],
  });
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [finalPassed, setFinalPassed] = useState(false);
  useEffect(() => {
    if (!courseId) return;
    async function load() {
      const [courseResp, progResp] = await Promise.all([
<<<<<<< HEAD
        fetch(`/api/learn/courses/${courseId}`)
        fetch(`/api/learn/progress?userId=demo-user`),      ]);
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
      const cp = (progData.progress && progData.progress[courseId]) |{
        percent: 0
        completedLessons: []
      }
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id |null);
    }
    load();
  }, [courseId]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold |0;
=======
=======
        fetch(`/api/learn/courses/${courseId}`);
        fetch(`/api/learn/progress?userId=demo-user`)
      ]);
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null)
    }
    load()
  }, [courseId]);
  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]);
  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1;
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
    async function load() {
      const [courseResp, _progResp] = await Promise.all([
        fetch(`/api/learn/courses/${courseId}`),
        fetch(`/api/learn/progress?userId=demo-user`)
      ]),
      const courseData = await courseResp.json()
      const progData = await progResp.json()
      setCourse(courseData.course),
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },
      setProgress(cp),
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null)

    }
    load()
  }, [courseId]),

  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]),

  async function markLessonComplete(_lessonId: string) {_const _completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1,
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100)

    const resp = await fetch('/api/learn/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent })
});
    const data = await resp.json();
    setProgress(data.progress)
  }
  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
    if (currentLessonId) markLessonComplete(currentLessonId)
  }
async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
    setFinalPassed(passed)
  }


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const currentLesson = useMemo(;
    () => course?.lessons?.find((l: any) => l && l.id === currentLessonId),;
    [course, currentLessonId];
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function markLessonComplete(): any (lessonId: string) {;
    const completedCount = (progress && progress.completedLessons || []).includes(lessonId);
      ? (progress && progress.completedLessons || []).length;
      : (progress && progress.completedLessons || []).length + 1;
    const percent = Math && Math.round(;
      (completedCount / (course?.lessons?.length || 1)) * 100;
<<<<<<< HEAD
=======
=======

  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1;
const percent = Math.round(
      (completedCount / (course?.lessons?.length || 1)) * 100
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    );
    const resp = await fetch('/api/learn/progress', {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({;'
        userId: 'demo-user',;
        courseId,;
        lessonId,;
        percent,;
      }),;
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const data = await resp && resp.json();
    setProgress(data && data.progress);  }

  function onModuleQuizComplete(): any (score: number) {;
    // For demo, simply mark as completed when quiz attempted;
    if (currentLessonId) markLessonComplete(currentLessonId);  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  async function onFinalQuizComplete(): any (score: number) {;
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
    setFinalPassed(passed);  }

  if (!course) return <div>Loading...</div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return (

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <button
=======

                  <button'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l && l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l && l.id)}
                  >                    {l && l.title}
                  </button>;
                </li>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
=======

import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useMemo, useState } from 'react';
=======
'
import { useEffect, useMemo, useState } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useRouter } from 'next/router';
'
import ProgressBar from '../../components/learn/ProgressBar';'
import Quiz from '../../components/learn/Quiz';'
import CertificatePreview from '../../components/learn/CertificatePreview';'
import CoachWidget from '../../components/learn/CoachWidget';
<<<<<<< HEAD
export default function CourseView(req, res) {
  try {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string };
  const [course, setCourse] = useState<any>(null);
  const [progress, setProgress] = useState<any>({ percent: 0, completedLessons: [] }),;
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [finalPassed, setFinalPassed] = useState(false);
  useEffect(() => {;
    if (!courseId) return,;
    async function load() {;
      const [courseResp, progResp] = await Promise.all([;
        fetch(`/api/learn/courses/${courseId}`);
        fetch(`/api/learn/progress?userId=demo-user`);
      ]),;
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
      const cp = (progData.progress && progData.progress[courseId]) || { percent: 0, completedLessons: [] },;
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id || null);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    load();
  }, [courseId]),;
  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]),;
  async function markLessonComplete(lessonId: string) {;
    const completedCount = (progress.completedLessons || []).includes(lessonId);
      ? (progress.completedLessons || []).length;
      : (progress.completedLessons || []).length + 1;
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
    const resp = await fetch('/api/learn/progress', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent });
    }),;
    const data = await resp.json();
    setProgress(data.progress);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function onModuleQuizComplete(score: number) {;
    // For demo, simply mark as completed when quiz attempted;
    if (currentLessonId) markLessonComplete(currentLessonId);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  async function onFinalQuizComplete(score: number) {;
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
    setFinalPassed(passed);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!course) return <div>Loading...</div>,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
    <div className="grid lg:grid-cols-3 gap-6">"
      <div className="lg:col-span-2 space-y-4">
<<<<<<< HEAD
        <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
=======
"
          <h1 className="text-2xl font-semibold">{course.title}</h1>"
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />"
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >                    {l.title}
=======
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >
                    {l.title}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </button>
                </li>
              ))}
            </ul>
          </aside>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <section className='lg:col-span-3 space-y-4'>
        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
                    {l.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
                  </button>;
                </li>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
          </aside>
          <section className="lg:col-span-3 space-y-4">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </button>;
                </li>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
          </aside>
          <section className="lg:col-span-3 space-y-4">
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            </ul>;
          </aside>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <section className='lg:col-span-3 space-y-4'>;
            {currentLesson ? (;'
              <div className='border rounded p-4'>;'
                <div className='font-medium'>{currentLesson && currentLesson.title}</div>;'
                <div className='mt-2 text-sm whitespace-pre-line'>;
                  {currentLesson && currentLesson.content}
                </div>;
                {currentLesson && currentLesson.quiz?.questions?.length ? (;'
                  <div className='mt-4'>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<section className='lg:col-span-3 space-y-4'>
            {currentLesson ? (
              <div className='border rounded p-4'>
                <div className='font-medium'>{currentLesson.title}</div>
                <div className='mt-2 text-sm whitespace-pre-line'>
                  {currentLesson.content}
                </div>
                {currentLesson.quiz?.questions?.length ? (
                  <div className='mt-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <Quiz
=======
                    <Quiz;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      questions={currentLesson && currentLesson.quiz.questions}
                      onComplete={onModuleQuizComplete}
                    />;
                  </div>;
                ) : (;
                  <button'
                    className='mt-3 px-4 py-2 bg-green-600 text-white rounded'
                    onClick={() => markLessonComplete(currentLesson && currentLesson.id)}
                  >;
                    Mark Complete;
                  </button>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                )}
              </div>;
            ) : (;
              <div className='text-sm text-gray-500'>Select a lesson</div>;
            )}


            {course && course.finalQuiz?.questions?.length ? (;
              <div className='border rounded p-4'>;
                <div className='font-medium mb-2'>Final Certification Quiz</div>;

                <Quiz
                  questions={course && course.finalQuiz.questions}
                  onComplete={onFinalQuizComplete}
                />;
                {finalPassed && (;
                  <div className='mt-3 text-green-700'>;
                    Passed! You can download your certificate below.;
                  </div>                )}
              </div>;
            ) : null}


            {finalPassed && <CertificatePreview courseId={courseId} />}          </section>;
        </div>;
      </div>;
      <div className='space-y-4'>;
        <CoachWidget />;
        <div className='border rounded p-3'>;
          <div className='font-medium'>Profile Boost</div>;
          <div className='text-sm text-gray-600 mt-1'>;
            Opt-in to boost your visibility in matches when certified skills;
            apply.;
          </div>;
          <button
            className='mt-2 px-3 py-2 bg-indigo-600 text-white rounded'
            onClick={() => alert('Preference saved (demo)')}
import {useEffect, useMemo, useState} from 'react';
import {use_router} from 'next / router';
import ProgressBar from '../../components / learn / ProgressBar';
import Quiz from '../../components / learn / Quiz';
import CertificatePreview from '../../components / learn / CertificatePreview';
import CoachWidget from '../../components / learn / CoachWidget';
export default /**
 * CourseView - Function description
 */
function CourseView() {
  const router = use_router ();
  const { course_id } = router.query as { course_id: string }
  const [course, set_course] = useState < any>(null);
  const [progress, set_progress] = useState < any>({
    percent: 0,
    completed_lessons: [],
  });  const [currentLessonId, setCurrentLessonId] = useState < string | null>(null);
  const [final_passed, setFinalPassed] = useState (false);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    async /**
 * load - Function description
 */
function load() {
      const [course_resp, prog_resp] = await Promise.all ([;
        fetch (`/api / learn / courses/${course_id}`),
        fetch (`/api / learn / progress?user_id = demo - user`),      ]);
      const course_data = await course_resp.json ();
      const prog_data = await prog_resp.json ();
      set_course (course_data.course);
      const cp = (prog_data.progress && prog_data.progress[course_id]) || {
        percent: 0,
        completed_lessons: [],
      }
      set_progress (cp);
      setCurrentLessonId (course_data?.course?.lessons?.[0]?.id || null);
    }
    load ();
  }, [course_id]);
;
  const current_lesson = useMemo (
    () => course?.lessons?.find ((l: any) => l.id === currentLessonId),
    [course, currentLessonId]);
  async /**
 * markLessonComplete - Function description
 */
function markLessonComplete() {
    const completed_count = (progress.completed_lessons || []).includes (lesson_id);
      ? (progress.completed_lessons || []).length;
      : (progress.completed_lessons || []).length + 1;
    const percent = Math.round (
      (completed_count / (course?.lessons?.length || 1)) * 100);
    const resp = await fetch ('/api / learn / progress', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({
        user_id: 'demo - user',
        course_id,
        lesson_id,
        percent,
      }),
    });
    const data = await resp.json ();
    set_progress (data.progress);  }
  /**
 * onModuleQuizComplete - Function description
 */
function onModuleQuizComplete() {
    // For demo, simply mark as completed when quiz attempted;
    if (markLessonComplete (currentLessonId)) {
  $2
}  }
  async /**
 * onFinalQuizComplete - Function description
 */
function onFinalQuizComplete() {
    const needed = course?.final_quiz?.pass_threshold || 0;
    const passed = score >= needed;
    setFinalPassed (passed);  }
  // Check condition
if (return <div > Loading...</div>) {
  $2
}
  return (
    <div className='grid lg:grid - cols - 3 gap - 6'>;
      <div className='lg:col - span - 2 space - y-4'>;
        <div>;
          <h1 className='text - 2xl font - semibold'>{course.title}</h1>;
          <div className='text - gray - 500 text - sm'>;
            {course.category} • {course.level}
          </div>;
          <div className='mt - 3'>;
            <ProgressBar value={progress.percent || 0} />;
            <div className='text - xs text - gray - 500 mt - 1'>;
              Progress: {progress.percent || 0}%;
            </div>;
          </div>;
        </div>;
        <div className='grid lg:grid - cols - 5 gap - 4'>;
          <aside className='lg:col - span - 2 border rounded p - 3 h - max'>;
            <div className='font - medium mb - 2'>Lessons</div>;
            <ul className='space - y-2'>;
              {course.lessons?.map ((l: any) => (
                <li key={l.id}>;
                  <button;
                    className={`w - full text - left px - 3 py - 2 rounded border ${currentLessonId === l.id ? 'bg - blue - 50 dark:bg - blue - 900 / 20' : ''}`}
                    on_click={() => setCurrentLessonId (l.id)}
                  >                    {l.title}
                  </button>;
                </li>))}
            </ul>;
          </aside>;
          <section className='lg:col - span - 3 space - y-4'>;
            {current_lesson ? (
              <div className='border rounded p - 4'>;
                <div className='font - medium'>{current_lesson.title}</div>;
                <div className='mt - 2 text - sm whitespace - pre - line'>;
                  {current_lesson.content}
                </div>;
                {current_lesson.quiz?.questions?.length ? (
                  <div className='mt - 4'>;
                    <Quiz;
                      questions={current_lesson.quiz.questions}
                      on_complete={onModuleQuizComplete}
                    />;
                  </div>) : (
                  <button;
                    className='mt - 3 px - 4 py - 2 bg - green - 600 text - white rounded';
                    on_click={() => markLessonComplete (current_lesson.id)}
                  >;
                    Mark Complete;
                  </button>)}
              </div>) : (
              <div className='text - sm text - gray - 500'>Select a lesson</div>)}
            {course.final_quiz?.questions?.length ? (
              <div className='border rounded p - 4'>;
                <div className='font - medium mb - 2'>Final Certification Quiz</div>;
                <Quiz;
                  questions={course.final_quiz.questions}
                  on_complete={onFinalQuizComplete}
                />;
                {final_passed && (
                  <div className='mt - 3 text - green - 700'>;
                    Passed! You can download your certificate below.;
                  </div>                )}
              </div>) : null}
            {final_passed && <CertificatePreview course_id={course_id} />}          </section>;
        </div>;
      </div>;
      <div className='space - y-4'>;
        <CoachWidget />;
        <div className='border rounded p - 3'>;
          <div className='font - medium'>Profile Boost</div>;
          <div className='text - sm text - gray - 600 mt - 1'>;
            Opt - in to boost your visibility in matches when certified skills;
            apply.;
          </div>;
          <button;
            className='mt - 2 px - 3 py - 2 bg - indigo - 600 text - white rounded';
            on_click={() => alert ('Preference saved (demo)')}

          >;
            Enable Boost;
          </button>;
        </div>;
      </div>;


=======

          <section className="lg:col-span-3 space-y-4">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {currentLesson ? (
              <div className="border rounded p-4">
                <div className="font-medium">{currentLesson.title}</div>
=======


            {currentLesson ? ("
              <div className="border rounded p-4">"
                <div className="font-medium">{currentLesson.title}</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="mt-2 text-sm whitespace-pre-line">{currentLesson.content}</div>
                {currentLesson.quiz?.questions?.length ? ("
                  <div className="mt-4">
                    <Quiz questions={currentLesson.quiz.questions} onComplete={onModuleQuizComplete} />
                  </div>
                ) : ("
                  <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded" onClick={() => markLessonComplete(currentLesson.id)}>Mark Complete</button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                )}
              </div>
            ) : (


              <div className="text-sm text-gray-500">Select a lesson</div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


                  <div className="mt-3 text-green-700">Passed! You can download your certificate below.</div>
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            ) : null  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
            {finalPassed && (;
              <CertificatePreview courseId={courseId} />;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
                  <div className='mt-3 text-green-700'>
                    Passed! You can download your certificate below.
                  </div>
                )}
              </div>
            ) : null}

{finalPassed && <CertificatePreview courseId={courseId} />}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </section>
        </div>
      </div>

<<<<<<< HEAD
=======

            {course.finalQuiz?.questions?.length ? ("
              <div className="border rounded p-4">"
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (

          </section>
        </div>
      </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="space-y-4">


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
      <div className="space-y-4">
=======
<div className='space-y-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
=======
        <CoachWidget />"
        <div className="border rounded p-3">"
          <div className="font-medium">Profile Boost</div>"
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
  )
}
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}



  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934







<<<<<<< HEAD

=======
<<<<<<< HEAD

    </div>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
