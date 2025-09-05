
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { Check, Handshake, Search, Send } from "lucide-react",;
;
const steps = [;
  {;
    title:"Post",;
    description:"Publish your service, job, or equipment in minutes with our AI-powered form.",;
    icon:Send},;
  {;
    title:"Match",;
    description:"Our AI automatically matches your needs with the perfect providers or opportunities.",;
    icon:Search},;
  {;
    title:"Hire/Buy",;
    description:"Connect directly with matched providers and complete your transaction securely.",;
    icon:Handshake},;
  {;
    title:"Done",;
    description:"Enjoy hassle-free delivery and support for your technology solutions.",;
    icon:Check}],;
;
export function HowItWorksSection() {;
  return (;
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>How It Works</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            A simple four-step process to connect technology providers with clients;
          </p>;
        </div>;
;
        <div className="relative">;
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>;
          ;
          <div className="space-y-12 md:space-y-0">;
            {steps.map((step, index) => (;
              <div ;
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${;
                  index % 2 === 0 ? "md:flex-row-reverse" :"";
                } relative`}
              >;
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>;
                      <p className="text-zion-slate-light">{step.description}</p>;
                    </div>;
                  ) :null}
                </div>;
                ;
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">;
                  <step.icon className="w-6 h-6 text-zion-cyan" />;
                </div>;
;
                <div className="md:w-1/2 md:px-12 text-center md:text-left">;
                  {index % 2 !== 0 ? (;
                    <div>;
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>;
                      <p className="text-zion-slate-light">{step.description}</p>;
                    </div>;
                  ) :null}
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
    </section>;
  ),;
=======
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from "lucide-react",
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
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check}],
export function HowItWorksSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-16&quot;>

const _steps = [
  {_title: "Post", _description: "Publish your service, _job, _or equipment in minutes with our AI-powered form.", _icon: Send},
  {_title: "Match", _description: "Our AI automatically matches your needs with the perfect providers or opportunities.", _icon: Search},
  {_title: "Hire/Buy", _description: "Connect directly with matched providers and complete your transaction securely.", _icon: Handshake},
  {_title: "Done", _description: "Enjoy hassle-free delivery and support for your technology solutions.", _icon: Check}];

export function HowItWorksSection() {_return (_<section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                } relative`}              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {_index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {_index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
