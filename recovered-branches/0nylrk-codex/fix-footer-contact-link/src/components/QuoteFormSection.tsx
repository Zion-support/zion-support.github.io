 export function QuoteFormSection () {
  const [isSubmitted, setIsSubmitted] = useState (false);
const [isSubmitting, setIsSubmitting] = useState (false);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate form submission setTimeout ( () => {
  setIsSubmitting (false);
setIsSubmitted (true) 
}, 1000) 
};
return (<section className="py-20 bg-zion-blue" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto"> Request your instant commercial proposal and discover how Zion can revolutionize your IT operations </p> </div> </svg> </div> <h3 className=" text-2xl font-bold text-white mb-4">Quote Request Sent!</h3> <p className=" text-zion-slate-light mb-6"> Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly. </p> <Button > Submit Another Request </Button> </div>) : (<div> <label htmlFor=" name"className=" block text-sm font-medium text-zion-slate-light mb-1"> Name </label> <Input id=" name"type=" text"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"required /> </div> <div> <label htmlFor=" company"className=" block text-sm font-medium text-zion-slate-light mb-1"> Company </label> <Input id=" company"type=" text"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"/> </div> <div> <label htmlFor=" email"className=" block text-sm font-medium text-zion-slate-light mb-1"> Email </label> <Input id=" email"type=" email"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"required /> </div> <div> <label htmlFor=" phone"className=" block text-sm font-medium text-zion-slate-light mb-1"> Phone </label> <Input id=" phone"type=" tel"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"/> </div> </div> <div className=" mt-6"> <label htmlFor=" interest"className=" block text-sm font-medium text-zion-slate-light mb-1"> I'm interested in (select all that apply) </label> </label> </div>) ) 
}</div> </div> <div className=" mt-6"> <label htmlFor=" message"className=" block text-sm font-medium text-zion-slate-light mb-1"> Additional Details </label> <textarea ></textarea> </div> <div className=" mt-6" > <Button </Button> </div> </form>) 
}</div> </div> </section>) 
}