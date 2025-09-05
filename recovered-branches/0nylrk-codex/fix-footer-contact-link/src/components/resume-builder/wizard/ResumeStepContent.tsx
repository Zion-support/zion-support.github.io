
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
        />
      </TabsContent>
      
      <TabsContent value=&quot;work-experience&quot;>
        <WorkExperienceForm 
=======
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
            // // // console.log("Saving basic info:", data);
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
      <TabsContent value="work-experience">;
        <WorkExperienceForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      
      <TabsContent value=&quot;education&quot;>
        <EducationForm 
=======
        />;
      </TabsContent>;
      <TabsContent value="education">;
        <EducationForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      
      <TabsContent value=&quot;skills&quot;>
        <SkillsForm
=======
        />;
      </TabsContent>;
      <TabsContent value="skills">;
        <SkillsForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      
      <TabsContent value=&quot;certifications&quot;>
        <CertificationsForm 
=======
        />;
      </TabsContent>;
      <TabsContent value="certifications">;
        <CertificationsForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      
      <TabsContent value=&quot;preview&quot;>
        <PreviewResume 
          resume={resume as Resume} 
=======
        />;
      </TabsContent>;
      <TabsContent value="preview">;
        <PreviewResume;
          resume={resume as Resume} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
  );
};