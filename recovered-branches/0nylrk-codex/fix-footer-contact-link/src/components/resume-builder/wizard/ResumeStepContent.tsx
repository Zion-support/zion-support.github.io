
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
<<<<<<< HEAD


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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

<<<<<<< HEAD




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
        <WorkExperienceForm
=======

        <WorkExperienceForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

        />;
      </TabsContent>;

      <TabsContent value="skills">;

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
<<<<<<< HEAD

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


}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


        <PreviewResume 
          resume={resume as Resume} 
          onBack={onPrevStep}
<<<<<<< HEAD




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        />;
      </TabsContent>;
    </>;
  );
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
