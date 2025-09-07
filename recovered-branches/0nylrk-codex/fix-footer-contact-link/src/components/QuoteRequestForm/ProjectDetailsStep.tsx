<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function ProjectDetailsStep({
  formData
  updateFormData
<<<<<<< HEAD

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
}: ProjectDetailsStepProps) {}
  return ("
    <div className="space-y-6">

        </h3>

      <div>

        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>

        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>
=======
<<<<<<< HEAD
import { QuoteFormData } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function ProjectDetailsStep({
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { QuoteFormData } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<<<<<<< HEAD

import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {}

=======
import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

<<<<<<< HEAD
export function ProjectDetailsStep({}
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {}
  return ("
=======
export function ProjectDetailsStep({
  formData,
  updateFormData,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: ProjectDetailsStepProps) {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-6">

        </h3>

      <div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>

        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>


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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
=======
      <div>
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-zion-slate-light">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo
                    name: e.target.value
                  }
                })
              }
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}
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
                    ...formData.contactInfo
                    company: e.target.value
                  }
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
                    ...formData.contactInfo
                    email: e.target.value
                  }
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
              onChange={(e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, phone: e.target.value } 
              })}
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
            />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
            <Input,
id="name""
              placeholder="Your name""
import { Label } from "@/components/ui/label",;"
import { Textarea } from "@/components/ui/textarea",;"
=======

<<<<<<< HEAD
=======
=======
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { QuoteFormData } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;

import { Textarea } from "@/components/ui/textarea",;
>>>>>>> origin/chore/fix-lint-and-merge
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
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>

"
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>"
<div>
</div>"
<h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>
"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
          <div>
</div>"
            <Label htmlFor="name" className="text-zion-slate-light">"
</Label>
            </Label>
            <Input;"
              id="name"""
              placeholder="Your name"""
import { QuoteFormData } from "@/types/quotes",;""
import { Input } from "@/components/ui/input",;""
import { Label } from "@/components/ui/label",;""
import { Textarea } from "@/components/ui/textarea",;"
interface ProjectDetailsStepProps {;
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
</Input>"
    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>;""
        <div className="space-y-4">;"
</div>
          <div>;
</div>"
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>;"
            <Input;"
              id="projectName";""
              placeholder="Enter a name for your project";"
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}
</Input>
          </div>;
          <div>;
</div>"
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>;"
            <Textarea;"
              id="projectDescription";""
              placeholder="Describe your project in detail...";"
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e.target.value })}
</Textarea>
<<<<<<< HEAD
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

value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {

              value={formData.contactInfo.name}
=======
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

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
              value={formData.contactInfo.name}
<<<<<<< HEAD
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
=======
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, name: e.target.value } ;
              })}
<<<<<<< HEAD
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    ...formData.contactInfo,
                    name: e.target.value,
                  },
                })
              }
<<<<<<< HEAD
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div>

            <Label htmlFor="company" className="text-zion-slate-light">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your company name"
              value={formData.contactInfo.company}
<<<<<<< HEAD
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    company: e.target.value,
                  },
                })
              }
=======

<<<<<<< HEAD
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}


onChange={(e) =>
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
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, company: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-zion-slate-light">
              Email
            </Label>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
import {QuoteFormData} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
interface ProjectDetailsStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
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
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
<<<<<<< HEAD
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}


              value={formData.contactInfo.email}
onChange={(e) =>
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
=======

              value={formData.contactInfo.email}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
<<<<<<< HEAD
                    name: e.target.value,
                  },
                })
              }
=======
                    email: e.target.value,
                  },
                })
              }
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, email: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>

          <div>
<<<<<<< HEAD

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
=======
            <Label htmlFor="phone" className="text-zion-slate-light">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Your phone number"
              value={formData.contactInfo.phone}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onChange={(e) =>
                updateFormData({
                  contactInfo: {
                    ...formData.contactInfo,
                    phone: e.target.value,
                  },
                })
              }
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}


onChange={(e) =>
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
=======

              onChange={(e) => updateFormData({;
                contactInfo: { ...formData.contactInfo, phone: e.target.value } ;
              })}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
</Input>
          </div>

          <div>
</div>"
            <Label htmlFor="email" className="text-zion-slate-light">"
</Label>
            </Label>
            <Input;"
              id="email"""
              type="email"""
              placeholder="Your email address""
              value={formData.contactInfo.email}
              onChange={(e) =>
</Input>
          </div>

          <div>
</div>"
            <Label htmlFor="phone" className="text-zion-slate-light">"
</Label>
            </Label>
            <Input;"
              id="phone"""
              placeholder="Your phone number""
              value={formData.contactInfo.phone}
              onChange={(e) =>
</Input>

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD

              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
import { QuoteFormData  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Textarea  } from '@/components / ui / textarea';
interface ProjectDetailsStepProps {
  form_data: QuoteFormData;

}

=======
<<<<<<< HEAD
  )
}
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              value={formData && formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo: { ...formData && formData.contactInfo, email: e && e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  );
}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
import { QuoteFormData  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Textarea  } from '@/components / ui / textarea';
interface ProjectDetailsStepProps {
  form_data: QuoteFormData;

}

            />;

          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>;
  );
}
;
}
;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
      ;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>;
            <Input;
<<<<<<< HEAD
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
=======
              id="name";
              placeholder="Your name";
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, name:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            />;
          </div>;
          ;
          <div>;
<<<<<<< HEAD
=======
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
              className="bg - zion - blue border border - zion - blue - light focus:border - zion - purple text-white";
=======
              value={formData.contactInfo.email}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, email:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            />;
          </div>;
          ;
          <div>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
            <Label htmlFor="phone" className="text-zion-slate-light">Phone</Label>;
            <Input;
              id="phone";
              placeholder="Your phone number";
              value={formData.contactInfo.phone}
              onChange={(e) => updateFormData({ ;
                contactInfo:{ ...formData.contactInfo, phone:e.target.value } ;
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            />;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
}
;

}
;
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
