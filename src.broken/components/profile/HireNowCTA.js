<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react';
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
:src/components/profile/HireNowCTA.jsx
import React, {useState} from 'react';
import {Button} from "../ui/Button";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/Card";
import {Input} from "../ui/Input";
import {Textarea} from "../ui/Textarea";
import {DollarSign, MessageSquare} from 'lucide-react';
export function HireNowCTA("props": "any) {;
    const [isFormOpen", setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({;
        "projectDescription": '',;
        "budget": '',;
        "startDate": '',;
        "message": '';
    });
    const handleSubmit = ("props": "any) => {;
<<<<<<< HEAD
        e.preventDefault();
        if (onHire) {;
            onHire(formData)"}
        // Reset form and close;
        setFormData({"projectDescription": '',;
            "budget": '',;
            "startDate": '',;
            "message": ''});
        setIsFormOpen(false)};
    const handleChange = ("props": "any) => {;
        setFormData(prev => ({;
            ...prev",;
            [e.target.name]: "e.target.value;
        "}))};
    return (<Card className="bg-zion-blue-light border-zion-blue-lighter">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center gap-2">;
          <MessageSquare className="h-5 w-5 text-zion-cyan" />;
          Hire {talentName}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {!isFormOpen ? (<div className="space-y-4">;
            {hourlyRate && (<div className="flex items-center gap-2 text-zion-slate-light">;
                <DollarSign className="h-4 w-4" />;
                <span>Starting at ${hourlyRate}/hour</span>;
              </div>)}
            <p className="text-zion-slate-light text-sm">;
              Ready to start your project? Send a message to discuss details and get started.;
            </p>;
            <Button onClick={() => setIsFormOpen(true)} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple">;
              Start Project Discussion;
            </Button>;
          </div>) : (<form onSubmit={handleSubmit"} className="space-y-4">;
            <div>;
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">;
                Project Description;
              </label>;
              <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Describe your project requirements..." className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" required />;
            </div>;
            <div className="grid grid-cols-2 gap-4">;
              <div>;
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">;
                  Budget Range;
                </label>;
                <Input id="budget" name="budget" value={formData.budget"} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" required  />;
              </div>;
              <div>;
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">;
                  Start Date;
                </label>;
                <Input id="startDate" name="startDate" type="date" value={formData.startDate"} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white "focus": "border-zion-cyan" required  />;
              </div>;
            </div>;
            <div>;
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">;
                Additional Message;
              </label>;
              <Textarea id="message" name="message" value={formData.message"} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" rows={3"} />;
            </div>;
            <div className="flex gap-3">;
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple">;
                Send Message;
              </Button>;
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)"} className="border-zion-blue-light text-zion-slate-light "hover": "bg-zion-blue-light "hover":text-white">;
                Cancel;
              </Button>;
            </div>;
          </form>)"}
      </CardContent>;
    </Card>)}
;
export default HireNowCTA;import React, { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function HireNowCTA({ talentName, hourlyRate, onHire }) {
=======

import React, { useState } from 'react';
export function HireNowCTA({ talentName, hourlyRate, onHire }) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({'
        projectDescription: '','
        budget: '','
        startDate: '','
        message: ''
<<<<<<< HEAD
<<<<<<< HEAD
=======
        e.preventDefault();
        if (onHire) {;
            onHire(formData)"}
        // Reset form and close;
        setFormData({"projectDescription": '',;
            "budget": '',;
            "startDate": '',;
            "message": ''});
        setIsFormOpen(false)};
    const handleChange = ("props": "any) => {;
        setFormData(prev => ({;
            ...prev",;
            [e.target.name]: "e.target.value;
        "}))};
    return (<Card className="bg-zion-blue-light border-zion-blue-lighter">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center gap-2">;
          <MessageSquare className="h-5 w-5 text-zion-cyan" />;
          Hire {talentName}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        {!isFormOpen ? (<div className="space-y-4">;
            {hourlyRate && (<div className="flex items-center gap-2 text-zion-slate-light">;
                <DollarSign className="h-4 w-4" />;
                <span>Starting at ${hourlyRate}/hour</span>;
              </div>)}
            <p className="text-zion-slate-light text-sm">;
              Ready to start your project? Send a message to discuss details and get started.;
            </p>;
            <Button onClick={() => setIsFormOpen(true)} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple">;
              Start Project Discussion;
            </Button>;
          </div>) : (<form onSubmit={handleSubmit"} className="space-y-4">;
            <div>;
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">;
                Project Description;
              </label>;
              <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Describe your project requirements..." className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" required />;
            </div>;
            <div className="grid grid-cols-2 gap-4">;
              <div>;
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">;
                  Budget Range;
                </label>;
                <Input id="budget" name="budget" value={formData.budget"} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" required  />;
              </div>;
              <div>;
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">;
                  Start Date;
                </label>;
                <Input id="startDate" name="startDate" type="date" value={formData.startDate"} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white "focus": "border-zion-cyan" required  />;
              </div>;
            </div>;
            <div>;
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">;
                Additional Message;
              </label>;
              <Textarea id="message" name="message" value={formData.message"} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white "placeholder": "text-zion-slate-light "focus":border-zion-cyan" rows={3"} />;
            </div>;
            <div className="flex gap-3">;
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple">;
                Send Message;
              </Button>;
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)"} className="border-zion-blue-light text-zion-slate-light "hover": "bg-zion-blue-light "hover":text-white">;
                Cancel;
              </Button>;
            </div>;
          </form>)"}
      </CardContent>;
    </Card>)}
;
export default HireNowCTA;import React, { useState } from 'react';
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
export function HireNowCTA({ talentName, hourlyRate, onHire }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        projectDescription: '',
        budget: '',
        startDate: '',
        message: ''
        e.preventDefault();
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
:src/components/profile/HireNowCTA.jsx
    }
    );
    const handleSubmit = (props: any) => {
    });
    const handleSubmit = (e) => {        e.preventDefault();
<<<<<<< HEAD
=======
        e.preventDefault();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
        if (onHire) {
=======

        e.preventDefault();
        if (onHire) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            onHire(formData);
        }
        // Reset form and close;
        setFormData({'
            projectDescription: '','
            budget: '','
            startDate: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
:src/components/profile/HireNowCTA.jsx
            message: ''}
=======
    const handleChange = (e) => {
=======
:src/components/profile/HireNowCTA.jsx;
    message: ''}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
    );
        setIsFormOpen(false)};
            message: ''
        });
        setIsFormOpen(false)
};    const handleChange = (e) => {
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
<<<<<<< HEAD
        }))
};
=======

    const handleChange = (e) => {}
        setFormData(prev => ({}
            ...prev,
            [e.target.name]: e.target.value;
        }));
    };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    const handleChange = (e) => {
:src/components/profile/HireNowCTA.jsx
            message: ''}
    );
        setIsFormOpen(false)};
            message: ''
        });
        setIsFormOpen(false)
};    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
<<<<<<< HEAD
        }));
    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        }))
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
        }));
    };
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
    return (<Card className="bg-zion-blue-light border-zion-blue-lighter">
      <CardHeader>"
        <CardTitle className="text-white flex items-center gap-2">"
          <MessageSquare className="h-5 w-5 text-zion-cyan"/>
          Hire {talentName}
        </CardTitle>
      </CardHeader>
      <CardContent>"
        {!isFormOpen ? (<div className="space-y-4">"
            {hourlyRate && (<div className="flex items-center gap-2 text-zion-slate-light">"
                <DollarSign className="h-4 w-4"/>
                <span>Starting at ${hourlyRate}/hour</span>
<<<<<<< HEAD
              </div>)}"
=======
              </div>)}
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-zion-slate-light text-sm">;
              Ready to start your project? Send a message to discuss details and get started.;
            </p>;
            <Button onClick={() => setIsFormOpen(true)} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
              Start Project Discussion;
            </Button>;
          </div>) : (<form onSubmit={handleSubmit} className="space-y-4">;
            <div>;
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">;
                Project Description;
              </label>;
              <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Describe your project requirements..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>;
            </div>;
            <div className="grid grid-cols-2 gap-4">;
              <div>;
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">;
                  Budget Range;
                </label>;
                <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>;
              </div>;
              <div>;
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">;
                  Start Date;
                </label>;
                <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan" required/>;
              </div>;
            </div>;
            <div>;
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">;
                Additional Message;
              </label>;
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" rows={3}/>;
            </div>;
            <div className="flex gap-3">;
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                Send Message;
              </Button>;
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)} className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
                Cancel;
              </Button>;
            </div>;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
            <p className="text-zion-slate-light text-sm">
              Ready to start your project? Send a message to discuss details and get started.
            </p>"
            <Button onClick={() => setIsFormOpen(true)} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              Start Project Discussion;
            </Button>"
          </div>) : (<form onSubmit={handleSubmit} className="space-y-4">
            <div>"
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">
                Project Description;
              </label>"
              <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Describe your project requirements..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>
            </div>
<<<<<<< HEAD
"
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
            <div className="grid grid-cols-2 gap-4">
              <div>"
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                  Budget Range;
                </label>"
                <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
              <div>"
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
              <div>
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">
                  Start Date;
                </label>"
                <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan" required/>
              </div>
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
            <div>"
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
            <div>
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Additional Message;
              </label>"
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" rows={3}/>
            </div>
<<<<<<< HEAD
"
            <div className="flex gap-3">"
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
            <div className="flex gap-3">
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                Send Message;
              </Button>"
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)} className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                Cancel;
              </Button>
            </div>
<<<<<<< HEAD
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
          </form>)}
      </CardContent>
    </Card>);
<<<<<<< HEAD
}
<<<<<<< HEAD
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React, { useState } from 'react';
export function HireNowCTA({ talentName, hourlyRate, onHire }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        projectDescription: ,
        budget: ,
        startDate: ,
        message: ')
        e.preventDefault();
        if (onHire) {
            onHire(formData);
        }
        // Reset form and close;
        setFormData({
            startDate: ,')
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value;)
        }));
    };
    return (<Card className="bg-zion-blue-light border-zion-blue-lighter">"

      <CardHeader>
"
        <CardTitle className="text-white flex items-center gap-2">"
          <MessageSquare className="h-5 w-5 text-zion-cyan"/>"

        
      
      <CardContent>
        {!isFormOpen ? (<div className="space-y-4">"
</div>"
            {hourlyRate && (<div className="flex items-center gap-2 text-zion-slate-light">"
                <DollarSign className="h-4 w-4"/>"

                <span>Starting at ${hourlyRate}/hour</span>)
              </div>)}"
            <p className="text-zion-slate-light text-sm">"
</p>
            </p>"
            <Button onClick={() => setIsFormOpen(true)} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">"

          </div>) : (<form onSubmit={handleSubmit} className="space-y-4">"
</form>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">"
</label>
              </label>"
              <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Describe your project requirements..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>"

            </div>
            <div className="grid grid-cols-2 gap-4">"
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">"
                <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>"


                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">"
                <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan" required/>"


              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">"
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" rows={3}/>"

            <div className="flex gap-3">"
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">"

              )"
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)} className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">"

              
          </form>)}
      
    );"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
=======
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
