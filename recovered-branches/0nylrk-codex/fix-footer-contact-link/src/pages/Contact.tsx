<<<<<<< HEAD


=======

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

export default function Contact() {;
  const [formData, setFormData] = useState({;
    name: "",;
    email: "",;
    subject: "",;
    message: "";

  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);


>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",

<<<<<<< HEAD
=======

    message: "";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba


    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
      const schema = z.object({

        message: z.string().min(10, "Message must be at least 10 characters")
      });
      schema.parse(formData);
      // Simulate form submission

        setIsSubmitting(false),

        toast({"
          title: "Message Sent""
          description: "We've received your message and will get back to you soon."})
        // Reset form;
        setFormData({"
          name: """
          email: """
          subject: """
          message: ""
        })
      }, 1500)
    } catch (error) {}
      if (error instanceof z.ZodError) {}
        toast({"
          title: "Form Validation Error"
          description: error.errors[0].message"
          variant: "destructive"
        })
      } else {}
        toast({"
          title: "An error occurred""
          description: "Please try again later""
          variant: "destructive"
        })
      }
    }

  // Handle sending messages to the AI chat assistant

  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

  },


<<<<<<< HEAD



=======
}
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod

<<<<<<< HEAD
      const schema = z.object({


        // Reset form
        setFormData({
          name: ""
          email: ""
          subject: ""
          message: ""
        })
      }, 1500)

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Form Validation Error"
          description: error.errors[0].message
          variant: "destructive"
        })
      } else {
        toast({
          title: "An error occurred"
          description: "Please try again later"
          variant: "destructive"
        })
      }
    }


  },



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),
<<<<<<< HEAD

      

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
<<<<<<< HEAD

      console.error("Error in AI chat:", error);
=======
      console.error("Error in AI chat:", error),
      console.error("Error in AI chat:", error),
console.error("Error in AI chat:", error),
      toast({
        title: "Chat Error"
        description: "There was an error communicating with our AI assistant. Please try again."

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;

    try {;
      // Basic validation with Zod;

<<<<<<< HEAD
      const schema = z && z.object({;
        name: z && z.string().min(2, "Name must be at least 2 characters");
        email: z && z.string().email("Invalid email address"),;
        subject: z && z.string().min(2, "Subject must be at least 2 characters");
        message: z && z.string().min(10, "Message must be at least 10 characters");
      });
=======
      schema && schema.parse(formData);

      // Simulate form submission;
      setIsSubmitting(true);

      setTimeout(() => {;
        setIsSubmitting(false);

>>>>>>> origin/cursor/delete-old-data-records-6bba

      schema && schema.parse(formData);
      // Simulate form submission;
      setIsSubmitting(true);
      setTimeout(() => {;
        setIsSubmitting(false);

<<<<<<< HEAD
        toast({;
          title: "Message Sent",;
          description: "We've received your message and will get back to you soon."}),;
        // Reset form;
        setFormData({;
          name: "",;
          email: "",;
          subject: "",;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          message: "";
        });
      }, 1500);
    } catch (error) {;
      if (error instanceof z && z.ZodError) {;

  };

  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;

<<<<<<< HEAD
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
      if (!response && response.ok) {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        throw new Error("Failed to get response from AI assistant");
      }
      return Promise && Promise.resolve();

<<<<<<< HEAD
    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      toast({;
        title: "Chat Error",;
        description: "There was an error communicating with our AI assistant. Please try again.",;
        variant: "destructive";

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      return Promise && Promise.resolve();
    }
import { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Card } from '@/components / ui / card';
import { toast } from '@/components / ui / use - toast';
import z from './zod';
import { ChatAssistant } from '@/components / ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from './lucide-react';

import { AppLayout } from '@/layout / AppLayout';
export default /**;
 * Contact - Function description;
 */
function Contact() {}
  const [form_data, setFormData] = useState ({"
    name: "","
    email: "","
    subject: "","

    message: "";
  });
  const [is_submitting, setIsSubmitting] = useState (false);
  const [isChatOpen, setIsChatOpen] = useState (false);
;

    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;

        message: z.string ().min (10, "Message must be at least 10 characters");
      });
;
      schema.parse (form_data);
;
      // Simulate form submission;
      setIsSubmitting (true);
;

          variant: "destructive";
        });
      }
    }
  }
;
  // Handle sending messages to the AI chat assistant;

        variant: "destructive";
      });
      return Promise.resolve ();
    }
  }
;
  const offices = [;
<<<<<<< HEAD

    {
=======


      address: "123 Tech Avenue, San Francisco, CA 94105";

{
>>>>>>> origin/cursor/delete-old-data-records-6bba
      name: "Headquarters"
      address: "123 Tech Avenue, San Francisco, CA 94105";

  };
  const offices = [;

<<<<<<< HEAD

      }),
      return Promise.resolve()
    }
  }
  const offices = [
    {
      name: "Headquarters"
      address: "123 Tech Avenue, San Francisco, CA 94105";
      phone: "+1 302 464 0950"

      email: "commercial@ziontechgroup.com"
    }
    {
      name: "East Coast Office"
      address: "456 Innovation Street, New York, NY 10001";
      phone: "+1 302 464 0950"
      email: "commercial@ziontechgroup.com"
    }

  ];

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      email: "commercial@ziontechgroup.com"
    }
  ],

<<<<<<< HEAD
=======

    <AppLayout>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
}
  ];
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <AppLayout>;

      <SEO
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://app && app.ziontechgroup.com/contact"

<<<<<<< HEAD
=======
import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card } from "@/components/ui/card",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
import { ChatAssistant } from "@/components/ChatAssistant",;
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react",;
import { AppLayout } from "@/layout/AppLayout",;
;
export default function Contact() {;
  const [formData, setFormData] = useState({;
    name:"",;
    email:"",;
    subject:"",;
    message:"";
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isChatOpen, setIsChatOpen] = useState(false),;
;
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]:value })),;
  },;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    try {;
      // Basic validation with Zod;
      const schema = z.object({;
        name:z.string().min(2, "Name must be at least 2 characters"),;
        email:z.string().email("Invalid email address"),;
        subject:z.string().min(2, "Subject must be at least 2 characters"),;
        message:z.string().min(10, "Message must be at least 10 characters");
      }),;
      ;
      schema.parse(formData),;
      ;
      // Simulate form submission;
      setIsSubmitting(true),;
      ;
      setTimeout(() => {;
        setIsSubmitting(false),;
        toast({;
          title:"Message Sent",;
          description:"We've received your message and will get back to you soon."}),;
        ;
        // Reset form;
        setFormData({;
          name:"",;
          email:"",;
          subject:"",;
          message:"";
        }),;
      }, 1500),;
    } catch (error) {;
      if (error instanceof z.ZodError) {;
        toast({;
          title:"Form Validation Error",;
          description:error.errors[0].message,;
          variant:"destructive";
        }),;
      } else {;
        toast({;
          title:"An error occurred",;
          description:"Please try again later",;
          variant:"destructive";
        }),;
      }
    }
  },;
;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message:string):Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method:"POST",;
        headers:{;
          "Content-Type":"application/json"},;
        body:JSON.stringify({ ;
          messages:[{ role:"user", content:message }] ;
        })}),;
      ;
      if (!response.ok) {;
        throw new Error("Failed to get response from AI assistant"),;
      }
      ;
      return Promise.resolve(),;
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        title:"Chat Error",;
        description:"There was an error communicating with our AI assistant. Please try again.",;
        variant:"destructive";
      }),;
      return Promise.resolve(),;
    }
  },;
;
  const offices = [;
    {;
      name:"Headquarters",;
      address:"123 Tech Avenue, San Francisco, CA 94105",;
      phone:"+1 302 464 0950",;
      email:"commercial@ziontechgroup.com";
    },;
    {;
      name:"East Coast Office",;
      address:"456 Innovation Street, New York, NY 10001",;
      phone:"+1 302 464 0950", ;
      email:"commercial@ziontechgroup.com";
    }
  ],;
;
  return (;
    <AppLayout>;
      <SEO ;
        title="Contact Zion - Get in Touch" ;
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." ;
        keywords="contact Zion, AI marketplace support, tech platform contact";
        canonical="https://app.ziontechgroup.com/contact";
>>>>>>> origin/cursor/delete-old-data-records-6bba

      />;
        canonical="https://app && app.ziontechgroup.com/contact"      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;

<<<<<<< HEAD


=======
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else, ;
                our team is ready to answer all your questions.;
              </p>;

<<<<<<< HEAD


=======
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;
<<<<<<< HEAD

=======
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
                Whether you have a question about our platform, pricing, or anything else
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

return (
                    <Input
                      id="name"
                      name="name"
                      value={formData && formData.name}

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
                Whether you have a question about our platform, pricing, or anything else
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="John Doe"
                      required

<<<<<<< HEAD
=======
<Input ;
                      id="name";
                      name="name";
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";
                      placeholder="John Doe";
                      required;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;

<<<<<<< HEAD
=======
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <Input
                      id="email"
                      name="email"
                      type="email"
<<<<<<< HEAD
=======
                      value={formData && formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="john@example && example.com"
                      required
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;


/>;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Input
                    id="subject"
                    name="subject"
                    value={formData && formData.subject}

<<<<<<< HEAD

=======
value={formData.email}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white"
                    placeholder="How can we help you?"
                    required


<<<<<<< HEAD
=======
                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;


/>;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Textarea
                    id="message"
                    name="message"
                    value={formData && formData.message}

<<<<<<< HEAD

=======
/>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"
                    placeholder="Tell us what you'd like to know..."
                    required
<<<<<<< HEAD


                  />;
                </div>;

=======

                  />;
                </div>;

                <Button
                  type="submit" 

                <Button 
                  type="submit" 

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
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

/>;
                </div>;
                <Button
                  type="submit" 

                <Button 
                  type="submit" 


                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card } from "@/components/ui/card",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
import { ChatAssistant } from "@/components/ChatAssistant",;
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react",;
import { AppLayout } from "@/layout/AppLayout",;
export default function Contact() {;
  const [formData, setFormData] = useState({;
    name: "",;
    email: "",;
    subject: "",;
    message: "";
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isChatOpen, setIsChatOpen] = useState(false),;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    try {;
      // Basic validation with Zod;
      const schema = z.object({;
        name: z.string().min(2, "Name must be at least 2 characters"),;
        email: z.string().email("Invalid email address"),;
        subject: z.string().min(2, "Subject must be at least 2 characters"),;
        message: z.string().min(10, "Message must be at least 10 characters");
      }),;
      schema.parse(formData),;
      // Simulate form submission;
      setIsSubmitting(true),;
      setTimeout(() => {;
        setIsSubmitting(false),;
        toast({;
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),;
        // Reset form;
        setFormData({;
          name: "",;
          email: "",;
          subject: "",;
          message: "";
        });
      }, 1500);
    } catch (error) {;
      if (error instanceof z.ZodError) {;
        toast({;
          title: "Form Validation Error",
          description: error.errors[0].message,;
          variant: "destructive";
        });
      } else {;
        toast({;
          title: "An error occurred",
          description: "Please try again later",;
          variant: "destructive";
        });
      }
    }
  },;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"},;
        body: JSON.stringify({;
          messages: [{ role: "user", content: message }];
        })}),;
      if (!response.ok) {;
        throw new Error("Failed to get response from AI assistant");
      }
;
      return Promise.resolve();
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",;
        variant: "destructive";
      }),;
      return Promise.resolve();
    }
  },;
  const offices = [;
    {;
      name: "Headquarters",;
      address: "123 Tech Avenue, San Francisco, CA 94105",;
      phone: "+1 302 464 0950",;
      email: "commercial@ziontechgroup.com";
    },;
    {;
      name: "East Coast Office",;
      address: "456 Innovation Street, New York, NY 10001",;
      phone: "+1 302 464 0950",;
      email: "commercial@ziontechgroup.com";
    }
  ],;
  return (;
    <AppLayout>;
      <SEO;
        title="Contact Zion - Get in Touch";
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";
        keywords="contact Zion, AI marketplace support, tech platform contact";
        canonical="https://app.ziontechgroup.com/contact";
      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;

          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;'
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;"
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;"
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else,;
                our team is ready to answer all your questions.;
              </p>;

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;

                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white";
                    placeholder="How can we help you?";
                    required;
                  />;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;
                  <Textarea;
                    id="message";
                    name="message";
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]";
                    placeholder="Tell us what you'd like to know...";
                    required;
                  />;
                </div>;
                <Button;
                  type="submit";
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  disabled={isSubmitting}
                >;
                  {isSubmitting ? "Sending..." : "Send Message"}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Button 
                  type="submit" 

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;

                  {isSubmitting ? "Sending..." : "Send Message"}

<<<<<<< HEAD
=======

                  />;
                </div>;
                <Button"
                  type="submit" 
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
"
import { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { GradientHeading } from "@/components/GradientHeading",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Card } from "@/components/ui/card",;"
import { toast } from "@/components/ui/use-toast",;"
import z from "zod",;"
import { ChatAssistant } from "@/components/ChatAssistant",;"
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react",;"
import { AppLayout } from "@/layout/AppLayout",;
export default function Contact() { return null; }
  }),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isChatOpen, setIsChatOpen] = useState(false),;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    try {;
      // Basic validation with Zod;
      const schema = z.object({;"
        name: z.string().min(2, "Name must be at least 2 characters"),;"
        email: z.string().email("Invalid email address"),;"
        subject: z.string().min(2, "Subject must be at least 2 characters"),;"
        message: z.string().min(10, "Message must be at least 10 characters");
      }),;
      schema.parse(formData),;
      // Simulate form submission;
      setIsSubmitting(true),;
      setTimeout(() => {;
        setIsSubmitting(false),;
        toast({;"
          title: "Message Sent",'"
          description: "We've received your message and will get back to you soon."}),;
        // Reset form;
        setFormData({;"
          name: "",;"
          email: "",;"
          subject: "",;"
          message: "";
        });
      }, 1500);
    } catch (error) {;
      if (error instanceof z.ZodError) {;
        toast({;"
          title: "Form Validation Error",
          description: error.errors[0].message,;"
          variant: "destructive";
        });
      } else {;
        toast({;"
          title: "An error occurred","
          description: "Please try again later",;"
          variant: "destructive";
        });
      }

    }
  },;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;"
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;"
        method: "POST",;
        headers: {;"
          "Content-Type": "application/json"},;
        body: JSON.stringify({;"
          messages: [{ role: "user", content: message }];
        })}),;
      if (!response.ok) {;"
        throw new Error("Failed to get response from AI assistant");
      }
;
      return Promise.resolve();
    } catch (error) {;"
      console.error("Error in AI chat:", error),;
      toast({;"
        title: "Chat Error","
        description: "There was an error communicating with our AI assistant. Please try again.",;"
        variant: "destructive";
      }),;
      return Promise.resolve();
    }
  },;
  const offices = [;
    {;"
      name: "Headquarters",;"
      address: "123 Tech Avenue, San Francisco, CA 94105",;"
      phone: "+1 302 464 0950",;"
      email: "commercial@ziontechgroup.com";
    },;
    {;"
      name: "East Coast Office",;"
      address: "456 Innovation Street, New York, NY 10001",;"
      phone: "+1 302 464 0950",;"
      email: "commercial@ziontechgroup.com";
    }
  ],;
  return (;
    <AppLayout>;
      <SEO;"
        title="Contact Zion - Get in Touch";"
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";"
        keywords="contact Zion, AI marketplace support, tech platform contact";"
        canonical="https://app.ziontechgroup.com/contact";
      />;"
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;'
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;"
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;"
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else,;
                our team is ready to answer all your questions.;
              </p>;"
              <form onSubmit={handleSubmit} className="space-y-6">;"
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;
                    <Input;"
                      id="name";"
                      name="name";
                      value={formData.name}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white";"
                      placeholder="John Doe";
                      required;
                    />;
                  </div>;
                  <div>;"
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;
                    <Input;"
                      id="email";"
                      name="email";"
                      type="email";
                      value={formData.email}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white";"
                      placeholder="john@example.com";
                      required;
                    />;
                  </div>;
                </div>;
                <div>;"
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;
                  <Input;"
                    id="subject";"
                    name="subject";
                    value={formData.subject}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white";"
                    placeholder="How can we help you?";
                    required;
                  />;
                </div>;
                <div>;"
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;
                  <Textarea;"
                    id="message";"
                    name="message";
                    value={formData.message}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]";'"
                    placeholder="Tell us what you'd like to know...";
                    required;
                  />;
                </div>;
                <Button;"
                  type="submit";"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  disabled={isSubmitting}
                >;"
                  {isSubmitting ? "Sending..." : "Send Message"}

                </Button>;
              </form>;
            </div>;

            <div>;"
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;"
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

                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";

      email: "commercial@ziontechgroup.com";
    }
    {"
      name: "East Coast Office","
      address: "456 Innovation Street, New York, NY 10001";"
      phone: "+1 302 464 0950","

                      required;
                    />;
</Input>
                  </div>;
                </div>;

                    placeholder="How can we help you?";

                    required;
                  />;
</Input>
                </div>;

                    placeholder="Tell us what you'd like to know...";

                    required;
                  />;
</Textarea>
                </div>;

                  {is_submitting ? "Sending..." : "Send Message"}

                </Button>;
              </form>;
            </div>;

                        </a>;
                      </div>;
                    </div>;
                  </Card>))}

                      <p className="text - zion - slate - light">Get instant answers to your questions</p>;
                    </div>;
                  </div>;
                  <Button;

                  <Button;

                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  <Button;

                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;"
                  {isSubmitting ? "Sending..." : "Send Message"}

                  >;
                    Chat With Our AI Assistant;
</Button>
    <AppLayout>;
</AppLayout>
      <SEO;"
        title="Contact Zion - Get in Touch";""
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";""
        keywords="contact Zion, AI marketplace support, tech platform contact";""
        canonical="https://app.ziontechgroup.com / contact";"
      />;
</SEO>"
      <main className="min - h-screen bg - zion - blue pt - 24 pb - 20">;"
</main>"
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
          <div className="text - center mb - 16">;"
</div>
            <GradientHeading > Contact Us</GradientHeading>;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 mb - 24">;"
</div>
            <div>;
</div>"
              <h2 className="text - 3xl font - bold text - white mb - 6">Get in Touch</h2>;""
              <p className="text - zion - slate - light text - lg mb - 8">;"
</p>
              </p>;"
              <form on_submit={handle_submit} className="space - y-6">;"
</form>"
                <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;"
</div>
                  <div>;
</div>"
                    <label html_for="name" className="block text - white mb - 2">Your Name</label>;"
                    <Input;"
                      id="name";""
                      name="name";"
                      value={form_data.name}
                      on_change={handle_change}"
                      className="bg - zion - blue - dark border - zion - blue - light text - white";""
                      placeholder="John Doe";"
                      required;
                    />;
</Input>
                  </div>;
                  <div>;
</div>"
                    <label html_for="email" className="block text - white mb - 2">Email Address</label>;"
                    <Input;"
                      id="email";""
                      name="email";""
                      type="email";"
                      value={form_data.email}
                      on_change={handle_change}"
                      className="bg - zion - blue - dark border - zion - blue - light text - white";""
                      placeholder="john@example.com";"
                      required;
                    />;
</Input>
                  </div>;
                </div>;
                <div>;
</div>"
                  <label html_for="subject" className="block text - white mb - 2">Subject</label>;"
                  <Input;"
                    id="subject";""
                    name="subject";"
                    value={form_data.subject}
                    on_change={handle_change}"
                    className="bg - zion - blue - dark border - zion - blue - light text - white";""
                    placeholder="How can we help you?";"
                    required;
                  />;
</Input>
                </div>;
                <div>;
</div>"
                  <label html_for="message" className="block text - white mb - 2">Message</label>;"
                  <Textarea;"
                    id="message";""
                    name="message";"
                    value={form_data.message}
                    on_change={handle_change}"
                    className="bg - zion - blue - dark border - zion - blue - light text - white min - h-[150px]";""
                    placeholder="Tell us what you'd like to know...";"
                    required;
                  />;
</Textarea>
                </div>;
                <Button;"
                  type="submit";""
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"
                  disabled={is_submitting}
                >;
</Button>
                </Button>;
              </form>;
            </div>;
            <div>;
</div>"
              <h2 className="text - 3xl font - bold text - white mb - 6">Our Offices</h2>;""
              <div className="grid grid - cols - 1 gap - 6">;"
</div>"
                  <Card key={index} className="bg - zion - blue - dark border border - zion - blue - light p - 6">;"
</Card>"
                    <h3 className="text - xl font - bold text - white mb - 3">{office.name}</h3>;""
                    <div className="space - y-3">;"
</div>"
                      <div className="flex items - start">;"
</div>"
                        <MapPin className="w - 5 h - 5 text - zion - cyan mr - 3 mt - 1 flex - shrink - 0" />;"
</MapPin>"
                        <span className="text - zion - slate - light">{office.address}</span>;"
                      </div>;"
                      <div className="flex items - center">;"
</div>"
                        <Phone className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"
</Phone>"
                        <span className="text - zion - slate - light">{office.phone}</span>;"
                      </div>;"
                      <div className="flex items - center">;"
</div>"
                        <Mail className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"
</Mail>"
                        <a href={`mailto:${office.email}`} className="text - zion - cyan hover:underline">;"
</a>
                        </a>;
                      </div>;
                    </div>;
                  </Card>))}
              </div>;"
              <div className="mt - 8 bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden">;"
</div>
                <iframe;"
                  src="https://www.google.com / maps / embed?pb=!1m18 ! 1m12 ! 1m3 ! 1d12615.297199052566 ! 2d - 122.41941455 ! 3d37.7749295 ! 2m3 ! 1f0 ! 2f0 ! 3f0 ! 3m2 ! 1i1024 ! 2i768 ! 4f13.1 ! 3m3 ! 1m2 ! 1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81 ! 2sSan%20Francisco%2C%20CA%2C%20USA ! 5e0 ! 3m2 ! 1sen ! 2suk ! 4v1651234567890 ! 5m2 ! 1sen ! 2suk";""
                  width="100%";""
                  height="300";"
                  style={{ border: 0 }}
                  allowFullScreen={true}"
                  loading="lazy";""
                  referrer_policy="no - referrer - when - downgrade";""
                  title="Zion Office Locations";"
                ></iframe>;
              </div>;"
              <div className="mt - 8">;"
</div>"
                <Card className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 p - 6">;"
</Card>"
                  <div className="flex items - center">;"
</div>"
                    <div className="bg - zion - purple / 20 p - 3 rounded - full mr - 4">;"
</div>"
                      <MessageSquare className="h - 6 w - 6 text - zion - purple" />;"
</MessageSquare>
                    </div>;
                    <div>;
</div>"
                      <h3 className="text - white text - lg font - bold">Live AI Support</h3>;""
                      <p className="text - zion - slate - light">Get instant answers to your questions</p>;"
                    </div>;
                  </div>;
                  <Button;
                    on_click={() => setIsChatOpen (true)}
                    className="w - full mt - 4 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";

<Button;
</Button>
                  <Button;
                    onClick={() => setIsChatOpen(true)}
</Button>
                  <Button;
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >;
                    Chat With Our AI Assistant;
</Button>

                  </Button>;
                </Card>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              Our customer support team is available 24 / 7 to help you with any questions.;
            </p>;
            <div className="flex flex - col sm:flex - row justify - center gap-4">;
              <Button;
                on_click={() => setIsChatOpen (true)}
                className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
              >;

<<<<<<< HEAD
              </Button>;
              <Button;"
                variant="outline";


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Email Support;
                </a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {/* Chat Assistant Modal */}
      {isChatOpen && (;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }}
          onSendMessage={handleSendMessage}
        />;
      )}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </AppLayout>;
  );
}


<<<<<<< HEAD

=======
    </AppLayout>;
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Chat Assistant Modal */}
      {isChatOpen && (
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  const handleSendMessage = async (message: string): Promise<void> => {
</void>
  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

  const handleSendMessage = async (message: string): Promise<void> => {;
  const handle_change = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
  // TODO: Implement
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
;
  const handle_submit = (e: React.FormEvent) =>: any {
  // TODO: Implement
    e.prevent_default (),
    try {
  // TODO: Implement
      // Basic validation with Zod;
      const schema = z.object ({)
        name: z.string ().min (2, "Name must be at least 2 characters");""
        email: z.string ().email ("Invalid email address"),""
        subject: z.string ().min (2, "Subject must be at least 2 characters");""
        message: z.string ().min (10, "Message must be at least 10 characters");"
      });
      schema.parse (form_data);
      // Simulate form submission;
      setIsSubmitting (true);
      set_timeout (() => {
        setIsSubmitting (false);
        toast ({"
          title: "Message Sent",")"
          description: "We've received your message and will get back to you soon."}),"
        // Reset form;
        setFormData ({"
          name: "",""
          email: "",""
          subject: "",""
          message: "";")
      }, 1500);
    } catch (error) {
      // Check condition;
if ( {) {
  $2;
          title: "Form Validation Error","
          description: error.errors[0].message,"
          variant: "destructive";")
      } else {
  // TODO: Implement
          title: "An error occurred",""
          description: "Please try again later",""
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {
  // TODO: Implement
}"
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {""
        method: "POST","
        headers: {"
          "Content - Type": "application / json"}"
        body: JSON.stringify ({,"
  messages: [{ role: "user", content: message }];")
        })});
      // Check condition;
        throw new Error ("Failed to get response from AI assistant");"
      return Promise.resolve ();
    } catch (error) {"
      console.error ("Error in AI chat:", error);"
        title: "Chat Error",""
        description: "There was an error communicating with our AI assistant. Please try again.",""
  const offices = [;

      return Promise && Promise.resolve();
    {"
      name: "Headquarters"","
  address: "123 Tech Avenue, San Francisco, CA 94105";"
  };

    {;"
      name: "Headquarters",;""
      address: "123 Tech Avenue, San Francisco, CA 94105";""
      phone: "+1 302 464 0950",;""
      email: "commercial@ziontechgroup && ziontechgroup.com";"
      name: "East Coast Office",;""
      address: "456 Innovation Street, New York, NY 10001";""
      phone: "+1 302 464 0950", ;""
    }]
  ];
  },

  const offices = [
      name: "Headquarters",""
      address: "123 Tech Avenue, San Francisco, CA 94105",""
      phone: "+1 302 464 0950",""
      email: "commercial@ziontechgroup.com""
      name: "East Coast Office",""
      address: "456 Innovation Street, New York, NY 10001",""
  ],

  return (

    <AppLayout>;

      <SEO;"
        title="Contact Zion - Get in Touch"""
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform."""
        keywords="contact Zion, AI marketplace support, tech platform contact"""
        canonical="https://app && app.ziontechgroup.com/contact""
      />;
"
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;"
</main>"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"

          </div>;"
          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text - center">;"
</div>"
          <div className="text-center mb-16">;"
</div>
            <GradientHeading>Contact Us;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;"
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;""
              <p className="text-zion-slate-light text-lg mb-8">;"
              </p>;"
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;"
                    <Input;"
                      id="name"""
                      name="name""
                      value={formData && formData.name}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white"""
                      placeholder="John Doe""
                      required;

                  </div>;
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;"
                      id="email"""
                      name="email"""
                      type="email""
                      value={formData && formData.email}
                      placeholder="john@example && example.com""

                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;"
                    id="subject"""
                    name="subject""
                    value={formData && formData.subject}
                    placeholder="How can we help you?""

                  <label htmlFor="message" className="block text-white mb-2">Message</label>;"
                  <Textarea;"
                    id="message"""
                    name="message""
                    value={formData && formData.message}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"""
                    placeholder="Tell us what you'd like to know...""

                <Button;"
                  type="submit"""
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                  disabled={isSubmitting}>;

                  type="submit""
)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

        title="Contact Zion - Get in Touch";""
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";""
        keywords="contact Zion, AI marketplace support, tech platform contact";""
        canonical="https://app.ziontechgroup.com/contact";"
                      id="name";""
                      name="name";"
                      value={formData.name}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";""
                      placeholder="John Doe";"

                      id="email";""
                      name="email";""
                      type="email";"
                      value={formData.email}
                      placeholder="john@example.com";"

                    id="subject";""
                    name="subject";"
                    value={formData.subject}
                    placeholder="How can we help you?";"

                    id="message";""
                    name="message";"
                    value={formData.message}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]";""
                    placeholder="Tell us what you'd like to know...";"

                  type="submit";""
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"
                  disabled={isSubmitting}
                >;

              </form>;
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;""
              <div className="grid grid-cols-1 gap-6">;"
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">;"
                    <h3 className="text-xl font-bold text-white mb-3">{office && office.name}</h3>;""
                    <div className="space-y-3">;"
                      <div className="flex items-start">;"
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />;"
                        <span className="text-zion-slate-light">{office && office.address}</span>;"
                      <div className="flex items-center">;"
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
                        <span className="text-zion-slate-light">{office && office.phone}</span>;"
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
                        <a href={`mailto:${office && office.email}`} className="text-zion-cyan hover:underline">;"
</a>
                        </a>;
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;"
                <iframe;"
                  src="https://www && www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615 && 1d12615.297199052566!2d-122 && 122.41941455!3d37 && 3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 && 4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk"""
                  width="100%"""
                  height="300""
                  style={{ border: 0 }} 
                  allowFullScreen={true} "
                  loading="lazy"""
                  referrerPolicy="no-referrer-when-downgrade"""
                  title="Zion Office Locations"></iframe>;"
              <div className="mt-8">;"
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;"
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;"
                      <MessageSquare className="h-6 w-6 text-zion-purple" />;"

                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>;""
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>;"
                  <Button;
                    onClick={() => setIsChatOpen(true)}

        canonical="https://app.ziontechgroup.com / contact";"
      <main className="min - h-screen bg - zion - blue pt - 24 pb - 20">;"
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
          <div className="text - center mb - 16">;"
            <GradientHeading > Contact Us;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 mb - 24">;"
              <h2 className="text - 3xl font - bold text - white mb - 6">Get in Touch</h2>;""
              <p className="text - zion - slate - light text - lg mb - 8">;"
              <form on_submit={handle_submit} className="space - y-6">;"
                <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;"
                    <label html_for="name" className="block text - white mb - 2">Your Name</label>;"
                      value={form_data.name}
                      on_change={handle_change}"
                      className="bg - zion - blue - dark border - zion - blue - light text - white";""

                    <label html_for="email" className="block text - white mb - 2">Email Address</label>;"
                      value={form_data.email}

                  <label html_for="subject" className="block text - white mb - 2">Subject</label>;"
                    value={form_data.subject}

                  <label html_for="message" className="block text - white mb - 2">Message</label>;"
                    value={form_data.message}
                    className="bg - zion - blue - dark border - zion - blue - light text - white min - h-[150px]";""

                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"
                  disabled={is_submitting}

              <h2 className="text - 3xl font - bold text - white mb - 6">Our Offices</h2>;""
              <div className="grid grid - cols - 1 gap - 6">;"
                  <Card key={index} className="bg - zion - blue - dark border border - zion - blue - light p - 6">;"
                    <h3 className="text - xl font - bold text - white mb - 3">{office.name}</h3>;""
                    <div className="space - y-3">;"
                      <div className="flex items - start">;"
                        <MapPin className="w - 5 h - 5 text - zion - cyan mr - 3 mt - 1 flex - shrink - 0" />;"
                        <span className="text - zion - slate - light">{office.address}</span>;"
                      <div className="flex items - center">;"
                        <Phone className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"
                        <span className="text - zion - slate - light">{office.phone}</span>;"
                        <Mail className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"
"`;
                        <a href={`mailto:${office.email}`} className="text - zion - cyan hover:underline">;"
                  ))}
              <div className="mt - 8 bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden">;"
                  src="https://www.google.com / maps / embed?pb=!1m18 ! 1m12 ! 1m3 ! 1d12615.297199052566 ! 2d - 122.41941455 ! 3d37.7749295 ! 2m3 ! 1f0 ! 2f0 ! 3f0 ! 3m2 ! 1i1024 ! 2i768 ! 4f13.1 ! 3m3 ! 1m2 ! 1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81 ! 2sSan%20Francisco%2C%20CA%2C%20USA ! 5e0 ! 3m2 ! 1sen ! 2suk ! 4v1651234567890 ! 5m2 ! 1sen ! 2suk";""
                  width="100%";""
                  height="300";"
                  allowFullScreen={true}"
                  loading="lazy";""
                  referrer_policy="no - referrer - when - downgrade";""
                  title="Zion Office Locations";"
                ></iframe>;
              <div className="mt - 8">;"
                <Card className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 p - 6">;"
                    <div className="bg - zion - purple / 20 p - 3 rounded - full mr - 4">;"
                      <MessageSquare className="h - 6 w - 6 text - zion - purple" />;"

                      <h3 className="text - white text - lg font - bold">Live AI Support</h3>;""
                      <p className="text - zion - slate - light">Get instant answers to your questions</p>;"
                    on_click={() => setIsChatOpen (true)}

          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text - center">;"
            <h2 className="text - 3xl font - bold text - white mb - 6">Need immediate assistance?</h2>;""
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx - auto">;"
            <div className="flex flex - col sm:flex - row justify - center gap - 4">;"
                <MessageSquare className="mr - 2 h - 5 w - 5" />;"

                variant="outline";""
                className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10";"
                as_child;
                <a href="mailto:support@ziontechgroup.com">;"
</a>"
                  <Mail className="mr - 2 h - 5 w - 5" />;"

      </main>;
        <ChatAssistant;
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}

          is_open={isChatOpen}
          on_close={() => setIsChatOpen (false)}

            role: 'Support Bot';
          }}
          onSendMessage={handleSendMessage}
        />)}

    </AppLayout>);


            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </AppLayout>
  )
}
    </AppLayout>;
  );

}
;
<<<<<<< HEAD


=======
    </AppLayout>
    </AppLayout>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
