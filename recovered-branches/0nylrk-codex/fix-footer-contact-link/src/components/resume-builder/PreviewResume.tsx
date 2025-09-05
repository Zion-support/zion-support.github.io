
import {_PreviewHeader, _ResumeBasicInfoSection, _WorkExperienceSection, _EducationSection, _SkillsSection, _CertificationsSection} from './preview';

interface PreviewResumeProps {_resume: Resume;
  onBack: () => void;}

export function PreviewResume(_{_resume, _onBack}: PreviewResumeProps) {_return (
    <div className="space-y-6">
      <PreviewHeader resume={resume} onBack={_onBack} />
      
      {_/* Resume Preview */}
      <div className="bg-white text-black p-8 rounded-lg shadow-lg print-section">
        <ResumeBasicInfoSection basicInfo={_resume.basic_info} />
        <WorkExperienceSection workExperience={_resume.work_experience} />
        <EducationSection education={_resume.education} />
        <SkillsSection skills={_resume.skills} />
        <CertificationsSection certifications={_resume.certifications} />
      </div>
    </div>
  );
}
