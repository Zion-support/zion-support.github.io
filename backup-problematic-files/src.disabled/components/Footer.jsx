<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState } from';react' import { Link } from';';react-router-dom' import { motion } from';';framer-motion' import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from';';lucide-react' "export": function FooterNewsletter() { const [email,setEmail] = useState('';';) const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e.preventDefault() if (!email) return setIsLoading(true)'';
=======
import React,{ useState } from\';react\' import { Link } from\';\';react-router-dom\' import { motion } from\';\';framer-motion\' import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from\';\';lucide-react\' \"export\": function FooterNewsletter() { const [email,setEmail] = useState(\'';\';) const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e.preventDefault() if (!email) return setIsLoading(true)\'';
const React,{ useState } from";react" import { Link } from";";react-router-dom" import { motion } from";";framer-motion" import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from";";lucide-react" export: function FooterNewsletter() { const [email,setEmail] = useState("";";) const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e.preventDefault() if (!email) return setIsLoading(true)"";'"'"
import _React,{ useState } from';react' import { Link } from';';react-router-dom' import { motion } from';';framer-motion' import { Mail,Phone,MapPin,ArrowUp,Heart,CheckCircle,Send,Globe } from';';lucide-react' "export": function FooterNewsletter() { const [email,setEmail] = useState('';';) const [isSubscribed,setIsSubscribed] = useState(false) const [isLoading,setIsLoading] = useState(false) const handleSubscribe = async (e) => { e.preventDefault() if (!email) return setIsLoading(true)'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const Footer = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Footer</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
