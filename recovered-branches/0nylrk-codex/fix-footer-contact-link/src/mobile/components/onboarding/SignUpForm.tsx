
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {AlertCircle} from "lucide-react";
import {Alert, AlertDescription} from "@/components/ui/alert";
export function SignUpForm() {;
  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();
import React, { useState } from "react",
import { Label } from "@/components/ui/label",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
export function SignUpForm() {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    email: ""
    password: ""
    name: ""})
  const [isLoading, setIsLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(true);
  const [error, setError] = useState("");
import { AlertCircle } from "lucide-react",
import { Alert, AlertDescription } from "@/components/ui/alert",

export function SignUpForm() {
  const navigate = useNavigate(),
  const { signup, login, loginWithGoogle } = useAuth(),
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""}),
  const [isLoading, setIsLoading] = useState(false),
  const [signupMode, setSignupMode] = useState(true),
  const [error, setError] = useState(""),
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("")
<<<<<<< HEAD


<<<<<<< HEAD
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value })),
    setError("")
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true)
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setError(""),
    setIsLoading(true),
    
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      if (signupMode) {
        const { error } = await signup(formData.email, formData.password, {
          name: formData.name})
        if (error) {
          throw new Error(error)
        }
        navigate("/mobile")
      } else {
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const { error } = await login(formData.email, formData.password),
        


<<<<<<< HEAD
        const { error } = await login(formData.email, formData.password);
        const { error } = await login(formData.email, formData.password),
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        const { error } = await login(formData.email, formData.password);
        const { error } = await login(formData.email, formData.password),
        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (error) {
          throw new Error(error)
        }
        navigate("/mobile")
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React, { useState } from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {AlertCircle} from "lucide-react";
import {Alert, AlertDescription} from "@/components/ui/alert";

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { AlertCircle } from "lucide-react",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
<<<<<<< HEAD
<<<<<<< HEAD
export function SignUpForm() {;
  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();
export function SignUpForm() {;
  const navigate = useNavigate(),;
  const { signup, login, loginWithGoogle } = useAuth(),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function SignUpForm() {;
  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [formData, setFormData] = useState({;
    email: "",;
    password: "",;
    name: ""}),;
<<<<<<< HEAD
<<<<<<< HEAD
      }
    } catch (err: any) {;
      setError(err && err.message);
    } finally {;
      setIsLoading(false);
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoading, setIsLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError("");
    setIsLoading(true),;

    try {;
      if (signupMode) {;
        const { error } = await signup(formData && formData.email, formData && formData.password, {;
          name: formData && formData.name}),;

        if (error) {;
          throw new Error(error);
        }

        navigate("/mobile");
      } else {;
        const { error } = await login(formData && formData.email, formData && formData.password);

        if (error) {;
          throw new Error(error);
        }

        navigate("/mobile");

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { Label } from '@/components / ui / label';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { use_navigate } from './react-router-dom';
import { use_auth } from '@/hooks / use_auth';
import { AlertCircle } from './lucide-react';
import { Alert, AlertDescription } from '@/components / ui / alert';
export /**
 * SignUpForm - Function description
 */
function SignUpForm() {
  const navigate = use_navigate ();
  const { signup, login, loginWithGoogle } = use_auth ();
;
  const [form_data, setFormData] = useState ({
    email: "",
    password: "",
    name: ""}),
  const [is_loading, setIsLoading] = useState (false);
  const [signup_mode, setSignupMode] = useState (true);
  const [error, set_error] = useState ("");
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
    set_error ("");
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    set_error ("");
    setIsLoading (true),
    try {
      // Check condition
if ( {) {
  $2
}
        const { error } = await signup (form_data.email, form_data.password, {
          name: form_data.name}),
        // Check condition
if ( {) {
  $2
}
          throw new Error (error);
        }
        navigate ("/mobile");
      } else {
        const { error } = await login (form_data.email, form_data.password);
;
        // Check condition
if ( {) {
  $2
}
          throw new Error (error);
        }
        navigate ("/mobile");
<<<<<<< HEAD


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (err: any) {
      set_error (err.message);
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
;
  const [isLoading, setIsLoading] = useState(false),;
  const [signupMode, setSignupMode] = useState(true),;
  const [error, setError] = useState(""),;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value })),;
    setError("");
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setError(""),;
    setIsLoading(true),;
    try {;
      if (signupMode) {;
        const { error } = await signup(formData.email, formData.password, {;
          name: formData.name}),;
        if (error) {;
          throw new Error(error);
        }
;
        navigate("/mobile");
      } else {;
        const { error } = await login(formData.email, formData.password),;
        if (error) {;
          throw new Error(error);
        }
;
        navigate("/mobile");
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  };
  
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
    } catch (err: any) {
      setError(err.message)
    }
  }

  };

<<<<<<< HEAD
  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleGoogleLogin = async () => {;
    try {;
      await loginWithGoogle();
    } catch (err: any) {;
<<<<<<< HEAD
<<<<<<< HEAD
  };


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setError(err && err.message);
    }
  };


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };

  
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium text-center">;
        {signupMode ? "Create your account" : "Welcome back"}
<<<<<<< HEAD
<<<<<<< HEAD
      setError(err.message);
    }
  },
  
  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium text-center">
        {signupMode ? "Create your account" : "Welcome back"}
      </h2>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full py-6 relative"
          onClick={handleGoogleLogin}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <Button 
          variant="outline" 


<<<<<<< HEAD
<<<<<<< HEAD
        <Button
          variant="outline"
        <Button 
          variant="outline" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="w-full py-6 relative"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-5.8-4.85-10.5-10.826-10.5-6.02 0-10.93 4.7-10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v-7.318h-2.696v-3.041h2.696V9.898c0-2.586 1.581-4.016 4.003-4.016 1.159 0 2.37.204 2.37.204v2.543h-1.334c-1.316 0-1.727.8-1.727 1.622v1.95h2.938l-.47 3.04h-2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />
          </svg>
          Continue with Facebook
        </Button>
      </div>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-border"></div>
        <span className="mx-2 text-xs text-muted-foreground">OR</span>
        <div className="flex-grow border-t border-border"></div>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {signupMode && (
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </h2>;
=======
=======
      </h2>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-2">;
        <Button
          variant="outline" 
          className="w-full py-6 relative"
          onClick={handleGoogleLogin}>;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www && www.w3.org/2000/svg">;
            <path d="M22 && M22.56 12 && 12.25c0-.78-.07-1 && 1.53-.2-2 && 2.25H12v4.26h5 && 26h5.92c-.26 1 && 1.37-1 && 1.04 2 && 2.53-2 && 2.21 3 && 3.31v2.77h3 && 77h3.57c2.08-1 && 1.92 3 && 3.28-4 && 4.74 3 && 3.28-8 && 8.09z" fill="#4285F4" />;
            <path d="M12 23c2 && 23c2.97 0 5 && 5.46-.98 7 && 7.28-2 && 2.66l-3 && 3.57-2 && 2.77c-.98 && 98.66-2 && 2.23 1 && 1.06-3 && 3.71 1 && 1.06-2 && 2.86 0-5 && 5.29-1 && 1.93-6 && 6.16-4 && 4.53H2.18v2 && 18v2.84C3.99 20 && 20.53 7 && 7.7 23 12 23z" fill="#34A853" />;
            <path d="M5 && M5.84 14 && 14.09c-.22-.66-.35-1 && 1.36-.35-2 && 2.09s.13-1 && 1.43.35-2 && 2.09V7.07H2 && 07H2.18C1.43 8 && 8.55 1 10 && 10.22 1 12s && 12s.43 3 && 3.45 1 && 1.18 4 && 4.93l2.85-2 && 2.22.81-.62z" fill="#FBBC05" />;
            <path d="M12 5 && 5.38c1.62 0 3 && 3.06.56 4 && 4.21 1 && 1.64l3.15-3 && 3.15C17.45 2 && 2.09 14 && 14.97 1 12 1 7 && 7.7 1 3 && 3.99 3 && 3.47 2 && 2.18 7 && 7.07l3.66 2 && 2.84c.87-2 && 2.6 3 && 3.3-4 && 4.53 6 && 6.16-4 && 4.53z" fill="#EA4335" />;
          </svg>;
          Continue with Google;
        </Button>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          variant="outline" 
          className="w-full py-6 relative">;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www && www.w3.org/2000/svg">;
            <path d="M24 12 && 12.073c0-5 && 5.8-4 && 4.85-10 && 10.5-10 && 10.826-10 && 10.5-6 && 6.02 0-10 && 10.93 4 && 4.7-10 && 10.93 10 && 10.5 0 5 && 5.234 3 && 3.875 9 && 9.575 8 && 8.95 10 && 10.359v-7 && 7.318h-2 && 2.696v-3 && 3.041h2.696V9 && 696V9.898c0-2 && 2.586 1 && 1.581-4 && 4.016 4 && 4.003-4 && 4.016 1 && 1.159 0 2 && 2.37.204 2 && 2.37.204v2 && 204v2.543h-1 && 1.334c-1 && 1.316 0-1 && 1.727.8-1 && 1.727 1 && 1.622v1.95h2 && 95h2.938l-.47 3 && 3.04h-2 && 2.468v7.318C20 && 318C20.125 21 && 21.648 24 17 && 17.307 24 12 && 12.073z" fill="#1877F2" />;
<<<<<<< HEAD

import React, { useState } from "react",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { useNavigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",;
import { AlertCircle } from "lucide-react",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
;
export function SignUpForm() {;
  const navigate = useNavigate(),;
  const { signup, login, loginWithGoogle } = useAuth(),;
  ;
  const [formData, setFormData] = useState({;
    email:"",;
    password:"",;
    name:""}),;
  const [isLoading, setIsLoading] = useState(false),;
  const [signupMode, setSignupMode] = useState(true),;
  const [error, setError] = useState(""),;
  ;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]:value })),;
    setError(""),;
  },;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    setError(""),;
    setIsLoading(true),;
    ;
    try {;
      if (signupMode) {;
        const { error } = await signup(formData.email, formData.password, {;
          name:formData.name}),;
        ;
        if (error) {;
          throw new Error(error),;
        }
        ;
        navigate("/mobile"),;
      } else {;
        const { error } = await login(formData.email, formData.password),;
        ;
        if (error) {;
          throw new Error(error),;
        }
        ;
        navigate("/mobile"),;
      }
    } catch (err:any) {;
      setError(err.message);
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  const handleGoogleLogin = async () => {;
    try {;
      await loginWithGoogle(),;
    } catch (err:any) {;
      setError(err.message);
    }
  },;
  ;
  return (;
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium text-center">;
        {signupMode ? "Create your account" :"Welcome back"}
      </h2>;
      ;
      <div className="space-y-2">;
        <Button ;
          variant="outline" ;
          className="w-full py-6 relative";
          onClick={handleGoogleLogin}
        >;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">;
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />;
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />;
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />;
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />;
          </svg>;
          Continue with Google;
        </Button>;
;
        <Button ;
          variant="outline" ;
          className="w-full py-6 relative";
        >;
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">;
            <path d="M24 12.073c0-5.8-4.85-10.5-10.826-10.5-6.02 0-10.93 4.7-10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v-7.318h-2.696v-3.041h2.696V9.898c0-2.586 1.581-4.016 4.003-4.016 1.159 0 2.37.204 2.37.204v2.543h-1.334c-1.316 0-1.727.8-1.727 1.622v1.95h2.938l-.47 3.04h-2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </svg>;
          Continue with Facebook;
        </Button>;
      </div>;
<<<<<<< HEAD
;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="relative flex items-center">;
        <div className="flex-grow border-t border-border"></div>;
        <span className="mx-2 text-xs text-muted-foreground">OR</span>;
        <div className="flex-grow border-t border-border"></div>;
      </div>;
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {error && (;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <form onSubmit={handleSubmit} className="space-y-4">;
        {signupMode && (;
          <div className="space-y-2">;
            <Label htmlFor="name">Full name</Label>;
<<<<<<< HEAD
        <div className="space-y-2">;
          <Label htmlFor="email">Email address</Label>;
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
        )}
<<<<<<< HEAD
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Input
              id="name"
              name="name"
              value={formData && formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />;
          </div>;
        )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <div className="space-y-2">;
          <Label htmlFor="email">Email address</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Input
            id="email"
            name="email"
            type="email"
<<<<<<< HEAD
<<<<<<< HEAD
          />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="password">Password</Label>;
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={formData && formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"

          />;
        </div>;

        <div className="space-y-2">;
          <Label htmlFor="password">Password</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Input
            id="password"
            name="password"
            type="password"
<<<<<<< HEAD
<<<<<<< HEAD


        <Button 
          type="submit" 


            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Create a password"
          />
        </div>
        <Button
          type="submit"
        <Button 
          type="submit" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={formData && formData.password}
            onChange={handleInputChange}
            required
            placeholder="Create a password"


        <Button 
          type="submit" 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="w-full py-6"
          disabled={isLoading}
        >
          {isLoading
            ? "Please wait..."
            : signupMode
              ? "Create Account"
              : "Sign In"
          }
        </Button>
      </form>
      <p className="text-center text-sm">
        {signupMode
          ? "Already have an account? "
          : "Don't have an account? "
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
        </div>;
=======
=======
          />;
        </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          type="submit" 
          className="w-full py-6"
          disabled={isLoading}>;
          {isLoading ;
            ? "Please wait..." ;
            : signupMode ;
              ? "Create Account" ;
              : "Sign In";
          }
        </Button>;
      </form>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <p className="text-center text-sm">;
        {signupMode;
          ? "Already have an account? ";
          : "Don't have an account? ";
<<<<<<< HEAD
<<<<<<< HEAD
            <Input;
              id="name";
              name="name";
              value={formData.name}
              onChange={handleInputChange}
              required;
              placeholder="Enter your full name";
            />;
          </div>;
        )}
        ;
        <div className="space-y-2">;
          <Label htmlFor="email">Email address</Label>;
          <Input;
            id="email";
            name="email";
            type="email";
            value={formData.email}
            onChange={handleInputChange}
            required;
            placeholder="Enter your email";
          />;
        </div>;
        ;
        <div className="space-y-2">;
          <Label htmlFor="password">Password</Label>;
          <Input;
            id="password";
            name="password";
            type="password";
            value={formData.password}
            onChange={handleInputChange}
            required;
            placeholder="Create a password";
          />;
        </div>;
        ;
        <Button ;
          type="submit" ;
          className="w-full py-6";
          disabled={isLoading}
        >;
          {isLoading ;
            ? "Please wait..." ;
            :signupMode ;
              ? "Create Account" ;
              :"Sign In";
          }
        </Button>;
      </form>;
      ;
      <p className="text-center text-sm">;
        {signupMode;
          ? "Already have an account? ";
          :"Don't have an account? ";
        }
        <Button;
          variant="link";
          className="p-0 h-auto";
          onClick={() => setSignupMode(!signupMode)}
        >;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        <Button
          variant="link"
          className="p-0 h-auto"
          onClick={() => setSignupMode(!signupMode)}
<<<<<<< HEAD
<<<<<<< HEAD
        >
=======
        >;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {signupMode ? "Sign In" : "Sign Up"}
        </Button>
      </p>
    </div>
  )
<<<<<<< HEAD
=======
        >;
          {signupMode ? "Sign In" : "Sign Up"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          {signupMode ? "Sign In" : "Sign Up"}
        </Button>;
      </p>;
    </div>;
  );


}
;
<<<<<<< HEAD
  return (
    <div className="space - y-4 px - 4">;
      <h2 className="text - xl font - medium text - center">;
        {signup_mode ? "Create your account" : "Welcome back"}
      </h2>;
      <div className="space - y-2">;
        <Button;
          variant="outline";
          className="w - full py - 6 relative";
          on_click={handleGoogleLogin}
        >;
          <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg">;
            <path d="M22.56 12.25c0-.78-.07 - 1.53-.2 - 2.25H12v4.26h5.92c-.26 1.37 - 1.04 2.53 - 2.21 3.31v2.77h3.57c2.08 - 1.92 3.28 - 4.74 3.28 - 8.09z" fill="#4285F4" />;
            <path d="M12 23c2.97 0 5.46-.98 7.28 - 2.66l - 3.57 - 2.77c-.98.66 - 2.23 1.06 - 3.71 1.06 - 2.86 0 - 5.29 - 1.93 - 6.16 - 4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />;
            <path d="M5.84 14.09c-.22-.66-.35 - 1.36-.35 - 2.09s.13 - 1.43.35 - 2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85 - 2.22.81-.62z" fill="#FBBC05" />;
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15 - 3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87 - 2.6 3.3 - 4.53 6.16 - 4.53z" fill="#EA4335" />;
          </svg>;
          Continue with Google;
        </Button>;
        <Button;
          variant="outline";
          className="w - full py - 6 relative";
        >;
          <svg view_box="0 0 24 24" className="h - 5 w - 5 mr - 2" xmlns="http://www.w3.org / 2000 / svg">;
            <path d="M24 12.073c0 - 5.8 - 4.85 - 10.5 - 10.826 - 10.5 - 6.02 0 - 10.93 4.7 - 10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v - 7.318h - 2.696v - 3.041h2.696V9.898c0 - 2.586 1.581 - 4.016 4.003 - 4.016 1.159 0 2.37.204 2.37.204v2.543h - 1.334c - 1.316 0 - 1.727.8 - 1.727 1.622v1.95h2.938l-.47 3.04h - 2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />;
          </svg>;
          Continue with Facebook;
        </Button>;
      </div>;
      <div className="relative flex items - center">;
        <div className="flex - grow border - t border - border"></div>;
        <span className="mx - 2 text - xs text - muted - foreground">OR</span>;
        <div className="flex - grow border - t border - border"></div>;
      </div>;
      {error && (
        <Alert variant="destructive">;
          <AlertCircle className="h - 4 w - 4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>)}
      <form on_submit={handle_submit} className="space - y-4">;
        {signup_mode && (
          <div className="space - y-2">;
            <Label html_for="name">Full name</Label>;
            <Input;
              id="name";
              name="name";
              value={form_data.name}
              on_change={handleInputChange}
              required;
              placeholder="Enter your full name";
            />;
          </div>)}
        <div className="space - y-2">;
          <Label html_for="email">Email address</Label>;
          <Input;
            id="email";
            name="email";
            type="email";
            value={form_data.email}
            on_change={handleInputChange}
            required;
            placeholder="Enter your email";
          />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="password">Password</Label>;
          <Input;
            id="password";
            name="password";
            type="password";
            value={form_data.password}
            on_change={handleInputChange}
            required;
            placeholder="Create a password";
          />;
        </div>;
        <Button;
          type="submit";
          className="w - full py - 6";
          disabled={is_loading}
        >;
          {is_loading;
            ? "Please wait...";
            : signup_mode;
              ? "Create Account";
              : "Sign In";
          }
        </Button>;
      </form>;
      <p className="text - center text - sm">;
        {signup_mode;
          ? "Already have an account? ";
          : "Don't have an account? ";
        }
        <Button;
          variant="link";
          className="p - 0 h - auto";
          on_click={() => setSignupMode (!signup_mode)}
        >;
          {signup_mode ? "Sign In" : "Sign Up"}
        </Button>;
      </p>;
    </div>);
          {signupMode ? "Sign In" :"Sign Up"}
        </Button>;
      </p>;
    </div>;
  ),; export function SignUpForm () {
  const navigate = useNavigate ();
const {
  signup, login, loginWithGoogle 
}= useAuth ();
const [formData, setFormData] = useState ({
  const [isLoading, setIsLoading] = useState (false);
const [signupMode, setSignupMode] = useState (true);
const [error, setError] = useState ("");
setIsLoading (true);
  if (signupMode) {
  
}else {
  const {
  error 
}= await login (formData.email, formData.password);
if (error) {
  throw new Error (error) 
}
}</h2> <div className=" space-y-2"> <Button > <svg viewBox=" 0 0 24 24"className=" h-5 w-5 mr-2"xmlns=" http://www.w3.org/2000/svg"> <path d=" M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"fill=" #4285F4"/> <path d=" M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"fill=" #34A853"/> <path d=" M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"fill=" #FBBC05"/> <path d=" M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"fill=" #EA4335"/> </svg> Continue with Google </Button> <Button variant=" outline"className=" w-full py-6 relative"> <svg viewBox=" 0 0 24 24"className=" h-5 w-5 mr-2"xmlns=" http://www.w3.org/2000/svg"> <path d=" M24 12.073c0-5.8-4.85-10.5-10.826-10.5-6.02 0-10.93 4.7-10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v-7.318h-2.696v-3.041h2.696V9.898c0-2.586 1.581-4.016 4.003-4.016 1.159 0 2.37.204 2.37.204v2.543h-1.334c-1.316 0-1.727.8-1.727 1.622v1.95h2.938l-.47 3.04h-2.468v7.318C20.125 21.648 24 17.307 24 12.073z"fill=" #1877F2"/> </svg> Continue with Facebook </Button> </div> <div className=" relative flex items-center"> <div className=" flex-grow border-t border-border"></div> <span className=" mx-2 text-xs text-muted-foreground">OR</span> <div className=" flex-grow border-t border-border"></div> </div> <AlertDescription> {
  error 
}</AlertDescription> </Alert>) 
}<Input id=" name"name=" name"value= {
  formData.name 
}onChange= {
  handleInputChange 
}required placeholder=" Enter your full name"/> </div>) 
}<div className=" space-y-2"> <Label htmlFor=" email">Email address</Label> <Input required placeholder=" Enter your email"/> </div> <div className=" space-y-2"> <Label htmlFor=" password">Password</Label> <Input required placeholder=" Create a password" /> </div> <Button </Button> </p> </div>) 
}
}
}
;
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
