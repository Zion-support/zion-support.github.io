
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
<<<<<<< HEAD
  activeTab
  resume
  onNextStep
=======
  activeTab, 
  resume, 
  onNextStep, 
>>>>>>> origin/auto/autonomy-17186719616
  onPrevStep 
}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm 
          resumeId={resume?.id!} 
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
<<<<<<< HEAD
            console.log("Saving basic info:"data);
=======
            console.log("Saving basic info:", data);
>>>>>>> origin/auto/autonomy-17186719616
          }}
          onComplete={onNextStep} 
        />
      </TabsContent>
      
      <TabsContent value="work-experience">
        <WorkExperienceForm 
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="education">
        <EducationForm 
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="skills">
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="certifications">
        <CertificationsForm 
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="preview">
        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
        />
      </TabsContent>
    </>
  );
};
