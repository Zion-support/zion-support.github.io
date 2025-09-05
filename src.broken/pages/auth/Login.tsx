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

  return (
    <form onSubmit={_handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {_...register('email')} />
      </label>
      <label>
        Password
        <input type="password" {_...register('password')} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
