import OnboardingWizard from '../components/onboarding/OnboardingWizard';
<<<<<<< HEAD
export default function OnboardingPage() {;
=======
export default function OnboardingPage(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}