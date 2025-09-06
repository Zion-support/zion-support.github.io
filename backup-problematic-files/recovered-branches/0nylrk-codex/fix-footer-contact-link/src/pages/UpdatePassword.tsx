
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/
import { supabase } from "@/integrations/supabase/
import { Button } from "@/components/ui/
import { Input } from "@/components/ui/
  FormMessage} from "@/components/ui/
import { toast } from "@/hooks/
import { Header } from "@/components/
import { Footer } from "@/components/
import { cleanupAuthState } from "@/utils/
        navigate("/
                
                        onClick={() => navigate("/
                
flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Update your password 
</div> <h3 className=" text-lg font-medium text-white">Password updated</h3> <p className=" mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. 
 <FormItem> <FormLabel className=" text-zion-slate-light">New Password</FormLabel> <FormControl> <Input /> 
> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Confirm Password</FormLabel> <FormControl> <Input /> 
> 