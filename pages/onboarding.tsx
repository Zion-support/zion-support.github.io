
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
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div>;
      <OnboardingWizard />;
    </div>;
  );

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
