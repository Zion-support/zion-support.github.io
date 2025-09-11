>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);


    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react";
import { Mail } from "lucide-react";
import { useState } from "react",
import { Mail } from "lucide-react",
=======
=======

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
=======

  const handleSubmit = (e: React.FormEvent) => {    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },

  return (
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },


  return (


      


=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Get exclusive offers, trending AI news, and early access to best;
            deals;
          </p>;
        </div>;
      </div>;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
=======


      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div
              key={i}
              className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String && String.fromCharCode(65 + i)}
}
  ),; const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate API call setTimeout ( () => {
  
};
}</div>) ) 
}</div> <span>Join 10, 000+ tech professionals who already subscribe</span> </div> </div>) 
}
}
=======


}>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
