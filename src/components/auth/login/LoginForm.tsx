
            form.setFocus(firstError);
          }
        })}
        className="space-y-6"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Alert, AlertDescription } from "@/components/ui/alert",;
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
// Form validation schema
const loginSchema = null;
          if (firstError) {
            form.setFocus(firstError)
          }        })}
        className='space-y-6'
origin/cursor/automate-test-improve-and-merge-code-2533
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>

              <FormControl>
                <div className="relative">
                  <Input
                <div className='relative'>
            field: ControllerRenderProps<LoginFormValues, 'email'>;
          }) => (            <FormItem>;
              <FormLabel className='text-zion-slate-light'>;
            field: ControllerRenderProps < LoginFormValues, 'email'>;
          }) => (            <FormItem>;
              <FormLabel className='text - zion - slate - light'>;
                Email address;
              </FormLabel>;
              <FormControl>;
                <div className='relative'>;

  return (
    <Form {...form}>

        <Alert variant="destructive" className="mb-4">"

          <AlertDescription>{form.formState.errors.root.message}
      <form;)
        onSubmit={form.handleSubmit(onSubmit, (errors) => {;
          control={form.control}"
          name="email"""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => ("

            <FormItem>
              <FormLabel className="text-zion-slate-light">Email address"
              <FormControl>
                <div className='relative'>
</div>
            field: ControllerRenderProps<LoginFormValues, 'email'>;
)
          }) => (            <FormItem>;

              <FormLabel className='text-zion-slate-light'>;

            field: ControllerRenderProps < LoginFormValues, 'email'>;')

              <FormLabel className='text - zion - slate - light'>;

              ;
              <FormControl>;

                <div className='relative'>;
pr-12325
                  <Input;
                    placeholder='you@example.com';
                    aria - label='Email address';
                    aria - invalid={!!form.form_state.errors.email}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;
                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                </div>;
              </FormControl>;
              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name='password';

          render={({
            field
          }: {

            field: ControllerRenderProps<LoginFormValues, 'password'>;
          }) => (            <FormItem>;
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>;
              <FormControl>;
                <div className='relative'>;

                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    aria-label='Password'
                    aria-invalid={!!form && form.formState.errors && errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}
                  />;
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'
                    onClick={() => setShowPassword(!showPassword)}                  >;

                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}

                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>

        className="space-y-6";
      >;
        <FormField;
          control={form.control}
          name="email";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    placeholder="you@example.com";
                    aria-label="Email address";
                    aria-invalid={!!form.formState.errors.email}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";

                  <User className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;

                </div>;
              <FormMessage className='text - red - 400' />;
          name='password';

            field: ControllerRenderProps<LoginFormValues, 'password'>;

              <FormLabel className='text-zion-slate-light'>Password;

                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password
                    aria-label='Password
                    aria-invalid={!!form && form.formState.errors && errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'                    {...field}

                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;

                  <Button;
                    type='button
                    variant='ghost
                    size='sm
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan)
                    onClick={() => setShowPassword(!showPassword)}                  >;

                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"

              <FormMessage className="text-red-400" />"

          name="email";""
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "email"> }) => (;"

            <FormItem>;
              <FormLabel className="text-zion-slate-light">Email address;"
                <div className="relative">;"
                  <Input;"
                    placeholder="you@example.com";""
                    aria-label="Email address";"
                    aria-invalid={!!form.formState.errors.email}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";"
pr-12325
                    {...field}
                  />
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />

                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>

          )}
        />;
        <FormField;
          control={form.control}
          name="password"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (
            <FormItem>
              <FormLabel className="text-zion-slate-light">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple"
                    {...field}
                  />
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          name="password";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;
            <FormItem>;
              <FormLabel className="text-zion-slate-light">Password</FormLabel>;
              <FormControl>;
                <div className="relative">;
                  <Input;
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password";
                    aria-label="Password";
                    aria-invalid={!!form.formState.errors.password}
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple";
                    {...field}
                  />;
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  <Button;
                    type="button";
                    variant="ghost";
                    size="sm";
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className='h-4 w-4' />;
                    ) : (;
                      <Eye className='h-4 w-4' />;
                    )}
                    <span className='sr-only'>;
                      {showPassword ? 'Hide password' : 'Show password'}
            field: ControllerRenderProps < LoginFormValues, 'password'>;
          }) => (            <FormItem>;
              <FormLabel className='text - zion - slate - light'>Password</FormLabel>;
              <FormControl>;
                <div className='relative'>;
                  <Input;
              <FormMessage className='text-red-400' />

          name="password"")"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => ("

              <FormLabel className="text-zion-slate-light">Password"
                <div className="relative">"
                    type={showPassword ? "text" : "password"}""
                    placeholder="Enter password"""
                    aria-label="Password""
                    aria-invalid={!!form.formState.errors.password}"
                    className="bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple""
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"

                  <Button;"
                    type="button"""
                    variant="ghost"""
                    size="sm"""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"")
                    onClick={() => setShowPassword(!showPassword)}
                      <EyeOff className="h-4 w-4" />"
                      <Eye className="h-4 w-4" />"
                    <span className="sr-only">"
</span>

          render={({ field }: { field: ControllerRenderProps<LoginFormValues "password"> }) => (;"

              <FormLabel className="text-zion-slate-light">Password;"
                    placeholder="Enter password";""
                    aria-label="Password";"
                  <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                    type="button";""
                    variant="ghost";""
                    size="sm";""
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan";")
                      <EyeOff className='h-4 w-4' />;

                      <Eye className='h-4 w-4' />;

                    <span className='sr-only'>;
            field: ControllerRenderProps < LoginFormValues, 'password'>;

              <FormLabel className='text - zion - slate - light'>Password;

pr-12325
                    type={show_password ? 'text' : 'password'}
                    placeholder='Enter password';
                    aria - label='Password';
                    aria - invalid={!!form.form_state.errors.password}
                    className='bg - zion - blue pl - 10 text - white placeholder:text - zion - blue - light border - zion - blue - light focus:border - zion - purple'                    {...field}
                  />;
                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                  <Button;
                    type='button';
                    variant='ghost';
                    size='sm';
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';
                    on_click={() => setShowPassword (!show_password)}                  >;
                    {show_password ? (
                      <EyeOff className='h - 4 w - 4' />) : (
                      <Eye className='h - 4 w - 4' />)}
                    <span className='sr - only'>;
                      {show_password ? 'Hide password' : 'Show password'}
                    </span>;
                  </Button>;
                </div>;
              </FormControl>;

              <FormMessage className='text - red - 400' />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}

              <FormControl>
            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;
          }) => (;
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;
              <FormControl>;
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                <Checkbox

                  checked={field.value}
                  onCheckedChange={field.onChange}

                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"
                  aria-label="Remember me"
                />


              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
        />;
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}

            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => (
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;
              <FormControl>;
                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.on_change}
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';
                  aria - label='Remember me'                />;
              </FormControl>;
              <div className='space - y-1 leading - none'>;
                <FormLabel className='text - zion - slate - light'>;
                  Remember me;
                </FormLabel>;
              </div>;
            </FormItem>)}
        />;
        <div className='flex items - center justify - between'>;
          <div className='text - sm'>;
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
          <div className='text - sm'>;

                  <LogIn className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;

                    type='button';
                    variant='ghost';
                    size='sm';
                    className='absolute right - 1 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 8 hover:text - zion - cyan';')
                    on_click={() => setShowPassword (!show_password)}                  >;

                      <EyeOff className='h - 4 w - 4' />) : (
                      <Eye className='h - 4 w - 4' />)}

                    <span className='sr - only'>;
                    </span>;



            field: ControllerRenderProps<LoginFormValues, 'rememberMe'>;

            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>;


                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.onChange}

                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white"""
                  aria-label="Remember me""



              <div className="space-y-1 leading-none">"
</div>"
                <FormLabel className="text-zion-slate-light">Remember me"
        <div className='flex items-center justify-between'>;
          <div className='text-sm'>;
            field: ControllerRenderProps < LoginFormValues, 'remember_me'>;
          }) => (
            <FormItem className='flex flex - row items - start space - x-3 space - y-0'>;


                  onCheckedChange={field.on_change}
                  className='border - zion - blue - light data-[state = checked]:bg - zion - purple data-[state = checked]:text - white';
                  aria - label='Remember me'                />;

              <div className='space - y-1 leading - none'>;

              </div>;)
        <div className='flex items - center justify - between'>;
          <div className='text - sm'>;
pr-12325
            <Link;
              href='/forgot - password';
              className='font - medium text - zion - cyan hover:text - zion - cyan - light';
            >;

              Forgot password?;
            </Link>;
          </div>;
        </div>;

          disabled={isLoading || isSubmitting}>;
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
        </Button>;
        {verificationMessage && (;
          <p className='text-sm text-center text-zion-slate-light mt-2'>;

            {verificationMessage}
          </p>;
        )}
        <div className='flex justify-between mt-4'>;
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
            disabled={isResending}>;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>;
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'
            onClick={handleCheckStatus}>;
            Check status;
          </Button>;
        </div>;
        <p className='text-sm text-center mt-4'>;
          <Link
            href='/signup'

          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button
          <Button
            type='button'
            variant='secondary'
            className='w-1/2 mr-2'
            onClick={handleResendEmail}
          <Button
            type='button'
            variant='outline'
            className='w-1/2 ml-2'

          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible"
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>
        {verificationMessage && (
          <p className="text-sm text-center text-zion-slate-light mt-2">
          name="rememberMe";
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (;
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
              <FormControl>;
                <Checkbox;
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";
                  aria-label="Remember me";
                />;
              </FormControl>;
              <div className="space-y-1 leading-none">;
                <FormLabel className="text-zion-slate-light">Remember me</FormLabel>;
              </div>;
            </FormItem>;
          )}
        />
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            {/* "Remember me" checkbox is now above, this div can be used for "Forgot Password" if it's still needed */}
            {/* If "Remember me" was previously here, it's moved. */}
          </div>;
          <div className="text-sm">;
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;
              Forgot password?;
            </Link>;
          </div>;
        </div>;
        <Button;
          type="submit";
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";
          disabled={isLoading || isSubmitting}
        >;
          {isLoading || isSubmitting ? "Logging in..." : "Login"}
        </Button>;
        {verificationMessage && (;
          <p className="text-sm text-center text-zion-slate-light mt-2">;
            {verificationMessage}
          </p>
        )}
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="secondary"
            className="w-1/2 mr-2"
            onClick={handleResendEmail}
            disabled={isResending}
          >;
            {isResending ? 'Sending...' : 'Resend / Verify e-mail'}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-1/2 ml-2"
            onClick={handleCheckStatus}
          >


            Check status
          </Button>
        </div>
        <p className="text-sm text-center mt-4">
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">
            Create account
          </Link>
        </p>
      </form>
    </Form>
  )


return;


}setIsResending (true);'
setVerificationMessage ('')
try {'
  const response = await fetch ('/api/auth/resend-verification-email', {'
  method: 'POST'
headers: {'
  'Content-Type': 'application/json'
}
body: JSON.stringify ({
  email
})
})
const data = await response.json ()
if (response.ok) {'
  setVerificationMessage ('Verification email sent. Please check your inbox.')
}else {'
  setVerificationMessage (data.message |'Failed to resend verification email.')
}catch (err) {'
  setVerificationMessage ('Failed to resend verification email.')
}finally {
  setIsResending (false)
}
const handleCheckStatus = () => {'
  const email = form.getValues ('email')
if (!email) {'
  form.setError ('root', {'
  message: 'Please enter your email address.'
})


return;


}router.push (`/verify-status?email=$ {
  encodeURIComponent (email)
}`)
}
}> {
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message
}</AlertDescription> </Alert>)
}<form
}) "
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) "
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) "
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {
  verificationMessage
}</p>) "
}<div className=" flex justify-between mt-4" > <Button > {'
  isResending ? 'Sending...': 'Resend / Verify e-mail'
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>)
}'"}
            className='font-medium text-zion-cyan hover:text-zion-cyan-light'>;
            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>;
  );


        <Button;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;
          {is_loading || is_submitting ? 'Logging in...' : 'Login'}
        </Button>;
        {verification_message && (
          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
            {verification_message}
          </p>)}
        <div className='flex justify - between mt - 4'>;
          <Button;
            type='button';
          <p className='text-sm text-center text-zion-slate-light mt-2'>;
</p>
          </p>;
        <div className='flex justify-between mt-4'>;
            variant='secondary
            className='w-1/2 mr-2
            onClick={handleResendEmail}
            disabled={isResending}>;

            variant='outline
            className='w-1/2 ml-2
            onClick={handleCheckStatus}>;

        <p className='text-sm text-center mt-4'>;
            href='/signup

          <div className="text-sm">"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">"

          type="submit"""
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible""
          disabled={isLoading || isSubmitting}
        >

          <p className="text-sm text-center text-zion-slate-light mt-2">"
</p>"
          render={({ field }: { field: ControllerRenderProps<LoginFormValues "rememberMe"> }) => (;"
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"


                  onCheckedChange={field.onChange}"
                  className="border-zion-blue-light data-[state=checked]:bg-zion-purple data-[state=checked]:text-white";""
                  aria-label="Remember me";"

              ;"
              <div className="space-y-1 leading-none">;"
                <FormLabel className="text-zion-slate-light">Remember me;"
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
          <div className="text-sm">;"
            <Link href="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">;"

          type="submit";""
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-purple-light visible";"

          <p className="text-sm text-center text-zion-slate-light mt-2">;"
        <div className="flex justify-between mt-4">"
            variant="secondary"""
            className="w-1/2 mr-2""
            disabled={isResending}

            variant="outline"""
            className="w-1/2 ml-2""
            onClick={handleCheckStatus}

        <p className="text-sm text-center mt-4">"
          <Link href="/signup" className="font-medium text-zion-cyan hover: text-zion-cyan-light">"

  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message;"
} )
}<form;"
}) """
}className="space-y-6" > <FormField text-zion-slate-light">Email address <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div>  <FormMessage className=" text-red-400"/> ) ""
</form>"
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ""
}</span>  </div>  <FormMessage className="text-red-400" /> ) ""
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me </div> ) ""
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password?  </div> </div> <Button {"
  // TODO: Implement
  verificationMessage;"
}</p>) """
}<div className=" flex justify-between mt-4" > <Button > {
} <Button > Check status  </div> Create account  </p> </form> )
      </form>;
          type='submit';
          className='w - full inline - flex items - center justify - center px - 4 py - 2 border border - transparent rounded - md shadow - sm text - base font - medium text - white bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - zion - purple - light visible';
          disabled={is_loading || is_submitting}        >;

          <p className='text - sm text - center text - zion - slate - light mt - 2'>;
          </p>)}
        <div className='flex justify - between mt - 4'>;
pr-12325
            variant='secondary';
            className='w - 1/2 mr - 2';
            on_click={handleResendEmail}
            disabled={is_resending}          >;
            {is_resending ? 'Sending...' : 'Resend / Verify e - mail'}
          </Button>;
          <Button;
            type='button';
            variant='outline';
            className='w - 1/2 ml - 2';
            on_click={handleCheckStatus}          >;
            Check status;
          </Button>;
        </div>;
        <p className='text - sm text - center mt - 4'>;
          <Link;
            href='/signup';
            className='font - medium text - zion - cyan hover:text - zion - cyan - light';
          >;
            Create account;
          </Link>;
        </p>;
      </form>;
    </Form>);
}else {
  fire_event ('login', {';
  method: 'email';
});
}finally {
  setIsSubmitting (false);
}
const handleResendEmail = async () => {';
  const email = form.get_values ('email');
// Check condition
if ( {') {
  $2
}
  form.set_error ('root', {';
  message: 'Please enter your email address.';
});
return;
}setIsResending (true);';
setVerificationMessage ('');
try {';
  const response = await fetch ('/api / auth / resend - verification - email', {';
  method: 'POST';
headers: {';
  'Content - Type': 'application / json';
}
body: JSON.stringify ({
  email;
});
});
const data = await response.json ();
// Check condition
if ( {') {
  $2
}
  setVerificationMessage ('Verification email sent. Please check your inbox.');
}else {';
  setVerificationMessage (data.message || 'Failed to resend verification email.');
}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.');
}finally {
  setIsResending (false);
}
const handleCheckStatus = () =>: any {';
  const email = form.get_values ('email');
// Check condition
if ( {') {
  $2
}
  form.set_error ('root', {';
  message: 'Please enter your email address.';
});
return;
}router.push (`/verify - status?email=$ {
  encodeURIComponent (email);
}`);
}
}> {
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;
}</AlertDescription> </Alert>);
}<form;
}) ";
}className="space - y-6" > <FormField text - zion - slate - light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";
}</span> </Button> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me</FormLabel> </div> </FormItem>) ";
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light"> Forgot password? </Link> </div> </div> <Button {
  verification_message;
}</p>) ";
}<div className=" flex justify - between mt - 4" > <Button > {';
  is_resending ? 'Sending...': 'Resend / Verify e - mail';
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>);
}'"}
}
;
  );


}else {;
  fireEvent ('login', {';
  method: 'email' ;
}) ;

}finally {;
  setIsSubmitting (false) ;

};
const handleResendEmail = async () => {';
  const email = form.getValues ('email');
if (!email) {';
  form.setError ('root', {';
  message: 'Please enter your email address.' ;
});
return ;
}setIsResending (true);';
setVerificationMessage ('');
try {';
  const response = await fetch ('/api/auth/resend-verification-email', {';
  method: 'POST';
headers: {';
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  email ;
}) ;
});
const data = await response.json ();
if (response.ok) {';
  setVerificationMessage ('Verification email sent. Please check your inbox.') ;
}else {';
  setVerificationMessage (data.message || 'Failed to resend verification email.') ;

}catch (err) {';
  setVerificationMessage ('Failed to resend verification email.') ;
}finally {;
  setIsResending (false) ;

};
const handleCheckStatus = () => {';
  const email = form.getValues ('email');
if (!email) {';
  form.setError ('root', {';
  message: 'Please enter your email address.' ;
});
return ;
}router.push (`/verify-status?email=$ {;
  encodeURIComponent (email) ;
}`) ;
};

}> {;
  form.formState.errors.root && (<Alert variant="destructive" className="mb-4" > form.formState.errors.root.message ;
}</AlertDescription> </Alert>) ;
}<form ;
}) ";
}className="space-y-6" > <FormField text-zion-slate-light">Email address</FormLabel> <FormControl> <div className=" relative"> <Input /> <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Password</FormLabel> relative" > <Input /> <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Button) : (<Eye className="h-4 w-4" />) ";
}</span> </Button> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem className="flex flex-row items-start space-x-3 space-y-0"> space-y-1 leading-none"> <FormLabel className=" text-zion-slate-light">Remember me</FormLabel> </div> </FormItem>) ";
}/> </div> <div className=" text-sm"> <Link href=" /forgot-password"className=" font-medium text-zion-cyan hover:text-zion-cyan-light"> Forgot password? </Link> </div> </div> <Button {;
  verificationMessage ;
}</p>) ";
}<div className=" flex justify-between mt-4" > <Button > {';
  isResending ? 'Sending...': 'Resend / Verify e-mail' ;
}</Button> <Button > Check status </Button> </div> Create account </Link> </p> </form> </Form>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533

            variant='outline';
            className='w - 1/2 ml - 2';
            on_click={handleCheckStatus}          >;

        <p className='text - sm text - center mt - 4'>;
            href='/signup';

    );
  form.form_state.errors.root && (<Alert variant="destructive" className="mb - 4" > form.form_state.errors.root.message;"
} );
}) ";""
}className="space - y-6" > <FormField text - zion - slate - light">Email address <FormControl> <div className=" relative"> <Input /> <User className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> </div>  <FormMessage className=" text - red - 400"/> ) ";"
}/> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Password relative" > <Input /> <LogIn className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Button) : (<Eye className="h - 4 w - 4" />) ";"
}</span>  </div>  <FormMessage className="text - red - 400" /> ) ";"
}/> <FormField <FormItem className="flex flex - row items - start space - x-3 space - y-0"> space - y-1 leading - none"> <FormLabel className=" text - zion - slate - light">Remember me </div> ) ";"
}/> </div> <div className=" text - sm"> <Link href=" /forgot - password"className=" font - medium text - zion - cyan hover:text - zion - cyan - light"> Forgot password?  </div> </div> <Button {"
  // TODO: Implement
  verification_message;"
}</p>) ";""
}<div className=" flex justify - between mt - 4" > <Button > {';
} <Button > Check status  </div> Create account  </p> </form> );
pr-12325
