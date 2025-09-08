<<<<<<< HEAD


=======

import {Resume} from '@/types/resume';
import {PreviewHeader, ResumeBasicInfoSection, WorkExperienceSection, EducationSection, SkillsSection, CertificationsSection} from './preview';

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  resume: Resume;

  onBack: () => void;import { Resume } from "@/types/resume";

interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void;



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


import {

=======
  }
  "resume": Resume;
  "onBack": () => void;import { Resume } from "@/types/resume";"
  }
}

import { Resume } from "@/types/resume";


import {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
} from "./preview";

  CertificationsSection,"
} from "./preview";"
interface PreviewResumeProps {
  // TODO: Implement
}
  resume: Resume;,
  onBack: () => void;
}

}

export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
  return (
<<<<<<< HEAD

    <div className="space - y-6">;
      <PreviewHeader resume={resume} on_back={on_back} />;
      {/* Resume Preview */}
      <div className="bg - white text - black p - 8 rounded - lg shadow - lg print - section">;
        <ResumeBasicInfoSection basic_info={resume.basic_info} />;
        <WorkExperienceSection work_experience={resume.work_experience} />;

import { Resume } from '@/types/resume',;
import {;
  PreviewHeader,;
  ResumeBasicInfoSection,;
  WorkExperienceSection,;
  EducationSection,;
  SkillsSection,;
  CertificationsSection;
} from './preview',;
;
interface PreviewResumeProps {;
  resume:Resume,;
  onBack:() => void;
}
;
export function PreviewResume({ resume, onBack } PreviewResumeProps) {;
  return (;
    <div className="space-y-6">;
      <PreviewHeader resume={resume} onBack={onBack} />;
      ;
      {/* Resume Preview */}
      <div className="bg-white text-black p-8 rounded-lg shadow-lg print-section">;
        <ResumeBasicInfoSection basicInfo={resume.basic_info} />;
        <WorkExperienceSection workExperience={resume.work_experience} />;
        <EducationSection education={resume.education} />;
        <SkillsSection skills={resume.skills} />;
        <CertificationsSection certifications={resume.certifications} />;
      </div>;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="space-y-6">
      <PreviewHeader resume={resume} onBack={onBack} />


<<<<<<< HEAD



=======
      </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
