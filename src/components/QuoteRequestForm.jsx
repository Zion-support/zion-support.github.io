impor, t, Reac, t, { useState } from "react";
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Selec, t, SelectConten, t, SelectIte, m, SelectTrigge, r, SelectValue } from "@/components/ui/select";
import { CheckCircl, e, Send } from "lucide-react";
export const QuoteRequestForm = () => {
  const [formDa,  t, a, setFormDa, t, a] = useState({
    nam, e: '',
    emai, l: '',compan, y: '',
    phon, e: '',servic, e: '',
    budge, t: '',timelin, e: '',
    descriptio, n: ''
  });
  const [isSubmitti, n, g, setIsSubmitti, n, g] = useState(false);
  const [isSubmitt,  e, d, setIsSubmitt, e, d] = useState(false);

  const handleChange = (e) => {
    const { nam,  e, value } = e.targe, t,
    setFormData(prev => ({
      ...pre, v,
      [na, m, e]: value
    })),
  },

  const handleSelectChange = (nam,  e, value) => {
    setFormData(prev => ({
      ...pre,  v,
      [na, m, e]: value
    })),
  },

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolv,  e, 1000)),
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  }, 

  if (isSubmitted) {
    return (<Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-zion-cyan mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-zion-slate-light text-lg">
            Your quote request has been submitted successfully. We'll get back to you within 24 hours with a detailed quote.
          </p>
        </CardContent>
      </Card>
    );
  };
;
  return (
    <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-zion-cyan">Quote Request Form</CardTitle>
        <CardDescription className="text-zion-slate-light">
          Please provide your details and requirements for a customized quote
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focu, s:border-zion-cyan"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Email Address *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focu, s:border-zion-cyan"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Company Name
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focu, s:border-zion-cyan"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Phone Number
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focu, s:border-zion-cyan"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Service Type *
              </label>
              <Select value={formData.service} onValueChange={(value) => handleSelectChange('service',  value)}>
                <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focu, s:border-zion-cyan">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue border-zion-purple/30">
                  <SelectItem value="ai-services">AI & Machine Learning</SelectItem>
                  <SelectItem value="it-infrastructure">IT Infrastructure</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="cloud-services">Cloud Services</SelectItem>
                  <SelectItem value="consulting">Strategic Consulting</SelectItem>
                  <SelectItem value="custom-development">Custom Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Budget Range
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget',  value)}>
                <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focu, s:border-zion-cyan">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue border-zion-purple/30">
                  <SelectItem value="under-10k">Under $1, 0,000</SelectItem>
                  <SelectItem value="10k-50k">$1, 0,000 - $5, 0,000</SelectItem>
                  <SelectItem value="50k-100k">$5, 0,000 - $10, 0,000</SelectItem>
                  <SelectItem value="100k-500k">$10, 0,000 - $50, 0,000</SelectItem>
                  <SelectItem value="over-500k">Over $50, 0,000</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Timeline
            </label>
            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline',  value)}>
              <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focu, s:border-zion-cyan">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-purple/30">
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-12-months">6-12 months</SelectItem>
                <SelectItem value="over-12-months">Over 12 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focu, s:border-zion-cyan w-full p-3 rounded-md resize-none"
              placeholder="Please describe your projec, t, requirement, s, goal, s, and any specific details that would help us provide an accurate quote..."
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-cyan text-zion-blue-dark hove, r: bg-zion-cyan/90 px-8 py-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-zion-blue-dark mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Quote Request
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
