
import { useState } from "react",;""
import { Link, Navigate } from "react-router-dom",;""
import { useForm, type UseFormReturn } from "react-hook-form",;""
import { zodResolver } from "@hookform/resolvers/zod",;""
import { z } from "zod",;""
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react",;"
;"
import { useAuth } from "@/hooks/useAuth",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Checkbox } from "@/components/ui/checkbox",;"
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;""
import { Header } from "@/components/Header",;""
import { Footer } from "@/components/Footer",;"
;
// Form validation schema;
const signupSchema = z;
  .object({;)"
    displayName:z.string().min(2, "Name must be at least 2 characters"),;""
    email:z.string().email("Please enter a valid email"),;"
    password:z.string();"
      .min(8, "Password must be at least 8 characters");""
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter");""
      .regex(/[a-z]/, "Password must contain at least one lowercase letter");""
      .regex(/[0-9]/, "Password must contain at least one number"),;"
    confirmPassword:z.string(),;
    termsAccepted:z.boolean().refine(val => val === true, {;)"
      message:"You must accept the terms and conditions"})});"
  .refine(data => data.password === data.confirmPassword, {;"
    message:"Passwords do not match",;")"
    path:["confirmPassword"]}),;"
;
type SignupFormValues = z.infer<typeof signupSchema>,;
</typeof>
      termsAccepted:false}}) as UseFormReturn<SignupFormValues>,;
</SignupFormValues>"
    return <Navigate to="/" />,;"
</Navigate>"
    return <Navigate to="/onboarding" />,;"
</Navigate>
    <>;
      <Header />;
</Header>"
      <div className="flex min-h-screen bg-zion-blue">;"
</div>"
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">;"
</div>"
          <div className="mx-auto w-full max-w-sm lg:w-96">;"
</div>"
            <div className="text-center mb-10">;"
</div>"
              <h2 className="text-3xl font-bold tracking-tight text-white">;"
</h2>
              </h2>;"
              <p className="mt-2 text-sm text-zion-slate-light">;"
</p>"
                <Link to="/login" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;"
</Link>
                </Link>;
              </p>;
            </div>;"
            <div className="bg-zion-blue-dark rounded-lg p-6">;"
</div>
              <Form {...form}>;
</Form>"
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>;"
</form>
                  <FormField;
                    control={form.control}"
                    name="displayName";"
                    render={({ field }) => (;
</FormField>
                      <FormItem>;
</FormItem>"
                        <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;"
                        <FormControl>;
</FormControl>"
                          <div className="relative">;"
</div>
                            <Input;"
                              placeholder="John Doe";""
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";"
                              {...field}"
                              aria-autocomplete="none";""
                              autoComplete="off";"
                            />;
</Input>"
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"
</User>
                          </div>;
                        </FormControl>;"
                        <FormMessage className="text-red-400" />;"
</FormMessage>)
                      </FormItem>;                    )}
                  <FormField;
                    control={form.control}"
                    name="email";"
                    render={({ field }) => (;
</FormField>
                      <FormItem>;
</FormItem>"
                        <FormLabel className="text-zion-slate-light">Email address</FormLabel>;"
                        <FormControl>;
</FormControl>"
                          <div className="relative">;"
</div>
                            <Input;"
                              placeholder="you@example.com";""
                              className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";"
                              {...field}"
                              autoComplete="off";""
                              aria-autocomplete="none";""
                              type="email";"
                            />;
</Input>"
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"
</Mail>
                          </div>;
                        </FormControl>;"
                        <FormMessage className="text-red-400" />;"
</FormMessage>)
                      </FormItem>;                    )}
                  <FormField;
                    control={form.control}"
                    name="password";"
                    render={({ field }) => (;
</FormField>
                      <FormItem>;
</FormItem>"
                        <FormLabel className="text-zion-slate-light">Password</FormLabel>;"
                        <FormControl>;
</FormControl>"
                          <div className="relative">;"
</div>
                            <Input;"
                              type={showPassword ? "text" :"password"}""
                              placeholder="";""
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";"
                              {...field}"
                              autoComplete="new-password";"
                            />;
</Input>"
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"
</Lock>
                            <Button;"
                              type="button";""
                              variant="ghost";""
                              size="sm";""
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";")
                              onClick={() => setShowPassword(!showPassword)}
</Button>"
                                <EyeOff className="h-4 w-4" />;"
</EyeOff>"
                                <Eye className="h-4 w-4" />;"
</Eye>"
                              <span className="sr-only">;"
</span>
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;"
                        <FormMessage className="text-red-400" />;"
</FormMessage>
                      </FormItem>;                    )}
                  <FormField;
                    control={form.control}"
                    name="confirmPassword";"
                    render={({ field }) => (;
</FormField>
                      <FormItem>;
</FormItem>"
                        <FormLabel className="text-zion-slate-light">Confirm Password</FormLabel>;"
                        <FormControl>;
</FormControl>"
                          <div className="relative">;"
</div>
                            <Input;"
                              type={showConfirmPassword ? "text" :"password"}""
                              className="bg-zion-blue pl-10 text-white border-zion-blue-light focus:border-zion-purple";"
                              {...field}"
                              autoComplete="new-password";"
                            />;
</Input>"
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"
</Lock>
                            <Button;"
                              type="button";""
                              variant="ghost";""
                              size="sm";""
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";")
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
</Button>"
                                <EyeOff className="h-4 w-4" />;"
</EyeOff>"
                                <Eye className="h-4 w-4" />;"
</Eye>"
                              <span className="sr-only">;"
</span>
                              </span>;
                            </Button>;
                          </div>;
                        </FormControl>;"
                        <FormMessage className="text-red-400" />;"
</FormMessage>
                      </FormItem>;                    )}
                  <FormField;
                    control={form.control}"
                    name="termsAccepted";"
                    render={({ field }) => (;
</FormField>"
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"
</FormItem>
                        <FormControl>;
</FormControl>
                          <Checkbox;
                            checked={field.value}
                            onCheckedChange={field.onChange}"
                            className="data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";"
                          />;
</Checkbox>
                        </FormControl>;"
                        <div className="space-y-1 leading-none">;"
</div>"
                          <FormLabel className="text-sm text-zion-slate-light">;"
</FormLabel>"
                            <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light">;"
</a>"
                            </a>{" "}""
                            <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">;"
</a>
                            </a>;
                          </FormLabel>;"
                          <FormMessage className="text-red-400" />;"
</FormMessage>
                        </div>;
                      </FormItem>;
                  <Button;"
                    type="submit";""
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
                    disabled={isLoading || isSubmitting}
                  >;
</Button>
                  </Button>;
                </form>;
              </Form>;"
              <div className="mt-6">;"
</div>"
                <div className="relative">;"
</div>"
                  <div className="absolute inset-0 flex items-center">;"
</div>"
                    <div className="w-full border-t border-zion-blue-light" />;"
</div>
                  </div>;"
                  <div className="relative flex justify-center text-sm">;"
</div>"
                    <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>;"
                  </div>;
                </div>;"
                <div className="mt-6 grid grid-cols-3 gap-3">;"
</div>
                  <Button;"
                    type="button";""
                    variant="outline";""
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";")
                    onClick={() => loginWithGoogle()}
</Button>"
                    <span className="sr-only">Sign in with Google</span>;""
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">;"
</svg>"
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />;"
</path>"
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />;"
</path>"
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />;"
</path>"
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853" />;"
</path>
                    </svg>;
                  </Button>;
                  <Button;"
                    type="button";""
                    variant="outline";""
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";"
                    onClick={() => loginWithFacebook()}
</Button>"
                    <span className="sr-only">Sign in with Facebook</span>;""
                    <Facebook className="h-5 w-5" />;"
</Facebook>
                  </Button>;
                  <Button;"
                    type="button";""
                    variant="outline";""
                    className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";"
                    onClick={() => loginWithTwitter()}
</Button>"
                    <span className="sr-only">Sign in with Twitter</span>;""
                    <Twitter className="h-5 w-5" />;"
</Twitter>
                  </Button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;"
        <div className="hidden lg:block relative w-0 flex-1">;"
</div>"
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80">;"
</div>"
            <div className="flex flex-col justify-center items-center h-full px-8">;"
</div>"
              <div className="max-w-md text-center">;"
</div>"
                <h3 className="text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3>;""
                <p className="text-lg text-white/80">;"
</p>
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
</Footer>
    </>;
  ),;}
 import {
  // TODO: Implement
}
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
  if (isSubmitting) return, //Prevent multiple submissions try {
  // TODO: Implement
}"
}//Redirect to onboarding if user is authenticated but hasn't completed profile if (isAuthenticated && !user?.profileComplete) {''
}flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Create your account </h2> Sign in </Link> </p> </div> <FormItem> <FormLabel className=" text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)""
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)"
</FormField>"
}/> <FormField <FormControl> <div className=" relative"> <Input /> <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Button) : (<Eye className=" h-4 w-4"/>)"
</FormField>"
}</span> </Button> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)"
</FormMessage>"
}/> <FormField <FormControl> <div className=" relative"> <Input /> <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Button) : (<Eye className=" h-4 w-4"/>)"
</FormField>"
}</span> </Button> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>)"
</FormMessage>"
}/> <FormField Privacy Policy </Link> </FormLabel> <FormMessage className=" text-red-400"/> </div> </FormItem>)"
</FormField>"
}/> <Button </Button> </form> </Form> <div className=" mt-6"> <div className=" relative"> <div className=" absolute inset-0 flex items-center"> <div className=" w-full border-t border-zion-blue-light"/> </div> <div className=" relative flex justify-center text-sm"> <span className=" px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span> </div> </div> <div className=" mt-6 grid grid-cols-3 gap-3"> <Button > <span className=" sr-only">Sign in with Google</span> <svg className=" h-5 w-5"aria-hidden=" true"fill=" currentColor"viewBox=" 0 0 24 24"> <path d=" M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"fill=" #EA4335"/> <path d=" M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"fill=" #4285F4"/> <path d=" M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"fill=" #FBBC05"/> <path d=" M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z"fill=" #34A853"/> </svg> </Button> <Button > <span className=" sr-only">Sign in with Facebook</span> <Facebook className=" h-5 w-5"/> </Button> <Button > <span className=" sr-only">Sign in with Twitter</span> <Twitter className=" h-5 w-5"/> </Button> </div> </div> </div> </div> </div> <div className=" hidden lg:block relative w-0 flex-1"> <div className=" absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-cyan to-zion-purple opacity-80"> <div className=" flex flex-col justify-center items-center h-full px-8"> <div className=" max-w-md text-center"> <h3 className=" text-3xl font-bold text-white mb-4">Join the Future of AI Marketplace</h3> <p className=" text-lg text-white/80" > Create your profile, showcase your AI services, find jobs, and connect with professionals worldwide. </p> </div> </div> </div> </div> </div> <Footer /> </>)"
}
"