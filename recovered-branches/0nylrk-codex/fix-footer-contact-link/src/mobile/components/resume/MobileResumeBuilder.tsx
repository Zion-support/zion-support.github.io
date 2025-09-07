import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";

<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import {}
=======

<<<<<<< HEAD
type ResumeStep = "basics" | "experience" | "education" | "skills";
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,";
} from "@/components/ui/select";"
import { Label } from "@/components/ui/label";"
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";

type ResumeStep = "basics" | "experience" | "education" | "skills";
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

import React, { useState } from "react",

import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",

import { Textarea } from "@/components/ui/textarea",
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,"
  SelectValue} from "@/components/ui/select","
import { Label } from "@/components/ui/label","
<<<<<<< HEAD
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react","
type ResumeStep = "basics" | "experience" | "education" | "skills","
export function MobileResumeBuilder() {;
  }
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");"
export function MobileResumeBuilder() {
}
const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;"
  const renderStepContent = () => {
    }
    switch (currentStep) {
          <Textarea
}
id="summary""
            placeholder="Write a brief summary about yourself""
          <Textarea,
id="summary" "
            placeholder="Write a brief summary about yourself" "
            rows={4} />
        </div>
      </CardContent>
    </Card>
  )
}
          <Textarea,
id="summary" "
            placeholder="Write a brief summary about yourself" "
import { Button } from "@/components/ui/button";"
import { Card, CardContent } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import {;
  }
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;"
import { Label } from "@/components/ui/label",;"
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;"
type ResumeStep = "basics" | "experience" | "education" | "skills",;"
type ResumeStep = "basics" | "experience" | "education" | "skills","
export function MobileResumeBuilder() {
  }
    }
    switch (currentStep) {
      }
      case "basics":"
        return <BasicsStep />;
      case "experience":"
        return <ExperienceStep />;
      case "education":;"
        return <EducationStep />;
      case "skills":;"
        return <SkillsStep />;
      "default":
        return <BasicsStep />;
    }
    <div className="space-y-6 px-4 pb-24">;"
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;"
        <Button,
variant={currentStep === "basics" ? "default" : "outline"}"
          className="flex-1 rounded-full""
          onClick={() => setCurrentStep("basics")}"
        >;
          Basics;
        </Button>;
        <Button,
variant={currentStep === "experience" ? "default" : "outline"}"
          className="flex-1 rounded-full"        <Button"
          variant={currentStep === "experience" ? "default" : "outline"}"
          className="flex-1 rounded-full""
          onClick={() => setCurrentStep("experience")}"
        >;
          Experience;
        </Button>;
        <Button,
variant={currentStep === "education" ? "default" : "outline"}"
          className="flex-1 rounded-full"        <Button"
          variant={currentStep === "education" ? "default" : "outline"}"
          className="flex-1 rounded-full""
          onClick={() => setCurrentStep("education")}"
        >;
          Education;
        </Button>;
        <Button,
variant={currentStep === "skills" ? "default" : "outline"}"
          className="flex-1 rounded-full""
          onClick={() => setCurrentStep("skills")}"
      <Button className="w-full flex gap-2" size="lg">"
        <Zap className="h-5 w-5" /> Enhance with AI"
=======
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",

<<<<<<< HEAD
"
type ResumeStep = "basics" | "experience" | "education" | "skills",
=======
<<<<<<< HEAD
type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = () => {
    switch (currentStep) {
      case "basics": return <BasicsStep />,
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
        return <SkillsStep />,
      default:
        return <BasicsStep />
    }
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
  const renderStepContent = () => {;
    switch (currentStep) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
        >
          Basics
        </Button>
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}

          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button
          variant={currentStep === "education" ? "default" : "outline"}

          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >
          Education
        </Button>
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
        >
          Skills
        </Button>
      </div>

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
>>>>>>> origin/chore/fix-lint-and-merge
      </Button>
      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  )
}
function BasicsStep() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>

          <Textarea
            id="summary"

            placeholder="Write a brief summary about yourself"
          <Textarea "
            id="summary" "
            placeholder="Write a brief summary about yourself" 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
          <Textarea "
            id="summary" "
            placeholder="Write a brief summary about yourself" ";
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;"
  SelectValue} from "@/components/ui/select",;"
import { Label } from "@/components/ui/label",;"
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;"
type ResumeStep = "basics" | "experience" | "education" | "skills",;

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {;
    switch (currentStep) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Label } from '@/components / ui / label';
import { ChevronRight, Plus, Zap, Trash2 } from './lucide-react';
;
type ResumeStep = "basics" | "experience" | "education" | "skills";
;
export /**
 * MobileResumeBuilder - Function description
 */
function MobileResumeBuilder() {
  const [current_step, setCurrentStep] = useState < ResumeStep>("basics");
;
  const renderStepContent = () =>: any {
    switch (current_step) {
<<<<<<< HEAD
      case "basics": return <BasicsStep />;
      case "experience":;
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:;
        return <BasicsStep />;
    }
  };
  }
  },
  
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"

import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label",;
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;
;
type ResumeStep = "basics" | "experience" | "education" | "skills",;
;
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;
  ;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "basics":return <BasicsStep />,;
      case "experience":;
        return <ExperienceStep />,;
      case "education":;
        return <EducationStep />,;
      case "skills":;
        return <SkillsStep />,;
      default:;
        return <BasicsStep />;
    }
  },;
  ;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button;
          variant={currentStep === "basics" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button;
          variant={currentStep === "experience" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button;
          variant={currentStep === "education" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("education")}
          onClick={() => setCurrentStep("basics")}
        >
          Basics
        </Button>
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >
          Education
        </Button>
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
        >
          Skills
        </Button>
      </div>
      {renderStepContent()}
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  )
}
function BasicsStep() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label",;
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;
type ResumeStep = "basics" | "experience" | "education" | "skills",;




type ResumeStep = "basics" | "experience" | "education" | "skills",


export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),

  
  const renderStepContent = () => {
    switch (currentStep) {

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {;
    switch (currentStep) {;
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Label } from '@/components / ui / label';
import { ChevronRight, Plus, Zap, Trash2 } from './lucide-react';
;
type ResumeStep = "basics" | "experience" | "education" | "skills";
;
export /**
 * MobileResumeBuilder - Function description
 */
function MobileResumeBuilder() {
  const [current_step, setCurrentStep] = useState < ResumeStep>("basics");
;
  const renderStepContent = () =>: any {
    switch (current_step) {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      case "basics": return <BasicsStep />;
      case "experience":;

        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:
        return <BasicsStep />;
    }
<<<<<<< HEAD
=======

  };


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;

        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
<<<<<<< HEAD

          onClick={() => setCurrentStep("basics")}

=======
<<<<<<< HEAD
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "basics": return <BasicsStep />,;
      case "experience":;
        return <ExperienceStep />,;
      case "education":;
        return <EducationStep />,;
      case "skills":;
        return <SkillsStep />,;
      default:;
        return <BasicsStep />;
    }
  },;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button;
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
<<<<<<< HEAD
        <Button;
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
<<<<<<< HEAD

          onClick={() => setCurrentStep("experience")}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
<<<<<<< HEAD
        <Button;
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
<<<<<<< HEAD

          onClick={() => setCurrentStep("education")}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
<<<<<<< HEAD
        >;
          Education;
        </Button>;
        <Button;
          variant={currentStep === "skills" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
        <Button;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}

<<<<<<< HEAD
        >
          Skills
        </Button>
      </div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        >;
          Skills;
        </Button>;
      </div>;
<<<<<<< HEAD
      ;
      {renderStepContent()}
      ;
      <Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
      ;
      {renderStepContent()}
;
      <Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
=======

      {renderStepContent()}
"
      <Button className="w-full flex gap-2" size="lg">"
        <Zap className="h-5 w-5" /> Enhance with AI;

<<<<<<< HEAD
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI

      </Button>
"
      <Button variant="default" className="w-full" size="lg">
        Save & Preview;
      </Button>
    </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;
  ),;
}
<<<<<<< HEAD
;
function BasicsStep() {;
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );

}
;
function BasicsStep() {;
  return (;
=======

<<<<<<< HEAD
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>

=======
function BasicsStep() {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
=======
          <Input id="title" placeholder="e && e.g. Senior Frontend Developer" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" placeholder="Your full name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <Input id="email" type="email" placeholder="you@example.com" />;
          <Input id="email" type="email" placeholder="you@example.com" />;
=======
          <Input id="email" type="email" placeholder="you@example && example.com" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" placeholder="Your phone number" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" placeholder="City, Country" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
=======
          <Textarea
            id="summary" 
            placeholder="Write a brief summary about yourself" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rows={4}
          />
        </div>
      </CardContent>
    </Card>

}
<<<<<<< HEAD
=======

<<<<<<< HEAD
function ExperienceStep() { return null; }
  const [experiences, setExperiences] = useState([{ id: "1" }]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const addExperience = () => {}

<<<<<<< HEAD
=======


function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const newId = (experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }]);
  };

<<<<<<< HEAD
      <div className="flex justify - between px - 1 py - 2 overflow - x-auto hide - scrollbar">;
        <Button;"
          variant={current_step === "basics" ? "default" : "outline"}"
          className="flex - 1 rounded - full";"

          on_click={() => setCurrentStep ("basics")}
        >;
          Basics;
        </Button>;

          on_click={() => setCurrentStep ("experience")}
        >;
          Experience;
        </Button>;

          on_click={() => setCurrentStep ("education")}
        >;
          Education;
        </Button>;

          on_click={() => setCurrentStep ("skills")}
        >;
          Skills;
        </Button>;
      </div>;

      <Button variant="default" className="w - full" size="lg">;
        Save & Preview;
      </Button>;
    </div>);
}
/**

            placeholder="Write a brief summary about yourself";
=======
  }
;

<<<<<<< HEAD

function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {
    const newId = (experiences.length + 1).toString(),
    setExperiences([...experiences, { id: newId }])
  }
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  },
  
<<<<<<< HEAD
          <Textarea ;
            id="summary" ;
            placeholder="Write a brief summary about yourself" ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            rows={4}
          />;
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>);
}
/**

    const new_id = (experiences.length + 1).to_string ();
    set_experiences ([...experiences, { id: new_id }]);
  }
;

                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>

                placeholder="Describe your responsibilities and achievements"

                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
=======
function ExperienceStep() {;
  const [experiences, setExperiences] = useState([{ id: '1' }]),;
  const addExperience = () => {;
    const newId = (experiences && experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }]);
  };
  const removeExperience = (id: string) => {;
    setExperiences(experiences && experiences.filter(exp => exp && exp.id !== id));
  };
  return (
    <div className="space-y-4">;
      {experiences && experiences.map((exp, index) => (;
        <Card key={exp && exp.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Work Experience {index + 1}</h3>;
              {experiences && experiences.length > 1 && (;
                <Button
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeExperience(exp && exp.id)}
    </Card>;
  ),;
}
;
function ExperienceStep() {;
  const [experiences, setExperiences] = useState([{ id:'1' }]),;
  ;
  const addExperience = () => {;
    const newId = (experiences.length + 1).toString(),;
    setExperiences([...experiences, { id:newId }]),;
  },;
  ;
  const removeExperience = (id:string) => {;
    setExperiences(experiences.filter(exp => exp.id !== id));
  },;
  ;
  return (;
    <div className="space-y-4">;
      {experiences.map((exp, index) => (;
        <Card key={exp.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Work Experience {index + 1}</h3>;
              {experiences.length > 1 && (;
                <Button ;
                  variant="ghost" ;
                  size="icon";
                  onClick={() => removeExperience(exp.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <Card key={exp.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Work Experience {index + 1}</h3>
              {experiences.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`company-${exp.id}`}>Company</Label>
              <Input id={`company-${exp.id}`} placeholder="Company name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                <Input id={`startDate-${exp.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input id={`endDate-${exp.id}`} type="month" placeholder="Present" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea
                id={`description-${exp.id}`}
                placeholder="Describe your responsibilities and achievements"
              <Textarea 
                id={`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;
            ;
            <div className="space-y-2">;
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>;
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`company-${exp.id}`}>Company</Label>;
              <Input id={`company-${exp.id}`} placeholder="Company name" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>;
                <Input id={`startDate-${exp.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>;
                <Input id={`endDate-${exp.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`description-${exp.id}`}>Description</Label>;
              <Textarea ;
                id={`description-${exp.id}`} ;
                placeholder="Describe your responsibilities and achievements" ;
                rows={3}
              />;
            </div>;
          </CardContent>;
        </Card>;
      ))}
      ;
      <Button ;
        variant="outline" ;
        className="w-full gap-2" ;
        onClick={addExperience}
      >;
        <Plus className="h-4 w-4" /> Add Another Experience;
      </Button>;
    </div>;
  ),;
}
;
function EducationStep() {;
  const [educations, setEducations] = useState([{ id:'1' }]),;
  ;
  const addEducation = () => {;
    const newId = (educations.length + 1).toString(),;
    setEducations([...educations, { id:newId }]),;
  },;
  ;
  const removeEducation = (id:string) => {;
    setEducations(educations.filter(edu => edu.id !== id));
  },;
  ;
  return (;
    <div className="space-y-4">;
      {educations.map((edu, index) => (;
        <Card key={edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations.length > 1 && (;
                <Button ;
                  variant="ghost" ;
                  size="icon";
                  onClick={() => removeEducation(edu.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>;
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => remove_experience (exp.id)}
                >;
                  <Trash2 className="h - 5 w - 5 text - destructive" />;
                </Button>)}
            </div>;
            <div className="space - y-2">;
              <Label html_for={`title-${exp.id}`}>Job Title</Label>;
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`company-${exp.id}`}>Company</Label>;
              <Input id={`company-${exp.id}`} placeholder="Company name" />;
            </div>;
            <div className="grid grid - cols - 2 gap - 3">;
              <div className="space - y-2">;
                <Label html_for={`start_date-${exp.id}`}>Start Date</Label>;
                <Input id={`start_date-${exp.id}`} type="month" />;
              </div>;
              <div className="space - y-2">;
                <Label html_for={`end_date-${exp.id}`}>End Date</Label>;
                <Input id={`end_date-${exp.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`description-${exp.id}`}>Description</Label>;
              <Textarea;
                id={`description-${exp.id}`}
                placeholder="Describe your responsibilities and achievements";

              <Textarea 
                id={`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 

                rows={3}
              />;
            </div>;
          </CardContent>;
<<<<<<< HEAD
      <Button
        variant="outline"
        className="w-full gap-2"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        onClick={addExperience}
      >"
        <Plus className="h-4 w-4" /> Add Another Experience;

      </Button>
    </div>
  );
}
<<<<<<< HEAD

    const newId = (educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
  };

  const removeEducation = (id: string) => {

  return (

    <div className="space-y-4">
      {educations.map((edu, index) => (
        <Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {educations.length > 1 && (
                <Button
                  variant="ghost"
=======
function EducationStep() {
  const [educations, setEducations] = useState([{ id: '1' }])
  const addEducation = () => {
<<<<<<< HEAD
    const newId = (educations.length + 1).toString(),
    setEducations([...educations, { id: newId }])
  }
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  }
  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  },
  
  return (
    <div className="space-y-4">
      {educations.map((edu, index) => (
        <Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {educations.length > 1 && (
                <Button
                  variant="ghost"
        </Card>))}
      <Button;
        variant="outline";
        className="w - full gap - 2";
        on_click={add_experience}
      >;
        <Plus className="h - 4 w - 4" /> Add Another Experience;
      </Button>;
    </div>);
}
/**
 * EducationStep - Function description
 */
function EducationStep() {
  const [educations, set_educations] = useState ([{ id: '1' }]),
  const add_education = () =>: any {
    const new_id = (educations.length + 1).to_string ();
    set_educations ([...educations, { id: new_id }]);
  }
;
  const remove_education = (id: string) =>: any {
    set_educations (educations.filter (edu => edu.id !== id));
  }
;
  return (
    <div className="space - y-4">;
      {educations.map ((edu, index) => (
        <Card key={edu.id}>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex justify - between items - center">;
              <h3 className="font - medium">Education {index + 1}</h3>;
              {educations.length > 1 && (
      <Button
        variant="outline" 
        className="w-full gap-2" 
        onClick={addExperience}>;
        <Plus className="h-4 w-4" /> Add Another Experience;
      </Button>;
    </div>;
  );
}
function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;
  const addEducation = () => {;
    const newId = (educations && educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
  };
  const removeEducation = (id: string) => {;
    setEducations(educations && educations.filter(edu => edu && edu.id !== id));
  };
  return (
    <div className="space-y-4">;
      {educations && educations.map((edu, index) => (;
        <Card key={edu && edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations && educations.length > 1 && (;
                <Button
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={`eduStartDate-${edu.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={addEducation}
      >
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  )
}
function SkillsStep() {
  const [skills, setSkills] = useState([
    { id: '1', name: "", proficiency: "beginner" }
=======
    const newId = (educations.length + 1).toString();
    setEducations([...educations, { id: newId }])

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </Card>))}
      <Button;
        variant="outline";
        className="w - full gap - 2";
        on_click={add_experience}
      >;
        <Plus className="h - 4 w - 4" /> Add Another Experience;
      </Button>;
    </div>);
}
/**
 * EducationStep - Function description
 */
function EducationStep() {
  const [educations, set_educations] = useState ([{ id: '1' }]),
  const add_education = () =>: any {
    const new_id = (educations.length + 1).to_string ();
    set_educations ([...educations, { id: new_id }]);
  }
;
  const remove_education = (id: string) =>: any {
    set_educations (educations.filter (edu => edu.id !== id));
  }
;

<<<<<<< HEAD
=======

  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className="space - y-4">;
      {educations.map ((edu, index) => (
        <Card key={edu.id}>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex justify - between items - center">;
              <h3 className="font - medium">Education {index + 1}</h3>;
              {educations.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
              <Input
                id={`institution-${edu.id}`}
                placeholder="School or university name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input
                id={`degree-${edu.id}`}
                placeholder="e.g. Bachelor of Science"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input
                id={`fieldOfStudy-${edu.id}`}
                placeholder="e.g. Computer Science"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={`eduStartDate-${edu.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input
                  id={`eduEndDate-${edu.id}`}
                  type="month"
                  placeholder="Present"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" className="w-full gap-2" onClick={addEducation}>
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  );
}

<<<<<<< HEAD
function SkillsStep() {
  const [skills, setSkills] = useState([
    { id: "1", name: "", proficiency: "beginner" },
  ]);

  const addSkill = () => {
    const newId = (skills.length + 1).toString();
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };
=======
function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;

  const addEducation = () => {;
    const newId = (educations && educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
  };

  const removeEducation = (id: string) => {;
    setEducations(educations && educations.filter(edu => edu && edu.id !== id));
  };

  return (
    <div className="space-y-4">;
      {educations && educations.map((edu, index) => (;
        <Card key={edu && edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations && educations.length > 1 && (;
                <Button
                  variant="ghost" 

                  size="icon"
                  onClick={() => removeEducation(edu && edu.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}

                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => remove_education (edu.id)}
                >;
                  <Trash2 className="h - 5 w - 5 text - destructive" />;
                </Button>)}
            </div>;
            <div className="space - y-2">;
              <Label html_for={`institution-${edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`degree-${edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`fieldOfStudy-${edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />;
            </div>;
            <div className="grid grid - cols - 2 gap - 3">;
              <div className="space - y-2">;
                <Label html_for={`eduStartDate-${edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu.id}`} type="month" />;
              </div>;
              <div className="space - y-2">;
                <Label html_for={`eduEndDate-${edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
      <Button;
        variant="outline";
        className="w - full gap - 2";
        on_click={add_education}
      >;
        <Plus className="h - 4 w - 4" /> Add Another Education;
      </Button>;
    </div>);
}
/**
 * SkillsStep - Function description
 */
  ]);
  ]),
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString(),
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])
<<<<<<< HEAD
  }
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  },
  
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const updateSkill = (id: string, field: string, value: string) => {
<<<<<<< HEAD

    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    );
  };

=======
    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
<<<<<<< HEAD
function SkillsStep() {
  const [skills, set_skills] = useState ([;
    { id: '1', name: "", proficiency: "beginner" }
  ]);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`institution-${edu && edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu && edu.id}`} placeholder="School or university name" />;

  },
  

<<<<<<< HEAD
  }

  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-4">
      <Card>"
        <CardContent className="p-4">"
          <div className="space-y-4">
            {skills.map((skill) => ("
              <div key={skill.id} className="flex items-center gap-2">
                <Input"
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) =>"
                    updateSkill(skill.id, "name", e.target.value)
                  }"
                  className="flex-1"
                />
                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) =>"
                    updateSkill(skill.id, "proficiency", value)
                  }
                >"
                  <SelectTrigger className="w-[130px]">"
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>"
                    <SelectItem value="beginner">Beginner</SelectItem>"
                    <SelectItem value="intermediate">Intermediate</SelectItem>"
                    <SelectItem value="advanced">Advanced</SelectItem>"
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {skills.length > 1 && (
                  <Button"
                    variant="ghost""
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                  >"
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
      <Button;"
        variant="outline";"
        className="w-full gap-2";
        onClick={addExperience}
      >;"
        <Plus className="h-4 w-4" /> Add Another Experience;
      </Button>;
    </div>;
  );
}
;
function EducationStep() { return null; }
  const [educations, setEducations] = useState([{ id: '1' }]),;
  const addEducation = () => {;
    const newId = (educations.length + 1).toString(),;
    setEducations([...educations, { id: newId }]);
  },;
  const removeEducation = (id: string) => {;
    setEducations(educations.filter(edu => edu.id !== id));
  },;
  return (;"
    <div className="space-y-4">;
      {educations.map((edu, index) => (;
        <Card key={edu.id}>;"
          <CardContent className="p-4 space-y-4">;"
            <div className="flex justify-between items-center">;"
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations.length > 1 && (;
                <Button;"
                  variant="ghost";"
                  size="icon";
                  onClick={() => removeEducation(edu.id)}
                >"
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
<<<<<<< HEAD
            ;
            <div className="space-y-2">;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />;
=======

<<<<<<< HEAD
=======
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`degree-${edu && edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu && edu.id}`} placeholder="e && e.g. Bachelor of Science" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`fieldOfStudy-${edu && edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu && edu.id}`} placeholder="e && e.g. Computer Science" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`eduStartDate-${edu && edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu && edu.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`eduEndDate-${edu && edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu && edu.id}`} type="month" placeholder="Present" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addEducation}
      >;
=======

<<<<<<< HEAD
=======
      <Button
        variant="outline" 
        className="w-full gap-2" 
        onClick={addEducation}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Plus className="h-4 w-4" /> Add Another Education;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </Button>;
    </div>;
  );
}
<<<<<<< HEAD
;
function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }
  ]),;
  const addSkill = () => {;
    const newId = (skills.length + 1).toString(),;
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
  },;
  const removeSkill = (id: string) => {;
    setSkills(skills.filter(skill => skill.id !== id));
  };
  const updateSkill = (id: string, field: string, value: string) => {;
    setSkills(skills.map(skill =>;
      skill.id === id ? { ...skill, [field]: value } : skill;
    ));
  };
  return (;
=======

<<<<<<< HEAD
=======
function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }
  ]);

  const addSkill = () => {;
    const newId = (skills && skills.length + 1).toString();
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
  };

  const removeSkill = (id: string) => {;
    setSkills(skills && skills.filter(skill => skill && skill.id !== id));
  };

  const updateSkill = (id: string, field: string, value: string) => {;
    setSkills(skills && skills.map(skill => ;
      skill && skill.id === id ? { ...skill, [field]: value } : skill;
    ));
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-4">;
      <Card>;"
        <CardContent className="p-4">;"
          <div className="space-y-4">;
<<<<<<< HEAD

            {skills && skills.map((skill) => (;"
=======
<<<<<<< HEAD
            {skills.map((skill) => (;
              <div key={skill.id} className="flex items-center gap-2">;
                <Input;
                  placeholder="Skill (e.g. JavaScript, Figma)";
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}

                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {skills.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;
                )}
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full gap-2"
=======
            {skills && skills.map((skill) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div key={skill && skill.id} className="flex items-center gap-2">;
                <Input"
                  placeholder="Skill (e && e.g. JavaScript, Figma)"
                  value={skill && skill.name}"
                  onChange={(e) => updateSkill(skill && skill.id, "name", e && e.target.value)}"
                  className="flex-1";
                />;
                <Select;
                  value={skill && skill.proficiency}"
                  onValueChange={(value) => updateSkill(skill && skill.id, "proficiency", value)}

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}
              </div>;
            ))}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Button 
              variant="outline" 
              className="w-full gap-2" 
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              onClick={addSkill}
            >
              <Plus className="h-4 w-4" /> Add Another Skill
            </Button>
          </div>
        </CardContent>
      </Card>

<<<<<<< HEAD
    </div>;
  ),; import {};
  Select;
SelectContent;
SelectItem;
SelectTrigger;"
type ResumeStep = "basics" | "experience" | "education" | "skills";
const renderStepContent = () => {}
  switch (currentStep) {"
  case "basics": return <BasicsStep />;"
case "experience": return <ExperienceStep />;"
case "education": return <EducationStep />;"
=======
                {skills.length > 1 && (;
                  <Button;
                    variant="ghost";
                    size="icon";
                    onClick={() => removeSkill(skill.id)}
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;                )}
              </div>;
            ))}
            ;
            <Button ;
              variant="outline" ;
              className="w-full gap-2" ;
              onClick={addSkill}
            >;
              <Plus className="h-4 w-4" /> Add Another Skill;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
      ;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-2">;
            <Label>Skill Categories</Label>;
            <div className="grid grid-cols-2 gap-2">;
              <Button variant="outline" className="justify-start">Development</Button>;
              <Button variant="outline" className="justify-start">Design</Button>;
              <Button variant="outline" className="justify-start">Marketing</Button>;
              <Button variant="outline" className="justify-start">Business</Button>;
              <Button variant="outline" className="justify-start">Data Analysis</Button>;
              <Button variant="outline" className="justify-start">Languages</Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  ),; import {
  Select;
SelectContent;
SelectItem;
SelectTrigger;
type ResumeStep = "basics" | "experience" | "education" | "skills";
const renderStepContent = () => {
  switch (currentStep) {
  case "basics": return <BasicsStep />;
case "experience": return <ExperienceStep />;
case "education": return <EducationStep />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
case "skills": default: return <BasicsStep /> 
}

}
<<<<<<< HEAD
}
;
;
=======

<<<<<<< HEAD
};
return (<div className="space-y-6 px-4 pb-24" > <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar" > <Button variant= {
  currentStep === "basics" ? "default" : "outline" 
}className="flex-1 rounded-full" onClick= {
  () => setCurrentStep ("basics") 
}renderStepContent () 
}<Button className="w-full flex gap-2" size="lg" > <Zap className="h-5 w-5" /> Enhance with AI </Button> <Button variant="default" className="w-full" size="lg" > Save & Preview </Button> </div>) 
}function BasicsStep () {
  return (<Card> <CardContent className="p-4 space-y-4" > <div className="space-y-2" > <Label htmlFor="title" >Resume Title</Label> <Input id="title" placeholder="e.g. Senior Frontend Developer" /> </div> <div className="space-y-2" > <Label htmlFor="fullName" >Full Name</Label> <Input id="fullName" placeholder="Your full name" /> </div> <div className="space-y-2" > <Label htmlFor="email" >Email Address</Label> <Input id="email" type="email" placeholder="you@example.com" /> </div> <div className="space-y-2" > <Label htmlFor="phone" >Phone Number</Label> <Input id="phone" placeholder="Your phone number" /> </div> </div> <div className="space-y-2" > <Label htmlFor="summary" >Professional Summary</Label> <Textarea id="summary" placeholder="Write a brief summary about yourself" rows= {
  4 
}/> </div> </CardContent> </Card>) 
}<Button variant="ghost" size="icon" onClick= {
  () => removeExperience (exp.id) 
}> <Trash2 className="h-5 w-5 text-destructive" /> </Button>) 
}</div> /> </div> </CardContent> </Card>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Experience </Button> </div>) 
}<Button variant="ghost" size="icon" onClick= {
  () => removeEducation (edu.id) 
}> <Trash2 className="h-5 w-5 text-destructive" /> </Button>) 
}</div> </div> </div> </CardContent> </Card>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Education </Button> </div>) 
}
};
  () => removeSkill (skill.id) 
}> <Trash2 className="h-4 w-4 text-destructive" /> </Button>) 
}</div>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories</Label> <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development</Button> <Button variant="outline" className="justify-start" >Design</Button> <Button variant="outline" className="justify-start" >Marketing</Button> <Button variant="outline" className="justify-start" >Business</Button> <Button variant="outline" className="justify-start" >Data Analysis</Button> <Button variant="outline" className="justify-start" >Languages</Button> </div> </div> </CardContent> </Card> </div>) 
}
}
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
