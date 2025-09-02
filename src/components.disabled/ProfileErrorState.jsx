;import { AlertCircle, RefreshCw } from &apos;lucide-react';&apos;&apos;
export const ProfileErrorState = ({}
';
&apos;';
&apos;&apos;';
  error = &apos;Failed to load profile&apos;,
  onRetry}) => {}
  return()&apos;&apos;
    <div className=&apos;max-w-4xl mx-auto px-4 py-8&apos;>'&apos;&apos;''
      <Card>&apos;&apos;'&apos;&apos;'
        <CardHeader className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4&apos;>'&apos;&apos;'&apos;&apos;
            <AlertCircle className=&apos;w-8 h-8 text-red-600&apos; />&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;'&apos;&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-2&apos;>
            Oops! Something went wrong&apos;&apos;'&apos;&apos;
          </h2>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-gray-600&apos;>{error}&apos;</p>&apos;&apos;'&apos;&apos;
        </CardHeader>&apos;&apos;'&apos;&apos;'
        <CardContent className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
            <p className=&apos;text-sm text-gray-500&apos;>';
              We&apos;re having trouble loading this profile. Please try again or;
              contact support if the problem persists.&apos;&apos;
            </p>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>
              {onRetry && (&apos;}
                <Button&apos;&apos;';
                  onClick={onRetry}&apos;&apos;'';
                  className=&apos;flex items-center space-x-2&apos;&apos;'&apos;>'&apos;&apos;'&apos;&apos;
                  <RefreshCw className=&apos;w-4 h-4&apos; />&apos;
                  <span>Try Again</span>
                </Button>
              )}
&apos;&apos;'&apos;&apos;
              <Button&apos;&apos;'&apos;';
                variant=&apos;outline&apos;&apos;';
                onClick={() => (window.location.href = &apos;/&apos;)}
              >
                Go Home&apos;&apos;
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )}&apos;';&quot;
}&apos;';';
&apos;&apos;'&apos;'&quot;
&quot;"