
import { LoginCard } from &quot;./LoginCard&quot;;

export function LoginContent() {
  return (
    <div className=&quot;flex min-h-screen bg-zion-blue&quot;>
      <div className=&quot;flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24&quot;>
        <LoginCard />
      </div>
      <div className=&quot;hidden lg:block relative w-0 flex-1&quot;>
        <div className=&quot;absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-purple-light opacity-80&quot;>
          <div className=&quot;flex flex-col justify-center items-center h-full px-8&quot;>
            <div className=&quot;max-w-md text-center&quot;>
              <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>Join the Zion Community</h3>
              <p className=&quot;text-lg text-white/80&quot;>
                Connect with thousands of AI professionals, discover new opportunities, and showcase your services to a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
