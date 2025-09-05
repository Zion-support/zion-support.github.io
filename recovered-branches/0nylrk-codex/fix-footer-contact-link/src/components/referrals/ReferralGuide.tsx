

export function ReferralGuide() {_const _steps = [
    {
      title: "Share your referral link", _description: "Copy your unique referral link and share it with potential clients or talent"},
    {_title: "They sign up", _description: "When someone clicks your link and creates an account, _they're tagged as your referral"},
    {_title: "They complete onboarding", _description: "Once they complete their profile setup, _your referral is confirmed"},
    {_title: "You earn rewards", _description: "Rewards are issued based on the type of user who completes onboarding"}];

  return (_<Card>
      <CardHeader>
        <CardTitle>How Referrals Work</CardTitle>
        <CardDescription>Follow these steps to earn rewards through referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {_steps.map((step, _index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {_index + 1}
              </div>
              <div className="space-y-1">
                <h4 className="font-medium">{_step.title}</h4>
                <p className="text-sm text-muted-foreground">{_step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
