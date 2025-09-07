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