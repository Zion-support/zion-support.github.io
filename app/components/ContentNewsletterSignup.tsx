import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Star, Zap, Shield } from 'lucide-react';
const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
  const benefits = [
import { Mail, Send, CheckCircle } from 'lucide-react';
const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
export default ContentNewsletterSignup;
export default ContentNewsletterSignup;