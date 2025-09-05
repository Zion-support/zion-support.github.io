<<<<<<< HEAD
import { useNavigate } from 'react-router-dom',;
import { useForm } from 'react-hook-form',;
import { toast } from '@/hooks/use-toast',;
import * as auth from '@/services/auth',;
;
interface LoginFields {;
  email:string,;
  password:string;
}
;
export default function Login() {;
  const navigate = useNavigate(),;
  const { register, handleSubmit } = useForm<LoginFields>(),;
;
  const onSubmit = async (data:LoginFields) => {;
    try {;
      const res = await auth.login(data.email, data.password),;
      if (res.status === 200) {;
        navigate('/dashboard'),;
      } else if (res.status >= 400 && res.status < 500) {;
        toast.error(res.data?.error || 'Login failed'),;
=======
import { useNavigate } from 'react-router-dom',
import { useForm } from 'react-hook-form',
import { toast } from '@/hooks/use-toast',
import * as auth from '@/services/auth',
interface LoginFields {
  email: string,
  password: string
}

export default function Login() {
  const navigate = useNavigate(),
  const { register, handleSubmit } = useForm<LoginFields>(),

  const onSubmit = async (data: LoginFields) => {
    try {
      const res = await auth.login(data.email, data.password),
      if (res.status === 200) {
        navigate('/dashboard')
      } else if (res.status >= 400 && res.status < 500) {
        toast.error(res.data?.error || 'Login failed')
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      }
    } catch (err:any) {;
      toast.error(err.message || 'Login failed');
    }
<<<<<<< HEAD
  },;
;
  return (;
    <form onSubmit={handleSubmit(onSubmit)}>;
      <label>;
        Email;
        <input type="email" {...register('email')} />;
      </label>;
      <label>;
        Password;
        <input type="password" {...register('password')} />;
      </label>;
      <button type="submit">Login</button>;
    </form>;
  ),;
=======
  },
  return (
    <form onSubmit={_handleSubmit(onSubmit)}>
      <label>
        Email
        <input type=&quot;email&quot; {...register('email')} />
      </label>
      <label>
        Password
        <input type=&quot;password&quot; {...register('password')} />      </label>
      <button type=&quot;submit&quot;>Login</button>
    </form>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
