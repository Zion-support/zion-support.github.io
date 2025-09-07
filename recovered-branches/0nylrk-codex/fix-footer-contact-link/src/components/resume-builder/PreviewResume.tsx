
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
  }
  "resume": Resume;
  "onBack": () => void;import { Resume } from "@/types/resume";"
  }
}

import { Resume } from "@/types/resume";


import {
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


    <div className="space-y-6">
      <PreviewHeader resume={resume} onBack={onBack} />


      </div>
