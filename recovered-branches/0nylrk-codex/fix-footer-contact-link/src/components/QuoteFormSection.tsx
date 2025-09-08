import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";

export function QuoteFormSection() {;










    }, 1000),;


;


                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;


              <Button ;
                onClick={() => setIsSubmitted(false)}
                variant="outline" ;
          ) :(;
            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;


                    required

                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"


                  <Input
                    id="email"
                    type="email"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required


                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"


                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"





  const [isSubmitted, setIsSubmitted] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSubmit = (e: React.FormEvent) => {;

                    <div key={index} className="flex items-center">;

                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
                      <input;
                        id={`interest-${index}`}
                        type="checkbox";
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50";
                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;


                  ))}

"
              <div className="mt-6">
                <label"
                  htmlFor="message""

                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >
                  Additional Details;
                </label>

                <textarea"
                  id="message"
                  rows={4}"
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>
"
              <div className="mt-6">
                <Button"
                  type="submit"
                  disabled={isSubmitting}"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {isSubmitting"
                    ? "Sending...""

                    : "Get Your Free Commercial Proposal"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

