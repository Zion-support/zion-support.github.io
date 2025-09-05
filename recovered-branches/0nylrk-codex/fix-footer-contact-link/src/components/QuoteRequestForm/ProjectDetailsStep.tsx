

interface ProjectDetailsStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function ProjectDetailsStep(_{_formData, _updateFormData}: ProjectDetailsStepProps) {_return (_<div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="projectName" className="text-zion-slate-light">Project Name</Label>
            <Input
              id="projectName"
              placeholder="Enter a name for your project"
              value={formData.projectName}
              onChange={_(e) => updateFormData({ projectName: e.target.value})}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="projectDescription" className="text-zion-slate-light">Project Description</Label>
            <Textarea
              id="projectDescription"
              placeholder="Describe your project in detail..."
              value={_formData.projectDescription}
              onChange={_(_e) => updateFormData({ projectDescription: e.target.value})}
              className="min-h-32 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-zion-slate-light">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={_formData.contactInfo.name}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _name: e.target.value} 
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="company" className="text-zion-slate-light">Company</Label>
            <Input
              id="company"
              placeholder="Your company name"
              value={_formData.contactInfo.company}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _company: e.target.value} 
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-zion-slate-light">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              value={_formData.contactInfo.email}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _email: e.target.value} 
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-zion-slate-light">Phone</Label>
            <Input
              id="phone"
              placeholder="Your phone number"
              value={_formData.contactInfo.phone}
              onChange={_(_e) => updateFormData({ 
                contactInfo: { ...formData.contactInfo, _phone: e.target.value} 
              })}
              className="bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
