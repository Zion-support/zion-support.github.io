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
  SelectValue ;"
} from "@/components/ui/select",;""
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";""
import { Badge } from "@/components/ui/badge";""
import { Card, CardContent } from "@/components/ui/card";"
;"
type JobPostStep = "details" | "requirements" | "budget" | "preview",;"
;
export function MobileJobPost() {;"
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;"
"
      case "details":return <DetailsStep />,;"

        return <RequirementsStep />,;

        return <BudgetStep />,;

        return <PreviewStep />,;

        return <DetailsStep />;
    <div className="min-h-screen flex flex-col">;"
</div>
      <MobileHeader;"
        title={`Post a Job (${currentStep === "preview" ? 4 :currentStep === "budget" ? 3 :currentStep === "requirements" ? 2 :1}/4)`}"
        showBack;
      />;

          <Button variant="outline" className="flex gap-1">;
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;

              onClick={goToPrevStep}
            >;
              <ChevronLeft className="h-4 w-4" /> Back;"

            className="flex-1 gap-1";"
            onClick={goToNextStep}

      <div className="space-y-2">;
        <Label htmlFor="company">Company Name</Label>;
        <Input id="company" placeholder="Your company name" />;
      </div>;

      <div className="space-y-2">;
        <Label htmlFor="location">Location</Label>;
        <Select defaultValue="remote">;

          <SelectTrigger>;
            <SelectValue placeholder="Select location type" />;"

          <SelectContent>;

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

          rows={3}

      <h2 className="text-lg font-medium mb-2">Job Preview</h2>;"
      <Card>;

            <p>$80,000 - $120,000 USD / year</p>;
          <div className="space-y-1 text-sm mt-3">;"
            <p className="font-medium">Experience Level:</p>;"
            <p>Senior</p>;
            <p className="font-medium">Application Deadline:</p>;"
            <p>December 15, 2023</p>;
          <div className="mt-4 pt-3 border-t border-border">;"
            <h4 className="font-medium mb-2">Description</h4>;""
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;