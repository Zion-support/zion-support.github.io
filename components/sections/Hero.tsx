
import React from 'react',
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    text: string;


    href: string
  };
  secondaryAction?: {
    text: string;
    href: string
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string
  }>
}

const Hero: React.FC<HeroProps> = ({
  title;
  subtitle;
  primaryAction;
  secondaryAction;
  stats}) => {
  return (

    <section className;

