import z from "zod";

export default function Contact() {_const [formData, _setFormData] = useState({
    name: "", _email: "", _subject: "", _message: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const _handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}));
  };

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    
    try {
      // Basic validation with Zod
      const _schema = z.object({
        name: z.string().min(2, _"Name must be at least 2 characters"), _email: z.string().email("Invalid email address"), _subject: z.string().min(2, _"Subject must be at least 2 characters"), _message: z.string().min(10, _"Message must be at least 10 characters")});
      
      schema.parse(formData);
      
      // Simulate form submission
      setIsSubmitting(true);
      
      setTimeout__(() => {_setIsSubmitting(false);
        toast({
          title: "Message Sent", _description: "We've received your message and will get back to you soon."});
        
        // Reset form
        setFormData({_name: "", _email: "", _subject: "", _message: ""});
      }, 1500);
    } catch (error) {_if (error instanceof z.ZodError) {
        toast({
          title: "Form Validation Error", _description: error.errors[0].message, _variant: "destructive"});
      } else {_toast({
          title: "An error occurred", _description: "Please try again later", _variant: "destructive"});
      }
    }
  };

  // Handle sending messages to the AI chat assistant
  const _handleSendMessage = async (message: string): Promise<void> => {_try {
      const _response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", _{
        method: "POST", _headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({_messages: [{ role: "user", _content: message}] 
        })});
      
      if (!response.ok) {_throw new Error("Failed to get response from AI assistant");}
      
      return Promise.resolve();
    } catch (error) {_toast({
        title: "Chat Error", _description: "There was an error communicating with our AI assistant. Please try again.", _variant: "destructive"});
      return Promise.resolve();
    }
  };

  const _offices = [
    {_name: "Headquarters", _address: "123 Tech Avenue, _San Francisco, _CA 94105", _phone: "+1 302 464 0950", _email: "commercial@ziontechgroup.com"},
    {_name: "East Coast Office", _address: "456 Innovation Street, _New York, _NY 10001", _phone: "+1 302 464 0950", _email: "commercial@ziontechgroup.com"}
  ];

  return (_<AppLayout>
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, _AI marketplace support, _tech platform contact"
        canonical="https://app.ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Whether you have a question about our platform, _pricing, _or anything else, _our team is ready to answer all your questions.
              </p>
              
              <form onSubmit={_handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={_formData.name}
                      onChange={_handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={_formData.email}
                      onChange={_handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={_formData.subject}
                    onChange={_handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={_formData.message}
                    onChange={_handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"
                    placeholder="Tell us what you'd like to know..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={_isSubmitting}
                >
                  {_isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {_offices.map((office, _index) => (
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{_office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">{_office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{_office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a href={_`mailto:${office.email}`} className="text-zion-cyan hover:underline">
                          {_office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={_{ border: 0}} 
                  allowFullScreen={_true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Locations"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                  <div className="flex items-center">
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-zion-purple" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button
                    onClick={_() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={_() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With AI
              </Button>
              <Button 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <a href="mailto:support@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {_/* Chat Assistant Modal */}
      {_isChatOpen && (_<ChatAssistant
          isOpen={isChatOpen}
          onClose={_() => setIsChatOpen(false)}
          recipient={_{
            id: 'ai-assistant', _name: 'AI Assistant', _avatarUrl: 'https://placehold.co/64x64?text=AI', _role: 'Support Bot'}}
          onSendMessage={_handleSendMessage}
        />
      )}
    </AppLayout>
  );
}
