
import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';

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

=======
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
=======

import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
=======
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import ProgressBar from '../../components/learn/ProgressBar';
import Quiz from '../../components/learn/Quiz';
import CertificatePreview from '../../components/learn/CertificatePreview';
import CoachWidget from '../../components/learn/CoachWidget';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>

                  <button className={`w-full text-left px-3 py-2 rounded border ${currentLessonId === l.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`} onClick={() => setCurrentLessonId(l.id)}>
                    {l.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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

        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>
        <CoachWidget />
        <div className="border rounded p-3">
          <div className="font-medium">Profile Boost</div>
          <div className="text-sm text-gray-600 mt-1">Opt-in to boost your visibility in matches when certified skills apply.</div>
          <button className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => alert('Preference saved (demo)')}>Enable Boost</button>
        </div>
      </div>
    </div>



}

=======

  )
}

    </div>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
