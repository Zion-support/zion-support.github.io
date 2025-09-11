


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Check} from "lucide-react";
import React from "react",
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card",
import { Check } from "lucide-react",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function FeatureHighlights() {

  const highlightsData = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "For Talent Seekers"
      title: "For Talent Seekers",
      features: [;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Check} from "lucide-react";
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "AI-powered talent matching based on your specific project requirements";
        "Verified profiles with skills validation and credential checking";
        "Transparent pricing and no hidden fees";
        "Direct communication with potential candidates";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI - matched applicants";
      ];
    }
    {
      title: "For Talent & Service Providers",
      features: [;
        "Create a professional profile showcasing your skills and experience";
        "Get matched with relevant projects that fit your expertise";
        "Secure payment processing with on - time disbursements";
        "Build your reputation through client reviews and ratings";
        "Access to enterprise clients and high-value projects",;
        "Professional development resources and community support";
      ];
    };
    {;
      title: "For Enterprise Clients",;
      features: [;
        "White-labeled talent portal with your company branding";
        "Dedicated account management and priority support";
        "Custom talent pools and preferred provider networks";
        "Advanced analytics and reporting capabilities";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "Create a professional profile showcasing your skills and experience";
        "Get matched with relevant projects that fit your expertise";
        "Secure payment processing with on-time disbursements";
        "Build your reputation through client reviews and ratings";
        "Access to enterprise clients and high-value projects"
        "Professional development resources and community support"
      ]
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ]
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "For Enterprise Clients"
      features: [
        "White-labeled talent portal with your company branding";
        "Dedicated account management and priority support";
        "Custom talent pools and preferred provider networks";
        "Advanced analytics and reporting capabilities";
        "API access for seamless integration with your HR systems"
<<<<<<< HEAD
=======

    {
      title: "For Enterprise Clients"
      features: [

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        "Customizable workflow and approval processes"
      ]
        "API access for seamless integration with your HR systems",;
        "Customizable workflow and approval processes";
      ];
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
    }
  ];
;
  return (

<<<<<<< HEAD
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from "lucide-react",;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from "lucide-react",;
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;
<<<<<<< HEAD
;
export function FeatureHighlights() {;
  const highlightsData = [;
    {;
      title:"For Talent Seekers",;
      features:[;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      title:"For Talent & Service Providers",;
      features:[;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      title:"For Enterprise Clients",;
      features:[;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        "API access for seamless integration with your HR systems",;
        "Customizable workflow and approval processes";
      ];
    }
  ],;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </div>;
    </section>;
=======
        </div>;
      </div>;
    </section>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
