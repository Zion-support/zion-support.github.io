import { QuoteFormData } from "@/types/quotes";"
import { Input } from "@/components/ui/input";"
import { Label } from "@/components/ui/label";"
import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {}
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function ProjectDetailsStep({}
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {}
  return ("
    <div className="space-y-6">
      <div>"
        <h3 className="text-xl font-semibold text-white mb-4">;
          Tell us about your project;
        </h3>





"
        <div className="space-y-4">
          <div>"
            <Label htmlFor="projectName" className="text-zion-slate-light">
              Project Name;
            </Label>
            <Input"
              id="projectName""
              placeholder="Enter a name for your project"
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}"
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
            <Label"
              htmlFor="projectDescription""
              className="text-zion-slate-light"
            >
              Project Description;
            </Label>
            <Textarea"
              id="projectDescription""
              placeholder="Describe your project in detail..."
              value={formData.projectDescription}
              onChange={(e) =>
                updateFormData({ projectDescription: e.target.value })
              }"
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
        </div>
      </div>

      <div>"
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>



"
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


<div>"
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
      <div>"
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>




"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>
            <Input"
              id="name""
              placeholder="Your name""
import { QuoteFormData } from "@/types/quotes",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { Textarea } from "@/components/ui/textarea",;
interface ProjectDetailsStepProps {;
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
;
export function ProjectDetailsStep() { return null; }
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}"
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          <div>;"
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;
            <Textarea;"
              id="projectDescription";"
              placeholder="Describe your project in detail...";
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e.target.value })}"
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;
      <div>;"
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;"
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;
            <Input;"
              id="name";"
              placeholder="Your name";

}


  )



  );

}



  )

    </div>;
  );}
 interface ProjectDetailsStepProps {}
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void;
}export function ProjectDetailsStep() { return null; }
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">Tell us about your project</h3> <div className=" space-y-4"> <div> <Label htmlFor=" projectName"className=" text-zion-slate-light">Project Name</Label> <Input id=" projectName"placeholder=" Enter a name for your project"value= {}
  formData.projectName "
}/> </div> <div> <Label htmlFor=" projectDescription"className=" text-zion-slate-light">Project Description</Label> <Textarea /> </div> </div> </div> <div> <h3 className=" text-xl font-semibold text-white mb-4">Contact Information</h3> <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <Label htmlFor=" name"className=" text-zion-slate-light">Name</Label> <Input;
}) "
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" company"className=" text-zion-slate-light">Company</Label> <Input;
}) "
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" email"className=" text-zion-slate-light">Email</Label> <Input;
}) "
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" phone"className=" text-zion-slate-light" >Phone</Label> <Input;
}) 
}/> </div> </div> </div> </div>) 
}
);
}
}
;

}
;
}
;



"