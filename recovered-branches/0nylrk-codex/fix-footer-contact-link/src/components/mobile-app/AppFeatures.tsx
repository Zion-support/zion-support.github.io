
<<<<<<< HEAD




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

<<<<<<< HEAD
import React from "react";
=======
=======import React from "react";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import React from "react",
import { Brain, Clock, Award, Zap } from "lucide-react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />
    title: "AI Talent Matching"
<<<<<<< HEAD
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."


  },


  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."


  },


  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />
    title: "Resume Builder"
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."


  },


  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />
    title: "Real-time Notifications"
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."
  }


],



export const AppFeatures: React.FC = () => {
=======
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."export const AppFeatures: React.FC = () => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
            </Card>


import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;

const features = [;
  {;
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;
    title: "AI Talent Matching",;
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  };
  {;
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",;
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  };
  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
    title: "Resume Builder",;
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
  };
  {;
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
    title: "Real-time Notifications",;
    description: "Get instant alerts about new job opportunities, messages, and hiring requests." ;
  }
];

export const AppFeatures: React.FC = () => {;
  return (
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature && feature.icon}</div>;
                <CardTitle className="text-white">{feature && feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature && feature.description}</CardDescription>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  );
};
import React from './react';
=======
            </Card>  {;
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",,
  description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
};  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
    title: "Resume Builder",,
  description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";=======import React from './react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Brain, Clock, Award, Zap } from './lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
const features = [;
  {
<<<<<<< HEAD
    icon: <Brain className="h - 10 w - 10 text - zion - cyan" />,
=======
    icon: <Brain className="h - 10 w - 10 text - zion-cyan" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    title: "AI Talent Matching",
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  }
  {
<<<<<<< HEAD
    icon: <Clock className="h - 10 w - 10 text - zion - cyan" />,
=======
    icon: <Clock className="h - 10 w - 10 text - zion-cyan" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    title: "1 - Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  }
  {
<<<<<<< HEAD
    icon: <Award className="h - 10 w - 10 text - zion - cyan" />,
=======
    icon: <Award className="h - 10 w - 10 text - zion-cyan" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    title: "Resume Builder",
    description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
  }
  {
<<<<<<< HEAD
    icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
=======
    icon: <Zap className="h - 10 w - 10 text - zion-cyan" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    title: "Real - time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
  }
];
;
export const AppFeatures: React.FC = () => {
  return (
<<<<<<< HEAD
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
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration - 300">;
              <CardHeader>;
                <div className="mb - 4">{feature.icon}</div>;
                <CardTitle className="text - white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - gray - 300">{feature.description}</CardDescription>;
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
;
<<<<<<< HEAD
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
