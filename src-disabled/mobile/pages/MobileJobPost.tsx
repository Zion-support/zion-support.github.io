:src_backup/mobile/pages/MobileJobPost.tsx

import React, { useState } from "react",
import { MobileHeader } from "@/mobile/components/common/MobileHeader",
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select",
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",

type JobPostStep = "details" | "requirements" | "budget" | "preview",

export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),

  const goToNextStep = () => {
import React, { useState } from "react",
import { MobileHeader } from "@/mobile/components/common/MobileHeader",
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
type JobPostStep = any;
:src_backup/mobile/pages/MobileJobPost.tsx
export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details")
  const goToNextStep = () => {
    if (currentStep === "details") {
      setCurrentStep("requirements")
    } else if (currentStep === "requirements") {
      setCurrentStep("budget")
    } else if (currentStep === "budget") {
      setCurrentStep("preview")

    }
:src_backup/mobile/pages/MobileJobPost.tsx
  },
:src_backup/mobile/pages/MobileJobPost.tsx
  const goToPrevStep = () => {
    if (currentStep === "requirements") {
      setCurrentStep("details")
    } else if (currentStep === "budget") {
      setCurrentStep("requirements")
    } else if (currentStep === "preview") {
      setCurrentStep("budget")
    }

  },

  const renderStepContent = () => {}
    switch (currentStep) {"
      case "details": return <DetailsStep />,"
      case "requirements":
        return <RequirementsStep />,"
      case "budget":
        return <BudgetStep />,"
      case "preview":
        return <PreviewStep />,
      default:
        return <DetailsStep />
    }
  },
return (

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
"
          <Button variant="outline" className="flex gap-1">"
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>
        </div>

        {renderStepContent()}
        "
        <div className="flex gap-2 mt-6">"
          {currentStep !== "details" && (
            <Button "
              variant="outline" "
              className="flex-1 gap-1" 
              onClick={goToPrevStep}
            >"
              <ChevronLeft className="h-4 w-4" /> Back;
            </Button>
          )}

          <Button 
            className="flex-1 gap-1"
            onClick = {goToNextStep,}>;
            {currentStep === "preview" ? "Publish Job" : "Continue"}

          <Button;
          <Button;
"
            className="flex-1 gap-1"
            onClick={goToNextStep}
          >"
            {currentStep === "preview" ? "Publish Job" : "Continue"}"
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}

      <BottomNavigation />
    </div>
  )
}
:src_backup/mobile/pages/MobileJobPost.tsx

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
"
      <div className="space-y-2">"
        <Label htmlFor="title">Job Title</Label>"
        <Input id="title" placeholder="e.g. Senior React Developer" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
"
      <div className="space-y-2">"
        <Label htmlFor="company">Company Name</Label>"
        <Input id="company" placeholder="Your company name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
"
      <div className="space-y-2">"
        <Label htmlFor="location">Location</Label>"
        <Select defaultValue="remote">
          <SelectTrigger>"
            <SelectValue placeholder="Select location type" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="remote">Remote</SelectItem>"
            <SelectItem value="onsite">On-site</SelectItem>"
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
"
      <div className="space-y-2">"
        <Label htmlFor="jobType">Job Type</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="fulltime">Full-time</SelectItem>"
            <SelectItem value="parttime">Part-time</SelectItem>"
            <SelectItem value="contract">Contract</SelectItem>"
            <SelectItem value="freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>
:src_backup/mobile/pages/MobileJobPost.tsx
<Label htmlFor="description">Job Description</Label>
        <Textarea "
          id="description" "
          placeholder="Describe the job role and responsibilities" 

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea "
          id="description" "
          placeholder="Describe the job role and responsibilities" 
:src_backup/mobile/pages/MobileJobPost.tsx
import React, { useState } from "react",;
import { MobileHeader } from "@/mobile/components/common/MobileHeader",;
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;"
} from "@/components/ui/select",;'
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';"
import { Badge } from "@/components/ui/badge",;"
import { Card, CardContent } from "@/components/ui/card",;"
type JobPostStep = "details" | "requirements" | "budget" | "preview",;
export function MobileJobPost() { return null; }
    } else if (currentStep === "requirements") {;"
      setCurrentStep("budget");"
    } else if (currentStep === "budget") {;"
      setCurrentStep("preview");
    }
  },;
  const goToPrevStep = () => {;"
    if (currentStep === "requirements") {;"
      setCurrentStep("details");"
    } else if (currentStep === "budget") {;"
      setCurrentStep("requirements");"
    } else if (currentStep === "preview") {;"
      setCurrentStep("budget");
    }
  },;
  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "details": return <DetailsStep />,;"
      case "requirements":;
        return <RequirementsStep />,;"
      case "budget":;
        return <BudgetStep />,;"
      case "preview":;
        return <PreviewStep />,;
      default:;
        return <DetailsStep />;
    }
  },;
  return (;"
    <div className="min-h-screen flex flex-col">;
:src_backup/mobile/pages/MobileJobPost.tsx
      <MobileHeader;
        title={`Post a Job (${current_step === "preview" ? 4 : current_step === "budget" ? 3 : current_step === "requirements" ? 2 : 1}/4)`}
        show_back;
      />;
      <main className="flex - 1 py - 4 pb - 24 px-4">;
        <div className="mb - 6 flex justify-between">;
          <div className="flex space-x-1">;
            <Badge variant={current_step === "details" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p-0">1</Badge>;
            <Badge variant={current_step === "requirements" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p-0">2</Badge>;
            <Badge variant={current_step === "budget" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p-0">3</Badge>;
            <Badge variant={current_step === "preview" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p-0">4</Badge>;
          </div>;
          <Button variant="outline" className="flex gap-1">;
            <Zap className="h - 4 w-4" /> AI Assist;
          </Button>;
        </div>;
        {renderStepContent ()}
        <div className="flex gap - 2 mt-6">;
          {current_step !== "details" && (
            <Button;
              variant="outline";
              className="flex - 1 gap-1";
              on_click = {goToPrevStep, }
            >;
              <ChevronLeft className="h - 4 w-4" /> Back;
            </Button>)}
          <Button;
            className="flex - 1 gap-1";
            on_click = {goToNextStep, }
          >;
            {current_step === "preview" ? "Publish Job" : "Continue"}
            {current_step !== "preview" && <ChevronRight className="h - 4 w-4" />}          </Button>;
        </div>;
      </main>;
      <BottomNavigation />;
    </div>);
}
/**
 * DetailsStep - Function description
 */
function DetailsStep() {
  return (
    <div className="space-y-4">;
      <h2 className="text - lg font-medium">Job Details</h2>;
      <div className="space-y-2">;
        <Label html_for="title">Job Title</Label>;
        <Input id="title" placeholder="e.g. Senior React Developer" />;
      </div>;
      <div className="space-y-2">;
        <Label html_for="company">Company Name</Label>;
        <Input id="company" placeholder="Your company name" />;
      </div>;
      <div className="space-y-2">;
        <Label html_for="location">Location</Label>;
        <Select default_value="remote">;          <SelectTrigger>;
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack;
      />;"
      <main className="flex-1 py-4 pb-24 px-4">;"
        <div className="mb-6 flex justify-between">;"
          <div className="flex space-x-1">;"
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1</Badge>;"
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2</Badge>;"
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3</Badge>;"
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4</Badge>;
          </div>;"
          <Button variant="outline" className="flex gap-1">;"
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;
        {renderStepContent()}
;"
        <div className="flex gap-2 mt-6">;"
          {currentStep !== "details" && (;
            <Button;"
              variant="outline";"
              className="flex-1 gap-1";
              onClick={goToPrevStep}
            >;"
              <ChevronLeft className="h-4 w-4" /> Back;
            </Button>;
          )}
;
          <Button;"
            className="flex-1 gap-1";
            onClick={goToNextStep}
          >;"
            {currentStep === "preview" ? "Publish Job" : "Continue"}"
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}

          </Button>;
        </div>;
      </main>;
      <BottomNavigation />;
    </div>;
  );
}
;
:src_backup/mobile/pages/MobileJobPost.tsx
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
      <div className="space-y-2">;
        <Label htmlFor="location">Location</Label>;
        <Select defaultValue="remote">;

          <SelectTrigger>;
            <SelectValue placeholder="Select location type" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="remote">Remote</SelectItem>;
            <SelectItem value="onsite">On - site</SelectItem>;            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label html_for="job_type">Job Type</Label>;        <Select>;

            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
:src/mobile/pages/MobileJobPost.tsx

        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select job type" />;
          </SelectTrigger>;
          <SelectContent>;
:src/mobile/pages/MobileJobPost.tsx
            <SelectItem value="fulltime">Full - time</SelectItem>;
            <SelectItem value="parttime">Part - time</SelectItem>;            <SelectItem value="contract">Contract</SelectItem>;

            <SelectItem value="contract">Contract</SelectItem>;
            <SelectItem value="freelance">Freelance</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
:src/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">;
        <Label html_for="description">Job Description</Label>;
        <Textarea;
          id="description";
          placeholder="Describe the job role and responsibilities";
          rows = {5, }
        />;
      </div>;
    </div>);}
          rows={5}
        />;
      </div>;
    </div>;
  );

}

function RequirementsStep() {}
  const [skills, setSkills] = useState<string[]>(["
    "React", "TypeScript", "Node.js"
:src/mobile/pages/MobileJobPost.tsx
  ]),
  const [newSkill, setNewSkill] = useState(""),

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]),
      setNewSkill("")
    }
  },

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  },

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>

:src_backup/mobile/pages/MobileJobPost.tsx
  ])
  const [newSkill, setNewSkill] = useState("")
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }
  const removeSkill = (skill: string,) => {
    setSkills(skills.filter(s => s !== skill))
  }
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>
:src/mobile/pages/MobileJobPost.tsx

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className="space-y-2">
"
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
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
  SelectValue;"
} from "@/components/ui/select",;""
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge",;""
import { Card, CardContent } from "@/components/ui/card",;""
type JobPostStep = "details" | "requirements" | "budget" | "preview",;"
export function MobileJobPost() {;"
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;"
      case "details": return <DetailsStep />,;"

        return <RequirementsStep />,;

        return <BudgetStep />,;

        return <PreviewStep />,;

    <div className="min-h-screen flex flex-col">;"
      <MobileHeader;"
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}"
        showBack;
      />;

              variant="outline";""
              className="flex-1 gap-1";"
            >;

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
        <Label htmlFor="education">Education</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select required education" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="high_school">High School</SelectItem>"
            <SelectItem value="associate">Associate Degree</SelectItem>'"
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>'"
            <SelectItem value="master">Master's Degree</SelectItem>"
            <SelectItem value="phd">PhD</SelectItem>"
            <SelectItem value="none">No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
:src_backup/mobile/pages/MobileJobPost.tsx
<div className="space-y-2">
        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              {skill}
              <button 
                className="ml-1 rounded-full hover:bg-background/20 p-1"
;
:src_backup/mobile/pages/MobileJobPost.tsx
function RequirementsStep() {;
  const [skills, setSkills] = useState<string[]>([;
:src/mobile/pages/MobileJobPost.tsx
    "React", "TypeScript", "Node && Node.js";
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {;
    if (newSkill && !skills && skills.includes(newSkill)) {;
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string,) => {;
    setSkills(skills && skills.filter(s => s !== skill))
};

  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
    "React", "TypeScript", "Node.js";
  ]),;
  const [newSkill, setNewSkill] = useState(""),;
  const addSkill = () => {;
    if (newSkill && !skills.includes(newSkill)) {;
      setSkills([...skills, newSkill]),;
      setNewSkill("");
function RequirementsStep() { return null; }
    }
  };
  const removeSkill = (skill:,  string) => {;,
    setSkills(skills.filter(s => s !==,  skill));
  const removeSkill = (skill: string) => {;
    setSkills(skills.filter(s => s !== skill));
  };
:src_backup/mobile/pages/MobileJobPost.tsx
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
      <div className="space-y-2">;
        <Label htmlFor="experience">Experience Level</Label>;

        <Label html_for="experience">Experience Level</Label>;
:src_backup/mobile/pages/MobileJobPost.tsx

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
      </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">;
        <Label htmlFor="education">Education</Label>;
        <Label html_for="education">Education</Label>;

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
      </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">;
        <Label>Required Skills</Label>;
        <div className="flex flex-wrap gap-2 mb-3">;
          {skills.map((skill) => (;
            <Badge;
              key={skill} ;
              variant="secondary";
              className="flex items-center gap-1 px-3 py-1";
            >;
      <div className="space-y-2">
        <Label>Required Skills</Label>"
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <Badge;
              key={skill} "
              variant="secondary""
              className="flex items-center gap-1 px-3 py-1"

        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">"
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary""
              className="flex items-center gap-1 px-3 py-1""
            >
              {skill}
:src_backup/mobile/pages/MobileJobPost.tsx
              <button;
                className="ml-1 rounded-full hover:bg-background/20 p-1";
                onClick={() => removeSkill(skill)}
              >;
                ×;
              </button>;
            </Badge>;
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

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
"
      <div className="space-y-2">"
        <Label htmlFor="requirements">Specific Requirements</Label>
        <Textarea "
          id="requirements" "
          placeholder="List any specific requirements or qualifications" 
          rows={4}
        />
      </div>

:src_backup/mobile/pages/MobileJobPost.tsx
<div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea "
          id="responsibilities" "
          placeholder="List the key responsibilities for this role" 
:src_backup/mobile/pages/MobileJobPost.tsx
rows={4}
        />;
      </div>;
    </div>;
  );
:src_backup/mobile/pages/MobileJobPost.tsx
}

function BudgetStep() {}
  return ("
    <div className="space-y-4">"
      <h2 className="text-lg font-medium">Budget & Timeline</h2>
        <Label htmlFor="education">Education"

            <SelectValue placeholder="Select required education" />"

            <SelectItem value="high_school">High School""
            <SelectItem value="associate">Associate Degree""
            <SelectItem value="bachelor">Bachelor's Degree
            <SelectItem value="master">Master's Degree
            <SelectItem value="phd">PhD""
            <SelectItem value="none">No Specific Requirement"

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
        <Label htmlFor="paymentType">Payment Type</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select payment type" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="hourly">Hourly Rate</SelectItem>"
            <SelectItem value="fixed">Fixed Price</SelectItem>"
            <SelectItem value="salary">Salary</SelectItem>
          </SelectContent>
        </Select>
      </div>
        <Label>Salary Range"
        <div className="flex gap-4 items-center">"
          <Input placeholder="Min" type="number" className="w-full" />"

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
        <Label>Salary Range</Label>"
        <div className="flex gap-4 items-center">"
          <Input placeholder="Min" type="number" className="w-full" />
          <span>to</span>"
          <Input placeholder="Max" type="number" className="w-full" />"
          <Select defaultValue="usd">"
            <SelectTrigger className="w-24">"
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>"
              <SelectItem value="usd">USD</SelectItem>"
              <SelectItem value="eur">EUR</SelectItem>"
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
        <Label htmlFor="deadline">Application Deadline</Label>
"
      <div className="space-y-2">"
        <Label htmlFor="deadline">Application Deadline</Label>"
        <Input type="date" id="deadline" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Expected Start Date</Label>
"
      <div className="space-y-2">"
        <Label htmlFor="startDate">Expected Start Date</Label>"
        <Input type="date" id="startDate" />
      </div>

      <div className="space-y-2">
"
      <div className="space-y-2">"
        <Label htmlFor="duration">Project Duration</Label>
        <Select>
          <SelectTrigger>"
            <SelectValue placeholder="Select project duration" />
          </SelectTrigger>
          <SelectContent>"
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select project duration" />"
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ltw">Less than a week</SelectItem>"
            <SelectItem value="ltm">Less than a month</SelectItem>"
            <SelectItem value="1-3m">1-3 months</SelectItem>"
            <SelectItem value="3-6m">3-6 months</SelectItem>"
            <SelectItem value="6m+">6+ months</SelectItem>"
:src_backup/mobile/pages/MobileJobPost.tsx
            <SelectItem value="ongoing">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
:src_backup/mobile/pages/MobileJobPost.tsx
      <div className="space-y-2">
"
      <div className="space-y-2">"
        <Label htmlFor="additionalInfo">Additional Budget Information</Label>
        <Textarea "
          id="additionalInfo" "
          placeholder="Any additional information about budget or payment" 
rows={3}
        />;
      </div>;
    </div>;
  );
}
:src_backup/mobile/pages/MobileJobPost.tsx

function PreviewStep() {}
  return ("
    <div className="space-y-4">"
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>

function PreviewStep() {
  return (

      <Card>
        <CardContent className="p-4">"
          <h3 className="font-bold text-lg">Senior React Developer</h3>"
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>"
          <div className="flex gap-2 my-3">"
            <Badge variant="outline">React</Badge>"
            <Badge variant="outline">TypeScript</Badge>"
            <Badge variant="outline">Node.js</Badge>"
        <CardContent className="p-4">
          <h3 className="font-bold text-lg">Senior React Developer</h3>

      <Card>"
        <CardContent className="p-4">"
          <h3 className="font-bold text-lg">Senior React Developer</h3>"
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>
        <Label htmlFor="startDate">Expected Start Date""
        <Input type="date" id="startDate" />"

        <Label htmlFor="duration">Project Duration"

            <SelectValue placeholder="Select project duration" />"

            <SelectItem value="ltw">Less than a week""
            <SelectItem value="ltm">Less than a month""
            <SelectItem value="1-3m">1-3 months""
            <SelectItem value="3-6m">3-6 months""
            <SelectItem value="6m+">6+ months""
            <SelectItem value="ongoing">Ongoing"

        <Label htmlFor="additionalInfo">Additional Budget Information"
          id="additionalInfo"""
          placeholder="Any additional information about budget or payment""
function PreviewStep() {
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>"
      <Card>
        <CardContent className="p-4">"
          <h3 className="font-bold text-lg">Senior React Developer</h3>""
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>""
          <div className="flex gap-2 my-3">"
            <Badge variant="outline">React""
            <Badge variant="outline">TypeScript""
            <Badge variant="outline">Node.js"
pr-12325

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
          <div className="flex gap-2 my-3">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Node.js</Badge>
          </div>

:src_backup/mobile/pages/MobileJobPost.tsx
          <div className="space-y-1 text-sm mt-4">
"
          <div className="space-y-1 text-sm mt-4">"
            <p className="font-medium">Salary Range:</p>
            <p>$80,000 - $120,000 USD / year</p>
          </div>
          <div className="space-y-1 text-sm mt-3">"
            <p className="font-medium">Experience Level:</p>"
            <p>Senior</p>
          </div>
          <div className="space-y-1 text-sm mt-3">"
            <p className="font-medium">Application Deadline:</p>"
            <p>December 15, 2023</p>
          </div>
          <div className="mt-4 pt-3 border-t border-border">"
            <h4 className="font-medium mb-2">Description</h4>"
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>'
          <div className="space-y-1 text-sm mt-4">"
            <p className="font-medium">Salary Range:</p>"
            <p>$80,000 - $120,000 USD / year</p>
pr-12325

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
          <div className="space-y-1 text-sm mt-3">
            <p className="font-medium">Experience Level:</p>
            <p>Senior</p>
          </div>
          <div className="space-y-1 text-sm mt-3">"
            <p className="font-medium">Experience Level:</p>"
            <p>Senior</p>
pr-12325

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
          <div className="space-y-1 text-sm mt-3">
            <p className="font-medium">Application Deadline:</p>
            <p>December 15, 2023</p>
          </div>
            <p className="font-medium">Application Deadline:</p>"
            <p>December 15, 2023</p>
pr-12325

:src_backup/mobile/pages/MobileJobPost.tsx

:src_backup/mobile/pages/MobileJobPost.tsx
          <div className="mt-4 pt-3 border-t border-border">
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>
          </div>
        </CardContent>
:src_backup/mobile/pages/MobileJobPost.tsx
      </Card>

      <Button variant="outline" className="w-full">Edit Job Post</Button>
    </div>
  )
}
;

        </div>;"
        <div className="flex gap-2">;
          <Input;
            value = {newSkill,}
            onChange = {(e,) => setNewSkill(e && e.target.value),}"
            placeholder="Add a skill";'
            onKeyDown = {(e,) => e && e.key === 'Enter' && addSkill(),}
          />;
          <Button onClick={addSkill}>Add</Button>;
        </div>;
      </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
"
      <div className="space-y-2">;"
        <Label htmlFor="requirements">Specific Requirements</Label>;
        <Textarea"
          id="requirements" "
          placeholder="List any specific requirements or qualifications" 
          rows = {4,}
        />;
      </div>;
"
      <div className="space-y-2">;"
        <Label htmlFor="responsibilities">Key Responsibilities</Label>;
        <Textarea"
          id="responsibilities" "
          placeholder="List the key responsibilities for this role"
          rows = {4,}
        />;
      </div>;
    </div>;
  );
}
:src_backup/mobile/pages/MobileJobPost.tsx

function BudgetStep() { return null; }
          rows = {3,}
        />;
      </div>;
    </div>;
  );
}
:src_backup/mobile/pages/MobileJobPost.tsx

function PreviewStep() {;
  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>;
      <Card>;
        <CardContent className="p-4">;
          <h3 className="font-bold text-lg">Senior React Developer</h3>;
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>;
          <div className="flex gap-2 my-3">;
            <Badge variant="outline">React</Badge>;
            <Badge variant="outline">TypeScript</Badge>;
            <Badge variant="outline">Node && Node.js</Badge>;
          </div>;
          <div className="space-y-1 text-sm mt-4">;
            <p className="font-medium">Salary Range:</p>;
            <p>$80,000 - $120,000 USD / year</p>;
          </div>;
          <div className="space-y-1 text-sm mt-3">;
            <p className="font-medium">Experience Level:</p>;
            <p>Senior</p>;
          </div>;
          <div className="space-y-1 text-sm mt-3">;
            <p className="font-medium">Application Deadline:</p>;
            <p>December 15, 2023</p>;
          </div>;
          <div className="mt-4 pt-3 border-t border-border">;
            <h4 className="font-medium mb-2">Description</h4>;
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
          </div>;
        </CardContent>;
      </Card>;
      <Button variant="outline" className="w-full">Edit Job Post</Button>;
    </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
  )
      </Card>
      <Button variant="outline" className="w-full">Edit Job Post</Button>
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
:src_backup/mobile/pages/MobileJobPost.tsx

};";
min-h-screen flex flex-col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap-1"> <Zap className=" h-4 w-4"/> AI Assist </Button> </div> {;
  renderStepContent () ";
}<Button variant=" outline"className=" flex-1 gap-1"onClick={;
  goToPrevStep ";
}> <ChevronLeft className=" h-4 w-4"/> Back </Button>) ;
}<Button </Button> </div> </main> <BottomNavigation /> </div>) ";
}<div className=" space-y-2"> <Label htmlFor=" title">Job Title</Label> <Input id=" title"placeholder=" e.g. Senior React Developer"/> </div> <div className=" space-y-2"> <Label htmlFor=" company">Company Name</Label> <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space-y-2"> <Label htmlFor=" location">Location</Label> <Select defaultValue=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/> </SelectTrigger> <SelectContent> <SelectItem value=" remote">Remote</SelectItem> <SelectItem value=" onsite">On-site</SelectItem> <SelectItem value=" hybrid">Hybrid</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" jobType">Job Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/> </SelectTrigger> <SelectContent> <SelectItem value=" fulltime">Full-time</SelectItem> <SelectItem value=" parttime">Part-time</SelectItem> <SelectItem value=" contract">Contract</SelectItem> <SelectItem value=" freelance">Freelance</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" description">Job Description</Label> <Textarea id=" description"placeholder=" Describe the job role and responsibilities"rows= {;
  5 ;
}/> </div> </div>) ;
}const addSkill = () => {;
  if (newSkill && !skills.includes (newSkill) ) {";
origin/cursor/automate-test-improve-and-merge-code-2533
  <div className=" space-y-2"> <Label htmlFor=" experience">Experience Level</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/> </SelectTrigger> <SelectContent> <SelectItem value=" entry">Entry Level</SelectItem> <SelectItem value=" mid">Mid Level</SelectItem> <SelectItem value=" senior">Senior</SelectItem> <SelectItem value=" expert">Expert</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" education">Education</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/> </SelectTrigger> <SelectContent> <SelectItem value=" high school">High School</SelectItem> <SelectItem value=" associate">Associate Degree</SelectItem> <SelectItem value=" bachelor">Bachelor's Degree</SelectItem> <SelectItem value=" master">Master's Degree</SelectItem> <SelectItem value=" phd">PhD</SelectItem> <SelectItem value=" none">No Specific Requirement</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label>Required Skills</Label> key= {;
  skill ";
}variant=" secondary"className=" flex items-center gap-1 px-3 py-1"> {;
  skill ;
}<button > × </button> </Badge>) ) ";
:src_backup/mobile/pages/MobileJobPost.tsx
}</div> <div className=" flex gap-2"> <Input /> <ButtononClick={
  addSkill "
}>Add</Button> </div> </div> <div className=" space-y-2"> <Label htmlFor=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space-y-2"> <Label htmlFor=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) ";
}<div className=" space-y-2"> <Label htmlFor=" paymentType">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label>Salary Range</Label> <div className=" flex gap-4 items-center"> <Input placeholder=" Min"type=" number"className=" w-full"/> <span>to</span> <Input placeholder=" Max"type=" number"className=" w-full"/> <Select defaultValue=" usd"> <SelectTrigger className=" w-24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space-y-2"> <Label htmlFor=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space-y-2"> <Label htmlFor=" startDate">Expected Start Date</Label> <Input type=" date"id=" startDate"/> </div> <div className=" space-y-2"> <Label htmlFor=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1-3m">1-3 months</SelectItem> <SelectItem value=" 3-6m">3-6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" additionalInfo">Additional Budget Information</Label> <Textareaid=" additionalInfo"placeholder=" Any additional information about budget or payment"rows= {"
  3
}/> </div> </div>) '";
:src_backup/mobile/pages/MobileJobPost.tsx
}<Card> <CardContent className=" p-4"> <h3 className=" font-bold text-lg">Senior React Developer</h3> <p className=" text-muted-foreground">TechCorp Inc. • Remote • Full-time</p> <div className=" flex gap-2 my-3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node && Node.js</Badge> </div> </div> <div className=" space-y-1 text-sm mt-3"> <p className=" font-medium">Experience Level:</p> <p>Senior</p> </div> </div> <div className=" mt-4 pt-3 border-t border-border"> <h4 className=" font-medium mb-2">Description</h4> <p className=" text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w-full" >Edit Job Post</Button> </div> '"}

      <div className="space-y-2">;
        <Label > Required Skills</Label>;
        <div className="flex flex - wrap gap - 2 mb-3">;
          {skills.map ((skill, ) => (
            <Badge;
              key = {skill, }
              variant="secondary";
              className="flex items - center gap - 1 px - 3 py-1";
            >;
              {skill}
              <button;
:src_backup/mobile/pages/MobileJobPost.tsx
                className="ml - 1 rounded - full hover:bg - background / 20 p-1";
                on_click = {(, ) => remove_skill (skill), }
              >;
                ×;
              </button>;
            </Badge>))}
:src_backup/mobile/pages/MobileJobPost.tsx
        </div>;
        <div className="flex gap-2">;
          <Input;
            value = {new_skill, }
            on_change = {(e, ) => setNewSkill (e.target.value), }"
            placeholder="Add a skill";'
            onKeyDown = {(e, ) => e.key === 'Enter' && add_skill (), }
          <Input ;
            value = {new_skill, }
            on_change = {(e, ) = /> setNewSkill (e.target.value), }
            placeholder="Add a skill";
            onKeyDown = {(e, ) => e.key === 'Enter' && add_skill (), }'
          />;
          <Button on_click={add_skill}>Add</Button>;
        </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
      </div>;
      <div className="space-y-2">;
        <Label html_for="requirements">Specific Requirements</Label>;
        <Textarea;"
          id="requirements";"
          placeholder="List any specific requirements or qualifications";
          rows = {4, }
        />;
:src_backup/mobile/pages/MobileJobPost.tsx
      </div>;
      <div className="space-y-2">;
        <Label html_for="responsibilities">Key Responsibilities</Label>;
        <Textarea;"
          id="responsibilities";"
          placeholder="List the key responsibilities for this role";
          rows = {4, }
        />;
      </div>;
    </div>);
}
/**
 * BudgetStep - Function description;
 */
:src_backup/mobile/pages/MobileJobPost.tsx
function BudgetStep() {
  return (
    <div className="space-y-4">;
      <h2 className="text - lg font-medium">Budget & Timeline</h2>;
      <div className="space-y-2">;
        <Label html_for="payment_type">Payment Type</Label>;
        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select payment type" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="hourly">Hourly Rate</SelectItem>;"
            <SelectItem value="fixed">Fixed Price</SelectItem>;"
            <SelectItem value="salary">Salary</SelectItem>;
          </SelectContent>;
        </Select>;
:src_backup/mobile/pages/MobileJobPost.tsx
      </div>;
      <div className="space-y-2">;
        <Label > Salary Range</Label>;
        <div className="flex gap - 4 items-center">;
          <Input placeholder="Min" type="number" className="w-full" />;
          <span > to</span>;
          <Input placeholder="Max" type="number" className="w-full" />;
          <Select default_value="usd">;
            <SelectTrigger className="w-24">;
              <SelectValue placeholder="Currency" />;
            </SelectTrigger>;
            <SelectContent>;"
              <SelectItem value="usd">USD</SelectItem>;"
              <SelectItem value="eur">EUR</SelectItem>;"
              <SelectItem value="gbp">GBP</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
:src_backup/mobile/pages/MobileJobPost.tsx
      </div>;
      <div className="space-y-2">;
        <Label html_for="deadline">Application Deadline</Label>;
        <Input type="date" id="deadline" />;
      </div>;
      <div className="space-y-2">;
        <Label html_for="start_date">Expected Start Date</Label>;
        <Input type="date" id="start_date" />;
      </div>;
      <div className="space-y-2">;
        <Label html_for="duration">Project Duration</Label>;
        <Select>;
          <SelectTrigger>;"
            <SelectValue placeholder="Select project duration" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="ltw">Less than a week</SelectItem>;"
            <SelectItem value="ltm">Less than a month</SelectItem>;"
            <SelectItem value="1 - 3m">1 - 3 months</SelectItem>;"
            <SelectItem value="3 - 6m">3 - 6 months</SelectItem>;"
            <SelectItem value="6m+">6+ months</SelectItem>;"
            <SelectItem value="ongoing">Ongoing</SelectItem>;
          </SelectContent>;
        </Select>;
:src_backup/mobile/pages/MobileJobPost.tsx
      </div>;
      <div className="space-y-2">;
        <Label html_for="additional_info">Additional Budget Information</Label>;
        <Textarea;"
          id="additional_info";"
          placeholder="Any additional information about budget or payment";
          rows = {3, }
        />;
      </div>;
    </div>);
}
/**
 * PreviewStep - Function description;
 */
:src_backup/mobile/pages/MobileJobPost.tsx
function PreviewStep() {
  return (
    <div className="space-y-4">;
      <h2 className="text - lg font - medium mb-2">Job Preview</h2>;
      <Card>;
        <CardContent className="p-4">;
          <h3 className="font - bold text-lg">Senior React Developer</h3>;
          <p className="text - muted-foreground">TechCorp Inc. • Remote • Full - time</p>;
          <div className="flex gap - 2 my-3">;
            <Badge variant="outline">React</Badge>;
            <Badge variant="outline">TypeScript</Badge>;
            <Badge variant="outline">Node.js</Badge>;
          </div>;
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
}";
min - h-screen flex flex - col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap-1"> <Zap className=" h - 4 w-4"/> AI Assist </Button> </div> {
  renderStepContent () ";
}<Button variant=" outline"className=" flex - 1 gap-1"on_click={
  goToPrevStep ";
}> <ChevronLeft className=" h - 4 w-4"/> Back </Button>);
}<Button </Button> </div> </main> <BottomNavigation /> </div>) ";
:src_backup/mobile/pages/MobileJobPost.tsx
}<div className=" space-y-2"> <Label html_for=" title">Job Title</Label> <Input id=" title"placeholder=" e.g. Senior React Developer"/> </div> <div className=" space-y-2"> <Label html_for=" company">Company Name</Label> <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space-y-2"> <Label html_for=" location">Location</Label> <Select default_value=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/> </SelectTrigger> <SelectContent> <SelectItem value=" remote">Remote</SelectItem> <SelectItem value=" onsite">On - site</SelectItem> <SelectItem value=" hybrid">Hybrid</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label html_for=" job_type">Job Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/> </SelectTrigger> <SelectContent> <SelectItem value=" fulltime">Full - time</SelectItem> <SelectItem value=" parttime">Part - time</SelectItem> <SelectItem value=" contract">Contract</SelectItem> <SelectItem value=" freelance">Freelance</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label html_for=" description">Job Description</Label> <Textarea id=" description"placeholder=" Describe the job role and responsibilities"rows= {
  5;
}/> </div> </div>);
}const add_skill = () =>: any {
  if () {") {"
  $2
}
:src_backup/mobile/pages/MobileJobPost.tsx
  <div className=" space-y-2"> <Label html_for=" experience">Experience Level</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/> </SelectTrigger> <SelectContent> <SelectItem value=" entry">Entry Level</SelectItem> <SelectItem value=" mid">Mid Level</SelectItem> <SelectItem value=" senior">Senior</SelectItem> <SelectItem value=" expert">Expert</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label html_for=" education">Education</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/> </SelectTrigger> <SelectContent> <SelectItem value=" high school">High School</SelectItem> <SelectItem value=" associate">Associate Degree</SelectItem> <SelectItem value=" bachelor">Bachelor's Degree</SelectItem> <SelectItem value=" master">Master's Degree</SelectItem> <SelectItem value=" phd">PhD</SelectItem> <SelectItem value=" none">No Specific Requirement</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label > Required Skills</Label> key= {
  skill ";
}variant=" secondary"className=" flex items - center gap - 1 px - 3 py-1"> {
  skill;
}<button > × </button> </Badge>) ) ";
}</div> <div className=" flex gap-2"> <Input /> <Button on_click={
  add_skill ";
}>Add</Button> </div> </div> <div className=" space-y-2"> <Label html_for=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space-y-2"> <Label html_for=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) ";
}<div className=" space-y-2"> <Label html_for=" payment_type">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label > Salary Range</Label> <div className=" flex gap - 4 items-center"> <Input placeholder=" Min"type=" number"className=" w-full"/> <span > to</span> <Input placeholder=" Max"type=" number"className=" w-full"/> <Select default_value=" usd"> <SelectTrigger className=" w-24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space-y-2"> <Label html_for=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space-y-2"> <Label html_for=" start_date">Expected Start Date</Label> <Input type=" date"id=" start_date"/> </div> <div className=" space-y-2"> <Label html_for=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1 - 3m">1 - 3 months</SelectItem> <SelectItem value=" 3 - 6m">3 - 6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label html_for=" additional_info">Additional Budget Information</Label> <Textarea id=" additional_info"placeholder=" Any additional information about budget or payment"rows= {
  3;
}/> </div> </div>) '";
}<Card> <CardContent className=" p - 4"> <h3 className=" font - bold text - lg">Senior React Developer</h3> <p className=" text - muted - foreground">TechCorp Inc. • Remote • Full - time</p> <div className=" flex gap - 2 my - 3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node.js</Badge> </div> </div> <div className=" space - y-1 text - sm mt - 3"> <p className=" font - medium">Experience Level:</p> <p > Senior</p> </div> </div> <div className=" mt - 4 pt - 3 border - t border - border"> <h4 className=" font - medium mb - 2">Description</h4> <p className=" text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w - full" >Edit Job Post</Button> </div> '"}
  <div className=" space - y-2"> <Label html_for=" experience">Experience Level</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/> </SelectTrigger> <SelectContent> <SelectItem value=" entry">Entry Level</SelectItem> <SelectItem value=" mid">Mid Level</SelectItem> <SelectItem value=" senior">Senior</SelectItem> <SelectItem value=" expert">Expert</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" education">Education</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/> </SelectTrigger> <SelectContent> <SelectItem value=" high school">High School</SelectItem> <SelectItem value=" associate">Associate Degree</SelectItem> <SelectItem value=" bachelor">Bachelor's Degree</SelectItem> <SelectItem value=" master">Master's Degree</SelectItem> <SelectItem value=" phd">PhD</SelectItem> <SelectItem value=" none">No Specific Requirement</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label > Required Skills</Label> key= {"
  skill ";
}variant=" secondary"className=" flex items - center gap - 1 px - 3 py - 1"> {"
  skill;
}<button > × </button> </Badge>) ) ";
}</div> <div className=" flex gap - 2"> <Input /> <Button on_click={"
  add_skill ";
}>Add</Button> </div> </div> <div className=" space - y-2"> <Label html_for=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space - y-2"> <Label html_for=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) ";
}<div className=" space - y-2"> <Label html_for=" payment_type">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label > Salary Range</Label> <div className=" flex gap - 4 items - center"> <Input placeholder=" Min"type=" number"className=" w - full"/> <span > to</span> <Input placeholder=" Max"type=" number"className=" w - full"/> <Select default_value=" usd"> <SelectTrigger className=" w - 24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space - y-2"> <Label html_for=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space - y-2"> <Label html_for=" start_date">Expected Start Date</Label> <Input type=" date"id=" start_date"/> </div> <div className=" space - y-2"> <Label html_for=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1 - 3m">1 - 3 months</SelectItem> <SelectItem value=" 3 - 6m">3 - 6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space - y-2"> <Label html_for=" additional_info">Additional Budget Information</Label> <Textarea id=" additional_info"placeholder=" Any additional information about budget or payment"rows= {"
  3;
}/> </div> </div>) '";
}<Card> <CardContent className=" p - 4"> <h3 className=" font - bold text - lg">Senior React Developer</h3> <p className=" text - muted - foreground">TechCorp Inc. • Remote • Full - time</p> <div className=" flex gap - 2 my - 3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node.js</Badge> </div> </div> <div className=" space - y-1 text - sm mt - 3"> <p className=" font - medium">Experience Level:</p> <p > Senior</p> </div> </div> <div className=" mt - 4 pt - 3 border - t border - border"> <h4 className=" font - medium mb - 2">Description</h4> <p className=" text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w - full" >Edit Job Post</Button> </div> '"}]
      <div className="space-y-2">
        <Label htmlFor="deadline">Application Deadline</Label>
        <Input type="date" id="deadline" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="startDate">Expected Start Date</Label>
        <Input type="date" id="startDate" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="duration">Project Duration</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select project duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ltw">Less than a week</SelectItem>
            <SelectItem value="ltm">Less than a month</SelectItem>
            <SelectItem value="1-3m">1-3 months</SelectItem>
            <SelectItem value="3-6m">3-6 months</SelectItem>
            <SelectItem value="6m+">6+ months</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Budget Information</Label>
        <Textarea 
          id="additionalInfo" 
          placeholder="Any additional information about budget or payment" 
          rows={3}
        />;
      </div>;
    </div>;
  );
}

function PreviewStep() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium mb-2">Job Preview</h2>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg">Senior React Developer</h3>
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>
          <div className="flex gap-2 my-3">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Node.js</Badge>
          </div>
          <div className="space-y-1 text-sm mt-4">
            <p className="font-medium">Salary Range:</p>
            <p>$80,000 - $120,000 USD / year</p>
          </div>
          <div className="space-y-1 text-sm mt-3">
            <p className="font-medium">Experience Level:</p>
            <p>Senior</p>
          </div>
          <div className="space-y-1 text-sm mt-3">
            <p className="font-medium">Application Deadline:</p>
            <p>December 15, 2023</p>
          </div>
          <div className="mt-4 pt-3 border-t border-border">
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>
          </div>
        </CardContent>
      </Card>
      <Button variant="outline" className="w-full">Edit Job Post</Button>
    </div>
  )
}
;
}<Card> <CardContent className=" p - 4"> <h3 className=" font - bold text - lg">Senior React Developer</h3> <p className=" text - muted - foreground">TechCorp Inc. • Remote • Full - time</p> <div className=" flex gap - 2 my - 3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node.js</Badge> </div> </div> <div className=" space - y-1 text - sm mt - 3"> <p className=" font - medium">Experience Level:</p> <p > Senior</p> </div> </div> <div className=" mt - 4 pt - 3 border - t border - border"> <h4 className=" font - medium mb - 2">Description</h4> <p className=" text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w - full" >Edit Job Post</Button> </div> '"}
}</div> <div className=" flex gap-2"> <Input /> <Button onClick={;
  addSkill ";
}>Add</Button> </div> </div> <div className=" space-y-2"> <Label htmlFor=" requirements">Specific Requirements</Label> <Textarea /> </div> <div className=" space-y-2"> <Label htmlFor=" responsibilities">Key Responsibilities</Label> <Textarea /> </div> </div>) ";
}<div className=" space-y-2"> <Label htmlFor=" paymentType">Payment Type</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/> </SelectTrigger> <SelectContent> <SelectItem value=" hourly">Hourly Rate</SelectItem> <SelectItem value=" fixed">Fixed Price</SelectItem> <SelectItem value=" salary">Salary</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label>Salary Range</Label> <div className=" flex gap-4 items-center"> <Input placeholder=" Min"type=" number"className=" w-full"/> <span>to</span> <Input placeholder=" Max"type=" number"className=" w-full"/> <Select defaultValue=" usd"> <SelectTrigger className=" w-24"> <SelectValue placeholder=" Currency"/> </SelectTrigger> <SelectContent> <SelectItem value=" usd">USD</SelectItem> <SelectItem value=" eur">EUR</SelectItem> <SelectItem value=" gbp">GBP</SelectItem> </SelectContent> </Select> </div> </div> <div className=" space-y-2"> <Label htmlFor=" deadline">Application Deadline</Label> <Input type=" date"id=" deadline"/> </div> <div className=" space-y-2"> <Label htmlFor=" startDate">Expected Start Date</Label> <Input type=" date"id=" startDate"/> </div> <div className=" space-y-2"> <Label htmlFor=" duration">Project Duration</Label> <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/> </SelectTrigger> <SelectContent> <SelectItem value=" ltw">Less than a week</SelectItem> <SelectItem value=" ltm">Less than a month</SelectItem> <SelectItem value=" 1-3m">1-3 months</SelectItem> <SelectItem value=" 3-6m">3-6 months</SelectItem> <SelectItem value=" 6m+">6+ months</SelectItem> <SelectItem value=" ongoing">Ongoing</SelectItem> </SelectContent> </Select> </div> <div className=" space-y-2"> <Label htmlFor=" additionalInfo">Additional Budget Information</Label> <Textarea id=" additionalInfo"placeholder=" Any additional information about budget or payment"rows= {;
  3 ;
}/> </div> </div>) '";
}<Card> <CardContent className=" p-4"> <h3 className=" font-bold text-lg">Senior React Developer</h3> <p className=" text-muted-foreground">TechCorp Inc. • Remote • Full-time</p> <div className=" flex gap-2 my-3"> <Badge variant=" outline">React</Badge> <Badge variant=" outline">TypeScript</Badge> <Badge variant=" outline">Node.js</Badge> </div> </div> <div className=" space-y-1 text-sm mt-3"> <p className=" font-medium">Experience Level:</p> <p>Senior</p> </div> </div> <div className=" mt-4 pt-3 border-t border-border"> <h4 className=" font-medium mb-2">Description</h4> <p className=" text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div> </CardContent> </Card> <Button variant=" outline"className=" w-full" >Edit Job Post</Button> </div> '"
:src_backup/mobile/pages/MobileJobPost.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
          <div className="mt-4 pt-3 border-t border-border">"
            <h4 className="font-medium mb-2">Description</h4>""
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>

        <div className="flex gap-2">;"
          <Input;
            value = {newSkill,})
            onChange = {(e,) => setNewSkill(e && e.target.value),}

          <Button onClick={addSkill}>Add;
        <Label htmlFor="requirements">Specific Requirements;"
          rows = {4,}

        <Label htmlFor="responsibilities">Key Responsibilities;"

      <h2 className="text-lg font-medium">Budget & Timeline</h2>;""
        <Label htmlFor="paymentType">Payment Type;"

            <SelectValue placeholder="Select payment type" />;"

            <SelectItem value="hourly">Hourly Rate;""
            <SelectItem value="fixed">Fixed Price;""
            <SelectItem value="salary">Salary;"
        <Label>Salary Range;"
        <div className="flex gap-4 items-center">;"
          <Input placeholder="Min" type="number" className="w-full" />;"

          <span>to</span>;"
          <Input placeholder="Max" type="number" className="w-full" />;"
          <Select defaultValue="usd">;"
            <SelectTrigger className="w-24">;"
              <SelectValue placeholder="Currency" />;"

              <SelectItem value="usd">USD;""
              <SelectItem value="eur">EUR;""
              <SelectItem value="gbp">GBP;"
        <Label htmlFor="deadline">Application Deadline;""
        <Input type="date" id="deadline" />;"

        <Label htmlFor="startDate">Expected Start Date;""
        <Input type="date" id="startDate" />;"

        <Label htmlFor="duration">Project Duration;"

            <SelectValue placeholder="Select project duration" />;"

            <SelectItem value="ltw">Less than a week;""
            <SelectItem value="ltm">Less than a month;""
            <SelectItem value="1-3m">1-3 months;""
            <SelectItem value="3-6m">3-6 months;""
            <SelectItem value="6m+">6+ months;""
            <SelectItem value="ongoing">Ongoing;"
        <Label htmlFor="additionalInfo">Additional Budget Information;"
          rows = {3,}

      <h2 className="text-lg font-medium mb-2">Job Preview</h2>;"
      <Card>;
        <CardContent className="p-4">;"
          <h3 className="font-bold text-lg">Senior React Developer</h3>;""
          <p className="text-muted-foreground">TechCorp Inc. • Remote • Full-time</p>;""
          <div className="flex gap-2 my-3">;"
            <Badge variant="outline">React;""
            <Badge variant="outline">TypeScript;""
            <Badge variant="outline">Node && Node.js;"
          <div className="space-y-1 text-sm mt-4">;"
            <p className="font-medium">Salary Range:</p>;"
            <p>$80,000 - $120,000 USD / year</p>;
          <div className="space-y-1 text-sm mt-3">;"
            <p className="font-medium">Experience Level:</p>;"
            <p>Senior</p>;
            <p className="font-medium">Application Deadline:</p>;"
            <p>December 15, 2023</p>;
          <div className="mt-4 pt-3 border-t border-border">;"
            <h4 className="font-medium mb-2">Description</h4>;""
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
      <Button variant="outline" className="w-full">Edit Job Post;"
min-h-screen flex flex-col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap-1"> <Zap className=" h-4 w-4"/> AI Assist  </div> {;"
}<Buttonvariant=" outline"className=" flex-1 gap-1"onClick={""
  goToPrevStep """
}> <ChevronLeft className=" h-4 w-4"/> Back ) ;"
}<Button  </div> </main> <BottomNavigation /> </div>) ";""
}<div className=" space-y-2"> <Label htmlFor=" title">Job Title <Input id=" title"placeholder=" e && e.g. Senior React Developer"/> </div> <div className=" space-y-2"> <Label htmlFor=" company">Company Name <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space-y-2"> <Label htmlFor=" location">Location <Select defaultValue=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/>  <SelectContent> <SelectItem value=" remote">Remote <SelectItem value=" onsite">On-site <SelectItem value=" hybrid">Hybrid   </div> <div className=" space-y-2"> <Label htmlFor=" jobType">Job Type <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/>  <SelectContent> <SelectItem value=" fulltime">Full-time <SelectItem value=" parttime">Part-time <SelectItem value=" contract">Contract <SelectItem value=" freelance">Freelance   </div> <div className=" space-y-2"> <Label htmlFor=" description">Job Description <Textareaid=" description"placeholder=" Describe the job role and responsibilities"rows= {"
  5;
}/> </div> </div>) ;"
  <div className=" space-y-2"> <Label htmlFor=" experience">Experience Level <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/>  <SelectContent> <SelectItem value=" entry">Entry Level <SelectItem value=" mid">Mid Level <SelectItem value=" senior">Senior <SelectItem value=" expert">Expert   </div> <div className=" space-y-2"> <Label htmlFor=" education">Education <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/>  <SelectContent> <SelectItem value=" high school">High School <SelectItem value=" associate">Associate Degree <SelectItem value=" bachelor">Bachelor's Degree <SelectItem value=" master">Master's Degree <SelectItem value=" phd">PhD <SelectItem value=" none">No Specific Requirement   </div> <div className=" space-y-2"> <Label>Required Skills key= {;""
}<button > × </button> ) ) ";""
}</div> <div className=" flex gap-2"> <Input /> <ButtononClick={"
}>Add </div> </div> <div className=" space-y-2"> <Label htmlFor=" requirements">Specific Requirements <Textarea /> </div> <div className=" space-y-2"> <Label htmlFor=" responsibilities">Key Responsibilities <Textarea /> </div> </div>) ";""
}<div className=" space-y-2"> <Label htmlFor=" paymentType">Payment Type <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/>  <SelectContent> <SelectItem value=" hourly">Hourly Rate <SelectItem value=" fixed">Fixed Price <SelectItem value=" salary">Salary   </div> <div className=" space-y-2"> <Label>Salary Range <div className=" flex gap-4 items-center"> <Input placeholder=" Min"type=" number"className=" w-full"/> <span>to</span> <Input placeholder=" Max"type=" number"className=" w-full"/> <Select defaultValue=" usd"> <SelectTrigger className=" w-24"> <SelectValue placeholder=" Currency"/>  <SelectContent> <SelectItem value=" usd">USD <SelectItem value=" eur">EUR <SelectItem value=" gbp">GBP   </div> </div> <div className=" space-y-2"> <Label htmlFor=" deadline">Application Deadline <Input type=" date"id=" deadline"/> </div> <div className=" space-y-2"> <Label htmlFor=" startDate">Expected Start Date <Input type=" date"id=" startDate"/> </div> <div className=" space-y-2"> <Label htmlFor=" duration">Project Duration <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/>  <SelectContent> <SelectItem value=" ltw">Less than a week <SelectItem value=" ltm">Less than a month <SelectItem value=" 1-3m">1-3 months <SelectItem value=" 3-6m">3-6 months <SelectItem value=" 6m+">6+ months <SelectItem value=" ongoing">Ongoing   </div> <div className=" space-y-2"> <Label htmlFor=" additionalInfo">Additional Budget Information <Textareaid=" additionalInfo"placeholder=" Any additional information about budget or payment"rows= {"
  3;"
}/> </div> </div>) '";""
}<Card> <CardContent className=" p-4"> <h3 className=" font-bold text-lg">Senior React Developer</h3> <p className=" text-muted-foreground">TechCorp Inc. • Remote • Full-time</p> <div className=" flex gap-2 my-3"> <Badge variant=" outline">React <Badge variant=" outline">TypeScript <Badge variant=" outline">Node && Node.js </div> </div> <div className=" space-y-1 text-sm mt-3"> <p className=" font-medium">Experience Level:</p> <p>Senior</p> </div> </div> <div className=" mt-4 pt-3 border-t border-border"> <h4 className=" font-medium mb-2">Description</h4> <p className=" text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div>   <Button variant=" outline"className=" w-full" >Edit Job Post </div> '"}""
        <Label > Required Skills;"
        <div className="flex flex - wrap gap - 2 mb - 3">;"
              key = {skill, }"
              variant="secondary";""
              className="flex items - center gap - 1 px - 3 py - 1";"

              <button;"
                className="ml - 1 rounded - full hover:bg - background / 20 p - 1";"
                on_click = {(, ) => remove_skill (skill), }
</button>
              </button>;
            ))}
        <div className="flex gap - 2">;"
            value = {new_skill, }
            on_change = {(e, ) => setNewSkill (e.target.value), }

          <Button on_click={add_skill}>Add;
        <Label html_for="requirements">Specific Requirements;"
          id="requirements";""
          placeholder="List any specific requirements or qualifications";"
          rows = {4, }

        <Label html_for="responsibilities">Key Responsibilities;"
          id="responsibilities";""
          placeholder="List the key responsibilities for this role";"

    </div>);"
      <h2 className="text - lg font - medium">Budget & Timeline</h2>;""
        <Label html_for="payment_type">Payment Type;"

        <Label > Salary Range;"
        <div className="flex gap - 4 items - center">;"
          <Input placeholder="Min" type="number" className="w - full" />;"

          <span > to</span>;"
          <Input placeholder="Max" type="number" className="w - full" />;"
          <Select default_value="usd">;"
            <SelectTrigger className="w - 24">;"

        <Label html_for="deadline">Application Deadline;""

        <Label html_for="start_date">Expected Start Date;""
        <Input type="date" id="start_date" />;"

        <Label html_for="duration">Project Duration;"

            <SelectItem value="1 - 3m">1 - 3 months;""
            <SelectItem value="3 - 6m">3 - 6 months;""
        <Label html_for="additional_info">Additional Budget Information;"
          id="additional_info";""
          placeholder="Any additional information about budget or payment";"
          rows = {3, }

      <h2 className="text - lg font - medium mb - 2">Job Preview</h2>;"
        <CardContent className="p - 4">;"
          <h3 className="font - bold text - lg">Senior React Developer</h3>;""
          <p className="text - muted - foreground">TechCorp Inc. • Remote • Full - time</p>;""
          <div className="flex gap - 2 my - 3">;"
            <Badge variant="outline">Node.js;"
          <div className="space - y-1 text - sm mt - 4">;"
            <p className="font - medium">Salary Range:</p>;"
            <p>$80, 000 - $120, 000 USD / year</p>;
          <div className="space - y-1 text - sm mt - 3">;"
            <p className="font - medium">Experience Level:</p>;"
            <p > Senior</p>;
            <p className="font - medium">Application Deadline:</p>;"
            <p > December 15, 2023</p>;
          <div className="mt - 4 pt - 3 border - t border - border">;"
            <h4 className="font - medium mb - 2">Description</h4>;""
            <p className="text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
      <Button variant="outline" className="w - full">Edit Job Post;"
min - h-screen flex flex - col"> <MobileHeader </div> <Button variant=" outline"className=" flex gap - 1"> <Zap className=" h - 4 w - 4"/> AI Assist  </div> {"
}<Button variant=" outline"className=" flex - 1 gap - 1"on_click={""
  goToPrevStep ";""
}> <ChevronLeft className=" h - 4 w - 4"/> Back );""
}<div className=" space - y-2"> <Label html_for=" title">Job Title <Input id=" title"placeholder=" e.g. Senior React Developer"/> </div> <div className=" space - y-2"> <Label html_for=" company">Company Name <Input id=" company"placeholder=" Your company name"/> </div> <div className=" space - y-2"> <Label html_for=" location">Location <Select default_value=" remote"> <SelectTrigger> <SelectValue placeholder=" Select location type"/>  <SelectContent> <SelectItem value=" remote">Remote <SelectItem value=" onsite">On - site <SelectItem value=" hybrid">Hybrid   </div> <div className=" space - y-2"> <Label html_for=" job_type">Job Type <Select> <SelectTrigger> <SelectValue placeholder=" Select job type"/>  <SelectContent> <SelectItem value=" fulltime">Full - time <SelectItem value=" parttime">Part - time <SelectItem value=" contract">Contract <SelectItem value=" freelance">Freelance   </div> <div className=" space - y-2"> <Label html_for=" description">Job Description <Textarea id=" description"placeholder=" Describe the job role and responsibilities"rows= {"
}/> </div> </div>);"
  <div className=" space - y-2"> <Label html_for=" experience">Experience Level <Select> <SelectTrigger> <SelectValue placeholder=" Select experience level"/>  <SelectContent> <SelectItem value=" entry">Entry Level <SelectItem value=" mid">Mid Level <SelectItem value=" senior">Senior <SelectItem value=" expert">Expert   </div> <div className=" space - y-2"> <Label html_for=" education">Education <Select> <SelectTrigger> <SelectValue placeholder=" Select required education"/>  <SelectContent> <SelectItem value=" high school">High School <SelectItem value=" associate">Associate Degree <SelectItem value=" bachelor">Bachelor's Degree <SelectItem value=" master">Master's Degree <SelectItem value=" phd">PhD <SelectItem value=" none">No Specific Requirement   </div> <div className=" space - y-2"> <Label > Required Skills key= {""
}</div> <div className=" flex gap - 2"> <Input /> <Button on_click={"
}>Add </div> </div> <div className=" space - y-2"> <Label html_for=" requirements">Specific Requirements <Textarea /> </div> <div className=" space - y-2"> <Label html_for=" responsibilities">Key Responsibilities <Textarea /> </div> </div>) ";""
}<div className=" space - y-2"> <Label html_for=" payment_type">Payment Type <Select> <SelectTrigger> <SelectValue placeholder=" Select payment type"/>  <SelectContent> <SelectItem value=" hourly">Hourly Rate <SelectItem value=" fixed">Fixed Price <SelectItem value=" salary">Salary   </div> <div className=" space - y-2"> <Label > Salary Range <div className=" flex gap - 4 items - center"> <Input placeholder=" Min"type=" number"className=" w - full"/> <span > to</span> <Input placeholder=" Max"type=" number"className=" w - full"/> <Select default_value=" usd"> <SelectTrigger className=" w - 24"> <SelectValue placeholder=" Currency"/>  <SelectContent> <SelectItem value=" usd">USD <SelectItem value=" eur">EUR <SelectItem value=" gbp">GBP   </div> </div> <div className=" space - y-2"> <Label html_for=" deadline">Application Deadline <Input type=" date"id=" deadline"/> </div> <div className=" space - y-2"> <Label html_for=" start_date">Expected Start Date <Input type=" date"id=" start_date"/> </div> <div className=" space - y-2"> <Label html_for=" duration">Project Duration <Select> <SelectTrigger> <SelectValue placeholder=" Select project duration"/>  <SelectContent> <SelectItem value=" ltw">Less than a week <SelectItem value=" ltm">Less than a month <SelectItem value=" 1 - 3m">1 - 3 months <SelectItem value=" 3 - 6m">3 - 6 months <SelectItem value=" 6m+">6+ months <SelectItem value=" ongoing">Ongoing   </div> <div className=" space - y-2"> <Label html_for=" additional_info">Additional Budget Information <Textarea id=" additional_info"placeholder=" Any additional information about budget or payment"rows= {"
}<Card> <CardContent className=" p - 4"> <h3 className=" font - bold text - lg">Senior React Developer</h3> <p className=" text - muted - foreground">TechCorp Inc. • Remote • Full - time</p> <div className=" flex gap - 2 my - 3"> <Badge variant=" outline">React <Badge variant=" outline">TypeScript <Badge variant=" outline">Node.js </div> </div> <div className=" space - y-1 text - sm mt - 3"> <p className=" font - medium">Experience Level:</p> <p > Senior</p> </div> </div> <div className=" mt - 4 pt - 3 border - t border - border"> <h4 className=" font - medium mb - 2">Description</h4> <p className=" text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p> </div>   <Button variant=" outline"className=" w - full" >Edit Job Post </div> '"}"]"`;
pr-12325
