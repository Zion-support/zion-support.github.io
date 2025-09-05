
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ReferralGuide() {_const _steps = [
    {
<<<<<<< HEAD
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
=======
      title: "Share your referral link", _description: "Copy your unique referral link and share it with potential clients or talent"},
    {_title: "They sign up", _description: "When someone clicks your link and creates an account, _they're tagged as your referral"},
    {_title: "They complete onboarding", _description: "Once they complete their profile setup, _your referral is confirmed"},
    {_title: "You earn rewards", _description: "Rewards are issued based on the type of user who completes onboarding"}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card>
      <CardHeader>
        <CardTitle>How Referrals Work</CardTitle>
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;space-y-4&quot;>
          {steps.map((step, index) => (
            <div key={index} className=&quot;flex gap-4&quot;>
              <div className=&quot;flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground&quot;>
                {index + 1}
              </div>
              <div className=&quot;space-y-1&quot;>
                <h4 className=&quot;font-medium&quot;>{step.title}</h4>
                <p className=&quot;text-sm text-muted-foreground&quot;>{step.description}</p>
=======
        <div className="space-y-4">
          {_steps.map((step, _index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {_index + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">{_step.title}</h4>
                <p className="text-sm text-muted-foreground">{_step.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
