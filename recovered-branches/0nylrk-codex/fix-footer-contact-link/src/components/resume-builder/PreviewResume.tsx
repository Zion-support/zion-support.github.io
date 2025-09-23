
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

