import React from 'react';
interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
=======
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
>>>>>>> d86d082fc493e5b136e1baa1e02a40320c4cbc61
      {children}
    </div>
  );
}