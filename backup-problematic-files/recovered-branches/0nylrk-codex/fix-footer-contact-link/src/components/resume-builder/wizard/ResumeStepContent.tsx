<<<<<<< HEAD
import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;
  onPrevStep: () => void;
}
export const ResumeStepContent = ({ ;
  activeTab;
  resume, ;
  onNextStep, ;
  onPrevStep ;
}: ResumeStepContentProps) => {;
  return (
    <>;
      <TabsContent value="basic-info">;
        <BasicInfoForm
          resumeId={resume?.id!} 
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
=======

import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;
;
interface ResumeStepContentProps {;
  activeTab:string,;
  resume:Resume,;
  onNextStep:() => void,;
  onPrevStep:() => void;
}
;
export const ResumeStepContent = ({ ;
  activeTab,;
  resume, ;
  onNextStep, ;
  onPrevStep ;
} ResumeStepContentProps) => {;
  return (;
    <>;
      <TabsContent value="basic-info">;
        <BasicInfoForm ;
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            // // // console.log("Saving basic info:", data),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="work-experience">;
        <WorkExperienceForm
=======
      ;
      <TabsContent value="work-experience">;
        <WorkExperienceForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="education">;
        <EducationForm
=======
      ;
      <TabsContent value="education">;
        <EducationForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="skills">;
        <SkillsForm
=======
      ;
      <TabsContent value="skills">;
        <SkillsForm;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="certifications">;
        <CertificationsForm
=======
      ;
      <TabsContent value="certifications">;
        <CertificationsForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="preview">;
        <PreviewResume
          resume={resume as Resume} 
=======
      ;
      <TabsContent value="preview">;
        <PreviewResume ;
          resume={resume as Resume} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
  );
};
import { TabsContent } from '@/components / ui / tabs';
import { Resume } from '@/types / resume';
import {BasicInfoForm} from '../forms / basic - info';
import {WorkExperienceForm} from '../forms / WorkExperienceForm';
import {EducationForm} from '../forms / EducationForm';
import {SkillsForm} from '../forms / SkillsForm';
import {CertificationsForm} from '../forms / CertificationsForm';
import {PreviewResume} from '../PreviewResume';
interface ResumeStepContentProps {
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void;
}
export const ResumeStepContent = ({
  active_tab;
  resume,
  onNextStep,
  onPrevStep;
}: ResumeStepContentProps) =>: any {
  return (
    <>;
      <TabsContent value="basic - info">;
        <BasicInfoForm;
          resume_id={resume?.id!}
          initial_data={resume?.basic_info}
          on_save={(data) => {
            // Here you would typically save the data to your backend;
            console.log ("Saving basic info:", data);
          }}
          on_complete={onNextStep}
        />;
      </TabsContent>;
      <TabsContent value="work - experience">;
        <WorkExperienceForm;
          resume_id={resume?.id!}
          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
      </TabsContent>;
      <TabsContent value="education">;
        <EducationForm;
          resume_id={resume?.id!}
          education_entries={resume?.education || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
      </TabsContent>;
      <TabsContent value="skills">;
        <SkillsForm;
          resume_id={resume?.id!}
          skills={resume?.skills || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
      </TabsContent>;
      <TabsContent value="certifications">;
        <CertificationsForm;
          resume_id={resume?.id!}
          certifications={resume?.certifications || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
      </TabsContent>;
      <TabsContent value="preview">;
        <PreviewResume;
          resume={resume as Resume}
          on_back={onPrevStep}
        />;
      </TabsContent>;
    </>);
}
;
=======
  ),;
},; interface ResumeStepContentProps {
  activeTab: string;
resume: Resume;
onNextStep: () => void;
onPrevStep: () => void 
}export const ResumeStepContent = ({
  activeTab;
resume;
onNextStep;
onPrevStep 
}: ResumeStepContentProps) => {
  return (<> <TabsContent value="basic-info" > <BasicInfoForm resumeId= {
  resume?.id! 
}initialData= {
  resume?.basic info 
}onSave= {
  (data) => {
  //Here you would typically save the data to your backend 
}
}onComplete= {
  onNextStep 
}work-experience"> <WorkExperienceForm resumeId= {
  resume?.id! 
}workExperiences= {
  resume?.work experience || [] 
}onComplete= {
  onNextStep 
}onBack= {
  onPrevStep 
}/> </TabsContent> <TabsContent value=" education"> <EducationForm resumeId= {
  resume?.id! 
}educationEntries= {
  resume?.education || [] 
}onComplete= {
  onNextStep 
}onBack= {
  onPrevStep 
}/> </TabsContent> <TabsContent value=" skills"> <SkillsForm resumeId= {
  resume?.id! 
}skills= {
  resume?.skills || [] 
}onComplete= {
  onNextStep 
}onBack= {
  onPrevStep 
}/> </TabsContent> <TabsContent value=" certifications"> <CertificationsForm resumeId= {
  resume?.id! 
}certifications= {
  resume?.certifications || [] 
}onComplete= {
  onNextStep 
}onBack= {
  onPrevStep 
}/> </TabsContent> <TabsContent value=" preview" > <PreviewResume resume= {
  resume as Resume 
}onBack= {
  onPrevStep 
}/> </TabsContent> </>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
