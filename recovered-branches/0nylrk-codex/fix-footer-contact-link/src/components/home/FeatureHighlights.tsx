


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Check} from "lucide-react";
import React from "react",
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card",
import { Check } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function FeatureHighlights() {

  const highlightsData = [
    {
<<<<<<< HEAD

import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Check} from "lucide-react";
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;

=======
      title: "For Talent Seekers"
      title: "For Talent Seekers",
      features: [;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "AI-powered talent matching based on your specific project requirements";
        "Verified profiles with skills validation and credential checking";
        "Transparent pricing and no hidden fees";
        "Direct communication with potential candidates";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "Secure payment protection and dispute resolution",;
        "Post jobs and receive AI-matched applicants";
      ];
    };
    {;
      title: "For Talent & Service Providers",;
      features: [;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Check } from './lucide-react';
export /**
 * FeatureHighlights - Function description
 */
function FeatureHighlights() {
  const highlights_data = [;
    {
      title: "For Talent Seekers",
      features: [;
        "AI - powered talent matching based on your specific project requirements";
        "Verified profiles with skills validation and credential checking";
        "Transparent pricing and no hidden fees";
        "Direct communication with potential candidates";
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI - matched applicants";
      ];
    }
    {
      title: "For Talent & Service Providers",
      features: [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        "Create a professional profile showcasing your skills and experience";
        "Get matched with relevant projects that fit your expertise";
        "Secure payment processing with on - time disbursements";
        "Build your reputation through client reviews and ratings";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "Access to enterprise clients and high-value projects",;
        "Professional development resources and community support";
      ];
    };
    {;
      title: "For Enterprise Clients",;
      features: [;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "White-labeled talent portal with your company branding";
        "Dedicated account management and priority support";
        "Custom talent pools and preferred provider networks";
        "Advanced analytics and reporting capabilities";
<<<<<<< HEAD


      title: "For Talent Seekers",

    {
      title: "For Talent & Service Providers"
      features: [

=======
      features: [
        "AI-powered talent matching based on your specific project requirements";
        "Verified profiles with skills validation and credential checking";
        "Transparent pricing and no hidden fees";
        "Direct communication with potential candidates";
        "Secure payment protection and dispute resolution"
        "Post jobs and receive AI-matched applicants"
      ]
    }
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ]
    },
    {
      title: "For Talent & Service Providers"
      features: [
        "Create a professional profile showcasing your skills and experience";
        "Get matched with relevant projects that fit your expertise";
        "Secure payment processing with on-time disbursements";
        "Build your reputation through client reviews and ratings";
        "Access to enterprise clients and high-value projects"
        "Professional development resources and community support"
      ]
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ]
    },
<<<<<<< HEAD

    {
      title: "For Enterprise Clients"
      features: [

=======
    {
      title: "For Enterprise Clients"
      features: [
        "White-labeled talent portal with your company branding";
        "Dedicated account management and priority support";
        "Custom talent pools and preferred provider networks";
        "Advanced analytics and reporting capabilities";
        "API access for seamless integration with your HR systems"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
<<<<<<< HEAD
=======
        "Customizable workflow and approval processes"
      ]
    }
  ],

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        "Customizable workflow and approval processes"
      ]
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "API access for seamless integration with your HR systems",;
        "Customizable workflow and approval processes";
      ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        "Access to enterprise clients and high - value projects",
        "Professional development resources and community support";
      ];
    }
    {
      title: "For Enterprise Clients",
      features: [;
        "White - labeled talent portal with your company branding";
        "Dedicated account management and priority support";
        "Custom talent pools and preferred provider networks";
        "Advanced analytics and reporting capabilities";
        "API access for seamless integration with your HR systems",
        "Customizable workflow and approval processes";
      ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  ];
;
  return (
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from "lucide-react",;
<<<<<<< HEAD
=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from "lucide-react",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;
<<<<<<< HEAD
=======
;
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title:"For Talent Seekers",;
      features:[;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "AI-powered talent matching based on your specific project requirements",;
        "Verified profiles with skills validation and credential checking",;
        "Transparent pricing and no hidden fees",;
        "Direct communication with potential candidates",;
        "Secure payment protection and dispute resolution",;
        "Post jobs and receive AI-matched applicants";
      ];
    },;
    {;
<<<<<<< HEAD
=======
      title:"For Talent & Service Providers",;
      features:[;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      title: "For Talent & Service Providers",;
      features: [;
        "Create a professional profile showcasing your skills and experience",;
        "Get matched with relevant projects that fit your expertise",;
        "Secure payment processing with on-time disbursements",;
        "Build your reputation through client reviews and ratings",;
        "Access to enterprise clients and high-value projects",;
        "Professional development resources and community support";
      ];
    },;
    {;
<<<<<<< HEAD
=======
      title:"For Enterprise Clients",;
      features:[;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      title: "For Enterprise Clients",;
      features: [;
        "White-labeled talent portal with your company branding",;
        "Dedicated account management and priority support",;
        "Custom talent pools and preferred provider networks",;
        "Advanced analytics and reporting capabilities",;
        "API access for seamless integration with your HR systems";
        "Customizable workflow and approval processes";
      ];
    }
  ];
  return (;
<<<<<<< HEAD

=======
        "API access for seamless integration with your HR systems",;
        "Customizable workflow and approval processes";
      ];
    }
  ],;
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {highlightsData && highlightsData.map((category, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;
              <CardContent className="p-6">;
                <h3 className="text-xl font-bold text-white mb-4">{category && category.title}</h3>;
                <ul className="space-y-3">;
                  {category && category.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-start">;
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0 && 0.5 flex-shrink-0" />;
                      <span className="text-zion-slate-light">{feature}</span>;
                    </li>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  ))}
                </ul>;
              </CardContent>;
            </Card>;
          ))}

        </div>;
      </div>;
    </section>;
  );
}

=======
=======
                  ))}
        ;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {highlightsData.map((category, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;
              <CardContent className="p-6">;
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>;
                <ul className="space-y-3">;
                  {category.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-start">;
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />;
                      <span className="text-zion-slate-light">{feature}</span>;
        </div>;
      </div>;
    </section>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl font - bold text - white mb - 3">Tailored Solutions for Everyone</h2>;
          <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          {highlights_data.map ((category, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardContent className="p - 6">;
                <h3 className="text - xl font - bold text - white mb - 4">{category.title}</h3>;
                <ul className="space - y-3">;
                  {category.features.map ((feature, idx) => (
                    <li key={idx} className="flex items - start">;
                      <Check className="h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0" />;
                      <span className="text - zion - slate - light">{feature}</span>;
                    </li>))}
                </ul>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 export function FeatureHighlights () {
  const highlightsData = [ {
  title: "For Talent Seekers";
features: [ "AI-powered talent matching based on your specific project requirements";
"Verified profiles with skills validation and credential checking";
"Transparent pricing and no hidden fees";
"Direct communication with potential candidates";
"Secure payment protection and dispute resolution";
"Post jobs and receive AI-matched applicants" ] 
};
{
  title: "For Talent & Service Providers";
features: [ "Create a professional profile showcasing your skills and experience";
"Get matched with relevant projects that fit your expertise";
"Secure payment processing with on-time disbursements";
"Build your reputation through client reviews and ratings";
"Access to enterprise clients and high-value projects";
"Professional development resources and community support" ] 
};
{
  title: "For Enterprise Clients";
features: [ "White-labeled talent portal with your company branding";
"Dedicated account management and priority support";
"Custom talent pools and preferred provider networks";
"Advanced analytics and reporting capabilities";
"API access for seamless integration with your HR systems";
"Customizable workflow and approval processes" ] 
}];
return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl font-bold text-white mb-3" >Tailored Solutions for Everyone</h2> <p className="text-zion-slate-light text-lg max-w-3xl mx-auto" > Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-6" > {
  highlightsData.map ( (category, index) => (<Card key= {
  index 
}className="bg-zion-blue-dark border-zion-blue-light" > <CardContent className="p-6" > <h3 className="text-xl font-bold text-white mb-4" > {
  category.title 
}</h3> <ul className="space-y-3" > {
  category.features.map ( (feature, idx) => (<li key= {
  idx 
}className="flex items-start" > <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" /> <span className="text-zion-slate-light" > {
  feature 
}</span> 
}</ul> </CardContent> </Card>) ) 
}</div> </div> </section>) 
}
                    </li>;
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
