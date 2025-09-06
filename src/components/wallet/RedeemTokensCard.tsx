

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,


const REWARD_OPTIONS: RewardOption[] = [
  {
    id: 'premium-week',
    title: 'Premium Week',
    description: '7 days of premium features including top placement in search results',
    cost: 100,
    type: 'feature'
  },
  {
    id: 'resume-review',
    title: 'AI Resume Review',
    description: 'Get your resume analyzed and optimized by our AI',
    cost: 50,
    type: 'feature'
  },
  {
    id: 'platform-credit',
    title: '$5 Platform Credit',
    description: 'Get $5 credit to use on any paid service',
    cost: 100,





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5" /> Redeem Rewards
        </CardTitle>
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>


                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
              <Button variant="ghost" size="sm">
                Learn More <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>

  )

