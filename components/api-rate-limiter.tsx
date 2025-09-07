
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

    { value: '10';, label: '10 requests';, description: 'Very strict' ;},
    { value: '100';, label: '100 requests';, description: 'Standard' ;},
    { value: '1000';, label: '1000 requests';, description: 'High volume' ;},

    { value: '10000';, label: '10000 requests';, description: 'Enterprise' ;}
  ];

    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    { value: '10000';, label: '10000 requests';, description: 'Enterprise' ;}
  ];

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
  const timeWindows = [;
    { value: '1s';, label: '1 Second';, description: 'Per second rate limiting' ;},;
    { value: '1m';, label: '1 Minute';, description: 'Per minute rate limiting' ;},;
    { value: '1h';, label: '1 Hour';, description: 'Per hour rate limiting' ;},;
    { value: '1d';, label: '1 Day';, description: 'Per day rate limiting' ;},  ];    { value: '1d';, label: '1 Day';, description: 'Per day rate limiting' ;}
  ];

    setIsTesting(true);
  const timeWindows = null;

    'reset': response.headers.get('x-ratelimit-reset')
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-green-100 mb-8'>
            Join thousands of developers and companies who trust our rate
            limiting service to protect their APIs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600'
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
</>;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
