<<<<<<< HEAD
<<<<<<< HEAD

=======

import { TabsContent } from "@/components/ui/tabs",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======
interface ResumeStepContentProps {}
  activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;
}





}: ResumeStepContentProps) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm;
          resumeId={resume?.id!}

<<<<<<< HEAD
<<<<<<< HEAD
import {TabsContent} from "@/components/ui/tabs";
=======
=======


interface ResumeStepContentProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

  resume,
  onNextStep,
  onPrevStep

}: ResumeStepContentProps) => {
=======
export const ResumeStepContent = ({};
  activeTab;
  resume;
  onNextStep;
  onPrevStep;
export const ResumeStepContent = ({ ;
  activeTab;
export const ResumeStepContent = ({}
  activeTab,
  resume, 
  onNextStep, ;
  onPrevStep;
}: ResumeStepContentProps) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const ResumeStepContent = ({ ;
  activeTab;
  resume, ;
  onNextStep, ;
  onPrevStep ;
}: ResumeStepContentProps) => {;
  return (
<<<<<<< HEAD
    <>;"
      <TabsContent value="basic-info">;
        <BasicInfoForm;
=======
    <>;
      <TabsContent value="basic-info">;
        <BasicInfoForm
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          resumeId={resume?.id!} 

          initialData={resume?.basic_info}
          onSave={(data) => {;
<<<<<<< HEAD
            // Here you would typically save the data to your backend;"
            console && console.log("Saving basic info:", data);
          }}
        <WorkExperienceForm;
=======
            // Here you would typically save the data to your backend;
            console && console.log("Saving basic info:", data);
          }}
        <WorkExperienceForm
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;
}: ResumeStepContentProps) => {;
  return (;
<<<<<<< HEAD
    <>;"
=======
    <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="basic-info">;
        <BasicInfoForm;
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;

<<<<<<< HEAD
        <WorkExperienceForm;
        <WorkExperienceForm;
        <WorkExperienceForm;
      ;"
=======
        <WorkExperienceForm

        <WorkExperienceForm 

        <WorkExperienceForm
      ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="work-experience">;
        <WorkExperienceForm ;
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}
<<<<<<< HEAD
=======
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
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience |[]}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
      <TabsContent value="education">;

        <EducationForm
        />
      </TabsContent>
      <TabsContent value="education">
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <EducationForm
        <EducationForm 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD


<<<<<<< HEAD
=======
        />
      </TabsContent>
      <TabsContent value="skills">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
          onBack={onPrevStep}


        />
      </TabsContent>"
      <TabsContent value="certifications">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <CertificationsForm
        <CertificationsForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
        />
      </TabsContent>
      <TabsContent value="preview">

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        />;
      </TabsContent>;

      <TabsContent value="preview">;
        <PreviewResume
          resume={resume as Resume} 
<<<<<<< HEAD
=======
        />
      </TabsContent>
      <TabsContent value="preview">
        <PreviewResume
          resume={resume as Resume}
          onBack={onPrevStep}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        />
      </TabsContent>
    </>
  )

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        />;
      </TabsContent>;
      ;
      <TabsContent value="preview">;
        <PreviewResume ;
          resume={resume as Resume} ;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



};
<<<<<<< HEAD

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void;
}
<<<<<<< HEAD
export const ResumeStepContent = ({};
=======
export const ResumeStepContent = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  active_tab;
  resume,
  onNextStep,
  onPrevStep;
<<<<<<< HEAD
}: ResumeStepContentProps) =>: any {}
  return (
    <>;"
=======
}: ResumeStepContentProps) =>: any {
  return (
    <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="basic - info">;
        <BasicInfoForm;
          resume_id={resume?.id!}
          initial_data={resume?.basic_info}
<<<<<<< HEAD
          on_save={(data) => {}
            // Here you would typically save the data to your backend;"
=======
          on_save={(data) => {
            // Here you would typically save the data to your backend;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            console.log ("Saving basic info:", data);
          }}
          on_complete={onNextStep}
        />;
<<<<<<< HEAD
      </TabsContent>;"
=======
      </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="work - experience">;
        <WorkExperienceForm;
          resume_id={resume?.id!}
          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
<<<<<<< HEAD
      </TabsContent>;"
=======
      </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="education">;
        <EducationForm;
          resume_id={resume?.id!}
          education_entries={resume?.education || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
<<<<<<< HEAD
      </TabsContent>;"
=======
      </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="skills">;
        <SkillsForm;
          resume_id={resume?.id!}
          skills={resume?.skills || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
<<<<<<< HEAD
      </TabsContent>;"
=======
      </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <TabsContent value="certifications">;
        <CertificationsForm;
          resume_id={resume?.id!}
          certifications={resume?.certifications || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;
<<<<<<< HEAD
      </TabsContent>;"
=======
      </TabsContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;
},; interface ResumeStepContentProps {
=======
          onBack={onPrevStep}},; interface ResumeStepContentProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          onBack={onPrevStep}},; interface ResumeStepContentProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
      </TabsContent>;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
