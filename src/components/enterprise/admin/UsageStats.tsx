

export function UsageStats() {

  const handleSaveChanges = () => {
    toast({
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>
                  Monthly job posting limit
                </div>
                <Badge variant='outline'>25 / 50</Badge>
              </div>
              <Progress value={50} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>New limit:</div>
                <div className='col-span-2'>
                  <Input type='number' min='1' defaultValue='50' />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
=======
        

        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>
                  Monthly contact credits
                </div>
                <Badge variant='outline'>178 / 500</Badge>
              </div>
              <Progress value={35.6} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>New limit:</div>
                <div className='col-span-2'>
                  <Input type='number' min='1' defaultValue='500' />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
