<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />
    title: "AI Talent Matching"
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
  }
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />
    title: "Resume Builder"
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
  }
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />
    title: "Real-time Notifications"
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."
  }
]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."

  {
=======
>>>>>>>   {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
  },
  }
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
=======
{
    icon: <Award className="h - 10 w - 10 text - zion - cyan" />,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    title: "Resume Builder",

    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
<<<<<<< HEAD

  {
<<<<<<< HEAD
=======
  },
=======
    icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
    title: "Real - time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
  },
  }
  },
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
    title: "Resume Builder",
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
  },
  }
  },
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,
    title: "Real-time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests." 
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export const AppFeatures: React.FC = () => {
=======
],

]
xport const AppFeatures: React.FC = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
],

]
],

export const AppFeatures: React.FC = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover: border-zion-cyan transition-colors duration-300">              <CardHeader>
>>>>>>>                 <div className="mb-4">{feature.icon}</div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover: border-zion-cyan transition-colors duration-300">              <CardHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">
              <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <div className="mb-4">{feature.icon}</div>
>>>>>>>                 <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      </div>
    </section>
  )
};
{";
  icon: <Clock className="h-10 w-10 text-zion-cyan" />;"
title: "1-Click Hiring";"
description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
}
{"
  icon: <Award className="h-10 w-10 text-zion-cyan" />;"
title: "Resume Builder";"
description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
}
{"
  icon: <Zap className="h-10 w-10 text-zion-cyan" />;"
title: "Real-time Notifications";"
description: "Get instant alerts about new job opportunities,  messages, and hiring requests."
}]
export const AppFeatures: React.FC = () => {"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Powerful Features</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > Everything you love about Zion,  now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" > {
  features.map ( (feature, index) => (<Card key= {
  index "
}className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300" > <CardHeader> <div className="mb-4" > {
  feature.icon "
}</div> <CardTitle className="text-white" > {
  feature.title "
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text-gray-300" > {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  feature.description
}</CardDescription>
}</div> </div> </section>)
}
"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======


import React from 'react';
};

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import { Brain, Clock, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  feature.description 
}</CardDescription>
}</div> </div> </section>) 
}
";
;
<<<<<<< HEAD
import React from "react",;
import { Brain, Clock, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import React from "react",;
import { Brain, Clock, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
const features = [;
  {;
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;
    title: "AI Talent Matching",;
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  },;
  {;
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",;
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  },;
  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
    title: "Resume Builder",;
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
  },;
  {;
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
    title: "Real-time Notifications",;
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
  }
],;
export const AppFeatures: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature.icon}</div>;
                <CardTitle className="text-white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Powerful Features</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
          {features.map ((feature, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30 hover: border - zion - cyan transition - colors duration - 300">              <CardHeader>;
                <div className="mb - 4">{feature.icon}</div>;
                <CardTitle className="text - white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - gray - 300">{feature.description}</CardDescription>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
{";
  icon: <Clock className="h - 10 w - 10 text - zion - cyan" />;";
title: "1 - Click Hiring";";
description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
}
{";
  icon: <Award className="h - 10 w - 10 text - zion - cyan" />;";
title: "Resume Builder";";
description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
}
{";
  icon: <Zap className="h - 10 w - 10 text - zion - cyan" />;";
title: "Real - time Notifications";";
description: "Get instant alerts about new job opportunities,  messages, and hiring requests.";
}];
export const AppFeatures: React.FC = () => {";
  return (<section className="py - 16 bg - zion - blue" > <div className="container mx - auto px - 4" > <div className="text - center mb - 12" > <h2 className="text - 3xl md:text - 4xl font - bold mb - 4" >Powerful Features</h2> <p className="text - lg text - gray - 300 max - w-2xl mx - auto" > Everything you love about Zion,  now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6" > {
  features.map ( (feature, index) => (<Card key= {
  index ";
}className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration - 300" > <CardHeader> <div className="mb - 4" > {
  feature.icon ";
}</div> <CardTitle className="text - white" > {
  feature.title ";
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text - gray - 300" > {
  feature.description;
}</CardDescription>;
}</div> </div> </section>);
}
";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
