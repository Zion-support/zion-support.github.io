
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

<<<<<<< HEAD
=======
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

=======import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import React from "react",
import { Brain, Clock, Award, Zap } from "lucide-react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />
    title: "AI Talent Matching"
<<<<<<< HEAD
<<<<<<< HEAD
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />
    title: "Resume Builder"
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },


<<<<<<< HEAD
=======
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />
    title: "Real-time Notifications"
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD


],



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
];
],
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const AppFeatures: React.FC = () => {
=======
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."export const AppFeatures: React.FC = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."export const AppFeatures: React.FC = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
            </Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;

<<<<<<< HEAD
=======

import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const features = [;
  {;
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;
    title: "AI Talent Matching",;
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {;
=======
            </Card>  {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </Card>  {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",,
  description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
};  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
<<<<<<< HEAD
<<<<<<< HEAD
    title: "Resume Builder",;
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
<<<<<<< HEAD
<<<<<<< HEAD
  };
  {;
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
    title: "Real-time Notifications",;
    description: "Get instant alerts about new job opportunities, messages, and hiring requests." ;
  }
];

export const AppFeatures: React.FC = () => {;
  return (
=======

import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
;
const features = [;
  {;
    icon:<Brain className="h-10 w-10 text-zion-cyan" />,;
    title:"AI Talent Matching",;
    description:"Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  },;
  {;
    icon:<Clock className="h-10 w-10 text-zion-cyan" />,;
    title:"1-Click Hiring",;
    description:"Streamlined hiring process that lets you connect with talent instantly with just one click.";
  },;
  {;
    icon:<Award className="h-10 w-10 text-zion-cyan" />,;
    title:"Resume Builder",;
    description:"Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
  },;
  {;
    icon:<Zap className="h-10 w-10 text-zion-cyan" />,;
    title:"Real-time Notifications",;
    description:"Get instant alerts about new job opportunities, messages, and hiring requests." ;
  }
],;
;
export const AppFeatures:React.FC = () => {;
  return (;
  },;
  {;
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
    title: "Real-time Notifications",;
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
  }
],;
export const AppFeatures: React.FC = () => {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature && feature.icon}</div>;
                <CardTitle className="text-white">{feature && feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature && feature.description}</CardDescription>;
=======
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature.icon}</div>;
                <CardTitle className="text-white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
=======
    title: "Resume Builder",,
  description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";=======import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    title: "Resume Builder",,
  description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";=======import React from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Brain, Clock, Award, Zap } from './lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
const features = [;
  {
    icon: <Brain className="h - 10 w - 10 text - zion-cyan" />,
    title: "AI Talent Matching",
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  }
  {
    icon: <Clock className="h - 10 w - 10 text - zion-cyan" />,
    title: "1 - Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  }
  {
    icon: <Award className="h - 10 w - 10 text - zion-cyan" />,
    title: "Resume Builder",
    description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
  }
  {
    icon: <Zap className="h - 10 w - 10 text - zion-cyan" />,
    title: "Real - time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
  }
];
;
export const AppFeatures: React.FC = () => {
  return (
    <section className="py - 16 bg - zion-blue">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb-4">Powerful Features</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6">;
          {features.map ((feature, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature.icon}</div>;
                <CardTitle className="text-white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - gray-300">{feature.description}</CardDescription>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;
},; const features = [ {
  icon: <Brain className="h-10 w-10 text-zion-cyan" />;
title: "AI Talent Matching";
description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements." 
};
{
  icon: <Clock className="h-10 w-10 text-zion-cyan" />;
title: "1-Click Hiring";
description: "Streamlined hiring process that lets you connect with talent instantly with just one click." 
};
{
  icon: <Award className="h-10 w-10 text-zion-cyan" />;
title: "Resume Builder";
description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired." 
};
{
  icon: <Zap className="h-10 w-10 text-zion-cyan" />;
title: "Real-time Notifications";
description: "Get instant alerts about new job opportunities, messages, and hiring requests." 
}];
export const AppFeatures: React.FC = () => {
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Powerful Features</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" > {
  features.map ( (feature, index) => (<Card key= {
  index 
}className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300" > <CardHeader> <div className="mb-4" > {
  feature.icon 
}</div> <CardTitle className="text-white" > {
  feature.title 
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text-gray-300" > {
  feature.description 
}</CardDescription> 
}</div> </div> </section>) 
};
  );
};
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
