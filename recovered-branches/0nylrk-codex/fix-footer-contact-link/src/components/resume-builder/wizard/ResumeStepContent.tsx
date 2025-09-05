
<<<<<<< HEAD
<<<<<<< HEAD
import { TabsContent } from "@/components/ui/tabs",
import { Resume } from "@/types/resume",
import { BasicInfoForm } from '../forms/basic-info',
import { WorkExperienceForm } from '../forms/WorkExperienceForm',
import { EducationForm } from '../forms/EducationForm',
import { SkillsForm } from '../forms/SkillsForm',
import { CertificationsForm } from '../forms/CertificationsForm',
import { PreviewResume } from '../PreviewResume',
=======
import { TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Resume } from &quot;@/types/resume&quot;;
import { BasicInfoForm } from '../forms/basic-info';
import { WorkExperienceForm } from '../forms/WorkExperienceForm';
import { EducationForm } from '../forms/EducationForm';
import { SkillsForm } from '../forms/SkillsForm';
import { CertificationsForm } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ResumeStepContentProps {
  activeTab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void
}

export const ResumeStepContent = ({ 
  activeTab,
  resume, 
  onNextStep, 
  onPrevStep 
}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value=&quot;basic-info&quot;>
        <BasicInfoForm 
          resumeId={resume?.id!} 
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
<<<<<<< HEAD
            // // // console.log("Saving basic info:", data)
=======
            // console.log(&quot;Saving basic info:&quot;, data);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          }}
          onComplete={onNextStep} 
=======

interface ResumeStepContentProps {_activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;}

export const _ResumeStepContent = (_{_activeTab, _resume, _onNextStep, _onPrevStep}: ResumeStepContentProps) => {_return (_<>
      <TabsContent value="basic-info">
        <BasicInfoForm 
          resumeId={resume?.id!} 
          initialData={_resume?.basic_info}
          onSave={_(data) => {
            // Here you would typically save the data to your backend}}
          onComplete={_onNextStep} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </TabsContent>
      
      <TabsContent value=&quot;work-experience&quot;>
        <WorkExperienceForm 
          resumeId={_resume?.id!}
          workExperiences={_resume?.work_experience || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;education&quot;>
        <EducationForm 
          resumeId={_resume?.id!}
          educationEntries={_resume?.education || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;skills&quot;>
        <SkillsForm
          resumeId={_resume?.id!}
          skills={_resume?.skills || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;certifications&quot;>
        <CertificationsForm 
          resumeId={_resume?.id!}
          certifications={_resume?.certifications || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;preview&quot;>
        <PreviewResume 
          resume={_resume as Resume} 
          onBack={_onPrevStep}
        />
      </TabsContent>
    </>
  )
},
