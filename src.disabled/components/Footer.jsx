
import _React,{ useState } from';react' import { Link } from';';react-router-dom' import { motion } from';';framer-motion' import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from';';lucide-react' "export": function FooterNewsletter() { const [email,setEmail] = useState('';';) const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e.preventDefault() if (!email) return setIsLoading(true)'';


=======
import _React,{ useState } from';react' import { Link } from';';react-router-dom' import { motion } from';';framer-motion' import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from';';lucide-react' "export": function FooterNewsletter() { const [email,setEmail] = useState('', ') const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e && e.preventDefault() if (!email) return setIsLoading(true)'';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/components/Footer.jsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
