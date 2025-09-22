
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm;
          resumeId={resume?.id!}

import {TabsContent} from "@/components/ui/tabs";

"
import {TabsContent} from "@/components/ui/tabs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';'
import {WorkExperienceForm} from '../forms/WorkExperienceForm';'
import {EducationForm} from '../forms/EducationForm';'
import {SkillsForm} from '../forms/SkillsForm';'
import {CertificationsForm} from '../forms/CertificationsForm';'
import {PreviewResume} from '../PreviewResume';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ResumeStepContentProps {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface ResumeStepContentProps {}
  activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;
}
resume,
  onNextStep,
  onPrevStep

}: ResumeStepContentProps) => {
  return (
    <>"
      <TabsContent value="basic-info">
        <BasicInfoForm;
          resumeId={resume?.id!}
          initialData={resume?.basic_info}
          onSave={(data) => {}
            // Here you would typically save the data to your backend"
            // // // console.log("Saving basic info:", data)
          }}
          onComplete={onNextStep}
        />
      </TabsContent>"
      <TabsContent value="work-experience">
import { TabsContent } from "@/components/ui/tabs",;
import { Resume } from "@/types/resume",;
import { BasicInfoForm } from '../forms/basic-info',;
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;
import { EducationForm } from '../forms/EducationForm',;
import { SkillsForm } from '../forms/SkillsForm',;
import { CertificationsForm } from '../forms/CertificationsForm',;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { PreviewResume } from '../PreviewResume',;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        <WorkExperienceForm;
        <WorkExperienceForm "
import { TabsContent } from "@/components/ui/tabs",;"
import { Resume } from "@/types/resume",;'
import { BasicInfoForm } from '../forms/basic-info',;'
import { WorkExperienceForm } from '../forms/WorkExperienceForm',;'
import { EducationForm } from '../forms/EducationForm',;'
import { SkillsForm } from '../forms/SkillsForm',;'
import { CertificationsForm } from '../forms/CertificationsForm',;'
import { PreviewResume } from '../PreviewResume',;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { PreviewResume } from '../PreviewResume',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<>;"
      <TabsContent value="basic-info">;
        <BasicInfoForm;
          resumeId={resume?.id!} 

          initialData={resume?.basic_info}
          onSave={(data) => {;
// Here you would typically save the data to your backend;"
            console && console.log("Saving basic info:", data);
          }}
        <WorkExperienceForm;
;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;
}: ResumeStepContentProps) => {;
  return (;
<>;"
      <TabsContent value="basic-info">;
        <BasicInfoForm;
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;

<WorkExperienceForm;
        <WorkExperienceForm;
        <WorkExperienceForm;
      ;"
      <TabsContent value="work-experience">;
        <WorkExperienceForm ;
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}

          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
      </TabsContent>;

        <EducationForm;
        <EducationForm;
      ;"
      <TabsContent value="education">;
        <EducationForm ;
          resumeId={resume?.id!}
          educationEntries={resume?.education || []}
          onComplete={onNextStep}
          onBack={onPrevStep}
        />;
      </TabsContent>;
        <SkillsForm;
      ;"
      <TabsContent value="skills">;
        <SkillsForm;
          resumeId={resume?.id!}
          skills={resume?.skills || []}
          onComplete={onNextStep}
          onBack={onPrevStep}

        />;
      </TabsContent>;

        <CertificationsForm;
        <CertificationsForm;
      ;"
      <TabsContent value="certifications">;
        <CertificationsForm ;
          resumeId={resume?.id!}
          certifications={resume?.certifications || []}
          onComplete={onNextStep}
          onBack={onPrevStep}"
            // // // console.log("Saving basic info:", data);
          }}
          onComplete={onNextStep} ;
        />;
      </TabsContent>;"
      <TabsContent value="work-experience">;
        <WorkExperienceForm;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          resumeId={resume?.id!}
=======
import { PreviewResume } from '../PreviewResume',;          resumeId={resume?.id!}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { PreviewResume } from '../PreviewResume',;          resumeId={resume?.id!}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

<TabsContent value="education">;

        <EducationForm
        />
      </TabsContent>
      <TabsContent value="education">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        />
      </TabsContent>"
      <TabsContent value="education">
        <EducationForm;
        <EducationForm;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        />;
      </TabsContent>;

      <TabsContent value="skills">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <SkillsForm
=======
        <SkillsForm;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}
<<<<<<< HEAD
          onBack={onPrevStep}

        />
      </TabsContent>"
      <TabsContent value="certifications">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <CertificationsForm;
        <CertificationsForm;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          onBack={onPrevStep}

        />;
      </TabsContent>;

      <TabsContent value="certifications">;

        <CertificationsForm
        />
      </TabsContent>
      <TabsContent value="certifications">
        <CertificationsForm
        <CertificationsForm 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="preview">

        />;
      </TabsContent>;

      <TabsContent value="preview">;
        <PreviewResume
          resume={resume as Resume} 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

};
'
import { TabsContent } from '@/components / ui / tabs';'
import { Resume } from '@/types / resume';'
import {BasicInfoForm} from '../forms / basic - info';'
import {WorkExperienceForm} from '../forms / WorkExperienceForm';'
import {EducationForm} from '../forms / EducationForm';'
import {SkillsForm} from '../forms / SkillsForm';'
import {CertificationsForm} from '../forms / CertificationsForm';'
import {PreviewResume} from '../PreviewResume';
interface ResumeStepContentProps {}
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void;
}
export const ResumeStepContent = ({};
  active_tab;
  resume,
  onNextStep,
  onPrevStep;
}: ResumeStepContentProps) =>: any {}
  return (
    <>;"
      <TabsContent value="basic - info">;
        <BasicInfoForm;
          resume_id={resume?.id!}
          initial_data={resume?.basic_info}
on_save={(data) => {}
            // Here you would typically save the data to your backend;"
            console.log ("Saving basic info:", data);
          }}
          on_complete={onNextStep}
        />;
</TabsContent>;"
      <TabsContent value="work - experience">;
        <WorkExperienceForm;
          resume_id={resume?.id!}
          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</TabsContent>;"
      <TabsContent value="education">;
        <EducationForm;
          resume_id={resume?.id!}
          education_entries={resume?.education || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</TabsContent>;"
      <TabsContent value="skills">;
        <SkillsForm;
          resume_id={resume?.id!}
          skills={resume?.skills || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</TabsContent>;"
      <TabsContent value="certifications">;
        <CertificationsForm;
          resume_id={resume?.id!}
          certifications={resume?.certifications || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
</TabsContent>;"
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <PreviewResume;
          resume={resume as Resume} 
          onBack={onPrevStep}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
  );
<<<<<<< HEAD

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );

};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
