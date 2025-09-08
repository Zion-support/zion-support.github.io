
<<<<<<< HEAD

=======
return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <>
      <TabsContent value="basic-info">
        <BasicInfoForm;
          resumeId={resume?.id!}

<<<<<<< HEAD


=======

"
import {TabsContent} from "@/components/ui/tabs";"

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Resume} from "@/types/resume";
import {BasicInfoForm} from '../forms/basic-info';'
import {WorkExperienceForm} from '../forms/WorkExperienceForm';'
import {EducationForm} from '../forms/EducationForm';'
import {SkillsForm} from '../forms/SkillsForm';'
import {CertificationsForm} from '../forms/CertificationsForm';'
import {PreviewResume} from '../PreviewResume';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
interface ResumeStepContentProps {}
  activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;

            // // // console.log("Saving basic info:", data)
          }}
          onComplete={onNextStep}
        />

      </TabsContent>"
      <TabsContent value="work-experience">

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ResumeStepContentProps {;
  activeTab: string,;
  resume: Resume,;
  onNextStep: () => void,;
  onPrevStep: () => void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const ResumeStepContent = ({ ;
  activeTab;
  resume, ;
  onNextStep, ;
  onPrevStep ;
}: ResumeStepContentProps) => {;
  return (

          resumeId={resume?.id!} 

          initialData={resume?.basic_info}
          onSave={(data) => {;

;
export const ResumeStepContent = ({;
  activeTab,;
  resume,;
  onNextStep;
  onPrevStep;
}: ResumeStepContentProps) => {;
  return (;

      <TabsContent value="basic-info">;
        <BasicInfoForm;
          resumeId={resume?.id!} ;
          initialData={resume?.basic_info}
          onSave={(data) => {;
            // Here you would typically save the data to your backend;

      <TabsContent value="work-experience">;

<<<<<<< HEAD

=======
        <WorkExperienceForm ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          resumeId={resume?.id!}
          workExperiences={resume?.work_experience || []}

          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

          resumeId={resume?.id!}

          workExperiences={resume?.work_experience |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          resumeId={resume?.id!}
          educationEntries={resume?.education |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <SkillsForm

          resumeId={resume?.id!}
          skills={resume?.skills |[]}
          onComplete={onNextStep}

<<<<<<< HEAD
          onBack={onPrevStep}


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          resumeId={resume?.id!}
          certifications={resume?.certifications |[]}
          onComplete={onNextStep}
          onBack={onPrevStep}
<<<<<<< HEAD


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        />;
      </TabsContent>;
      ;
      <TabsContent value="preview">;

<<<<<<< HEAD
        <PreviewResume ;
          resume={resume as Resume} ;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          onBack={onPrevStep}
        />;
      </TabsContent>;
    </>;


<<<<<<< HEAD
=======
};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  active_tab: string,
  resume: Resume,
  onNextStep: () => void,
  onPrevStep: () => void;
}

  active_tab;
  resume,
  onNextStep,
  onPrevStep;

      <TabsContent value="basic - info">;
        <BasicInfoForm;
          resume_id={resume?.id!}
          initial_data={resume?.basic_info}

            console.log ("Saving basic info:", data);
          }}
          on_complete={onNextStep}
        />;

      <TabsContent value="work - experience">;
        <WorkExperienceForm;
          resume_id={resume?.id!}
          work_experiences={resume?.work_experience || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;

      <TabsContent value="education">;
        <EducationForm;
          resume_id={resume?.id!}
          education_entries={resume?.education || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;

      <TabsContent value="skills">;
        <SkillsForm;
          resume_id={resume?.id!}
          skills={resume?.skills || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;

      <TabsContent value="certifications">;
        <CertificationsForm;
          resume_id={resume?.id!}
          certifications={resume?.certifications || []}
          on_complete={onNextStep}
          on_back={onPrevStep}
        />;

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
=======

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

>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
        />;
      </TabsContent>;
    </>;


};
>>>>>>> origin/cursor/delete-old-data-records-6bba
