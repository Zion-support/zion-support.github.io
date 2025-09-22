<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,
    title: "AI Talent Matching",
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."
  },

import React from "react";
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
const features = null;
}
const features = [
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
},
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
    title: "Resume Builder",
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
  },
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,
    title: "Real-time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests." 
  }
],

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
{}
    icon: <Award className="h - 10 w - 10 text - zion - cyan" />,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    title: "Resume Builder",
"
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."

  }
},    title: "Resume Builder",

    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."

import React from "react",
import { Brain, Clock, Award, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",

{
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,
    title: "1-Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />,
    title: "Resume Builder",
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,
    title: "Real-time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."   }

export const AppFeatures: React.FC = () => {
  return (
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export const AppFeatures: React.FC = () => {}
  return (

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => ("
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">
              <CardHeader>

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <div className="mb-4">{feature.icon}</div>
=======
"
                <div className="mb-4">{feature.icon}</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>"
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
}</CardDescription>
}</div> </div> </section>) 
}"
";
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { Brain, Clock, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
const features = [;
  {;
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;
title: "AI Talent Matching",,
  description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",,
  description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  },;
  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
    title: "Resume Builder",,
  description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;"
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;"
                <div className="mb-4">{feature.icon}</div>;"
                <CardTitle className="text-white">{feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;"
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>;
              </CardContent>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
);
};
};
"
"
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="py - 16 bg - zion-blue">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb-4">Powerful Features</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx-auto">;
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.;
          </p>;
</div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6">;
          {features.map ((feature, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30 hover: border - zion - cyan transition - colors duration-300">              <CardHeader>;
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
{";
  icon: <Clock className="h - 10 w - 10 text - zion-cyan" />;";
title: "1 - Click Hiring";",
  description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
}
{";
  icon: <Award className="h - 10 w - 10 text - zion-cyan" />;";
title: "Resume Builder";",
  description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
}
{";
  icon: <Zap className="h - 10 w - 10 text - zion-cyan" />;";
title: "Real - time Notifications";",
  description: "Get instant alerts about new job opportunities,  messages, and hiring requests.";
}];
export const AppFeatures: React.FC = () => {";
  return (<section className="py - 16 bg - zion-blue" > <div className="container mx - auto px-4" > <div className="text - center mb-12" > <h2 className="text - 3xl md:text - 4xl font - bold mb-4" >Powerful Features</h2> <p className="text - lg text - gray - 300 max - w-2xl mx-auto" > Everything you love about Zion,  now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6" > {
  features.map ( (feature, index) => (<Card key= {
  index ";
}className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration-300" > <CardHeader> <div className="mb-4" > {
  feature.icon ";
}</div> <CardTitle className="text-white" > {
  feature.title ";
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text - gray-300" > {
  feature.description;
}</CardDescription>;
}</div> </div> </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}"
{";"
  icon: <Clock className="h - 10 w - 10 text - zion - cyan" />;";"
title: "1 - Click Hiring";";"
description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
}"
{";"
  icon: <Award className="h - 10 w - 10 text - zion - cyan" />;";"
title: "Resume Builder";";"
description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
}"
{";"
  icon: <Zap className="h - 10 w - 10 text - zion - cyan" />;";"
title: "Real - time Notifications";";"
description: "Get instant alerts about new job opportunities,  messages, and hiring requests.";
}];"
export const AppFeatures: React.FC = () => {";"
  return (<section className="py - 16 bg - zion - blue" > <div className="container mx - auto px - 4" > <div className="text - center mb - 12" > <h2 className="text - 3xl md:text - 4xl font - bold mb - 4" >Powerful Features</h2> <p className="text - lg text - gray - 300 max - w-2xl mx - auto" > Everything you love about Zion,  now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6" > {}
  features.map ( (feature, index) => (<Card key= {"
  index ";"
}className="bg - zion - blue - dark border - zion - purple / 30 hover:border - zion - cyan transition - colors duration - 300" > <CardHeader> <div className="mb - 4" > {"
  feature.icon ";"
}</div> <CardTitle className="text - white" > {"
  feature.title ";"
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text - gray - 300" > {}
  feature.description;
}</CardDescription>;
}</div> </div> </section>);
}"
";'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
