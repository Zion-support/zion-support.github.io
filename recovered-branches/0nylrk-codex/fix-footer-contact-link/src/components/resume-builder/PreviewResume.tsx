
import { Resume } from '@/types/resume';
import {
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection
} from './preview';

interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void;
}

<<<<<<< HEAD
export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
=======
export function PreviewResume({ resumeonBack }: PreviewResumeProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
