
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
;
export function ReferralGuide() {;
  const steps = [;
    {;
      title:"Share your referral link",;
      description:"Copy your unique referral link and share it with potential clients or talent"},;
    {;
      title:"They sign up",;
      description:"When someone clicks your link and creates an account, they're tagged as your referral"},;
    {;
      title:"They complete onboarding",;
      description:"Once they complete their profile setup, your referral is confirmed"},;
    {;
      title:"You earn rewards",;
      description:"Rewards are issued based on the type of user who completes onboarding"}],;
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>How Referrals Work</CardTitle>;
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;
                {index + 1}
              </div>;
              <div className="space-y-1">;
                <h4 className="font-medium">{step.title}</h4>;
                <p className="text-sm text-muted-foreground">{step.description}</p>;
              </div>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  ),;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
export function ReferralGuide() {_const _steps = [
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
      title: "You earn rewards",
      description: "Rewards are issued based on the type of user who completes onboarding"}],      title: "Share your referral link", _description: "Copy your unique referral link and share it with potential clients or talent"},
    {_title: "They sign up", _description: "When someone clicks your link and creates an account, _they're tagged as your referral"},
    {_title: "They complete onboarding", _description: "Once they complete their profile setup, _your referral is confirmed"},
    {_title: "You earn rewards", _description: "Rewards are issued based on the type of user who completes onboarding"}];

  return (_<Card>
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
                <p className=&quot;text-sm text-muted-foreground&quot;>{step.description}</p>              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
