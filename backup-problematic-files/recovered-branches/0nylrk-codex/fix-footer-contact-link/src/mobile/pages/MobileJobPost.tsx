
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <Button variant="outline" className="flex gap-1">;
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;
<<<<<<< HEAD

            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}
          </Button>;
        </div>;
      </main>;

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

          rows={5}
        />;
      </div>;
    </div>;

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

              {skill}
              <button ;
                className="ml-1 rounded-full hover:bg-background/20 p-1";
                onClick={() => removeSkill(skill)}
              >;
                ×;
              </button>;
            </Badge>;
          ))}
        </div>;
        <div className="flex gap-2">;

          />;
          <Button onClick={addSkill}>Add</Button>;
        </div>;
      </div>;

          rows={4}
        />;
      </div>;
    </div>;

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

        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select project duration" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="ltw">Less than a week</SelectItem>;
            <SelectItem value="ltm">Less than a month</SelectItem>;

            <SelectItem value="6m+">6+ months</SelectItem>;
            <SelectItem value="ongoing">Ongoing</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;

            <Badge variant="outline">React</Badge>;
            <Badge variant="outline">TypeScript</Badge>;
            <Badge variant="outline">Node.js</Badge>;
          </div>;

