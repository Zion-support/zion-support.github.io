



interface ProjectDetailsStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function ProjectDetailsStep({
  formData
  updateFormData


    <div className="space-y-6">

        </h3>

      <div>



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




        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <Label htmlFor="name" className="text-zion-slate-light">
              Name;
            </Label>



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


          <div>

            <Label htmlFor="company" className="text-zion-slate-light">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your company name"
              value={formData.contactInfo.company}



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
            <Input;
              id="email";
              type="email";
              placeholder="Your email address";



