

}
const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />
    title: "AI Talent Matching"
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."
  }
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React from "react",
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."

  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    title: "Resume Builder",

    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
  },
  }
  },
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    title: "Resume Builder",

    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,
    title: "Real-time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."
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
import React from "react",
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const AppFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.
          </p>
        </div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover: border-zion-cyan transition-colors duration-300">              <CardHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">
              <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
<<<<<<< HEAD


import React from 'react';
};


  feature.description 
}</CardDescription>
}</div> </div> </section>) 
}
";
;
<<<<<<< HEAD

<<<<<<< HEAD
"


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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
