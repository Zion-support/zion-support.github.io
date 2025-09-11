
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
<<<<<<< HEAD

<<<<<<< HEAD

import React from "react";
import {Brain, Clock, Award, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Brain, Clock, Award, Zap } from "lucide-react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const features = [
  {
    icon: <Brain className="h-10 w-10 text-zion-cyan" />
    title: "AI Talent Matching"
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."
<<<<<<< HEAD

<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    icon: <Clock className="h-10 w-10 text-zion-cyan" />
    title: "1-Click Hiring"
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click."
<<<<<<< HEAD

<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    icon: <Award className="h-10 w-10 text-zion-cyan" />
    title: "Resume Builder"
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },


<<<<<<< HEAD
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    icon: <Zap className="h-10 w-10 text-zion-cyan" />
    title: "Real-time Notifications"
    description: "Get instant alerts about new job opportunities, messages, and hiring requests."
  }
<<<<<<< HEAD


],



<<<<<<< HEAD
];
],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
];
],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            </Card>


<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;

          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
import React from "react",;
import { Brain, Clock, Award, Zap } from "lucide-react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const features = [;
  {;
    icon: <Brain className="h-10 w-10 text-zion-cyan" />,;
    title: "AI Talent Matching",;
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {;
    icon: <Clock className="h-10 w-10 text-zion-cyan" />,;
    title: "1-Click Hiring",;
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {;
    icon: <Award className="h-10 w-10 text-zion-cyan" />,;
    title: "Resume Builder",;
    description: "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.";
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  {;
    icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
    title: "Real-time Notifications",;
    description: "Get instant alerts about new job opportunities, messages, and hiring requests." ;
  }
];

export const AppFeatures: React.FC = () => {;
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">;
              <CardHeader>;
                <div className="mb-4">{feature && feature.icon}</div>;
                <CardTitle className="text-white">{feature && feature.title}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-gray-300">{feature && feature.description}</CardDescription>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Brain, Clock, Award, Zap } from './lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
const features = [;
  {
    icon: <Brain className="h - 10 w - 10 text - zion - cyan" />,
    title: "AI Talent Matching",
    description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.";
  }
  {
    icon: <Clock className="h - 10 w - 10 text - zion - cyan" />,
    title: "1 - Click Hiring",
    description: "Streamlined hiring process that lets you connect with talent instantly with just one click.";
  }
  {
    icon: <Award className="h - 10 w - 10 text - zion - cyan" />,
    title: "Resume Builder",
    description: "Create professional, AI - enhanced resumes that highlight your skills and increase your chances of getting hired.";
  }
  {
    icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
    title: "Real - time Notifications",
    description: "Get instant alerts about new job opportunities, messages, and hiring requests.";
  }
];
;
export const AppFeatures: React.FC = () => {
  return (
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
