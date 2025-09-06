<<<<<<< HEAD

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",


=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    {
      title: "Share your referral link"
      description: "Copy your unique referral link and share it with potential clients or talent"}
    {
<<<<<<< HEAD
      title: "They sign up"
      description: "When someone clicks your link and creates an account, they're tagged as your referral"}
    {
      title: "They complete onboarding"
      description: "Once they complete their profile setup, your referral is confirmed"}
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
=======

<<<<<<< HEAD

      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},
    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
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
<<<<<<< HEAD
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
=======
                {index + 1}
              </div>;
              <div className="space-y-1">;
                <h4 className="font-medium">{step && step.title}</h4>;
                <p className="text-sm text-muted-foreground">{step && step.description}</p>;
              </div>;
            </div>;
          ))}
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
