interface Service {
  
id: string;
import React from "react";
import { useRouter } from "next/router";
import { useForm, ControllerRenderProps } from "react-hook-form";,
import { zodResolver } from "@hookform/resolvers/zod";,
import { z } from "zod";
import { LogIn, User, Eye, EyeOff } from "lucide-react";
import { fireEvent } from "@/lib/analytics";
import { useAuth } from "@/context/auth/AuthProvider";,
const handleResendEmail = async () => {';
  const email = form.getValues ('email');
if (!email) {';
  form.setError ('root', {';
  message: 'Please enter your email address.';
});
return,;
}setIsResending (true);'
body: JSON.stringify ({email})
return
}router.push (`/verify-status?email=$ {
  encodeURIComponent (email)
}`)
}
}> {form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message}</AlertDescription> </Alert>)
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {verificationMessage}</p>) "