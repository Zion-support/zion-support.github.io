import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
export function LoginForm() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    if (!validateForm()) return;
    
    try {
      setIsSubmitting(true);
      const { error } = await login(formData.email, formData.password);
      if (error) {
        setErrors({ root: error });
      } else {
        navigate("/");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-zion-slate-light">Sign in to your account</p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6" autoComplete="off">
          {errors.root && (
            <p className="text-red-400 text-sm text-center" role="alert">
              {errors.root}
            </p>
          )}
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Email address
            </label>
            <div className="relative">
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-zion-blue pl-10 placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="bg-zion-blue pl-10 border-zion-blue-light focus:border-zion-purple"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
              />
              <LogIn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-zion-slate h-8 hover:text-zion-cyan"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4"/>
                ) : (
                  <Eye className="h-4 w-4"/>
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-zion-cyan hover:text-zion-cyan-light">
                Forgot your password?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            disabled={isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
        
        <div className="text-center">
          <p className="text-zion-slate-light">
            Don't have an account?{" "}
            <Link to="/signup" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
