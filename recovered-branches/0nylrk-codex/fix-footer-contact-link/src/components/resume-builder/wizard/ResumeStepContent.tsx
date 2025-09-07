interface ResumeStepContentProps {

  activeTab: string
  resume: Resume
  onNextStep: () => void
  onPrevStep: () => void
}
  // TODO: Implement
}
  activeTab: string;,
  resume: Resume;
  onNextStep: () => void;,
  onPrevStep: () => void;




pr-12325

}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm
          resumeId={resume?.id!}

import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
      <TabsContent value="basic-info">"

        <BasicInfoForm;
          resumeId={resume?.id!}
"
import {TabsContent} from "@/components/ui/tabs";""
import {Resume} from "@/types/resume";""
pr-12325
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
interface ResumeStepContentProps {

  activeTab: string
  resume: Resume
  onNextStep: () => void
  onPrevStep: () => void
}
export const ResumeStepContent = ({
  activeTab;
  resume
  onNextStep
  onPrevStep

export const ResumeStepContent = ({ ;
  activeTab;
export const ResumeStepContent = ({ 
  activeTab,
  resume, 
  onNextStep, 
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
            // // // console.log("Saving basic info:", data)
          }}
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">
        <WorkExperienceForm
        <WorkExperienceForm 
import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
  // TODO: Implement
  resume: Resume;)
  onNextStep: () => void;


          initialData={resume?.basic_info}
          onSave={(data) => {

      <TabsContent value="work-experience">"

        <WorkExperienceForm;
        <WorkExperienceForm;"
import { TabsContent } from "@/components/ui/tabs",;""
import { Resume } from "@/types/resume",;""
pr-12325
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
import { PreviewResume } from '../PreviewResume',;
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;

    <>;
      <TabsContent value="basic-info">;"


          onSave={(data) => {;

;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;)
}: ResumeStepContentProps) => {;

    <>;"

          resumeId={resume?.id!} ;

      ;"
      <TabsContent value="work-experience">;"

        <WorkExperienceForm ;
          workExperiences={resume?.work_experience || []}
pr-12325
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
      </TabsContent>;

      <TabsContent value="education">;

        <EducationForm        />
      </TabsContent>
      <TabsContent value="education">
        <EducationForm
        <EducationForm 
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}},; interface ResumeStepContentProps {
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

        <EducationForm;
      <TabsContent value="education">;"

        <EducationForm ;
          educationEntries={resume?.education || []}

        <SkillsForm;
      <TabsContent value="skills">;"

          skills={resume?.skills || []}


        <CertificationsForm;
      <TabsContent value="certifications">;"

        <CertificationsForm ;
          certifications={resume?.certifications || []}
          onBack={onPrevStep}"
            // // // console.log("Saving basic info:", data);"
          }}
          onComplete={onNextStep} ;


          workExperiences={resume?.work_experience |[]}



        />

      <TabsContent value="education">"

          educationEntries={resume?.education |[]}



          skills={resume?.skills |[]}




      <TabsContent value="certifications">"

          certifications={resume?.certifications |[]}


      <TabsContent value="preview">;"

        <PreviewResume;
          resume={resume as Resume} 

      
    </>
  )


        <PreviewResume ;
          resume={resume as Resume} ;

    </>;
  );



};"
import { TabsContent } from '@/components / ui / tabs';
import { Resume } from '@/types / resume';
import {BasicInfoForm} from '../forms / basic - info';
import {WorkExperienceForm} from '../forms / WorkExperienceForm';
import {EducationForm} from '../forms / EducationForm';
import {SkillsForm} from '../forms / SkillsForm';
import {CertificationsForm} from '../forms / CertificationsForm';
  // TODO: Implement
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
export const ResumeStepContent = ({
  active_tab;
  resume,
  onNextStep,
}: ResumeStepContentProps) =>: any {
  // TODO: Implement
      <TabsContent value="basic - info">;"

          resume_id={resume?.id!}
          initial_data={resume?.basic_info})
          on_save={(data) => {

      <TabsContent value="work - experience">;"

          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}


          education_entries={resume?.education || []}







    </>);
  ),;
},; interface ResumeStepContentProps {
  // TODO: Implement
}export const ResumeStepContent = ({
  activeTab;
resume;
}: ResumeStepContentProps) => {"
  return (<> <TabsContent value="basic-info" > <BasicInfoForm resumeId= {"
}work-experience"> <WorkExperienceForm resumeId= {"
pr-12325
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
}

        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
  )
};
}onBack= {
  onPrevStep;"
}/>  <TabsContent value=" education"> <EducationForm resumeId= {"
}/>  <TabsContent value=" skills"> <SkillsForm resumeId= {"
}/>  <TabsContent value=" certifications"> <CertificationsForm resumeId= {"
}/>  <TabsContent value=" preview" > <PreviewResume resume= {"
}/>  </>) 
};




pr-12325
