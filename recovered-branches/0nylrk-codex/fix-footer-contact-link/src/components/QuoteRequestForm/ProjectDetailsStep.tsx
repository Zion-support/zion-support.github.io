
<<<<<<< HEAD
<<<<<<< HEAD
import { QuoteFormData } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
=======
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProjectDetailsStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function ProjectDetailsStep({ formData, updateFormData }: ProjectDetailsStepProps) {
  return (
    <div className=&quot;space-y-6&quot;>
=======

interface ProjectDetailsStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function ProjectDetailsStep(_{_formData, _updateFormData}: ProjectDetailsStepProps) {_return (_<div className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <div>
        <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Tell us about your project</h3>
        
        <div className=&quot;space-y-4&quot;>
          <div>
            <Label htmlFor=&quot;projectName&quot; className=&quot;text-zion-slate-light&quot;>Project Name</Label>
            <Input
              id=&quot;projectName&quot;
              placeholder=&quot;Enter a name for your project&quot;
              value={formData.projectName}
<<<<<<< HEAD
              onChange={(e) => updateFormData({ projectName: e.target.value })}
              className=&quot;bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
=======
              onChange={_(e) => updateFormData({ projectName: e.target.value})}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          
          <div>
            <Label htmlFor=&quot;projectDescription&quot; className=&quot;text-zion-slate-light&quot;>Project Description</Label>
            <Textarea
<<<<<<< HEAD
              id=&quot;projectDescription&quot;
              placeholder=&quot;Describe your project in detail...&quot;
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e.target.value })}
              className=&quot;min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
=======
              id="projectDescription"
              placeholder="Describe your project in detail..."
              value={_formData.projectDescription}
              onChange={_(_e) => updateFormData({ projectDescription: e.target.value})}
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Contact Information</h3>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
            <Label htmlFor=&quot;name&quot; className=&quot;text-zion-slate-light&quot;>Name</Label>
            <Input
<<<<<<< HEAD
              id=&quot;name&quot;
              placeholder=&quot;Your name&quot;
              value={formData.contactInfo.name}
              onChange={(e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, name: e.target.value } 
=======
              id="name"
              placeholder="Your name"
              value={_formData.contactInfo.name}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _name: e.target.value} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              })}
              className=&quot;bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
            />
          </div>
          
          <div>
            <Label htmlFor=&quot;company&quot; className=&quot;text-zion-slate-light&quot;>Company</Label>
            <Input
<<<<<<< HEAD
              id=&quot;company&quot;
              placeholder=&quot;Your company name&quot;
              value={formData.contactInfo.company}
              onChange={(e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, company: e.target.value } 
=======
              id="company"
              placeholder="Your company name"
              value={_formData.contactInfo.company}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _company: e.target.value} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              })}
              className=&quot;bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
            />
          </div>
          
          <div>
            <Label htmlFor=&quot;email&quot; className=&quot;text-zion-slate-light&quot;>Email</Label>
            <Input
<<<<<<< HEAD
              id=&quot;email&quot;
              type=&quot;email&quot;
              placeholder=&quot;Your email address&quot;
              value={formData.contactInfo.email}
              onChange={(e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, email: e.target.value } 
=======
              id="email"
              type="email"
              placeholder="Your email address"
              value={_formData.contactInfo.email}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _email: e.target.value} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              })}
              className=&quot;bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
            />
          </div>
          
          <div>
            <Label htmlFor=&quot;phone&quot; className=&quot;text-zion-slate-light&quot;>Phone</Label>
            <Input
<<<<<<< HEAD
              id=&quot;phone&quot;
              placeholder=&quot;Your phone number&quot;
              value={formData.contactInfo.phone}
              onChange={(e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, phone: e.target.value } 
=======
              id="phone"
              placeholder="Your phone number"
              value={_formData.contactInfo.phone}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _phone: e.target.value} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              })}
<<<<<<< HEAD
              className="bg-zion-blue border border-zion-blue-light focus: border-zion-purple text-white"
=======
              className=&quot;bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            />
          </div>
        </div>
      </div>
    </div>
  )
}
