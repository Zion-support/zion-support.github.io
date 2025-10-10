import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Brain, Cpu, Shield, Zap, Target, BarChart, Users, Settings } from 'lucide-react';
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    const interval = setInterval(() => {
  const nextSlide = () => {
  const nextSlide = () => {
  const prevSlide = () => {
  const goToSlide = (index: number) => {
  const formatNumber = (num: number): string => {
export default ContentCarousel;
import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
const ContentCarousel: React.FC = () => {
  const testimonials = [
export default ContentCarousel;