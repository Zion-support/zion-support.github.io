import { Resume } from "@/types/resume";"
import {
  // TODO: Implement
}
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,"
} from "./preview";"
interface PreviewResumeProps {
  // TODO: Implement
  resume: Resume;,
  onBack: () => void;
"
  // TODO: Implement
  // TODO: Implement


export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
  return ("
    <div className="space-y-6">"
</div>
      <PreviewHeader resume={resume} onBack={onBack} />
      <div className="bg-white text-black p-8 rounded-lg shadow-lg print-section">"
        <ResumeBasicInfoSection basicInfo={resume.basic_info} />

        <WorkExperienceSection workExperience={resume.work_experience} />

        <EducationSection education={resume.education} />

        <SkillsSection skills={resume.skills} />

        <CertificationsSection certifications={resume.certifications} />

    </div>;)
 </div> </div>) "