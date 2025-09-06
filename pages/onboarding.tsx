import OnboardingWizard from '../components/onboarding/OnboardingWizard';
<<<<<<< HEAD
export default function OnboardingPage() {return (;
=======
export default function OnboardingPage(req, res) {
  try {
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}