

:src_backup/pages/UpdatePassword.tsx

import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
origin/cursor/automate-test-improve-and-merge-code-2533
:src/pages/UpdatePassword.tsx
import { useRouter } from 'next/router'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { z } from "zod"
import { LockKeyhole } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form
  FormControl
  FormField
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form"; import { toast } from "@/hooks/use-toast"
import { cleanupAuthState } from "@/utils/authUtils"
import { logErrorToProduction } from '@/utils/productionLogger'
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from 'lucide-react'

import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",

      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),

:src/pages/UpdatePassword.tsx
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
}

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be less than 64 characters"),

      password: '',
      confirmPassword: '',
    },
  });
      password: ',
      confirmPassword: '}});

  useEffect(() => {
    // Extract access token from URL hash on the client
:src/pages/UpdatePassword.tsx
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const hashParams = new URLSearchParams(hash.substring(1));
    const token = hashParams.get('access_token');

    const hash = typeof window !== 'undefined' ? window.location.hash : "",


      setError(
        'No access token found. Please request a new password reset link.'
      );

      setError(
        'No access token found. Please request a new password reset link.'
      );
      return;

        refresh_token: '',
      });
        refresh_token: '});

      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) {
        toast({
          title: 'Password update failed',
          description: error.message,
          variant: 'destructive',
        });
        setError(error.message);
        return;

        title: "Password updated successfully",
        description: "You can now log in with your new password."}),

        title: 'Password updated successfully',
        description: 'You can now log in with your new password.',
      });
        title: Password updated successfully',
        description: 'You can now log in with your new password.});

        router.push("/login")

:src/pages/UpdatePassword.tsx
        router.push('/login');
      }, 3000);
    } catch (error: any) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error : undefined,
        { message: 'Password update error' }
      );
      toast({
        title: 'Password update failed',
        description: error.message || 'An unexpected error occurred',
        variant: 'destructive',
      });
      setError(error.message || 'An unexpected error occurred');
    } finally {
        router.push("/login")
  };
  }

  },;
  const onInvalid = (errors: any) => {;

    const firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues;
    if (firstError) {;
      form.setFocus(firstError);
    }

  },

  };
  }


:src_backup/pages/UpdatePassword.tsx
:src/pages/UpdatePassword.tsx
