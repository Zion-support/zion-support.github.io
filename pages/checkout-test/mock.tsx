
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
  const router = useRouter();
    return <div>Redirecting...</div>;

  }
  return (
              <li>• Payment would be handled by Stripe</li>
              <li>• Order confirmation would be sent</li>
            </ul>
          </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
              shown when using dummy Stripe keys. In production, users would be;
              redirected to the actual Stripe checkout flow.;
            </p>;
          </div>;

              </li>              <li>• Cart items would be processed</li>;
              <li>• Payment would be handled by Stripe</li>;
              <li>• Order confirmation would be sent</li>;
            </ul>;
          </div>;

              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>);
;
