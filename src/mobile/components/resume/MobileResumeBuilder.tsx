import {;
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ChevronRight, Zap, Star } from 'lucide-react';

type ResumeStep = "basics" | "experience" | "education" | "skills";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
=======
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills",;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label",
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { ChevronRight, Zap, Star } from 'lucide-react'
type ResumeStep = "basics" | "experience" | "education" | "skills"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue} from "@/components/ui/select"
type ResumeStep = "basics" | "experience" | "education" | "skills"
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics")
  const renderStepContent = () => {
    switch (currentStep) {
      case "basics": return <BasicsStep />
      case "experience":
        return <ExperienceStep />
      case "education":
        return <EducationStep />
      case "skills":
        return <SkillsStep />
<<<<<<< HEAD
      default:
        return <BasicsStep />
    }
  },;

        return <SkillsStep />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return <SkillsStep />,
      default:
        return <BasicsStep />
    }
<<<<<<< HEAD
  }
=======
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills",;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
          variant = {currentStep === "basics" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {(,) => setCurrentStep("basics"),}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant = {currentStep === "basics" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {(,) => setCurrentStep("basics"),}
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
<<<<<<< HEAD
=======


          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          Basics
        </Button>
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant = {currentStep === "experience" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("experience"),}
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
<<<<<<< HEAD
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
=======

          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          Experience
        </Button>
        <Button
<<<<<<< HEAD

=======
          variant = {currentStep === "education" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("education"),}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          Education
        </Button>
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
          variant = {currentStep === "skills" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("skills"),}

=======

          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        >
          Experience
        </Button>
        <Button

          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
        >
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}

        >
          Education
        </Button>
        <Button

=======
          variant = {currentStep === "skills" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("skills"),}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}

        >
<<<<<<< HEAD
        </Button>
      </div>
      {renderStepContent()}
<<<<<<< HEAD
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
ursor/fix-website-loading-errors-and-merge-6662
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          Skills
        </Button>
      </div>
      {renderStepContent()}
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>


      <Button variant="default" className="w-full" size="lg">
<<<<<<< HEAD
=======
        Save & Preview
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
<<<<<<< HEAD
<<<<<<< HEAD
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
            rows = {4,}
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
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills",;
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
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button;
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button;
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
        <Button;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >;
          Skills;
        </Button>;
      </div>;
      {renderStepContent()}
;
      <Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;
  );
}
;
function BasicsStep() {;
  return (;
    <Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;
<<<<<<< HEAD
<<<<<<< HEAD
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
            rows={4}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Textarea
            id="summary" 
            placeholder="Write a brief summary about yourself" 

            rows = {4,}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
unction ExperienceStep() {
ursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



function ExperienceStep() {
<<<<<<< HEAD
=======
  const [experiences, setExperiences] = useState([{ id: '1' }])
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const addExperience = () => {
    const newId = (experiences.length + 1).toString()
    setExperiences([...experiences, { id: newId }])
  }
  const removeExperience = (id: string,) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const removeEducation = (id: string,) => {
    setEducations(educations.filter(edu => edu.id !== id))
  }
  const removeSkill = (id: string,) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }
}
  )
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };
};
  );
};


  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue } from '@/components / ui / select';
import { Label  } from '@/components / ui / label';
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { ChevronRight, Zap, Star } from 'lucide-react';
type ResumeStep = "basics" | "experience" | "education" | "skills";
import React, { useState } from './react';
import { Button  } from '@/components / ui / button';
import { Card, CardContent  } from '@/components / ui / card';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components / ui / select",
type ResumeStep = "basics" | "experience" | "education" | "skills",
export /**
 * MobileResumeBuilder - Function description
 */
function MobileResumeBuilder() {
  const [current_step, setCurrentStep] = useState < ResumeStep>("basics"),
  const renderStepContent = () =>: any {
    switch (current_step) {
      case "basics": return <BasicsStep />,
      case "experience":;
        return <ExperienceStep />,
      case "education":;
        return <EducationStep />,
      case "skills":;
        return <SkillsStep />,
      default:;
        return <BasicsStep />;
    }
  },
  return (
    <div className="space - y-6 px - 4 pb - 24">;
      <div className="flex justify - between px - 1 py - 2 overflow - x-auto hide - scrollbar">;
        <Button;
          variant = {current_step === "basics" ? "default" : "outline", }
          className="flex - 1 rounded - full";
          on_click = {(, ) => setCurrentStep ("basics"), }
        >;
          Basics;
        </Button>;
        <Button;
          variant = {current_step === "experience" ? "default" : "outline", }
          className="flex - 1 rounded - full";
          on_click = {() => setCurrentStep ("experience"), }
        >;
          Experience;
        </Button>;
        <Button;
          variant = {current_step === "education" ? "default" : "outline", }
          className="flex - 1 rounded - full";
          on_click = {() => setCurrentStep ("education"), }
        >;
          Education;
        </Button>;
        <Button;
          variant = {current_step === "skills" ? "default" : "outline", }
          className="flex - 1 rounded - full";
          on_click = {() => setCurrentStep ("skills"), }
        >;
          Skills;
        </Button>;
      </div>;
      {renderStepContent ()}
      <Button className="w - full flex gap - 2" size="lg">;
        <Zap className="h - 5 w - 5" /> Enhance with AI;
      </Button>;
      <Button variant="default" className="w - full" size="lg">;
        Save & Preview;
      </Button>;
    </div>);
}
/**
 * BasicsStep - Function description
 */
function BasicsStep() {
  return (
    <Card>;
      <CardContent className="p - 4 space - y-4">;
        <div className="space - y-2">;
          <Label html_for="title">Resume Title</Label>;
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="full_name">Full Name</Label>;
          <Input id="full_name" name="full_name" placeholder="Your full name" auto_complete="name" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="email">Email Address</Label>;
          <Input id="email" name="email" type="email" placeholder="you@example.com" auto_complete="email" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="phone">Phone Number</Label>;
          <Input id="phone" name="phone" placeholder="Your phone number" auto_complete="tel" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="location">Location</Label>;
          <Input id="location" name="location" placeholder="City, Country" auto_complete="address - level2" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="summary">Professional Summary</Label>;
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
            rows = {4, }
          />;
        </div>;
      </CardContent>;
    </Card>);
}
/**
 * ExperienceStep - Function description
 */
function ExperienceStep() {
  const [experiences, set_experiences] = useState ([{ id: '1' }]),
  const add_experience = () =>: any {
    const new_id = (experiences.length + 1).to_string (),
    set_experiences ([...experiences, { id: new_id }]);
  },
  const remove_experience = (id: string, ) =>: any {
    set_experiences (experiences.filter (exp => exp.id !== id));
  }
  const remove_education = (id: string, ) =>: any {
    set_educations (educations.filter (edu => edu.id !== id));
  }
  const remove_skill = (id: string, ) =>: any {
    set_skills (skills.filter (skill => skill.id !== id));
  }

function ExperienceStep() {;
  const [experiences, setExperiences] = useState([{ id: '1' }]),;

  const addExperience = () => {;
    const newId = (experiences && experiences.length + 1).toString(),;
    setExperiences([...experiences, { id: newId }]);
  },;

  const removeExperience = (id: string,) => {;
    setExperiences(experiences && experiences.filter(exp => exp && exp.id !== id));
  };


  const removeEducation = (id: string,) => {;
    setEducations(educations && educations.filter(edu => edu && edu.id !== id));
  };



  const removeSkill = (id: string,) => {;
    setSkills(skills && skills.filter(skill => skill && skill.id !== id));
  };

}



  );
}
<<<<<<< HEAD


  };
};
  );
};
  },
  
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
                  aria-label="Remove experience"
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
                rows={3}
              />;
            </div>;
          </CardContent>;
        </Card>;
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  )
}

function EducationStep() {
  const [educations, setEducations] = useState([{ id: '1' }]),
  
  const addEducation = () => {
    const newId = (educations.length + 1).toString(),
    setEducations([...educations, { id: newId }])
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
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                  aria-label="Remove education"
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
  ]),
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString(),
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])
  },
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  },
  
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
  },
  
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  placeholder="Skill (e.g. JavaScript, Figma)"
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
                    aria-label="Remove skill"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addExperience}
      >;
        <Plus className="h-4 w-4" /> Add Another Experience;
      </Button>;
    </div>;
  );
}
;
function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;
  const addEducation = () => {;
    const newId = (educations.length + 1).toString(),;
    setEducations([...educations, { id: newId }]);
  },;
  const removeEducation = (id: string) => {;
    setEducations(educations.filter(edu => edu.id !== id));
  },;
  return (;
    <div className="space-y-4">;
      {educations.map((edu, index) => (;
        <Card key={edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations.length > 1 && (;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => removeEducation(edu.id)}
                  aria-label="Remove education";
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
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
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addEducation}
      >;
        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;
  );
}
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
    <div className="space-y-4">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            {skills.map((skill) => (;
              <div key={skill.id} className="flex items-center gap-2">;
                <Input;
                  placeholder="Skill (e.g. JavaScript, Figma)";
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  className="flex-1";
                />;
                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
                >;
                  <SelectTrigger className="w-[130px]">;
                    <SelectValue placeholder="Level" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="beginner">Beginner</SelectItem>;
                    <SelectItem value="intermediate">Intermediate</SelectItem>;
                    <SelectItem value="advanced">Advanced</SelectItem>;
                    <SelectItem value="expert">Expert</SelectItem>;
                  </SelectContent>;
                </Select>;
                {skills.length > 1 && (;
                  <Button;
                    variant="ghost";
                    size="icon";
                    onClick={() => removeSkill(skill.id)}
                    aria-label="Remove skill";
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;
                )}
              </div>;
            ))}
            
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={addSkill}
            >
              <Plus className="h-4 w-4" /> Add Another Skill
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            <Label>Skill Categories</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="justify-start">Development</Button>
              <Button variant="outline" className="justify-start">Design</Button>
              <Button variant="outline" className="justify-start">Marketing</Button>
              <Button variant="outline" className="justify-start">Business</Button>
              <Button variant="outline" className="justify-start">Data Analysis</Button>
              <Button variant="outline" className="justify-start">Languages</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
;
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
