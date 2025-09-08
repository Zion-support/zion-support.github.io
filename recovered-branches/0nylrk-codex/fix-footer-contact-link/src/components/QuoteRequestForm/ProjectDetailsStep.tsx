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
              placeholder="Your name";
              value={formData.contactInfo.name}          <div>
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
          <div>
            <Label htmlFor="email" className="text-zion-slate-light">
              Email
            </Label>
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
</Input>


