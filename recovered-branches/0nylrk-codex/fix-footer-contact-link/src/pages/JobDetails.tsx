
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import { Header  } from '@/components/
import { Footer  } from '@/components/
import { Button  } from '@/components/ui/
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/
import { Badge  } from '@/components/ui/
import { Calendar, Clock, DollarSign, Tag, Users, Briefcase  } from '@/components/
import { useAuth  } from '@/hooks/
import useJobDetails from '@/hooks/
import { ApplyToJobModal  } from '@/components/messaging/
import { SEO  } from '@/components/
import { useWhitelabel  } from '@/context/