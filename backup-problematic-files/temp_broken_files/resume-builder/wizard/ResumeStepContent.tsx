
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;
<<<<<<< HEAD

          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;

          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;

          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;

          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;

          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;

