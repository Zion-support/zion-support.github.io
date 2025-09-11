<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import { useRouter  } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar',
import Quiz from '../../components/learn/Quiz',
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
export default function CourseView() {

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
  const { courseId } = router.query as { courseId: string };
  const [course, setCourse] = useState<any>(null);

  const [progress, setProgress] = useState<any>({
    percent: 0
    completedLessons: []
  });  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [finalPassed, setFinalPassed] = useState(false);
  useEffect(() => {
    if (!courseId) return;
    async function load() {
      const [courseResp, progResp] = await Promise.all([
        fetch(`/api/learn/courses/${courseId}`)
        fetch(`/api/learn/progress?userId=demo-user`),      ]);
      const courseData = await courseResp.json();
      const progData = await progResp.json();
      setCourse(courseData.course);
      const cp = (progData.progress && progData.progress[courseId]) |{
        percent: 0
        completedLessons: []
      }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setProgress(cp);
      setCurrentLessonId(courseData?.course?.lessons?.[0]?.id |null);
    }
    load();
  }, [courseId]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]);
=======

  const currentLesson = useMemo(() => course?.lessons?.find((l: any) => l.id === currentLessonId), [course, currentLessonId]);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons || []).includes(lessonId)
      ? (progress.completedLessons || []).length
      : (progress.completedLessons || []).length + 1;
    const percent = Math.round((completedCount / (course?.lessons?.length || 1)) * 100);
<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const resp = await fetch('/api/learn/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', courseId, lessonId, percent })
<<<<<<< HEAD
});
    const data = await resp.json();
    setProgress(data.progress)
  }
=======
    });
    const data = await resp.json();
    setProgress(data.progress)
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
    if (currentLessonId) markLessonComplete(currentLessonId)
  }
<<<<<<< HEAD
async function onFinalQuizComplete(score: number) {
=======

  async function onFinalQuizComplete(score: number) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const needed = course?.finalQuiz?.passThreshold || 0;
    const passed = score >= needed;
    setFinalPassed(passed)
  }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const currentLesson = useMemo(;
    () => course?.lessons?.find((l: any) => l && l.id === currentLessonId),;
    [course, currentLessonId];
  );
  async function markLessonComplete(): any (lessonId: string) {;
    const completedCount = (progress && progress.completedLessons || []).includes(lessonId);
      ? (progress && progress.completedLessons || []).length;
      : (progress && progress.completedLessons || []).length + 1;
    const percent = Math && Math.round(;
      (completedCount / (course?.lessons?.length || 1)) * 100;
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
    const data = await resp && resp.json();
    setProgress(data && data.progress);  }
<<<<<<< HEAD
  function onModuleQuizComplete(): any (score: number) {;
    // For demo, simply mark as completed when quiz attempted;
    if (currentLessonId) markLessonComplete(currentLessonId);  }
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async function onFinalQuizComplete(): any (score: number) {;
    const needed = course?.finalQuiz?.passThreshold || 0;
=======

  function onModuleQuizComplete(): any (score: number) {;
    // For demo, simply mark as completed when quiz attempted;
    if (currentLessonId) markLessonComplete(currentLessonId);  }

  async function onFinalQuizComplete(): any (score: number) {;
    const needed = course?.finalQuiz?.passThreshold || 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const passed = score >= needed;
    setFinalPassed(passed);  }

  if (!course) return <div>Loading...</div>;
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className='grid lg:grid-cols-3 gap-6'>;
      <div className='lg:col-span-2 space-y-4'>;
        <div>;
          <h1 className='text-2xl font-semibold'>{course && course.title}</h1>;
          <div className='text-gray-500 text-sm'>;
            {course && course.category} • {course && course.level}
          </div>;
          <div className='mt-3'>;
            <ProgressBar value={progress && progress.percent || 0} />;
            <div className='text-xs text-gray-500 mt-1'>;
              Progress: {progress && progress.percent || 0}%;
            </div>;
          </div>;
        </div>;
        <div className='grid lg:grid-cols-5 gap-4'>;
          <aside className='lg:col-span-2 border rounded p-3 h-max'>;
            <div className='font-medium mb-2'>Lessons</div>;
            <ul className='space-y-2'>;
              {course && course.lessons?.map((l: any) => (;
                <li key={l && l.id}>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l && l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l && l.id)}
                  >                    {l && l.title}
                  </button>;
                </li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>

import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
=======

=======
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
=======

import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';


  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
<<<<<<< HEAD


          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">

  if (!course) return <div>Loading...</div>,

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
                  </button>
                </li>
              ))}
</ul>;
=======


            </ul>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </aside>;
          <section className='lg:col-span-3 space-y-4'>;
            {currentLesson ? (;
              <div className='border rounded p-4'>;
                <div className='font-medium'>{currentLesson && currentLesson.title}</div>;
                <div className='mt-2 text-sm whitespace-pre-line'>;
                  {currentLesson && currentLesson.content}
                </div>;
                {currentLesson && currentLesson.quiz?.questions?.length ? (;
                  <div className='mt-4'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                )}
              </div>;
            ) : (;
              <div className='text-sm text-gray-500'>Select a lesson</div>;
            )}
<<<<<<< HEAD
            {course && course.finalQuiz?.questions?.length ? (;
              <div className='border rounded p-4'>;
                <div className='font-medium mb-2'>Final Certification Quiz</div>;
=======


            {course && course.finalQuiz?.questions?.length ? (;
              <div className='border rounded p-4'>;
                <div className='font-medium mb-2'>Final Certification Quiz</div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Enable Boost;
          </button>;
        </div>;
      </div>;

<<<<<<< HEAD
          <section className="lg:col-span-3 space-y-4">
          <section className="lg:col-span-3 space-y-4">
  const currentLesson = useMemo(
    () => course?.lessons?.find((l: any) => l.id === currentLessonId)
    [course, currentLessonId]
  );
  async function markLessonComplete(lessonId: string) {
    const completedCount = (progress.completedLessons |[]).includes(lessonId)
      ? (progress.completedLessons |[]).length
      : (progress.completedLessons |[]).length + 1;
    const percent = Math.round(
      (completedCount / (course?.lessons?.length |1)) * 100
    );
    const resp = await fetch('/api/learn/progress', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({
        userId: 'demo-user'
        courseId
        lessonId
        percent
      })
    });
    const data = await resp.json();
    setProgress(data.progress);  }
  function onModuleQuizComplete(score: number) {
    // For demo, simply mark as completed when quiz attempted
    if (currentLessonId) markLessonComplete(currentLessonId);  }
  async function onFinalQuizComplete(score: number) {
    const needed = course?.finalQuiz?.passThreshold |0;
    const passed = score >= needed;
    setFinalPassed(passed);  }
  if (!course) return <div>Loading...</div>;

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';
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
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h1 className='text-2xl font-semibold'>{course.title}</h1>
          <div className='text-gray-500 text-sm'>
            {course.category} • {course.level}
          </div>
          <div className='mt-3'>
            <ProgressBar value={progress.percent |0} />
            <div className='text-xs text-gray-500 mt-1'>
              Progress: {progress.percent |0}%
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-5 gap-4'>
          <aside className='lg:col-span-2 border rounded p-3 h-max'>
            <div className='font-medium mb-2'>Lessons</div>
            <ul className='space-y-2'>
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <section className='lg:col-span-3 space-y-4'>
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <div className="text-gray-500 text-sm">{course.category} • {course.level}</div>
          <div className="mt-3">
            <ProgressBar value={progress.percent || 0} />
            <div className="text-xs text-gray-500 mt-1">Progress: {progress.percent || 0}%</div>
          </div>
        </div>
<<<<<<< HEAD
        <div className='grid lg:grid-cols-5 gap-4'>
          <aside className='lg:col-span-2 border rounded p-3 h-max'>
            <div className='font-medium mb-2'>Lessons</div>
            <ul className='space-y-2'>
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setCurrentLessonId(l.id)}
                  >                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <section className='lg:col-span-3 space-y-4'>
        <div className="grid lg:grid-cols-5 gap-4">
          <aside className="lg:col-span-2 border rounded p-3 h-max">
            <div className="font-medium mb-2">Lessons</div>
            <ul className="space-y-2">
              {course.lessons?.map((l: any) => (
                <li key={l.id}>
                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
                    {l.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


            </ul>;
          </aside>;

          <section className='lg:col-span-3 space-y-4'>;
            {currentLesson ? (;
              <div className='border rounded p-4'>;
                <div className='font-medium'>{currentLesson && currentLesson.title}</div>;
                <div className='mt-2 text-sm whitespace-pre-line'>;
                  {currentLesson && currentLesson.content}
                </div>;
                {currentLesson && currentLesson.quiz?.questions?.length ? (;
                  <div className='mt-4'>;

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======

          <section className="lg:col-span-3 space-y-4">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

              <div className="text-sm text-gray-500">Select a lesson</div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
              <div className="text-sm text-gray-500">Select a lesson</div>
            )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

          </section>
        </div>
      </div>

      <div className="space-y-4">



<<<<<<< HEAD
                  <div className="mt-3 text-green-700">Passed! You can download your certificate below.</div>
                )}
              </div>
            ) : null}
            {finalPassed && (
              <CertificatePreview courseId={courseId} />
            )}
          </section>
        </div>
      </div>
<div className="space-y-4">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>



}


  )
}
<<<<<<< HEAD
    </div>);
;



    </div>);
;
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
=======
                )}
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ) : (
              <div className='text-sm text-gray-500'>Select a lesson</div>
            )}
              <div className="text-sm text-gray-500">Select a lesson</div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {course.finalQuiz?.questions?.length ? (
              <div className="border rounded p-4">
                <div className="font-medium mb-2">Final Certification Quiz</div>
                <Quiz questions={course.finalQuiz.questions} onComplete={onFinalQuizComplete} />
                {finalPassed && (
                  <div className='mt-3 text-green-700'>
                    Passed! You can download your certificate below.
                  </div>                )}
              </div>
            ) : null}
            {finalPassed && <CertificatePreview courseId={courseId} />}          </section>
        </div>
      </div>
      <div className='space-y-4'>
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
<<<<<<< HEAD
          </section>
        </div>
      </div>
      <div className="space-y-4">
=======

          </section>
        </div>
      </div>

      <div className="space-y-4">



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

}
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

    </div>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



}

=======

  )
}

    </div>);
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
