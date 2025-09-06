
import { GradientHeading } from './GradientHeading';
import { Check, Handshake, Search, Send } from './lucide-react';
const steps = [;
<<<<<<< HEAD
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI - powered form.";
    icon: Send},

import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from "lucide-react",




const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI - powered form.";
    icon: Send},

import {GradientHeading} from "./GradientHeading";
=======
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI - powered form.";
    icon: Send},
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {Check, Handshake, Search, Send} from "lucide-react";
const steps = [
  {
    title: "Post"
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.";
    icon: Send}
import {GradientHeading} from "./GradientHeading";
import {Check, Handshake, Search, Send} from "lucide-react";
import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from "lucide-react",

import { GradientHeading } from './GradientHeading';
import { Check, Handshake, Search, Send } from './lucide-react';
const steps = [;

import { GradientHeading } from "./GradientHeading",
import { Check, Handshake, Search, Send } from "lucide-react",

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI - powered form.";
    icon: Send},
<<<<<<< HEAD
  {
    title: "Match"
    description: "Our AI automatically matches your needs with the perfect providers or opportunities."
    icon: Search}
  {


const steps = [;
  {;
    title: "Post",;
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",;
    icon: Send},;
  {;
    title: "Match",;
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",;
    icon: Search},;
  {;
    title: "Hire/Buy",;
    description: "Connect directly with matched providers and complete your transaction securely.",;
    icon: Handshake},;
  {;
    title: "Done",;
    description: "Enjoy hassle-free delivery and support for your technology solutions.",;
    icon: Check}],;


export function HowItWorksSection() {;
  return (

import { GradientHeading } from "./GradientHeading",;
import { Check, Handshake, Search, Send } from "lucide-react",;
const steps = [;
  {;
    title: "Post",;
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",;
    icon: Send},;
  {;
    title: "Match",;
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",;
    icon: Search},;
  {;
    title: "Hire/Buy",;
    description: "Connect directly with matched providers and complete your transaction securely.",;
    icon: Handshake},;
  {;
    title: "Done",;
    description: "Enjoy hassle-free delivery and support for your technology solutions.",;
    icon: Check}];
export function HowItWorksSection() {;
  return (;

    <section className="py-20 bg-zion-blue">;
=======
    title: "Match"
    description: "Our AI automatically matches your needs with the perfect providers or opportunities."
    icon: Search}
  {    <section className="py-20 bg-zion-blue">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>How It Works</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            A simple four-step process to connect technology providers with clients;
          </p>;
        </div>;
<<<<<<< HEAD

        <div className="relative">;
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0 && 0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>;

          <div className="space-y-12 md:space-y-0">;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {steps.map((step, index) => (;
              <div;
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${;
                  index % 2 === 0 ? "md:flex-row-reverse" : "";

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
<<<<<<< HEAD
                    </div>
                  ) : null}

            {steps && steps.map((step, index) => (;
              <div
                key={step && step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}>;
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className="text-2xl font-bold text-white mb-3">{step && step.title}</h3>;
                      <p className="text-zion-slate-light">{step && step.description}</p>;
                    </div>;
                  ) : null}
                  ) : null}

                </div>;
=======
                    </div>                </div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">;
                  <step && step.icon className="w-6 h-6 text-zion-cyan" />;
                </div>;

                <div className="md:w-1/2 md:px-12 text-center md:text-left">;
                  {index % 2 !== 0 ? (;
                } relative`}>;
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className="text-2xl font-bold text-white mb-3">{step && step.title}</h3>;
                      <p className="text-zion-slate-light">{step && step.description}</p>;
                    </div>;

                  ) : null}
                </div>;
              </div>;
            ))}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </div>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
}

  );
}

    title: "Hire / Buy",
    description: "Connect directly with matched providers and complete your transaction securely.",
    icon: Handshake},
  {
    title: "Done",
    description: "Enjoy hassle - free delivery and support for your technology solutions.",
    icon: Check}],
export /**
 * HowItWorksSection - Function description
 */
function HowItWorksSection() {
  return (
    <section className="py - 20 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 16">;
          <GradientHeading > How It Works</GradientHeading>;
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
            A simple four - step process to connect technology providers with clients;
          </p>;
        </div>;
        <div className="relative">;
          {/* Timeline line */}
          <div className="absolute left - 4 md:left - 1/2 top - 0 h - full w - 0.5 bg - gradient - to - b from - zion - purple via - zion - cyan to - zion - purple - light transform -translate - x-1 / 2 md:block hidden"></div>;
          <div className="space - y-12 md:space - y-0">;
            {steps.map ((step, index) => (
              <div;
                key={step.title}
                className={`flex flex - col md:flex - row items - center ${
                  index % 2 === 0 ? "md:flex - row - reverse" : "";
                } relative`}
              >;
                <div className="md:w - 1/2 mb - 6 md:mb - 0 md:px - 12 text - center md:text - right">;
                  {index % 2 === 0 ? (
                    <div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
                <div className="relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0">;
                  <step.icon className="w - 6 h - 6 text - zion - cyan" />;
                </div>;
                <div className="md:w - 1/2 md:px - 12 text - center md:text - left">;
                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
    </section>);
}

};
;


};
;

  ),;}
 const steps = [ {
  title: "Post";
description: "Publish your service, job, or equipment in minutes with our AI-powered form.";
icon: Send 
};
{
  title: "Match";
description: "Our AI automatically matches your needs with the perfect providers or opportunities.";
icon: Search 
};
{
  title: "Hire/Buy";
description: "Connect directly with matched providers and complete your transaction securely.";
icon: Handshake 
};
{
  export function HowItWorksSection () {
  return (<section className="py-20 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-16" > text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto"> A simple four-step process to connect technology providers with clients </p> </div> <div className=" relative"> {
  /* Timeline line */ 
}<div className=" absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div> > <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right"> {
  index % 2 === 0 ? (<div> <h3 className="text-2xl font-bold text-white mb-3"> {
  step.title 
}</h3> <p className="text-zion-slate-light"> {
  step.description 
}</p> </div>) : null 
}</div> <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0"> <step.icon className="w-6 h-6 text-zion-cyan"/> </div> <div className="md:w-1/2 md:px-12 text-center md:text-left"> {
  index % 2 !== 0 ? (<div> <h3 className="text-2xl font-bold text-white mb-3"> {
  step.title 
}</h3> <p className="text-zion-slate-light"> {
  step.description 
}</p> </div>) : null 
}</div> </div>) ) 
}</div> </div> </div> </section>) 
}
}
};
;
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
