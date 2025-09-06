import OnboardingWizard from '../components/onboarding/OnboardingWizard';
<<<<<<< HEAD
<<<<<<< HEAD
export default function OnboardingPage() {return (;
=======
export default function OnboardingPage(req, res) {
  try {
=======
export default function OnboardingPage() {;
=======
export default function OnboardingPage(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div>;
      <OnboardingWizard />;
    </div>;
  );
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}