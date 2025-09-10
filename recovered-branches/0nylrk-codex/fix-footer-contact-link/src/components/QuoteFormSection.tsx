import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);

export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  };
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Phone
                  </label>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="interest"

                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >'
                  I'm interested in (select all that apply)
                </label>"
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                  {["
                    "AI Products/Services","
                    "IT Equipment","
                    "Server Solutions","
                    "Storage Solutions","
                    "Networking","
                    "24/7 Support","
                    "Recycling Services",
                  ].map((item, index) => ("
                    <div key={index} className="flex items-center">
                      <input
                        id={`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
<<<<<<< HEAD
                      />
                      <label
                        htmlFor={`interest-${index}`}
                        className="ml-2 text-sm text-zion-slate-light"
                      >
                        {item}
                      </label>;
                    </div>;
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD

                </div>;
              </div>;

              <div className="mt-6">;
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  Additional Details;
                </label>;
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"></textarea>;
              </div>;

              <div className="mt-6">;
                <Button
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3">;
                  {isSubmitting ? "Sending..." : "Get Your Free Commercial Proposal"}
                </Button>;
              </div>;
            </form>;
          )}
        </div>;
      </div>;
    </section>;
=======
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Get Your Free Commercial Proposal"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
