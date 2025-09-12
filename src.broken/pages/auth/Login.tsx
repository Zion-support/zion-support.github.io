import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import * as auth from '@/services/auth';
interface LoginFields {
  email: string,
  password: string}

export default function Login() {
  const navigate = useNavigate($2);
  const { register, handleSubmit } = useForm<LoginFields>(),

  const onSubmit = async (data: LoginFields) => {
    try {
      const res = await auth.login($2);
      if (res.status = $2;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type='email' {...register('email')} />
      </label>
      <label>
        Password
        <input type='password' {...register('password')} />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
