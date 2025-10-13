import React from 'react';
<<<<<<< HEAD
interface FuturistictextProps {
=======

interface FuturisticTextProps {
>>>>>>> cursor/fix-errors-and-merge-to-main-4df1
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD


export default function Futuristictext({ className = '', children }: FuturistictextProps) {
  return (
    <div className={className}>


export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>



export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>

=======
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
>>>>>>> cursor/fix-errors-and-merge-to-main-82b8
=======
export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
>>>>>>> cursor/fix-errors-and-merge-to-main-4df1
      {children}
    </div>
  );
}