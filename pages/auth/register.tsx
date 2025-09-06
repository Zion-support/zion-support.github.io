<<<<<<< HEAD
import React, { useEffect } from 'react',
import Head from 'next / head',
import Link from 'next / link',
import SignupForm from '@/components / auth / SignupForm',
import { AuthButtons } from '@/components / AuthButtons',
import { fire_event } from '@/lib / analytics',
import { log_info } from '@/utils / production_logger',
import { use_router } from 'next / router',
const RegisterPage = () =>: any {
  const router = use_router (),
  useEffect (() => {
    fire_event ('signup_page_view');
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }, []),
  const handle_success = ({ email, emailVerificationRequired }: {
    email: string,
<<<<<<< HEAD
    emailVerificationRequired: boolean;
  }) =>: any {
    // Check condition
if ( {) {
  $2
}
      router.push (`/verify - status?email=${encodeURIComponent (email)}`);
=======
    emailVerificationRequired: boolean
  }) => {
    if (emailVerificationRequired) {
      router.push(`/verify-status?email=${encodeURIComponent(email)}`)
    } else {
      router.push('/auth/login?registrationSuccess=true')
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '@/components/auth/SignupForm';
import { AuthButtons } from '@/components/AuthButtons';
import { fireEvent } from '@/lib/analytics';
import { logInfo } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    } else {
      router.push ('/auth / login?registration_success = true');
    }
<<<<<<< HEAD
  },
  return (
    <>;
      <Head>;
        <title > Create Account - Zion Tech Marketplace</title>;
        <meta name="description" content="Create your Zion Tech Marketplace account" />;
      </Head>;
      <div className="min - h-screen flex items - center justify - center bg - gray - 50 py - 12 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-md w - full space - y-8">;
          <div>;
            <img;
              className="mx - auto h - 12 w - auto";
              src="/logos / zion - logo.png";
              alt="Zion Tech";
              width={48}
              height={48}
              on_error={(e) => {
                const target = e.current_target as HTMLImageElement,
                target.style.display = 'none';
              }}
            />;
            <h2 className="mt - 6 text - center text - 3xl font - extrabold text - gray - 900">;
              Create your account;
            </h2>;
            <p className="mt - 2 text - center text - sm text - gray - 600">;
              Or{' '}
              <Link;
                href="/auth / login";
                className="font - medium text - blue - 600 hover:text - blue - 500 underline";
              >;
                sign in if you already have an account;
              </Link>;
            </p>;
          </div>;
          <SignupForm on_success={handle_success} />;
          {/* Social signup options */}
          <div className="mt - 6">;
            <div className="relative">;
              <div className="absolute inset - 0 flex items - center">;
                <div className="w - full border - t border - gray - 300" />;
              </div>;
              <div className="relative flex justify - center text - sm">;
                <span className="px - 2 bg - gray - 50 text - gray - 500">Or continue with</span>;
              </div>;
            </div>;
            <AuthButtons providers={["google", "github"]} />;
          </div>;
          <div className="text - center mt - 4">;
            <p className="text - xs text - gray - 500">;
              By creating an account, you agree to our{' '}
              <Link href="/legal / terms" className="text - blue - 600 hover:text - blue - 500">;
                Terms of Service;
              </Link>{' '}
              and{' '}
};
export default RegisterPage;
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

  return (_<>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name=&quot;description&quot; content=&quot;Create your Zion Tech Marketplace account&quot; />
      </Head>

      <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-md w-full space-y-8&quot;>
          <div>
            <img
              className=&quot;mx-auto h-12 w-auto&quot;
              src=&quot;/logos/zion-logo.png&quot;
              alt=&quot;Zion Tech&quot;
=======
  }
=======
const RegisterPage = () => {;
  const router = useRouter();
  useEffect(() => {;
    fireEvent('signup_page_view');
  }, []),;
  const handleSuccess = ({ email, emailVerificationRequired }: {;
    email: string;
    emailVerificationRequired: boolean;
  }) => {;
    if (emailVerificationRequired) {;
      router.push(`/verify-status?email=${encodeURIComponent(email)}`);
    } else {;
      router.push('/auth/login?registrationSuccess=true');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              width={48}
              height={48}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
              }}
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
<<<<<<< HEAD
            <h2 className=&quot;mt-6 text-center text-3xl font-extrabold text-gray-900&quot;>
              Create your account
            </h2>
            <p className=&quot;mt-2 text-center text-sm text-gray-600&quot;>
              Or{' '}
              <Link
                href=&quot;/auth/login&quot;
                className=&quot;font-medium text-blue-600 hover:text-blue-500 underline&quot;
=======
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
<<<<<<< HEAD
              Or{' '}
=======
              Or{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
                sign in if you already have an account
              </Link>
            </p>
          </div>
<<<<<<< HEAD

          <SignupForm onSuccess={_handleSuccess} />

          {/* Social signup options */}
          <div className=&quot;mt-6&quot;>
            <div className=&quot;relative&quot;>
              <div className=&quot;absolute inset-0 flex items-center&quot;>
                <div className=&quot;w-full border-t border-gray-300&quot; />
              </div>
              <div className=&quot;relative flex justify-center text-sm&quot;>
                <span className=&quot;px-2 bg-gray-50 text-gray-500&quot;>Or continue with</span>
              </div>
            </div>
            <AuthButtons providers={[&quot;google&quot;, &quot;github&quot;]} />
          </div>

          <div className=&quot;text-center mt-4&quot;>
            <p className=&quot;text-xs text-gray-500&quot;>
              By creating an account, you agree to our{' '}
              <Link href=&quot;/legal/terms&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                Terms of Service
              </Link>{' '}
              and{' '}
=======
          <SignupForm onSuccess={handleSuccess} />
<<<<<<< HEAD
          {/* Social signup options */}
=======
          {/* Social signup options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
              By creating an account, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Link href="/legal/privacy" className="text-blue-600 hover: text-blue-500">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
<<<<<<< HEAD
},

export default RegisterPage

=======
<<<<<<< HEAD
}
export default RegisterPage;

=======
},
<<<<<<< HEAD
=======
<<<<<<< HEAD

export default RegisterPage,;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default RegisterPage,
            />;
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">;
              Create your account;
            </h2>;
            <p className="mt-2 text-center text-sm text-gray-600">;
              Or{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <Link;
                href="/auth/login";
                className="font-medium text-blue-600 hover:text-blue-500 underline";
              >;
                sign in if you already have an account;
              </Link>;
            </p>;
          </div>;
          <SignupForm onSuccess={handleSuccess} />;
          {/* Social signup options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="mt-6">;
            <div className="relative">;
              <div className="absolute inset-0 flex items-center">;
                <div className="w-full border-t border-gray-300" />;
              </div>;
              <div className="relative flex justify-center text-sm">;
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>;
              </div>;
            </div>;
            <AuthButtons providers={["google", "github"]} />;
          </div>;
          <div className="text-center mt-4">;
            <p className="text-xs text-gray-500">;
              By creating an account, you agree to our{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">;
                Terms of Service;
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
              <Link href="/legal/privacy" className="text-blue-600 hover: text-blue-500">;
                Privacy Policy;
              </Link>;
            </p>;
          </div>;
        </div>;
      </div>;
    </>;
  );
},;
export default RegisterPage;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
