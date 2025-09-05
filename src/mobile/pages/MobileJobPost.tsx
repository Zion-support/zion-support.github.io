
<<<<<<< HEAD
import React, { useState } from "react",
import { MobileHeader } from "@/mobile/components/common/MobileHeader",
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
=======
import React, { useState } from &quot;react&quot;;
import { MobileHeader } from &quot;@/mobile/components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;@/mobile/components/common/BottomNavigation&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
<<<<<<< HEAD
} from "@/components/ui/select",
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",

type JobPostStep = "details" | "requirements" | "budget" | "preview",

export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),
  
  const goToNextStep = () => {
    if (currentStep === "details") {
      setCurrentStep("requirements")
    } else if (currentStep === "requirements") {
      setCurrentStep("budget")
    } else if (currentStep === "budget") {
      setCurrentStep("preview")
=======
} from &quot;@/components/ui/select&quot;;
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;

type JobPostStep = &quot;details&quot; | &quot;requirements&quot; | &quot;budget&quot; | &quot;preview&quot;;

export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>(&quot;details&quot;);
  
  const goToNextStep = () => {
    if (currentStep === &quot;details&quot;) {
      setCurrentStep(&quot;requirements&quot;);
    } else if (currentStep === &quot;requirements&quot;) {
      setCurrentStep(&quot;budget&quot;);
    } else if (currentStep === &quot;budget&quot;) {
      setCurrentStep(&quot;preview&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const goToPrevStep = () => {
<<<<<<< HEAD
    if (currentStep === "requirements") {
      setCurrentStep("details")
    } else if (currentStep === "budget") {
      setCurrentStep("requirements")
    } else if (currentStep === "preview") {
      setCurrentStep("budget")
=======
    if (currentStep === &quot;requirements&quot;) {
      setCurrentStep(&quot;details&quot;);
    } else if (currentStep === &quot;budget&quot;) {
      setCurrentStep(&quot;requirements&quot;);
    } else if (currentStep === &quot;preview&quot;) {
      setCurrentStep(&quot;budget&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const renderStepContent = () => {
    switch (currentStep) {
<<<<<<< HEAD
      case "details": return <DetailsStep />,
      case "requirements":
        return <RequirementsStep />,
      case "budget":
        return <BudgetStep />,
      case "preview":
        return <PreviewStep />,
=======
      case &quot;details&quot;:
        return <DetailsStep />;
      case &quot;requirements&quot;:
        return <RequirementsStep />;
      case &quot;budget&quot;:
        return <BudgetStep />;
      case &quot;preview&quot;:
        return <PreviewStep />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      default:
        return <DetailsStep />
    }
  },
  
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <MobileHeader
        title={`Post a Job (${currentStep === &quot;preview&quot; ? 4 : currentStep === &quot;budget&quot; ? 3 : currentStep === &quot;requirements&quot; ? 2 : 1}/4)`}
        showBack
      />
      
      <main className=&quot;flex-1 py-4 pb-24 px-4&quot;>
        <div className=&quot;mb-6 flex justify-between&quot;>
          <div className=&quot;flex space-x-1&quot;>
            <Badge variant={currentStep === &quot;details&quot; ? &quot;default&quot; : &quot;outline&quot;} className=&quot;rounded-full w-7 h-7 flex items-center justify-center p-0&quot;>1</Badge>
            <Badge variant={currentStep === &quot;requirements&quot; ? &quot;default&quot; : &quot;outline&quot;} className=&quot;rounded-full w-7 h-7 flex items-center justify-center p-0&quot;>2</Badge>
            <Badge variant={currentStep === &quot;budget&quot; ? &quot;default&quot; : &quot;outline&quot;} className=&quot;rounded-full w-7 h-7 flex items-center justify-center p-0&quot;>3</Badge>
            <Badge variant={currentStep === &quot;preview&quot; ? &quot;default&quot; : &quot;outline&quot;} className=&quot;rounded-full w-7 h-7 flex items-center justify-center p-0&quot;>4</Badge>
          </div>
          
          <Button variant=&quot;outline&quot; className=&quot;flex gap-1&quot;>
            <Zap className=&quot;h-4 w-4&quot; /> AI Assist
          </Button>
        </div>
        
        {renderStepContent()}
        
        <div className=&quot;flex gap-2 mt-6&quot;>
          {currentStep !== &quot;details&quot; && (
            <Button 
              variant=&quot;outline&quot; 
              className=&quot;flex-1 gap-1&quot; 
              onClick={goToPrevStep}
            >
              <ChevronLeft className=&quot;h-4 w-4&quot; /> Back
            </Button>
          )}
          
          <Button 
            className=&quot;flex-1 gap-1&quot;
            onClick={goToNextStep}
          >
            {currentStep === &quot;preview&quot; ? &quot;Publish Job&quot; : &quot;Continue&quot;}
            {currentStep !== &quot;preview&quot; && <ChevronRight className=&quot;h-4 w-4&quot; />}
          </Button>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  )
}

function DetailsStep() {
  return (
    <div className=&quot;space-y-4&quot;>
      <h2 className=&quot;text-lg font-medium&quot;>Job Details</h2>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;title&quot;>Job Title</Label>
        <Input id=&quot;title&quot; placeholder=&quot;e.g. Senior React Developer&quot; />
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;company&quot;>Company Name</Label>
        <Input id=&quot;company&quot; placeholder=&quot;Your company name&quot; />
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;location&quot;>Location</Label>
        <Select defaultValue=&quot;remote&quot;>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select location type&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;remote&quot;>Remote</SelectItem>
            <SelectItem value=&quot;onsite&quot;>On-site</SelectItem>
            <SelectItem value=&quot;hybrid&quot;>Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;jobType&quot;>Job Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select job type&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;fulltime&quot;>Full-time</SelectItem>
            <SelectItem value=&quot;parttime&quot;>Part-time</SelectItem>
            <SelectItem value=&quot;contract&quot;>Contract</SelectItem>
            <SelectItem value=&quot;freelance&quot;>Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;description&quot;>Job Description</Label>
        <Textarea 
          id=&quot;description&quot; 
          placeholder=&quot;Describe the job role and responsibilities&quot; 
          rows={5}
        />
      </div>
    </div>
  )
}

function RequirementsStep() {
  const [skills, setSkills] = useState<string[]>([
<<<<<<< HEAD
    "React", "TypeScript", "Node.js"
  ]),
  const [newSkill, setNewSkill] = useState(""),
  
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]),
      setNewSkill("")
=======
    &quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;
  ]);
  const [newSkill, setNewSkill] = useState("&quot;);
  
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      <h2 className=&quot;text-lg font-medium&quot;>Job Requirements</h2>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;experience&quot;>Experience Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select experience level&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;entry&quot;>Entry Level</SelectItem>
            <SelectItem value=&quot;mid&quot;>Mid Level</SelectItem>
            <SelectItem value=&quot;senior&quot;>Senior</SelectItem>
            <SelectItem value=&quot;expert&quot;>Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;education&quot;>Education</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select required education&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;high_school&quot;>High School</SelectItem>
            <SelectItem value=&quot;associate&quot;>Associate Degree</SelectItem>
            <SelectItem value=&quot;bachelor&quot;>Bachelor's Degree</SelectItem>
            <SelectItem value=&quot;master&quot;>Master's Degree</SelectItem>
            <SelectItem value=&quot;phd&quot;>PhD</SelectItem>
            <SelectItem value=&quot;none&quot;>No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label>Required Skills</Label>
        <div className=&quot;flex flex-wrap gap-2 mb-3&quot;>
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant=&quot;secondary&quot;
              className=&quot;flex items-center gap-1 px-3 py-1&quot;
            >
              {skill}
              <button 
                className=&quot;ml-1 rounded-full hover:bg-background/20 p-1&quot;
                onClick={() => removeSkill(skill)}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
        <div className=&quot;flex gap-2&quot;>
          <Input 
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder=&quot;Add a skill&quot;
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          />
          <Button onClick={addSkill}>Add</Button>
        </div>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;requirements&quot;>Specific Requirements</Label>
        <Textarea 
          id=&quot;requirements&quot; 
          placeholder=&quot;List any specific requirements or qualifications&quot; 
          rows={4}
        />
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;responsibilities&quot;>Key Responsibilities</Label>
        <Textarea 
          id=&quot;responsibilities&quot; 
          placeholder=&quot;List the key responsibilities for this role&quot; 
          rows={4}
        />
      </div>
    </div>
  )
}

function BudgetStep() {
  return (
    <div className=&quot;space-y-4&quot;>
      <h2 className=&quot;text-lg font-medium&quot;>Budget & Timeline</h2>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;paymentType&quot;>Payment Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select payment type&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;hourly&quot;>Hourly Rate</SelectItem>
            <SelectItem value=&quot;fixed&quot;>Fixed Price</SelectItem>
            <SelectItem value=&quot;salary&quot;>Salary</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label>Salary Range</Label>
        <div className=&quot;flex gap-4 items-center&quot;>
          <Input placeholder=&quot;Min&quot; type=&quot;number&quot; className=&quot;w-full&quot; />
          <span>to</span>
          <Input placeholder=&quot;Max&quot; type=&quot;number&quot; className=&quot;w-full&quot; />
          <Select defaultValue=&quot;usd&quot;>
            <SelectTrigger className=&quot;w-24&quot;>
              <SelectValue placeholder=&quot;Currency&quot; />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=&quot;usd&quot;>USD</SelectItem>
              <SelectItem value=&quot;eur&quot;>EUR</SelectItem>
              <SelectItem value=&quot;gbp&quot;>GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;deadline&quot;>Application Deadline</Label>
        <Input type=&quot;date&quot; id=&quot;deadline&quot; />
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;startDate&quot;>Expected Start Date</Label>
        <Input type=&quot;date&quot; id=&quot;startDate&quot; />
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;duration&quot;>Project Duration</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder=&quot;Select project duration&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;ltw&quot;>Less than a week</SelectItem>
            <SelectItem value=&quot;ltm&quot;>Less than a month</SelectItem>
            <SelectItem value=&quot;1-3m&quot;>1-3 months</SelectItem>
            <SelectItem value=&quot;3-6m&quot;>3-6 months</SelectItem>
            <SelectItem value=&quot;6m+&quot;>6+ months</SelectItem>
            <SelectItem value=&quot;ongoing&quot;>Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className=&quot;space-y-2&quot;>
        <Label htmlFor=&quot;additionalInfo&quot;>Additional Budget Information</Label>
        <Textarea 
          id=&quot;additionalInfo&quot; 
          placeholder=&quot;Any additional information about budget or payment&quot; 
          rows={3}
        />
      </div>
    </div>
  )
}

function PreviewStep() {
  return (
    <div className=&quot;space-y-4&quot;>
      <h2 className=&quot;text-lg font-medium mb-2&quot;>Job Preview</h2>
      
      <Card>
        <CardContent className=&quot;p-4&quot;>
          <h3 className=&quot;font-bold text-lg&quot;>Senior React Developer</h3>
          <p className=&quot;text-muted-foreground&quot;>TechCorp Inc. • Remote • Full-time</p>
          
          <div className=&quot;flex gap-2 my-3&quot;>
            <Badge variant=&quot;outline&quot;>React</Badge>
            <Badge variant=&quot;outline&quot;>TypeScript</Badge>
            <Badge variant=&quot;outline&quot;>Node.js</Badge>
          </div>
          
          <div className=&quot;space-y-1 text-sm mt-4&quot;>
            <p className=&quot;font-medium&quot;>Salary Range:</p>
            <p>$80,000 - $120,000 USD / year</p>
          </div>
          
          <div className=&quot;space-y-1 text-sm mt-3&quot;>
            <p className=&quot;font-medium&quot;>Experience Level:</p>
            <p>Senior</p>
          </div>
          
          <div className=&quot;space-y-1 text-sm mt-3&quot;>
            <p className=&quot;font-medium&quot;>Application Deadline:</p>
            <p>December 15, 2023</p>
          </div>
          
          <div className=&quot;mt-4 pt-3 border-t border-border&quot;>
            <h4 className=&quot;font-medium mb-2&quot;>Description</h4>
            <p className=&quot;text-sm&quot;>We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>
          </div>
        </CardContent>
      </Card>
      
      <Button variant=&quot;outline&quot; className=&quot;w-full&quot;>Edit Job Post</Button>
    </div>
  )
}
