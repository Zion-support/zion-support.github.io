import { QuoteFormData } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {}

  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function ProjectDetailsStep({}
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">

        </h3>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>

=======
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
=======
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className="space-y-4">
          <div>
            <Label htmlFor="projectName" className="text-zion-slate-light">
              Project Name
            </Label>
            <Input
              id="projectName"
              placeholder="Enter a name for your project"
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
            <Label
              htmlFor="projectDescription"
              className="text-zion-slate-light"
            >
              Project Description
            </Label>
            <Textarea
              id="projectDescription"
              placeholder="Describe your project in detail..."
              value={formData.projectDescription}
              onChange={(e) =>
                updateFormData({ projectDescription: e.target.value })
              }
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
        </div>
      </div>

      <div>



=======
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>

        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>
<<<<<<< HEAD



=======
}
return (;
    <div className="space-y-6">"
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">"
          Tell us about your project
        </h3>
        <div className="space-y-4">"
          <div>
            <Label htmlFor="projectName" className="text-zion-slate-light">"
              Project Name
            </Label>
            <Input,
id="projectName""
              placeholder="Enter a name for your project""
              value={formData.projectName}
              onChange={(e) => updateFormData({ "projectName": e.target.value })}
              className="bg-zion-blue border border-zion-blue-light "focus":border-zion-purple text-white""
            />
          </div>
          <div>
            <Label,
htmlFor="projectDescription""
              className="text-zion-slate-light""
            >
              Project Description
            </Label>
            <Textarea,
id="projectDescription""
              placeholder="Describe your project in detail...""
              value={formData.projectDescription}
              onChange={(e) =>
                }
                updateFormData({ "projectDescription": e.target.value })
              }
              className="min-h-32 bg-zion-blue border border-zion-blue-light "focus":border-zion-purple text-white""
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">"
          Contact Information
        </h3>

=======
=======

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


<div>
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>

            <Input,
id="name""
              placeholder="Your name""
import { Label } from "@/components/ui/label",;"
import { Textarea } from "@/components/ui/textarea",;"

import { QuoteFormData } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;

import { Textarea } from "@/components/ui/textarea",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ProjectDetailsStepProps {;
  }
  "formData": QuoteFormData;
  "updateFormData": ("data": Partial<QuoteFormData>) => void;
}
;
export function ProjectDetailsStep() {;
  }
  return (;
    <div className="space-y-6">;"
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;"
        <div className="space-y-4">;"
          <div>;
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>;"
            <Input;
              id="projectName";"
              placeholder="Enter a name for your project";"
              value={formData.projectName}
              onChange={(e) => updateFormData({ "projectName": e.target.value })}
              className="bg-zion-blue border border-zion-blue-light "focus":border-zion-purple text-white";"
            />;
          </div>;
          <div>;
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;"
            <Textarea;
              id="projectDescription";"
              placeholder="Describe your project in detail...";"
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ "projectDescription": e.target.value })}
              className="min-h-32 bg-zion-blue border border-zion-blue-light "focus":border-zion-purple text-white";"
            />;
          </div>;
        </div>;
      </div>;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;"
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">;"
          <div>;
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;"
            <Input;
              id="name";"
<<<<<<< HEAD
              placeholder="Your name";




value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {



              value={formData.contactInfo.name}

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}

              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

=======
              placeholder="Your name";"
              value={formData.contactInfo.name}          <div>
            <Label htmlFor="company" className="text-zion-slate-light">"
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    name: e.target.value,
                  },
                })
              }
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>

            <Label htmlFor="company" className="text-zion-slate-light">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your company name"
              value={formData.contactInfo.company}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    company: e.target.value,
                  },
                })
              }
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-zion-slate-light">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email address"

              value={formData.contactInfo.email}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    email: e.target.value,
                  },
                })
              }
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-zion-slate-light">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Your phone number"
              value={formData.contactInfo.phone}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    phone: e.target.value,
                  },
                })
              }
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
            />
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;""
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
          <div>;
</div>"
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;"
            <Input;"
              id="name";""
              placeholder="Your name";"
value={formData.contactInfo.name}
              onChange={(e) =>
</Input>
          </div>

          <div>
</div>"
            <Label htmlFor="company" className="text-zion-slate-light">"
</Label>
            </Label>
            <Input;"
              id="company"""
              placeholder="Your company name""
              value={formData.contactInfo.company}
              onChange={(e) =>
                }
                updateFormData({
                  }
                  "contactInfo": {
                    ...formData.contactInfo
                    }
                    "company": e.target.value})
              }
              className="bg-zion-blue border border-zion-blue-light "focus":border-zion-purple text-white""
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-zion-slate-light">"
              Email
            </Label>
            <Input,
id="email""
              type="email""
              placeholder="Your email address""
            <Label htmlFor="phone" className="text-zion-slate-light">"
              Phone
            </Label>
            <Input,
id="phone""
              placeholder="Your phone number""
              value={formData.contactInfo.phone}
              onChange={(e) =>
<<<<<<< HEAD
</Input>


=======
                }
                updateFormData({
                  }
                  "contactInfo": {
                    ...formData.contactInfo
                    }
                    "phone": e.target.value})
              }
              className="bg-zion-blue border border-zion-blue-light "focus": border-zion-purple text-white""
            />
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
        </div>
      </div>
    </div>
  );
}
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div>;
        <h3 className="text - xl font - semibold text - white mb-4">;"
          Contact Information;
        </h3>;
        <div className="grid grid - cols - 1 "md":grid - cols - 2 gap-4">;"
          <div>;
            <Label html_for="name" className="text - zion - slate-light">;"
              Name;
            </Label>;
            <Input;
              id="name";"
              placeholder="Your name";"
              value={form_data.contact_info.name}
              on_change={(e) =>;
                }
                updateFormData ({
                  }
                  "contact_info": {
                    ...form_data.contact_info
                    }
                    "name": e.target.value});
              }
              className="bg - zion - blue border border - zion - blue - light "focus":border - zion - purple text-white";"
            />;
          </div>;
          <div>;
            <Label html_for="company" className="text - zion - slate-light">;"
              Company;
            </Label>;
            <Input;
              id="company";"
              placeholder="Your company name";"
              value={form_data.contact_info.company}
              on_change={(e) =>;
                }
                updateFormData ({
                  }
                  "contact_info": {
                    ...form_data.contact_info
                    }
                    "company": e.target.value});
              }
              className="bg - zion - blue border border - zion - blue - light "focus":border - zion - purple text-white";"
            />;
          </div>;
          <div>;
            <Label html_for="email" className="text - zion - slate-light">;"
              Email;
            </Label>;
            <Input;
              id="email";"
              type="email";"
              placeholder="Your email address";"
            />;
          </div>;
          ;
          <div>;
<<<<<<< HEAD
            <Label htmlFor="company" className="text-zion-slate-light">Company</Label>;
            <Input;
              id="company";
              placeholder="Your company name";
              value={formData.contactInfo.company}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, company:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          ;
          <div>;
            <Label htmlFor="email" className="text-zion-slate-light">Email</Label>;
            <Input;
              id="email";
              type="email";
              placeholder="Your email address";



=======
              value={form_data.contact_info.email}
              on_change={(e) =>;
                }
                updateFormData ({
                  }
                  "contact_info": {
                    ...form_data.contact_info
                    }
                    "email": e.target.value});
              }
              className="bg - zion - blue border border - zion - blue - light "focus":border - zion - purple text-white";"
            />;
          </div>;
          <div>;

            <Label html_for="phone" className="text - zion - slate-light">;
              Phone;
            </Label>;
            <Input;
              id="phone";
              placeholder="Your phone number";
              value={form_data.contact_info.phone}
              on_change={(e) =>;
                updateFormData ({
                  contact_info: {
                    ...form_data.contact_info,
                    phone: e.target.value,
                  },
                });
              }
              className="bg - zion - blue border border - zion - blue - light focus: border - zion - purple text-white";

            />;
          </div>;
        </div>;
      </div>;


  )
import { QuoteFormData } from "@/types/quotes";""
import { Input } from "@/components/ui/input";""
import { Label } from "@/components/ui/label";""
import { Textarea } from "@/components/ui/textarea";"
interface ProjectDetailsStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
"
    <div className="space-y-6">"
</div>"
        <h3 className="text - xl font - semibold text - white mb - 4">;"
</h3>
        </h3>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>""
        <div className="space-y-4">"
            <Label htmlFor="projectName" className="text-zion-slate-light">"

            <Input;"
              id="projectName"""
              placeholder="Enter a name for your project""
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}

            <Label;"
              htmlFor="projectDescription"""
              className="text-zion-slate-light""
            >

            <Textarea;"
              id="projectDescription"""
              placeholder="Describe your project in detail...""
              value={formData.projectDescription}
              onChange={(e) =>

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <Label htmlFor="name" className="text-zion-slate-light">"

              id="name"""
              placeholder="Your name"""
import { QuoteFormData } from "@/types/quotes",;""
import { Input } from "@/components/ui/input",;""
import { Label } from "@/components/ui/label",;""
import { Textarea } from "@/components/ui/textarea",;"
interface ProjectDetailsStepProps {;
    <div className="space-y-6">;"
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;""
        <div className="space-y-4">;"
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name;"
              id="projectName";""
              placeholder="Enter a name for your project";"

          </div>;
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description;"
              id="projectDescription";""
              placeholder="Describe your project in detail...";"
              onChange={(e) => updateFormData({ projectDescription: e.target.value })}

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;""
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
            <Label htmlFor="name" className="text-zion-slate-light">Name;"
              id="name";""
              placeholder="Your name";"
value={formData.contactInfo.name}

            <Label htmlFor="company" className="text-zion-slate-light">"

              id="company"""
              placeholder="Your company name""
              value={formData.contactInfo.company}

            <Label htmlFor="email" className="text-zion-slate-light">"

              id="email"""
              type="email"""
              placeholder="Your email address""
              value={formData.contactInfo.email}

            <Label htmlFor="phone" className="text-zion-slate-light">"

              id="phone"""
              placeholder="Your phone number""
              value={formData.contactInfo.phone}

        <h3 className="text - xl font - semibold text - white mb - 4">;"
        </h3>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
            <Label html_for="name" className="text - zion - slate - light">;"

            ;
              value={form_data.contact_info.name}
              on_change={(e) =>;

            <Label html_for="company" className="text - zion - slate - light">;"

              id="company";""
              placeholder="Your company name";"
              value={form_data.contact_info.company}

            <Label html_for="email" className="text - zion - slate - light">;"

              id="email";""
              type="email";""
              placeholder="Your email address";"
              value={form_data.contact_info.email}

            <Label html_for="phone" className="text - zion - slate - light">;"

              id="phone";""
              placeholder="Your phone number";"
              value={form_data.contact_info.phone}

    </div>);
);
}

  )

</div>;
  );
  );
}

  )

    </div>;
  );}

}) 
}/> </div> </div> </div> </div>) 
});

}
}
;

}
;
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
