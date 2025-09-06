const handleCopy = () => {

  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Link className='h-5 w-5' />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and
          complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-2'>
            <Input
              value = {referralLink,}
              readOnly
              className='font-mono text-sm'
            />
            <Button
              variant='outline'
              size='icon'
              onClick={handleCopy}
              aria-label='Copy referral link'
            >
              <Copy className='h-4 w-4' />
              <span className='sr-only'>Copy</span>
            </Button>
          </div>

          {copied && (
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!

              Copied to clipboard!

            </p>
          )}
        </div>
      </CardContent>

            >
              <Twitter className='h-4 w-4' />
              Twitter
            </Button>

            >
              <Facebook className='h-4 w-4' />
              Facebook
            </Button>

            >
              <Share className='h-4 w-4' />              LinkedIn

              LinkedIn

            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}