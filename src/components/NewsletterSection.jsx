import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {  import { motion  } from 'framer-motion';
 from 'lucide-react';
;
export function NewsletterSection("props": "any) {;

  const [email", setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
;
  const handleSubmit = async e => {;

    e.preventDefault();
    setIsLoading(true);
;
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 1000));
;