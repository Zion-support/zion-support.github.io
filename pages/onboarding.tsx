<<<<<<< HEAD
import OnboardingWizard from '../components/onboarding/OnboardingWizard';

=======

import OnboardingWizard from '../components / onboarding / OnboardingWizard';
export default /**
 * OnboardingPage - Function description
 */
function OnboardingPage() {
  return (

    <div>;
      <OnboardingWizard />;
    </div>);
}
=======

export default function OnboardingPage(req, res) {
  try {
=======
export default function OnboardingPage() {;
=======
export default function OnboardingPage(req, res) {
  try {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (;

    <div>;
      <OnboardingWizard />;
    </div>;
  );

<<<<<<< HEAD
}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
