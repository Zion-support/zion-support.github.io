

<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";
type ResumeStep = any;

  return (
=======
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {ChevronRight, Plus, Zap, Trash2} from "lucide-react";import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {
import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent } from "@/components/ui/card";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";"

import {
  // TODO: Implement
}
pr-12325
  Select,
  SelectContent,

  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label",;
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = () => {
    switch (currentStep) {
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
  SelectValue,"
} from "@/components/ui/select";""
import { Label } from "@/components/ui/label";""
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";""
import React, { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent } from "@/components/ui/card",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea","
  // TODO: Implement
  SelectTrigger,"
  SelectValue} from "@/components/ui/select",""
import { Label } from "@/components/ui/label",""
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",""
type ResumeStep = "basics" | "experience" | "education" | "skills","
export function MobileResumeBuilder() {;"
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");"
"
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),"

          <Textarea;"
            id="summary"""
            placeholder="Write a brief summary about yourself""

            rows={4}
          />

        </div>
      
    
      </CardContent>
    </Card>

          <Textarea;"
            id="summary"""
            placeholder="Write a brief summary about yourself"""
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;"
pr-12325
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
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {
    switch (currentStep) {
      case "basics":
        return <BasicsStep />;
      case "experience":
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:
        return <BasicsStep />;
    }
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>

      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  );
}

function BasicsStep() {;
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
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
}
>>>>>>> origin/main
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) =>
                    updateSkill(skill.id, "proficiency", value)
                  }
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
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
  SelectTrigger,;"
  SelectValue} from "@/components/ui/select",;""
import { Label } from "@/components/ui/label",;""
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;""
type ResumeStep = "basics" | "experience" | "education" | "skills",;""
type ResumeStep = "basics" | "experience" | "education" | "skills","
export function MobileResumeBuilder() {"
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");"
</Textarea>
        return <BasicsStep />;
</BasicsStep>
        return <ExperienceStep />;
</ExperienceStep>
        return <EducationStep />;
</EducationStep>
        return <SkillsStep />;
</SkillsStep>
        return <BasicsStep />;
</BasicsStep>"
    <div className="space-y-6 px-4 pb-24">;"
</div>"
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;"
</div>
        <Button;"
          variant={currentStep === "basics" ? "default" : "outline"}""
          className="flex-1 rounded-full"""
          onClick={() => setCurrentStep("basics")}"
</Button>
        </Button>;
        <Button;"
          variant={currentStep === "experience" ? "default" : "outline"}""
          className="flex-1 rounded-full""
        <Button;"
          variant={currentStep === "experience" ? "default" : "outline"}""
          className="flex-1 rounded-full"""
          onClick={() => setCurrentStep("experience")}"
</Button>
        </Button>;
        <Button;"
          variant={currentStep === "education" ? "default" : "outline"}""
          className="flex-1 rounded-full""
        <Button;"
          variant={currentStep === "education" ? "default" : "outline"}""
          className="flex-1 rounded-full"""
          onClick={() => setCurrentStep("education")}"
</Button>
        </Button>;
        <Button;"
          variant={currentStep === "skills" ? "default" : "outline"}""
          className="flex-1 rounded-full"""
          onClick={() => setCurrentStep("skills")}"
</Button>
        </Button>
      </div>"
      <Button className="w-full flex gap-2" size="lg">"
</Button>"
        <Zap className="h-5 w-5" /> Enhance with AI;"
</Zap>
      </Button>
"
      <Button variant="default" className="w-full" size="lg">"
</Button>
      </Button>
    </div>
    <Card>
</Card>"
      <CardContent className="p-4 space-y-4">"
</CardContent>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="title">Resume Title</Label>""
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />"
</Input>
        </div>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="fullName">Full Name</Label>""
          <Input id="fullName" placeholder="Your full name" />"
</Input>
        </div>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="email">Email Address</Label>""
          <Input id="email" type="email" placeholder="you@example.com" />"
</Input>
        </div>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="phone">Phone Number</Label>""
          <Input id="phone" placeholder="Your phone number" />"
</Input>
        </div>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="location">Location</Label>""
          <Input id="location" placeholder="City, Country" />"
</Input>
        </div>"
        <div className="space-y-2">"
</div>"
          <Label htmlFor="summary">Professional Summary</Label>"
          <Textarea;"
            id="summary"""
            placeholder="Write a brief summary about yourself""

            rows={4}
          />
</Textarea>
        </div>
      </CardContent>

    </Card>"
    <div className="space - y-6 px - 4 pb - 24">;"
</div>"
      <div className="flex justify - between px - 1 py - 2 overflow - x-auto hide - scrollbar">;"
</div>
        <Button;"
          variant={current_step === "basics" ? "default" : "outline"}""
          className="flex - 1 rounded - full";""
          on_click={() => setCurrentStep ("basics")}"
</Button>
        </Button>;
        <Button;"
          variant={current_step === "experience" ? "default" : "outline"}""
          className="flex - 1 rounded - full";""
          on_click={() => setCurrentStep ("experience")}"
</Button>
        </Button>;
        <Button;"
          variant={current_step === "education" ? "default" : "outline"}""
          className="flex - 1 rounded - full";""
          on_click={() => setCurrentStep ("education")}"
</Button>
        </Button>;
        <Button;"
          variant={current_step === "skills" ? "default" : "outline"}""
          className="flex - 1 rounded - full";""
          on_click={() => setCurrentStep ("skills")}"
</Button>
        </Button>;
      </div>;"
      <Button className="w - full flex gap - 2" size="lg">;"
</Button>"
        <Zap className="h - 5 w - 5" /> Enhance with AI;"
</Zap>
      </Button>;"
      <Button variant="default" className="w - full" size="lg">;"
</Button>
      </Button>;
    </div>);
    <Card>;
</Card>"
      <CardContent className="p - 4 space - y-4">;"
</CardContent>"
        <div className="space - y-2">;"
</div>"
          <Label html_for="title">Resume Title</Label>;""
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;"
</Input>
        </div>;"
        <div className="space - y-2">;"
</div>"
          <Label html_for="full_name">Full Name</Label>;""
          <Input id="full_name" placeholder="Your full name" />;"
</Input>
        </div>;"
        <div className="space - y-2">;"
</div>"
          <Label html_for="email">Email Address</Label>;""
          <Input id="email" type="email" placeholder="you@example.com" />;"
</Input>
        </div>;"
        <div className="space - y-2">;"
</div>"
          <Label html_for="phone">Phone Number</Label>;""
          <Input id="phone" placeholder="Your phone number" />;"
</Input>
        </div>;"
        <div className="space - y-2">;"
</div>"
          <Label html_for="location">Location</Label>;""
          <Input id="location" placeholder="City, Country" />;"
</Input>
        </div>;"
        <div className="space - y-2">;"
</div>"
          <Label html_for="summary">Professional Summary</Label>;"
          <Textarea;"
            id="summary";""
            placeholder="Write a brief summary about yourself";"
            rows={4}
          />;
</Textarea>
        </div>;
      </CardContent>;
    </Card>);"
    <div className="space - y-4">;"
</div>
        <Card key={exp.id}>;
</Card>"
          <CardContent className="p - 4 space - y-4">;"
</CardContent>"
            <div className="flex justify - between items - center">;"
</div>"
              <h3 className="font - medium">Work Experience {index + 1}</h3>;"
                <Button;"
                  variant="ghost"""
                  size="icon""
                  onClick={() => removeExperience(exp && exp.id)}
</Button>"
                  <Trash2 className="h-5 w-5 text-destructive" />;"
</Trash2>
                </Button>;
            </div>
"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input;
                id={`title-${exp.id}`}"
                placeholder="e.g. Frontend Developer""
              />
</Input>
            </div>"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`company-${exp.id}`}>Company</Label>"
              <Input id={`company-${exp.id}`} placeholder="Company name" />"
</Input>
            </div>"
            <div className="grid grid-cols-2 gap-3">"
</div>"
              <div className="space-y-2">"
</div>
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>"
                <Input id={`startDate-${exp.id}`} type="month" />"
</Input>
              </div>"
              <div className="space-y-2">"
</div>
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input;
                  id={`endDate-${exp.id}`}"
                  type="month"""
                  placeholder="Present""
                />
</Input>
              </div>
            </div>"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea;
                id={`description-${exp.id}`}"
                placeholder="Describe your responsibilities and achievements""
                rows={3}
              />
</Textarea>
            </div>
          </CardContent>
        </Card>
      <Button;"
        variant="outline"""
        className="w-full gap-2""
        onClick={addExperience}
      >
</Button>"
        <Plus className="h-4 w-4" /> Add Another Experience;"
</Plus>
      </Button>
    </div>"
    <div className="space - y-4">;"
</div>
        <Card key={edu.id}>;
</Card>"
          <CardContent className="p - 4 space - y-4">;"
</CardContent>"
            <div className="flex justify - between items - center">;"
</div>"
              <h3 className="font - medium">Education {index + 1}</h3>;"
                <Button;"
                  variant="ghost"""
                  size="icon""
                  onClick={() => removeEducation(edu.id)}
</Button>"
                  <Trash2 className="h-5 w-5 text-destructive" />"
</Trash2>
                </Button>
            </div>
"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
              <Input;
                id={`institution-${edu.id}`}"
                placeholder="School or university name""
              />
</Input>
            </div>"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input;
                id={`degree-${edu.id}`}"
                placeholder="e.g. Bachelor of Science""
              />
</Input>
            </div>"
            <div className="space-y-2">"
</div>
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input;
                id={`fieldOfStudy-${edu.id}`}"
                placeholder="e.g. Computer Science""
              />
</Input>
            </div>"
            <div className="grid grid-cols-2 gap-3">"
</div>"
              <div className="space-y-2">"
</div>
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>"
                <Input id={`eduStartDate-${edu.id}`} type="month" />"
</Input>
              </div>"
              <div className="space-y-2">"
</div>
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input;
                  id={`eduEndDate-${edu.id}`}"
                  type="month"""
                  placeholder="Present""
                />
</Input>
              </div>
            </div>
          </CardContent>
        </Card>"
      <Button variant="outline" className="w-full gap-2" onClick={addEducation}>"
</Button>"
        <Plus className="h-4 w-4" /> Add Another Education;"
</Plus>
      </Button>
    </div>"
    <div className="space-y-4">"
</div>
      <Card>
</Card>"
        <CardContent className="p-4">"
</CardContent>"
          <div className="space-y-4">"
</div>"
              <div key={skill.id} className="flex items-center gap-2">"
</div>
                <Input;"
                  placeholder="Skill (e.g. JavaScript, Figma)""
                  value={skill.name}
                  onChange={(e) =>
</Input>
                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) =>
</Select>"
                  <SelectTrigger className="w-[130px]">"
</SelectTrigger>"
                    <SelectValue placeholder="Level" />"
</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
</SelectContent>"
                    <SelectItem value="beginner">Beginner</SelectItem>""
                    <SelectItem value="intermediate">Intermediate</SelectItem>""
                    <SelectItem value="advanced">Advanced</SelectItem>""
                    <SelectItem value="expert">Expert</SelectItem>"
                  </SelectContent>
                </Select>
                  <Button;"
                    variant="ghost"""
                    size="icon""
                    onClick={() => removeSkill(skill.id)}
</Button>"
                    <Trash2 className="h-4 w-4 text-destructive" />"
</Trash2>
                  </Button>
      <Button;"
        variant="outline";""
        className="w-full gap-2";"
        onClick={addExperience}
      >;
</Button>"
        <Plus className="h-4 w-4" /> Add Another Experience;"
</Plus>
      </Button>;
    </div>;"
    <div className="space-y-4">;"
</div>
        <Card key={edu.id}>;
</Card>"
          <CardContent className="p-4 space-y-4">;"
</CardContent>"
            <div className="flex justify-between items-center">;"
</div>"
              <h3 className="font-medium">Education {index + 1}</h3>;"
                <Button;"
                  variant="ghost";""
                  size="icon";"
                  onClick={() => removeEducation(edu.id)}
</Button>"
                  <Trash2 className="h-5 w-5 text-destructive" />"
</Trash2>
                </Button>
            </div>;"
            <div className="space-y-2">;"
</div>
              <Label htmlFor={`degree-${edu && edu.id}`}>Degree</Label>;"
              <Input id={`degree-${edu && edu.id}`} placeholder="e && e.g. Bachelor of Science" />;"
</Input>
            </div>;"
            <div className="space-y-2">;"
</div>
              <Label htmlFor={`fieldOfStudy-${edu && edu.id}`}>Field of Study</Label>;"
              <Input id={`fieldOfStudy-${edu && edu.id}`} placeholder="e && e.g. Computer Science" />;"
</Input>
            </div>;"
            <div className="grid grid-cols-2 gap-3">;"
</div>"
              <div className="space-y-2">;"
</div>
                <Label htmlFor={`eduStartDate-${edu && edu.id}`}>Start Date</Label>;"
                <Input id={`eduStartDate-${edu && edu.id}`} type="month" />;"
</Input>
              </div>;"
              <div className="space-y-2">;"
</div>
                <Label htmlFor={`eduEndDate-${edu && edu.id}`}>End Date</Label>;"
                <Input id={`eduEndDate-${edu && edu.id}`} type="month" placeholder="Present" />;"
</Input>

              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}

      <Button
        variant="outline" 
        className="w-full gap-2" 
        onClick={addEducation}>;        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;
  );
}

function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }  ]);

  return (
  SelectTrigger,;"
  SelectValue} from "@/components/ui/select",;""
import { Label } from "@/components/ui/label",;""
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;""
type ResumeStep = "basics" | "experience" | "education" | "skills",;""
export function MobileResumeBuilder() {"

        return <BasicsStep />;

        return <ExperienceStep />;

        return <EducationStep />;

        return <SkillsStep />;

    <div className="space-y-6 px-4 pb-24">;"
</div>"
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;"
        <Button;"
          variant={currentStep === "basics" ? "default" : "outline"}""
          className="flex-1 rounded-full"""
          onClick={() => setCurrentStep("basics")}"

        ;
          variant={currentStep === "experience" ? "default" : "outline"}""
          className="flex-1 rounded-full""
          onClick={() => setCurrentStep("experience")}"

          variant={currentStep === "education" ? "default" : "outline"}""
          onClick={() => setCurrentStep("education")}"

          variant={currentStep === "skills" ? "default" : "outline"}""
          onClick={() => setCurrentStep("skills")}"

        
      <Button className="w-full flex gap-2" size="lg">"
        <Zap className="h-5 w-5" /> Enhance with AI;"

      
      <Button variant="default" className="w-full" size="lg">"

      
    <Card>
      <CardContent className="p-4 space-y-4">"
        <div className="space-y-2">"
          <Label htmlFor="title">Resume Title""
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />"

          <Label htmlFor="fullName">Full Name""
          <Input id="fullName" placeholder="Your full name" />"

          <Label htmlFor="email">Email Address""
          <Input id="email" type="email" placeholder="you@example.com" />"

          <Label htmlFor="phone">Phone Number""
          <Input id="phone" placeholder="Your phone number" />"

          <Label htmlFor="location">Location""
          <Input id="location" placeholder="City, Country" />"

          <Label htmlFor="summary">Professional Summary"

      
    <div className="space - y-6 px - 4 pb - 24">;"
      <div className="flex justify - between px - 1 py - 2 overflow - x-auto hide - scrollbar">;"
          variant={current_step === "basics" ? "default" : "outline"}""
          className="flex - 1 rounded - full";""
          on_click={() => setCurrentStep ("basics")}"

          variant={current_step === "experience" ? "default" : "outline"}""
          on_click={() => setCurrentStep ("experience")}"

          variant={current_step === "education" ? "default" : "outline"}""
          on_click={() => setCurrentStep ("education")}"

          variant={current_step === "skills" ? "default" : "outline"}""
          on_click={() => setCurrentStep ("skills")}"

      </div>;"
      <Button className="w - full flex gap - 2" size="lg">;"
        <Zap className="h - 5 w - 5" /> Enhance with AI;"

      ;"
      <Button variant="default" className="w - full" size="lg">;"

    </div>);
    <Card>;
      <CardContent className="p - 4 space - y-4">;"
        <div className="space - y-2">;"
          <Label html_for="title">Resume Title;""
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;"

          <Label html_for="full_name">Full Name;""
          <Input id="full_name" placeholder="Your full name" />;"

          <Label html_for="email">Email Address;""
          <Input id="email" type="email" placeholder="you@example.com" />;"

          <Label html_for="phone">Phone Number;""
          <Input id="phone" placeholder="Your phone number" />;"

          <Label html_for="location">Location;""
          <Input id="location" placeholder="City, Country" />;"

          <Label html_for="summary">Professional Summary;"
            id="summary";""
            placeholder="Write a brief summary about yourself";"
          />;

        </div>;
    );"
    <div className="space - y-4">;"
        <Card key={exp.id}>;
            <div className="flex justify - between items - center">;"
              <h3 className="font - medium">Work Experience {index + 1}</h3>;"
                  variant="ghost"""
                  size="icon""
                  onClick={() => removeExperience(exp && exp.id)}
                  <Trash2 className="h-5 w-5 text-destructive" />;"
</Trash2>
              <Label htmlFor={`title-${exp.id}`}>Job Title
              <Input;`;
                id={`title-${exp.id}`}"
                placeholder="e.g. Frontend Developer""

</div>`;
              <Label htmlFor={`company-${exp.id}`}>Company"`;
              <Input id={`company-${exp.id}`} placeholder="Company name" />"

            <div className="grid grid-cols-2 gap-3">"
                <Label htmlFor={`startDate-${exp.id}`}>Start Date"`;
                <Input id={`startDate-${exp.id}`} type="month" />"

                <Label htmlFor={`endDate-${exp.id}`}>End Date
                  id={`endDate-${exp.id}`}"
                  type="month"""
                  placeholder="Present""

              <Label htmlFor={`description-${exp.id}`}>Description
              <Textarea;`;
                id={`description-${exp.id}`}"
                placeholder="Describe your responsibilities and achievements""
                rows={3}

          
        

      <Button;"
        variant="outline"""
        className="w-full gap-2""
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience;"

      
        <Card key={edu.id}>;
              <h3 className="font - medium">Education {index + 1}</h3>;"
                  onClick={() => removeEducation(edu.id)}
                  <Trash2 className="h-5 w-5 text-destructive" />"
                
              <Label htmlFor={`institution-${edu.id}`}>Institution
                id={`institution-${edu.id}`}"
                placeholder="School or university name""

              <Label htmlFor={`degree-${edu.id}`}>Degree
                id={`degree-${edu.id}`}"
                placeholder="e.g. Bachelor of Science""

              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study
                id={`fieldOfStudy-${edu.id}`}"
                placeholder="e.g. Computer Science""

                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date"`;
                <Input id={`eduStartDate-${edu.id}`} type="month" />"

                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date
                  id={`eduEndDate-${edu.id}`}"

          
      <Button variant="outline" className="w-full gap-2" onClick={addEducation}>"
        <Plus className="h-4 w-4" /> Add Another Education;"

      
    <div className="space-y-4">"
        <CardContent className="p-4">"
              <div key={skill.id} className="flex items-center gap-2">"
                <Input;"
                  placeholder="Skill (e.g. JavaScript, Figma)""
                  value={skill.name}
                  onChange={(e) =>

                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) =>
                  <SelectTrigger className="w-[130px]">"
                    <SelectValue placeholder="Level" />"

                  
                  <SelectContent>
                    <SelectItem value="beginner">Beginner""
                    <SelectItem value="intermediate">Intermediate""
                    <SelectItem value="advanced">Advanced""
                    <SelectItem value="expert">Expert"
                  
                
                    onClick={() => removeSkill(skill.id)}
                    <Trash2 className="h-4 w-4 text-destructive" />"
                  
        variant="outline";""
        className="w-full gap-2";"
      >;

    <div className="space-y-4">;"
          <CardContent className="p-4 space-y-4">;"
            <div className="flex justify-between items-center">;"
              <h3 className="font-medium">Education {index + 1}</h3>;"
                  variant="ghost";""
                  size="icon";"
                
            <div className="space-y-2">;"
              <Label htmlFor={`degree-${edu && edu.id}`}>Degree;"`;
              <Input id={`degree-${edu && edu.id}`} placeholder="e && e.g. Bachelor of Science" />;"

              <Label htmlFor={`fieldOfStudy-${edu && edu.id}`}>Field of Study;"`;
              <Input id={`fieldOfStudy-${edu && edu.id}`} placeholder="e && e.g. Computer Science" />;"

            <div className="grid grid-cols-2 gap-3">;"
                <Label htmlFor={`eduStartDate-${edu && edu.id}`}>Start Date;"`;
                <Input id={`eduStartDate-${edu && edu.id}`} type="month" />;"

                <Label htmlFor={`eduEndDate-${edu && edu.id}`}>End Date;"`;
                <Input id={`eduEndDate-${edu && edu.id}`} type="month" placeholder="Present" />;"

        onClick={addEducation}>;

        <CardContent className="p-4">;"
              <div key={skill && skill.id} className="flex items-center gap-2">;"
                  placeholder="Skill (e && e.g. JavaScript, Figma)""
                  value={skill && skill.name}"
                  onChange={(e) => updateSkill(skill && skill.id, "name", e && e.target.value)}"

                  value={skill && skill.proficiency}"
                  onValueChange={(value) => updateSkill(skill && skill.id, "proficiency", value)}"
        <CardContent className="p - 4">;"
              <div key={skill.id} className="flex items - center gap - 2">;"
                  placeholder="Skill (e.g. JavaScript, Figma)";"
                  value={skill.name}"
                  onValueChange={(value) => update_skill (skill.id, "proficiency", value)}"
                  <SelectTrigger className="w-[130px]">;"
                    <SelectValue placeholder="Level" />;"

                  <SelectContent>;
                    <SelectItem value="beginner">Beginner;""
                    <SelectItem value="intermediate">Intermediate;""
                    <SelectItem value="advanced">Advanced;""
                    <SelectItem value="expert">Expert;"
              onClick={addSkill}
              <Plus className="h-4 w-4" /> Add Another Skill;"

            
        
      

            <Label>Skill Categories"
            <div className="grid grid-cols-2 gap-2">"
              <Button variant="outline" className="justify-start">"






              
        
      
  case "basics": return <BasicsStep />;"
case "experience": return <ExperienceStep />;"
case "education": return <EducationStep />;"
case "skills": default: return <BasicsStep />"
return (<div className="space-y-6 px-4 pb-24" > <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar" > <Button variant= {"
</div>)"
}<Button className="w-full flex gap-2" size="lg" > <Zap className="h-5 w-5" /> Enhance with AI  <Button variant="default" className="w-full" size="lg" > Save & Preview  </div>)""
  return (<Card> <CardContent className="p-4 space-y-4" > <div className="space-y-2" > <Label htmlFor="title" >Resume Title <Input id="title" placeholder="e.g. Senior Frontend Developer" /> </div> <div className="space-y-2" > <Label htmlFor="fullName" >Full Name <Input id="fullName" placeholder="Your full name" /> </div> <div className="space-y-2" > <Label htmlFor="email" >Email Address <Input id="email" type="email" placeholder="you@example.com" /> </div> <div className="space-y-2" > <Label htmlFor="phone" >Phone Number <Input id="phone" placeholder="Your phone number" /> </div> </div> <div className="space-y-2" > <Label htmlFor="summary" >Professional Summary <Textarea id="summary" placeholder="Write a brief summary about yourself" rows= {"
)
}/> </div>  ) "
}<Button variant="ghost" size="icon" onClick= {"
  () => removeExperience (exp.id) 
}> <Trash2 className="h-5 w-5 text-destructive" /> )"
}</div> /> </div>  ) ) "
}<Button > <Plus className="h-4 w-4" /> Add Another Experience  </div>)""
  () => removeEducation (edu.id) 
}</div> </div> </div>  ) ) "
}<Button > <Plus className="h-4 w-4" /> Add Another Education  </div>)""
}> <Trash2 className="h-4 w-4 text-destructive" /> )"
}</div>) ) "
}<Button > <Plus className="h-4 w-4" /> Add Another Skill  </div>   <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development <Button variant="outline" className="justify-start" >Design <Button variant="outline" className="justify-start" >Marketing <Button variant="outline" className="justify-start" >Business <Button variant="outline" className="justify-start" >Data Analysis <Button variant="outline" className="justify-start" >Languages </div> </div>   </div>)"
    </div>);"`;
pr-12325
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories</Label> <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development</Button> <Button variant="outline" className="justify-start" >Design</Button> <Button variant="outline" className="justify-start" >Marketing</Button> <Button variant="outline" className="justify-start" >Business</Button> <Button variant="outline" className="justify-start" >Data Analysis</Button> <Button variant="outline" className="justify-start" >Languages</Button> </div> </div> </CardContent> </Card> </div>)"
    </div>);"

