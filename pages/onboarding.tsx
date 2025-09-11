
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

  return (;
    <div>;
      <OnboardingWizard />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
