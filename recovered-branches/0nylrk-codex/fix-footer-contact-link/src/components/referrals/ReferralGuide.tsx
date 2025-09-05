
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ReferralGuide() {
  const steps = [
    {
      title: &quot;Share your referral link&quot;,
      description: &quot;Copy your unique referral link and share it with potential clients or talent&quot;},
    {
      title: &quot;They sign up&quot;,
      description: &quot;When someone clicks your link and creates an account, they're tagged as your referral&quot;},
    {
      title: &quot;They complete onboarding&quot;,
      description: &quot;Once they complete their profile setup, your referral is confirmed&quot;},
    {
<<<<<<< HEAD
      title: "You earn rewards",
      description: "Rewards are issued based on the type of user who completes onboarding"}],
=======
      title: &quot;You earn rewards&quot;,
      description: &quot;Rewards are issued based on the type of user who completes onboarding&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card>
      <CardHeader>
        <CardTitle>How Referrals Work</CardTitle>
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-4&quot;>
          {steps.map((step, index) => (
            <div key={index} className=&quot;flex gap-4&quot;>
              <div className=&quot;flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground&quot;>
                {index + 1}
              </div>
              <div className=&quot;space-y-1&quot;>
                <h4 className=&quot;font-medium&quot;>{step.title}</h4>
                <p className=&quot;text-sm text-muted-foreground&quot;>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
