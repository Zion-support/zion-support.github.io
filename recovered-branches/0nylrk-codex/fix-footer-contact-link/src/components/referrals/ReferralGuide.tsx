
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export function ReferralGuide() {

  const steps = [
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
export /**
 * ReferralGuide - Function description
 */
function ReferralGuide() {
  const steps = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      title: "Share your referral link"
      description: "Copy your unique referral link and share it with potential clients or talent"}
    {
      title: "They sign up"
      description: "When someone clicks your link and creates an account, they're tagged as your referral"}
    {
      title: "They complete onboarding"
      description: "Once they complete their profile setup, your referral is confirmed"}
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},
    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";


  return (
    <Card>
      <CardHeader>
        <CardTitle>How Referrals Work</CardTitle>
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

export function ReferralGuide() {;
  const steps = [;
    {;
      title: "Share your referral link",;
      description: "Copy your unique referral link and share it with potential clients or talent"},;
    {;
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"};
    {;
      title: "You earn rewards",;
      description: "Rewards are issued based on the type of user who completes onboarding"}],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <Card>;
      <CardHeader>;
        <CardTitle>How Referrals Work</CardTitle>;
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {steps && steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
=======
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"}
    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"}
    {
      title: "You earn rewards",
      description: "Rewards are issued based on the type of user who completes onboarding"}],
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > How Referrals Work</CardTitle>;
        <CardDescription > Follow these steps to earn rewards through referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          {steps.map ((step, index) => (
            <div key={index} className="flex gap - 4">;
              <div className="flex h - 8 w - 8 items - center justify - center rounded - full bg - primary text - primary - foreground">;
                {index + 1}
              </div>;
              <div className="space - y-1">;
                <h4 className="font - medium">{step.title}</h4>;
                <p className="text - sm text - muted - foreground">{step.description}</p>;
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
