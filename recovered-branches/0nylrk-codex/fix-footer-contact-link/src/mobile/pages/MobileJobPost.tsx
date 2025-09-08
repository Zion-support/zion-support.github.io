import React, { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Zap, ChevronLeft, ChevronRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";

import { Label } from "@/components/ui/label";
import {}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  SelectValue,";
} from "@/components/ui/select";"
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";"
import { Badge } from "@/components/ui/badge";"
import { Card, CardContent } from "@/components/ui/card";


import React, { useState } from "react",

import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",

import { Label } from "@/components/ui/label",
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue "
} from "@/components/ui/select","
import { Zap, ChevronLeft, ChevronRight } from "lucide-react","
import { Badge } from "@/components/ui/badge","
import { Card, CardContent } from "@/components/ui/card",
"
type JobPostStep = "details" | "requirements" | "budget" | "preview",
<<<<<<< HEAD



export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),

  


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const goToNextStep = () => {
    if (currentStep === "details") {
      setCurrentStep("requirements")
    } else if (currentStep === "requirements") {
      setCurrentStep("budget")
    } else if (currentStep === "budget") {
      setCurrentStep("preview")
    }

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  


<<<<<<< HEAD



=======
  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const goToPrevStep = () => {
    if (currentStep === "requirements") {
      setCurrentStep("details")
    } else if (currentStep === "budget") {
      setCurrentStep("requirements")
    } else if (currentStep === "preview") {
      setCurrentStep("budget")
    }

<<<<<<< HEAD

    }

  };
  const goToPrevStep = () => {;
    if (currentStep === "requirements") {;
      setCurrentStep("details");
    } else if (currentStep === "budget") {;
      setCurrentStep("requirements");
    } else if (currentStep === "preview") {;
=======

          rows={5}
        />
      </div>
    </div>
  )
}


import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;
} from "@/components/ui/select",;
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
type JobPostStep = "details" | "requirements" | "budget" | "preview",;


export function MobileJobPost() {;
  }
  const goToNextStep = () => {;
    }
    if (currentStep === "details") {;"
      }
      setCurrentStep("requirements");"
    } else if (currentStep === "requirements") {;"
      }
      setCurrentStep("budget");"
    } else if (currentStep === "budget") {;"
      }
      setCurrentStep("preview");"
    }

      setCurrentStep("requirements");
    } else if (currentStep === "requirements") {
      setCurrentStep("budget");
    } else if (currentStep === "budget") {

      setCurrentStep("preview");
    }

  const goToPrevStep = () => {"
    if (currentStep === "requirements") {"
      setCurrentStep("details");"
    } else if (currentStep === "budget") {"
      setCurrentStep("requirements");"
    } else if (currentStep === "preview") {"
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setCurrentStep("budget");
    }
  };
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "details": return <DetailsStep />;
      case "requirements":;
        return <RequirementsStep />;
      case "budget":;
        return <BudgetStep />;
      case "preview":;
        return <PreviewStep />;
      default:;
        return <DetailsStep />;
    }
  };
  }
  },
  
  return (
    <div className="min-h-screen flex flex-col">
      <MobileHeader
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack
      />
      <main className="flex-1 py-4 pb-24 px-4">
        <div className="mb-6 flex justify-between">
          <div className="flex space-x-1">
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1</Badge>
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2</Badge>
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3</Badge>
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4</Badge>
          </div>
          <Button variant="outline" className="flex gap-1">
            <Zap className="h-4 w-4" /> AI Assist
          </Button>
        </div>
        {renderStepContent()}
        <div className="flex gap-2 mt-6">
          {currentStep !== "details" && (
            <Button
              variant="outline"
              className="flex-1 gap-1"
              onClick={goToPrevStep}
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
      />;
      <main className="flex-1 py-4 pb-24 px-4">;
        <div className="mb-6 flex justify-between">;
          <div className="flex space-x-1">;
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1</Badge>;
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2</Badge>;
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3</Badge>;
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4</Badge>;
          </div>;

import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import { ;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue ;
} from "@/components/ui/select",;
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
;
type JobPostStep = "details" | "requirements" | "budget" | "preview",;
;
export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;
  ;
  const goToNextStep = () => {;
    if (currentStep === "details") {;
      setCurrentStep("requirements"),;
    } else if (currentStep === "requirements") {;
      setCurrentStep("budget"),;
    } else if (currentStep === "budget") {;
      setCurrentStep("preview"),;
    }
  },;
  ;
  const goToPrevStep = () => {;
    if (currentStep === "requirements") {;
      setCurrentStep("details"),;
    } else if (currentStep === "budget") {;
      setCurrentStep("requirements"),;
    } else if (currentStep === "preview") {;
      setCurrentStep("budget"),;
    }
  },;
  ;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "details":return <DetailsStep />,;
      case "requirements":;
        return <RequirementsStep />,;
      case "budget":;
        return <BudgetStep />,;
      case "preview":;
        return <PreviewStep />,;
      default:;
        return <DetailsStep />;
    }
  },;
  ;
  return (;
    <div className="min-h-screen flex flex-col">;
      <MobileHeader;
        title={`Post a Job (${currentStep === "preview" ? 4 :currentStep === "budget" ? 3 :currentStep === "requirements" ? 2 :1}/4)`}
        showBack;
      />;
      ;
      <main className="flex-1 py-4 pb-24 px-4">;
        <div className="mb-6 flex justify-between">;
          <div className="flex space-x-1">;
            <Badge variant={currentStep === "details" ? "default" :"outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1</Badge>;
            <Badge variant={currentStep === "requirements" ? "default" :"outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2</Badge>;
            <Badge variant={currentStep === "budget" ? "default" :"outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3</Badge>;
            <Badge variant={currentStep === "preview" ? "default" :"outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4</Badge>;
          </div>;
          ;
          <Button variant="outline" className="flex gap-1">;
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;
          )}
          <Button
            className="flex-1 gap-1"
            onClick={goToNextStep}
          >
            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </main>
      <BottomNavigation />
    </div>
  )
}
function DetailsStep() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Details</h2>
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" placeholder="e.g. Senior React Developer" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" placeholder="Your company name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Select defaultValue="remote">
          <SelectTrigger>
            <SelectValue placeholder="Select location type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="onsite">On-site</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="jobType">Job Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fulltime">Full-time</SelectItem>
            <SelectItem value="parttime">Part-time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea
          id="description"
          placeholder="Describe the job role and responsibilities"
        <Textarea 
          id="description" 
          placeholder="Describe the job role and responsibilities" 
          rows={5}
        />
      </div>
    </div>
  )
}
function RequirementsStep() {
  const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js"
  ]);
  const [newSkill, setNewSkill] = useState("");
        <Textarea 
          id="description" 
          placeholder="Describe the job role and responsibilities" 
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;
} from "@/components/ui/select",;
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
type JobPostStep = "details" | "requirements" | "budget" | "preview",;


  },
  


  const renderStepContent = () => {
    switch (currentStep) {

export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");

<<<<<<< HEAD


=======
export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const goToNextStep = () => {;
    if (currentStep === "details") {;
      setCurrentStep("requirements");
    } else if (currentStep === "requirements") {;
      setCurrentStep("budget");
    } else if (currentStep === "budget") {;
      setCurrentStep("preview");
    }
<<<<<<< HEAD

  };


=======
  },;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const goToPrevStep = () => {;
    if (currentStep === "requirements") {;
      setCurrentStep("details");
    } else if (currentStep === "budget") {;
      setCurrentStep("requirements");
    } else if (currentStep === "preview") {;
      setCurrentStep("budget");
    }

<<<<<<< HEAD
  };

      case "budget":
        return <BudgetStep />;"
      case "preview":
        return <PreviewStep />;
      default:
        return <DetailsStep />;
    }


=======
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (

    <div className="min-h-screen flex flex-col">;
      <MobileHeader"
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}

<<<<<<< HEAD

      />;


  );
}



        />;
      </div>;
    </div>;

  );
}


=======

            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </main>


      <BottomNavigation />
    </div>
  );
}
      ;
      <BottomNavigation />;
    </div>;
  ),;
}
;
function DetailsStep() {;
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Details</h2>;
      <div className="space-y-2">;
        <Label htmlFor="title">Job Title</Label>;
        <Input id="title" placeholder="e.g. Senior React Developer" />;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="company">Company Name</Label>;
        <Input id="company" placeholder="Your company name" />;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="location">Location</Label>;
        <Select defaultValue="remote">;
          <SelectTrigger>;
            <SelectValue placeholder="Select location type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="remote">Remote</SelectItem>;
            <SelectItem value="onsite">On-site</SelectItem>;
            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="jobType">Job Type</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select job type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="fulltime">Full-time</SelectItem>;
            <SelectItem value="parttime">Part-time</SelectItem>;
            <SelectItem value="contract">Contract</SelectItem>;
            <SelectItem value="freelance">Freelance</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="description">Job Description</Label>;
        <Textarea ;
          id="description" ;
          placeholder="Describe the job role and responsibilities" ;
          rows={5}
        />;
      </div>;
    </div>;
import React, { useState } from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Label } from '@/components / ui / label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Zap, ChevronLeft, ChevronRight } from './lucide-react';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent } from '@/components / ui / card';
;
type JobPostStep = "details" | "requirements" | "budget" | "preview";
;
export /**
 * MobileJobPost - Function description
 */
function MobileJobPost() {
  const [current_step, setCurrentStep] = useState < JobPostStep>("details");
;
  const goToNextStep = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep ("requirements");
    } else // Check condition
if ( {) {
  $2
}
      setCurrentStep ("budget");
    } else // Check condition
if ( {) {
  $2
}
      setCurrentStep ("preview");
    }
  }
;
  const goToPrevStep = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep ("details");
    } else // Check condition
if ( {) {
  $2
}
      setCurrentStep ("requirements");
    } else // Check condition
if ( {) {
  $2
}
      setCurrentStep ("budget");
    }
  }
;
  const renderStepContent = () =>: any {
    switch (current_step) {
      case "details": return <DetailsStep />;
      case "requirements":;
        return <RequirementsStep />;
      case "budget":;
        return <BudgetStep />;
      case "preview":;
        return <PreviewStep />;
      default:;
        return <DetailsStep />;
    }
  }
;
  return (
    <div className="min - h-screen flex flex - col">;
      <MobileHeader;
        title={`Post a Job (${current_step === "preview" ? 4 : current_step === "budget" ? 3 : current_step === "requirements" ? 2 : 1}/4)`}
        show_back;
      />;
      <main className="flex - 1 py - 4 pb - 24 px - 4">;
        <div className="mb - 6 flex justify - between">;
          <div className="flex space - x-1">;
            <Badge variant={current_step === "details" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">1</Badge>;
            <Badge variant={current_step === "requirements" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">2</Badge>;
            <Badge variant={current_step === "budget" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">3</Badge>;
            <Badge variant={current_step === "preview" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">4</Badge>;
          </div>;
          <Button variant="outline" className="flex gap - 1">;
            <Zap className="h - 4 w - 4" /> AI Assist;
          </Button>;
        </div>;
        {renderStepContent ()}
        <div className="flex gap - 2 mt - 6">;
          {current_step !== "details" && (
            <Button;
              variant="outline";
              className="flex - 1 gap - 1";
              on_click={goToPrevStep}
            >;
              <ChevronLeft className="h - 4 w - 4" /> Back;
            </Button>)}
          <Button;
            className="flex - 1 gap - 1";
            on_click={goToNextStep}
          >;
            {current_step === "preview" ? "Publish Job" : "Continue"}
            {current_step !== "preview" && <ChevronRight className="h - 4 w - 4" />}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Button>;
        </div>;
      </main>;
      <BottomNavigation />;
    </div>);
}
/**
 * DetailsStep - Function description;
 */
<<<<<<< HEAD

  return (
    <div className="space - y-4">;
      <h2 className="text - lg font - medium">Job Details</h2>;
      <div className="space - y-2">;
        <Label html_for="title">Job Title</Label>;
        <Input id="title" placeholder="e.g. Senior React Developer" />;
      </div>;
      <div className="space - y-2">;
        <Label html_for="company">Company Name</Label>;
        <Input id="company" placeholder="Your company name" />;
      </div>;
      <div className="space - y-2">;
        <Label html_for="location">Location</Label>;
        <Select default_value="remote">;
          <SelectTrigger>;
            <SelectValue placeholder="Select location type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="remote">Remote</SelectItem>;
            <SelectItem value="onsite">On - site</SelectItem>;
            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space - y-2">;
        <Label html_for="job_type">Job Type</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select job type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="fulltime">Full - time</SelectItem>;
            <SelectItem value="parttime">Part - time</SelectItem>;
            <SelectItem value="contract">Contract</SelectItem>;
            <SelectItem value="freelance">Freelance</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space - y-2">;
        <Label html_for="description">Job Description</Label>;
      <div className="space-y-2">;
        <Label htmlFor="description">Job Description</Label>;
        <Textarea;
          id="description";
          placeholder="Describe the job role and responsibilities";
          rows={5}
        />;
      </div>;

        <Textarea 
          id="description" 
          placeholder="Describe the job role and responsibilities" 


function RequirementsStep() {
  const [skills, set_skills] = useState < string[]>([;
    "React", "TypeScript", "Node.js";
  ]);
function RequirementsStep() {;
  const [skills, setSkills] = useState<string[]>([;
    "React", "TypeScript", "Node && Node.js";
  ]);
  const [newSkill, setNewSkill] = useState("");
  const addSkill = () => {;
    if (newSkill && !skills && skills.includes(newSkill)) {;
    </div>;
  );
}

function RequirementsStep() {
  const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js"
  ]),
  const [newSkill, setNewSkill] = useState(""),
  
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]),
      setNewSkill("")
    }
  }
  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  }


=======
function DetailsStep() {

}
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  const removeSkill = ("skill": string) => {
    }
    setSkills(skills.filter(s => s !== skill))
  },

<<<<<<< HEAD
  };
    }
    setSkills(skills.filter((s) => s !== skill))
};
return (;
    <div className="space-y-4">"
      <h2 className="text-lg font-medium">Job Requirements</h2>"

=======

function RequirementsStep() {}
  const [skills, setSkills] = useState<string[]>(["
    "React","
    "TypeScript","

    "Node.js",
  ]);"
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {}
    if (newSkill && !skills.includes(newSkill)) {}
      setSkills([...skills, newSkill]);"
      setNewSkill("");
    }
  };

    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-4">

      <h2 className="text-lg font-medium">Job Requirements</h2>
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="space-y-2">"
        <Label htmlFor="experience">Experience Level</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="entry">Entry Level</SelectItem>"
            <SelectItem value="mid">Mid Level</SelectItem>"
            <SelectItem value="senior">Senior</SelectItem>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
"
      <div className="space-y-2">"
        <Label htmlFor="education">Education</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select required education" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>"
            <SelectItem value="associate">Associate Degree</SelectItem>"
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>'"
            <SelectItem value="master">Master's Degree</SelectItem>"
            <SelectItem value="phd">PhD</SelectItem>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <SelectItem value="none">No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
<<<<<<< HEAD

"
      <div className="space-y-2">
        <Label>Required Skills</Label>"

        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (

            <Badge
              key={skill}
=======
"
      <div className="space-y-2">
        <Label>Required Skills</Label>"
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (

      <div className="space-y-2">
        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              {skill}
              <button
                className="ml-1 rounded-full hover:bg-background/20 p-1"
;
function RequirementsStep() {;
  const [skills, setSkills] = useState<string[]>([;
    "React", "TypeScript", "Node.js";
  ]),;
  const [newSkill, setNewSkill] = useState(""),;
  const addSkill = () => {;
    if (newSkill && !skills.includes(newSkill)) {;
      setSkills([...skills, newSkill]),;
      setNewSkill("");
    }
    setSkills(skills.filter(s => s !== skill));
  };
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
      <div className="space-y-2">;
        <Label htmlFor="experience">Experience Level</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select experience level" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="entry">Entry Level</SelectItem>;
            <SelectItem value="mid">Mid Level</SelectItem>;
            <SelectItem value="senior">Senior</SelectItem>;
            <SelectItem value="expert">Expert</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label htmlFor="education">Education</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select required education" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="high_school">High School</SelectItem>;
            <SelectItem value="associate">Associate Degree</SelectItem>;
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;
            <SelectItem value="master">Master's Degree</SelectItem>;
            <SelectItem value="phd">PhD</SelectItem>;
            <SelectItem value="none">No Specific Requirement</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label>Required Skills</Label>;
        <div className="flex flex-wrap gap-2 mb-3">;
          {skills.map((skill) => (;
            <Badge;
              key={skill} ;
              variant="secondary";
              className="flex items-center gap-1 px-3 py-1";
            >;
              {skill}
              <button;
                className="ml-1 rounded-full hover:bg-background/20 p-1";
                onClick={() => removeSkill(skill)}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />
          <Button onClick={addSkill}>Add</Button>
        </div>
      </div>

;
function RequirementsStep() {;
  }
    "React", "TypeScript", "Node.js";"
  ]),;
  const [newSkill, setNewSkill] = useState(""),;
  const addSkill = () => {;
    if (newSkill && !skills.includes(newSkill)) {;
      setSkills([...skills, newSkill]),;
      setNewSkill("");
    }

  const removeSkill = (skill: string) => {;
    setSkills(skills && skills.filter(s => s !== skill))
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div className="space-y-2">
        <Label htmlFor="requirements">Specific Requirements</Label>
        <Textarea
          id="requirements"
          placeholder="List any specific requirements or qualifications"
          rows={4}
        />
      </div>

<<<<<<< HEAD


=======
      <div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea
          id="responsibilities"
          placeholder="List the key responsibilities for this role"
          rows={4}
        />
      </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea
          id="responsibilities"
          placeholder="List the key responsibilities for this role"
          rows={4}
        />
      </div>
    </div>

          id="responsibilities" 
          placeholder="List the key responsibilities for this role" 

          rows={4}

        />;
      </div>;
    </div>;

  );
}

<<<<<<< HEAD

function BudgetStep() {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;

<<<<<<< HEAD

=======
      <div className="space-y-2">;
        <Label htmlFor="experience">Experience Level</Label>;

        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select experience level" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="entry">Entry Level</SelectItem>;"
            <SelectItem value="mid">Mid Level</SelectItem>;"
            <SelectItem value="senior">Senior</SelectItem>;"
            <SelectItem value="expert">Expert</SelectItem>;
          </SelectContent>;
        </Select>;

        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select required education" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="high_school">High School</SelectItem>;"
            <SelectItem value="associate">Associate Degree</SelectItem>;'"
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;'"
            <SelectItem value="master">Master's Degree</SelectItem>;"
            <SelectItem value="phd">PhD</SelectItem>;"
            <SelectItem value="none">No Specific Requirement</SelectItem>;
          </SelectContent>;
        </Select>;

              {skill}          rows={3}

              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

            <SelectItem value="ongoing">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="space-y-2">;
        <Label htmlFor="experience">Experience Level</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select experience level" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="entry">Entry Level</SelectItem>;
            <SelectItem value="mid">Mid Level</SelectItem>;
            <SelectItem value="senior">Senior</SelectItem>;
            <SelectItem value="expert">Expert</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
<<<<<<< HEAD



=======
      ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="space-y-2">;
        <Label htmlFor="education">Education</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select required education" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="high_school">High School</SelectItem>;
            <SelectItem value="associate">Associate Degree</SelectItem>;
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;
            <SelectItem value="master">Master's Degree</SelectItem>;
            <SelectItem value="phd">PhD</SelectItem>;
            <SelectItem value="none">No Specific Requirement</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
<<<<<<< HEAD


      <div className="space-y-2">;
        <Label>Required Skills</Label>;
        <div className="flex flex-wrap gap-2 mb-3">;
          {skills && skills.map((skill) => (;
            <Badge
              key={skill} 

function RequirementsStep() {
  const [skills, set_skills] = useState < string[]>([;
    "React", "TypeScript", "Node.js";
  ]);
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1">;

=======
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1">;
      ;
      <div className="space-y-2">;
        <Label>Required Skills</Label>;
        <div className="flex flex-wrap gap-2 mb-3">;
          {skills.map((skill) => (;
            <Badge;
              key={skill} ;
              variant="secondary";
              className="flex items-center gap-1 px-3 py-1";
            >;
              <button
                className="ml-1 rounded-full hover:bg-background/20 p-1"

>>>>>>> origin/cursor/delete-old-data-records-6bba
              variant="secondary"

              className="flex items-center gap-1 px-3 py-1"
            >
              {skill}
              <button"
                className="ml-1 rounded-full hover:bg-background/20 p-1"


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                onClick={() => removeSkill(skill)}
              >;
                ×;
              </button>;
            </Badge>;
          ))}
<<<<<<< HEAD


        <div className="flex gap-2">
          <Input;
            value={newSkill}

=======
        </div>;
        <div className="flex gap-2">;
          <Input ;
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill";
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />;
          <Button onClick={addSkill}>Add</Button>;
        </div>;
      </div>;
              {skill}
              <button;
                className="ml-1 rounded-full hover:bg-background/20 p-1";
                onClick={() => removeSkill(skill)}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />
          <Button onClick={addSkill}>Add</Button>
        </div>
      </div>


>>>>>>> origin/cursor/delete-old-data-records-6bba
          id="responsibilities" 
          placeholder="List the key responsibilities for this role" 
      ;
      <div className="space-y-2">;
        <Label htmlFor="requirements">Specific Requirements</Label>;
        <Textarea ;
          id="requirements" ;
          placeholder="List any specific requirements or qualifications" ;
          rows={4}
        />;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="responsibilities">Key Responsibilities</Label>;
        <Textarea ;
          id="responsibilities" ;
          placeholder="List the key responsibilities for this role" ;
          rows={4}
        />;
      </div>;
    </div>;
}
        <Textarea 
          id="responsibilities" 
          placeholder="List the key responsibilities for this role" 
          rows={4}

        />;
      </div>;
    </div>;

  );

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select experience level" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="entry">Entry Level</SelectItem>;"
            <SelectItem value="mid">Mid Level</SelectItem>;"
            <SelectItem value="senior">Senior</SelectItem>;"
            <SelectItem value="expert">Expert</SelectItem>;
          </SelectContent>;
        </Select>;

        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select required education" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="high_school">High School</SelectItem>;"
            <SelectItem value="associate">Associate Degree</SelectItem>;'"
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;'"
            <SelectItem value="master">Master's Degree</SelectItem>;"
            <SelectItem value="phd">PhD</SelectItem>;"
            <SelectItem value="none">No Specific Requirement</SelectItem>;
          </SelectContent>;
        </Select>;

<<<<<<< HEAD
      </div>;
      <div className="space - y-2">;
        <Label > Required Skills</Label>;
        <div className="flex flex - wrap gap - 2 mb - 3">;
          {skills.map ((skill) => (
            <Badge;
              key={skill}
              variant="secondary";
              className="flex items - center gap - 1 px - 3 py - 1";
            >;
              {skill}
              <button;
                className="ml - 1 rounded - full hover:bg - background / 20 p - 1";
                on_click={() => remove_skill (skill)}
              >;
                ×;
              </button>;
            </Badge>))}
        </div>;
        <div className="flex gap - 2">;
          <Input;
            value={new_skill}
            on_change={(e) => setNewSkill (e.target.value)}
            placeholder="Add a skill";
            onKeyDown={(e) => e.key === 'Enter' && add_skill ()}
          />;
          <Button on_click={add_skill}>Add</Button>;
        </div>;
      </div>;
      <div className="space - y-2">;
        <Label html_for="requirements">Specific Requirements</Label>;
        <Textarea;
          id="requirements";
          placeholder="List any specific requirements or qualifications";
          rows={4}
        />;
      </div>;
      <div className="space - y-2">;
        <Label html_for="responsibilities">Key Responsibilities</Label>;
        <Textarea;
          id="responsibilities";
          placeholder="List the key responsibilities for this role";
          rows={4}
        />;
      </div>;
    </div>);
}
/**
 * BudgetStep - Function description
 */
function BudgetStep() {
  return (
    <div className="space - y-4">;
      <h2 className="text - lg font - medium">Budget & Timeline</h2>;
      <div className="space - y-2">;
        <Label html_for="payment_type">Payment Type</Label>;
  ),;
}
;
function BudgetStep() {;
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Budget & Timeline</h2>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="paymentType">Payment Type</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select payment type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="hourly">Hourly Rate</SelectItem>;
            <SelectItem value="fixed">Fixed Price</SelectItem>;
            <SelectItem value="salary">Salary</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      ;
      <div className="space-y-2">;
        <Label>Salary Range</Label>;
        <div className="flex gap-4 items-center">;
          <Input placeholder="Min" type="number" className="w-full" />;
          <span>to</span>;
          <Input placeholder="Max" type="number" className="w-full" />;
          <Select defaultValue="usd">;
            <SelectTrigger className="w-24">;
              <SelectValue placeholder="Currency" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="usd">USD</SelectItem>;
              <SelectItem value="eur">EUR</SelectItem>;
              <SelectItem value="gbp">GBP</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="deadline">Application Deadline</Label>;
        <Input type="date" id="deadline" />;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="startDate">Expected Start Date</Label>;
        <Input type="date" id="startDate" />;
      </div>;
      ;
      <div className="space-y-2">;
        <Label htmlFor="duration">Project Duration</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select project duration" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="ltw">Less than a week</SelectItem>;
            <SelectItem value="ltm">Less than a month</SelectItem>;
            <SelectItem value="1-3m">1-3 months</SelectItem>;
            <SelectItem value="3-6m">3-6 months</SelectItem>;
            <SelectItem value="6m+">6+ months</SelectItem>;
            <SelectItem value="ongoing">Ongoing</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>

      <Card>"
        <CardContent className="p-4">"
          <h3 className="font-bold text-lg">Senior React Developer</h3>"
          <p className="text-muted-foreground">
            TechCorp Inc. • Remote • Full-time;
          </p>
"
          <div className="flex gap-2 my-3">"
            <Badge variant="outline">React</Badge>"
            <Badge variant="outline">TypeScript</Badge>"
            <Badge variant="outline">Node.js</Badge>
          </div>
"
          <div className="space-y-1 text-sm mt-4">"
            <p className="font-medium">Salary Range:</p>
            <p>$80,000 - $120,000 USD / year</p>
          </div>
"
          <div className="space-y-1 text-sm mt-3">"
            <p className="font-medium">Experience Level:</p>
            <p>Senior</p>
          </div>
"
          <div className="space-y-1 text-sm mt-3">"
            <p className="font-medium">Application Deadline:</p>
            <p>December 15, 2023</p>
          </div>
"
          <div className="mt-4 pt-3 border-t border-border">"
            <h4 className="font-medium mb-2">Description</h4>"
            <p className="text-sm">
              We are looking for a skilled React developer to help us build out'
              our new customer-facing application. You'll be working with a team;
              of experienced developers to create a responsive and performant;
              web app...

</BottomNavigation>
    </div>);"
    <div className="space-y-4">"
</div>"
      <h2 className="text-lg font-medium">Job Details</h2>""
      <div className="space-y-2">"
</div>"
        <Label htmlFor="title">Job Title</Label>""
        <Input id="title" placeholder="e.g. Senior React Developer" />"
</Input>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="company">Company Name</Label>""
        <Input id="company" placeholder="Your company name" />"
</Input>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="location">Location</Label>""
        <Select defaultValue="remote">"
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select location type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="remote">Remote</SelectItem>""
            <SelectItem value="onsite">On-site</SelectItem>""
            <SelectItem value="hybrid">Hybrid</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="jobType">Job Type</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select job type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="fulltime">Full-time</SelectItem>""
            <SelectItem value="parttime">Part-time</SelectItem>""
            <SelectItem value="contract">Contract</SelectItem>""
            <SelectItem value="freelance">Freelance</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="description">Job Description</Label>"
        <Textarea;"
          id="description"""
          placeholder="Describe the job role and responsibilities""
          rows={5}
        />
</Textarea>
      </div>
    </div>
  const [skills, setSkills] = useState<string[]>([
</string>"
    <div className="space-y-4">"
</div>"
      <h2 className="text-lg font-medium">Job Requirements</h2>""
      <div className="space-y-2">"
</div>"
        <Label htmlFor="experience">Experience Level</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select experience level" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="entry">Entry Level</SelectItem>""
            <SelectItem value="mid">Mid Level</SelectItem>""
            <SelectItem value="senior">Senior</SelectItem>""
            <SelectItem value="expert">Expert</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="education">Education</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select required education" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>""
            <SelectItem value="associate">Associate Degree</SelectItem>""
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>''
            <SelectItem value="master">Master's Degree</SelectItem>''
            <SelectItem value="phd">PhD</SelectItem>""
            <SelectItem value="none">No Specific Requirement</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>
        <Label>Required Skills</Label>"
        <div className="flex flex-wrap gap-2 mb-3">"
</div>
            <Badge;
              key={skill}"
              variant="secondary"""
              className="flex items-center gap-1 px-3 py-1""
            >
</Badge>
              <button;"
                className="ml-1 rounded-full hover:bg-background/20 p-1"")
                onClick={() => removeSkill(skill)}
</button>
              </button>;
            </Badge>;
        </div>"
        <div className="flex gap-2">"
</div>
          <Input;
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
</Input>
          <Button onClick={addSkill}>Add</Button>
        </div>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="requirements">Specific Requirements</Label>"
        <Textarea;"
          id="requirements"""
          placeholder="List any specific requirements or qualifications""
          rows={4}
        />
</Textarea>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="responsibilities">Key Responsibilities</Label>"
        <Textarea;"
          id="responsibilities"""
          placeholder="List the key responsibilities for this role""
          rows={4}

        />
</Textarea>
      </div>

    </div>"
    <div className="space-y-4">;"
</div>"
      <h2 className="text-lg font-medium">Budget & Timeline</h2>;""
      <div className="space-y-2">;"
</div>"
        <Label htmlFor="paymentType">Payment Type</Label>;""
    <div className="space - y-4">;"
</div>"
      <h2 className="text - lg font - medium">Job Requirements</h2>;""
      <div className="space - y-2">;"
</div>"
        <Label html_for="experience">Experience Level</Label>;"
        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select experience level" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="entry">Entry Level</SelectItem>;""
            <SelectItem value="mid">Mid Level</SelectItem>;""
            <SelectItem value="senior">Senior</SelectItem>;""
            <SelectItem value="expert">Expert</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="education">Education</Label>;"
        <Select>;
</Select>
          <SelectTrigger>;
</SelectTrigger>"
            <SelectValue placeholder="Select required education" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
</SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>;""
            <SelectItem value="associate">Associate Degree</SelectItem>;""
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;''
            <SelectItem value="master">Master's Degree</SelectItem>;''
            <SelectItem value="phd">PhD</SelectItem>;""
            <SelectItem value="none">No Specific Requirement</SelectItem>;"
          </SelectContent>;
        </Select>;
      </div>;"
      <div className="space - y-2">;"
</div>
        <Label > Required Skills</Label>;"
        <div className="flex flex - wrap gap - 2 mb - 3">;"
</div>
            <Badge;
              key={skill}"
              variant="secondary";""
              className="flex items - center gap - 1 px - 3 py - 1";"
            >;
</Badge>
              <button;"
                className="ml - 1 rounded - full hover:bg - background / 20 p - 1";"
                on_click={() => remove_skill (skill)}
</button>
              </button>;
            </Badge>))}
        </div>;"
        <div className="flex gap - 2">;"
</div>
          <Input;
            value={new_skill}
            on_change={(e) => setNewSkill (e.target.value)}
</Input>
          <Button on_click={add_skill}>Add</Button>;
        </div>;
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="requirements">Specific Requirements</Label>;"
        <Textarea;"
          id="requirements";""
          placeholder="List any specific requirements or qualifications";"
          rows={4}
        />;
</Textarea>
      </div>;"
      <div className="space - y-2">;"
</div>"
        <Label html_for="responsibilities">Key Responsibilities</Label>;"
        <Textarea;"
          id="responsibilities";""
          placeholder="List the key responsibilities for this role";"
          rows={4}
        />;
</Textarea>
      </div>;
    </div>);"
    <div className="space-y-4">"
</div>"
      <h2 className="text-lg font-medium">Budget & Timeline</h2>""
      <div className="space-y-2">"
</div>"
        <Label htmlFor="paymentType">Payment Type</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select payment type" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="hourly">Hourly Rate</SelectItem>""
            <SelectItem value="fixed">Fixed Price</SelectItem>""
            <SelectItem value="salary">Salary</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>
        <Label>Salary Range</Label>"
        <div className="flex gap-4 items-center">"
</div>"
          <Input placeholder="Min" type="number" className="w-full" />"
</Input>
          <span>to</span>"
          <Input placeholder="Max" type="number" className="w-full" />"
</Input>"
          <Select defaultValue="usd">"
</Select>"
            <SelectTrigger className="w-24">"
</SelectTrigger>"
              <SelectValue placeholder="Currency" />"
</SelectValue>
            </SelectTrigger>
            <SelectContent>
</SelectContent>"
              <SelectItem value="usd">USD</SelectItem>""
              <SelectItem value="eur">EUR</SelectItem>""
              <SelectItem value="gbp">GBP</SelectItem>"
            </SelectContent>
          </Select>
        </div>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="deadline">Application Deadline</Label>""
        <Input type="date" id="deadline" />"
</Input>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="startDate">Expected Start Date</Label>""
        <Input type="date" id="startDate" />"
</Input>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="duration">Project Duration</Label>"
        <Select>
</Select>
          <SelectTrigger>
</SelectTrigger>"
            <SelectValue placeholder="Select project duration" />"
</SelectValue>
          </SelectTrigger>
          <SelectContent>
</SelectContent>"
            <SelectItem value="ltw">Less than a week</SelectItem>""
            <SelectItem value="ltm">Less than a month</SelectItem>""
            <SelectItem value="1-3m">1-3 months</SelectItem>""
            <SelectItem value="3-6m">3-6 months</SelectItem>""
            <SelectItem value="6m+">6+ months</SelectItem>""
            <SelectItem value="ongoing">Ongoing</SelectItem>"
          </SelectContent>
        </Select>
      </div>
"
      <div className="space-y-2">"
</div>"
        <Label htmlFor="additionalInfo">Additional Budget Information</Label>"
        <Textarea;"
          id="additionalInfo"""
          placeholder="Any additional information about budget or payment""
          rows={3}
        />
</Textarea>
      </div>
    </div>"
    <div className="space-y-4">"
</div>"
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>"
      <Card>
</Card>"
        <CardContent className="p-4">"
</CardContent>"
          <h3 className="font-bold text-lg">Senior React Developer</h3>""
          <p className="text-muted-foreground">"
</p>
          </p>
"
          <div className="flex gap-2 my-3">"
</div>"
            <Badge variant="outline">React</Badge>""
            <Badge variant="outline">TypeScript</Badge>""
            <Badge variant="outline">Node.js</Badge>"
          </div>
"
          <div className="space-y-1 text-sm mt-4">"
</div>"
            <p className="font-medium">Salary Range:</p>"
            <p>$80,000 - $120,000 USD / year</p>
          </div>
"
          <div className="space-y-1 text-sm mt-3">"
</div>"
            <p className="font-medium">Experience Level:</p>"
            <p>Senior</p>
          </div>
"
          <div className="space-y-1 text-sm mt-3">"
</div>"
            <p className="font-medium">Application Deadline:</p>"
            <p>December 15, 2023</p>
          </div>
"
          <div className="mt-4 pt-3 border-t border-border">"
</div>"
            <h4 className="font-medium mb-2">Description</h4>""
            <p className="text-sm">"
</p>

            </p>
          </div>
        </CardContent>
      </Card>
"
      <Button variant="outline" className="w-full">
        Edit Job Post;
      </Button>
    </div>


<<<<<<< HEAD
      <div className="space - y-2">;
        <Label html_for="additional_info">Additional Budget Information</Label>;
        <Textarea;
          id="additional_info";
          placeholder="Any additional information about budget or payment";
          rows={3}
        />;
      </div>;
    </div>);
}
/**

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
 * PreviewStep - Function description
 */
function PreviewStep() {
  return (
    <div className="space-y-4">;
      <h2 className="text - lg font - medium mb-2">Job Preview</h2>;
      <Card>;

<<<<<<< HEAD
        <CardContent className="p - 4">;
          <h3 className="font - bold text - lg">Senior React Developer</h3>;
          <p className="text - muted - foreground">TechCorp Inc. • Remote • Full - time</p>;
          <div className="flex gap - 2 my - 3">;
      ;
      <div className="space-y-2">;
        <Label htmlFor="additionalInfo">Additional Budget Information</Label>;
        <Textarea ;
          id="additionalInfo" ;
          placeholder="Any additional information about budget or payment" ;
          rows={3}
        />;
      </div>;
    </div>;
  ),;
}
;
function PreviewStep() {;
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>;
      ;
      <Card>;
        <CardContent className="p-4">;
          <h3 className="font-bold text-lg">Senior React Developer</h3>;
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>;
          ;
          <div className="flex gap-2 my-3">;
=======
        <CardContent className="p-4">;
          <h3 className="font - bold text-lg">Senior React Developer</h3>;
          <p className="text - muted-foreground">TechCorp Inc. • Remote • Full - time</p>;
          <div className="flex gap - 2 my-3">;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <Badge variant="outline">React</Badge>;
            <Badge variant="outline">TypeScript</Badge>;
            <Badge variant="outline">Node.js</Badge>;
          </div>;

<<<<<<< HEAD
=======
          <div className="space - y-1 text - sm mt-4">;
            <p className="font-medium">Salary Range:</p>;
            <p>$80, 000 - $120, 000 USD / year</p>;
          </div>;
          <div className="space - y-1 text - sm mt-3">;
            <p className="font-medium">Experience Level:</p>;
            <p > Senior</p>;
          </div>;
          <div className="space - y-1 text - sm mt-3">;
            <p className="font-medium">Application Deadline:</p>;
            <p > December 15, 2023</p>;
          </div>;
          <div className="mt - 4 pt - 3 border - t border-border">;
            <h4 className="font - medium mb-2">Description</h4>;
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
          </div>;
        </CardContent>;
      </Card>;
      <Button variant="outline" className="w-full">Edit Job Post</Button>;
    </div>);

>>>>>>> origin/cursor/delete-old-data-records-6bba

}

          ;
          <div className="space-y-1 text-sm mt-4">;
            <p className="font-medium">Salary Range:</p>;
            <p>$80,000 - $120,000 USD / year</p>;
          </div>;
          ;
          <div className="space-y-1 text-sm mt-3">;
            <p className="font-medium">Experience Level:</p>;
            <p>Senior</p>;
          </div>;
          ;
          <div className="space-y-1 text-sm mt-3">;
            <p className="font-medium">Application Deadline:</p>;
            <p>December 15, 2023</p>;
          </div>;
          ;
          <div className="mt-4 pt-3 border-t border-border">;
            <h4 className="font-medium mb-2">Description</h4>;
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
          </div>;
        </CardContent>;
      </Card>;
      ;
      <Button variant="outline" className="w-full">Edit Job Post</Button>;
    </div>;
  ),;
} import {
  Select;
SelectContent;
SelectItem;
SelectTrigger;
SelectValue type JobPostStep = "details" | "requirements" | "budget" | "preview";
const goToNextStep = () => {
  if (currentStep === "details") {
  
}
};
const goToPrevStep = () => {
  
}
<<<<<<< HEAD


=======
};
const renderStepContent = () => {
  switch (currentStep) {
  case "requirements": return <RequirementsStep />;
case "budget": return <BudgetStep />;
case "preview": default: return <DetailsStep /> 
}
};
min-h-screen flex flex-col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap-1"> <Zap className=" h-4 w-4"/> AI Assist </Button> </div> {
  renderStepContent () 
}<Button variant=" outline"className=" flex-1 gap-1"onClick= {
  goToPrevStep 
}> <ChevronLeft className=" h-4 w-4"/> Back </Button>) 
}<Button </Button> </div> </main> <BottomNavigation /> </div>) 
}<div className=" space-y-2"> <Label htmlFor=" title">Job Title</Label> <Input id=" title"placeholder=" e.g. Senior React Developer"/> </div> <div className=" space-y-2"> <Label htmlFor=" company">Company Name</Label> <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space-y-2"> <Label htmlFor=" location">Location</Label> <Select defaultValue=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/> </SelectTrigger> <SelectContent> <SelectItem value=" remote">Remote</SelectItem> <SelectItem value=" onsite">On-site</SelectItem> <SelectItem value=" hybrid">Hybrid</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" jobType">Job Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/> </SelectTrigger> <SelectContent> <SelectItem value=" fulltime">Full-time</SelectItem> <SelectItem value=" parttime">Part-time</SelectItem> <SelectItem value=" contract">Contract</SelectItem> <SelectItem value=" freelance">Freelance</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" description">Job Description</Label> <Textarea id=" description"placeholder=" Describe the job role and responsibilities"rows= {
  5 
}/> </div> </div>) 
}const addSkill = () => {
  if (newSkill && !skills.includes (newSkill) ) {
  <div className=" space-y-2"> <Label htmlFor=" experience">Experience Level</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/> </SelectTrigger> <SelectContent> <SelectItem value=" entry">Entry Level</SelectItem> <SelectItem value=" mid">Mid Level</SelectItem> <SelectItem value=" senior">Senior</SelectItem> <SelectItem value=" expert">Expert</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" education">Education</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/> </SelectTrigger> <SelectContent> <SelectItem value=" high school">High School</SelectItem> <SelectItem value=" associate">Associate Degree</SelectItem> <SelectItem value=" bachelor">Bachelor's Degree</SelectItem> <SelectItem value=" master">Master's Degree</SelectItem> <SelectItem value=" phd">PhD</SelectItem> <SelectItem value=" none">No Specific Requirement</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label>Required Skills</Label> key= {
  skill 
}variant=" secondary"className=" flex items-center gap-1 px-3 py-1"> {
  skill 
}<button > × </button> </Badge>) ) 
}</div> <div className=" flex gap-2"> <Input /> <Button onClick= {
  addSkill 
}>Add</Button> </div> </div> <div className=" space-y-2"> <Label htmlFor=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space-y-2"> <Label htmlFor=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) 
}<div className=" space-y-2"> <Label htmlFor=" paymentType">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label>Salary Range</Label> <div className=" flex gap-4 items-center"> <Input placeholder=" Min"type=" number"className=" w-full"/> <span>to</span> <Input placeholder=" Max"type=" number"className=" w-full"/> <Select defaultValue=" usd"> <SelectTrigger className=" w-24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space-y-2"> <Label htmlFor=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space-y-2"> <Label htmlFor=" startDate">Expected Start Date</Label> <Input type=" date"id=" startDate"/> </div> <div className=" space-y-2"> <Label htmlFor=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1-3m">1-3 months</SelectItem> <SelectItem value=" 3-6m">3-6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" additionalInfo">Additional Budget Information</Label> <Textarea id=" additionalInfo"placeholder=" Any additional information about budget or payment"rows= {
  3 
}/> </div> </div>) 
}<Card> <CardContent className=" p-4"> <h3 className=" font-bold text-lg">Senior React Developer</h3> <p className=" text-muted-foreground">TechCorp Inc. • Remote • Full-time</p> <div className=" flex gap-2 my-3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node.js</Badge> </div> </div> <div className=" space-y-1 text-sm mt-3"> <p className=" font-medium">Experience Level:</p> <p>Senior</p> </div> </div> <div className=" mt-4 pt-3 border-t border-border"> <h4 className=" font-medium mb-2">Description</h4> <p className=" text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w-full" >Edit Job Post</Button> </div> 
}
}
;
;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
