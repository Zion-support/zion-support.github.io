

class ErrorBoundary extends React.Component {

  // TODO: Implement
}
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
pr-12325
    console.error('Error caught by boundary:', error, errorInfo);'

  }
  render() {

    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';import {useState} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card} from "@/components/ui/card";
import {toast} from "@/components/ui/use-toast";
import z from "zod";
import {ChatAssistant} from "@/components/ChatAssistant";
import {Mail, MessageSquare, MapPin, Phone} from "lucide-react";
import {AppLayout} from "@/layout/AppLayout";    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
      const schema = z.object({  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {

          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),
      

      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error),      console.error("Error in AI chat:", error),
      toast({
        title: "Chat Error"
        description: "There was an error communicating with our AI assistant. Please try again."
        variant: "destructive"    <AppLayout>;
      <SEO
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://app && app.ziontechgroup.com/contact"      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else, ;
                our team is ready to answer all your questions.;
              </p>;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;
                    <Input
                      id="name"
                      name="name"
                      value={formData && formData.name}                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData && formData.email}                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="john@example && example.com"
                      required                  <Input
                    id="subject"
                    name="subject"
                    value={formData && formData.subject}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white"
                    placeholder="How can we help you?"
                    required                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
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

                </Button>;
              </form>;
            </div>;

            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;
              <div className="grid grid-cols-1 gap-6">;
              <div className="mt-8">;
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;
                  <div className="flex items-center">;
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;

                      <MessageSquare className="h-6 w-6 text-zion-purple" />;
                    </div>;
                    <div>;"
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>;"
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>;
                    </div>;
                  </div>;
                  <Button;
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  <Button;
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
                  >;
                    Chat With Our AI Assistant;
</Button>

                  </Button>;
                </Card>;
              </div>;
            </div>;
          </div>;

          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text-center">;
            <h2 className="text - 3xl font - bold text - white mb-6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx-auto">;
              Our customer support team is available 24 / 7 to help you with any questions.;
            </p>;
            <div className="flex flex - col sm:flex - row justify - center gap-4">;
              <Button;
                on_click={() => setIsChatOpen (true)}
                className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
              >;
                <MessageSquare className="mr - 2 h - 5 w-5" />;                Chat With AI;
              </Button>;
              <Button;
                variant="outline";
                className="border - zion - cyan text - zion - cyan hover:bg - zion-cyan / 10";
                as_child;
              >;
                <a href="mailto:support@ziontechgroup.com">;
                  <Mail className="mr - 2 h - 5 w-5" />;      {isChatOpen && (;
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}

          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Support Bot';
          }}
          onSendMessage={handleSendMessage}
        />;
      )}
<<<<<<< HEAD