
import React, { useEffect, useMemo, useState } from 'react',;''
import ModuleCard from '../../components/academy/ModuleCard',;''
import ProgressTracker from '../../components/academy/ProgressTracker',;''
import CertificateView from '../../components/academy/CertificateView',;''
import { founderCourseModules } from '../../components/academy/courseData',;'
;'
const STORAGE_KEY = 'founder_course_progress_v1',;'
;
export default function FounderCoursePage() {;
  const [completed, setCompleted] = useState<Record<string boolean>>({}),;
</Record>'
    <div className="space-y-8">;"
</div>"
      <div className="space-y-3">;"
</div>"
        <h1 className="text-2xl sm:text-3xl font-semibold">Founder Course:Launch Your Zion Instance</h1>;""
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">;"
</p>
        </p>;
        <ProgressTracker completedCount={completedCount} totalCount={totalCount} />;
</ProgressTracker>
      </div>;"
      <div className="space-y-6">;"
</div>
          <ModuleCard;

            key={m.id}
            moduleId={m.id}
            title={m.title}
            points={m.points}
            isCompleted={!!completed[m.id]}
            onComplete={toggleComplete}
          />;

</ModuleCard>
      </div>;
      <CertificateView completedCount={completedCount} totalCount={totalCount} />;
</CertificateView>"
      <div className="text-xs text-gray-500 dark:text-gray-400">;"
</div>
      </div>;
    </div>;"

