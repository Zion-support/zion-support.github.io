import React from 'react',
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';
export default function IAMAccessReviewPage() {
export default function IAMAccessReviewPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/iam-access-review')
  );  if (!service) return null;export default function IAMAccessReviewPage() {
  const service = extraServices.find(s => s.link.endsWith('/iam-access-review'));
  if (!service) return null;

