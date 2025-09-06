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
  return (
    <div className="min-h-screen flex flex-col">;
      <MobileHeader
        title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack
          <Button
            className="flex-1 gap-1"
            onClick={goToNextStep}>;
            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}
          rows={5}
        />;
      </div>;
    </div>;
  );
}
function RequirementsStep() {
  const [skills, set_skills] = useState < string[]>([;
    "React", "TypeScript", "Node.js";
  ]);
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1">;
              {skill}
              <button
                className="ml-1 rounded-full hover:bg-background/20 p-1"
                onClick={() => removeSkill(skill)}
              >;
                ×;
              </button>;
            </Badge>;
          ))}
          rows={4}
        />;
      </div>;
    </div>;
  );
}
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
        />;
      </div>;
    </div>;
  );
}
=======
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
 * PreviewStep - Function description
 */
function PreviewStep() {
  return (
    <div className="space - y-4">;
      <h2 className="text - lg font - medium mb - 2">Job Preview</h2>;
      <Card>;
        <CardContent className="p - 4">;
          <h3 className="font - bold text - lg">Senior React Developer</h3>;
          <p className="text - muted - foreground">TechCorp Inc. • Remote • Full - time</p>;
          <div className="flex gap - 2 my - 3">;
            <Badge variant="outline">React</Badge>;
            <Badge variant="outline">TypeScript</Badge>;
            <Badge variant="outline">Node.js</Badge>;
          </div>;
          <div className="space - y-1 text - sm mt - 4">;
            <p className="font - medium">Salary Range:</p>;
            <p>$80, 000 - $120, 000 USD / year</p>;
          </div>;
          <div className="space - y-1 text - sm mt - 3">;
            <p className="font - medium">Experience Level:</p>;
            <p > Senior</p>;
          </div>;
          <div className="space - y-1 text - sm mt - 3">;
            <p className="font - medium">Application Deadline:</p>;
            <p > December 15, 2023</p>;
          </div>;
          <div className="mt - 4 pt - 3 border - t border - border">;
            <h4 className="font - medium mb - 2">Description</h4>;
            <p className="text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...</p>;
          </div>;
        </CardContent>;
      </Card>;
      <Button variant="outline" className="w - full">Edit Job Post</Button>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
