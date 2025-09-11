


=======
import React, { useEffect } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import SignupForm from '@/components/auth/SignupForm',;
import { AuthButtons } from '@/components/AuthButtons',;
import { fireEvent } from '@/lib/analytics',;
import { logInfo } from '@/utils/productionLogger',;
import { useRouter } from 'next/router',;
const RegisterPage = () => {
  const router = useRouter(),

  useEffect(() => {
    fireEvent('signup_page_view')
  }, []),

  const handleSuccess = ({ email, emailVerificationRequired }: {
    email: string,
    emailVerificationRequired: boolean
  }) => {
    if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`)
    } else {
      router.push('/auth/login?registrationSuccess=true')
    }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '@/components/auth/SignupForm';
import { AuthButtons } from '@/components/AuthButtons';
import { fireEvent } from '@/lib/analytics';
import { logInfo } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
const RegisterPage = () => {
  const router = useRouter()
  useEffect(() => {
    fireEvent('signup_page_view')
  }, [])
  const handleSuccess = ({ email, emailVerificationRequired }: {
    email: string
    emailVerificationRequired: boolean
  }) => {
    if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`)
    } else {
      router.push('/auth/login?registrationSuccess=true')
    }
  }
const RegisterPage = () => {;
  const router = useRouter();
  useEffect(() => {;
    fireEvent('signup_page_view');
  }, []),;
  const handleSuccess = ({ email, emailVerificationRequired }: {;
    email: string;

    emailVerificationRequired: boolean;
  }) =>: any {
    // Check condition
if ( {) {
  $2
}

      router.push ('/auth / login?registration_success = true');

    }


  },
  return (
    <>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name="description" content="Create your Zion Tech Marketplace account" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logos/zion-logo.png"
              alt="Zion Tech"
              width={48}
              height={48}
              on_error={(e) => {
                const target = e.current_target as HTMLImageElement,
                target.style.display = 'none';

              }}
              width={48  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              height={48  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onError={(e) => {;
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              Or{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>
          <SignupForm onSuccess={handleSuccess} />
          {/* Social signup options */}
          {/* Social signup options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>
            <AuthButtons providers={["google", "github"]} />
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our{' '}
              <Link href="/legal / terms" className="text - blue - 600 hover:text - blue - 500">;
                Terms of Service;
              </Link>{' '}
              and{' '}
              By creating an account, you agree to our{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              and{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <Link href="/legal/privacy" className="text-blue-600 hover: text-blue-500">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterPage;

=======
              <Link href="/legal / privacy" className="text - blue - 600 hover: text - blue - 500">;
                Privacy Policy;
              </Link>;
            </p>;
          </div>;
        </div>;
      </div>;
    </>);
},
export default RegisterPage,
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
