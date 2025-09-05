 
});
const [isSubmitting, setIsSubmitting] = useState (false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'> ('idle');
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const {
  name, value 
}= e.target;
setFormData (prev => ({
  ...prev [name]: value 
}) ) 
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
setSubmitStatus ('idle');
try {
  //Simulate form submission await new Promise (resolve => setTimeout (resolve, 2000) );
setSubmitStatus ('success');
setFormData ({
  name: '';
email: '';
company: '';
phone: '';
service: '';
message: '' 
}) 
}catch {
  setSubmitStatus ('error') 
}finally {
  setIsSubmitting (false) <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" > Name * </label> <input required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" > Email * </label> <input required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" > Company </label> <input /> </div> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" > Phone </label> <input /> </div> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" > Service Interest </label> <select > <option value="">Select a service</option> <option value=" micro-saas">Micro SaaS Products</option> <option value=" ai-services">AI Services</option> <option value=" it-services">IT & Cloud Services</option> <option value=" consulting">Consulting</option> <option value=" other">Other</option> </select> </div> <div> <label htmlFor=" message"className="block text-sm font-medium text-gray-700 mb-2" > Message * </label> <textarea /> </div> <button </form>) 
}export default ContactForm;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 