

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

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>


==============
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div>

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>



==============

=======import { QuoteFormData } from "@/types/quotes",;
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}
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

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>=======
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

onChange={(e) =>
=======              onChange={(e) =>
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
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-zion-slate-light">
              Email
            </Label>
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
              onChange={(e) => updateFormData({ projectDescription: e && e.target.value })}              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
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
              value={formData.contactInfo.email}
onChange={(e) =>
=======
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
              value={formData.contactInfo.email}

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}

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

onChange={(e) =>
=======              onChange={(e) =>
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
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
            />
          </div>
        </div>
      </div>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              value={formData && formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, email: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
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
