<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Settings, Search, Star, TrendingUp, Users, Clock, CheckCircle, HelpCircle, Phone, Mail, MapPin, X, Home, BookOpen, FileText, MessageSquare, Calendar, DollarSign, Play } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Play } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowRight, ChevronDown, ChevronRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Settings, Search, Star, TrendingUp, Users, Clock, CheckCircle, HelpCircle, Phone, Mail, MapPin, X, Home, BookOpen, FileText, MessageSquare, Calendar, DollarSign, Play } from 'lucide-react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface ImprovedsidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedsidebar({ className = '', children, ...props }: ImprovedsidebarProps) {
  return (
    <div className={`improvedsidebar-component ${className}`} {...props}>
      {children}
    </div>
  );
};

