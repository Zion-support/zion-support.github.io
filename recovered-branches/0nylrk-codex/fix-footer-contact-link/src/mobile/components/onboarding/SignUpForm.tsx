
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

=======
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("")

      }
    } catch (err: any) {
      set_error (err.message);
    } finally {
      setIsLoading (false);
    }
  };

  };
  const handleGoogleLogin = async () => {;
    try {;
      await loginWithGoogle();
    } catch (err: any) {;

=======
=======      setError(err && err.message);
    }
  };


=======
  };

  
        <Button 
          variant="outline" 


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

}
;
