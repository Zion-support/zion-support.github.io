<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import * as auth from '@/services/auth';

interface LoginFields {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFields>();

  const onSubmit = async (data: LoginFields) => {
    try {
      const res = await auth.login(data.email, data.password);
      if (res.status === 200) {
        navigate('/dashboard');
      } else if (res.status >= 400 && res.status < 500) {
        toast.error(res.data?.error || 'Login failed');
      }
    } catch (err: any) {
      toast.error(err.message || 'Login failed');
    }
  };

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
  );
}
=======
 return (<form onSubmit= {
  handleSubmit (onSubmit) 
}> <label> Email </label> <button type="submit" >Login</button> </form>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
