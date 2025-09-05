

interface ResumeStepContentProps {_activeTab: string;
  resume: Resume;
  onNextStep: () => void;
  onPrevStep: () => void;}

export const _ResumeStepContent = (_{_activeTab, _resume, _onNextStep, _onPrevStep}: ResumeStepContentProps) => {_return (_<>
      <TabsContent value="basic-info">
        <BasicInfoForm 
          resumeId={resume?.id!} 
          initialData={_resume?.basic_info}
          onSave={_(data) => {
            // Here you would typically save the data to your backend}}
          onComplete={_onNextStep} 
        />
      </TabsContent>
      
      <TabsContent value="work-experience">
        <WorkExperienceForm 
          resumeId={_resume?.id!}
          workExperiences={_resume?.work_experience || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="education">
        <EducationForm 
          resumeId={_resume?.id!}
          educationEntries={_resume?.education || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="skills">
        <SkillsForm
          resumeId={_resume?.id!}
          skills={_resume?.skills || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="certifications">
        <CertificationsForm 
          resumeId={_resume?.id!}
          certifications={_resume?.certifications || []}
          onComplete={_onNextStep}
          onBack={_onPrevStep}
        />
      </TabsContent>
      
      <TabsContent value="preview">
        <PreviewResume 
          resume={_resume as Resume} 
          onBack={_onPrevStep}
        />
      </TabsContent>
    </>
  );
};
