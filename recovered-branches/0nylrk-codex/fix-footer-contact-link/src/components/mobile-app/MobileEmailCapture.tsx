  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true),;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [isSuccess, setIsSuccess] = useState($2);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    if (!email || isSubmitting) return,

    setIsSubmitting($2);
    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess($2);
      setEmail($2);
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error subscribing:", error)
    } finally {
      setIsSubmitting(false)
    }
  },
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
      setIsSubmitting (false);
    }
  }
;
  return (
    <section className="py - 16 bg - gradient - to - r from - zion - blue - dark to - zion-purple / 30">;
      <div className="container mx - auto px-4">;
        <div className="max - w-3xl mx - auto text-center">;
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb-4">;
            Get Early Access to New Features;
          </h2>;
          <p className="text - lg text - gray - 300 mb - 8 max - w-2xl mx-auto">;
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;
          <form on_submit={handle_submit} className="flex flex - col sm:flex - row gap - 4 max - w-md mx-auto">;
            <Input;
              type="email";
              placeholder="Enter your email address";
              value={email}
              on_change={(e) => set_email (e.target.value)}
              className="flex - grow bg - zion - blue - dark / 70 text - white border - zion - purple / 30 placeholder:text - gray-400";
              required;
            />;
            <Button;
              type="submit";
              disabled={is_submitting || is_success}
              className="bg - zion - cyan hover:bg - zion - cyan / 80 text - zion - blue - dark font-medium";
            >;
              {is_submitting ? "Subscribing..." : is_success ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;
          <p className="text - sm text - gray - 400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>
};
    </section>);
}

};
    </section>);
}
;
    </section>);
}
;
    </section>;
  ),;
},; const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
if (!email || isSubmitting) return;
try {
  setIsSuccess (true);
setEmail ("");
}finally {
  setIsSubmitting (false) 
}
};
return (<section className=" py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30"> <div className=" container mx-auto px-4"> <div className=" max-w-3xl mx-auto text-center"> <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4"> text-lg text-gray-300 mb-8 max-w-2xl mx-auto" > Subscribe to our mobile app updates and be the first to try new features before they're released to the public. </p> </Button> </form> <p className="text-sm text-gray-400 mt-4" > We respect your privacy and will never share your information. </p> </div> </div> </section>) 
};
    </section>;
  )
};
  },

  return (
    <section className = $2;
