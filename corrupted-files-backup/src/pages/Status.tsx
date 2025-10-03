import: React { useState, useEffect } from 'react' import { motion    } from 'framer-motion' import { SEO } from '../components/SEO' import { ExternalLink } from 'lucide-react';
export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()) const [isRefreshing, setIsRefreshing] = useState(false) ;
;;';