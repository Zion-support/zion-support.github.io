<<<<<<< HEAD
<<<<<<< HEAD

import {QuoteFormData} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function ProjectDetailsStep({
  formData
  updateFormData
=======
<<<<<<< HEAD

<<<<<<< HEAD
import {QuoteFormData} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
=======
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { QuoteFormData } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function ProjectDetailsStep({
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
=======
<<<<<<< HEAD
<<<<<<< HEAD


        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>

=======
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
<<<<<<< HEAD

=======
=======

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


<div>
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
=======

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-zion-slate-light">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
<<<<<<< HEAD
              value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    name: e.target.value
                  }
                })
              }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { QuoteFormData } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
interface ProjectDetailsStepProps {;
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
;
export function ProjectDetailsStep({ formData, updateFormData }: ProjectDetailsStepProps) {;
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;
        <div className="space-y-4">;
          <div>;
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>;
            <Input;
              id="projectName";
              placeholder="Enter a name for your project";
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          <div>;
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;
            <Textarea;
              id="projectDescription";
              placeholder="Describe your project in detail...";
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e.target.value })}
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;
            <Input;
              id="name";
              placeholder="Your name";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {

<<<<<<< HEAD
              value={formData.contactInfo.name}
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
=======
              value={formData.contactInfo.name}          <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {QuoteFormData} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
interface ProjectDetailsStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function ProjectDetailsStep(): any ({ formData, updateFormData }: ProjectDetailsStepProps) {;
  return (
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;

        <div className="space-y-4">;
          <div>;
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>;
            <Input
              id="projectName"
              placeholder="Enter a name for your project"
              value={formData && formData.projectName}
              onChange={(e) => updateFormData({ projectName: e && e.target.value })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;

          <div>;
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;
            <Textarea
              id="projectDescription"
              placeholder="Describe your project in detail..."
              value={formData && formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e && e.target.value })}
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;

      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;
            <Input
              id="name"
              placeholder="Your name"
              value={formData && formData.contactInfo.name}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, name: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;

          <div>;
            <Label htmlFor="company" className="text-zion-slate-light">Company</Label>;
            <Input
              id="company"
              placeholder="Your company name"
              value={formData && formData.contactInfo.company}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, company: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;

          <div>;
            <Label htmlFor="email" className="text-zion-slate-light">Email</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
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
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
  )
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
=======
<<<<<<< HEAD
<<<<<<< HEAD

              value={formData && formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, email: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;

          <div>;
            <Label htmlFor="phone" className="text-zion-slate-light">Phone</Label>;
            <Input
              id="phone"
              placeholder="Your phone number"
              value={formData && formData.contactInfo.phone}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, phone: e && e.target.value } ;
              })}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
import { QuoteFormData  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Textarea  } from '@/components / ui / textarea';
interface ProjectDetailsStepProps {
  form_data: QuoteFormData;
<<<<<<< HEAD
  updateFormData: (data: Partial < QuoteFormData>) => void;
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======
  updateFormData: (data: Partial < QuoteFormData>) => void;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div>;
        <h3 className="text - xl font - semibold text - white mb-4">;
          Contact Information;
        </h3>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
          <div>;
            <Label html_for="name" className="text - zion - slate-light">;
              Name;
            </Label>;
            <Input;
              id="name";
              placeholder="Your name";
              value={form_data.contact_info.name}
              on_change={(e) =>;
                updateFormData ({
                  contact_info: {
                    ...form_data.contact_info,
                    name: e.target.value,
                  },
                });
              }
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text-white";
            />;
          </div>;
          <div>;
            <Label html_for="company" className="text - zion - slate-light">;
              Company;
            </Label>;
            <Input;
              id="company";
              placeholder="Your company name";
              value={form_data.contact_info.company}
              on_change={(e) =>;
                updateFormData ({
                  contact_info: {
                    ...form_data.contact_info,
                    company: e.target.value,
                  },
                });
              }
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text-white";
            />;
          </div>;
          <div>;
            <Label html_for="email" className="text - zion - slate-light">;
              Email;
            </Label>;
            <Input;
              id="email";
              type="email";
              placeholder="Your email address";
              value={form_data.contact_info.email}
              on_change={(e) =>;
                updateFormData ({
                  contact_info: {
                    ...form_data.contact_info,
                    email: e.target.value,
                  },
                });
              }
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text-white";
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

    </div>);}

<<<<<<< HEAD

  )

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
}

=======

  )

    </div>;
  );}
 interface ProjectDetailsStepProps {
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void 
}export function ProjectDetailsStep ({
  formData, updateFormData 
}: ProjectDetailsStepProps) {
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">Tell us about your project</h3> <div className=" space-y-4"> <div> <Label htmlFor=" projectName"className=" text-zion-slate-light">Project Name</Label> <Input id=" projectName"placeholder=" Enter a name for your project"value= {
  formData.projectName 
}/> </div> <div> <Label htmlFor=" projectDescription"className=" text-zion-slate-light">Project Description</Label> <Textarea /> </div> </div> </div> <div> <h3 className=" text-xl font-semibold text-white mb-4">Contact Information</h3> <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <Label htmlFor=" name"className=" text-zion-slate-light">Name</Label> <Input 
}) 
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" company"className=" text-zion-slate-light">Company</Label> <Input 
}) 
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" email"className=" text-zion-slate-light">Email</Label> <Input 
}) 
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" phone"className=" text-zion-slate-light" >Phone</Label> <Input 
}) 
}/> </div> </div> </div> </div>) 
}
);
}
}
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
}
;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
