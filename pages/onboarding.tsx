<<<<<<< HEAD
import OnboardingWizard from '../components/onboarding/OnboardingWizard';
export default function OnboardingPage() {return (;
export default function OnboardingPage(req, res) {
  try {
export default function OnboardingPage() {;
export default function OnboardingPage(req, res) {
  try {
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (;
    <div>;
      <OnboardingWizard />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
