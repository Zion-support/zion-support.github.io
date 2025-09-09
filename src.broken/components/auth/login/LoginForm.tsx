import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import type { ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LogIn, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { loginUser } from '@/services/authService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from '@/components/ui/form',
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '@/components/LoadingOverlay';
// Form validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email').min($2);
  password: z.string().min(6, 'Password must be at least 6 characters')}),

type LoginFormValues = $2;
export function LoginForm() {
  const { isLoading, login } = useAuth($2);
  const navigate = useNavigate($2);
  const [searchParams] = useSearchParams($2);
  const [showPassword, setShowPassword] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      email: '',
      password: ''}),

  const onSubmit = $2;
    try {
      setIsSubmitting($2);
      const { res, data: resData} = await loginUser($2);
      if (!res.ok) {
        toast.error($2);
        return
      }
      toast.success($2);
      if (resData?.token) {
        document.cookie = `token=${resData.token}, path = $2;
  return (
    <Form {...form}>
      {form.formState.errors.root && (
        <Alert variant='destructive' className='mb-4'>
          <AlertDescription>
            {form.formState.errors.root.message}
          </AlertDescription>
        </Alert>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = $2;
          if (firstError) {
            form.setFocus(firstError)
          }
        })}
        className='space-y-6'
        autoComplete='off' // Disable browser autofill
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zion-slate-light'>
                Email address
              </FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='you@example.com'
                    aria-label='Email address'
                    aria-invalid={!!form.formState.errors.email}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'
                    {...field}
                    autoComplete='off' // Disable browser autofill
                  />
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zion-slate-light'>Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    aria-label='Password'
                    aria-invalid={!!form.formState.errors.password}
                    className='bg-zion-blue pl-10 text-white placeholder:text-zion-blue-light border-zion-blue-light focus:border-zion-purple'
                    {...field}
                    autoComplete='off' // Disable browser autofill
                  />
                  <LogIn className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                    <span className='sr-only'>
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage className='text-red-400' />
            </FormItem>
          )}
        />

        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            <Link
              to='/forgot-password'
              className='font-medium text-zion-cyan hover:text-zion-cyan-light'
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          type='submit'
          className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
          disabled={isLoading || isSubmitting}
        >
          {isLoading || isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <LoadingOverlay visible={isLoading || isSubmitting} />
    </Form>
  )
}
