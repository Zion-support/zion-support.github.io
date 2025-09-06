
<<<<<<< HEAD
import { TabsContent } from "@/components/ui/tabs",
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {TabsContent} from "@/components/ui/tabs";
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';
import {WorkExperienceForm} from '../forms/WorkExperienceForm';
import {EducationForm} from '../forms/EducationForm';
import {SkillsForm} from '../forms/SkillsForm';
import {CertificationsForm} from '../forms/CertificationsForm';
import {PreviewResume} from '../PreviewResume';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { TabsContent } from "@/components/ui/tabs",
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Resume } from "@/types/resume";
import { BasicInfoForm  } from '../forms/basic-info';
import { WorkExperienceForm  } from '../forms/WorkExperienceForm';
import { EducationForm  } from '../forms/EducationForm';
import { SkillsForm  } from '../forms/SkillsForm';
import { CertificationsForm  } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';
<<<<<<< HEAD
=======
=======
import { Resume } from "@/types/resume",
import { BasicInfoForm } from '../forms/basic-info',
import { WorkExperienceForm } from '../forms/WorkExperienceForm',
import { EducationForm } from '../forms/EducationForm',
import { SkillsForm } from '../forms/SkillsForm',
import { CertificationsForm } from '../forms/CertificationsForm',
import { PreviewResume } from '../PreviewResume',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface ResumeStepContentProps {

  activeTab: string
  resume: Resume
  onNextStep: () => void
  onPrevStep: () => void
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export const ResumeStepContent = ({
  activeTab;
  resume
  onNextStep
  onPrevStep
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
export const ResumeStepContent = ({ ;
  activeTab;
=======
export const ResumeStepContent = ({ 
  activeTab,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  resume, 
  onNextStep, 
  onPrevStep 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm
          resumeId={resume?.id!}
<<<<<<< HEAD
=======
          initialData={resume?.basic_info}
          onSave={(data) => {
            // Here you would typically save the data to your backend
            // // // console.log("Saving basic info:", data)
          }}
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">
<<<<<<< HEAD
        <WorkExperienceForm
=======
        <WorkExperienceForm 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
import { PreviewResume } from '../PreviewResume',;
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
          }}
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">
<<<<<<< HEAD
        <WorkExperienceForm
=======

          onComplete={onNextStep} ;
        />;
      </TabsContent>;

      <TabsContent value="work-experience">;
        <WorkExperienceForm;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="education">
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
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />
      </TabsContent>
      <TabsContent value="preview">
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <PreviewResume
          resume={resume as Resume}
          onBack={onPrevStep}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </TabsContent>
    </>
  )
<<<<<<< HEAD
}

        />;
      </TabsContent>;

      <TabsContent value="preview">;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <PreviewResume
          resume={resume as Resume}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
    </>
  )
}

=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />;
      </TabsContent>;
    </>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
