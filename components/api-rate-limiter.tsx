import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button';
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
export default function APIRateLimiterPage() {
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const timeWindows = null;
    'reset': response.headers.get('x-ratelimit-reset')
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
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
              className='border-white text-white hover:bg-white hover:text-green-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>;
  );    </>
  )
}
