

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",


=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ReferralGuide() {

  const steps = [
    {
      title: "Share your referral link"
      description: "Copy your unique referral link and share it with potential clients or talent"}
    {

      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"};

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


=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
export function ReferralGuide() {;
  const steps = [;
    {;
      title: "Share your referral link",;
      description: "Copy your unique referral link and share it with potential clients or talent"},;
    {;
      title: "They sign up",;
      description: "When someone clicks your link and creates an account, they're tagged as your referral"},;
    {;
      title: "They complete onboarding",;
      description: "Once they complete their profile setup, your referral is confirmed"},;
    {;
      title: "You earn rewards";
      description: "Rewards are issued based on the type of user who completes onboarding"}];
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
