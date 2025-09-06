<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { CheckCircle, Smartphone, Users, Star, Mail } from 'lucide-react'

export const MobileFeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "Hire from Anywhere",
      description: "Browse and hire top AI talent on the go with a streamlined mobile interface."
    },
    {
      icon: <Star className="h-8 w-8 text-zion-purple" />,
      title: "AI-Match Instantly",
      description: "Get matched with the perfect talent or jobs using our advanced AI algorithm."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
      title: "Track Milestones",
      description: "Monitor project progress and approve milestones directly from your phone."
    },
    {
      icon: <Mail className="h-8 w-8 text-zion-purple" />,
      title: "Instant Messaging",
      description: "Chat with candidates or clients and receive notifications in real-time."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-zion-cyan" />,
      title: "Biometric Security",
      description: "Login quickly and securely with Face ID or Touch ID on supported devices."
    }
=======
{
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      icon: <Star className="h-8 w-8 text-zion-purple" />
=======
    {      icon: <Star className="h-8 w-8 text-zion-purple" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      title: "AI-Match Instantly"
      description: "Get matched with the perfect talent or jobs using our advanced AI algorithm."

<<<<<<< HEAD
    },

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    {
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />
      title: "Track Milestones"
      description: "Monitor project progress and approve milestones directly from your phone."

<<<<<<< HEAD
=======
    {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      icon: <Mail className="h-8 w-8 text-zion-purple" />
      title: "Instant Messaging"
      description: "Chat with candidates or clients and receive notifications in real-time."

<<<<<<< HEAD
    },

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    {
      icon: <Smartphone className="h-8 w-8 text-zion-cyan" />
      title: "Biometric Security"
      description: "Login quickly and securely with Face ID or Touch ID on supported devices."
<<<<<<< HEAD
      icon: <Star className="h - 8 w - 8 text - zion-purple" />,
=======

    {
      icon: <Star className="h - 8 w - 8 text - zion - purple" />,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      title: "AI - Match Instantly",
      description: "Get matched with the perfect talent or jobs using our advanced AI algorithm.";
    }
    {
      icon: <CheckCircle className="h - 8 w - 8 text - zion-cyan" />,
      title: "Track Milestones",
      description: "Monitor project progress and approve milestones directly from your phone.";
    }
    {
      icon: <Mail className="h - 8 w - 8 text - zion-purple" />,
      title: "Instant Messaging",
      description: "Chat with candidates or clients and receive notifications in real - time.";
    }
    {
      icon: <Smartphone className="h - 8 w - 8 text - zion-cyan" />,
      title: "Biometric Security",
      description: "Login quickly and securely with Face ID or Touch ID on supported devices.";
    }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  return (
    <section id="features" className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Everything You Need On The Go
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features
          </p>
        </div>
<<<<<<< HEAD
        

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
<<<<<<< HEAD
              className="bg-zion-blue-dark border border-zion-blue-light p-6 rounded-lg hover:border-zion-purple/50 transition-all duration-300"
            >
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div className="mb-4">
<<<<<<< HEAD
                {feature.icon}
=======
    <section id="features" className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;
=======
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 

              <div className="mb-4">
    <section id="features" className="py - 16 bg - zion-blue">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-12">;
          <h2 className="text - 3xl md:text - 4xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text-transparent">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Everything You Need On The Go;
          </h2>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx-auto">;
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 max - w-6xl mx-auto">;
          {features.map ((feature, index, ) => (
            <div;
              key={index}
              className="bg - zion - blue - dark border border - zion - blue - light p - 6 rounded - lg hover: border - zion - purple / 50 transition - all duration-300"            >;
              <div className="mb-4">;
                {feature.icon}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light">{feature.description}</p>
            </div>
<<<<<<< HEAD
=======

'"},

};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { CheckCircle, Smartphone, Users, Star, Mail } from 'lucide-react';
export const MobileFeatureShowcase: React.FC = () => {;
  const features = [;
    {;
      icon: <Users className="h-8 w-8 text-zion-cyan" />,;
      title: "Hire from Anywhere",,
  description: "Browse and hire top AI talent on the go with a streamlined mobile interface.";
    },;
    {;
      icon: <Star className="h-8 w-8 text-zion-purple" />,;
      title: "AI-Match Instantly",,
  description: "Get matched with the perfect talent or jobs using our advanced AI algorithm.";
    },;
    {;
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,;
      title: "Track Milestones",,
  description: "Monitor project progress and approve milestones directly from your phone.";
    },;
    {;
      icon: <Mail className="h-8 w-8 text-zion-purple" />,;
      title: "Instant Messaging",,
  description: "Chat with candidates or clients and receive notifications in real-time.";
    },;
    {;
      icon: <Smartphone className="h-8 w-8 text-zion-cyan" />,;
      title: "Biometric Security",,
  description: "Login quickly and securely with Face ID or Touch ID on supported devices.";
    }
  ];
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <section id="features" className="py-16 bg-zion-blue">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Everything You Need On The Go;
          </h2>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features;
          </p>;
        </div>;
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">;
          {features.map((feature, index) => (;
            <div;
              key={index} ;
              className="bg-zion-blue-dark border border-zion-blue-light p-6 rounded-lg hover:border-zion-purple/50 transition-all duration-300";
            >;
              <div className="mb-4">;
                {feature.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;
              <p className="text-zion-slate-light">{feature.description}</p>;
            </div>;
          ))}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
};
=======
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};

'"},
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"},

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
