<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
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

export default function Contact() {
  const [formData, setFormData] = useState({
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
=======
import React from 'react';import {useState} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react';import {useState} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react';
import {useState} from "react";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from 'react';import {useState} from "react";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {AppLayout} from "@/layout/AppLayout";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {AppLayout} from "@/layout/AppLayout";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function Contact() {;
  const [formData, setFormData] = useState({;
    name: "",;
    email: "",;
    subject: "",;
    message: "";

  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { AppLayout } from "@/layout/AppLayout";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react",
import { AppLayout } from "@/layout/AppLayout",
export default function Contact() {
  const [formData, setFormData] = useState({

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
    name: ""
    email: ""
    subject: ""
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
    name: ""
    email: ""
    subject: ""
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function Contact() {;
  const [formData, setFormData] = useState({;
    name: "",;
    email: "",;
    subject: "",;
    message: "";

  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



import {useState} from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {SEO} from "@/components/SEO";"
import {GradientHeading} from "@/components/GradientHeading";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Textarea} from "@/components/ui/textarea";"
import {Card} from "@/components/ui/card";"
import {toast} from "@/components/ui/use-toast";"
import z from "zod";"
import {ChatAssistant} from "@/components/ChatAssistant";"
import {Mail, MessageSquare, MapPin, Phone} from "lucide-react";"
import {AppLayout} from "@/layout/AppLayout";
"
import { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { SEO } from "@/components/SEO","
import { GradientHeading } from "@/components/GradientHeading","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Card } from "@/components/ui/card","
import { toast } from "@/components/ui/use-toast","
import z from "zod","
import { ChatAssistant } from "@/components/ChatAssistant",";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";"
import { AppLayout } from "@/layout/AppLayout";"
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react","
import { AppLayout } from "@/layout/AppLayout",
export default function Contact() {}
  const [formData, setFormData] = useState({}
export default function Contact() {}
  const [formData, setFormData] = useState({"
    name: "","
    email: "","
    subject: "",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    message: "";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),


<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  },


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
      const schema = z.object({
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
        name: z.string().min(2, "Name must be at least 2 characters");
        email: z.string().email("Invalid email address")
        subject: z.string().min(2, "Subject must be at least 2 characters");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        message: z.string().min(10, "Message must be at least 10 characters")
      });
      schema.parse(formData);
      // Simulate form submission
<<<<<<< HEAD
      setIsSubmitting(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        subject: z.string().min(2, "Subject must be at least 2 characters"),
        message: z.string().min(10, "Message must be at least 10 characters")
      }),
      
      schema.parse(formData),
      
      // Simulate form submission
      setIsSubmitting(true),
      
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      setTimeout(() => {
        setIsSubmitting(false);
=======
      setTimeout(() => {
=======

  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault();
    try {};
      // Basic validation with Zod;
      const schema = z.object({}
"
        message: z.string().min(10, "Message must be at least 10 characters")
      });
      schema.parse(formData);
      // Simulate form submission;
      setTimeout(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


  },



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Handle sending messages to the AI chat assistant
=======
import {AppLayout} from "@/layout/AppLayout";    message: ""
=======

message: "";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
    message: ""
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

  },

}
  },
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
<<<<<<< HEAD
      const schema = z.object({  // Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {AppLayout} from "@/layout/AppLayout";    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
      const schema = z.object({  // Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      const schema = z.object({

name: z.string().min(2, "Name must be at least 2 characters");
        email: z.string().email("Invalid email address")
        subject: z.string().min(2, "Subject must be at least 2 characters");
        message: z.string().min(10, "Message must be at least 10 characters")
      });
      schema.parse(formData);
      // Simulate form submission
      setIsSubmitting(true);
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        subject: z.string().min(2, "Subject must be at least 2 characters"),
        message: z.string().min(10, "Message must be at least 10 characters")
      }),
      schema.parse(formData),
      // Simulate form submission
      setIsSubmitting(true),


      setTimeout(() => {
        setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitting(false),
setTimeout(() => {
        setIsSubmitting(false),
        toast({
          title: "Message Sent"
          description: "We've received your message and will get back to you soon."})
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

}
  },
  // Handle sending messages to the AI chat assistant
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import {AppLayout} from "@/layout/AppLayout";    message: ""
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Basic validation with Zod
      const schema = z.object({  // Handle sending messages to the AI chat assistant
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
<<<<<<< HEAD
<<<<<<< HEAD
        method: "method",
    headers: {
=======
        method: "POST"
        headers: {


>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
        method: "POST"
        headers: {
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
          "Content-Type": "application/json"}
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD


  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {}
    try {"
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {"
        method: "POST"
        headers: {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"Content-Type": "application/json"}
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })});
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),
<<<<<<< HEAD
<<<<<<< HEAD
=======
      


>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error);
      console.error("Error in AI chat:", error),
console.error("Error in AI chat:", error),
      toast({
        title: "Chat Error"
        description: "There was an error communicating with our AI assistant. Please try again."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      if (!response.ok) {"
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {}
"
      console.error("Error in AI chat:", error),

      toast({"
        title: "Chat Error""
        description: "There was an error communicating with our AI assistant. Please try again.""
        variant: "destructive"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        variant: "destructive"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;

    try {;
      // Basic validation with Zod;
<<<<<<< HEAD
      const schema = z && z.object({;"
        name: z && z.string().min(2, "Name must be at least 2 characters");"
        email: z && z.string().email("Invalid email address"),;"
        subject: z && z.string().min(2, "Subject must be at least 2 characters");"
        message: z && z.string().min(10, "Message must be at least 10 characters");
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
<<<<<<< HEAD
      return Promise && Promise.resolve();
=======
=======
      const schema = z && z.object({;
        name: z && z.string().min(2, "Name must be at least 2 characters");
        email: z && z.string().email("Invalid email address"),;
        subject: z && z.string().min(2, "Subject must be at least 2 characters");
        message: z && z.string().min(10, "Message must be at least 10 characters");
      });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      schema && schema.parse(formData);

      // Simulate form submission;
      setIsSubmitting(true);

      setTimeout(() => {;
        setIsSubmitting(false);
<<<<<<< HEAD
        toast({;"
          title: "Message Sent",;'"
          description: "We've received your message and will get back to you soon."}),;

        // Reset form;
        setFormData({;"
          name: "",;"
          email: "",;"
          subject: "",;"
=======
        toast({;
          title: "Message Sent",;
          description: "We've received your message and will get back to you soon."}),;

        // Reset form;
        setFormData({;
          name: "",;
          email: "",;
          subject: "",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          message: "";
        });
      }, 1500);
    } catch (error) {;
      if (error instanceof z && z.ZodError) {;
<<<<<<< HEAD
        toast({;"
          title: "Form Validation Error",;
          description: error && error.errors[0].message,;"
          variant: "destructive";
        });
      } else {;
        toast({;"
          title: "An error occurred",;"
          description: "Please try again later",;"
          variant: "destructive";
        });
      }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
<<<<<<< HEAD

=======
=======
        toast({;
          title: "Form Validation Error",;
          description: error && error.errors[0].message,;
          variant: "destructive";
        });
      } else {;
        toast({;
          title: "An error occurred",;
          description: "Please try again later",;
          variant: "destructive";
        });
      }
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };

  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
<<<<<<< HEAD
    try {;"
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;"
        method: "POST",;
        headers: {;"
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;"
          messages: [{ role: "user", content: message }] ;
        })});

      if (!response && response.ok) {;"
=======
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});

      if (!response && response.ok) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        throw new Error("Failed to get response from AI assistant");
      }

      return Promise && Promise.resolve();
<<<<<<< HEAD
    } catch (error) {;"
      console && console.error("Error in AI chat:", error);
      toast({;"
        title: "Chat Error",;"
        description: "There was an error communicating with our AI assistant. Please try again.",;"
        variant: "destructive";

=======
    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      toast({;
        title: "Chat Error",;
        description: "There was an error communicating with our AI assistant. Please try again.",;
        variant: "destructive";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      });
      return Promise && Promise.resolve();
    }

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======

'
import { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { SEO } from '@/components / SEO';'
import { GradientHeading } from '@/components / GradientHeading';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Card } from '@/components / ui / card';'
import { toast } from '@/components / ui / use - toast';'
import z from './zod';'
import { ChatAssistant } from '@/components / ChatAssistant';'
import { Mail, MessageSquare, MapPin, Phone } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AppLayout } from '@/layout / AppLayout';
export default /**;
 * Contact - Function description;
 */
function Contact() {}
  const [form_data, setFormData] = useState ({"
    name: "","
    email: "","
    subject: "","
=======
import { AppLayout } from '@/layout / AppLayout';
export default /**
 * Contact - Function description
 */
function Contact() {
  const [form_data, setFormData] = useState ({
    name: "",
    email: "",
    subject: "",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    message: "";
  });
  const [is_submitting, setIsSubmitting] = useState (false);
  const [isChatOpen, setIsChatOpen] = useState (false);
;
<<<<<<< HEAD
  const handle_change = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {}
=======
  const handle_change = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
<<<<<<< HEAD
  const handle_submit = (e: React.FormEvent) =>: any {}
    e.prevent_default (),
    try {}
      // Basic validation with Zod;
      const schema = z.object ({"
        name: z.string ().min (2, "Name must be at least 2 characters");"
        email: z.string ().email ("Invalid email address"),"
        subject: z.string ().min (2, "Subject must be at least 2 characters");"
=======
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default (),
    try {
      // Basic validation with Zod;
      const schema = z.object ({
        name: z.string ().min (2, "Name must be at least 2 characters");
        email: z.string ().email ("Invalid email address"),
        subject: z.string ().min (2, "Subject must be at least 2 characters");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        message: z.string ().min (10, "Message must be at least 10 characters");
      });
;
      schema.parse (form_data);
;
      // Simulate form submission;
      setIsSubmitting (true);
;
<<<<<<< HEAD
      set_timeout (() => {}
        setIsSubmitting (false);
        toast ({"
          title: "Message Sent",'"
          description: "We've received your message and will get back to you soon."}),
        // Reset form;
        setFormData ({"
          name: "","
          email: "","
          subject: "","
          message: "";
        });
      }, 1500);
    } catch (error) {}
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Form Validation Error",
          description: error.errors[0].message,"
          variant: "destructive";
        });
      } else {}
        toast ({"
          title: "An error occurred","
          description: "Please try again later","
=======
      set_timeout (() => {
        setIsSubmitting (false);
        toast ({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),
        // Reset form;
        setFormData ({
          name: "",
          email: "",
          subject: "",
          message: "";
        });
      }, 1500);
    } catch (error) {
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Form Validation Error",
          description: error.errors[0].message,
          variant: "destructive";
        });
      } else {
        toast ({
          title: "An error occurred",
          description: "Please try again later",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive";
        });
      }
    }
  }
;
  // Handle sending messages to the AI chat assistant;
<<<<<<< HEAD
  const handleSendMessage = async (message: string): Promise < void> => {}
    try {"
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {"
        method: "POST",
        headers: {"
          "Content - Type": "application / json"}
        body: JSON.stringify ({"
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("Failed to get response from AI assistant");
      }
      return Promise.resolve ();
    } catch (error) {"
      console.error ("Error in AI chat:", error);
      toast ({"
        title: "Chat Error","
        description: "There was an error communicating with our AI assistant. Please try again.","
=======
  const handleSendMessage = async (message: string): Promise < void> => {
    try {
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {
        method: "POST",
        headers: {
          "Content - Type": "application / json"}
        body: JSON.stringify ({
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Failed to get response from AI assistant");
      }
      return Promise.resolve ();
    } catch (error) {
      console.error ("Error in AI chat:", error);
      toast ({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
      return Promise.resolve ();
    }
  }
;
  const offices = [;

<<<<<<< HEAD

      });
      return Promise && Promise.resolve();
    }
    {"
      name: "Headquarters""
=======
      });
      return Promise && Promise.resolve();
    }
    {
      name: "Headquarters"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      address: "123 Tech Avenue, San Francisco, CA 94105";

{
      name: "Headquarters"
      address: "123 Tech Avenue, San Francisco, CA 94105";
  };

  const offices = [;
<<<<<<< HEAD
    {;"
      name: "Headquarters",;"
      address: "123 Tech Avenue, San Francisco, CA 94105";"
      phone: "+1 302 464 0950",;"
      email: "commercial@ziontechgroup && ziontechgroup.com";
    };
    {;"
      name: "East Coast Office",;"
      address: "456 Innovation Street, New York, NY 10001";"
      phone: "+1 302 464 0950", ;"
      email: "commercial@ziontechgroup && ziontechgroup.com";




  },

  const offices = []
    {"
      name: "Headquarters","
      address: "123 Tech Avenue, San Francisco, CA 94105","
      phone: "+1 302 464 0950","
      email: "commercial@ziontechgroup.com"
    },
    {"
      name: "East Coast Office","
      address: "456 Innovation Street, New York, NY 10001","
      phone: "+1 302 464 0950", "
=======
    {;
      name: "Headquarters",;
      address: "123 Tech Avenue, San Francisco, CA 94105";
      phone: "+1 302 464 0950",;
      email: "commercial@ziontechgroup && ziontechgroup.com";
    };
    {;
      name: "East Coast Office",;
      address: "456 Innovation Street, New York, NY 10001";
      phone: "+1 302 464 0950", ;
      email: "commercial@ziontechgroup && ziontechgroup.com";

    }
  ];
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
  },

  const offices = [
    {
      name: "Headquarters",
      address: "123 Tech Avenue, San Francisco, CA 94105",
      phone: "+1 302 464 0950",
      email: "commercial@ziontechgroup.com"
    },
    {
      name: "East Coast Office",
      address: "456 Innovation Street, New York, NY 10001",
      phone: "+1 302 464 0950", 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      email: "commercial@ziontechgroup.com"
    }
  ],

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:underline">
=======
                          {office.email}
                        </Link>
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
                  style={{ border: 0 }}
                  allowFullScreen={true}
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
                    onClick={() => setIsChatOpen(true)}
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
                onClick={() => setIsChatOpen(true)}
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
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    <AppLayout>;
<<<<<<< HEAD
=======
        variant: "destructive"    <AppLayout>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        variant: "destructive"    <AppLayout>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (

}
  ];
  return (
    <AppLayout>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      console.error("Error in AI chat:", error),      console.error("Error in AI chat:", error),
      toast({
        title: "Chat Error"
        description: "There was an error communicating with our AI assistant. Please try again."
        variant: "destructive"    <AppLayout>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <SEO
        title="Contact Zion - Get in Touch" 
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." 
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://app && app.ziontechgroup.com/contact"
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

;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else, ;
                our team is ready to answer all your questions.;
              </p>;

;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;

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
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="John Doe"
                      required

<Input ;
                      id="name";
                      name="name";
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";
                      placeholder="John Doe";
                      required;
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;

/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData && formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="john@example && example.com"
                      required

                    />;
                  </div>;
                </div>;

                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;

/>;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;
                  <Input
                    id="subject"
                    name="subject"
                    value={formData && formData.subject}
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

                  />;
                </div>;

                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;

/>;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;
                  <Textarea
                    id="message"
                    name="message"
                    value={formData && formData.message}
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

                  />;
                </div>;

                <Button
                  type="submit" 


                <Button 
                  type="submit" 

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}

/>;
                </div>;
                <Button
                  type="submit" 

                <Button 
                  type="submit" 

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
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
          title: "Message Sent",;
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
          title: "Form Validation Error",;
          description: error.errors[0].message,;
          variant: "destructive";
        });
      } else {;
        toast({;
          title: "An error occurred",;
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
        title: "Chat Error",;
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
=======
      <SEO"
        title="Contact Zion - Get in Touch" "
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform." "
        keywords="contact Zion, AI marketplace support, tech platform contact""
        canonical="https://app && app.ziontechgroup.com/contact"

      />;"
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;'
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;"
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;"
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else,;
                our team is ready to answer all your questions.;
              </p>;
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className="space-y-6">;
=======
"
              <form onSubmit={handleSubmit} className="space-y-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                    <Input;
                      id="name";
                      name="name";
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";
                      placeholder="John Doe";
                      required;
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;
                    <Input;
                      id="email";
                      name="email";
                      type="email";
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";
                      placeholder="john@example.com";
                      required;
                    />;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;
                  <Input;
                    id="subject";
                    name="subject";
                    value={formData.subject}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
                  {isSubmitting ? "Sending..." : "Send Message"}
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD

=======

                  />;
                </div>;
                <Button
                  type="submit" 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                <Button 
                  type="submit" 

                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;
=======

                    <Input"
                      id="name""
                      name="name"
                      value={formData && formData.name}



                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white""
                      placeholder="John Doe"
                      required;
                    />;
                  </div>;
                  <div>;"
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;



                    <Input"
                      id="email""
                      name="email""
                      type="email"

                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white""
                      placeholder="john@example && example.com"
                      required;
                  <Input"
                    id="subject""
                    name="subject"
                    value={formData && formData.subject}



                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white""
                    placeholder="How can we help you?"
                    required;
                  <Textarea"
                    id="message""
                    name="message"
                    value={formData && formData.message}



                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"'"
                    placeholder="Tell us what you'd like to know..."
                    required;
                  />;
                </div>;

                <Button"
                  type="submit" 

"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  {isSubmitting ? "Sending..." : "Send Message"}






                  />;
                </div>;
                <Button"
                  type="submit" 



                <Button "
                  type="submit" 
"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;"
                  {isSubmitting ? "Sending..." : "Send Message"}



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
          title: "Message Sent",;'"
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
          title: "Form Validation Error",;
          description: error.errors[0].message,;"
          variant: "destructive";
        });
      } else {;
        toast({;"
          title: "An error occurred",;"
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
        title: "Chat Error",;"
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


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
                </Button>;
              </form>;
            </div>;

            <div>;"
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;"
              <div className="grid grid-cols-1 gap-6">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                {offices && offices.map((office, index) => (;
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">;
                    <h3 className="text-xl font-bold text-white mb-3">{office && office.name}</h3>;
                    <div className="space-y-3">;
                      <div className="flex items-start">;
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />;
                        <span className="text-zion-slate-light">{office && office.address}</span>;
                      </div>;
                      <div className="flex items-center">;
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                        <span className="text-zion-slate-light">{office && office.phone}</span>;
                      </div>;
                      <div className="flex items-center">;
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                        <a href={`mailto:${office && office.email}`} className="text-zion-cyan hover:underline">;
                          {office && office.email}
                        </a>;
                      </div>;
                    </div>;
                  </Card>;
                ))}
              </div>;

              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;
                <iframe
                  src="https://www && www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615 && 1d12615.297199052566!2d-122 && 122.41941455!3d37 && 3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 && 4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Locations"></iframe>;
              </div>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Input ;
                      id="email";
                      name="email";
                      type="email";
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white";
                      placeholder="john@example.com";
                      required;
                    />;
                  </div>;
                </div>;
                ;
                <div>;
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;
                  <Input ;
                    id="subject";
                    name="subject";
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white";
                    placeholder="How can we help you?";
                    required;
                  />;
                </div>;
                ;
                <div>;
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;
                  <Textarea ;
                    id="message";
                    name="message";
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]";
                    placeholder="Tell us what you'd like to know...";
                    required;
                  />;
                </div>;
                ;
                <Button ;
                  type="submit" ;
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  disabled={isSubmitting}
                >;
                  {isSubmitting ? "Sending..." :"Send Message"}
                </Button>;
              </form>;
            </div>;
            ;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;
              <div className="grid grid-cols-1 gap-6">;
                {offices.map((office, index) => (;
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">;
                    <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>;
                    <div className="space-y-3">;
                      <div className="flex items-start">;
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />;
                        <span className="text-zion-slate-light">{office.address}</span>;
                      </div>;
                      <div className="flex items-center">;
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                        <span className="text-zion-slate-light">{office.phone}</span>;
                      </div>;
                      <div className="flex items-center">;
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:underline">;
                          {office.email}
              ;
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;
                <iframe ;
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" ;
                  width="100%" ;
                  height="300" ;
                  style={{ border:0 }} ;
                  allowFullScreen={true} ;
                  loading="lazy" ;
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>;
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;
                <iframe;
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk";
                  width="100%";
                  height="300";
                  style={{ border: 0 }} ;
                  allowFullScreen={true} ;
                  loading="lazy";
                  referrerPolicy="no-referrer-when-downgrade";
                  title="Zion Office Locations";
                ></iframe>;
              </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <div className="mt-8">;
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;
                  <div className="flex items-center">;
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;
=======

                {offices && offices.map((office, index) => (;"
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">;"
                    <h3 className="text-xl font-bold text-white mb-3">{office && office.name}</h3>;"
                    <div className="space-y-3">;"
                      <div className="flex items-start">;"
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />;"
                        <span className="text-zion-slate-light">{office && office.address}</span>;
                      </div>;"
                      <div className="flex items-center">;"
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
                        <span className="text-zion-slate-light">{office && office.phone}</span>;
                      </div>;"
                      <div className="flex items-center">;"
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
                        <a href={`mailto:${office && office.email}`} className="text-zion-cyan hover:underline">;
                          {office && office.email}
                        </a>;
                      </div>;
                    </div>;
                  </Card>;
                ))}
              </div>;
"
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;
                <iframe"
                  src="https://www && www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615 && 1d12615.297199052566!2d-122 && 122.41941455!3d37 && 3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 && 4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" "
                  width="100%" "
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} "
                  loading="lazy" "
                  referrerPolicy="no-referrer-when-downgrade""
                  title="Zion Office Locations"></iframe>;
              </div>;



"
              <div className="mt-8">;"
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;"
                  <div className="flex items-center">;"
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <MessageSquare className="h-6 w-6 text-zion-purple" />;
                    </div>;
                    <div>;"
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>;"
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
<<<<<<< HEAD
=======
      phone: "+1 302 464 0950",
=======

                  <Button;
                    onClick={() => setIsChatOpen(true)}"
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"
      phone: "+1 302 464 0950","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      email: "commercial@ziontechgroup.com";
    }
    {"
      name: "East Coast Office","
      address: "456 Innovation Street, New York, NY 10001";"
      phone: "+1 302 464 0950","
=======
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
      phone: "+1 302 464 0950",
      email: "commercial@ziontechgroup.com";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
</HTMLInputElement>
  const handleSendMessage = async (message: string): Promise<void> => {
</void>
  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
</HTMLInputElement>
  const handleSendMessage = async (message: string): Promise<void> => {;
</void>
  const handle_change = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
  // TODO: Implement
}
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
  const handle_submit = (e: React.FormEvent) =>: any {
  // TODO: Implement
}
    e.prevent_default (),
    try {
  // TODO: Implement
}
      // Basic validation with Zod;
      const schema = z.object ({)'
        name: z.string ().min (2, "Name must be at least 2 characters");""
        email: z.string ().email ("Invalid email address"),""
        subject: z.string ().min (2, "Subject must be at least 2 characters");""
        message: z.string ().min (10, "Message must be at least 10 characters");"
      });
;
      schema.parse (form_data);
;
      // Simulate form submission;
      setIsSubmitting (true);
;
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
        });
      }, 1500);
    } catch (error) {
      // Check condition;
if ( {) {
  $2;
}
        toast ({"
          title: "Form Validation Error","
          description: error.errors[0].message,"
          variant: "destructive";")
        });
      } else {
  // TODO: Implement
}
        toast ({"
          title: "An error occurred",""
          description: "Please try again later",""
          variant: "destructive";")
        });
      }
    }
<<<<<<< HEAD
    {
      name: "East Coast Office",
      address: "456 Innovation Street, New York, NY 10001";
      phone: "+1 302 464 0950",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      email: "commercial@ziontechgroup.com";
=======
  }
;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {
    try {
  // TODO: Implement
}"
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {""
        method: "POST","
        headers: {"
          "Content - Type": "application / json"}"
        body: JSON.stringify ({,"
  messages: [{ role: "user", content: message }];")
        })});
;
      // Check condition;
if ( {) {
  $2;
}"
        throw new Error ("Failed to get response from AI assistant");"
      }
      return Promise.resolve ();
    } catch (error) {"
      console.error ("Error in AI chat:", error);"
      toast ({"
        title: "Chat Error",""
        description: "There was an error communicating with our AI assistant. Please try again.",""
        variant: "destructive";")
      });
      return Promise.resolve ();
    }
  }
;
  const offices = [;

      });
      return Promise && Promise.resolve();
    }
    {"
      name: "Headquarters"","
  address: "123 Tech Avenue, San Francisco, CA 94105";"
  };

  const offices = [;
    {;"
      name: "Headquarters",;""
      address: "123 Tech Avenue, San Francisco, CA 94105";""
      phone: "+1 302 464 0950",;""
      email: "commercial@ziontechgroup && ziontechgroup.com";"
    };
    {;"
      name: "East Coast Office",;""
      address: "456 Innovation Street, New York, NY 10001";""
      phone: "+1 302 464 0950", ;""
      email: "commercial@ziontechgroup && ziontechgroup.com";"
    }]
  ];
  },

  const offices = [
    {"
      name: "Headquarters",""
      address: "123 Tech Avenue, San Francisco, CA 94105",""
      phone: "+1 302 464 0950",""
      email: "commercial@ziontechgroup.com""
    },
    {"
      name: "East Coast Office",""
      address: "456 Innovation Street, New York, NY 10001",""
      phone: "+1 302 464 0950",""
      email: "commercial@ziontechgroup.com""
    }]
  ],


  return (

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
  ];
  return (
    <AppLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
      <SEO;"
        title="Contact Zion - Get in Touch";"
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";"
        keywords="contact Zion, AI marketplace support, tech platform contact";"
        canonical="https://app.ziontechgroup.com / contact";
      />;"
      <main className="min - h-screen bg - zion - blue pt - 24 pb - 20">;"
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
          <div className="text - center mb - 16">;
            <GradientHeading > Contact Us</GradientHeading>;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;'
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;"
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 mb - 24">;
            <div>;"
              <h2 className="text - 3xl font - bold text - white mb - 6">Get in Touch</h2>;"
              <p className="text - zion - slate - light text - lg mb - 8">;
                Whether you have a question about our platform, pricing, or anything else,
                our team is ready to answer all your questions.;
              </p>;"
              <form on_submit={handle_submit} className="space - y-6">;"
                <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;
                  <div>;"
                    <label html_for="name" className="block text - white mb - 2">Your Name</label>;
                    <Input;"
                      id="name";"
                      name="name";
                      value={form_data.name}
                      on_change={handle_change}"
                      className="bg - zion - blue - dark border - zion - blue - light text - white";"
=======
      <SEO;
        title="Contact Zion - Get in Touch";
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";
        keywords="contact Zion, AI marketplace support, tech platform contact";
        canonical="https://app.ziontechgroup.com / contact";
=======
</AppLayout>
      <SEO;"
        title="Contact Zion - Get in Touch"""
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform."""
        keywords="contact Zion, AI marketplace support, tech platform contact"""
        canonical="https://app && app.ziontechgroup.com/contact""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      />;
</SEO>"
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;"
</main>"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="text-center mb-16">;"
</div>
            <GradientHeading>Contact Us</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;"
</div>
            <div>;
</div>"
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;""
              <p className="text-zion-slate-light text-lg mb-8">;"
</p>
              </p>;"
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
                  <div>;
<<<<<<< HEAD
                    <label html_for="name" className="block text - white mb - 2">Your Name</label>;
                    <Input;
                      id="name";
                      name="name";
                      value={form_data.name}
                      on_change={handle_change}
                      className="bg - zion - blue - dark border - zion - blue - light text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      placeholder="John Doe";
=======
</div>"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;"
                    <Input;"
                      id="name"""
                      name="name""
                      value={formData && formData.name}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white"""
                      placeholder="John Doe""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      required;
                    />;
</Input>
                  </div>;
<<<<<<< HEAD
                  <div>;"
                    <label html_for="email" className="block text - white mb - 2">Email Address</label>;
                    <Input;"
                      id="email";"
                      name="email";"
                      type="email";
                      value={form_data.email}
                      on_change={handle_change}"
                      className="bg - zion - blue - dark border - zion - blue - light text - white";"
=======
                  <div>;
<<<<<<< HEAD
                    <label html_for="email" className="block text - white mb - 2">Email Address</label>;
                    <Input;
                      id="email";
                      name="email";
                      type="email";
                      value={form_data.email}
                      on_change={handle_change}
                      className="bg - zion - blue - dark border - zion - blue - light text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      placeholder="john@example.com";
=======
</div>"
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;"
                    <Input;"
                      id="email"""
                      name="email"""
                      type="email""
                      value={formData && formData.email}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white"""
                      placeholder="john@example && example.com""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      required;
                    />;
</Input>
                  </div>;
                </div>;
<<<<<<< HEAD
                <div>;"
                  <label html_for="subject" className="block text - white mb - 2">Subject</label>;
                  <Input;"
                    id="subject";"
                    name="subject";
                    value={form_data.subject}
                    on_change={handle_change}"
                    className="bg - zion - blue - dark border - zion - blue - light text - white";"
=======
                <div>;
<<<<<<< HEAD
                  <label html_for="subject" className="block text - white mb - 2">Subject</label>;
                  <Input;
                    id="subject";
                    name="subject";
                    value={form_data.subject}
                    on_change={handle_change}
                    className="bg - zion - blue - dark border - zion - blue - light text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    placeholder="How can we help you?";
=======
</div>"
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;"
                  <Input;"
                    id="subject"""
                    name="subject""
                    value={formData && formData.subject}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white"""
                    placeholder="How can we help you?""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    required;
                  />;
</Input>
                </div>;
<<<<<<< HEAD
                <div>;"
                  <label html_for="message" className="block text - white mb - 2">Message</label>;
                  <Textarea;"
                    id="message";"
                    name="message";
                    value={form_data.message}
                    on_change={handle_change}"
                    className="bg - zion - blue - dark border - zion - blue - light text - white min - h-[150px]";'"
=======
                <div>;
<<<<<<< HEAD
                  <label html_for="message" className="block text - white mb - 2">Message</label>;
                  <Textarea;
                    id="message";
                    name="message";
                    value={form_data.message}
                    on_change={handle_change}
                    className="bg - zion - blue - dark border - zion - blue - light text - white min - h-[150px]";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    placeholder="Tell us what you'd like to know...";
=======
</div>"
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;"
                  <Textarea;"
                    id="message"""
                    name="message""
                    value={formData && formData.message}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]"""
                    placeholder="Tell us what you'd like to know...""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    required;
                  />;
</Textarea>
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Button;"
                  type="submit";"
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  disabled={is_submitting}
                >;"
=======
                <Button;
                  type="submit";
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  disabled={is_submitting}
                >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  {is_submitting ? "Sending..." : "Send Message"}
=======
                <Button;"
                  type="submit"""
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                  disabled={isSubmitting}>;
</Button>
                </div>;
                <Button;"
                  type="submit""
                <Button;"
                  type="submit"""
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                  disabled={isSubmitting}>;
</Button>)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
</HTMLInputElement>
  const handleSendMessage = async (message: string): Promise<void> => {;
</void>
    <AppLayout>;
</AppLayout>
      <SEO;"
        title="Contact Zion - Get in Touch";""
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.";""
        keywords="contact Zion, AI marketplace support, tech platform contact";""
        canonical="https://app.ziontechgroup.com/contact";"
      />;
</SEO>"
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;"
</main>"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
          <div className="text-center mb-16">;"
</div>
            <GradientHeading>Contact Us</GradientHeading>;"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;"
</div>
            <div>;
</div>"
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;""
              <p className="text-zion-slate-light text-lg mb-8">;"
</p>
              </p>;"
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
                  <div>;
</div>"
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;"
                    <Input;"
                      id="name";""
                      name="name";"
                      value={formData.name}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white";""
                      placeholder="John Doe";"
                      required;
                    />;
</Input>
                  </div>;
                  <div>;
</div>"
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;"
                    <Input;"
                      id="email";""
                      name="email";""
                      type="email";"
                      value={formData.email}
                      onChange={handleChange}"
                      className="bg-zion-blue-dark border-zion-blue-light text-white";""
                      placeholder="john@example.com";"
                      required;
                    />;
</Input>
                  </div>;
                </div>;
                <div>;
</div>"
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>;"
                  <Input;"
                    id="subject";""
                    name="subject";"
                    value={formData.subject}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white";""
                    placeholder="How can we help you?";"
                    required;
                  />;
</Input>
                </div>;
                <div>;
</div>"
                  <label htmlFor="message" className="block text-white mb-2">Message</label>;"
                  <Textarea;"
                    id="message";""
                    name="message";"
                    value={formData.message}
                    onChange={handleChange}"
                    className="bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px]";""
                    placeholder="Tell us what you'd like to know...";"
                    required;
                  />;
</Textarea>
                </div>;
                <Button;"
                  type="submit";""
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"
                  disabled={isSubmitting}
                >;
</Button>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </Button>;
              </form>;
            </div>;
<<<<<<< HEAD
            <div>;"
              <h2 className="text - 3xl font - bold text - white mb - 6">Our Offices</h2>;"
              <div className="grid grid - cols - 1 gap - 6">;
                {offices.map ((office, index) => ("
                  <Card key={index} className="bg - zion - blue - dark border border - zion - blue - light p - 6">;"
                    <h3 className="text - xl font - bold text - white mb - 3">{office.name}</h3>;"
                    <div className="space - y-3">;"
                      <div className="flex items - start">;"
                        <MapPin className="w - 5 h - 5 text - zion - cyan mr - 3 mt - 1 flex - shrink - 0" />;"
                        <span className="text - zion - slate - light">{office.address}</span>;
                      </div>;"
                      <div className="flex items - center">;"
                        <Phone className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"
                        <span className="text - zion - slate - light">{office.phone}</span>;
                      </div>;"
                      <div className="flex items - center">;"
                        <Mail className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;"`
                        <a href={`mailto:${office.email}`} className="text - zion - cyan hover:underline">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          {office.email}
<<<<<<< HEAD
                        </Link>
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
                  style={{ border: 0 }}
                  allowFullScreen={true}
<<<<<<< HEAD
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
                    onClick={() => setIsChatOpen(true)}
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
                onClick={() => setIsChatOpen(true)}
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
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

=======
                  loading="lazy";
                  referrer_policy="no - referrer - when - downgrade";
=======
=======
            <div>;
<<<<<<< HEAD
              <h2 className="text - 3xl font - bold text - white mb - 6">Our Offices</h2>;
              <div className="grid grid - cols - 1 gap - 6">;
                {offices.map ((office, index) => (
                  <Card key={index} className="bg - zion - blue - dark border border - zion - blue - light p - 6">;
                    <h3 className="text - xl font - bold text - white mb - 3">{office.name}</h3>;
                    <div className="space - y-3">;
                      <div className="flex items - start">;
                        <MapPin className="w - 5 h - 5 text - zion - cyan mr - 3 mt - 1 flex - shrink - 0" />;
                        <span className="text - zion - slate - light">{office.address}</span>;
                      </div>;
                      <div className="flex items - center">;
                        <Phone className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;
                        <span className="text - zion - slate - light">{office.phone}</span>;
                      </div>;
                      <div className="flex items - center">;
                        <Mail className="w - 5 h - 5 text - zion - cyan mr - 3 flex - shrink - 0" />;
                        <a href={`mailto:${office.email}`} className="text - zion - cyan hover:underline">;
                          {office.email}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        </a>;
                      </div>;
                    </div>;
                  </Card>))}
<<<<<<< HEAD
              </div>;"
              <div className="mt - 8 bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden">;
                <iframe;"
                  src="https://www.google.com / maps / embed?pb=!1m18 ! 1m12 ! 1m3 ! 1d12615.297199052566 ! 2d - 122.41941455 ! 3d37.7749295 ! 2m3 ! 1f0 ! 2f0 ! 3f0 ! 3m2 ! 1i1024 ! 2i768 ! 4f13.1 ! 3m3 ! 1m2 ! 1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81 ! 2sSan%20Francisco%2C%20CA%2C%20USA ! 5e0 ! 3m2 ! 1sen ! 2suk ! 4v1651234567890 ! 5m2 ! 1sen ! 2suk";"
                  width="100%";"
                  height="300";
                  style={{ border: 0 }}
                  allowFullScreen={true}"
                  loading="lazy";"
                  referrer_policy="no - referrer - when - downgrade";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  title="Zion Office Locations";
                ></iframe>;
              </div>;"
              <div className="mt - 8">;"
                <Card className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 p - 6">;"
                  <div className="flex items - center">;"
                    <div className="bg - zion - purple / 20 p - 3 rounded - full mr - 4">;"
                      <MessageSquare className="h - 6 w - 6 text - zion - purple" />;
                    </div>;
                    <div>;"
                      <h3 className="text - white text - lg font - bold">Live AI Support</h3>;"
=======
              </div>;
              <div className="mt - 8 bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden">;
                <iframe;
                  src="https://www.google.com / maps / embed?pb=!1m18 ! 1m12 ! 1m3 ! 1d12615.297199052566 ! 2d - 122.41941455 ! 3d37.7749295 ! 2m3 ! 1f0 ! 2f0 ! 3f0 ! 3m2 ! 1i1024 ! 2i768 ! 4f13.1 ! 3m3 ! 1m2 ! 1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81 ! 2sSan%20Francisco%2C%20CA%2C%20USA ! 5e0 ! 3m2 ! 1sen ! 2suk ! 4v1651234567890 ! 5m2 ! 1sen ! 2suk";
                  width="100%";
                  height="300";
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy";
                  referrer_policy="no - referrer - when - downgrade";
                  title="Zion Office Locations";
                ></iframe>;
              </div>;
              <div className="mt - 8">;
                <Card className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 p - 6">;
                  <div className="flex items - center">;
                    <div className="bg - zion - purple / 20 p - 3 rounded - full mr - 4">;
                      <MessageSquare className="h - 6 w - 6 text - zion - purple" />;
                    </div>;
                    <div>;
                      <h3 className="text - white text - lg font - bold">Live AI Support</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <p className="text - zion - slate - light">Get instant answers to your questions</p>;
                    </div>;
                  </div>;
                  <Button;
<<<<<<< HEAD
                    on_click={() => setIsChatOpen (true)}"
                    className="w - full mt - 4 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    on_click={() => setIsChatOpen (true)}
                    className="w - full mt - 4 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <Button;
=======
</div>"
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>;""
              <div className="grid grid-cols-1 gap-6">;"
</div>"
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">;"
</Card>"
                    <h3 className="text-xl font-bold text-white mb-3">{office && office.name}</h3>;""
                    <div className="space-y-3">;"
</div>"
                      <div className="flex items-start">;"
</div>"
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />;"
</MapPin>"
                        <span className="text-zion-slate-light">{office && office.address}</span>;"
                      </div>;"
                      <div className="flex items-center">;"
</div>"
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
</Phone>"
                        <span className="text-zion-slate-light">{office && office.phone}</span>;"
                      </div>;"
                      <div className="flex items-center">;"
</div>"
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;"
</Mail>"
                        <a href={`mailto:${office && office.email}`} className="text-zion-cyan hover:underline">;"
</a>
                        </a>;
                      </div>;
                    </div>;
                  </Card>;
              </div>;"
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">;"
</div>
                <iframe;"
                  src="https://www && www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615 && 1d12615.297199052566!2d-122 && 122.41941455!3d37 && 3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 && 4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk"""
                  width="100%"""
                  height="300""
                  style={{ border: 0 }} 
                  allowFullScreen={true} "
                  loading="lazy"""
                  referrerPolicy="no-referrer-when-downgrade"""
                  title="Zion Office Locations"></iframe>;"
              </div>;"
              <div className="mt-8">;"
</div>"
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;"
</Card>"
                  <div className="flex items-center">;"
</div>"
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;"
</div>"
                      <MessageSquare className="h-6 w-6 text-zion-purple" />;"
</MessageSquare>
                    </div>;
                    <div>;
</div>"
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>;""
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>;"
                    </div>;
                  </div>;
                  <Button;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  <Button;
=======
                  <Button;
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  <Button;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}>;"
                  {isSubmitting ? "Sending..." : "Send Message"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
                  >;
                    Chat With Our AI Assistant;
</Button>

                  </Button>;
                </Card>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text-center">;
            <h2 className="text - 3xl font - bold text - white mb-6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx-auto">;
=======

          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text - center">;
            <h2 className="text - 3xl font - bold text - white mb - 6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx - auto">;
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text-center">;
            <h2 className="text - 3xl font - bold text - white mb-6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx-auto">;
<<<<<<< HEAD
=======
          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text - center">;
            <h2 className="text - 3xl font - bold text - white mb - 6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx - auto">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue - light border border - zion - purple / 30 rounded - xl p - 8 md:p - 12 text-center">;
            <h2 className="text - 3xl font - bold text - white mb-6">Need immediate assistance?</h2>;
            <p className="text - zion - slate - light text - lg mb - 8 max - w-3xl mx-auto">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
              Our customer support team is available 24 / 7 to help you with any questions.;
            </p>;
            <div className="flex flex - col sm:flex - row justify - center gap-4">;
              <Button;
                on_click={() => setIsChatOpen (true)}
                className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion-purple";
              >;
<<<<<<< HEAD
                <MessageSquare className="mr - 2 h - 5 w-5" />;                Chat With AI;
=======
                Chat With AI;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <MessageSquare className="mr - 2 h - 5 w - 5" />;
;
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">;
              Our customer support team is available 24/7 to help you with any questions.;
            </p>;
            <div className="flex flex-col sm:flex-row justify-center gap-4">;
              <Button;
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              >;
                <MessageSquare className="mr-2 h-5 w-5" />;
                Chat With AI;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Button>;
              <Button;"
                variant="outline";
<<<<<<< HEAD
<<<<<<< HEAD
                className="border - zion - cyan text - zion - cyan hover:bg - zion-cyan / 10";
                as_child;
              >;
                <a href="mailto:support@ziontechgroup.com">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Mail className="mr - 2 h - 5 w - 5" />;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
                className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10";
                as_child;
              >;
                <a href="mailto:support@ziontechgroup.com">;
                  <Mail className="mr - 2 h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10";
                asChild;
              >;
                <a href="mailto:support@ziontechgroup.com">;
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Support;
                </a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Chat Assistant Modal */}
      {isChatOpen && (;
=======
                  <Mail className="mr - 2 h - 5 w-5" />;      {isChatOpen && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <Mail className="mr - 2 h - 5 w-5" />;      {isChatOpen && (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      {/* Chat Assistant Modal */}
      {isChatOpen && (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                <MessageSquare className="mr - 2 h - 5 w-5" />;                Chat With AI;
              </Button>;
              <Button;
                variant="outline";
                className="border - zion - cyan text - zion - cyan hover:bg - zion-cyan / 10";
                as_child;
              >;
                <a href="mailto:support@ziontechgroup.com">;
                  <Mail className="mr - 2 h - 5 w-5" />;      {isChatOpen && (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}

          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Support Bot';
<<<<<<< HEAD
=======

      {/* Chat Assistant Modal */}
      {isChatOpen && (;
        <ChatAssistant;
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }}
          onSendMessage={handleSendMessage}
        />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    </AppLayout>;
  );
}

<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</AppLayout>;
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
          recipient={{'
            id: 'ai - assistant','
            name: 'AI Assistant','
            avatar_url: 'https://placehold.co / 64x64?text = AI','
=======
          recipient={{
            id: 'ai - assistant',
            name: 'AI Assistant',
            avatar_url: 'https://placehold.co / 64x64?text = AI',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            role: 'Support Bot';
          }}
          onSendMessage={handleSendMessage}
        />)}
=======

    );
    ;"`;
pr-12325
</ChatAssistant>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </AppLayout>);
<<<<<<< HEAD

'
=======
}
;
      {/* Chat Assistant Modal */}
      {isChatOpen && (;
        <ChatAssistant;
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{;
            id:'ai-assistant',;
            name:'AI Assistant',;
            avatarUrl:'https://placehold.co/64x64?text=AI',;
            role:'Support Bot';
          }}          onSendMessage={handleSendMessage}
        />;
      )}
    </AppLayout>;
  ),; const [isSubmitting, setIsSubmitting] = useState (false);
const [isChatOpen, setIsChatOpen] = useState (false);
}catch (error) {
  if (error instanceof z.ZodError) {
  toast ({
  title: "Form Validation Error";
description: error.errors[0].message;
}
;

}
};
//Handle sending messages to the AI chat assistant 
}return Promise.resolve () 
}catch (error) {
  return Promise.resolve ();
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
      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'ai-assistant'
            name: 'AI Assistant'
            avatarUrl: 'https://placehold.co/64x64?text=AI'

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    </AppLayout>
    </AppLayout>;"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
