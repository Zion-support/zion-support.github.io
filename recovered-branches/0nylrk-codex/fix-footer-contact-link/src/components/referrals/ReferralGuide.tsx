
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

<<<<<<< HEAD
export function ReferralGuide() {

  const steps = [
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      title: "Share your referral link"
      description: "Copy your unique referral link and share it with potential clients or talent"}
    {

<<<<<<< HEAD
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},

    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

      title: "They sign up"
      description: "When someone clicks your link and creates an account, they're tagged as your referral"}
    {
      title: "They complete onboarding"
      description: "Once they complete their profile setup, your referral is confirmed"}
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},
    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
=======

      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

=======
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},

    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ReferralGuide() {;
  const steps = [;
    {;
      title: "Share your referral link",;
      description: "Copy your unique referral link and share it with potential clients or talent"},;
    {;
      title: "They sign up",;
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
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},;
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"},;
    {;
      title: "You earn rewards";
      description: "Rewards are issued based on the type of user who completes onboarding"}];
  return (;
=======
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"};
    {;
      title: "You earn rewards",;
      description: "Rewards are issued based on the type of user who completes onboarding"}],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card>;
      <CardHeader>;
        <CardTitle>How Referrals Work</CardTitle>;
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
<<<<<<< HEAD



}
                {index + 1}
              </div>;
              <div className="space-y-1">;
                <h4 className="font-medium">{step && step.title}</h4>;
                <p className="text-sm text-muted-foreground">{step && step.description}</p>;
              </div>;
            </div>;
          ))}
=======
          {steps && steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </CardContent>;
    </Card>;
  );
}
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
<<<<<<< HEAD
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
  ),;}
 const steps = [ {
  
}</div> </CardContent> </Card>) 
}
          {steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
