<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function ProjectDetailsStep({
  formData
  updateFormData
<<<<<<< HEAD
=======

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      <div>

<<<<<<< HEAD
=======

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<div>
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-zion-slate-light">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    name: e.target.value
                  }
                })
              }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {

                    ...formData.contactInfo
                    name: e.target.value
                  }
                })
              }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
=======

              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

                    ...formData.contactInfo,
                    name: e.target.value,
                  },
                })
              }
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <Label htmlFor="company" className="text-zion-slate-light">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your company name"
              value={formData.contactInfo.company}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
onChange={(e) =>
=======
              onChange={(e) =>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    company: e.target.value
                  }
                })
              }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-zion-slate-light">
              Email
            </Label>
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx
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
=======

import { QuoteFormData } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
;
interface ProjectDetailsStepProps {;
  formData:QuoteFormData,;
  updateFormData:(data:Partial<QuoteFormData>) => void;
}
;
export function ProjectDetailsStep({ formData, updateFormData } ProjectDetailsStepProps) {;
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;
        ;
        <div className="space-y-4">;
          <div>;
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>;
            <Input;
              id="projectName";
              placeholder="Enter a name for your project";
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName:e.target.value })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          ;
          <div>;
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;
            <Textarea;
              id="projectDescription";
              placeholder="Describe your project in detail...";
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription:e.target.value })}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx

              value={formData.contactInfo.email}

<<<<<<< HEAD
=======
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              value={formData.contactInfo.email}
onChange={(e) =>
=======
              value={formData.contactInfo.email}
              onChange={(e) =>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    email: e.target.value
                  }
                })
              }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
onChange={(e) =>
=======
              onChange={(e) =>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    phone: e.target.value
                  }
                })
              }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
            />
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  );
}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
import { QuoteFormData  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Textarea  } from '@/components / ui / textarea';
interface ProjectDetailsStepProps {
  form_data: QuoteFormData;
  updateFormData: (data: Partial < QuoteFormData>) => void;
}
export /**
 * ProjectDetailsStep - Function description
 */
function ProjectDetailsStep() {
  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">;
          Tell us about your project;
        </h3>;
        <div className="space - y-4">;
          <div>;
            <Label html_for="project_name" className="text - zion - slate - light">;
              Project Name;
            </Label>;
            <Input;
              id="project_name";
              placeholder="Enter a name for your project";
              value={form_data.project_name}
              on_change={(e) => updateFormData ({ project_name: e.target.value })}
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
          </div>;
          <div>;
            <Label;
              html_for="project_description";
              className="text - zion - slate - light";
            >;
              Project Description;
            </Label>;
            <Textarea;
              id="project_description";
              placeholder="Describe your project in detail...";
              value={form_data.project_description}
              on_change={(e) =>;
                updateFormData ({ project_description: e.target.value });
              }
              className="min - h-32 bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
<<<<<<< HEAD

}
;

=======
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">;
          Contact Information;
        </h3>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div>;
            <Label html_for="name" className="text - zion - slate - light">;
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
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
          </div>;
          <div>;
            <Label html_for="company" className="text - zion - slate - light">;
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
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
          </div>;
          <div>;
            <Label html_for="email" className="text - zion - slate - light">;
              Email;
            </Label>;
=======
      ;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;
            <Input;
              id="name";
              placeholder="Your name";
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, name:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          ;
          <div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Input;
              id="email";
              type="email";
              placeholder="Your email address";
<<<<<<< HEAD
              value={form_data.contact_info.email}
              on_change={(e) =>;
                updateFormData ({
                  contact_info: {
                    ...form_data.contact_info,
                    email: e.target.value,
                  },
                });
              }
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
          </div>;
          <div>;
            <Label html_for="phone" className="text - zion - slate - light">;
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
              className="bg - zion - blue border border - zion - blue - light focus: border - zion - purple text - white";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx

========
=======
              value={formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, email:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
          ;
          <div>;
            <Label htmlFor="phone" className="text-zion-slate-light">Phone</Label>;
            <Input;
              id="phone";
              placeholder="Your phone number";
              value={formData.contactInfo.phone}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, phone:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx
            />;
          </div>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx

    </div>);
}

=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/ProjectDetailsStep.tsx
=======
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
