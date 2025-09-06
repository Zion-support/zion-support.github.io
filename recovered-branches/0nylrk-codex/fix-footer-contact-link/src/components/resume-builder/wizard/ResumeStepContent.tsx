

interface ResumeStepContentProps {

  activeTab: string
  resume: Resume
  onNextStep: () => void
  onPrevStep: () => void
}





}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm
          resumeId={resume?.id!}

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
<<<<<<< HEAD
=======
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
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
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;
  onPrevStep: () => void;
}
<<<<<<< HEAD

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
          }}

          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            // // // console.log("Saving basic info:", data)
          }}

          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">

          onComplete={onNextStep} ;
        />;
      </TabsContent>;

      <TabsContent value="work-experience">;

        <WorkExperienceForm
=======

        <WorkExperienceForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;

        <WorkExperienceForm

        <WorkExperienceForm 

        <WorkExperienceForm
      ;
      <TabsContent value="work-experience">;
        <WorkExperienceForm ;
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
      </TabsContent>;

        <EducationForm 

        <EducationForm
      ;
      <TabsContent value="education">;
        <EducationForm ;
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
        <SkillsForm
      ;
      <TabsContent value="skills">;
        <SkillsForm;
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
      </TabsContent>;

        <CertificationsForm 

        <CertificationsForm
      ;
      <TabsContent value="certifications">;
        <CertificationsForm ;
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
            // // // console.log("Saving basic info:", data);
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
      <TabsContent value="work-experience">;
        <WorkExperienceForm;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD

        />;
      </TabsContent>;

      <TabsContent value="education">;

        <EducationForm
=======

        <EducationForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        />
      </TabsContent>
      <TabsContent value="education">
        <EducationForm
        <EducationForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD

        />;
      </TabsContent>;

      <TabsContent value="skills">;

=======
        />
      </TabsContent>
      <TabsContent value="skills">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD

        />;
      </TabsContent>;

      <TabsContent value="certifications">;

        <CertificationsForm
=======

        <CertificationsForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        />
      </TabsContent>
      <TabsContent value="certifications">
        <CertificationsForm
        <CertificationsForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD

        />;
      </TabsContent>;

      <TabsContent value="preview">;
        <PreviewResume
          resume={resume as Resume} 
=======
        />
      </TabsContent>
      <TabsContent value="preview">
        <PreviewResume
          resume={resume as Resume}
          onBack={onPrevStep}
        />
      </TabsContent>
    </>
  )

        />;
      </TabsContent>;
      ;
      <TabsContent value="preview">;
        <PreviewResume ;
          resume={resume as Resume} ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
  );
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
}

        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
