 const [isSubmitting, setIsSubmitting] = useState (false);
const [isChatOpen, setIsChatOpen] = useState (false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Simulate form submission setIsSubmitting (true);
}catch (error) {
  if (error instanceof z.ZodError) {
  toast ({
  title: "Form Validation Error";
description: error.errors[0].message;
}
}
};
//Handle sending messages to the AI chat assistant 
}return Promise.resolve () 
}catch (error) {
  return Promise.resolve ();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
};
return (<AppLayout> <SEO /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > <GradientHeading>Contact Us</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto" > Have questions or want to learn more? We'd love to hear from you. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24" > <div> <div> <label htmlFor="name" className="block text-white mb-2" >Your Name</label> <Input required /> </div> <div> <label htmlFor="email" className="block text-white mb-2" >Email Address</label> <Input required /> </div> </div> <div> <label htmlFor="subject" className="block text-white mb-2" >Subject</label> <Input required /> </div> <div> <label htmlFor="message" className="block text-white mb-2" >Message</label> <Textarea required /> </div> <Button </Button> </form> </div> <div> </div> </div> </Card>) ) 
}</div> <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden" > <iframe ></iframe> </div> <div className="mt-8" > <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6" > <div className="flex items-center" > <div className="bg-zion-purple/20 p-3 rounded-full mr-4" > <MessageSquare className="h-6 w-6 text-zion-purple" /> </div> <div> <h3 className="text-white text-lg font-bold" >Live AI Support</h3> <p className="text-zion-slate-light" >Get instant answers to your questions</p> </div> </div> <Button > Chat With Our AI Assistant </Button> </Card> </div> </div> </div> <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center" > <h2 className="text-3xl font-bold text-white mb-6" >Need immediate assistance?</h2> <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto" > Our customer support team is available 24/7 to help you with any questions. </p> <div className="flex flex-col sm:flex-row justify-center gap-4" > <Button > <MessageSquare className="mr-2 h-5 w-5" /> Chat With AI </Button> <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild > <a href="mailto:support@ziontechgroup.com" > <Mail className="mr-2 h-5 w-5" /> Email Support </Link> </Button> </div> </div> </div> </main> {
  /* Chat Assistant Modal */ 
}{
  isChatOpen && (<ChatAssistant isOpen= {
  isChatOpen 
}onClose= {
  () => setIsChatOpen (false) 
}recipient= {
  {
  id: 'ai-assistant', name: 'AI Assistant', avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Support Bot' 
}
}onSendMessage= {
  handleSendMessage 
}/>) 
}</AppLayout>) 
}