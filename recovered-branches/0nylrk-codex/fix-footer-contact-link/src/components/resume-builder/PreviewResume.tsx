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
interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void;
}

import { Resume } from "@/types/resume";
=======
import {Resume} from '@/types/resume';
import {PreviewHeader, ResumeBasicInfoSection, WorkExperienceSection, EducationSection, SkillsSection, CertificationsSection} from './preview';

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
  onBack: () => void;import { Resume } from "@/types/resume";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {
  PreviewHeader,
  ResumeBasicInfoSection,
  WorkExperienceSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
} from "./preview";

interface PreviewResumeProps {
  resume: Resume;
  onBack: () => void;
}

}

<<<<<<< HEAD
export function PreviewResume({ resume, onBack }: PreviewResumeProps) {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  );
}

  );
=======
}  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
