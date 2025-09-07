
import { Input } from "@/components/ui/input";

import { Mail } from "lucide-react";

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call;
    setTimeout(() => {;


import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react";
import { Mail } from "lucide-react";

import { useState } from "react",
import { Mail } from "lucide-react",

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);

      setIsSubmitting(false);"
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }


import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react";
import { Mail } from "lucide-react";
import { useState } from "react",
import { Mail } from "lucide-react",
export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault(),
    setIsSubmitting(true),
    ;
    // Simulate API call;
    setTimeout(() => {}
      setIsSubmitting(false),
      setIsSubmitted(true),"

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

  return (


          <p className="text-white font-medium">Thank you for subscribing!</p>

          <p className="text-zion-slate-light mt-1">
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (

    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;

      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;

          <Mail className="h-6 w-6" />;
        </div>;
        <div>;"
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>;


            Get exclusive offers, trending AI news, and early access to best;

}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}


          />
          <Button "
            type="submit" 
            disabled={isSubmitting}"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >"
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>


          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;

}
  ),; const handleSubmit = (e: React.FormEvent) => {}
  e.preventDefault ();
setIsSubmitting (true);

};
}</div>) ) 
}</div> <span>Join 10, 000+ tech professionals who already subscribe</span> </div> </div>) 
}
}
}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
      )}
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {[...Array(3)].map((_, i) => (
            <div
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
  )
}
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required;
          />;
          <Button;"
            type="submit";
            disabled={isSubmitting}"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;"
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}
;"
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;"
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;"
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );

}
  ),; const handleSubmit = (e: React.FormEvent) => {}
  e.preventDefault ();
setIsSubmitting (true);

};
}</div>) ) 
}</div> <span>Join 10, 000+ tech professionals who already subscribe</span> </div> </div>) 
}
}
}
