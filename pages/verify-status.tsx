




    }
    return () => clearInterval(interval)
  }, [countdown]),

  const handleResendEmail = async () => {
    if (!email) {
      setError('Please enter your email address'),
      return
    }

    setIsResending(true),
    setError(''),
    setMessage(''),



import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

import { Mail, AlertCircle, CheckCircle, Clock, RefreshCw, ArrowLeft, Eye } from 'lucide-react';
import { AuthLayout } from '@/layout';

          {/* Header */}


          {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
            <p className="text-sm text-gray-600 mt-2">
              Check and manage your email verification status
            </p>
          </div>




          {/* Success Message */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Email Input */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"



              value={email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setEmail(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



              placeholder="Enter your email address"
              className="w-full"
            />

            {email && (

              <p className="text - xs text - gray - 500">;
                We'll check the verification status for this email address;
              </p>)}
          </div>;

          {/* Status Info */}

            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {/* Status Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





          {email && (

            <div className="bg - blue - 50 dark:bg - slate - 800 border border - blue - 200 dark:border - slate - 700 rounded - lg p - 4">;
              <h3 className="text - sm font - medium text - slate - 900 dark:text - slate - 100 mb - 2">Verification Status</h3>;
              <div className="text - sm text - slate - 700 dark:text - slate - 300 space - y-1">;
                <p>• Check your email inbox for a verification link</p>;
                <p>• Click the link in the email to verify your account</p>;
                <p>• Return here or try logging in after verification</p>;
              </div>;
              {lastSentTime && (


            {/* Check Status Button */}




              className="w-full"
              variant="outline"
            >
              {isCheckingStatus ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Checking Status...
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  Check Verification Status
                </>





              disabled={!email || isResending || countdown > 0}




              className="w-full"
              variant="secondary"
            >
              {isResending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Sending Email...
                </>
              ) : countdown > 0 ? (
                <>
                  <Clock className="h-4 w-4 mr-2" />
                  Resend in {countdown}s
                </>
              ) : (
                <>

                  <Mail className="h-4 w-4 mr-2" />
                  Resend Verification Email
                </>

            <Button;

              on_click={handleCheckStatus}
              disabled={!email || isCheckingStatus}
              className="w - full";
              variant="outline";
            >;
              {isCheckingStatus ? (
                <>;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Checking Status...;
                </>) : (
                <>;
                  <Eye className="h - 4 w - 4 mr - 2" />;
                  Check Verification Status;
                </>)}
            </Button>;
            {/* Resend Email Button */}
            <Button;
              on_click={handleResendEmail}
              disabled={!email || is_resending || countdown > 0}
              className="w - full";
              variant="secondary";
            >;
              {is_resending ? (
                <>;
                  <RefreshCw className="h - 4 w - 4 mr - 2 animate - spin" />;
                  Sending Email...;
                </>) : countdown > 0 ? (
                <>;
                  <Clock className="h - 4 w - 4 mr - 2" />;
                  Resend in {countdown}s;
                </>) : (
                <>;
                  <Mail className="h - 4 w - 4 mr - 2" />;
                  Resend Verification Email;
                </>)}
            </Button>;

            {/* Try Login Button */}
            <Button;
              on_click={handleTryLogin}
              disabled={!email}





              className="w-full"
            >
              Try Login
            </Button>
          </div>




          {/* Help Text */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Can't find the verification email? Check your spam folder or try a different email address.
            </p>
            <Button



              onClick={handleGoBack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </Button>
          </div>



          {/* Additional Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="border-t pt-4 space-y-2">
            <Button
              onClick={() => router.push('/signup')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




              variant="ghost"
              className="w-full text-sm"
            >
              Use Different Email Address
            </Button>
            <Button



              onClick={() => router.push('/contact')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




              variant="ghost"
              className="w-full text-sm"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )




  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



;



