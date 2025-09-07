interface ResumeStepContentProps {

  // TODO: Implement
}
  activeTab: string;,
  resume: Resume;
  onNextStep: () => void;,
  onPrevStep: () => void;

}
}: ResumeStepContentProps) => {
  return (
    <>

      <TabsContent value="basic-info">"
</TabsContent>
        <BasicInfoForm;
          resumeId={resume?.id!}
"
import {TabsContent} from "@/components/ui/tabs";""
import {Resume} from "@/types/resume";""
import {BasicInfoForm} from '../forms/basic-info';''
import {WorkExperienceForm} from '../forms/WorkExperienceForm';''
import {EducationForm} from '../forms/EducationForm';''
import {SkillsForm} from '../forms/SkillsForm';''
import {CertificationsForm} from '../forms/CertificationsForm';''
import {PreviewResume} from '../PreviewResume';'
interface ResumeStepContentProps {
  // TODO: Implement
}
  activeTab: string;,
  resume: Resume;)
  onNextStep: () => void;
</BasicInfoForm>
    <>'
      <TabsContent value="basic-info">"
</TabsContent>
        <BasicInfoForm;
          resumeId={resume?.id!}
          initialData={resume?.basic_info}
          onSave={(data) => {
</BasicInfoForm>
      </TabsContent>"
      <TabsContent value="work-experience">"
</TabsContent>
        <WorkExperienceForm;
        <WorkExperienceForm;"
import { TabsContent } from "@/components/ui/tabs",;""
import { Resume } from "@/types/resume",;""
import { BasicInfoForm } from '../forms/basic-info',;''
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;''
import { EducationForm } from '../forms/EducationForm',;''
import { SkillsForm } from '../forms/SkillsForm',;''
import { CertificationsForm } from '../forms/CertificationsForm',;''
import { PreviewResume } from '../PreviewResume',;'
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;
</WorkExperienceForm>
    <>;'
      <TabsContent value="basic-info">;"
</TabsContent>
        <BasicInfoForm;
          resumeId={resume?.id!} 

          initialData={resume?.basic_info}
          onSave={(data) => {;
</BasicInfoForm>
        <WorkExperienceForm;
;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;)
}: ResumeStepContentProps) => {;
</WorkExperienceForm>
    <>;"
      <TabsContent value="basic-info">;"
</TabsContent>
        <BasicInfoForm;
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
</BasicInfoForm>
        <WorkExperienceForm;
        <WorkExperienceForm;
        <WorkExperienceForm;
      ;"
      <TabsContent value="work-experience">;"
</WorkExperienceForm>
        <WorkExperienceForm ;
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
</WorkExperienceForm>
      </TabsContent>;
        <EducationForm;
        <EducationForm;
      ;"
      <TabsContent value="education">;"
</EducationForm>
        <EducationForm ;
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
</EducationForm>
      </TabsContent>;
        <SkillsForm;
      ;"
      <TabsContent value="skills">;"
</SkillsForm>
        <SkillsForm;
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
</SkillsForm>
      </TabsContent>;
        <CertificationsForm;
        <CertificationsForm;
      ;"
      <TabsContent value="certifications">;"
</CertificationsForm>
        <CertificationsForm ;
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}"
            // // // console.log("Saving basic info:", data);"
          }}
          onComplete={onNextStep} ;
        />;
</CertificationsForm>
      </TabsContent>;"
      <TabsContent value="work-experience">;"
</TabsContent>
        <WorkExperienceForm;
          resumeId={resume?.id!}

          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;

</WorkExperienceForm>
      </TabsContent>;"
      <TabsContent value="education">;"
</TabsContent>
        <EducationForm;
        />
</EducationForm>
      </TabsContent>"
      <TabsContent value="education">"
</TabsContent>
        <EducationForm;
        <EducationForm;
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
</EducationForm>
      </TabsContent>;"
      <TabsContent value="skills">;"
</TabsContent>
        <SkillsForm;
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
</SkillsForm>
      </TabsContent>;"
      <TabsContent value="certifications">;"
</TabsContent>
        <CertificationsForm;
        />
</CertificationsForm>
      </TabsContent>"
      <TabsContent value="certifications">"
</TabsContent>
        <CertificationsForm;
        <CertificationsForm;
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
</CertificationsForm>
      </TabsContent>;"
      <TabsContent value="preview">;"
</TabsContent>
        <PreviewResume;
          resume={resume as Resume} 
        />
</PreviewResume>
      </TabsContent>
    </>
  )

        />;
      </TabsContent>;"
      <TabsContent value="preview">;"
</TabsContent>
        <PreviewResume ;
          resume={resume as Resume} ;
          onBack={onPrevStep}
        />;
</PreviewResume>
      </TabsContent>;
    </>;
  );



};"
import { TabsContent } from '@/components / ui / tabs';''
import { Resume } from '@/types / resume';''
import {BasicInfoForm} from '../forms / basic - info';''
import {WorkExperienceForm} from '../forms / WorkExperienceForm';''
import {EducationForm} from '../forms / EducationForm';''
import {SkillsForm} from '../forms / SkillsForm';''
import {CertificationsForm} from '../forms / CertificationsForm';''
import {PreviewResume} from '../PreviewResume';'
interface ResumeStepContentProps {
  // TODO: Implement
}
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void;
}
export const ResumeStepContent = ({
  active_tab;
  resume,
  onNextStep,
  onPrevStep;)
}: ResumeStepContentProps) =>: any {
  // TODO: Implement
}
  return (
    <>;'
      <TabsContent value="basic - info">;"
</TabsContent>
        <BasicInfoForm;
          resume_id={resume?.id!}
          initial_data={resume?.basic_info})
          on_save={(data) => {
</BasicInfoForm>
      </TabsContent>;"
      <TabsContent value="work - experience">;"
</TabsContent>
        <WorkExperienceForm;
          resume_id={resume?.id!}
          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</WorkExperienceForm>
      </TabsContent>;"
      <TabsContent value="education">;"
</TabsContent>
        <EducationForm;
          resume_id={resume?.id!}
          education_entries={resume?.education || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</EducationForm>
      </TabsContent>;"
      <TabsContent value="skills">;"
</TabsContent>
        <SkillsForm;
          resume_id={resume?.id!}
          skills={resume?.skills || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</SkillsForm>
      </TabsContent>;"
      <TabsContent value="certifications">;"
</TabsContent>
        <CertificationsForm;
          resume_id={resume?.id!}
          certifications={resume?.certifications || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</CertificationsForm>
      </TabsContent>;"
      <TabsContent value="preview">;"
</TabsContent>
        <PreviewResume;
          resume={resume as Resume}
          on_back={onPrevStep}
        />;
</PreviewResume>
      </TabsContent>;
    </>);
}
;
  ),;
},; interface ResumeStepContentProps {
  // TODO: Implement
}
  activeTab: string;,
  resume: Resume;
onNextStep: () => void;,
  onPrevStep: () => void;
}export const ResumeStepContent = ({
  activeTab;
resume;
onNextStep;
onPrevStep;)
}: ResumeStepContentProps) => {"
  return (<> <TabsContent value="basic-info" > <BasicInfoForm resumeId= {"
</TabsContent>"
}work-experience"> <WorkExperienceForm resumeId= {"
  resume?.id! 
}workExperiences= {
  resume?.work experience || [] 
}onComplete= {
  onNextStep;
}onBack= {
  onPrevStep;"
}/> </TabsContent> <TabsContent value=" education"> <EducationForm resumeId= {"
</WorkExperienceForm>"
}/> </TabsContent> <TabsContent value=" skills"> <SkillsForm resumeId= {"
</TabsContent>"
}/> </TabsContent> <TabsContent value=" certifications"> <CertificationsForm resumeId= {"
</TabsContent>"
}/> </TabsContent> <TabsContent value=" preview" > <PreviewResume resume= {"
</TabsContent>)
}/> </TabsContent> </>) 
};
}

        <PreviewResume;
          resume={resume as Resume} 

          onBack={onPrevStep}
        />;
</PreviewResume>
      </TabsContent>;
    </>;
  )
};

"

