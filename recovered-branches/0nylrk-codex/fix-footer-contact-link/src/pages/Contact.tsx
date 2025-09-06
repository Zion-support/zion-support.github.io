import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
export default function Contact() {
  const [formData, setFormData] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [isChatOpen, setIsChatOpen] = useState($2);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault($2);
    try {
      // Basic validation with Zod
      const schema = z.object({
        name: z.string().min($2);
        email: z.string().email($2);
        subject: z.string().min($2);
        message: z.string().min(10, "Message must be at least 10 characters")
      }),
      
      schema.parse($2);
      // Simulate form submission
      setIsSubmitting($2);
      setTimeout(() => {
        setIsSubmitting($2);
        toast($2);
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      }, 1500)
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Form Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        })
      } else {
        toast({
          title: "An error occurred",
          description: "Please try again later",
          variant: "destructive"
        })
      }
    }
  },

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message}] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      
      return Promise.resolve()
    } catch (error) {
      console.error($2);
      toast($2);
      return Promise.resolve()
    }
  },

  const offices = $2;
      address: "123 Tech Avenue, San Francisco, CA 94105",
      phone: "+1 302 464 0950",
      email: "commercial@ziontechgroup.com"
    },
    {
      name: "East Coast Office",
      address: "456 Innovation Street, New York, NY 10001",
      phone: "+1 302 464 0950", 
      email: "commercial@ziontechgroup.com"
    }
  ],

  return (
    <AppLayout>
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, AI marketplace support, tech platform contact"
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
                Whether you have a question about our platform, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"
                    placeholder="Tell us what you'd like to know..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card key = $2;
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text = $2;
            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </AppLayout>
  )
}
