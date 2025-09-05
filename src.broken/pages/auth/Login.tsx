<<<<<<< HEAD
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
      }
    } catch (err: any) {
      toast.error(err.message || 'Login failed')
    }
  },
=======
import * as auth from '@/services/auth';

interface LoginFields {_email: string;
  password: string;}

export default function Login() {_const _navigate = useNavigate();
  const { register, _handleSubmit} = useForm<LoginFields>();

  const _onSubmit = async (_data: LoginFields) => {_try {
      const _res = await auth.login(data.email, _data.password);
      if (res.status === 200) {
        navigate('/dashboard');} else if (res.status >= 400 && res.status < 500) {_toast.error(res.data?.error || 'Login failed');}
    } catch (err: unknown) {_toast.error(err.message || 'Login failed');}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <form onSubmit={_handleSubmit(onSubmit)}>
      <label>
        Email
<<<<<<< HEAD
        <input type=&quot;email&quot; {...register('email')} />
      </label>
      <label>
        Password
        <input type=&quot;password&quot; {...register('password')} />
=======
        <input type="email" {_...register('email')} />
      </label>
      <label>
        Password
        <input type="password" {_...register('password')} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </label>
      <button type=&quot;submit&quot;>Login</button>
    </form>
  )
}
