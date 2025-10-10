import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Brain, Cpu, Shield, Star, TrendingUp, Users, Award } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);
  const promotions = [
import { X, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    const interval = setInterval(() => {
  const current = promotions[currentPromo];
  const handleClose = () => {
import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
export default ContentPromotionBanner;
export default ContentPromotionBanner;