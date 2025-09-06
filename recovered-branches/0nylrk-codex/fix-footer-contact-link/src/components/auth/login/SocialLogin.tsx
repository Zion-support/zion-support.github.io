
    useAuth();

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">
            Or continue with
          </span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3">
  )
import { Facebook, Twitter } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Web3Login } from "./Web3Login",;
    <div className="mt-6">;
      <div className="relative">;
        <div className="absolute inset-0 flex items-center">;
          <div className="w-full border-t border-zion-blue-light" />;
        </div>;
        <div className="relative flex justify-center text-sm">;
import { Facebook, Twitter  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { use_auth  } from '@/hooks / use_auth';
import { Web3Login  } from './Web3Login';
export /**
 * SocialLogin - Function description
 */
function SocialLogin() {
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, is_loading } =;
    use_auth ();
;
  return (
    <div className="mt - 6">;
      <div className="relative">;
        <div className="absolute inset - 0 flex items - center">;
          <div className="w - full border - t border - zion - blue - light" />;
        </div>;
        <div className="relative flex justify - center text - sm">;
          <span className="px - 2 bg - zion - blue - dark text - zion - slate - light">;
            Or continue with;
          </span>;
        </div>;
      </div>;
    </div>;
  );
      <div className="mt - 6 grid grid - cols - 4 gap - 3">;
        <Button;
          type="button";
          variant="outline";
  );
}
;
