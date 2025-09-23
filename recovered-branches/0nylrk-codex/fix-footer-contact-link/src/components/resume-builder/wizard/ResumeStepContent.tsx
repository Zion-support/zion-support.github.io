
import { TabsContent } from "@/components/ui/tabs";
import { Resume } from "@/types/resume";
import { BasicInfoForm } from '../forms/basic-info';
import { WorkExperienceForm } from '../forms/WorkExperienceForm';
import { EducationForm } from '../forms/EducationForm';
import { SkillsForm } from '../forms/SkillsForm';
import { CertificationsForm } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';

interface ResumeStepContentProps {
  activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export const ResumeStepContent = ({ 
