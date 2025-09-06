
<<<<<<< HEAD
import { TabsContent } from "@/components/ui/tabs",
import { Resume } from "@/types/resume";
import { BasicInfoForm  } from '../forms/basic-info';
import { WorkExperienceForm  } from '../forms/WorkExperienceForm';
import { EducationForm  } from '../forms/EducationForm';
import { SkillsForm  } from '../forms/SkillsForm';
import { CertificationsForm  } from '../forms/CertificationsForm';
import { PreviewResume } from '../PreviewResume';
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
}: ResumeStepContentProps) => {
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm
          resumeId={resume?.id!}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
          }}
<<<<<<< HEAD
          onComplete={onNextStep}
        />
      </TabsContent>
      <TabsContent value="work-experience">
=======
          onComplete={onNextStep} ;
        />;
      </TabsContent>;

      <TabsContent value="work-experience">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <WorkExperienceForm
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="education">
=======
        />;
      </TabsContent>;

      <TabsContent value="education">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <EducationForm
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="skills">
=======
        />;
      </TabsContent>;

      <TabsContent value="skills">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <SkillsForm
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="certifications">
=======
        />;
      </TabsContent>;

      <TabsContent value="certifications">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        />;
      </TabsContent>;

      <TabsContent value="preview">;
        <PreviewResume
          resume={resume as Resume} 
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
