
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from "lucide-react",
=======
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { Check, Handshake, Search, Send } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const steps = [
  {
    title: &quot;Post&quot;,
    description: &quot;Publish your service, job, or equipment in minutes with our AI-powered form.&quot;,
    icon: Send},
  {
    title: &quot;Match&quot;,
    description: &quot;Our AI automatically matches your needs with the perfect providers or opportunities.&quot;,
    icon: Search},
  {
    title: &quot;Hire/Buy&quot;,
    description: &quot;Connect directly with matched providers and complete your transaction securely.&quot;,
    icon: Handshake},
  {
<<<<<<< HEAD
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check}],
=======
    title: &quot;Done&quot;,
    description: &quot;Enjoy hassle-free delivery and support for your technology solutions.&quot;,
    icon: Check}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function HowItWorksSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>How It Works</GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
            A simple four-step process to connect technology providers with clients
          </p>
        </div>

        <div className=&quot;relative&quot;>
          {/* Timeline line */}
          <div className=&quot;absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden&quot;></div>
          
          <div className=&quot;space-y-12 md:space-y-0&quot;>
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? &quot;md:flex-row-reverse&quot; : ""
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
