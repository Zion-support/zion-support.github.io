
<<<<<<< HEAD



interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import {Resume} from '@/types/resume';
import {PreviewHeader, ResumeBasicInfoSection, WorkExperienceSection, EducationSection, SkillsSection, CertificationsSection} from './preview';






<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { Resume } from '@/types/resume',;
import {;
  PreviewHeader,;
  ResumeBasicInfoSection,;
  WorkExperienceSection,;
  EducationSection,;
  SkillsSection,;
  CertificationsSection;
} from './preview',;
interface PreviewResumeProps {;
  resume: Resume;
  onBack: () => void;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}

export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
  return (
    <div className="space-y-6">
      <PreviewHeader resume={resume} onBack={onBack} />
      {/* Resume Preview */}
      <div className="bg-white text-black p-8 rounded-lg shadow-lg print-section">
        <ResumeBasicInfoSection basicInfo={resume.basic_info} />
        <WorkExperienceSection workExperience={resume.work_experience} />
        <EducationSection education={resume.education} />
        <SkillsSection skills={resume.skills} />
        <CertificationsSection certifications={resume.certifications} />
      </div>
    </div>
  );
}
  )
}

<<<<<<< HEAD
;
;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
