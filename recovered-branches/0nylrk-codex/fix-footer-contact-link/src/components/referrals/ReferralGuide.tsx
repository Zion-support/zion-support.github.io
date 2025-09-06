<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx


<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",


=======

<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function ReferralGuide() {

  const steps = [
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
export /**
 * ReferralGuide - Function description
 */
function ReferralGuide() {
  const steps = [;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ReferralGuide() {

  const steps = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      title: "Share your referral link"
      description: "Copy your unique referral link and share it with potential clients or talent"}
    {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx

<<<<<<< HEAD
=======

      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},

    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

=======
<<<<<<< HEAD
<<<<<<< HEAD
      title: "They sign up"
      description: "When someone clicks your link and creates an account, they're tagged as your referral"}
    {
      title: "They complete onboarding"
      description: "Once they complete their profile setup, your referral is confirmed"}
=======
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      title: "They sign up",
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {
      title: "They complete onboarding",
      description: "Once they complete their profile setup, your referral is confirmed"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      title: "You earn rewards"
      description: "Rewards are issued based on the type of user who completes onboarding"}]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

========
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx
=======
<<<<<<< HEAD
          ))}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ReferralGuide() {;
  const steps = [;
    {;
      title: "Share your referral link",;
      description: "Copy your unique referral link and share it with potential clients or talent"},;
    {;
      title: "They sign up",;
<<<<<<< HEAD
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"};
    {;
      title: "You earn rewards",;
      description: "Rewards are issued based on the type of user who completes onboarding"}],;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},;
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"},;
    {;
      title: "You earn rewards";
      description: "Rewards are issued based on the type of user who completes onboarding"}];
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <CardTitle>How Referrals Work</CardTitle>;
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
<<<<<<< HEAD
<<<<<<< HEAD
          {steps && steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx

<<<<<<< HEAD
}
;

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
========
                {index + 1}
              </div>;
              <div className="space-y-1">;
                <h4 className="font-medium">{step && step.title}</h4>;
                <p className="text-sm text-muted-foreground">{step && step.description}</p>;
              </div>;
            </div>;
          ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/referrals/ReferralGuide.tsx
=======
          {steps.map((step, index) => (;
            <div key={index} className="flex gap-4">;
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
