
,
import React, { useState } from 'react' import { motion, AnimatePresence     } from 'framer-motionimport { Phone, Mail, MapPin, MessageSquare, Calendar, Clock, Globe, X, Copy, CheckCircle, ExternalLink     } from lucide-reactinterface EnhancedContactIntegrationProps {,
 onClose: () => void serviceTitle?: string,} export const EnhancedContactIntegration: Reac t.FC<EnhancedContactIntegrationProps> = ({ onClose, serviceTitle }) => { const [copiedField, setCopiedField] = useState<string | null>(null) const [activeTab, setActiveTab] = useState<contact| schedule' | 'support'>('contact')  const contactInfo = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', website: 'https:',
</contact>,
</string>,
</EnhancedContactIntegrationProps>,
}}