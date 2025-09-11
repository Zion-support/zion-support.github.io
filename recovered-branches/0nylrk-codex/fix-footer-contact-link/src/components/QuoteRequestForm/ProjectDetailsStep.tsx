

<<<<<<< HEAD
<<<<<<< HEAD
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function ProjectDetailsStep({
  formData
  updateFormData
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>


<<<<<<< HEAD
<<<<<<< HEAD
<h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


<<<<<<< HEAD
<<<<<<< HEAD
<div>
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {

<<<<<<< HEAD
                    ...formData.contactInfo
                    name: e.target.value
                  }
                })
              }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

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

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}


onChange={(e) =>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    company: e.target.value
                  }
                })
              }
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}
<<<<<<< HEAD
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {QuoteFormData} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
interface ProjectDetailsStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
<<<<<<< HEAD
<<<<<<< HEAD
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}


              value={formData.contactInfo.email}
onChange={(e) =>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={formData.contactInfo.email}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    email: e.target.value
                  }
                })
              }
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}
<<<<<<< HEAD
=======

              value={formData.contactInfo.email}

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}


onChange={(e) =>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    phone: e.target.value
                  }
                })
              }
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}
<<<<<<< HEAD
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
            />
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={formData && formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, email: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>;
            <Label htmlFor="phone" className="text-zion-slate-light">Phone</Label>;
            <Input
              id="phone"
              placeholder="Your phone number"
              value={formData && formData.contactInfo.phone}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, phone: e && e.target.value } ;
              })}
<<<<<<< HEAD
  );
}
  )
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
=======
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input;
              id="email";
              type="email";
              placeholder="Your email address";
<<<<<<< HEAD
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
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
  )

<<<<<<< HEAD
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

}
;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>);
}

=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
