import { Button } from "./ui/button";""
import { Input } from "./ui/input";""
import { GradientHeading } from "./GradientHeading";""
import { useState } from "react";"
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);"
import { Button } from "./ui/button",""
import { Input } from "./ui/input",""
import { GradientHeading } from "./GradientHeading";""
import { useState } from "react";""
import { GradientHeading } from "./GradientHeading",""
import { useState } from "react","
  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission;
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  };

  return ("
    <section className="py-20 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="text-center mb-12">"
</div>
          <GradientHeading>Get a Quote Now</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">"
</div>"
            <div className="text-center py-8">"
</div>"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">"
</div>
                <svg;"
                  className="w-8 h-8 text-zion-cyan"""
                  fill="none"""
                  stroke="currentColor"""
                  viewBox="0 0 24 24"""
                  xmlns="http://www.w3.org/2000/svg""
                >
</svg>
                  <path;"
                    strokeLinecap="round"""
                    strokeLinejoin="round""
                    strokeWidth={2}"
                    d="M5 13l4 4L19 7""
                  ></path>
                </svg>
              </div>"
              <h3 className="text-2xl font-bold text-white mb-4">"
</h3>
              </h3>"
              <p className="text-zion-slate-light mb-6">"
</p>
              </p>
              <Button;)
                onClick={() => setIsSubmitted(false)}
</Button>
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
</form>"
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">"
</div>
                <div>
</div>
                  <label;"
                    htmlFor="name"""
                    className="block text-sm font-medium text-zion-slate-light mb-1""
                  >
</label>
                  </label>"
    <section className="py-20 bg-zion-blue">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="text-center mb-12">;"
</div>
          <GradientHeading>Get a Quote Now</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;"
</div>"
            <div className="text-center py-8">;"
</div>"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;"
</div>"
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www && www.w3.org/2000/svg">;"
</svg>"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;"
                </svg>;
              </div>;"
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;""
              <p className="text-zion-slate-light mb-6">;"
</p>
              </p>;
              <Button;
                onClick={() => setIsSubmitted(false)}
</Button>
              </Button>;
            </div>;
            <form onSubmit={handleSubmit}>;
</form>"
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;"
</div>
                <div>;
</div>"
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;"
</label>
                  </label>;
                  <Input;"
                    id="name"""
                    type="text"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                    required;
                  />
</Input>
                </div>
                <div>
</div>
                  <label;"
                    htmlFor="company"""
                    className="block text-sm font-medium text-zion-slate-light mb-1""
                  >
</label>
                  </label>
                  <Input;"
                    id="company"""
                    type="text"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                  />
</Input>
                </div>
                <div>
</div>
                  <label;"
                    htmlFor="email"""
                    className="block text-sm font-medium text-zion-slate-light mb-1""
                  >
</label>
                  </label>
                  <Input;"
                    id="email"""
                    type="email"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                    required;
                  />
</Input>
                </div>
                <div>
</div>
                  <label;"
                    htmlFor="phone"""
                    className="block text-sm font-medium text-zion-slate-light mb-1""
                  >
</label>
                  </label>
                  <Input;"
                    id="phone"""
                    type="tel"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                  />
</Input>
                </div>
              </div>
"
              <div className="mt-6">"
</div>
                <label;"
                  htmlFor="interest"""
                  className="block text-sm font-medium text-zion-slate-light mb-1""
                >
</label>
                </label>"
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">"
</div>"
                    <div key={index} className="flex items-center">"
</div>
                      <input;
                        id={`interest-${index}`}"
                        type="checkbox"""
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50""
                      />
</input>
                      <label;
                        htmlFor={`interest-${index}`}"
                        className="ml-2 text-sm text-zion-slate-light""
                      >
</label>
                      </label>;
                    </div>;
                </div>
              </div>
"
              <div className="mt-6">"
</div>
                <label;"
                  htmlFor="message"""
                  className="block text-sm font-medium text-zion-slate-light mb-1""
                >
</label>
                </label>
                <textarea;"
                  id="message""
                  rows={4}"
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                ></textarea>
              </div>
"
              <div className="mt-6">"
</div>
                <Button;"
                  type="submit""
                  disabled={isSubmitting}"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3""
                >
</Button>
                </Button>
              </div>
            </form>
        </div>
      </div>
    </section>"
    <section className="py - 20 bg - zion - blue">;"
</section>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="text - center mb - 12">;"
</div>
          <GradientHeading > Get a Quote Now</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="max - w-2xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 8">;"
</div>"
            <div className="text - center py - 8">;"
</div>"
              <div className="inline - flex items - center justify - center w - 16 h - 16 bg - zion - purple / 20 rounded - full mb - 6">;"
</div>
                <svg;"
                  className="w - 8 h - 8 text - zion - cyan";""
                  fill="none";""
                  stroke="current_color";""
                  view_box="0 0 24 24";""
                  xmlns="http://www.w3.org / 2000 / svg";"
                >;
</svg>
                  <path;"
                    stroke_linecap="round";""
                    stroke_linejoin="round";"
                    stroke_width={2}"
                    d="M5 13l4 4L19 7";"
                  ></path>;
                </svg>;
              </div>;"
              <h3 className="text - 2xl font - bold text - white mb - 4">;"
</h3>
              </h3>;"
              <p className="text - zion - slate - light mb - 6">;"
</p>
              </p>;
              <Button;
                on_click={() => setIsSubmitted (false)}
</Button>
              </Button>;
            </div>) : (
            <form on_submit={handle_submit}>;
</form>"
              <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;"
</div>
                <div>;
</div>
                  <label;"
                    html_for="name";""
                    className="block text - sm font - medium text - zion - slate - light mb - 1";"
                  >;
</label>
                  </label>;
                  <Input;"
                    id="name";""
                    type="text";""
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                    required;
                  />;
</Input>
                </div>;
                <div>;
</div>
                  <label;"
                    html_for="company";""
                    className="block text - sm font - medium text - zion - slate - light mb - 1";"
                  >;
</label>
                  </label>;
                  <Input;"
                    id="company";""
                    type="text";""
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                  />;
</Input>
                </div>;
                <div>;
</div>
                  <label;"
                    html_for="email";""
                    className="block text - sm font - medium text - zion - slate - light mb - 1";"
                  >;
</label>
                  </label>;
                  <Input;"
                    id="email";""
                    type="email";""
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                    required;
                  />;
</Input>
                </div>;
                <div>;
</div>
                  <label;"
                    html_for="phone";""
                    className="block text - sm font - medium text - zion - slate - light mb - 1";"
                  >;
</label>
                  </label>;
                  <Input;"
                    id="phone";""
                    type="tel";""
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                  />;
</Input>
                </div>;
              </div>;"
              <div className="mt - 6">;"
</div>
                <label;"
                  html_for="interest";""
                  className="block text - sm font - medium text - zion - slate - light mb - 1";"
                >;
</label>
                </label>;"
                <div className="grid grid - cols - 1 gap - 3 sm:grid - cols - 2 mt - 2">;"
</div>"
                    <div key={index} className="flex items - center">;"
</div>
                      <input;
                        id={`interest-${index}`}"
                        type="checkbox";""
                        className="h - 4 w - 4 bg - zion - blue - dark border - zion - purple text - zion - purple focus:ring - zion - purple / 50";"
                      />;
</input>
                      <label;
                        html_for={`interest-${index}`}"
                        className="ml - 2 text - sm text - zion - slate - light";"
                      >;
</label>
                      </label>;)
                    </div>))}
                </div>;
              </div>;"
              <div className="mt - 6">;"
</div>
                <label;"
                  html_for="message";""
                  className="block text - sm font - medium text - zion - slate - light mb - 1";"
                >;
</label>
                </label>;
                <textarea;"
                  id="message";"
                  rows={4}"
                  className="w - full rounded - md bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                ></textarea>;
              </div>;"
              <div className="mt - 6">;"
</div>
                <Button;"
                  type="submit";"
                  disabled={is_submitting}"
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 3";"
                >;
</Button>
                </Button>;
              </div>;
            </form>)}
        </div>;
      </div>;
    </section>);"