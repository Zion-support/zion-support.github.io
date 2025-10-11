import React, {useState}from 'react';
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react';

interface FormData {name: string,}
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';,
      message: string,
}

    e.preventDefault();
    setStatus( type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));

