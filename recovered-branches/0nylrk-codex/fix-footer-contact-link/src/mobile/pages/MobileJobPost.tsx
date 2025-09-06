


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Zap, ChevronLeft, ChevronRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
type JobPostStep = "details" | "requirements" | "budget" | "preview";
export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
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
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",

type JobPostStep = "details" | "requirements" | "budget" | "preview",

export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");
export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const goToNextStep = () => {
    if (currentStep === "details") {
      setCurrentStep("requirements")
    } else if (currentStep === "requirements") {
      setCurrentStep("budget")
    } else if (currentStep === "budget") {
      setCurrentStep("preview")
    }

  const goToPrevStep = () => {
    if (currentStep === "requirements") {
      setCurrentStep("details")
    } else if (currentStep === "budget") {
      setCurrentStep("requirements")
    } else if (currentStep === "preview") {
      setCurrentStep("budget")
    }

  const renderStepContent = () => {
    switch (currentStep) {
      case "details": return <DetailsStep />,
      case "requirements":
        return <RequirementsStep />,
      case "budget":
        return <BudgetStep />,
      case "preview":
        return <PreviewStep />,
      default:
        return <DetailsStep />
    }

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");

  const goToNextStep = () => {;
    if (currentStep === "details") {;
      setCurrentStep("requirements");
    } else if (currentStep === "requirements") {;
      setCurrentStep("budget");
    } else if (currentStep === "budget") {;
      setCurrentStep("preview");
    }
  };

  const goToPrevStep = () => {;
    if (currentStep === "requirements") {;
      setCurrentStep("details");
    } else if (currentStep === "budget") {;
      setCurrentStep("requirements");
    } else if (currentStep === "preview") {;
      setCurrentStep("budget");
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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


  return (
    <div className="min-h-screen flex flex-col">;
      <MobileHeader
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack

      />;

      <main className="flex-1 py-4 pb-24 px-4">;
        <div className="mb-6 flex justify-between">;
          <div className="flex space-x-1">;
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1</Badge>;
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2</Badge>;
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3</Badge>;
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4</Badge>;
          </div>;

          <Button variant="outline" className="flex gap-1">;
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;

        {renderStepContent()}

        <div className="flex gap-2 mt-6">;
          {currentStep !== "details" && (;
            <Button
              variant="outline" 
              className="flex-1 gap-1" 
              onClick={goToPrevStep}>;
              <ChevronLeft className="h-4 w-4" /> Back;
            </Button>;
          )}


          <Button
            className="flex-1 gap-1"
            onClick={goToNextStep}>;
            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}

          </Button>;
        </div>;
      </main>;

      <BottomNavigation />;
    </div>;
  );
}

function DetailsStep() {;
  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Details</h2>;

      <div className="space-y-2">;
        <Label htmlFor="title">Job Title</Label>;
        <Input id="title" placeholder="e && e.g. Senior React Developer" />;
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
            <SelectItem value="onsite">On-site</SelectItem>;
            <SelectItem value="hybrid">Hybrid</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;

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

      <div className="space-y-2">;
        <Label htmlFor="description">Job Description</Label>;
        <Textarea
          id="description" 
          placeholder="Describe the job role and responsibilities" 

          rows={5}
        />;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>
      <div className="space-y-2">
        <Label htmlFor="experience">Experience Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="mid">Mid Level</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="education">Education</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select required education" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high_school">High School</SelectItem>
            <SelectItem value="associate">Associate Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="none">No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1"
            >
              {skill}
<<<<<<< HEAD

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  };

  const removeSkill = (skill: string) => {;
    setSkills(skills && skills.filter(s => s !== skill));
  };

  return (
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
          {skills && skills.map((skill) => (;
            <Badge
              key={skill} 

              variant="secondary"
              className="flex items-center gap-1 px-3 py-1">;
              {skill}
              <button;
                className="ml-1 rounded-full hover:bg-background/20 p-1";

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                onClick={() => removeSkill(skill)}
              >;
                ×;
              </button>;
            </Badge>;
          ))}

        </div>;
        <div className="flex gap-2">;
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e && e.target.value)}
            placeholder="Add a skill";
            onKeyDown={(e) => e && e.key === 'Enter' && addSkill()}
          />;
          <Button onClick={addSkill}>Add</Button>;
        </div>;
      </div>;

      <div className="space-y-2">;
        <Label htmlFor="requirements">Specific Requirements</Label>;
        <Textarea
          id="requirements" 
          placeholder="List any specific requirements or qualifications" 
          rows={4}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>

        />
      </div>
    </div>
  )

          id="responsibilities" 
          placeholder="List the key responsibilities for this role" 

          rows={4}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        />;
      </div>;
    </div>;
  );
=======

}

function BudgetStep() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Budget & Timeline</h2>
      <div className="space-y-2">
        <Label htmlFor="paymentType">Payment Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select payment type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly Rate</SelectItem>
            <SelectItem value="fixed">Fixed Price</SelectItem>
            <SelectItem value="salary">Salary</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Salary Range</Label>
        <div className="flex gap-4 items-center">
          <Input placeholder="Min" type="number" className="w-full" />
          <span>to</span>
          <Input placeholder="Max" type="number" className="w-full" />
          <Select defaultValue="usd">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
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

          rows={3}
        />
      </div>
    </div>
  )
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

function BudgetStep() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Budget & Timeline</h2>
      <div className="space-y-2">
        <Label htmlFor="paymentType">Payment Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select payment type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly Rate</SelectItem>
            <SelectItem value="fixed">Fixed Price</SelectItem>
            <SelectItem value="salary">Salary</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Salary Range</Label>
        <div className="flex gap-4 items-center">
          <Input placeholder="Min" type="number" className="w-full" />
          <span>to</span>
          <Input placeholder="Max" type="number" className="w-full" />
          <Select defaultValue="usd">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
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
        <Textarea 
          id="additionalInfo" 
          placeholder="Any additional information about budget or payment" 
          rows={3}
        />
      </div>
    </div>
  )
}





>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
}
;
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
