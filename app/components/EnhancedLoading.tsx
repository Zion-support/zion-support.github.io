import React from 'react';
const EnhancedLoading: React.FC<LoadingProps>= ({ 
const EnhancedLoading: React.FC<LoadingProps> = ({
  const sizeClasses = {
  const textSizeClasses = {
  const renderSpinner = () => (<div className={`${sizeClasses[size]} border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin`} >);
  const renderDots = () => (<div className="flex space-x-1">{[0, 1, 2].map((i) => (<div
  const renderSpinner = () => (
  const renderDots = () => (
  const renderDots = () => (<div className="flex space-x-1">{[0, 1, 2].map((i) => (</div><div
  const renderPulse = () => (
  const renderSkeleton = () => (</div>
  const renderLoader = () => {
export default EnhancedLoading;