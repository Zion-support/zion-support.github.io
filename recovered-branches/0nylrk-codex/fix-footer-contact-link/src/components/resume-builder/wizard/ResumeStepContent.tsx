<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx


<<<<<<< HEAD
import { TabsContent } from "@/components/ui/tabs",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ResumeStepContentProps {

  activeTab: string
  resume: Resume
  onNextStep: () => void
  onPrevStep: () => void
}

<<<<<<< HEAD
  resume, 
  onNextStep, 
  onPrevStep 
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm
          resumeId={resume?.id!}
<<<<<<< HEAD
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            // // // console.log("Saving basic info:", data)
          }}
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">

import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          }}

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { TabsContent } from "@/components/ui/tabs",
import { Resume } from "@/types/resume";
import { BasicInfoForm  } from '../forms/basic-info';
import { WorkExperienceForm  } from '../forms/WorkExperienceForm';
import { EducationForm  } from '../forms/EducationForm';
import { SkillsForm  } from '../forms/SkillsForm';
import { CertificationsForm  } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';
import { Resume } from "@/types/resume",
import { BasicInfoForm } from '../forms/basic-info',
import { WorkExperienceForm } from '../forms/WorkExperienceForm',
import { EducationForm } from '../forms/EducationForm',
import { SkillsForm } from '../forms/SkillsForm',
import { CertificationsForm } from '../forms/CertificationsForm',
import { PreviewResume } from '../PreviewResume',
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            // // // console.log("Saving basic info:", data)
          }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">
<<<<<<< HEAD
<<<<<<< HEAD

========
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <WorkExperienceForm
        <WorkExperienceForm 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;
<<<<<<< HEAD
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
=======
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;
  onPrevStep: () => void;
}
;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;
}: ResumeStepContentProps) => {;
  return (;
    <>;
      <TabsContent value="basic-info">;
        <BasicInfoForm;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
<<<<<<< HEAD
            // // // console.log("Saving basic info:", data),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="work-experience">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
<<<<<<< HEAD
        <WorkExperienceForm;

=======

        <WorkExperienceForm
=======

        <WorkExperienceForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <WorkExperienceForm
=======
      ;
      <TabsContent value="work-experience">;
        <WorkExperienceForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="education">

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="education">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx

        <EducationForm
=======

        <EducationForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <EducationForm
=======
      ;
      <TabsContent value="education">;
        <EducationForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="skills">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="certifications">

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
        />;
      </TabsContent>;
<<<<<<< HEAD
      <TabsContent value="certifications">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx

        <CertificationsForm
=======

        <CertificationsForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <CertificationsForm
=======
      ;
      <TabsContent value="certifications">;
        <CertificationsForm ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="preview">

=======
            // // // console.log("Saving basic info:", data);
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
      <TabsContent value="work-experience">;
        <WorkExperienceForm;
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="education">
        <EducationForm
        <EducationForm 
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="skills">
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="certifications">
        <CertificationsForm
        <CertificationsForm 
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="preview">
        <PreviewResume
          resume={resume as Resume}
          onBack={onPrevStep}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />
      </TabsContent>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
  );
<<<<<<< HEAD

};

=======
=======



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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeStepContent.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
