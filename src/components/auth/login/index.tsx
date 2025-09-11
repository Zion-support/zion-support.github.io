import { LoginForm } from './LoginForm';

export function LoginContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zion-slate-light">Sign in to your account to continue</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          <LoginForm />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-zion-slate-light text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}