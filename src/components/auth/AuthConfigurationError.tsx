class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);'
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;'
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;'
</div>'
      <div className='max - w-2xl w - full'>;'
</div>'
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">"
</div>"
          <div className="text-center mb-6">"
</div>"
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">"
</div>"
              <AlertTriangle className="h-8 w-8 text-red-600" />"
</AlertTriangle>
            </div>"
            <h1 className="text-3xl font-bold text-gray-900 mb-2">"
</h1>
            </h1>"
            <p className="text-gray-600">"
</p>
            </p>
          </div>





"
          <Alert variant="destructive" className="mb-6">"
</Alert>"
            <AlertTriangle className="h-4 w-4" />"
</AlertTriangle>
            <AlertDescription>
</AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
            </AlertDescription>
          </Alert>"
          <div className="bg-gray-50 rounded-lg p-4 mb-6">"
</div>"
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>""
            <ul className="text-sm text-gray-700 space-y-1">"
</ul>
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>
"
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;'
</div>'
          <div className='text-center mb-6'>;'
</div>'
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;'
</div>'
              <AlertTriangle className='h-8 w-8 text-red-600' />;'
</AlertTriangle>
            </div>;'
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;'
</h1>
            </h1>;'
            <p className='text-gray-600'>;'
</p>
            </p>;
          </div>;'
          <Alert variant='destructive' className='mb-6'>;'
</Alert>'
            <AlertTriangle className='h-4 w-4' />;'
</AlertTriangle>
            <AlertDescription>;
</AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              resolved.            </AlertDescription>;
          </Alert>;'
          <div className="flex flex-col sm:flex-row gap-3 mb-6">"
</div>
              <Button;"
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}'
</Button>'
                <Settings className="w-4 h-4 mr-2" />"
</Settings>
              </Button>"
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;"
</div>"
      <div className="max-w-2xl w-full">;"
</div>"
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">;"
</div>"
          <div className="text-center mb-6">;"
</div>"
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">;"
</div>"
              <AlertTriangle className="h-8 w-8 text-red-600" />;"
</AlertTriangle>
            </div>;"
            <h1 className="text-3xl font-bold text-gray-900 mb-2">;"
</h1>
            </h1>;"
            <p className="text-gray-600">;"
</p>
            </p>;
          </div>;"
          <Alert variant="destructive" className="mb-6">;"
</Alert>"
            <AlertTriangle className="h-4 w-4" />;"
</AlertTriangle>
            <AlertDescription>;
</AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
            </AlertDescription>;
          </Alert>;"
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;'
</div>'
            <h3 className='font-semibold text-gray-900 mb-2'>;'
</h3>
            </h3>;'
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">;"
</ul>"
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;""
            <ul className="text-sm text-gray-700 space-y-1">;"
</ul>"
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;'
</div>'
      <div className='max - w-2xl w - full'>;'
</div>'
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;'
</div>'
          <div className='text - center mb - 6'>;'
</div>'
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;'
</div>'
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;'
</AlertTriangle>
            </div>;'
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;'
</h1>
            </h1>;'
            <p className='text - gray - 600'>;'
</p>
            </p>;
          </div>;'
          <Alert variant='destructive' className='mb - 6'>;'
</Alert>'
            <AlertTriangle className='h - 4 w - 4' />;'
</AlertTriangle>
            <AlertDescription>;
</AlertDescription>
              <strong > Critical Issue #1:</strong> Auth0 environment variables;
              resolved.            </AlertDescription>;
          </Alert>;'
        <div className="bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6">;"
</div>"
          <div className="text - center mb - 6">;"
</div>"
            <div className="mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center">;"
</div>"
              <AlertTriangle className="h - 8 w - 8 text - red - 600" />;"
</AlertTriangle>
            </div>;"
            <h1 className="text - 3xl font - bold text - gray - 900 mb - 2">;"
</h1>
            </h1>;"
            <p className="text - gray - 600">;"
</p>
            </p>;
          </div>;"
          <Alert variant="destructive" className="mb - 6">;"
</Alert>"
            <AlertTriangle className="h - 4 w - 4" />;"
</AlertTriangle>
            <AlertDescription>;
</AlertDescription>
              <strong > Critical Issue #1:</strong> Auth0 environment variables are not configured.;
            </AlertDescription>;
          </Alert>;"
          <div className='bg - gray - 50 rounded - lg p - 4 mb - 6'>;'
</div>'
            <h3 className='font - semibold text - gray - 900 mb - 2'>;'
</h3>
            </h3>;'
            <ul className='text - sm text - gray - 700 space - y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg - gray - 50 rounded - lg p - 4 mb - 6">;"
</ul>"
            <h3 className="font - semibold text - gray - 900 mb - 2">Missing Configuration:</h3>;""
            <ul className="text - sm text - gray - 700 space - y-1">;"
</ul>
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;"
                <Settings className='w-4 h-4 mr-2' />;'
</Settings>
              </Button>;
            <Button;
              onClick={handleRefresh}'
              variant='outline'''
          <div className="flex flex-col sm:flex-row gap-3 mb-6">"
</Button>
              <Button;"
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}'
</Button>'
                <Settings className="w-4 h-4 mr-2" />"
</Settings>
              </Button>
            <Button;
              onClick={handleRefresh}"
              variant="outline"""
              className="flex-1""
            >
</Button>"
              <RefreshCw className="w-4 h-4 mr-2" />"
</RefreshCw>
            </Button>
          </div>"
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />;"
</RefreshCw>
            </Button>;
          </div>;"
          <div className="border-t pt-6">"
</div>"
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>""
            <ol className="space-y-3 text-sm">"
</ol>"
              <li className="flex items-start gap-3">"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>"
                <div>
</div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
</br>
                  <a;"
                    href="https://manage.auth0.com/"""
                    target="_blank"""
                    rel="noopener noreferrer"""
                    className="text-blue-600 hover:underline inline-flex items-center gap-1""
                  >
</a>"
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />"
</ExternalLink>
                  </Link>
                </div>
              </li>

              

"
              <li className="flex items-start gap-3">"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>"
                <div>
</div>
                  <strong>Create Application:</strong>
                  <br />
</br>
                </div>
              </li>


              "
              <li className="flex items-start gap-3">"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>"
                <div>
</div>
                  <strong>Configure Environment:</strong>
                  <br />
</br>"
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;'
</ExternalLink>
                  </a>;
                </div>;
              </li>;'
              <li className='flex items-start gap-3'>;'
</li>'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;'
</span>
                </span>                <div>                <div>;
</div>
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
</br>
                  <a;'
                    href="https://manage && manage.auth0.com/"""
                    target="_blank"""
                    rel="noopener noreferrer"""
                    className="text-blue-600 hover:underline inline-flex items-center gap-1">;"
</a>"
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;"
</ExternalLink>
                  </a>;
                </div>;
              </li>;"
              <li className="flex items-start gap-3">;"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>;"
                <div>;
</div>
                  <strong>Create Application:</strong>;"
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;'
</div>
              <Button;
                on_click={() =>;
</Button>'
                className='bg - blue - 600 hover:bg - blue - 700 text - white flex - 1'              <Button;''
                on_click = {(, ) => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }'
</Button>'
                <Settings className='w - 4 h - 4 mr - 2' />;'
</Settings>
              </Button>)}
            <Button;
              on_click={handle_refresh}'
              variant='outline';''
              className='flex - 1'            >;'
</Button>'
              <RefreshCw className='w - 4 h - 4 mr - 2' />              Check Again              <RefreshCw className="w - 4 h - 4 mr - 2" />;"
</RefreshCw>
            </Button>;
          </div>;"
          <div className='border - t pt - 6'>;'
</div>'
            <h3 className='font - semibold text - gray - 900 mb - 3'>;'
</h3>
            </h3>;'
            <ol className='space - y-3 text - sm'>;'
</ol>'
              <li className='flex items - start gap - 3'>;'
</li>'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;'
</span>
                </span>;
                <div>;
</div>
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
</br>
                  <a;'
                    href='https://manage.auth0.com/';''
                    target='_blank';''
                    rel='noopener noreferrer';''
                    className='text - blue - 600 hover:underline inline - flex items - center gap - 1';'
                  >;
</a>'
                    Visit Auth0 Dashboard <ExternalLink className='w - 3 h - 3' />;'
</ExternalLink>
                  </a>;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
</li>'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;'
</span>
                </span>                <div>                <div>;
</div>
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
</br>
                  <a;'
                    href="https://manage.auth0.com/";""
                    target="_blank";""
                    rel="noopener noreferrer";""
                    className="text - blue - 600 hover:underline inline - flex items - center gap - 1";"
                  >;
</a>"
                    Visit Auth0 Dashboard <ExternalLink className="w - 3 h - 3" />;"
</ExternalLink>
                  </a>;
                </div>;
              </li>;"
              <li className="flex items - start gap - 3">;"
</li>"
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">2</span>;"
                <div>;
</div>
                  <strong > Create Application:</strong>;
                  <br />;
</br>
                </div>;
              </li>;
                </div>;
              </li>;"
              <li className='flex items-start gap-3'>;'
</li>'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;'
</span>
                </span>;
                <div>;
</div>
                  <strong>Restart Application:</strong>;
                  <br />;
</br>'
                  <code className='bg-gray-100 px-1 rounded'>;'
</code>'
                  </code>{' '}''
              <li className="flex items-start gap-3">"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>"
                <div>
</div>

                  <strong>Configure Environment:</strong>
                  <br />
</br>"
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file;"
                </div>
              </li>"
              <li className="flex items-start gap-3">"
</li>"
              <li className="flex items-start gap-3">"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>"
                <div>
</div>
                  <strong>Restart Application:</strong>
                  <br />
</br>


"
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;"
                </div>
              </li>
            </ol>
          </div>
        </div>
                  to apply changes                </div>                <div>;
</div>
                  <strong>Configure Environment:</strong>;
                  <br />;
</br>"
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;"
                </div>;
              </li>;"
              <li className="flex items-start gap-3">;"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;"
                <div>;
</div>
                  <strong>Restart Application:</strong>;
                  <br />;
</br>"
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;""
              <li className='flex items - start gap - 3'>;'
</li>'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;'
</span>
                </span>;
                <div>;
</div>
                  <strong > Configure Environment:</strong>;
                  <br />;
</br>'
                  <code className='bg - gray - 100 px - 1 rounded'>;'
</code>'
                  </code>{' '}'
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
</li>'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;'
</span>
                </span>;
                <div>;
</div>
                  <strong > Restart Application:</strong>;
                  <br />;
</br>'
                  <code className='bg - gray - 100 px - 1 rounded'>;'
</code>'
                  </code>{' '}'
                  to apply changes                </div>                <div>;
</div>
                  <strong > Configure Environment:</strong>;
                  <br />;
</br>'
                  Copy credentials to <code className="bg - gray - 100 px - 1 rounded">.env.local</code> file;"
                </div>;
              </li>;"
              <li className="flex items - start gap - 3">;"
</li>"
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">4</span>;"
                <div>;
</div>
                  <strong > Restart Application:</strong>;
                  <br />;
</br>"
                  Run <code className="bg - gray - 100 px - 1 rounded">npm run dev</code> to apply changes;"
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;"
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">"
</div>"
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>""
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">"
</div>
            <Link;"
              href="/marketplace"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800""
            >
</Link>
              <span>Browse Marketplace</span>"
              <ExternalLink className="w-4 h-4" />"
</ExternalLink>
            </Link>
              <span>View Talent Pool</span>"
              <ExternalLink className="w-4 h-4" />"
</ExternalLink>
            </Link>




            
            <Link;"
              href="/help"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800""
            >
</Link>
              <span>Contact Support</span>"
              <ExternalLink className="w-4 h-4" />"
</ExternalLink>
            </Link>
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;"
              <ExternalLink className="w-4 h-4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/status"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800""
            >
</Link>
              <span>System Status</span>




          </div>
        </div>"
          <div className="mt-6 text-center">"
</div>"
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">"
</div>"
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">"
</div>"
                <CheckCircle className="w-5 h-5" />"
</CheckCircle>"
                <span className="font-semibold">Automated Setup Available</span>"
              </div>"
              <p className="text-sm text-green-600 mb-3">"
</p>
              </p>



"
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">"
</code>
              </code>
            </div>
          </div>
            <Link;"
              href="/talent"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;"
</Link>
              <span>View Talent Pool</span>;"
              <ExternalLink className="w-4 h-4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/help"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;"
</Link>
              <span>Contact Support</span>;"
              <ExternalLink className="w-4 h-4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/status"""
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;"
</Link>
              <span>System Status</span>;"
              <ExternalLink className='w-4 h-4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/talent'''
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;'
</Link>
              <span>View Talent Pool</span>;'
              <ExternalLink className='w-4 h-4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/help'''
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;'
</Link>
              <span>Contact Support</span>;'
              <ExternalLink className='w-4 h-4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/status'''
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;'
</Link>
              <span>System Status</span>;'
              <ExternalLink className='w-4 h-4' />            </Link>              <ExternalLink className="w-4 h-4" />;"
</ExternalLink>
            </Link>;
          </div>;
        </div>;"
          <div className='mt-6 text-center'>;'
</div>'
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;'
</div>'
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;'
</div>'
                <CheckCircle className='w-5 h-5' />;'
</CheckCircle>'
                <span className='font-semibold'>Automated Setup Available</span>;'
              </div>;'
              <p className='text-sm text-green-600 mb-3'>;'
</p>
              </p>;'
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>;'
</code>'
              <p className="text-sm text-green-600 mb-3">;"
</p>
              </p>;"
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;"
</code>
              </code>;
            </div>;
          </div>;"
        <div className="mt-6 text-center text-sm text-gray-500">"
</div>
          <p>
</p>
            <button;"
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}'
</button>
            </button>
          </p>
        </div>
      </div>
    </div>'
        <div className="mt-6 text-center text-sm text-gray-500">;"
</div>
          <p>;
</p>
            <button;"
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}'
</button>
            </button>;
          </p>;
        </div>;
      </div>;
    </div>;'
        <div className='bg - blue - 50 rounded - xl border border - blue - 200 p - 6'>;'
</div>'
          <h3 className='font - semibold text - blue - 900 mb - 3'>;'
</h3>
          </h3>;'
          <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 3'>;'
</div>
            <Link;'
              href='/marketplace';''
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';'
            >;
</Link>
              <span > Browse Marketplace</span>            >;
              <span > Browse Marketplace</span>;'
              <ExternalLink className="w - 4 h - 4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/talent";""
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";"
            >;
</Link>
              <span > View Talent Pool</span>;"
              <ExternalLink className="w - 4 h - 4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/help";""
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";"
            >;
</Link>
              <span > Contact Support</span>;"
              <ExternalLink className="w - 4 h - 4" />;"
</ExternalLink>
            </Link>;
            <Link;"
              href="/status";""
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";"
            >;
</Link>
              <span > System Status</span>;"
              <ExternalLink className='w - 4 h - 4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/talent';''
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';'
            >;
</Link>
              <span > View Talent Pool</span>;'
              <ExternalLink className='w - 4 h - 4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/help';''
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';'
            >;
</Link>
              <span > Contact Support</span>;'
              <ExternalLink className='w - 4 h - 4' />;'
</ExternalLink>
            </Link>;
            <Link;'
              href='/status';''
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';'
            >;
</Link>
              <span > System Status</span>;'
              <ExternalLink className='w - 4 h - 4' />            </Link>              <ExternalLink className="w - 4 h - 4" />;"
</ExternalLink>
            </Link>;
          </div>;
        </div>;"
          <div className='mt - 6 text - center'>;'
</div>'
            <div className='bg - green - 50 rounded - lg border border - green - 200 p - 4'>;'
</div>'
              <div className='flex items - center justify - center gap - 2 text - green - 700 mb - 2'>;'
</div>'
                <CheckCircle className='w - 5 h - 5' />;'
</CheckCircle>'
                <span className='font - semibold'>Automated Setup Available</span>;'
              </div>;'
              <p className='text - sm text - green - 600 mb - 3'>;'
</p>
              </p>;'
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>                npm run setup:auth0              </div>;'
</code>'
              <p className="text - sm text - green - 600 mb - 3">;"
</p>
              </p>;"
              <code className="bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm">;"
</code>
              </code>;
            </div>;
          </div>)}"
        <div className='mt - 6 text - center text - sm text - gray - 500'>;'
</div>
          <p>;
</p>
            <button;
              on_click={() =>;
</button>'
              className='text - blue - 600 hover:underline'            >        <div className="mt - 6 text - center text - sm text - gray - 500">;"
</div>
          <p>;
</p>
            <button;"
              on_click = {() => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }'
</button>
            </button>;
          </p>;
        </div>;
      </div>;
    </div>);'