<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { QuoteFormData } from "@/types/quotes";"
import { Input } from "@/components/ui/input";"
import { Label } from "@/components/ui/label";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Textarea } from "@/components/ui/textarea";
interface ProjectDetailsStepProps {}
=======

interface ProjectDetailsStepProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function ProjectDetailsStep({}
  formData,
  updateFormData,
}: ProjectDetailsStepProps) {}
  return ("
    <div className="space-y-6">
<<<<<<< HEAD
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
=======
      <div>"
        <h3 className="text-xl font-semibold text-white mb-4">;
          Tell us about your project;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<h3 className="text-xl font-semibold text-white mb-4">
          Tell us about your project
        </h3>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

import { QuoteFormData } from "@/types/quotes";""
import { Input } from "@/components/ui/input";""
import { Label } from "@/components/ui/label";""
import { Textarea } from "@/components/ui/textarea";"
interface ProjectDetailsStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
</QuoteFormData>"
    <div className="space-y-6">"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>
"
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>""
        <div className="space-y-4">"
</div>
          <div>
</div>"
            <Label htmlFor="projectName" className="text-zion-slate-light">"
</Label>
            </Label>
            <Input;"
              id="projectName"""
              placeholder="Enter a name for your project""
              value={formData.projectName}
              onChange={(e) => updateFormData({ projectName: e.target.value })}
</Input>
          </div>

          <div>
</div>
            <Label;"
              htmlFor="projectDescription"""
              className="text-zion-slate-light""
            >
</Label>
            </Label>
            <Textarea;"
              id="projectDescription"""
              placeholder="Describe your project in detail...""
              value={formData.projectDescription}
              onChange={(e) =>
</Textarea>

          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div>
=======
      <div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



"
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>


<div>"
<h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div>
=======
      <div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <h3 className="text-xl font-semibold text-white mb-4">
          Contact Information;
        </h3>
<<<<<<< HEAD
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
=======

<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>
<<<<<<< HEAD
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
=======
            <Input"
              id="name""
              placeholder="Your name""
import { QuoteFormData } from "@/types/quotes",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

value={formData.contactInfo.name}
              onChange={(e) =>
                updateFormData({
                  contactInfo: {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
              value={formData.contactInfo.name}          <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              value={formData.contactInfo.name}          <div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              value={formData.contactInfo.name}          <div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white";
import { QuoteFormData  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Textarea  } from '@/components / ui / textarea';
interface ProjectDetailsStepProps {
  form_data: QuoteFormData;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  updateFormData: (data: Partial < QuoteFormData>) => void;
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======
  updateFormData: (data: Partial < QuoteFormData>) => void;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  updateFormData: (data: Partial < QuoteFormData>) => void;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  updateFormData: (data: Partial < QuoteFormData>) => void;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            />;

          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
    </div>);}
=======

}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD

  )



  );

}



=======
    </div>);
}
=======
    </div>);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )

    </div>;
  );}
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}) 
}/> </div> </div> </div> </div>) 
}
);
}
}
;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">Tell us about your project</h3> <div className=" space-y-4"> <div> <Label htmlFor=" projectName"className=" text-zion-slate-light">Project Name <Input id=" projectName"placeholder=" Enter a name for your project"value= {"
}/> </div> <div> <Label htmlFor=" projectDescription"className=" text-zion-slate-light">Project Description <Textarea /> </div> </div> </div> <div> <h3 className=" text-xl font-semibold text-white mb-4">Contact Information</h3> <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <Label htmlFor=" name"className=" text-zion-slate-light">Name <Input;")
}) "
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" company"className=" text-zion-slate-light">Company <Input;"
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" email"className=" text-zion-slate-light">Email <Input;"
}className=" bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> </div> <div> <Label htmlFor=" phone"className=" text-zion-slate-light" >Phone <Input;"
}/> </div> </div> </div> </div>) "
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
