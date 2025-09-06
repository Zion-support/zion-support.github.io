
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from "react";
import { TalentRegistrationForm } from "@/components/profile/TalentRegistrationForm";
=======
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { TalentRegistrationForm } from "@/components/profile/TalentRegistrationForm";
=======
import React from "react",
import { TalentRegistrationForm } from "@/components/profile/TalentRegistrationForm",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {TalentRegistrationForm} from "@/components/profile/TalentRegistrationForm";
=======
import React from "react",
import { TalentRegistrationForm } from "@/components/profile/TalentRegistrationForm",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default function CreateTalentProfile() {
  return (
    <div className="bg-zion-blue min-h-screen py-8 md: py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Showcase your skills to top clients and employers. Create a professional profile
            to get discovered for AI and tech projects on the Zion Marketplace.
          </p>
        </div>
        <TalentRegistrationForm />
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import { TalentRegistrationForm } from "@/components/profile/TalentRegistrationForm";

export default function CreateTalentProfile() {;
  return (
    <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
      <div className="container mx-auto px-4">;
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>;
          <p className="text-zion-slate-light max-w-2xl mx-auto">;
=======
import React from './react';
import { TalentRegistrationForm } from '@/components / profile / TalentRegistrationForm';
export default /**
 * CreateTalentProfile - Function description
 */
function CreateTalentProfile() {
  return (
    <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;
          <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Talent Network</h1>;
          <p className="text - zion - slate - light max - w-2xl mx - auto">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            Showcase your skills to top clients and employers. Create a professional profile;
            to get discovered for AI and tech projects on the Zion Marketplace.;
          </p>;
        </div>;

        <TalentRegistrationForm />;
      </div>;
    </div>;
  );
}
        <TalentRegistrationForm />;
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
