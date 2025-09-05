import { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card } from "@/components/ui/card",
import { toast } from "@/components/ui/use-toast",
import z from "zod",
import { ChatAssistant } from "@/components/ChatAssistant",
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react",
import { AppLayout } from "@/layout/AppLayout",
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    
    try {
      // Basic validation with Zod,
const schema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        subject: z.string().min(2, "Subject must be at least 2 characters"),
        message: z.string().min(10, "Message must be at least 10 characters")
      }),  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {const { name, value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}))
  };

  const handleSubmit = (e: React.FormEvent) => {e.preventDefault();
    
    try {
      // Basic validation with Zod,
const schema = z.object({
        name: z.string().min(2, _"Name must be at least 2 characters"), email: z.string().email("Invalid email address"), subject: z.string().min(2, _"Subject must be at least 2 characters"), message: z.string().min(10, _"Message must be at least 10 characters")});
      
      schema.parse(formData),
      
      // Simulate form submission,
setIsSubmitting(true),
      
      setTimeout(() => {
        setIsSubmitting(false),
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),
        
        // Reset form,
setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      }, 1500)    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: &quot;Form Validation Error&quot;,
          description: error.errors[0].message,
          variant: "destructive"
        })
      } else {
        toast({
          title: "An error occurred",
          description: "Please try again later",
          variant: "destructive"
        })      setTimeout_(() => {setIsSubmitting(false);
        toast({
          title: "Message Sent", description: "We've received your message and will get back to you soon."});
        
        // Reset form,
setFormData({name: "", email: "", subject: "", message: ""})
      }, 1500)
    } catch (error) {if (error instanceof z.ZodError) {
        toast({
          title: "Form Validation Error", description: error.errors[0].message, variant: "destructive"})
      } else {toast({
          title: "An error occurred", description: "Please try again later", variant: "destructive"})
      }
    }
  },

  // Handle sending messages to the AI chat assistant,
const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(&quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")      }
      
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error),
      toast({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
        variant: "destructive"
      }),
      return Promise.resolve()      return Promise.resolve()
    }
  },

  const offices = [
    {
      name: &quot;Headquarters&quot;,
      address: &quot;123 Tech Avenue, San Francisco, CA 94105&quot;,
      phone: &quot;+1 302 464 0950&quot;,
      email: &quot;commercial@ziontechgroup.com&quot
    },
    {
      name: &quot;East Coast Office&quot;,
      address: &quot;456 Innovation Street, New York, NY 10001&quot;,
      phone: &quot;+1 302 464 0950&quot;, 
      email: &quot;commercial@ziontechgroup.com&quot
    }
  ],
  return (_<AppLayout>
      <SEO,
title=&quot;Contact Zion - Get in Touch&quot; 
        description=&quot;Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.&quot; 
        keywords=&quot;contact Zion, AI marketplace support, tech platform contact&quot;
        canonical=&quot;https://app.ziontechgroup.com/contact&quot;      />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>Contact Us</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Get in Touch</h2>
              <p className=&quot;text-zion-slate-light text-lg mb-8&quot;>
                Whether you have a question about our platform, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
              
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;>                  <div>
                    <label htmlFor=&quot;name&quot; className=&quot;block text-white mb-2&quot;>Your Name</label>
                    <Input,
id=&quot;name&quot;
                      name=&quot;name&quot;
                      value={formData.name}
                      onChange={handleChange}
                      className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                      placeholder=&quot;John Doe&quot;                      required
                    />
                  </div>
                  <div>
                    <label htmlFor=&quot;email&quot; className=&quot;block text-white mb-2&quot;>Email Address</label>
                    <Input,
id=&quot;email&quot;
                      name=&quot;email&quot;
                      type=&quot;email&quot;
                      value={formData.email}
                      onChange={handleChange}
                      className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                      placeholder=&quot;john@example.com&quot;                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor=&quot;subject&quot; className=&quot;block text-white mb-2&quot;>Subject</label>
                  <Input,
id=&quot;subject&quot;
                    name=&quot;subject&quot;
                    value={formData.subject}
                    onChange={handleChange}
                    className=&quot;bg-zion-blue-dark border-zion-blue-light text-white&quot;
                    placeholder=&quot;How can we help you?&quot;                    required
                  />
                </div>
                
                <div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-white mb-2&quot;>Message</label>
                  <Textarea,
id=&quot;message&quot;
                    name=&quot;message&quot;
                    value={formData.message}
                    onChange={handleChange}
                    className=&quot;bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]&quot;
                    placeholder=&quot;Tell us what you'd like to know...&quot;                    required
                  />
                </div>
                
                <Button,
type=&quot;submit&quot; 
                  className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                  disabled={isSubmitting}
                >
                  {isSubmitting ? &quot;Sending...&quot; : &quot;Send Message&quot}                </Button>
              </form>
            </div>
            
            <div>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Offices</h2>
              <div className=&quot;grid grid-cols-1 gap-6&quot;>
                {offices.map((office, index) => (
                  <Card key={index} className=&quot;bg-zion-blue-dark border border-zion-blue-light p-6&quot;>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{office.name}</h3>
                    <div className=&quot;space-y-3&quot;>
                      <div className=&quot;flex items-start&quot;>
                        <MapPin className=&quot;w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-zion-slate-light&quot;>{office.address}</span>
                      </div>
                      <div className=&quot;flex items-center&quot;>
                        <Phone className=&quot;w-5 h-5 text-zion-cyan mr-3 flex-shrink-0&quot; />
                        <span className=&quot;text-zion-slate-light&quot;>{office.phone}</span>
                      </div>
                      <div className=&quot;flex items-center&quot;>
                        <Mail className=&quot;w-5 h-5 text-zion-cyan mr-3 flex-shrink-0&quot; />
                        <a href={`mailto:${office.email}`} className=&quot;text-zion-cyan hover:underline&quot;>
                          {office.email}
                        </Link>                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className=&quot;mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden&quot;>
                <iframe,
src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk&quot; 
                  width=&quot;100%&quot; 
                  height=&quot;300&quot; 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading=&quot;lazy&quot; 
                  referrerPolicy=&quot;no-referrer-when-downgrade&quot;
                  title=&quot;Zion Office Locations&quot;                ></iframe>
              </div>
              
              <div className=&quot;mt-8&quot;>
                <Card className=&quot;bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;bg-zion-purple/20 p-3 rounded-full mr-4&quot;>
                      <MessageSquare className=&quot;h-6 w-6 text-zion-purple&quot; />
                    </div>
                    <div>
                      <h3 className=&quot;text-white text-lg font-bold&quot;>Live AI Support</h3>
                      <p className=&quot;text-zion-slate-light&quot;>Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button,
onClick={() => setIsChatOpen(true)}
                    className=&quot;w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          
          <div className=&quot;bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Need immediate assistance?</h2>
            <p className=&quot;text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto&quot;>
              Our customer support team is available 24/7 to help you with any questions.
            </p>
            <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
              <Button,
onClick={() => setIsChatOpen(true)}
                className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;              >
                <MessageSquare className=&quot;mr-2 h-5 w-5&quot; />
                Chat With AI
              </Button>
              <Button,
variant=&quot;outline&quot; 
                className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;
                asChild
              >
                <a href=&quot;mailto:support@ziontechgroup.com&quot;>
                  <Mail className=&quot;mr-2 h-5 w-5&quot; />
                  Email Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {_/* Chat Assistant Modal */}
      {isChatOpen && (_<ChatAssistant,
isOpen={isChatOpen}
          onClose={_() => setIsChatOpen(false)}
          recipient={_{
            id: 'ai-assistant', name: 'AI Assistant', avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Support Bot'}}
          onSendMessage={handleSendMessage}
        />
      )}
    </AppLayout>
  )
}
