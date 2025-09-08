
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
export function SignUpForm() {};
  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();
  const [formData, setFormData] = useState({"
    email: """
    password: """
    name: ""})
  const [isLoading, setIsLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(true);"
  const [error, setError] = useState("");"
import { AlertCircle } from "lucide-react","

import { Alert, AlertDescription } from "@/components/ui/alert",


export function SignUpForm() {}
  const navigate = useNavigate(),
  const { signup, login, loginWithGoogle } = useAuth(),
  
  const [formData, setFormData] = useState({"
    email: "","
    password: "","
    name: ""}),
  const [isLoading, setIsLoading] = useState(false),
  const [signupMode, setSignupMode] = useState(true),"
  const [error, setError] = useState(""),

    setError("")


    e.preventDefault();
    setError("");
    setIsLoading(true)


  return (
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium text-center">;
        {signupMode ? "Create your account" : "Welcome back"}


          </svg>
          Continue with Google
        </Button>


              placeholder="Enter your full name"
            />
          </div>
        )}


          <Input

            id="email"
            name="email"
            type="email"

            value={formData && formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"


          <Input
            id="password"
            name="password"
            type="password"


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



        }
        <Button"
          variant="link""
          className="p-0 h-auto"
          onClick={() => setSignupMode(!signupMode)}

        >;

;


;

          {signupMode ? "Sign In" : "Sign Up"}
;
;



