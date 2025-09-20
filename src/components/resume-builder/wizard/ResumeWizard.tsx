
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useResume } from "@/hooks/useResume";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, FilePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Resume } from "@/types/resume";
// Import components,
import { ResumeProgress } from "./ResumeProgress";
import { EmptyResumeState } from "./EmptyResumeState";
import { CreateResumeForm } from "./CreateResumeForm";
import { ResumeSteps } from "./ResumeSteps";
import { ResumeStepContent } from "./ResumeStepContent";
import { useResumeProgress } from "./useResumeProgress";
import { ResumeVersionSelector } from "./ResumeVersionSelector";
import { RESUME_STEPS } from "./constants";
export function ResumeWizard() {createResume} = useResume();
  if (showNewResumeForm) {return (<CreateResumeForm
onCreateResume = {handleCreateNewResume}
        onCancel = {() => setShowNewResumeForm(false)}
          <Button
onClick = {() => setShowNewResumeForm(true)}
            <ResumeSteps
              <ResumeStepContent
<AlertTitle>Error</AlertTitle> <AlertDescription> {error}</AlertDescription> </Alert>)
}if (showNewResumeForm) {
  () => setShowNewResumeForm (false)
}isLoading= {isLoading}/>)
}> <FilePlus className="h-4 w-4" /> Create New </Button> </div> </div> <Card> </div> <Tabs value= {activeTab}onValueChange= {setActiveTab}> <ResumeSteps steps= {RESUME STEPS}activeTab= {activeTab}onChange= {setActiveTab}/> {resume && (<ResumeStepContent activeTab= {
  activeTab}resume= {resume as Resume}onNextStep= {nextStep}onPrevStep= {prevStep}/>)