import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Smartphone, CheckCircle, ExternalLink, Shield } from 'lucide-react';
export default function MDMPage() {
  const features = [
    'Zero-touch enrollment (Apple DEP/ABM, Android Zero-Touch)Device posture checks, compliance policies, and remediationApp management, OS updates, remote lock/wipe, geofencingIdentity integration (SAML/SCIM) and conditional accessKiosk/COPE/COBO support with granular restrictions']
  const pricing = [
    { tier: 'SMB (up to 100 devices)', range: '$300–$1,000/month', note: 'Based on device count and features' }
    { tier: 'Mid-market (100–1,000 devices)', range: '$1,000–$7,000/month', note: 'Advanced policies, integrations, support' }
    { tier: 'Enterprise (1,000+ devices)', range: 'Custom', note: 'SLA, multi-tenant, dedicated support' }]
  const references = [
    { name: 'Microsoft Intune pricing', url: 'https://www.microsoft.com/en-us/security/business/microsoft-intune/pricing' }
    { name: 'Jamf pricing', url: 'https://www.jamf.com/pricing/' }
    { name: 'VMware Workspace ONE pricing', url: 'https://www.vmware.com/products/workspace-one/pricing.html' }]

import React from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
import { Smartphone, CheckCircle, ExternalLink, Shield } from 'lucide-react',;
;
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { Smartphone, CheckCircle, ExternalLink, Shield } from 'lucide-react',
export default function MDMPage() {
  const features = [
    'Zero-touch enrollment (Apple DEP/ABM, Android Zero-Touch)Device posture checks, compliance policies, and remediationApp management, OS updates, remote lock/wipe, geofencingIdentity integration (SAML/SCIM) and conditional accessKiosk/COPE/COBO support with granular restrictions'],
=======
=======

export default function MDMPage() {
  const features = [
    'Zero-touch enrollment (Apple DEP/ABM, Android Zero-Touch)Device posture checks, compliance policies, and remediationApp management, OS updates, remote lock/wipe, geofencingIdentity integration (SAML/SCIM) and conditional accessKiosk/COPE/COBO support with granular restrictions'],
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const references = [
    { name: 'Microsoft Intune pricing', url: 'https://www.microsoft.com/en-us/security/business/microsoft-intune/pricing' },
    { name: 'Jamf pricing', url: 'https://www.jamf.com/pricing/' },
    { name: 'VMware Workspace ONE pricing', url: 'https://www.vmware.com/products/workspace-one/pricing.html' }],

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
