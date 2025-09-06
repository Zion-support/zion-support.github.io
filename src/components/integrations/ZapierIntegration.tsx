export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');

  const handleCopyApiKey = () => {

  return (
    <div className='space-y-6'>
      <div className='grid md:grid-cols-3 gap-6'>
        <Card className='md:col-span-2'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Zapier Connection</h3>
              <Badge variant='outline' className='bg-blue-100 text-blue-800'>
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground mb-4'>
              Connect Zion with 3,000+ apps via Zapier. Use your API key below
              to set up integrations.
            </p>

                  />
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={handleCopyApiKey}
                  >
                    {copied ? (
                      <Check className='h-4 w-4' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}                  </Button>

                  </Button>

                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col items-start'>
            <Button variant='outline' className='gap-2'>
              <ExternalLink className='h-4 w-4' />              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>

              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>

                <span>Create calendar events for interviews</span>

              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant='outline' className='w-full gap-1'>
              <ExternalLink className='h-4 w-4' />              <span>Explore Zion Zaps</span>

              <span>Explore Zion Zaps</span>

            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className='text-lg font-semibold'>Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground mb-4'>
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>

          <div className='grid md:grid-cols-3 gap-4'>
            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>New Job Posted</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a new job is published on your account.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>            </div>

            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>New Application</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a talent applies to your job.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>
            </div>

            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>Contract Signed</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a contract is signed by all parties.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>            </div>

            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}