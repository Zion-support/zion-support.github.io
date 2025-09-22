
=======
import { Facebook, Twitter } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Web3Login } from "./Web3Login",;
;
export function SocialLogin() {;
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } = useAuth(),;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="mt-6">;
      <div className="relative">;
        <div className="absolute inset-0 flex items-center">;
          <div className="w-full border-t border-zion-blue-light" />;
        </div>;
        <div className="relative flex justify-center text-sm">;
<<<<<<< HEAD

          </svg>;
        </Button>;
        <Button;
          type="button";
          variant="outline";

        </Button>;
        <Button;
          type="button";
          variant="outline";
