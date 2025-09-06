<<<<<<< HEAD

import { Resume } from '@/types/resume';
import { PreviewHeader;
  ResumeBasicInfoSection;
  WorkExperienceSection;
  EducationSection;
  SkillsSection;
  CertificationsSection
 } from './preview';
=======
import { Resume } from "@/types/resume";
import {
  PreviewHeader
  ResumeBasicInfoSection
  WorkExperienceSection
  EducationSection
  SkillsSection
  CertificationsSection
} from "./preview";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface PreviewResumeProps {
  resume: Resume;
<<<<<<< HEAD
  onBack: () => void
}
=======
  onBack: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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