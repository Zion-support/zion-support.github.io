import React from 'react';import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import { useState } from "react";
import { Mail } from "lucide-react";
export function EnhancedNewsletterForm() {;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>

          <p className="text-zion-slate-light mt-1">
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (

      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;

          <Mail className="h-6 w-6" />;
        </div>;
        <div>;"
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>;
          <p className="text-zion-slate-light text-sm">;            Get exclusive offers, trending AI news, and early access to best;

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">            </div>;
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );}            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}            <div
              key={i}
              className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>"
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">"

    </div>
  );
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
