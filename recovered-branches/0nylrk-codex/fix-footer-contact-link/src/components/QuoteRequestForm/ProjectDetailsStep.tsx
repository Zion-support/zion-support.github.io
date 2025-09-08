


export function ProjectDetailsStep({
  formData
  updateFormData




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

            <Input
              id="company"
              placeholder="Your company name"
              value={formData.contactInfo.company}






              value={formData.contactInfo.email}



</Input>






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



