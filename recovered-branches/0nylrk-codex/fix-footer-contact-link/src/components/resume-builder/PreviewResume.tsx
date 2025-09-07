import { Resume } from "@/types/resume";
import {
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
} from "./preview";

<<<<<<< HEAD
import {Resume} from '@/types/resume';
import {PreviewHeader, ResumeBasicInfoSection, WorkExperienceSection, EducationSection, SkillsSection, CertificationsSection} from './preview';

import { Resume } from '@/types/resume';
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
  onBack: () => void;import { Resume } from "@/types/resume";
import {
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
} from "./preview";

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void;
}

<<<<<<< HEAD
}

=======
export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
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
<<<<<<< HEAD
}  );
}

    </div>;
  ),;}
 </div> </div>) 
}
  );
}
}
;

  );
}
  )
}
;
;
=======
  );
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
