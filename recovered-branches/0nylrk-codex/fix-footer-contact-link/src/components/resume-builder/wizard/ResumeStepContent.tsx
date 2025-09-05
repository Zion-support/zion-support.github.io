
import { TabsContent } from "@/components/ui/tabs",
import { Resume } from "@/types/resume",
import { BasicInfoForm } from '../forms/basic-info',
import { WorkExperienceForm } from '../forms/WorkExperienceForm',
import { EducationForm } from '../forms/EducationForm',
import { SkillsForm } from '../forms/SkillsForm',
import { CertificationsForm } from '../forms/CertificationsForm',
import { PreviewResume } from '../PreviewResume',interface ResumeStepContentProps {
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
        <BasicInfoForm,
resumeId={resume?.id!} 
          initialData={resume?.basicinfo}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            // // // console.log("Saving basic info:", data)          }}
          onComplete={onNextStep} 

interface ResumeStepContentProps {activeTab: string,
  resume: Resume,
  onNextStep: () => void;
  onPrevStep: () => void}

export const ResumeStepContent = (_{activeTab, resume, onNextStep, onPrevStep}: ResumeStepContentProps) => {return (_<>
      <TabsContent value="basic-info">
        <BasicInfoForm,
resumeId={resume?.id!} 
          initialData={resume?.basicinfo}
          onSave={_(data) => {
            // Here you would typically save the data to your backend}}
          onComplete={onNextStep} 
        />
      </TabsContent>
      
      <TabsContent value=&quot;work-experience&quot;>
        <WorkExperienceForm,
resumeId={resume?.id!}
          workExperiences={resume?.workexperience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;education&quot;>
        <EducationForm,
resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;skills&quot;>
        <SkillsForm,
resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;certifications&quot;>
        <CertificationsForm,
resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value=&quot;preview&quot;>
        <PreviewResume,
resume={resume as Resume} 
          onBack={onPrevStep}
        />
      </TabsContent>
    </>
  )
},
